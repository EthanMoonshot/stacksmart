"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import EventTracker from "@/components/analytics/EventTracker";

export default function CheckoutSuccessCard({ sessionId }: { sessionId?: string }) {
  const router = useRouter();
  const [status, setStatus] = useState<"loading" | "done" | "error">(sessionId ? "loading" : "error");
  const [message, setMessage] = useState("Finalising your workspace access...");

  useEffect(() => {
    if (!sessionId) {
      setStatus("error");
      setMessage("Missing checkout session. Sign in with your purchase email to access your workspace.");
      return;
    }

    const run = async () => {
      try {
        const res = await fetch("/api/auth/from-checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Unable to finalise access.");
        setStatus("done");
        setMessage(`Payment confirmed. ${data.email} is now signed in.`);
        setTimeout(() => {
          router.push("/dashboard");
          router.refresh();
        }, 1200);
      } catch (err) {
        setStatus("error");
        setMessage(err instanceof Error ? err.message : "Unable to finalise access.");
      }
    };

    run();
  }, [router, sessionId]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-dark-950 px-4 py-12">
      <EventTracker event="checkout_started" props={{ status: "completed" }} />
      <div className="w-full max-w-2xl rounded-3xl border border-green-500/20 bg-dark-900 p-8 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-400">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h1 className="text-3xl font-bold text-white">Payment successful</h1>
        <p className="mt-4 text-dark-300">{message}</p>
        {status === "loading" && <p className="mt-3 text-sm text-brand-300">Please wait a moment…</p>}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/dashboard" className="btn-primary text-sm">Go to dashboard</Link>
          <Link href="/login?next=/dashboard" className="btn-secondary text-sm">Sign in manually</Link>
        </div>
      </div>
    </main>
  );
}
