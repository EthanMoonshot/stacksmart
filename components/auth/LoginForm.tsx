"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginForm({
  next,
  initialEmail = "",
  initialCode = "",
}: {
  next: string;
  initialEmail?: string;
  initialCode?: string;
}) {
  const router = useRouter();
  const [email, setEmail] = useState(initialEmail);
  const [code, setCode] = useState(initialCode);
  const [requested, setRequested] = useState(Boolean(initialCode));
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [devCode, setDevCode] = useState<string | null>(null);

  async function requestCode(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);
    setDevCode(null);

    try {
      const res = await fetch("/api/auth/request-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Unable to send code.");
      setRequested(true);
      setMessage(data.message || "Check your email for a sign-in code.");
      if (data.devCode) {
        setDevCode(data.devCode);
        setCode(data.devCode);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send code.");
    } finally {
      setLoading(false);
    }
  }

  async function verifyCode(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Unable to verify code.");
      router.push(next);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to verify code.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-dark-950 px-4 py-12">
      <div className="w-full max-w-md rounded-3xl border border-dark-700 bg-dark-900/90 p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-400">StackSmart access</p>
          <h1 className="mt-3 text-3xl font-bold text-white">Sign in to your workspace</h1>
          <p className="mt-3 text-sm leading-6 text-dark-300">
            Use the same email you used at checkout. We&apos;ll send a one-time sign-in code — no fake demo auth, no password reset circus.
          </p>
        </div>

        {!requested ? (
          <form onSubmit={requestCode} className="space-y-4">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-dark-200">Work email</label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-dark-700 bg-dark-950 px-4 py-3 text-white focus:border-brand-500 focus:outline-none"
                placeholder="you@company.com"
              />
            </div>
            <button disabled={loading} className="btn-primary w-full justify-center text-sm">
              {loading ? "Sending code..." : "Email me a sign-in code"}
            </button>
          </form>
        ) : (
          <form onSubmit={verifyCode} className="space-y-4">
            <div>
              <label htmlFor="code" className="mb-2 block text-sm font-medium text-dark-200">6-digit code</label>
              <input
                id="code"
                inputMode="numeric"
                pattern="[0-9]{6}"
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full rounded-xl border border-dark-700 bg-dark-950 px-4 py-3 text-white focus:border-brand-500 focus:outline-none"
                placeholder="123456"
              />
            </div>
            <button disabled={loading} className="btn-primary w-full justify-center text-sm">
              {loading ? "Signing in..." : "Access workspace"}
            </button>
            <button type="button" onClick={() => setRequested(false)} className="w-full text-sm text-dark-400 hover:text-white">
              Use a different email
            </button>
          </form>
        )}

        {message && <p className="mt-4 text-sm text-green-400">{message}</p>}
        {devCode && <p className="mt-2 text-xs text-yellow-300">Dev code: {devCode}</p>}
        {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

        <div className="mt-8 border-t border-dark-800 pt-6 text-center text-sm text-dark-400">
          Need a plan first? <Link href="/pricing" className="text-brand-300 hover:text-brand-200">View pricing</Link>
        </div>
      </div>
    </main>
  );
}
