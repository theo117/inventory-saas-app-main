import { NextResponse } from "next/server"
import { createSupabaseServerClient } from "@/app/lib/supabase-server"
import type { EmailOtpType } from "@supabase/supabase-js"

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get("code")
  const tokenHash = searchParams.get("token_hash")
  const type = searchParams.get("type") as EmailOtpType | null
  const nextParam = searchParams.get("next")
  const isEmailConfirmation =
    type === "signup" ||
    type === "invite" ||
    Boolean(tokenHash && type)
  const fallbackNext = isEmailConfirmation ? "/auth/confirmed" : "/dashboard"
  const next = nextParam && nextParam.startsWith("/") ? nextParam : fallbackNext

  const supabase = await createSupabaseServerClient()

  if (code) {
    await supabase.auth.exchangeCodeForSession(code)
  } else if (tokenHash && type) {
    await supabase.auth.verifyOtp({
      type,
      token_hash: tokenHash,
    })
  }

  return NextResponse.redirect(new URL(next, origin))
}
