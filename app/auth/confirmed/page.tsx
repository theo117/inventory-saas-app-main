import Link from "next/link";

export default function AuthConfirmedPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 px-6">
      <div className="max-w-md rounded-lg bg-white p-8 text-center shadow">
        <h1 className="text-2xl font-semibold text-zinc-900">
          Email confirmed
        </h1>
        <p className="mt-3 text-sm leading-6 text-zinc-600">
          Thanks for confirming your email address. Your account is now ready,
          and you can continue into the app.
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            href="/dashboard"
            className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700"
          >
            Go to dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
