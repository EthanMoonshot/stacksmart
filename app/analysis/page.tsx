import Link from "next/link";
import AppHeader from "@/components/dashboard/AppHeader";
import { readLatestAnalysis } from "@/lib/analyzer";
import { AnalysisResult } from "@/lib/types";

const statusColors: Record<string, string> = {
  active: "text-green-400 bg-green-500/10 border-green-500/20",
  redundant: "text-red-400 bg-red-500/10 border-red-500/20",
  underused: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
};

function formatCurrency(value: number) {
  return `$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function sortTools(analysis: AnalysisResult, sortBy: string) {
  const tools = [...analysis.tools];

  if (sortBy === "category") {
    return tools.sort((a, b) => a.category.localeCompare(b.category) || b.monthlyCost - a.monthlyCost);
  }

  if (sortBy === "status") {
    const order = { redundant: 0, underused: 1, active: 2 } as const;
    return tools.sort((a, b) => order[a.status] - order[b.status] || b.monthlyCost - a.monthlyCost);
  }

  return tools.sort((a, b) => b.monthlyCost - a.monthlyCost);
}

export default async function AnalysisPage({
  searchParams,
}: {
  searchParams?: Promise<{ sort?: string }>;
}) {
  const params = (await searchParams) || {};
  const sortBy = params.sort || "cost";
  const analysis = await readLatestAnalysis();

  if (!analysis) {
    return (
      <div>
        <AppHeader title="Analysis Results" subtitle="No saved analysis yet" />
        <div className="card text-center py-16 border-dashed border-dark-700">
          <h2 className="text-xl font-bold text-white mb-2">Nothing to show yet</h2>
          <p className="text-dark-400 text-sm max-w-md mx-auto mb-6">
            Upload your billing data first, then StackSmart will generate an analysis with overlaps, spend, and savings recommendations.
          </p>
          <Link href="/upload" className="btn-primary">
            Upload Billing Data
          </Link>
        </div>
      </div>
    );
  }

  const sortedTools = sortTools(analysis, sortBy);

  return (
    <div>
      <AppHeader
        title="Analysis Results"
        subtitle={`Analysed ${new Date(analysis.analyzedAt).toLocaleString()} · Source: ${analysis.source}`}
        action={
          <Link href="/dashboard" className="btn-primary text-sm py-2 px-4">
            Back to Dashboard
          </Link>
        }
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Tools Detected", value: analysis.toolCount.toString(), color: "text-white" },
          { label: "Monthly Spend", value: formatCurrency(analysis.monthlySpend), color: "text-white" },
          { label: "Overlap Groups", value: analysis.overlaps.length.toString(), color: "text-red-400" },
          { label: "Potential Savings", value: `${formatCurrency(analysis.potentialAnnualSavings)}/yr`, color: "text-green-400" },
        ].map((stat) => (
          <div key={stat.label} className="card">
            <p className="text-dark-500 text-xs font-medium uppercase tracking-wider mb-2">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="card lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Spend by Category</h3>
            <span className="text-dark-500 text-xs">{analysis.categories.length} categories</span>
          </div>
          <div className="space-y-3">
            {analysis.categories.map((category) => {
              const pct = analysis.monthlySpend > 0 ? (category.monthlyCost / analysis.monthlySpend) * 100 : 0;
              return (
                <div key={category.category}>
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <span className="text-dark-200">{category.category}</span>
                    <span className="text-dark-400">{formatCurrency(category.monthlyCost)}/mo</span>
                  </div>
                  <div className="w-full bg-dark-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-brand-500 to-cyan-500 h-2 rounded-full transition-all"
                      style={{ width: `${Math.max(6, pct)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="card">
          <h3 className="text-white font-semibold mb-4">Recommendations</h3>
          <div className="space-y-3">
            {analysis.recommendations.slice(0, 4).map((recommendation) => (
              <div key={recommendation.id} className="rounded-lg border border-dark-800 bg-dark-900/70 p-4">
                <p className="text-white font-medium text-sm">{recommendation.title}</p>
                <p className="text-dark-400 text-xs mt-1">{recommendation.description}</p>
                <p className="text-green-400 text-sm mt-3">Save {formatCurrency(recommendation.monthlySavings)}/mo</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card mb-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-4">
          <div>
            <h3 className="text-white font-semibold">All Detected Tools</h3>
            <span className="text-dark-500 text-xs">Sortable by cost, category, or status</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Link href="/analysis?sort=cost" className={`px-3 py-1.5 rounded-full border ${sortBy === "cost" ? "border-brand-500 text-brand-300 bg-brand-500/10" : "border-dark-700 text-dark-400"}`}>
              Cost
            </Link>
            <Link href="/analysis?sort=category" className={`px-3 py-1.5 rounded-full border ${sortBy === "category" ? "border-brand-500 text-brand-300 bg-brand-500/10" : "border-dark-700 text-dark-400"}`}>
              Category
            </Link>
            <Link href="/analysis?sort=status" className={`px-3 py-1.5 rounded-full border ${sortBy === "status" ? "border-brand-500 text-brand-300 bg-brand-500/10" : "border-dark-700 text-dark-400"}`}>
              Status
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-800">
                <th className="text-left text-dark-500 font-medium text-xs uppercase tracking-wider pb-3">Tool</th>
                <th className="text-left text-dark-500 font-medium text-xs uppercase tracking-wider pb-3">Category</th>
                <th className="text-right text-dark-500 font-medium text-xs uppercase tracking-wider pb-3">Cost/mo</th>
                <th className="text-left text-dark-500 font-medium text-xs uppercase tracking-wider pb-3 pl-4">Status</th>
                <th className="text-left text-dark-500 font-medium text-xs uppercase tracking-wider pb-3">Overlap</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-900">
              {sortedTools.map((tool) => (
                <tr key={tool.id} className="group hover:bg-dark-900/50">
                  <td className="py-3 text-white font-medium">{tool.toolName}</td>
                  <td className="py-3 text-dark-400">{tool.category}</td>
                  <td className="py-3 text-right text-dark-200">{formatCurrency(tool.monthlyCost)}</td>
                  <td className="py-3 pl-4">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full border capitalize ${statusColors[tool.status]}`}>
                      {tool.status}
                    </span>
                  </td>
                  <td className="py-3">
                    {tool.overlapsWith.length > 0 ? (
                      <div className="space-y-1">
                        <p className="text-red-400 text-xs">{tool.overlapsWith.join(", ")}</p>
                        {tool.notes.map((note) => (
                          <p key={note} className="text-dark-600 text-xs">{note}</p>
                        ))}
                      </div>
                    ) : (
                      <span className="text-dark-700 text-xs">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
