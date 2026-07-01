"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (signInError) {
      setError("Could not sign in — check your email and password.");
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-sm rounded-md border border-line bg-panel p-8">
        <p className="font-mono text-sm text-amber">$ admin login</p>
        <h1 className="mt-2 font-display text-2xl font-semibold text-paper">
          Sign in
        </h1>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="font-mono text-xs text-muted">
              email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="focus-ring mt-1 w-full rounded-sm border border-line bg-ink px-3 py-2 text-paper"
            />
          </div>

          <div>
            <label htmlFor="password" className="font-mono text-xs text-muted">
              password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="focus-ring mt-1 w-full rounded-sm border border-line bg-ink px-3 py-2 text-paper"
            />
          </div>

          {error && (
            <p className="font-mono text-xs text-red-400" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="focus-ring w-full rounded-sm bg-amber px-4 py-2.5 font-mono text-sm font-medium text-ink transition-opacity disabled:opacity-60"
          >
            {loading ? "signing in…" : "sign in"}
          </button>
        </form>

        <p className="mt-6 text-center font-mono text-xs text-muted">
          <a href="/" className="hover:text-amber">
            ← back to portfolio
          </a>
        </p>
      </div>
    </main>
  );
}
