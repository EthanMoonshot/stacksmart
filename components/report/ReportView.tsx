import Link from "next/link";
import { ReportViewModel } from "@/lib/report";

function formatCurrency(value: number) {
  return `$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

const priorityClasses: Record<string, string> = {
  high: "text-red-400 bg-red-500/10 border-red-500/20",
  medium: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  low: "text-green-400 bg-green-500/10 border-green-500/20",
};

export default function ReportView({ model, shared = false }: { model: ReportViewModel; shared?: boolean }) {
  const { analysis, prioritizedRecommendations, quickWins, highestSavings } = model;

  return (
    <div id="report-content" className="space-y-8">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total tools", value: analysis.toolCount.toString(), accent: "text-white" },
          { label: "Monthly spend", value: formatCurrency(analysis.monthlySpend), accent: "text-white" },
          { label: "Potential savings", value: formatCurrency(model.monthlyProjection), accent: "text-green-400" },
          { label: "ROI", value: `${model.roiPercentage.toFixed(0)}%`, accent: "text-brand-300" },
        ].map((item) => (
          <div key={item.label} className="card">
            <p className="text-dark-500 text-xs uppercase tracking-wider mb-2">{item.label}</p>
            <p className={`text-2xl font-bold ${item.accent}`}>{item.value}</p>
          </div>
        ))}
      </section>

      <section className="card">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div>
            <p className="text-dark-400 text-sm mb-2">Executive summary</p>
            <h2 className="text-3xl font-bold text-white mb-3">Prioritise the biggest savings first, then clean up overlap.</h2>
            <p className="text-dark-300 max-w-3xl text-sm leading-6">
              StackSmart analysed {analysis.toolCount} tools with total spend of {formatCurrency(analysis.monthlySpend)}/month.
              The current stack shows {analysis.overlaps.length} overlap groups and {model.recommendationCount} actionable recommendations,
              with projected savings of {formatCurrency(model.monthlyProjection)}/month, {formatCurrency(model.annualProjection)}/year,
              and {formatCurrency(model.threeYearProjection)} over three years.
            </p>
          </div>
          <div className="rounded-xl border border-green-500/20 bg-green-500/10 px-5 py-4 min-w-[240px]">
            <p className="text-green-300 text-sm">Savings projection</p>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between gap-8"><span className="text-dark-400">Monthly</span><span className="text-white font-semibold">{formatCurrency(model.monthlyProjection)}</span></div>
              <div className="flex justify-between gap-8"><span className="text-dark-400">Annual</span><span className="text-white font-semibold">{formatCurrency(model.annualProjection)}</span></div>
              <div className="flex justify-between gap-8"><span className="text-dark-400">3-year</span><span className="text-white font-semibold">{formatCurrency(model.threeYearProjection)}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-3 gap-6">
        <div className="card lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Category breakdown</h3>
            <span className="text-dark-500 text-xs">Spend by category</span>
          </div>
          <div className="space-y-4">
            {analysis.categories.map((category) => {
              const pct = analysis.monthlySpend > 0 ? (category.monthlyCost / analysis.monthlySpend) * 100 : 0;
              return (
                <div key={category.category}>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <div>
                      <p className="text-white">{category.category}</p>
                      <p className="text-dark-500 text-xs">{category.toolCount} tools</p>
                    </div>
                    <p className="text-dark-300">{formatCurrency(category.monthlyCost)}/mo</p>
                  </div>
                  <div className="w-full bg-dark-800 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-brand-500 to-cyan-500 h-full rounded-full" style={{ width: `${Math.max(pct, 6)}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="card">
          <h3 className="text-white font-semibold mb-4">Quick wins</h3>
          <div className="space-y-3">
            {quickWins.map((item) => (
              <div key={item.id} className="rounded-lg border border-dark-800 bg-dark-900/60 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-white text-sm font-medium">{item.title}</p>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full border capitalize ${priorityClasses[item.priority || "low"]}`}>{item.priority}</span>
                </div>
                <p className="text-dark-400 text-xs mt-2">{item.effortLevel} effort · Save {formatCurrency(item.monthlySavings)}/mo</p>
              </div>
            ))}
          </div>

          <h3 className="text-white font-semibold mt-6 mb-4">Highest savings</h3>
          <div className="space-y-3">
            {highestSavings.map((item) => (
              <div key={item.id} className="rounded-lg border border-dark-800 bg-dark-900/60 p-4">
                <p className="text-white text-sm font-medium">{item.title}</p>
                <p className="text-green-400 text-sm mt-2">{formatCurrency(item.monthlySavings)}/mo</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="card">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-white font-semibold">Prioritized recommendations</h3>
            <p className="text-dark-500 text-xs mt-1">Sorted by highest monthly savings first</p>
          </div>
          <span className="text-dark-500 text-xs">{prioritizedRecommendations.length} actions</span>
        </div>

        <div className="space-y-4">
          {prioritizedRecommendations.map((rec, idx) => (
            <div key={rec.id} className="rounded-xl border border-dark-800 bg-dark-900/70 p-5">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex gap-4 flex-1">
                  <div className="w-8 h-8 rounded-lg bg-dark-800 border border-dark-700 flex items-center justify-center text-dark-400 font-bold text-sm flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-white font-semibold">{rec.title}</h4>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full border capitalize ${priorityClasses[rec.priority || "low"]}`}>{rec.priority}</span>
                    </div>
                    <p className="text-dark-300 text-sm mt-2 leading-6">{rec.description}</p>
                    <div className="grid md:grid-cols-2 gap-3 mt-4 text-sm">
                      <div className="rounded-lg border border-dark-800 p-3 bg-dark-950/50">
                        <p className="text-dark-500 text-xs uppercase tracking-wider mb-1">Current</p>
                        <p className="text-white font-medium">{rec.currentTool || rec.affectedTools.join(", ")}</p>
                        {typeof rec.currentMonthlyCost === "number" && <p className="text-dark-400 text-xs mt-1">{formatCurrency(rec.currentMonthlyCost)}/mo</p>}
                      </div>
                      <div className="rounded-lg border border-dark-800 p-3 bg-dark-950/50">
                        <p className="text-dark-500 text-xs uppercase tracking-wider mb-1">Alternative</p>
                        <p className="text-white font-medium">{rec.alternative || "Usage review / right-size"}</p>
                        {typeof rec.alternativeMonthlyCost === "number" && <p className="text-dark-400 text-xs mt-1">{formatCurrency(rec.alternativeMonthlyCost)}/mo</p>}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-3 mt-4 text-xs">
                      <div>
                        <p className="text-dark-500 uppercase tracking-wider mb-1">Savings</p>
                        <p className="text-green-400">{formatCurrency(rec.monthlySavings)}/mo · {formatCurrency(rec.annualSavings)}/yr</p>
                      </div>
                      <div>
                        <p className="text-dark-500 uppercase tracking-wider mb-1">Effort</p>
                        <p className="text-dark-300">{rec.effortLevel || "Medium"}</p>
                      </div>
                      <div>
                        <p className="text-dark-500 uppercase tracking-wider mb-1">Affected tools</p>
                        <p className="text-dark-300">{rec.affectedTools.join(", ")}</p>
                      </div>
                    </div>
                    <div className="mt-4 rounded-lg border border-dark-800 bg-dark-950/50 p-3">
                      <p className="text-dark-500 text-xs uppercase tracking-wider mb-1">Migration notes</p>
                      <p className="text-dark-300 text-sm leading-6">{rec.migrationNotes || rec.whyBetterForSmbs || "Validate usage and stakeholder owners before renewal."}</p>
                    </div>
                  </div>
                </div>
                <div className="text-left lg:text-right min-w-[140px]">
                  <p className="text-green-400 text-xl font-bold">+{formatCurrency(rec.monthlySavings)}</p>
                  <p className="text-dark-500 text-xs">per month</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {!shared && (
        <div className="text-center">
          <Link href="/dashboard" className="text-dark-500 hover:text-dark-300 text-sm underline">
            ← Back to Dashboard
          </Link>
        </div>
      )}
    </div>
  );
}
