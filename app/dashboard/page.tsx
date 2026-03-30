import Link from "next/link";
import AppHeader from "@/components/dashboard/AppHeader";
import { readLatestAnalysis } from "@/lib/analyzer";

function formatCurrency(value: number) {
  return `$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export default async function DashboardPage() {
  const analysis = await readLatestAnalysis();

  const stats = analysis
    ? [
        {
          label: "Total Monthly Spend",
          value: formatCurrency(analysis.monthlySpend),
          sub: `${formatCurrency(analysis.annualSpend)} annually`,
          color: "text-white",
        },
        {
          label: "Potential Savings",
          value: formatCurrency(analysis.potentialMonthlySavings),
          sub: `${formatCurrency(analysis.potentialAnnualSavings)} annually`,
          color: "text-green-400",
        },
        {
          label: "Tools Detected",
          value: analysis.toolCount.toString(),
          sub: `${analysis.recommendations.length} recommendations ready`,
          color: "text-white",
        },
        {
          label: "Recommendations",
          value: analysis.recommendations.length.toString(),
          sub: `${analysis.overlaps.length} overlap groups found`,
          color: "text-brand-400",
        },
      ]
    : [
        { label: "Total Monthly Spend", value: "—", sub: "No data yet", color: "text-white" },
        { label: "Potential Savings", value: "—", sub: "Upload data to calculate", color: "text-green-400" },
        { label: "Tools Detected", value: "—", sub: "No analyses run", color: "text-white" },
        { label: "Recommendations", value: "—", sub: "Run an analysis first", color: "text-brand-400" },
      ];

  return (
    <div>
      <AppHeader
        title="Dashboard"
        subtitle="Your SaaS stack overview"
        action={
          <Link href="/upload" className="btn-primary text-sm py-2 px-4">
            + New Analysis
          </Link>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="card">
            <p className="text-dark-500 text-xs font-medium uppercase tracking-wider mb-2">{stat.label}</p>
            <p className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</p>
            <p className="text-dark-600 text-xs">{stat.sub}</p>
          </div>
        ))}
      </div>

      {!analysis ? (
        <>
          <div className="card text-center py-20 border-dashed border-dark-700">
            <div className="w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">No analyses yet</h2>
            <p className="text-dark-400 text-sm max-w-md mx-auto mb-8">
              Upload your billing data to get started. StackSmart will analyse your SaaS stack and highlight savings opportunities in seconds.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/upload" className="btn-primary">
                Upload Billing Data
              </Link>
              <Link href="/report" className="btn-secondary text-sm">
                See a sample report
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="card lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white">Top savings opportunities</h2>
                <Link href="/analysis" className="text-brand-400 text-sm hover:text-brand-300">
                  View analysis →
                </Link>
              </div>
              <div className="space-y-3">
                {analysis.recommendations.slice(0, 3).map((recommendation) => (
                  <div key={recommendation.id} className="rounded-lg border border-dark-800 bg-dark-900/70 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-white font-medium">{recommendation.title}</p>
                        <p className="text-dark-400 text-sm mt-1">{recommendation.description}</p>
                        <p className="text-dark-500 text-xs mt-2">Affects: {recommendation.affectedTools.join(", ")}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 font-semibold">{formatCurrency(recommendation.monthlySavings)}/mo</p>
                        <p className="text-dark-500 text-xs">{formatCurrency(recommendation.annualSavings)}/yr</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h2 className="text-lg font-semibold text-white mb-4">Category spend</h2>
              <div className="space-y-4">
                {analysis.categories.slice(0, 5).map((category) => (
                  <div key={category.category}>
                    <div className="flex items-center justify-between text-sm mb-1.5">
                      <span className="text-dark-200">{category.category}</span>
                      <span className="text-dark-400">{formatCurrency(category.monthlyCost)}/mo</span>
                    </div>
                    <div className="w-full bg-dark-800 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-brand-500 to-cyan-500 h-2 rounded-full"
                        style={{ width: `${Math.max(8, (category.monthlyCost / analysis.monthlySpend) * 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Recent analysis snapshot</h2>
            <div className="card overflow-x-auto p-0">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-dark-800 text-dark-500 text-xs uppercase tracking-wider">
                    <th className="text-left p-4">Tool</th>
                    <th className="text-left p-4">Category</th>
                    <th className="text-right p-4">Monthly Cost</th>
                    <th className="text-left p-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {analysis.tools.slice(0, 6).map((tool) => (
                    <tr key={tool.id} className="border-b border-dark-800/50 hover:bg-dark-800/30">
                      <td className="p-4 text-white font-medium">{tool.toolName}</td>
                      <td className="p-4 text-dark-400">{tool.category}</td>
                      <td className="p-4 text-right text-white">{formatCurrency(tool.monthlyCost)}</td>
                      <td className="p-4">
                        <span className="text-xs capitalize px-2 py-0.5 rounded-full border border-dark-700 text-dark-300">
                          {tool.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
