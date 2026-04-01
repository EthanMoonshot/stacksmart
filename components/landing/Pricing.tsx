import Link from "next/link";

const plan = {
  name: "SaaS Audit",
  price: "$49",
  period: "one-time",
  fit: "A fast launch offer for founders and operators who want clear savings recommendations without a subscription.",
  highlights: [
    "Full SaaS stack analysis",
    "AI-powered savings report",
    "Actionable recommendations",
    "PDF export",
    "30 days report access",
  ],
  anchor: "Audit My Stack",
};

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-1/3 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[130px]" />
        <div className="absolute top-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-teal-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center reveal">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
            Pricing
          </p>
          <h2 className="font-display text-4xl font-bold tracking-[-0.02em] text-white md:text-5xl">
            One clear offer for launch
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-sans text-xl text-dark-300">
            Get a focused SaaS savings audit for a simple one-time price.
          </p>
        </div>

        <div className="mx-auto max-w-xl">
          <div className="reveal relative flex flex-col rounded-3xl border border-brand-500/60 bg-gradient-to-b from-brand-500/10 to-brand-600/5 p-8 shadow-[0_0_60px_rgba(59,130,246,0.15)] transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-500/30 whitespace-nowrap">
              Launch Offer
            </div>

            <div className="mb-8 text-center">
              <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.18em] text-dark-300">
                {plan.name}
              </p>
              <div className="mb-3 flex items-baseline justify-center gap-1.5">
                <span className="font-mono text-5xl font-bold text-white">{plan.price}</span>
                <span className="font-sans text-sm font-medium text-dark-400">{plan.period}</span>
              </div>
              <p className="font-sans text-sm leading-relaxed text-dark-200">{plan.fit}</p>
            </div>

            <ul className="mb-8 space-y-3.5" aria-label={`${plan.name} features`}>
              {plan.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 font-sans text-sm text-dark-100">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-success-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#waitlist"
              className="block w-full rounded-xl bg-brand-500 px-6 py-3.5 text-center text-sm font-semibold text-white transition-all duration-200 hover:bg-brand-600 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
              aria-label={`${plan.anchor} — ${plan.name}`}
            >
              {plan.anchor}
            </a>
          </div>
        </div>

        <div className="reveal mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
          <div className="flex items-center gap-2 text-sm text-dark-400">
            <svg className="h-4 w-4 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Secure checkout
          </div>
          <div className="flex items-center gap-2 text-sm text-dark-400">
            <svg className="h-4 w-4 text-success-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-3.314 0-6 1.79-6 4s2.686 4 6 4 6-1.79 6-4-2.686-4-6-4zm0 0V4m0 12v4" />
            </svg>
            One-time payment
          </div>
          <Link
            href="/pricing"
            className="text-sm font-medium text-brand-400 transition-colors hover:text-brand-300"
          >
            View full audit details →
          </Link>
        </div>
      </div>
    </section>
  );
}
