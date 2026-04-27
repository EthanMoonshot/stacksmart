import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "How to Reduce SaaS Spend for Small Business",
  description:
    "See a practical path to reduce SaaS spend for small business teams, from finding duplicate subscriptions to acting on the highest-leverage savings first.",
  path: "/reduce-saas-spend-small-business",
});

export default function ReduceSaaSSpendSmallBusinessPage() {
  return (
    <main className="min-h-screen bg-dark-950 text-white">
      <Navbar />

      <section className="border-b border-dark-800/80 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Practical buying-intent page</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">How small businesses reduce SaaS spend without breaking the tools they still need</h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              The goal is not random cost cutting. The goal is to find waste, duplication, and pricing mismatch, then act on the biggest savings first. StackSmart is built to make that process faster.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_reduce_saas_spend_primary" }} className="btn-primary text-sm sm:text-base">
                See a sample savings report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_reduce_saas_spend_secondary" }} className="btn-secondary text-sm sm:text-base">
                See StackSmart pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Find duplicate tools", "Look for multiple products solving the same workflow across teams."],
              ["Spot overpriced subscriptions", "Identify tools where tier, seats, or contract terms likely no longer fit."],
              ["Sequence action", "Fix the largest, clearest opportunities before chasing smaller clean-up wins."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h2 className="text-lg font-semibold text-white">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-dark-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">A simple process that works</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-dark-300">
            <p>1. Gather billing exports or invoice data.</p>
            <p>2. Turn the raw rows into category-level spend and concrete recommendations.</p>
            <p>3. Review what to cut, what to consolidate, and what to renegotiate.</p>
            <p>4. Use the report to decide where to focus first, instead of guessing.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_reduce_saas_spend_small_business"
            heading="Send the sample report to yourself"
            body="Useful if you are reviewing savings options now but want the proof asset in your inbox for later or for internal sharing."
            successMessage="Sample report sent. You can view it now or return from your inbox later."
          />
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-semibold text-white">Want to see the end result first?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
              Open the public sample report to see the StackSmart output before you upload anything.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_reduce_saas_spend_footer" }} className="btn-primary text-sm sm:text-base">
                View sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_reduce_saas_spend_footer" }} className="btn-secondary text-sm sm:text-base">
                View pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
