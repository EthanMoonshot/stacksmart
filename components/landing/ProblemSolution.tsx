const actionTypes = [
  {
    action: "Cut",
    color: "text-red-400",
    bgGradient: "from-red-500/12 to-red-500/4",
    borderColor: "border-red-500/25",
    hoverBorder: "hover:border-red-500/40",
    description: "Cancel unused or duplicate subscriptions",
    example: "e.g. unused seats, ghost tools",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
  },
  {
    action: "Consolidate",
    color: "text-amber-400",
    bgGradient: "from-amber-500/12 to-amber-500/4",
    borderColor: "border-amber-500/25",
    hoverBorder: "hover:border-amber-500/40",
    description: "Merge overlapping tools into one",
    example: "e.g. Jira + Asana → pick one",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    action: "Renegotiate",
    color: "text-brand-400",
    bgGradient: "from-brand-500/12 to-brand-500/4",
    borderColor: "border-brand-500/25",
    hoverBorder: "hover:border-brand-500/40",
    description: "Get better pricing from vendors",
    example: "e.g. lower tier, annual discount",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "47", suffix: "", label: "Subscriptions per audit" },
  { value: "14", suffix: "%", label: "Average spend reduction" },
  { value: "3", suffix: " min", label: "To first report" },
  { value: "0", suffix: "", label: "Bank connections needed" },
];



export default function ProblemSolution() {
  return (
    <section id="value" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-success-500/5 blur-[130px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Hero stat */}
        <div className="text-center mb-16 reveal">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-dark-400 mb-4">Average Result</p>
          <div className="mb-4">
            <span className="font-clash text-6xl sm:text-7xl font-semibold text-success-500 savings-number">$4,200</span>
            <span className="font-display text-dark-400 text-3xl sm:text-4xl font-bold">/year</span>
          </div>
          <p className="font-sans text-dark-400 text-lg">in savings found for the average SMB audit</p>
        </div>

        {/* Action types */}
        <div className="grid gap-4 md:grid-cols-3 mb-16 reveal">
          {actionTypes.map((type) => (
            <div
              key={type.action}
              className={`relative rounded-2xl border ${type.borderColor} ${type.hoverBorder} bg-gradient-to-b ${type.bgGradient} p-6 h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-default`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-xl border ${type.borderColor} bg-dark-900/60 flex items-center justify-center ${type.color}`}
                >
                  {type.icon}
                </div>
                <div>
                  <h3 className={`font-display text-xl font-bold ${type.color} mb-1`}>{type.action}</h3>
                  <p className="font-sans text-dark-300 text-sm leading-relaxed mb-2">{type.description}</p>
                  <p className={`font-sans text-xs ${type.color} opacity-70`}>{type.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 reveal mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-dark-900/50 border border-dark-800/60 hover:border-dark-700 transition-colors duration-200"
            >
              <p className="font-mono text-3xl font-bold text-white mb-1">
                {stat.value}
                <span className="font-display text-xl">{stat.suffix}</span>
              </p>
              <p className="font-sans text-xs text-dark-500 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div className="reveal">
          <div className="rounded-2xl border border-dark-700/60 bg-dark-900/50 px-8 py-10 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="h-2 w-2 rounded-full bg-success-500 animate-pulse" aria-hidden="true" />
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-success-400">
                Early access
              </span>
            </div>
            <p className="font-clash text-2xl sm:text-3xl font-semibold text-white">
              Join 50+ SMBs optimizing their SaaS spend
            </p>
            <p className="mt-3 font-sans text-dark-400 text-sm max-w-md mx-auto">
              Upload a billing CSV and get an actionable savings report in minutes. No bank access. No sales call.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
