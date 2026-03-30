export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-brand-500/10 blur-[120px]" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-brand-600/8 blur-[80px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.5) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
          AI-Powered SaaS Optimization · Now in Beta
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6 text-balance">
          Your SaaS stack is{" "}
          <span className="bg-gradient-to-r from-brand-400 via-cyan-400 to-brand-300 bg-clip-text text-transparent">
            bleeding money.
          </span>
          <br />
          We'll find it.
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-dark-300 max-w-3xl mx-auto mb-10 text-balance">
          StackSmart analyzes your entire SaaS stack and tells you exactly what to{" "}
          <strong className="text-dark-100">cut</strong>,{" "}
          <strong className="text-dark-100">consolidate</strong>, or{" "}
          <strong className="text-dark-100">renegotiate</strong> — saving the average SMB{" "}
          <span className="text-brand-400 font-semibold">$8,000/year</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#waitlist"
            className="btn-primary text-base px-8 py-4 rounded-xl w-full sm:w-auto"
          >
            Join the Waitlist — Free
          </a>
          <a
            href="#how-it-works"
            className="btn-secondary text-base px-8 py-4 rounded-xl w-full sm:w-auto"
          >
            See How It Works →
          </a>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-dark-400">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            10-minute setup
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Average savings $8K/year
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { value: "$8K", label: "Average annual savings", sub: "per SMB customer" },
            { value: "85%", label: "Gross margin", sub: "AI-powered efficiency" },
            { value: "10min", label: "Time to first insight", sub: "upload & analyze" },
          ].map((stat) => (
            <div key={stat.value} className="glass rounded-xl px-6 py-5 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-brand-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-white mt-1">{stat.label}</div>
              <div className="text-xs text-dark-500 mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
