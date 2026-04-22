"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabase-browser";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setErrorMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    router.replace("/dashboard");
  }

  async function handleSignup() {
    setErrorMessage("");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    if (!data.session) {
      setErrorMessage("Account created. Check your email to confirm.");
      return;
    }

    router.replace("/dashboard");
  }


  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100">
      <div className="bg-white p-8 rounded shadow flex flex-col gap-4">


        <h1 className="text-xl font-semibold">Login</h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            className="border p-2 w-full"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="border p-2 w-full"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {errorMessage ? (
            <p className="text-sm text-red-600">{errorMessage}</p>
          ) : null}

          <button type="submit" className="bg-black text-white w-full py-2">
            Login
          </button>
        </form>

       <button
  type="button"
  onClick={handleSignup}
  className="mt-4 w-full bg-blue-600 text-white py-2 rounded"
>
  Sign up
</button>


      </div>
    </div>
  );
}
