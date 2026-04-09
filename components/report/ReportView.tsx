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

// Icon per lane — reinforces colour with shape for accessibility
const laneIcons: Record<string, React.ReactNode> = {
  cut: (
    <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  consolidate: (
    <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  renegotiate: (
    <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  keep: (
    <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  ),
};

// Icon per effort level
const effortIcons: Record<string, React.ReactNode> = {
  high: (
    <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  ),
  medium: (
    <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
  low: (
    <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  ),
};

function getLane(rec: Recommendation): "cut" | "consolidate" | "renegotiate" | "keep" {
  if (rec.type === "consolidate") return "consolidate";
  if (rec.type === "switch") return rec.monthlySavings >= 40 ? "cut" : "renegotiate";
  if (rec.type === "review") return rec.monthlySavings >= 20 ? "renegotiate" : "keep";
  return "keep";
}

const laneColorMap: Record<string, { border: string; badge: string; count: string; dot: string; glow: string }> = {
  Cut: {
    border: "border-success-500/25",
    badge: "border-success-500/20 bg-success-500/10 text-success-500",
    count: "text-success-500",
    dot: "bg-success-500",
    glow: "shadow-success-500/10",
  },
  Consolidate: {
    border: "border-warning-500/25",
    badge: "border-warning-500/20 bg-warning-500/10 text-warning-500",
    count: "text-warning-500",
    dot: "bg-warning-500",
    glow: "shadow-warning-500/10",
  },
  Renegotiate: {
    border: "border-brand-500/25",
    badge: "border-brand-500/20 bg-brand-500/10 text-brand-300",
    count: "text-brand-300",
    dot: "bg-brand-400",
    glow: "shadow-brand-500/10",
  },
  Keep: {
    border: "border-dark-600",
    badge: "border-dark-600 bg-dark-800 text-dark-300",
    count: "text-dark-300",
    dot: "bg-dark-500",
    glow: "shadow-dark-900/30",
  },
};

const laneIconsUpper: Record<string, React.ReactNode> = {
  Cut: laneIcons.cut,
  Consolidate: laneIcons.consolidate,
  Renegotiate: laneIcons.renegotiate,
  Keep: laneIcons.keep,
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
    <div className={`rounded-[28px] border ${colors.border} bg-dark-900/80 p-6 md:p-8 shadow-xl ${colors.glow}`}>
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-7">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${colors.dot} flex-shrink-0 mt-1`} aria-hidden="true" />
          <div>
            <h3 className="text-2xl font-bold text-white font-display">{title}</h3>
            <p className="mt-2 text-base leading-relaxed text-dark-300 font-sans max-w-[240px]">{description}</p>
          </div>
        </div>
        <div
          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-semibold flex-shrink-0 ${colors.badge}`}
          aria-label={`${items.length} items`}
        >
          {laneIconsUpper[title]}
          {items.length}
        </div>
      </div>

      {/* Items */}
      <div className="space-y-4">
        {items.length === 0 ? (
          <div className="rounded-2xl border border-dark-700/60 bg-dark-950/60 px-6 py-6 text-base text-dark-400 font-sans">
            No actions in this lane.
          </div>
        ) : (
          items.slice(0, 3).map((item) => (
            <div key={item.id} className="rounded-2xl border border-dark-700/70 bg-dark-950/70 p-5 md:p-6 shadow-md">
              <div className="mb-3 flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
                <p className="pr-0 text-base font-semibold leading-7 text-white font-display lg:pr-4">{item.title}</p>
                <p className="font-mono text-2xl font-bold text-success-500 flex-shrink-0">
                  {formatCurrency(item.monthlySavings)}/mo
                </p>
              </div>
              <p className="text-base leading-8 text-dark-300 font-sans">{item.description}</p>
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
    <div id="report-content" className="space-y-10">
      {/* Executive Summary — hero section with gradient */}
      <section
        className="relative overflow-hidden rounded-[28px] border border-dark-700 bg-gradient-to-br from-dark-800 via-dark-900 to-dark-950 p-6 md:p-10 xl:p-12 shadow-2xl"
        aria-labelledby="exec-summary-heading"
      >
        {/* Subtle radial glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-success-500/5 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-brand-500/5 blur-3xl" aria-hidden="true" />

        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-dark-400 font-sans">Executive summary</p>
            <h2
              id="exec-summary-heading"
              className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl xl:text-[2.8rem]"
            >
              This stack has meaningful savings upside — but most of it comes from a few decisive
              moves.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-7 text-dark-300 md:text-lg md:leading-8 font-sans">
              StackSmart analysed {analysis.toolCount} tools with total spend of{" "}
              <span className="font-mono font-bold text-white">{formatCurrency(analysis.monthlySpend)}/month</span>. The current stack shows{" "}
              {analysis.overlaps.length} overlap groups and {model.recommendationCount} actionable
              recommendations. If the team executes the strongest moves first, projected savings are{" "}
              <span className="font-mono font-bold text-success-400">{formatCurrency(model.monthlyProjection)}/month</span> and{" "}
              <span className="font-mono font-bold text-success-400">{formatCurrency(model.annualProjection)}/year</span>.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                [
                  "Top priority",
                  prioritizedRecommendations[0]?.title || "No current action",
                  "Move on the highest-impact item first",
                ],
                [
                  "Most crowded lane",
                  consolidateItems.length >= cutItems.length ? "Consolidate" : "Cut",
                  "Where the biggest overlap sits",
                ],
                ["Decision style", "Operator-ready", "Built for finance / ops follow-through"],
              ].map(([label, value, note]) => (
                <div key={label} className="rounded-2xl border border-dark-700 bg-dark-950/70 p-5 shadow-md">
                  <p className="text-xs uppercase tracking-[0.2em] text-dark-400 font-sans">{label}</p>
                  <p className="mt-2 text-base font-semibold text-white font-display">{value}</p>
                  <p className="mt-1 text-xs text-dark-400 font-sans">{note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Savings projection panel */}
          <div className="rounded-[24px] border border-success-500/25 bg-gradient-to-b from-success-900/30 to-success-900/10 p-8 shadow-xl shadow-success-500/5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-success-500 font-sans">
              Savings projection
            </p>

            {/* Big impact number */}
            <div className="mt-5 mb-6">
              <p className="text-xs uppercase tracking-[0.15em] text-dark-400 font-sans mb-1">Annual savings</p>
              <p className="font-clash text-5xl md:text-6xl font-bold text-success-400 leading-none"
                 style={{ textShadow: "0 0 40px rgba(34,197,94,0.3), 0 0 80px rgba(34,197,94,0.15)" }}>
                {formatCurrency(model.annualProjection)}
              </p>
              <p className="mt-2 text-sm text-success-500/70 font-sans">recoverable per year</p>
            </div>

            <div className="space-y-3 border-t border-success-500/15 pt-5">
              {[
                ["Monthly", formatCurrency(model.monthlyProjection)],
                ["Three-year", formatCurrency(model.threeYearProjection)],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-6"
                >
                  <span className="text-sm text-dark-300 font-sans">{label}</span>
                  <span className="font-mono text-xl font-bold text-white">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-dark-700 bg-dark-950/60 p-5 shadow-inner">
              <p className="text-xs uppercase tracking-[0.2em] text-dark-400 font-sans">
                ROI vs current spend
              </p>
              <p className="mt-2 font-clash text-4xl font-bold text-white">
                {model.roiPercentage.toFixed(0)}%
              </p>
              <p className="mt-1.5 text-sm text-dark-300 font-sans">
                Share of monthly spend that looks realistically recoverable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Report metrics">
        {[
          { label: "Total tools", value: analysis.toolCount.toString(), accent: "text-white font-display", mono: false },
          {
            label: "Monthly spend",
            value: formatCurrency(analysis.monthlySpend),
            accent: "text-white",
            mono: true,
          },
          {
            label: "Potential savings",
            value: formatCurrency(model.monthlyProjection),
            accent: "text-success-400",
            mono: true,
          },
          {
            label: "Action lanes",
            value: `${cutItems.length + consolidateItems.length + renegotiateItems.length}`,
            accent: "text-brand-300 font-display",
            mono: false,
          },
        ].map((item) => (
          <div key={item.label} className="card shadow-lg">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-dark-400 font-sans">{item.label}</p>
            <p className={`text-3xl font-bold ${item.mono ? "font-mono" : "font-display"} ${item.accent}`}>{item.value}</p>
          </div>
        ))}
      </section>

      {/* Lane cards — 2-column on desktop, stacked on mobile */}
      <section className="grid gap-8 md:grid-cols-2" aria-label="Action lanes">
        <LaneCard
          title="Cut"
          description="Likely waste or redundant cost that can probably be removed."
          items={cutItems}
        />
        <LaneCard
          title="Consolidate"
          description="Tools doing overlapping jobs that should be collapsed."
          items={consolidateItems}
        />
        <LaneCard
          title="Renegotiate"
          description="Keep the capability, but improve pricing or right-size the plan."
          items={renegotiateItems}
        />
        <LaneCard
          title="Keep"
          description="Tools that still look defensible relative to value delivered."
          items={keepItems}
        />
      </section>

      {/* Category breakdown + quick wins */}
      <section className="grid gap-8 lg:grid-cols-3" aria-label="Category breakdown and quick wins">
        <div className="card shadow-lg lg:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white font-display">Category breakdown</h3>
              <p className="mt-1 text-sm text-dark-400 font-sans">
                Where the current stack is concentrated
              </p>
            </div>
            <span className="text-xs text-dark-400 font-sans">Spend by category</span>
          </div>
          <div className="space-y-6">
            {analysis.categories.map((category) => {
              const pct =
                analysis.monthlySpend > 0
                  ? (category.monthlyCost / analysis.monthlySpend) * 100
                  : 0;
              return (
                <div key={category.category}>
                  <div className="mb-2.5 flex items-center justify-between">
                    <div>
                      <p className="text-base text-white font-semibold font-display">{category.category}</p>
                      <p className="text-sm text-dark-400 font-sans">{category.toolCount} tools</p>
                    </div>
                    <p className="font-mono font-bold text-dark-200 text-base">
                      {formatCurrency(category.monthlyCost)}/mo
                    </p>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-dark-950">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand-500 via-teal-500 to-success-500"
                      style={{ width: `${Math.max(pct, 6)}%` }}
                      role="progressbar"
                      aria-valuenow={Math.round(pct)}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${category.category}: ${Math.round(pct)}% of spend`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="card shadow-lg">
          <h3 className="text-xl font-bold text-white font-display mb-5">Fastest wins</h3>
          <div className="space-y-4">
            {quickWins.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-dark-700 bg-dark-950/70 p-5 shadow-md"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-base font-semibold text-white font-display">{item.title}</p>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium capitalize ${priorityClasses[item.priority || "low"]}`}
                  >
                    {effortIcons[item.priority || "low"]}
                    {item.priority}
                  </span>
                </div>
                <p className="mt-2 text-sm text-dark-400 font-sans">
                  {item.effortLevel} effort ·{" "}
                  <span className="text-success-500 font-mono font-bold">
                    Save {formatCurrency(item.monthlySavings)}/mo
                  </span>
                </p>
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-xl font-bold text-white font-display mb-5">Highest savings</h3>
          <div className="space-y-4">
            {highestSavings.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-dark-700 bg-dark-950/70 p-5 shadow-md"
              >
                <p className="text-base font-semibold text-white font-display">{item.title}</p>
                <p className="mt-2 font-mono text-2xl font-bold text-success-400">
                  {formatCurrency(item.monthlySavings)}/mo
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prioritised recommendations */}
      <section className="card shadow-lg" aria-labelledby="recommendations-heading">
        <div className="flex items-center justify-between gap-4 mb-7">
          <div>
            <h3 id="recommendations-heading" className="text-xl font-bold text-white font-display">
              Prioritised recommendations
            </h3>
            <p className="mt-1 text-xs text-dark-400 font-sans">Sorted by highest monthly savings first</p>
          </div>
          <span className="text-xs text-dark-400 font-sans">
            {prioritizedRecommendations.length} actions
          </span>
        </div>

        <div className="space-y-5">
          {prioritizedRecommendations.map((rec, idx) => {
            const lane = getLane(rec);
            return (
              <div
                key={rec.id}
                className="rounded-[24px] border border-dark-700 bg-dark-950/70 p-5 md:p-6 shadow-md"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex flex-1 gap-5">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-dark-700 bg-dark-900 text-sm font-bold text-dark-200 font-mono">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-bold text-white font-display text-base">{rec.title}</h4>
                        <span
                          className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${laneClasses[lane]}`}
                        >
                          {laneIcons[lane]}
                          {lane}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium capitalize ${priorityClasses[rec.priority || "low"]}`}
                        >
                          {effortIcons[rec.priority || "low"]}
                          {rec.priority}
                        </span>
                      </div>
                      <p className="mt-3 text-base leading-7 text-dark-300 md:text-[1.05rem] md:leading-8 font-sans">{rec.description}</p>
                      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                        <div className="rounded-2xl border border-dark-700 bg-dark-900/60 p-4">
                          <p className="text-xs uppercase tracking-[0.18em] text-dark-400 font-sans">
                            Current
                          </p>
                          <p className="mt-2 text-base font-semibold text-white font-display">
                            {rec.currentTool || rec.affectedTools.join(", ")}
                          </p>
                          {typeof rec.currentMonthlyCost === "number" && (
                            <p className="mt-1 font-mono text-base font-bold text-dark-300">
                              {formatCurrency(rec.currentMonthlyCost)}/mo
                            </p>
                          )}
                        </div>
                        <div className="rounded-2xl border border-dark-700 bg-dark-900/60 p-4">
                          <p className="text-xs uppercase tracking-[0.18em] text-dark-400 font-sans">
                            Alternative
                          </p>
                          <p className="mt-2 text-base font-semibold text-white font-display">
                            {rec.alternative || "Usage review / right-size"}
                          </p>
                          {typeof rec.alternativeMonthlyCost === "number" && (
                            <p className="mt-1 font-mono text-base font-bold text-dark-300">
                              {formatCurrency(rec.alternativeMonthlyCost)}/mo
                            </p>
                          )}
                        </div>
                        <div className="rounded-2xl border border-success-500/20 bg-success-500/5 p-4">
                          <p className="text-xs uppercase tracking-[0.18em] text-dark-400 font-sans">
                            Savings
                          </p>
                          <p className="mt-2 font-mono text-3xl font-bold text-success-400">
                            {formatCurrency(rec.monthlySavings)}/mo
                          </p>
                          <p className="mt-1 font-mono text-base text-success-500/70">
                            {formatCurrency(rec.annualSavings)}/yr
                          </p>
                        </div>
                        <div className="rounded-2xl border border-dark-700 bg-dark-900/60 p-4">
                          <p className="text-xs uppercase tracking-[0.18em] text-dark-400 font-sans">
                            Effort
                          </p>
                          <p className="mt-2 text-base font-semibold text-white font-display">
                            {rec.effortLevel || "Medium"}
                          </p>
                          <p className="mt-1 text-sm text-dark-300 font-sans">
                            Affected:{" "}
                            <span className="font-semibold text-dark-200">
                              {rec.affectedTools.join(", ")}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 rounded-2xl border border-brand-500/15 bg-dark-900/60 p-5">
                        <p className="text-xs uppercase tracking-[0.18em] text-dark-400 font-sans">
                          Implementation notes
                        </p>
                        <p className="mt-2 text-base leading-8 text-dark-300 font-sans">
                          {rec.migrationNotes ||
                            rec.whyBetterForSmbs ||
                            "Validate usage and stakeholder owners before renewal."}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-[160px] text-left lg:text-right">
                    <p className="font-mono text-3xl font-bold text-success-400">
                      +{formatCurrency(rec.monthlySavings)}
                    </p>
                    <p className="text-xs text-dark-400 font-sans mt-1">per month</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Back to Dashboard */}
      {!shared && (
        <div className="text-center pt-4">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-xl border border-dark-700 bg-dark-900 px-6 py-3 text-sm font-medium text-dark-200 font-sans transition-all hover:border-dark-600 hover:text-white hover:bg-dark-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Dashboard
          </Link>
        </div>
      )}
    </div>
  );
}
