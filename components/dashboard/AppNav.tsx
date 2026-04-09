import Link from "next/link";
import { getCurrentSubscription } from "@/lib/subscriptions";

const navItems = [
  { href: "/dashboard", label: "Overview" },
  { href: "/upload", label: "Upload & Audit" },
  { href: "/report", label: "Report" },
  { href: "/pricing", label: "Plan & Billing" },
];

export default async function AppNav() {
  const subscription = await getCurrentSubscription();

  return (
    <aside className="hidden min-h-screen w-72 flex-shrink-0 border-r border-dark-800 bg-dark-900 lg:flex lg:flex-col">
      <div className="border-b border-dark-800 px-7 py-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-500/30 bg-gradient-to-br from-brand-500/30 to-teal-500/20 text-base font-bold text-white">S</div>
          <div>
            <span className="block text-xl font-bold text-white">StackSmart</span>
            <span className="block text-xs text-dark-400">AI SaaS spend audit</span>
          </div>
        </Link>
      </div>

      <nav className="flex-1 space-y-2 px-4 py-5">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-xl px-4 py-3 text-base font-medium text-dark-200 transition hover:bg-dark-800 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="space-y-3 border-t border-dark-800 px-4 py-5">
        <div className="rounded-xl border border-dark-700 bg-dark-800 px-4 py-4">
          <div className="text-xs uppercase tracking-[0.2em] text-dark-500">Current plan</div>
          <div className="mt-2 text-base font-semibold text-white">{subscription?.planName || "Free workspace"}</div>
          <div className="mt-1 text-sm capitalize text-dark-400">
            {subscription?.status || "inactive"}
            {subscription?.billingInterval ? ` · ${subscription.billingInterval.replace("_", " ")}` : ""}
          </div>
        </div>
        <Link href="/pricing" className="block rounded-xl border border-brand-500/20 bg-brand-500/10 px-4 py-3 text-center text-base font-medium text-brand-300 hover:bg-brand-500/20">
          Manage plan
        </Link>
      </div>
    </aside>
  );
}
