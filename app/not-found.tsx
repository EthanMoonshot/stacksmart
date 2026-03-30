import Link from "next/link";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Page Not Found",
  description: "The page you were looking for does not exist.",
});

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-dark-950 px-4 py-12">
      <div className="w-full max-w-xl rounded-3xl border border-dark-800 bg-dark-900 p-8 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-400">404 error</p>
        <h1 className="mt-4 text-4xl font-bold text-white">Lost in the stack</h1>
        <p className="mt-4 text-dark-400">
          The page you requested doesn&apos;t exist, moved, or was never shipped.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary text-sm">Back home</Link>
          <Link href="/dashboard" className="btn-secondary text-sm">Open dashboard</Link>
        </div>
      </div>
    </main>
  );
}
