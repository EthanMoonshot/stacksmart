import type { Metadata } from "next";
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
  title: "Sample SaaS Savings Report",
  description:
    "Inspect a full StackSmart savings report built from real billing data. See what gets flagged, how actions are prioritized, and decide if it fits your review — before you pay.",
  path: "/demo",
});

const sampleModel = buildReportViewModel(sampleAnalysis);

const reportFindings = [
  {
    label: "Duplicate tools",
    detail: "Two tools doing the same job across the same team — one paid annually, one monthly.",
    color: "text-red-400",
    tag: "Cut one",
  },
  {
    label: "Unused seats",
    detail: "14 licensed seats, 6 with no login in 90+ days. Right-size before renewal.",
    color: "text-amber-400",
    tag: "Right-size",
  },
  {
    label: "Overlapping apps",
    detail: "Three separate file-storage subscriptions. One vendor covers all three use cases.",
    color: "text-brand-400",
    tag: "Consolidate",
  },
  {
    label: "Renewal risk",
    detail: "Annual contract renews in 31 days with no usage review completed.",
    color: "text-orange-400",
    tag: "Review now",
  },
  {
    label: "Tier mismatch",
    detail: "Enterprise plan on a design tool used by 3 people. Pro tier covers the same features.",
    color: "text-amber-400",
    tag: "Downgrade",
  },
  {
    label: "Owner ambiguity",
    detail: "Billing owner left the company. No current team member is responsible for the renewal decision.",
    color: "text-dark-400",
    tag: "Assign owner",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Sample SaaS Savings Report | StackSmart",
      description:
        "Inspect a full StackSmart savings report built from real billing data. See what gets flagged, how actions are prioritized, and decide if it fits your review.",
      url: "https://stacksmart.app/demo",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://stacksmart.app" },
        { "@type": "ListItem", position: 2, name: "Sample Report", item: "https://stacksmart.app/demo" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is included in the StackSmart sample report?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The sample report is a full savings report built from example billing data. It includes an executive summary with projected annual savings, categorized tool inventory, four action lanes (cut, consolidate, renegotiate, keep), spend concentration breakdown, and prioritized recommendations with effort ratings.",
          },
        },
        {
          "@type": "Question",
          name: "How is the sample report different from a paid report?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The sample uses example billing data instead of your own. A paid report uses your uploaded CSV or invoice data and generates private, specific recommendations for your stack. Paid reports also include export, share, and report history features.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to sign up to view the sample report?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The sample report is fully public with no login, no signup, and no blocked sections. You can inspect every section of the report before deciding whether to purchase.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between a Snapshot and a recurring plan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Snapshot is a one-time self-serve audit — upload billing data once, get a full savings report. Recurring plans add ongoing visibility with renewal alerts, report history, and repeated optimization across a growing software stack.",
          },
        },
      ],
    },
  ],
};

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-dark-950 text-white">
      <EventTracker event="demo_loaded" props={{ location: "demo_page" }} />
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="border-b border-dark-800/80 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-success-500/25 bg-success-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-success-400">
              Public sample report
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Inspect the full report before you pay
            </h1>
            <p className="mt-5 max-w-[60ch] text-lg leading-8 text-dark-300">
              This is a real savings report built from sample billing data. No login, no blocked sections, no fake product tour. See exactly how StackSmart turns a billing export into clear cut, consolidate, and renegotiate actions — then decide if it fits your review.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/pricing" event="demo_cta_clicked" props={{ target: "pricing", location: "demo_hero" }} className="btn-primary text-sm sm:text-base">
                Unlock my report
              </TrackLink>
              <TrackLink href="/#how-it-works" event="demo_cta_clicked" props={{ target: "how_it_works", location: "demo_hero" }} className="btn-secondary text-sm sm:text-base">
                See how it works
              </TrackLink>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
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
      </section>

      {/* What you will spot in this report */}
      <section className="border-b border-dark-800/80 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">What you will spot in this report</p>
          <h2 className="mt-4 text-2xl font-semibold text-white">Real finding categories, not vague promises</h2>
          <p className="mt-3 max-w-[60ch] text-sm leading-7 text-dark-300">
            Every StackSmart report surfaces specific, actionable findings from billing data. Here are the categories you will see in the sample report below — the same categories that appear in paid reports.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {reportFindings.map((f) => (
              <div key={f.label} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className={`text-sm font-semibold ${f.color}`}>{f.label}</h3>
                  <span className="flex-shrink-0 rounded-full border border-dark-600 bg-dark-800 px-2.5 py-0.5 text-xs text-dark-300">{f.tag}</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-dark-300">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample vs paid — proof framing */}
      <section className="border-b border-dark-800/80 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What you are seeing vs what you get after purchase</h2>
          <p className="mt-3 max-w-[60ch] text-sm leading-7 text-dark-300">
            The sample report uses example billing data, but the structure, analysis, and recommendation format are identical to a paid report. You are judging the real product, not a mockup.
          </p>
          <div className="mt-10 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">This sample report includes</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Executive summary with projected annual savings</li>
                <li>Full categorized tool inventory</li>
                <li>Four action lanes: cut, consolidate, renegotiate, keep</li>
                <li>Spend concentration and category breakdown</li>
                <li>Prioritized recommendations with effort ratings</li>
              </ul>
              <p className="mt-5 text-xs leading-6 text-dark-400">
                This is enough to judge whether the report format, depth, and action clarity match what your team needs.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-500/20 bg-brand-500/5 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Your paid report adds</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Upload your own billing CSV or invoice data</li>
                <li>Private report with findings specific to your stack</li>
                <li>Export to PDF or share a read-only link</li>
                <li>Saved report history and dashboard access</li>
              </ul>
              <div className="mt-5">
                <TrackLink href="/pricing" event="demo_cta_clicked" props={{ target: "pricing", location: "demo_proof_framing" }} className="text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors">
                  See pricing and plans
                </TrackLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The report */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-success-400">Full sample report</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">Scroll through the complete report</h2>
            <p className="mt-3 max-w-[60ch] text-sm leading-7 text-dark-300">
              Everything below is the actual report output — executive summary, action lanes, category breakdown, and prioritized recommendations. Nothing is hidden or gated.
            </p>
          </div>
          <ReportView model={sampleModel} shared />
        </div>
      </section>

      {/* Qualification — who this is for */}
      <section className="border-y border-dark-800/80 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is this the right fit for your team?</h2>
          <p className="mt-3 max-w-[60ch] text-sm leading-7 text-dark-300">
            StackSmart is built for growing teams that need fast, structured spend visibility — not enterprise procurement workflows.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Founders, ops leads, or finance owners managing 10+ paid tools</li>
                <li>Teams with recurring software spend that has not been reviewed recently</li>
                <li>Companies preparing for budget season, fundraising, or headcount planning</li>
                <li>Anyone who wants a structured starting point before vendor negotiations</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Enterprise procurement teams needing SSO, approval chains, and compliance workflows</li>
                <li>Organizations requiring live usage telemetry from each individual tool</li>
                <li>Teams with fewer than 5 software subscriptions</li>
                <li>Companies that already have tight software governance in place</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Buyer path routing — 3 paths */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Choose your next step</p>
          <h2 className="mt-4 text-2xl font-semibold text-white">Three ways to move forward</h2>
          <p className="mt-3 max-w-[60ch] text-sm leading-7 text-dark-300">
            Not every buyer needs the same path. Pick the one that matches how you buy software today.
          </p>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-success-500/20 bg-success-500/5 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-success-300">One-time audit</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Get a Snapshot</h3>
              <p className="mt-3 text-sm leading-7 text-dark-200">
                Upload billing data once, get a full savings report. Best for founders and ops leads who want a quick, self-serve answer on what to cut or renegotiate.
              </p>
              <div className="mt-6">
                <TrackLink href="/pricing" event="demo_buyer_path_clicked" props={{ target: "snapshot", location: "demo_buyer_routing" }} className="btn-primary text-sm">
                  See Snapshot pricing
                </TrackLink>
              </div>
            </div>
            <div className="rounded-2xl border border-brand-500/20 bg-brand-500/5 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Recurring oversight</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Choose an ongoing plan</h3>
              <p className="mt-3 text-sm leading-7 text-dark-200">
                Keep savings visibility running month over month. Best for finance and ops owners managing software spend across multiple teams.
              </p>
              <div className="mt-6">
                <TrackLink href="/pricing" event="demo_buyer_path_clicked" props={{ target: "ongoing_plan", location: "demo_buyer_routing" }} className="btn-secondary text-sm">
                  Compare plans
                </TrackLink>
              </div>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Still deciding</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Email yourself this report</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">
                Send the sample report to your inbox so you can share it internally or come back when you are ready to run your own stack.
              </p>
              <div className="mt-6">
                <TrackLink href="#email-capture" event="demo_buyer_path_clicked" props={{ target: "email_report", location: "demo_buyer_routing" }} className="text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors">
                  Scroll to email capture
                </TrackLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead capture */}
      <section id="email-capture" className="pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="demo_page"
            heading="Want this report in your inbox?"
            body="Comparing tools or sharing internally? Email yourself the sample report and come back when you are ready to run your own stack."
            successMessage="Sample report sent. Keep exploring below or return from your inbox later."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-dark-700 bg-dark-900/75 p-8 text-center">
            <h2 className="text-3xl font-semibold text-white">Ready to run this on your stack?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
              Start with a one-time Snapshot if you want a self-serve savings report, or choose a recurring plan for ongoing visibility.
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
