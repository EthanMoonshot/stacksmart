import Link from "next/link";
import { getCurrentSubscription } from "@/lib/subscriptions";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/upload", label: "Upload Data" },
  { href: "/analysis", label: "Analysis" },
  { href: "/report", label: "Reports" },
  { href: "/pricing", label: "Pricing" },
  { href: "/welcome", label: "Onboarding" },
];

export default async function AppNav() {
  const subscription = await getCurrentSubscription();

  return (
    <aside className="hidden min-h-screen w-64 flex-shrink-0 border-r border-dark-800 bg-dark-900 lg:flex lg:flex-col">
      <div className="border-b border-dark-800 px-6 py-5">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-cyan-500 text-sm font-bold text-white">S</div>
          <span className="text-lg font-bold text-white">StackSmart</span>
        </Link>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-dark-300 transition hover:bg-dark-800 hover:text-white">
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="space-y-3 border-t border-dark-800 px-3 py-4">
        <div className="rounded-lg border border-dark-700 bg-dark-800 px-3 py-3">
          <div className="text-xs uppercase tracking-[0.2em] text-dark-500">Current plan</div>
          <div className="mt-2 text-sm font-semibold text-white">{subscription?.planName || "Free"}</div>
          <div className="mt-1 text-xs capitalize text-dark-400">{subscription?.status || "inactive"}</div>
        </div>
        <Link href="/pricing" className="block rounded-lg border border-brand-500/20 bg-brand-500/10 px-3 py-2 text-center text-sm font-medium text-brand-300 hover:bg-brand-500/20">
          Upgrade or downgrade
        </Link>
      </div>
    </aside>
  );
}
