import { getProfile } from "@/app/lib/get-profile"
import { redirect } from "next/navigation"
import { updateUserRole } from "./actions"
import { createClient } from "@supabase/supabase-js"

type User = {
  id: string
  email: string
  role: string
}

export default async function UsersPage() {
  const me = await getProfile()

  if (!me || me.role !== "admin") redirect("/dashboard")

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !serviceRoleKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY")
  }
  const supabase = createClient(url, serviceRoleKey)

  const { data } = await supabase
    .from("profiles")
    .select("id, email, role")
    .order("email")

  const users = data as User[] | null

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">User Management</h1>

      <div className="space-y-2">
        {users?.map((user) => (
          <div
            key={user.id}
            className="flex justify-between items-center border p-3 rounded"
          >
            <div>
              <div className="font-medium">{user.email}</div>
              <div className="text-sm text-zinc-500">{user.role}</div>
            </div>

            <div className="flex gap-2">
              {user.id === me.id ? (
                <span className="text-xs text-zinc-500 self-center">
                  You
                </span>
              ) : (
                <form action={updateUserRole} className="flex items-center gap-2">
                  <input type="hidden" name="userId" value={user.id} />
                  <select
                    name="role"
                    defaultValue={user.role}
                    className="rounded border px-2 py-1 text-sm"
                  >
                    <option value="staff">staff</option>
                    <option value="admin">admin</option>
                  </select>
                  <button className="rounded bg-zinc-900 px-3 py-1 text-sm text-white hover:bg-zinc-700">
                    Save
                  </button>
                </form>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
