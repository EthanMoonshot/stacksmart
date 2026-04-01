import type { Metadata } from "next";
import Link from "next/link";
import AppHeader from "@/components/dashboard/AppHeader";
import { readLatestAnalysis } from "@/lib/analyzer";
import { getCurrentSubscription } from "@/lib/subscriptions";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Dashboard",
  description: "Track current SaaS spend, recommendations, and StackSmart plan status.",
  path: "/dashboard",
});

function formatCurrency(value: number) {
  return `$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export default async function DashboardPage() {
  const [analysis, subscription] = await Promise.all([readLatestAnalysis(), getCurrentSubscription()]);

  const topRecommendations = analysis?.recommendations.slice(0, 3) || [];
  const savingsShare = analysis && analysis.monthlySpend > 0
    ? Math.round((analysis.potentialMonthlySavings / analysis.monthlySpend) * 100)
    : 0;

  return (
    <div className="space-y-8">
      <AppHeader
        title="Dashboard"
        subtitle="See current spend, likely savings, and what to do next without digging through raw billing exports."
        action={
          <div className="flex flex-wrap gap-3">
            <Link href="/pricing" className="btn-secondary px-4 py-2 text-sm">Manage plan</Link>
            <Link href="/upload" className="btn-primary px-4 py-2 text-sm">Run new audit</Link>
          </div>
        }
      />

      <section className="rounded-[28px] border border-dark-700 bg-dark-900/80 p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-dark-400">Workspace overview</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
              {analysis
                ? `Your stack is still carrying recoverable spend.`
                : "No audit yet — which means no clear savings map yet."}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              {analysis
                ? `StackSmart sees ${analysis.toolCount} tools with ${analysis.overlaps.length} overlap groups. The current sample report suggests ${formatCurrency(analysis.potentialMonthlySavings)}/month in likely savings if you act on the strongest recommendations first.`
                : "Upload billing data to generate the first report. The product is strongest when it can turn real billing rows into a cut / consolidate / renegotiate decision list."}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {analysis
                ? [
                    ["Monthly spend", formatCurrency(analysis.monthlySpend), `${formatCurrency(analysis.annualSpend)} annually`],
                    ["Likely savings", formatCurrency(analysis.potentialMonthlySavings), `${savingsShare}% of current spend`],
                    ["Action-ready items", `${analysis.recommendations.length}`, "Recommendations in current report"],
                  ]
                : [
                    ["Monthly spend", "—", "No report yet"],
                    ["Likely savings", "—", "Run a first audit to calculate"],
                    ["Action-ready items", "0", "Waiting on your first upload"],
                  ]
              .map(([label, value, note]) => (
                <div key={label} className="rounded-2xl border border-dark-700 bg-dark-950/70 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-dark-400">{label}</p>
                  <p className="mt-2 text-2xl font-bold text-white">{value}</p>
                  <p className="mt-1 text-xs text-dark-400">{note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-success-500/20 bg-success-900/20 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-success-500">Current operating posture</p>
            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-dark-700 bg-dark-950/60 p-4">
                <p className="text-sm text-dark-300">Plan</p>
                <p className="mt-1 text-2xl font-semibold text-white">{subscription?.planName || "Free workspace"}</p>
                <p className="mt-1 text-xs capitalize text-dark-400">{subscription?.status || "inactive"} · {subscription?.billingInterval?.replace("_", " ") || "no active billing"}</p>
              </div>
              <div className="rounded-2xl border border-dark-700 bg-dark-950/60 p-4">
                <p className="text-sm text-dark-300">Best next move</p>
                <p className="mt-1 text-lg font-semibold text-white">{analysis ? "Review the savings report and action the first two items." : "Finish onboarding and upload billing data."}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href={analysis ? "/report" : "/welcome"} className="btn-primary text-sm">
                  {analysis ? "Open report" : "Start onboarding"}
                </Link>
                <Link href="/pricing" className="btn-secondary text-sm">
                  View plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="card lg:col-span-2">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-white">Priority recommendations</h2>
              <p className="mt-1 text-sm text-dark-400">The first actions an ops or finance owner should review.</p>
            </div>
            {analysis && <Link href="/report" className="text-sm text-brand-300 hover:text-brand-200">Open report →</Link>}
          </div>

          {!analysis ? (
            <div className="mt-6 rounded-[24px] border border-dashed border-dark-700 py-16 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-500/20 bg-brand-500/10">
                <svg className="h-8 w-8 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white">No analyses yet</h3>
              <p className="mx-auto mt-2 max-w-md text-sm text-dark-400">Upload billing data to generate your first report and turn raw spend into a clear action queue.</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/upload" className="btn-primary">Upload billing data</Link>
                <Link href="/welcome" className="btn-secondary text-sm">See onboarding</Link>
              </div>
            </div>
          ) : (
            <div className="mt-6 space-y-3">
              {topRecommendations.map((recommendation) => (
                <div key={recommendation.id} className="rounded-[22px] border border-dark-700 bg-dark-950/70 p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="font-medium text-white">{recommendation.title}</p>
                      <p className="mt-2 text-sm leading-6 text-dark-300">{recommendation.description}</p>
                      <p className="mt-2 text-xs text-dark-400">Affects: {recommendation.affectedTools.join(", ")}</p>
                    </div>
                    <div className="min-w-[110px] text-left sm:text-right">
                      <p className="font-mono text-lg font-semibold text-success-500">{formatCurrency(recommendation.monthlySavings)}/mo</p>
                      <p className="text-xs text-dark-400">{formatCurrency(recommendation.annualSavings)}/yr</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold text-white">How StackSmart works best</h2>
          <div className="mt-5 space-y-3 text-sm text-dark-300">
            {[
              "Upload billing exports or invoice data",
              "Review the cut / consolidate / renegotiate lanes",
              "Act on the biggest savings before chasing minor clean-up",
              "Repeat monthly if your stack changes often",
            ].map((item, idx) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-dark-700 bg-dark-950/70 p-4">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-xs font-semibold text-brand-300">{idx + 1}</div>
                <p className="leading-6">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {analysis && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="card lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-white">Category spend</h2>
                <p className="mt-1 text-sm text-dark-400">Where your software budget is concentrated today.</p>
              </div>
            </div>
            <div className="space-y-4">
              {analysis.categories.slice(0, 5).map((category) => (
                <div key={category.category}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="text-dark-100">{category.category}</span>
                    <span className="font-mono text-dark-300">{formatCurrency(category.monthlyCost)}/mo</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-dark-950">
                    <div className="h-3 rounded-full bg-gradient-to-r from-brand-500 via-teal-500 to-success-500" style={{ width: `${Math.max(8, (category.monthlyCost / analysis.monthlySpend) * 100)}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h2 className="text-lg font-semibold text-white">Trust notes</h2>
            <div className="mt-5 space-y-3 text-sm text-dark-300">
              {[
                "CSV-first setup keeps intake straightforward.",
                "No direct bank access is required for the core workflow.",
                "Best used as a decision layer for finance, ops, or founders.",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-dark-700 bg-dark-950/70 p-4">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
