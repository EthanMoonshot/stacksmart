import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import CompetitorQuickAnswer from "@/components/seo/CompetitorQuickAnswer";
import { buildMetadata } from "@/lib/site";
import { buildCompetitorJsonLd } from "@/lib/competitor-jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Spendesk Alternative for Small Teams",
  description:
    "Looking for a Spendesk alternative for a smaller team? See when a lightweight SaaS savings report is a better fit than a broader spend-control platform.",
  path: "/spendesk-alternative",
});

const jsonLd = buildCompetitorJsonLd({
  competitor: "Spendesk",
  path: "/spendesk-alternative",
  title: "Spendesk Alternative for Small Teams | StackSmart",
  description:
    "Looking for a Spendesk alternative for a smaller team? See when a lightweight SaaS savings report is a better fit than a broader spend-control platform.",
  faqs: [
    {
      question: "How is StackSmart different from Spendesk?",
      answer:
        "Spendesk is a spend-control platform covering corporate cards, expense management, and invoice processing. StackSmart focuses specifically on SaaS spend — upload billing data and get a savings report with keep, cut, consolidate, and renegotiate actions.",
    },
    {
      question: "Who should use StackSmart instead of Spendesk?",
      answer:
        "Small teams that need to reduce SaaS costs quickly without adopting a broader spend-control platform. StackSmart works from billing exports — no corporate card rollout or expense policy setup required.",
    },
    {
      question: "Can I try StackSmart before uploading my own data?",
      answer:
        "Yes. StackSmart has a public sample report you can review before uploading any billing data or paying.",
    },
  ],
});

export default function SpendeskAlternativePage() {
  return (
    <main className="min-h-screen bg-dark-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <section className="border-b border-dark-800/80 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Competitor alternative</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Need a Spendesk alternative that gets you to savings without extra platform overhead?
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              If you are a smaller team, you may not need another spend-control system. You may just need a fast way to turn invoices and billing exports into clear cut, consolidate, and renegotiate actions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_spendesk_alternative_primary" }} className="btn-primary text-sm sm:text-base">
                View sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_spendesk_alternative_secondary" }} className="btn-secondary text-sm sm:text-base">
                View pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <CompetitorQuickAnswer
        competitor="Spendesk"
        shortAnswer="Spendesk is a spend-control platform with corporate cards and expense workflows. StackSmart is a SaaS-specific savings report — upload billing data, get keep/cut/consolidate/renegotiate actions. No card rollout or expense policy setup."
        bestFit="Small finance or ops teams that want to reduce SaaS costs specifically, without adopting a full corporate spend-control layer."
        chooseWhen={[
          "Your problem is SaaS waste, not general expense management",
          "You want a savings report from billing exports, not a corporate card program",
          "You need to act on cost data this week, not after a platform rollout",
        ]}
      />

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ["Report-first workflow", "StackSmart is built to produce a buyer-facing savings report quickly, without asking a small team to adopt a bigger control layer first."],
            ["Better fit for lean teams", "Useful when the real job is to identify waste, duplication, and renegotiation opportunities, not roll out a broader procurement process."],
            ["Proof before purchase", "The public sample report gives finance or ops stakeholders something concrete to review before buying or uploading live billing data."],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h2 className="text-lg font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-dark-300">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">When StackSmart is the better alternative</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-dark-300">
            <p>You want a one-time Snapshot or a lightweight recurring savings review, not a broader spend-management rollout.</p>
            <p>You care more about finding avoidable SaaS spend fast than implementing policy-heavy purchasing workflows.</p>
            <p>You want to start with billing data you already have and get clear next actions quickly.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_spendesk_alternative"
            heading="Email yourself the sample report"
            body="Useful if you are comparing Spendesk alternatives, sharing internally, or want to keep the proof asset for later."
            successMessage="Sample report sent. Open it now or come back from your inbox later."
          />
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-semibold text-white">See the output before you commit</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
              Open the public sample report to see whether StackSmart is the lighter-weight alternative your team actually needs.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_spendesk_alternative_footer" }} className="btn-primary text-sm sm:text-base">
                Open sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_spendesk_alternative_footer" }} className="btn-secondary text-sm sm:text-base">
                Compare plans
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related comparisons"
        title="Compare adjacent StackSmart buying paths"
        description="If you are weighing StackSmart against Spendesk, these related pages help you compare broader spend-management tools, audit workflows, and lighter savings-first options for smaller teams."
        links={[
          {
            href: "/vendr-alternative",
            title: "Vendr alternative for lean finance teams",
            description: "Compare another lighter-weight alternative for teams that want savings clarity without procurement overhead.",
          },
          {
            href: "/saas-cost-optimization-software",
            title: "SaaS cost optimization software",
            description: "See how StackSmart fits teams that mainly want savings actions, not a bigger management layer.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See how StackSmart turns billing exports into concrete keep, cut, consolidate, and renegotiate actions.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
