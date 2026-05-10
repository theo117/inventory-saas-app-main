"use server"

import { revalidatePath } from "next/cache"
import { createSupabaseServerClient } from "@/app/lib/supabase-server"
import { getProfile } from "@/app/lib/get-profile"

function revalidateInventoryViews() {
  revalidatePath("/dashboard")
  revalidatePath("/dashboard/items")
}

function requireItemName(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim()
  if (!name) {
    throw new Error("Item name is required")
  }

  return name
}

function requireQuantity(formData: FormData) {
  const quantity = Number(formData.get("quantity"))
  if (!Number.isFinite(quantity) || quantity < 0) {
    throw new Error("Quantity must be zero or greater")
  }

  return Math.floor(quantity)
}

function requireItemId(formData: FormData) {
  const id = Number(formData.get("id"))
  if (!Number.isInteger(id) || id <= 0) {
    throw new Error("Valid item id is required")
  }

  return id
}

export async function getItems() {
  const supabase = await createSupabaseServerClient()
  const me = await getProfile()
  if (!me) throw new Error("Not authenticated")

  const { data } = await supabase
    .from("items")
    .select("*")
    .eq("user_id", me.id)
    .order("created_at", { ascending: false })

  return data
}

export async function addItem(formData: FormData) {
  const supabase = await createSupabaseServerClient()
  const me = await getProfile()
  if (!me) throw new Error("Not authenticated")

  const name = requireItemName(formData)
  const quantity = requireQuantity(formData)

  await supabase.from("items").insert({
    user_id: me.id,
    name,
    quantity,
  })

  await supabase.from("audit_logs").insert({
    actor_id: me.id,
    action: "ADDED_ITEM",
    target: name,
  })

  revalidateInventoryViews()
}

function parseCsvRows(text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let cell = ""
  let inQuotes = false

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i]
    const next = text[i + 1]

    if (char === '"') {
      if (inQuotes && next === '"') {
        cell += '"'
        i += 1
      } else {
        inQuotes = !inQuotes
      }
      continue
    }

    if (char === "," && !inQuotes) {
      row.push(cell)
      cell = ""
      continue
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") i += 1
      row.push(cell)
      rows.push(row)
      row = []
      cell = ""
      continue
    }

    cell += char
  }

  if (cell.length > 0 || row.length > 0) {
    row.push(cell)
    rows.push(row)
  }

  return rows
}

export async function importItems(formData: FormData) {
  const supabase = await createSupabaseServerClient()
  const me = await getProfile()
  if (!me) throw new Error("Not authenticated")

  const file = formData.get("csvFile")
  if (
    !file ||
    typeof file !== "object" ||
    !("text" in file) ||
    !("size" in file) ||
    typeof file.text !== "function" ||
    typeof file.size !== "number" ||
    file.size === 0
  ) {
    throw new Error("CSV file is required")
  }

  const csvFile = file as { text: () => Promise<string>; size: number }
  const text = await csvFile.text()
  const rows = parseCsvRows(text).filter((row) => row.some((cell) => cell.trim() !== ""))
  if (rows.length < 2) throw new Error("CSV must include a header and at least one row")

  const header = rows[0].map((h) => h.trim().toLowerCase())
  const nameIndex = header.indexOf("name")
  const quantityIndex = header.indexOf("quantity")
  if (nameIndex === -1 || quantityIndex === -1) {
    throw new Error("CSV must contain name and quantity columns")
  }

  const inserts = rows
    .slice(1)
    .map((row) => {
      const name = (row[nameIndex] ?? "").trim()
      const quantity = Number(row[quantityIndex] ?? "")
      if (!name || !Number.isFinite(quantity) || quantity < 0) return null
      return { user_id: me.id, name, quantity }
    })
    .filter((entry): entry is { user_id: string; name: string; quantity: number } => entry !== null)

  if (!inserts.length) {
    throw new Error("No valid rows found in CSV")
  }

  await supabase.from("items").insert(inserts)

  await supabase.from("audit_logs").insert({
    actor_id: me.id,
    action: "IMPORTED_ITEMS",
    target: `${inserts.length} rows`,
  })

  revalidateInventoryViews()
}

export async function deleteItem(formData: FormData) {
  const supabase = await createSupabaseServerClient()
  const me = await getProfile()

  if (!me || me.role !== "admin") {
    throw new Error("Not allowed")
  }

  const id = requireItemId(formData)

  const { data: item } = await supabase
    .from("items")
    .select("name")
    .eq("id", id)
    .eq("user_id", me.id)
    .single<{ name: string }>()

  await supabase.from("items").delete().eq("id", id).eq("user_id", me.id)

  await supabase.from("audit_logs").insert({
    actor_id: me.id,
    action: "DELETED_ITEM",
    target: item?.name ?? `Item ${id}`,
  })

  revalidateInventoryViews()
}

export async function updateItem(formData: FormData) {
  const supabase = await createSupabaseServerClient()
  const me = await getProfile()

  if (!me) throw new Error("Not authenticated")

  const id = requireItemId(formData)
  const name = requireItemName(formData)
  const quantity = requireQuantity(formData)

  await supabase
    .from("items")
    .update({ name, quantity })
    .eq("id", id)
    .eq("user_id", me.id)

  await supabase.from("audit_logs").insert({
    actor_id: me.id,
    action: "UPDATED_ITEM",
    target: name,
  })

  revalidateInventoryViews()
}
