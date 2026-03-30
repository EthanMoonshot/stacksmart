const steps = [
  {
    number: "01",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
    title: "Upload your billing data",
    description:
      "Export a CSV from your credit card, expense tool (Expensify, Ramp, Brex), or forward invoice emails. Takes under 2 minutes.",
    detail: "Supports CSV exports from all major banks and expense tools. Bank-level encryption. We never store raw financial data.",
  },
  {
    number: "02",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI analyzes your stack",
    description:
      "Claude AI categorizes every tool, maps duplicates and overlaps, identifies unused subscriptions, and benchmarks your pricing against similar companies.",
    detail: "Identifies 200+ common SaaS tools. Detects functional overlaps across 15 categories. Analysis takes under 60 seconds.",
  },
  {
    number: "03",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Get your savings report",
    description:
      "Receive a prioritized action plan with specific tool alternatives, estimated savings per recommendation, and a step-by-step implementation guide.",
    detail: "PDF + interactive web report. Sorted by ROI. Includes negotiation tips for tools you should keep but renegotiate.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-brand-600/5 blur-[100px] -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium mb-6">
            HOW IT WORKS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            From upload to savings in under 10 minutes
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            No complex integrations. No IT team required. Just upload your billing data and let AI do the work.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-[calc(66%-80px)] h-0.5 bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative group">
                <div className="card group-hover:border-brand-500/30 transition-all duration-300 group-hover:-translate-y-1">
                  {/* Step number + icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/20 to-cyan-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400">
                      {step.icon}
                    </div>
                    <div className="text-4xl font-bold text-dark-800 group-hover:text-dark-700 transition-colors">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-dark-400 text-sm leading-relaxed mb-4">{step.description}</p>

                  <div className="pt-4 border-t border-dark-800">
                    <p className="text-dark-500 text-xs leading-relaxed">{step.detail}</p>
                  </div>
                </div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <svg className="w-6 h-6 text-dark-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-dark-400 mb-6">
            Average customer identifies{" "}
            <span className="text-brand-400 font-semibold">$680/month</span> in potential savings in their first analysis.
          </p>
          <a href="#waitlist" className="btn-primary inline-block">
            Start Saving Today →
          </a>
        </div>
      </div>
    </section>
  );
}
