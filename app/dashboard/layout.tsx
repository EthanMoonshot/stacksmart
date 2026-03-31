import Link from "next/link";
import AppNav from "@/components/dashboard/AppNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-dark-950 lg:flex">
      <AppNav />
      <main className="flex-1 overflow-auto">
        <div className="border-b border-dark-800 bg-dark-900/70 px-4 py-4 lg:hidden">
          <div className="flex items-center justify-between gap-3">
            <Link href="/" className="text-lg font-bold text-white">Distill</Link>
            <div className="flex gap-2 text-xs">
              <Link href="/dashboard" className="rounded-full border border-dark-700 px-3 py-1.5 text-dark-300">Dashboard</Link>
              <Link href="/pricing" className="rounded-full border border-dark-700 px-3 py-1.5 text-dark-300">Pricing</Link>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
