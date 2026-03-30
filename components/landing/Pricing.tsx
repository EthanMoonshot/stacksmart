import Link from "next/link";

const plans = [
  {
    name: "One-Time Audit",
    price: "$299",
    period: "one time",
    description: "Fast ROI proof for teams that want a one-off audit before subscribing.",
  },
  {
    name: "Starter",
    price: "$99",
    period: "/ month",
    description: "For smaller teams that want recurring visibility into SaaS waste.",
  },
  {
    name: "Growth",
    price: "$149",
    period: "/ month",
    description: "The best fit for growing teams with more tools, renewals, and savings upside.",
    badge: "Most Popular",
  },
  {
    name: "Scale",
    price: "$249",
    period: "/ month",
    description: "For larger teams managing more spend, users, and vendor complexity.",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1.5 text-xs font-medium text-brand-400">
            PRICING
          </div>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Pricing built for obvious ROI</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-dark-400">
            Start with a one-time audit or move straight to ongoing optimization. Full checkout lives on the dedicated pricing page.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative rounded-xl border p-6 ${plan.badge ? "border-brand-500/40 bg-brand-500/10" : "border-dark-800 bg-dark-900"}`}>
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-white">{plan.badge}</span>
                </div>
              )}
              <h3 className="text-lg font-bold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-dark-400">{plan.description}</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="mb-1 text-sm text-dark-400">{plan.period}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/pricing" className="btn-primary text-sm">
            Compare plans and start checkout
          </Link>
        </div>
      </div>
    </section>
  );
}
