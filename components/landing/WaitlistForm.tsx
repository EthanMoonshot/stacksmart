"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, companySize, companyName }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Something went wrong");
      }

      trackEvent("waitlist_signup", { companySize, hasCompanyName: Boolean(companyName) });
      setStatus("success");
      setEmail("");
      setCompanySize("");
      setCompanyName("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section id="waitlist" className="relative py-20 md:py-28">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        {status === "success" ? (
          <div className="rounded-2xl border border-success-500/30 bg-success-500/5 p-10">
            <div className="text-5xl mb-4" aria-hidden="true">🎉</div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">You&apos;re on the list!</h3>
            <p className="text-dark-400 mb-6">We&apos;ll reach out when your spot is ready.</p>
            <a
              href="/welcome"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-600"
            >
              Continue to welcome page
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        ) : (
          <>
            <h2 className="font-clash text-4xl md:text-5xl font-semibold text-white mb-4 tracking-[-0.02em]">
              Ready to find your savings?
            </h2>
            <p className="font-sans text-dark-400 text-lg mb-8">
              Free audit · Results in 24 hours · No credit card required
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto" noValidate>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label htmlFor="waitlist-email" className="sr-only">
                    Work email address
                  </label>
                  <input
                    id="waitlist-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-dark-700 bg-dark-800 px-5 py-4 text-white placeholder:text-dark-500 transition-colors focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                    aria-describedby={status === "error" ? "waitlist-error" : undefined}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading" || !email}
                  className="rounded-xl bg-brand-500 px-8 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                  aria-label={status === "loading" ? "Joining waitlist…" : "Audit my SaaS stack"}
                >
                  {status === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Joining...
                    </span>
                  ) : (
                    "Audit My Stack"
                  )}
                </button>
              </div>

              {status === "error" && (
                <div
                  id="waitlist-error"
                  role="alert"
                  className="mt-4 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400"
                >
                  {errorMsg}
                </div>
              )}
            </form>

            <p className="mt-5 font-sans text-sm text-dark-500">
              CSV upload only · No bank access · Data deleted after analysis
            </p>
          </>
        )}
      </div>
    </section>
  );
}
