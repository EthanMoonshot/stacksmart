import TrackLink from "@/components/analytics/TrackLink";

export default function WaitlistForm() {
  return (
    <section id="waitlist" className="relative py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-brand-500/20 bg-dark-900/75 p-8 shadow-[0_0_60px_rgba(59,130,246,0.10)] md:p-10">
          <h2 className="font-clash text-4xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
            Start with a real StackSmart flow
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-lg text-dark-300">
            Try the free demo with sample data, or go straight to pricing if you are ready to unlock upload, dashboard, and full report access.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "waitlist_section_primary" }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-8 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]"
            >
              Run Free Demo
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "waitlist_section_secondary" }}
              className="inline-flex items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/8 px-8 py-4 font-semibold text-brand-300 transition-all hover:border-brand-500/60 hover:bg-brand-500/15 hover:text-brand-200"
            >
              See Pricing
            </TrackLink>
          </div>

          <p className="mt-5 font-sans text-sm text-dark-500">
            Demo uses sample data · Paid access unlocks upload, dashboard, and report history
          </p>
        </div>
      </div>
    </section>
  );
}
