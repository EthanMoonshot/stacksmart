import type { Metadata } from "next";
import Link from "next/link";
import EventTracker from "@/components/analytics/EventTracker";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import ReportView from "@/components/report/ReportView";
import { buildReportViewModel } from "@/lib/report";
import { buildMetadata } from "@/lib/site";
import { sampleAnalysis, sampleReportCreatedAt } from "@/lib/sample-report";

export const metadata: Metadata = buildMetadata({
  title: "Sample Savings Report",
  description:
    "Preview the kind of StackSmart savings report buyers get after upload, without signing in or starting checkout.",
  path: "/demo",
});

const sampleModel = buildReportViewModel(sampleAnalysis);

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-dark-950 text-white">
      <EventTracker event="demo_loaded" props={{ location: "demo_page" }} />
      <Navbar />

      <section className="border-b border-dark-800/80 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-28 pb-12 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-success-500/25 bg-success-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-success-400">
              Public sample report
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              See exactly what StackSmart delivers before you pay.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-dark-300">
              This is a real example walkthrough built from sample billing data. No login, no fake product tour, and no blocked steps. If you buy, your own upload follows the same self-serve report flow.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/pricing" event="demo_cta_clicked" props={{ target: "pricing", location: "demo_hero" }} className="btn-primary text-sm sm:text-base">
                Unlock my report
              </TrackLink>
              <TrackLink href="/#how-it-works" event="demo_cta_clicked" props={{ target: "how_it_works", location: "demo_hero" }} className="btn-secondary text-sm sm:text-base">
                See how it works
              </TrackLink>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["Sample stack", `${sampleAnalysis.toolCount} tools across 5 categories`],
                ["Projected savings", `$${sampleModel.annualProjection.toLocaleString()} per year`],
                ["Report generated", new Date(sampleReportCreatedAt).toLocaleDateString()],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-dark-400">{label}</p>
                  <p className="mt-2 text-base font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-dark-800/80 py-10">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="rounded-[24px] border border-dark-700 bg-dark-900/70 p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-dark-400">What you are seeing</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">A customer-facing savings report, not a teaser screen</h2>
            <p className="mt-3 text-sm leading-7 text-dark-300">
              StackSmart turns billing data into clear actions: what to cut, what to consolidate, what to renegotiate, and what is fine to keep. The paid product adds private uploads, report history, export/share actions, and your own recommendations.
            </p>
          </div>
          <div className="rounded-[24px] border border-brand-500/20 bg-brand-500/5 p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Included after purchase</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
              <li>Upload your billing CSV or invoice data</li>
              <li>Generate a live private report in minutes</li>
              <li>Share snapshots or export a PDF</li>
              <li>Access dashboard and saved report history</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-dark-800/80 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Choose the right buying path</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Use the sample report to decide if you want a one-off audit or ongoing optimisation</h2>
            <p className="mt-3 text-sm leading-7 text-dark-300">
              Buyers do not all need the same next step. Some just want a fast savings snapshot. Others want recurring visibility across renewals, waste, and owner follow-up. Pick the path that matches how you buy software today.
            </p>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="rounded-[28px] border border-success-500/20 bg-success-500/5 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-success-300">Best for self-serve buyers</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Start with a one-time Snapshot</h3>
              <p className="mt-3 text-sm leading-7 text-dark-200">
                Choose this if you want a quick answer on what to cancel, consolidate, or renegotiate without committing to another ongoing tool.
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Good fit for founders, operators, and finance owners doing a point-in-time audit</li>
                <li>Fastest path from upload to savings recommendations</li>
                <li>Useful when you need proof before rolling out a recurring process</li>
              </ul>
              <div className="mt-6">
                <TrackLink href="/pricing" event="demo_buyer_path_clicked" props={{ target: "snapshot", location: "demo_buyer_routing" }} className="btn-primary text-sm sm:text-base">
                  See Snapshot pricing
                </TrackLink>
              </div>
            </div>
            <div className="rounded-[28px] border border-brand-500/20 bg-brand-500/5 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Best for recurring oversight</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Choose an ongoing plan</h3>
              <p className="mt-3 text-sm leading-7 text-dark-200">
                Choose this if your team needs continuing visibility into spend creep, renewals, and repeated cleanup across a growing software stack.
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Good fit for finance, ops, and IT owners managing software across multiple teams</li>
                <li>Better for recurring optimisation instead of a one-time clean-up</li>
                <li>Designed for teams that want report history and a reusable review motion</li>
              </ul>
              <div className="mt-6">
                <TrackLink href="/pricing" event="demo_buyer_path_clicked" props={{ target: "ongoing_plan", location: "demo_buyer_routing" }} className="btn-secondary text-sm sm:text-base">
                  Compare recurring plans
                </TrackLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ReportView model={sampleModel} shared />
        </div>
      </section>

      <section className="pb-8 pt-4">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="demo_page"
            heading="Want the sample report link in your inbox?"
            body="If you are comparing tools or sharing this internally, email yourself the sample report now and come back when you are ready to run your own stack."
            successMessage="Sample report sent. You can keep exploring the report below or come back from your inbox later."
          />
        </div>
      </section>

      <section className="pb-20 pt-4">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] border border-dark-700 bg-dark-900/75 p-8 text-center shadow-xl">
            <h2 className="text-3xl font-semibold text-white">Ready to run this on your own stack?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
              Start with the Snapshot if you want a one-time self-serve savings report, or choose a recurring plan if you want ongoing optimisation.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackLink href="/pricing" event="demo_cta_clicked" props={{ target: "pricing", location: "demo_footer" }} className="btn-primary text-sm sm:text-base">
                Unlock my report
              </TrackLink>
              <TrackLink href="/login" event="demo_cta_clicked" props={{ target: "login", location: "demo_footer" }} className="btn-secondary text-sm sm:text-base">
                Sign in to existing purchase
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
