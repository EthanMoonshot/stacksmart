"use client";

const actionRows = [
  { 
    tool: "Slack", 
    action: "Cut", 
    note: "Teams already covers chat", 
    saving: "$120/mo",
    color: "text-red-400",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20"
  },
  { 
    tool: "Jira + Asana", 
    action: "Consolidate", 
    note: "Pick one PM tool", 
    saving: "$62/mo",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20"
  },
  { 
    tool: "Intercom", 
    action: "Renegotiate", 
    note: "Usage suggests lower tier", 
    saving: "$52/mo",
    color: "text-brand-400",
    bgColor: "bg-brand-500/10",
    borderColor: "border-brand-500/20"
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-36 md:pb-28">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main glow from top — larger, more vibrant */}
        <div className="absolute left-1/2 -top-40 h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[130px] animate-pulse-glow" />
        {/* Teal accent orb — right side */}
        <div className="absolute right-[10%] top-[20%] h-[450px] w-[450px] rounded-full bg-teal-500/12 blur-[110px]" />
        {/* Green savings glow */}
        <div className="absolute left-[5%] top-[50%] h-[500px] w-[500px] rounded-full bg-success-500/10 blur-[130px]" />
        {/* Small bright accent orb */}
        <div className="absolute right-[30%] bottom-[10%] h-[200px] w-[200px] rounded-full bg-brand-400/15 blur-[60px]" />
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59,130,246,0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 30%, rgba(20,184,166,0.10) 0%, transparent 50%)"
        }} />
      </div>

      {/* Grid pattern — slightly more visible */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage:
          "linear-gradient(rgba(148,163,184,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.6) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Floating accent dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[8%] h-2 w-2 rounded-full bg-brand-400/40" />
        <div className="absolute top-[35%] left-[12%] h-1.5 w-1.5 rounded-full bg-teal-400/30" />
        <div className="absolute top-[60%] right-[10%] h-2.5 w-2.5 rounded-full bg-success-500/30" />
        <div className="absolute top-[25%] right-[18%] h-1.5 w-1.5 rounded-full bg-brand-300/25" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="max-w-xl animate-fade-up">
            <h1 className="font-display text-5xl font-bold leading-[1.06] tracking-[-0.03em] text-white sm:text-6xl lg:text-[68px]">
              Find the money hiding in your SaaS stack.
            </h1>

            <p className="mt-7 text-xl leading-relaxed text-dark-300 sm:text-2xl">
              Upload a billing CSV. Get a savings report in minutes.
            </p>

            <div className="mt-10">
              <a 
                href="#waitlist" 
                className="inline-flex items-center gap-3 rounded-2xl bg-brand-500 px-10 py-5 text-lg font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
              >
                Audit My Stack
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <p className="mt-6 text-base text-dark-400">
              No credit card • 2 minute setup • CSV only, no bank access
            </p>
          </div>

          {/* Right: Product Mockup */}
          <div className="relative animate-fade-up delay-200 group" style={{ animationFillMode: 'backwards' }}>
            {/* Glow behind card */}
            <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-brand-500/20 via-transparent to-success-500/15 blur-2xl transition-all duration-500 group-hover:from-brand-500/30 group-hover:to-success-500/20" />
            
            {/* Main mockup card */}
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-dark-900/95 shadow-2xl shadow-black/40 transition-transform duration-300 group-hover:-translate-y-1">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-dark-700/80 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-dark-500 font-mono">stacksmart.io/report</span>
                </div>
                <div className="rounded-full border border-success-500/30 bg-success-500/10 px-3 py-1 text-xs font-medium text-success-500">
                  ● Live
                </div>
              </div>

              {/* Savings Hero Number */}
              <div className="px-6 py-8 text-center border-b border-dark-700/50">
                <p className="text-xs uppercase tracking-[0.2em] text-dark-400 mb-2">Potential Annual Savings</p>
                <div className="font-display text-6xl sm:text-7xl font-bold text-success-500 savings-number">
                  $8,160
                </div>
                <p className="text-dark-400 text-sm mt-2">across 47 subscriptions</p>
              </div>

              {/* Monthly breakdown */}
              <div className="grid grid-cols-3 border-b border-dark-700/50">
                <div className="px-4 py-4 text-center border-r border-dark-700/50">
                  <p className="text-2xl font-bold text-white font-mono">$680</p>
                  <p className="text-xs text-dark-400 mt-1">Monthly</p>
                </div>
                <div className="px-4 py-4 text-center border-r border-dark-700/50">
                  <p className="text-2xl font-bold text-white">6</p>
                  <p className="text-xs text-dark-400 mt-1">Actions</p>
                </div>
                <div className="px-4 py-4 text-center">
                  <p className="text-2xl font-bold text-white">14%</p>
                  <p className="text-xs text-dark-400 mt-1">Reduction</p>
                </div>
              </div>

              {/* Action items */}
              <div className="p-5 space-y-3">
                <p className="text-xs uppercase tracking-[0.15em] text-dark-400 mb-3">Top Recommendations</p>
                {actionRows.map((row, index) => (
                  <div 
                    key={row.tool} 
                    className={`flex items-center justify-between rounded-xl border ${row.borderColor} ${row.bgColor} p-4 transition-all duration-200 hover:scale-[1.02]`}
                    style={{ animationDelay: `${(index + 3) * 100}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`rounded-md border ${row.borderColor} px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${row.color}`}>
                        {row.action}
                      </span>
                      <div>
                        <p className="font-medium text-white text-sm">{row.tool}</p>
                        <p className="text-xs text-dark-400">{row.note}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-mono font-semibold text-success-500">{row.saving}</p>
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
