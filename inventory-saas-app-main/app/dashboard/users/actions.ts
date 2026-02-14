"use server"

import { createSupabaseServerClient } from "@/app/lib/supabase-server"
import { getProfile } from "@/app/lib/get-profile"

export async function promoteUser(userId: string) {
  const supabase = await createSupabaseServerClient()
  const me = await getProfile()
  if (!me || me.role !== "admin") throw new Error("Not allowed")
  if (userId === me.id) throw new Error("Cannot change your own role")

  await supabase.from("profiles").update({ role: "admin" }).eq("id", userId)

  await supabase.from("audit_logs").insert({
    actor_id: me.id,
    action: "PROMOTED_USER",
    target: userId,
  })
}

export async function demoteUser(userId: string) {
  const supabase = await createSupabaseServerClient()
  const me = await getProfile()
  if (!me || me.role !== "admin") throw new Error("Not allowed")
  if (userId === me.id) throw new Error("Cannot change your own role")

  await supabase.from("profiles").update({ role: "staff" }).eq("id", userId)

  await supabase.from("audit_logs").insert({
    actor_id: me.id,
    action: "DEMOTED_USER",
    target: userId,
  })
}
