const steps = [
  {
    number: "1",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    title: "Upload CSV",
    description: "Export from your card or finance tool",
    gradient: "from-brand-500/20 to-brand-600/10",
    iconColor: "text-brand-400",
  },
  {
    number: "2",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI Analysis",
    description: "We map your stack and find waste",
    gradient: "from-teal-500/20 to-teal-600/10",
    iconColor: "text-teal-400",
  },
  {
    number: "3",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Get Report",
    description: "Clear actions: cut, consolidate, renegotiate",
    gradient: "from-success-500/20 to-success-500/10",
    iconColor: "text-success-500",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 md:py-24">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-500/5 blur-[100px] -translate-y-1/2" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Upload to savings in under 3 minutes
          </h2>
        </div>

        {/* Steps - horizontal layout */}
        <div className="relative">
          {/* Connector line - desktop only */}
          <div className="hidden md:block absolute top-10 left-[calc(16.666%+32px)] right-[calc(16.666%+32px)] h-0.5">
            <div className="w-full h-full bg-gradient-to-r from-brand-500/60 via-teal-500/60 to-success-500/60 rounded-full" />
            {/* Animated pulse on the line */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-500 via-teal-500 to-success-500 rounded-full animate-pulse opacity-40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="relative text-center group"
              >
                {/* Icon circle */}
                <div className="relative inline-flex mb-5">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} border border-dark-700/50 flex items-center justify-center ${step.iconColor} shadow-xl group-hover:scale-105 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-dark-900 border-2 border-dark-700 flex items-center justify-center text-xs font-bold text-white shadow-md">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-dark-400 text-sm max-w-[200px] mx-auto">{step.description}</p>
                
                {/* Mobile arrow */}
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
      </div>
    </section>
  );
}
