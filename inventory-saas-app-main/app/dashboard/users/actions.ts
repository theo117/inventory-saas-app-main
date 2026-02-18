"use server"

import { getProfile } from "@/app/lib/get-profile"
import { revalidatePath } from "next/cache"
import { createClient } from "@supabase/supabase-js"

const ALLOWED_ROLES = new Set(["admin", "staff"])

function createSupabaseAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !serviceRoleKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY")
  }

  return createClient(url, serviceRoleKey)
}

export async function updateUserRole(formData: FormData) {
  const supabase = createSupabaseAdminClient()
  const me = await getProfile()
  if (!me || me.role !== "admin") throw new Error("Not allowed")

  const userId = String(formData.get("userId") ?? "")
  const role = String(formData.get("role") ?? "")

  if (!userId || !ALLOWED_ROLES.has(role)) {
    throw new Error("Invalid role update")
  }

  if (userId === me.id && role !== "admin") {
    throw new Error("Cannot demote your own admin account")
  }

  const { data: targetUser, error: targetError } = await supabase
    .from("profiles")
    .select("id, role")
    .eq("id", userId)
    .maybeSingle<{ id: string; role: string }>()

  if (targetError) {
    throw new Error(`Unable to read target user: ${targetError.message}`)
  }

  if (!targetUser) {
    throw new Error("Target user not found or not visible by policy")
  }

  const { data: updatedRow, error: updateError } = await supabase
    .from("profiles")
    .update({ role })
    .eq("id", userId)
    .select("id")
    .maybeSingle()

  if (updateError) {
    throw new Error(`Role update failed: ${updateError.message}`)
  }

  if (!updatedRow) {
    throw new Error("Role update affected 0 rows. Check profiles UPDATE policy (RLS).")
  }

  const { error: auditError } = await supabase.from("audit_logs").insert({
    actor_id: me.id,
    action: "UPDATED_USER_ROLE",
    target: `${userId}:${role}`,
  })

  if (auditError) {
    throw new Error(`Audit log failed: ${auditError.message}`)
  }

  revalidatePath("/dashboard/users")
}

export async function promoteUser(userId: string) {
  const supabase = createSupabaseAdminClient()
  const me = await getProfile()
  if (!me || me.role !== "admin") throw new Error("Not allowed")
  if (userId === me.id) throw new Error("Cannot change your own role")

  const { error: updateError } = await supabase
    .from("profiles")
    .update({ role: "admin" })
    .eq("id", userId)

  if (updateError) {
    throw new Error(`Promote failed: ${updateError.message}`)
  }

  const { error: auditError } = await supabase.from("audit_logs").insert({
    actor_id: me.id,
    action: "PROMOTED_USER",
    target: userId,
  })

  if (auditError) {
    throw new Error(`Audit log failed: ${auditError.message}`)
  }

  revalidatePath("/dashboard/users")
}

export async function demoteUser(userId: string) {
  const supabase = createSupabaseAdminClient()
  const me = await getProfile()
  if (!me || me.role !== "admin") throw new Error("Not allowed")
  if (userId === me.id) throw new Error("Cannot change your own role")

  const { error: updateError } = await supabase
    .from("profiles")
    .update({ role: "staff" })
    .eq("id", userId)

  if (updateError) {
    throw new Error(`Demote failed: ${updateError.message}`)
  }

  const { error: auditError } = await supabase.from("audit_logs").insert({
    actor_id: me.id,
    action: "DEMOTED_USER",
    target: userId,
  })

  if (auditError) {
    throw new Error(`Audit log failed: ${auditError.message}`)
  }

  revalidatePath("/dashboard/users")
}
