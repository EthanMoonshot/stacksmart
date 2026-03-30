const problems = [
  {
    icon: "💸",
    title: "Tool sprawl is expensive",
    description: "The average SMB pays for 12+ SaaS tools they barely use. Zombie subscriptions and forgotten trials drain $400-800/month silently.",
  },
  {
    icon: "🔀",
    title: "Duplicate tools everywhere",
    description: "Teams adopt tools independently. You end up with 3 project management apps, 2 video tools, and 4 communication platforms doing the same thing.",
  },
  {
    icon: "📊",
    title: "No visibility, no control",
    description: "Finance sees the bill. Ops doesn't know what's running. IT doesn't exist. Nobody has a complete picture of your software stack.",
  },
  {
    icon: "🏢",
    title: "Enterprise tools don't fit",
    description: "Zylo, Vendr, and similar tools cost $10K-50K/year and require dedicated IT teams. Completely overkill for a 20-person company.",
  },
];

export default function ProblemSolution() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium mb-6">
            THE PROBLEM
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            SaaS spending is out of control — and nobody is watching
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            Tech-enabled SMBs are losing thousands each month to redundant tools, unused subscriptions, and overpriced plans. But the tools built to fix this are designed for enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {problems.map((problem) => (
            <div key={problem.title} className="card group hover:border-dark-700 transition-colors">
              <div className="text-3xl mb-3">{problem.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{problem.title}</h3>
              <p className="text-dark-400 text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Solution */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900/50 via-dark-900 to-dark-900" />
          <div className="absolute inset-0 border border-brand-500/20 rounded-2xl" />
          
          <div className="relative p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left: Copy */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium mb-6">
                  THE SOLUTION
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  The $500/hr consultant,{" "}
                  <span className="gradient-text">for $149/month</span>
                </h2>
                <p className="text-dark-300 text-lg mb-8">
                  StackSmart uses AI to analyze your entire software stack, identify waste and overlap, and generate specific, actionable recommendations. The kind of audit a consultant would charge $5,000 for — automated and available 24/7.
                </p>
                <ul className="space-y-3">
                  {[
                    "Upload your billing data in seconds",
                    "AI identifies every tool, duplicate, and zombie subscription",
                    "Get specific alternatives with projected savings",
                    "Monthly monitoring keeps you optimized",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-dark-200">
                      <svg className="w-5 h-5 text-brand-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Mock analysis result */}
              <div className="bg-dark-950 rounded-xl border border-dark-700 p-6 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-dark-500 text-xs">stack-analysis-result.json</span>
                </div>
                
                <div className="space-y-2 text-dark-300">
                  <p><span className="text-brand-400">tools_detected</span>: <span className="text-white">24</span></p>
                  <p><span className="text-brand-400">monthly_spend</span>: <span className="text-white">$4,820</span></p>
                  <p><span className="text-red-400">duplicates_found</span>: <span className="text-white">6</span></p>
                  <p><span className="text-yellow-400">unused_likely</span>: <span className="text-white">4</span></p>
                  <div className="border-t border-dark-800 my-3" />
                  <p className="text-green-400">recommendations: [</p>
                  <div className="pl-4 space-y-1">
                    <p><span className="text-white">"Replace Notion + Confluence with Linear"</span></p>
                    <p className="text-dark-500 text-xs pl-2">→ Save <span className="text-green-400">$280/mo</span></p>
                    <p><span className="text-white">"Cancel Zoom (Teams included in M365)"</span></p>
                    <p className="text-dark-500 text-xs pl-2">→ Save <span className="text-green-400">$120/mo</span></p>
                    <p><span className="text-white">"Downgrade HubSpot tier"</span></p>
                    <p className="text-dark-500 text-xs pl-2">→ Save <span className="text-green-400">$350/mo</span></p>
                  </div>
                  <p className="text-green-400">]</p>
                  <div className="border-t border-dark-800 my-3" />
                  <p><span className="text-green-400">total_savings</span>: <span className="text-green-300 font-bold">$9,000/yr</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
