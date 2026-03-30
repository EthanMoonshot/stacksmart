"use client";

import { useEffect } from "react";
import Link from "next/link";
import { captureException } from "@/lib/sentry";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    captureException(error, { digest: error.digest, source: "app/global-error" });
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-dark-950 px-4 py-12 text-dark-50">
        <div className="w-full max-w-xl rounded-3xl border border-red-500/20 bg-dark-900 p-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-red-300">Application error</p>
          <h1 className="mt-4 text-3xl font-bold text-white">Something broke on our side</h1>
          <p className="mt-4 text-sm text-dark-300">
            The error was captured for follow-up. Try again, or head back to a safe page.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button onClick={() => reset()} className="btn-primary text-sm">Try again</button>
            <Link href="/" className="btn-secondary text-sm">Home</Link>
          </div>
        </div>
      </body>
    </html>
  );
}
