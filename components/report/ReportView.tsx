import Link from "next/link";
import { ReportViewModel } from "@/lib/report";
import { Recommendation } from "@/lib/types";

function formatCurrency(value: number) {
  return `$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

const priorityClasses: Record<string, string> = {
  high: "text-red-300 bg-red-500/10 border-red-500/20",
  medium: "text-warning-500 bg-warning-500/10 border-warning-500/20",
  low: "text-success-500 bg-success-500/10 border-success-500/20",
};

const laneClasses: Record<string, string> = {
  cut: "border-success-500/20 bg-success-900/20 text-success-500",
  consolidate: "border-warning-500/20 bg-warning-900/20 text-warning-500",
  renegotiate: "border-brand-500/20 bg-brand-900/40 text-brand-300",
  keep: "border-dark-700 bg-dark-900 text-dark-200",
};

function getLane(rec: Recommendation): "cut" | "consolidate" | "renegotiate" | "keep" {
  if (rec.type === "consolidate") return "consolidate";
  if (rec.type === "switch") return rec.monthlySavings >= 40 ? "cut" : "renegotiate";
  if (rec.type === "review") return rec.monthlySavings >= 20 ? "renegotiate" : "keep";
  return "keep";
}

const laneColorMap: Record<string, { border: string; badge: string; count: string; dot: string }> = {
  Cut: {
    border: "border-success-500/25",
    badge: "border-success-500/20 bg-success-500/10 text-success-500",
    count: "text-success-500",
    dot: "bg-success-500",
  },
  Consolidate: {
    border: "border-warning-500/25",
    badge: "border-warning-500/20 bg-warning-500/10 text-warning-500",
    count: "text-warning-500",
    dot: "bg-warning-500",
  },
  Renegotiate: {
    border: "border-brand-500/25",
    badge: "border-brand-500/20 bg-brand-500/10 text-brand-300",
    count: "text-brand-300",
    dot: "bg-brand-400",
  },
  Keep: {
    border: "border-dark-600",
    badge: "border-dark-600 bg-dark-800 text-dark-300",
    count: "text-dark-300",
    dot: "bg-dark-500",
  },
};

function LaneCard({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: Recommendation[];
}) {
  const colors = laneColorMap[title] ?? laneColorMap["Keep"];

  return (
    <div className={`rounded-[28px] border ${colors.border} bg-dark-900/80 p-7`}>
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className={`w-2.5 h-2.5 rounded-full ${colors.dot} flex-shrink-0 mt-1`} />
          <div>
            <h3 className="text-xl font-bold text-white font-display">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-dark-300 max-w-[220px]">{description}</p>
          </div>
        </div>
        <div className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold flex-shrink-0 ${colors.badge}`}>
          {items.length}
        </div>
      </div>

      {/* Items */}
      <div className="space-y-4">
        {items.length === 0 ? (
          <div className="rounded-2xl border border-dark-700/60 bg-dark-950/60 px-5 py-5 text-base text-dark-400">
            No actions in this lane.
          </div>
        ) : (
          items.slice(0, 3).map((item) => (
            <div key={item.id} className="rounded-2xl border border-dark-700/70 bg-dark-950/70 p-5">
              <div className="flex items-center justify-between gap-3 mb-2">
                <p className="font-semibold text-white text-base">{item.title}</p>
                <p className="font-mono text-base font-semibold text-success-500 flex-shrink-0">{formatCurrency(item.monthlySavings)}/mo</p>
              </div>
              <p className="text-sm leading-relaxed text-dark-300">{item.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default function ReportView({ model, shared = false }: { model: ReportViewModel; shared?: boolean }) {
  const { analysis, prioritizedRecommendations, quickWins, highestSavings } = model;
  const cutItems = prioritizedRecommendations.filter((rec) => getLane(rec) === "cut");
  const consolidateItems = prioritizedRecommendations.filter((rec) => getLane(rec) === "consolidate");
  const renegotiateItems = prioritizedRecommendations.filter((rec) => getLane(rec) === "renegotiate");
  const keepItems = prioritizedRecommendations.filter((rec) => getLane(rec) === "keep");

  return (
    <div id="report-content" className="space-y-8">
      <section className="rounded-[28px] border border-dark-700 bg-dark-900/80 p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-dark-400">Executive summary</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">This stack has meaningful savings upside — but most of it comes from a few decisive moves.</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              Distill analysed {analysis.toolCount} tools with total spend of {formatCurrency(analysis.monthlySpend)}/month. The current stack shows {analysis.overlaps.length} overlap groups and {model.recommendationCount} actionable recommendations. If the team executes the strongest moves first, projected savings are {formatCurrency(model.monthlyProjection)}/month and {formatCurrency(model.annualProjection)}/year.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ["Top priority", prioritizedRecommendations[0]?.title || "No current action", "Move on the highest-impact item first"],
                ["Most crowded lane", consolidateItems.length >= cutItems.length ? "Consolidate" : "Cut", "Where the biggest overlap sits"],
                ["Decision style", "Operator-ready", "Built for finance / ops follow-through"],
              ].map(([label, value, note]) => (
                <div key={label} className="rounded-2xl border border-dark-700 bg-dark-950/70 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-dark-400">{label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{value}</p>
                  <p className="mt-1 text-xs text-dark-400">{note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-success-500/20 bg-success-900/20 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-success-500">Savings projection</p>
            <div className="mt-5 space-y-4">
              {[
                ["Monthly", formatCurrency(model.monthlyProjection)],
                ["Annual", formatCurrency(model.annualProjection)],
                ["Three-year", formatCurrency(model.threeYearProjection)],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-6 border-b border-success-500/10 pb-3 last:border-b-0 last:pb-0">
                  <span className="text-sm text-dark-200">{label}</span>
                  <span className="font-mono text-xl font-semibold text-white">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-dark-700 bg-dark-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">ROI against current spend</p>
              <p className="mt-2 text-3xl font-bold text-white">{model.roiPercentage.toFixed(0)}%</p>
              <p className="mt-1 text-sm text-dark-300">Share of current monthly spend that looks realistically recoverable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { label: "Total tools", value: analysis.toolCount.toString(), accent: "text-white" },
          { label: "Monthly spend", value: formatCurrency(analysis.monthlySpend), accent: "font-mono text-white" },
          { label: "Potential savings", value: formatCurrency(model.monthlyProjection), accent: "font-mono text-success-500" },
          { label: "Action lanes", value: `${cutItems.length + consolidateItems.length + renegotiateItems.length}`, accent: "text-brand-300" },
        ].map((item) => (
          <div key={item.label} className="card">
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-dark-400">{item.label}</p>
            <p className={`text-2xl font-bold ${item.accent}`}>{item.value}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-4">
        <LaneCard title="Cut" description="Likely waste or redundant cost that can probably be removed." items={cutItems} />
        <LaneCard title="Consolidate" description="Tools doing overlapping jobs that should be collapsed." items={consolidateItems} />
        <LaneCard title="Renegotiate" description="Keep the capability, but improve pricing or right-size the plan." items={renegotiateItems} />
        <LaneCard title="Keep" description="Tools that still look defensible relative to value delivered." items={keepItems} />
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="card lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-white">Category breakdown</h3>
              <p className="mt-1 text-xs text-dark-400">Where the current stack is concentrated</p>
            </div>
            <span className="text-xs text-dark-400">Spend by category</span>
          </div>
          <div className="space-y-4">
            {analysis.categories.map((category) => {
              const pct = analysis.monthlySpend > 0 ? (category.monthlyCost / analysis.monthlySpend) * 100 : 0;
              return (
                <div key={category.category}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <div>
                      <p className="text-white">{category.category}</p>
                      <p className="text-xs text-dark-400">{category.toolCount} tools</p>
                    </div>
                    <p className="font-mono text-dark-200">{formatCurrency(category.monthlyCost)}/mo</p>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-dark-950">
                    <div className="h-full rounded-full bg-gradient-to-r from-brand-500 via-teal-500 to-success-500" style={{ width: `${Math.max(pct, 6)}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="card">
          <h3 className="font-semibold text-white">Fastest wins</h3>
          <div className="mt-4 space-y-3">
            {quickWins.map((item) => (
              <div key={item.id} className="rounded-2xl border border-dark-700 bg-dark-950/70 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <span className={`rounded-full border px-2 py-0.5 text-[11px] font-medium capitalize ${priorityClasses[item.priority || "low"]}`}>{item.priority}</span>
                </div>
                <p className="mt-2 text-xs text-dark-400">{item.effortLevel} effort · Save {formatCurrency(item.monthlySavings)}/mo</p>
              </div>
            ))}
          </div>

          <h3 className="mt-6 font-semibold text-white">Highest savings</h3>
          <div className="mt-4 space-y-3">
            {highestSavings.map((item) => (
              <div key={item.id} className="rounded-2xl border border-dark-700 bg-dark-950/70 p-4">
                <p className="text-sm font-medium text-white">{item.title}</p>
                <p className="mt-2 font-mono text-sm text-success-500">{formatCurrency(item.monthlySavings)}/mo</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="card">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-white">Prioritised recommendations</h3>
            <p className="mt-1 text-xs text-dark-400">Sorted by highest monthly savings first</p>
          </div>
          <span className="text-xs text-dark-400">{prioritizedRecommendations.length} actions</span>
        </div>

        <div className="mt-5 space-y-4">
          {prioritizedRecommendations.map((rec, idx) => {
            const lane = getLane(rec);
            return (
              <div key={rec.id} className="rounded-[24px] border border-dark-700 bg-dark-950/70 p-5">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex flex-1 gap-4">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-dark-700 bg-dark-900 text-sm font-semibold text-dark-200">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-semibold text-white">{rec.title}</h4>
                        <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${laneClasses[lane]}`}>{lane}</span>
                        <span className={`rounded-full border px-2 py-0.5 text-[11px] font-medium capitalize ${priorityClasses[rec.priority || "low"]}`}>{rec.priority}</span>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-dark-300">{rec.description}</p>
                      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                        <div className="rounded-2xl border border-dark-700 bg-dark-900/60 p-3">
                          <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Current</p>
                          <p className="mt-2 text-sm font-medium text-white">{rec.currentTool || rec.affectedTools.join(", ")}</p>
                          {typeof rec.currentMonthlyCost === "number" && <p className="mt-1 font-mono text-xs text-dark-300">{formatCurrency(rec.currentMonthlyCost)}/mo</p>}
                        </div>
                        <div className="rounded-2xl border border-dark-700 bg-dark-900/60 p-3">
                          <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Alternative</p>
                          <p className="mt-2 text-sm font-medium text-white">{rec.alternative || "Usage review / right-size"}</p>
                          {typeof rec.alternativeMonthlyCost === "number" && <p className="mt-1 font-mono text-xs text-dark-300">{formatCurrency(rec.alternativeMonthlyCost)}/mo</p>}
                        </div>
                        <div className="rounded-2xl border border-dark-700 bg-dark-900/60 p-3">
                          <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Savings</p>
                          <p className="mt-2 font-mono text-sm font-semibold text-success-500">{formatCurrency(rec.monthlySavings)}/mo</p>
                          <p className="mt-1 text-xs text-dark-300">{formatCurrency(rec.annualSavings)}/yr</p>
                        </div>
                        <div className="rounded-2xl border border-dark-700 bg-dark-900/60 p-3">
                          <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Effort</p>
                          <p className="mt-2 text-sm font-medium text-white">{rec.effortLevel || "Medium"}</p>
                          <p className="mt-1 text-xs text-dark-300">Affected: {rec.affectedTools.join(", ")}</p>
                        </div>
                      </div>
                      <div className="mt-4 rounded-2xl border border-dark-700 bg-dark-900/60 p-4">
                        <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Implementation notes</p>
                        <p className="mt-2 text-sm leading-7 text-dark-300">{rec.migrationNotes || rec.whyBetterForSmbs || "Validate usage and stakeholder owners before renewal."}</p>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-[140px] text-left lg:text-right">
                    <p className="font-mono text-2xl font-bold text-success-500">+{formatCurrency(rec.monthlySavings)}</p>
                    <p className="text-xs text-dark-400">per month</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {!shared && (
        <div className="text-center">
          <Link href="/dashboard" className="text-sm text-dark-400 underline hover:text-dark-200">
            ← Back to Dashboard
          </Link>
        </div>
      )}
    </div>
  );
}
