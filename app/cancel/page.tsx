import Link from "next/link";

export default async function CancelPage({
  searchParams,
}: {
  searchParams?: Promise<{ plan?: string }>;
}) {
  const params = (await searchParams) || {};

  return (
    <main className="flex min-h-screen items-center justify-center bg-dark-950 px-4 py-12">
      <div className="w-full max-w-2xl rounded-3xl border border-yellow-500/20 bg-dark-900 p-8 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-400">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <h1 className="text-3xl font-bold text-white">Checkout canceled</h1>
        <p className="mt-4 text-dark-400">
          No charge was made. {params.plan ? `Your selected plan (${params.plan}) is still available whenever you’re ready.` : "You can restart checkout any time."}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/pricing" className="btn-primary text-sm">Back to pricing</Link>
          <Link href="/dashboard" className="btn-secondary text-sm">Return to dashboard</Link>
        </div>
      </div>
    </main>
  );
}
