const steps = [
  {
    number: "01",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    title: "Upload CSV",
    description: "Export from your card or finance tool. No integrations, no OAuth, no bank access.",
    detail: "Works with Amex, Stripe, QuickBooks, Xero",
    gradient: "from-brand-500/20 via-brand-600/10 to-transparent",
    iconBg: "bg-brand-500/15",
    iconBorder: "border-brand-500/30",
    iconColor: "text-brand-400",
    glowColor: "rgba(59,130,246,0.2)",
  },
  {
    number: "02",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI Analysis",
    description: "We map your entire stack against 200+ known SaaS tools and identify waste patterns.",
    detail: "Detects duplicates, unused seats, inflated tiers",
    gradient: "from-teal-500/20 via-teal-600/10 to-transparent",
    iconBg: "bg-teal-500/15",
    iconBorder: "border-teal-500/30",
    iconColor: "text-teal-400",
    glowColor: "rgba(20,184,166,0.2)",
  },
  {
    number: "03",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Get Your Report",
    description: "A clear, prioritised action plan: what to cut, consolidate, and renegotiate.",
    detail: "Average 14% spend reduction, found in 3 mins",
    gradient: "from-success-500/20 via-success-500/10 to-transparent",
    iconBg: "bg-success-500/15",
    iconBorder: "border-success-500/30",
    iconColor: "text-success-500",
    glowColor: "rgba(34,197,94,0.2)",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-500/5 blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-teal-500/5 blur-[100px] -translate-y-1/2" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-brand-400 font-semibold mb-4">
            How It Works
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-[-0.02em] leading-tight">
            Upload to savings in{" "}
            <span className="bg-gradient-to-r from-brand-400 to-teal-400 bg-clip-text text-transparent">
              under 3 minutes
            </span>
          </h2>
          <p className="mt-4 font-sans text-lg text-dark-300 max-w-xl mx-auto">
            No setup. No integrations. Just a CSV and 3 minutes of your time.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line - desktop only */}
          <div className="hidden md:block absolute top-[52px] left-[calc(16.666%+40px)] right-[calc(16.666%+40px)] h-px">
            <div className="w-full h-full bg-gradient-to-r from-brand-500/50 via-teal-500/50 to-success-500/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-500 via-teal-500 to-success-500 animate-pulse opacity-30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative group reveal"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step card */}
                <div className="relative rounded-2xl border border-dark-700/60 bg-dark-900/50 p-6 h-full transition-all duration-300 hover:border-dark-600 hover:-translate-y-1 hover:shadow-xl">
                  {/* Card glow on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
                    style={{ background: `radial-gradient(ellipse at 50% 0%, ${step.glowColor}, transparent 70%)` }}
                    aria-hidden="true"
                  />

                  {/* Icon */}
                  <div className="relative inline-flex mb-6">
                    <div
                      className={`w-[104px] h-[104px] rounded-2xl ${step.iconBg} border ${step.iconBorder} flex items-center justify-center ${step.iconColor} transition-transform duration-300 group-hover:scale-105`}
                    >
                      {step.icon}
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-dark-950 border-2 border-dark-700 flex items-center justify-center text-xs font-bold font-mono text-dark-300 shadow-md">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="font-sans text-dark-300 text-sm leading-relaxed mb-4">{step.description}</p>

                  {/* Detail tag */}
                  <div className={`inline-flex items-center gap-1.5 rounded-lg ${step.iconBg} border ${step.iconBorder} px-3 py-1.5`}>
                    <svg className={`w-3 h-3 ${step.iconColor} flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className={`font-sans text-xs font-medium ${step.iconColor}`}>{step.detail}</span>
                  </div>
                </div>

                {/* Mobile arrow connector */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <svg className="w-5 h-5 text-dark-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center reveal">
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 font-sans text-brand-400 font-semibold hover:text-brand-300 transition-colors duration-200"
          >
            Start your free audit
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
