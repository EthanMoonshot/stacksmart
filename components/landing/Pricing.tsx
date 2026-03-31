import Link from "next/link";

const plans = [
  {
    name: "One-Time Audit",
    price: "$299",
    period: "one-time",
    fit: "Prove ROI before committing to monitoring",
    highlights: [
      "Complete stack audit",
      "Action-ready report",
      "Cut / Consolidate / Renegotiate breakdown",
      "30 days report access",
    ],
  },
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    fit: "Recurring visibility for lean teams",
    highlights: [
      "Monthly monitoring",
      "Core dashboard",
      "5 user seats",
      "Email digests",
    ],
  },
  {
    name: "Growth",
    price: "$149",
    period: "/month",
    fit: "Best for growing teams managing 20+ tools",
    highlights: [
      "Everything in Starter",
      "Negotiation guidance",
      "Renewal calendar",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Scale",
    price: "$249",
    period: "/month",
    fit: "Larger orgs with complex stacks",
    highlights: [
      "Everything in Growth",
      "Advanced reporting",
      "Unlimited users",
      "Integration support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-brand-500/8 blur-[130px]" />
        <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-teal-500/6 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400 mb-4">Pricing</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
            Pricing that pays for itself
          </h2>
          <p className="text-xl text-dark-300 max-w-xl mx-auto">
            Start with a one-time audit — or move to monitoring if your stack keeps leaking money.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`reveal relative rounded-3xl border flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "border-brand-500/60 bg-gradient-to-b from-brand-500/10 to-brand-600/5 shadow-[0_0_60px_rgba(59,130,246,0.15)]"
                  : "border-dark-700/80 bg-dark-900/60 hover:border-dark-600"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-500/30 whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-dark-400 mb-4">{plan.name}</p>

                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="font-display text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-dark-400 text-sm font-medium">{plan.period}</span>
                </div>

                <p className="text-dark-300 text-base mb-8 leading-relaxed">{plan.fit}</p>

                <ul className="space-y-3.5 mt-auto mb-8">
                  {plan.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base text-dark-200">
                      <svg className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#waitlist"
                  className={`block w-full text-center rounded-xl px-6 py-3.5 text-base font-semibold transition-all duration-200 ${
                    plan.popular
                      ? "bg-brand-500 text-white hover:bg-brand-600 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
                      : "border border-dark-600 text-dark-200 hover:border-dark-500 hover:text-white hover:bg-dark-800"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center reveal">
          <Link href="/pricing" className="text-brand-400 hover:text-brand-300 text-base font-medium transition-colors">
            Compare all plans in detail →
          </Link>
        </div>
      </div>
    </section>
  );
}
