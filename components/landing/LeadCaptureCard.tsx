"use client";

import { useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export default function LeadCaptureCard() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();

    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus("error");
      setMessage("Enter a valid work email.");
      return;
    }

    setStatus("submitting");
    setMessage(null);

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "welcome", email: trimmed }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data?.message || "Unable to send the sample report link.");
      }

      trackEvent("waitlist_signup", { location: "lead_capture_card", source: "homepage" });
      setStatus("success");
      setMessage("Sample report link sent. You can also open it now below.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send the sample report link.");
    }
  }

  return (
    <section className="border-y border-dark-800/80 bg-dark-950/80 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-[28px] border border-brand-500/20 bg-gradient-to-br from-brand-500/10 via-dark-900 to-dark-950 p-8 shadow-[0_30px_80px_rgba(59,130,246,0.08)] lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-brand-300">Free proof asset</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Get the sample savings report in your inbox, then run your own stack when ready.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-dark-300">
              This is the lightest-weight lead capture path. See the output first, keep the link, and come back when you want to upload billing data or buy Snapshot.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-dark-300">
              <span className="rounded-full border border-dark-700 bg-dark-900/70 px-3 py-1.5">No credit card</span>
              <span className="rounded-full border border-dark-700 bg-dark-900/70 px-3 py-1.5">No bank access</span>
              <span className="rounded-full border border-dark-700 bg-dark-900/70 px-3 py-1.5">Real sample report</span>
            </div>
          </div>

          <div className="rounded-[24px] border border-dark-700 bg-dark-900/85 p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="lead-email" className="mb-2 block text-sm font-medium text-dark-200">
                  Work email
                </label>
                <input
                  id="lead-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-dark-700 bg-dark-950 px-4 py-3 text-white placeholder:text-dark-500 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                />
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-primary w-full text-sm"
              >
                {status === "submitting" ? "Sending..." : "Email me the sample report"}
              </button>
            </form>

            {message && (
              <p className={`mt-3 text-sm ${status === "error" ? "text-red-400" : "text-green-400"}`}>
                {message}
              </p>
            )}

            <div className="mt-5 border-t border-dark-800 pt-5">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Prefer to see it immediately?</p>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/demo"
                  className="btn-secondary text-sm"
                  onClick={() => trackEvent("homepage_cta_clicked", { target: "demo", location: "lead_capture_card" })}
                >
                  Open sample report
                </Link>
                <Link
                  href="/pricing"
                  className="btn-secondary text-sm"
                  onClick={() => trackEvent("homepage_cta_clicked", { target: "pricing", location: "lead_capture_card" })}
                >
                  View pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
