"use client";

import Image from "next/image";

const actionRows = [
  {
    tool: "Slack",
    action: "Cut",
    note: "Teams already covers chat",
    saving: "$120/mo",
    color: "text-red-400",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    icon: (
      <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
  },
  {
    tool: "Jira + Asana",
    action: "Consolidate",
    note: "Pick one PM tool",
    saving: "$62/mo",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    icon: (
      <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    tool: "Intercom",
    action: "Renegotiate",
    note: "Usage suggests lower tier",
    saving: "$52/mo",
    color: "text-brand-400",
    bgColor: "bg-brand-500/10",
    borderColor: "border-brand-500/20",
    icon: (
      <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-36 md:pb-28">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Main glow from top */}
        <div className="absolute left-1/2 -top-40 h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-brand-500/18 blur-[140px]" />
        {/* Teal accent orb — right side */}
        <div className="absolute right-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-teal-500/8 blur-[120px]" />
        {/* Mesh gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59,130,246,0.10) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="max-w-xl animate-fade-up">
            {/* Social proof pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-success-500/25 bg-success-500/10 px-4 py-2 mb-8">
              <div className="h-2 w-2 rounded-full bg-success-500 animate-pulse" aria-hidden="true" />
              <span className="font-sans text-xs font-semibold text-success-400 tracking-wide">
                Average savings: $4,200/year
              </span>
            </div>

            <h1 className="font-clash text-5xl font-semibold leading-[1.04] tracking-[-0.02em] text-white sm:text-6xl lg:text-[68px]">
              Find the money hiding in your{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-brand-400 via-teal-400 to-brand-300 bg-clip-text text-transparent">
                  SaaS stack.
                </span>
              </span>
            </h1>

            <p className="mt-6 font-sans text-lg leading-relaxed text-dark-300 max-w-lg">
              Upload a billing CSV. Get a full savings report in under 3 minutes. No bank access required.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#waitlist"
                aria-label="Audit my SaaS stack — get a free savings report"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-brand-500 px-9 py-4 text-base font-semibold font-sans text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
              >
                Audit My Stack
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/demo"
                aria-label="Try demo with sample data — no sign-up required"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-500/40 bg-brand-500/8 px-7 py-4 text-base font-semibold font-sans text-brand-300 transition-all duration-200 hover:border-brand-500/70 hover:text-brand-200 hover:bg-brand-500/15"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Try Free Demo
              </a>
            </div>

            <p className="mt-5 font-sans text-sm text-dark-400">
              No credit card · No sign-up · See results instantly with sample data
            </p>
          </div>

          {/* Right: Product Mockup + AI Generated Dashboard */}
          <div
            className="relative animate-fade-up group"
            style={{ animationDelay: "200ms", animationFillMode: "backwards" }}
          >
            {/* Glow behind card */}
            <div
              className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-brand-500/15 via-transparent to-success-500/12 blur-2xl transition-all duration-500 group-hover:from-brand-500/22 group-hover:to-success-500/18"
              aria-hidden="true"
            />

            {/* Main mockup card */}
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-dark-900/95 shadow-2xl shadow-black/60 transition-transform duration-300 group-hover:-translate-y-1">
              {/* Browser chrome header */}
              <div className="flex items-center justify-between border-b border-dark-700/80 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="font-mono text-xs text-dark-500">stacksmart.app/report</span>
                </div>
                <div className="rounded-full border border-success-500/30 bg-success-500/10 px-3 py-1 text-xs font-medium font-sans text-success-500">
                  ● Live
                </div>
              </div>

              {/* AI-generated dashboard image */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <Image
                  src="/images/hero-dashboard.png"
                  alt="StackSmart savings dashboard showing $8,160 in annual SaaS savings"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay to blend into the card */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
              </div>

              {/* Summary overlay */}
              <div className="px-6 py-5 border-t border-dark-700/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-sans text-xs uppercase tracking-[0.15em] text-dark-400 mb-1">
                      Potential Annual Savings
                    </p>
                    <div className="font-mono text-3xl font-bold text-success-500">
                      $8,160
                    </div>
                  </div>
                  <div className="flex gap-4 text-right">
                    <div>
                      <p className="font-mono text-xl font-bold text-white">6</p>
                      <p className="font-sans text-xs text-dark-400">Actions</p>
                    </div>
                    <div>
                      <p className="font-mono text-xl font-bold text-white">14%</p>
                      <p className="font-sans text-xs text-dark-400">Reduction</p>
                    </div>
                    <div>
                      <p className="font-mono text-xl font-bold text-white">47</p>
                      <p className="font-sans text-xs text-dark-400">Tools</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action items */}
              <div className="px-5 pb-5 space-y-2.5">
                <p className="font-sans text-xs uppercase tracking-[0.15em] text-dark-400 mb-3">
                  Top Recommendations
                </p>
                {actionRows.map((row, index) => (
                  <div
                    key={row.tool}
                    className={`flex items-center justify-between rounded-xl border ${row.borderColor} ${row.bgColor} p-3.5 transition-all duration-200 hover:scale-[1.015] cursor-default`}
                    style={{ animationDelay: `${(index + 3) * 100}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex items-center gap-1 rounded-md border ${row.borderColor} px-2 py-0.5 text-[10px] font-bold font-sans uppercase tracking-wider ${row.color}`}
                      >
                        {row.icon}
                        {row.action}
                      </span>
                      <div>
                        <p className="font-sans font-medium text-white text-sm">{row.tool}</p>
                        <p className="font-sans text-xs text-dark-400">{row.note}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-mono font-semibold text-success-500 text-sm">{row.saving}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
