"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

type Props = {
  location: string;
  heading: string;
  body: string;
  buttonLabel?: string;
  successMessage?: string;
  className?: string;
};

export default function InlineLeadCapture({
  location,
  heading,
  body,
  buttonLabel = "Email me the sample report",
  successMessage = "Sample report link sent. Check your inbox.",
  className = "",
}: Props) {
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
        body: JSON.stringify({
          type: "welcome",
          email: trimmed,
          location,
          pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
          referrer: typeof document !== "undefined" ? document.referrer || undefined : undefined,
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data?.message || "Unable to send the sample report link.");

      trackEvent("waitlist_signup", { location, source: "inline_lead_capture" });
      setStatus("success");
      setMessage(successMessage);
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send the sample report link.");
    }
  }

  return (
    <div className={`rounded-[24px] border border-brand-500/20 bg-gradient-to-br from-brand-500/10 via-dark-900 to-dark-950 p-6 shadow-[0_20px_60px_rgba(59,130,246,0.08)] ${className}`}>
      <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Free proof asset</p>
      <h2 className="mt-3 text-2xl font-semibold text-white">{heading}</h2>
      <p className="mt-3 text-sm leading-7 text-dark-300">{body}</p>

      <form className="mt-5 flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full rounded-xl border border-dark-700 bg-dark-950 px-4 py-3 text-white placeholder:text-dark-500 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
        />
        <button type="submit" disabled={status === "submitting"} className="btn-primary whitespace-nowrap text-sm">
          {status === "submitting" ? "Sending..." : buttonLabel}
        </button>
      </form>

      {message && <p className={`mt-3 text-sm ${status === "error" ? "text-red-400" : "text-green-400"}`}>{message}</p>}
    </div>
  );
}
