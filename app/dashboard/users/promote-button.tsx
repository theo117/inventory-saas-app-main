"use client"

import { promoteUser } from "./actions"
import { useTransition } from "react"

export default function PromoteButton({ userId }: { userId: string }) {
  const [isPending, startTransition] = useTransition()

  return (
    <button
      onClick={() => startTransition(() => promoteUser(userId))}
      disabled={isPending}
      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500"
    >
      {isPending ? "Promoting..." : "Promote"}
    </button>
  )
}
