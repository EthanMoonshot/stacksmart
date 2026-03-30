import Link from "next/link";
import AppHeader from "@/components/dashboard/AppHeader";
import { readLatestAnalysis } from "@/lib/analyzer";
import { getCurrentSubscription } from "@/lib/subscriptions";

function formatCurrency(value: number) {
  return `$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export default async function DashboardPage() {
  const [analysis, subscription] = await Promise.all([readLatestAnalysis(), getCurrentSubscription()]);

  const stats = analysis
    ? [
        { label: "Total Monthly Spend", value: formatCurrency(analysis.monthlySpend), sub: `${formatCurrency(analysis.annualSpend)} annually`, color: "text-white" },
        { label: "Potential Savings", value: formatCurrency(analysis.potentialMonthlySavings), sub: `${formatCurrency(analysis.potentialAnnualSavings)} annually`, color: "text-green-400" },
        { label: "Tools Detected", value: analysis.toolCount.toString(), sub: `${analysis.recommendations.length} recommendations ready`, color: "text-white" },
        { label: "Plan", value: subscription?.planName || "Free", sub: subscription ? `${subscription.status} · ${subscription.billingInterval.replace("_", " ")}` : "Upgrade for ongoing monitoring", color: "text-brand-400" },
      ]
    : [
        { label: "Total Monthly Spend", value: "—", sub: "No data yet", color: "text-white" },
        { label: "Potential Savings", value: "—", sub: "Upload data to calculate", color: "text-green-400" },
        { label: "Tools Detected", value: "—", sub: "No analyses run", color: "text-white" },
        { label: "Plan", value: subscription?.planName || "Free", sub: subscription ? `${subscription.status} · ${subscription.billingInterval.replace("_", " ")}` : "Choose a plan to unlock billing flows", color: "text-brand-400" },
      ];

  return (
    <div className="space-y-8">
      <AppHeader
        title="Dashboard"
        subtitle="Your SaaS stack overview, active plan, and next actions in one place."
        action={
          <div className="flex flex-wrap gap-3">
            <Link href="/pricing" className="btn-secondary px-4 py-2 text-sm">Manage plan</Link>
            <Link href="/upload" className="btn-primary px-4 py-2 text-sm">+ New Analysis</Link>
          </div>
        }
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="card">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-dark-500">{stat.label}</p>
            <p className={`mb-1 text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-xs text-dark-600">{stat.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="card lg:col-span-2">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-white">Subscription status</h2>
              <p className="mt-1 text-sm text-dark-400">Upgrade, downgrade, or validate the current test-mode billing flow.</p>
            </div>
            <Link href="/pricing" className="text-sm text-brand-400 hover:text-brand-300">Open pricing →</Link>
          </div>
          <div className="mt-6 rounded-2xl border border-dark-800 bg-dark-950 p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-dark-500">Current plan</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{subscription?.planName || "Free workspace"}</h3>
                <p className="mt-2 text-sm capitalize text-dark-400">{subscription?.status || "inactive"} · {subscription?.billingInterval?.replace("_", " ") || "no active billing"}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/pricing" className="btn-primary px-4 py-2 text-sm">Upgrade / downgrade</Link>
                <Link href="/welcome" className="btn-secondary px-4 py-2 text-sm">Finish onboarding</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold text-white">Onboarding</h2>
          <p className="mt-2 text-sm text-dark-400">New to StackSmart? Follow the 3-step setup flow and skip it anytime.</p>
          <div className="mt-6 space-y-3 text-sm text-dark-300">
            <div className="rounded-xl border border-dark-800 bg-dark-950 p-3">1. Upload your data</div>
            <div className="rounded-xl border border-dark-800 bg-dark-950 p-3">2. See your analysis</div>
            <div className="rounded-xl border border-dark-800 bg-dark-950 p-3">3. Get your report</div>
          </div>
          <Link href="/welcome" className="btn-secondary mt-6 inline-block px-4 py-2 text-sm">Start onboarding</Link>
        </div>
      </div>

      {!analysis ? (
        <div className="card border-dashed border-dark-700 py-20 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10">
            <svg className="h-8 w-8 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          </div>
          <h2 className="text-xl font-bold text-white">No analyses yet</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-dark-400">Upload your billing data to generate your first analysis and report in a couple of clicks.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/upload" className="btn-primary">Upload Billing Data</Link>
            <Link href="/welcome" className="btn-secondary text-sm">See onboarding</Link>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="card lg:col-span-2">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Top savings opportunities</h2>
                <Link href="/analysis" className="text-sm text-brand-400 hover:text-brand-300">View analysis →</Link>
              </div>
              <div className="space-y-3">
                {analysis.recommendations.slice(0, 3).map((recommendation) => (
                  <div key={recommendation.id} className="rounded-lg border border-dark-800 bg-dark-900/70 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium text-white">{recommendation.title}</p>
                        <p className="mt-1 text-sm text-dark-400">{recommendation.description}</p>
                        <p className="mt-2 text-xs text-dark-500">Affects: {recommendation.affectedTools.join(", ")}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-400">{formatCurrency(recommendation.monthlySavings)}/mo</p>
                        <p className="text-xs text-dark-500">{formatCurrency(recommendation.annualSavings)}/yr</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h2 className="mb-4 text-lg font-semibold text-white">Category spend</h2>
              <div className="space-y-4">
                {analysis.categories.slice(0, 5).map((category) => (
                  <div key={category.category}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-dark-200">{category.category}</span>
                      <span className="text-dark-400">{formatCurrency(category.monthlyCost)}/mo</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-dark-800">
                      <div className="h-2 rounded-full bg-gradient-to-r from-brand-500 to-cyan-500" style={{ width: `${Math.max(8, (category.monthlyCost / analysis.monthlySpend) * 100)}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
