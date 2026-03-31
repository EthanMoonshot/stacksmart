const actionTypes = [
  {
    action: "Cut",
    color: "text-red-400",
    bgGradient: "from-red-500/15 to-red-500/5",
    borderColor: "border-red-500/25",
    glowColor: "bg-red-500/15",
    description: "Cancel unused or duplicate subscriptions",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
  },
  {
    action: "Consolidate",
    color: "text-amber-400",
    bgGradient: "from-amber-500/15 to-amber-500/5",
    borderColor: "border-amber-500/25",
    glowColor: "bg-amber-500/15",
    description: "Merge overlapping tools into one",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    action: "Renegotiate",
    color: "text-brand-400",
    bgGradient: "from-brand-500/15 to-brand-500/5",
    borderColor: "border-brand-500/25",
    glowColor: "bg-brand-500/15",
    description: "Get better pricing from vendors",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "47", label: "Subscriptions per audit" },
  { value: "14%", label: "Average spend reduction" },
  { value: "3", label: "Minutes to first report" },
  { value: "0", label: "Bank connections required" },
];

export default function ProblemSolution() {
  return (
    <section id="value" className="relative py-20 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-success-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Hero stat */}
        <div className="text-center mb-14 reveal">
          <p className="text-xs uppercase tracking-[0.2em] text-dark-400 mb-3">Average Result</p>
          <div className="font-display text-5xl sm:text-6xl font-bold text-white mb-3">
            <span className="text-success-500 savings-number">$4,200</span>
            <span className="text-dark-400 text-2xl sm:text-3xl">/year</span>
          </div>
          <p className="text-dark-400">in savings found for the average SMB audit</p>
        </div>

        {/* Action types - compact cards */}
        <div className="grid gap-4 md:grid-cols-3 mb-12">
          {actionTypes.map((type) => (
            <div 
              key={type.action}
              className="reveal"
            >
              <div className={`relative rounded-xl border ${type.borderColor} bg-gradient-to-b ${type.bgGradient} p-5 h-full transition-all duration-200 hover:-translate-y-0.5`}>
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-9 h-9 rounded-lg ${type.borderColor} bg-dark-900/60 flex items-center justify-center ${type.color}`}>
                    {type.icon}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${type.color} mb-1`}>{type.action}</h3>
                    <p className="text-dark-300 text-sm">{type.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 reveal">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl bg-dark-900/40 border border-dark-800/50">
              <p className="font-display text-2xl font-bold text-white mb-0.5">{stat.value}</p>
              <p className="text-xs text-dark-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
