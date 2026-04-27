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
  title: "Cledara Alternative for Small Teams",
  description:
    "Looking for a Cledara alternative for a smaller team? See when a lightweight self-serve savings report is more useful than a heavier SaaS management platform.",
  path: "/cledara-alternative",
});

const jsonLd = buildCompetitorJsonLd({
  competitor: "Cledara",
  path: "/cledara-alternative",
  title: "Cledara Alternative for Small Teams | StackSmart",
  description:
    "Looking for a Cledara alternative for a smaller team? See when a lightweight self-serve savings report is more useful than a heavier SaaS management platform.",
  faqs: [
    {
      question: "How is StackSmart different from Cledara?",
      answer:
        "Cledara is a SaaS management platform focused on subscription tracking, virtual cards, and approval workflows. StackSmart is a report-first tool that turns billing exports into a concrete savings report with keep, cut, consolidate, and renegotiate actions — no platform rollout required.",
    },
    {
      question: "Who should use StackSmart instead of Cledara?",
      answer:
        "Teams under 200 people that need fast cost visibility and a concrete action list from their billing data, rather than a broader SaaS management layer with virtual cards and approval workflows.",
    },
    {
      question: "Can I try StackSmart before uploading my own data?",
      answer:
        "Yes. StackSmart has a public sample report you can review before uploading any billing data or paying.",
    },
  ],
});

export default function CledaraAlternativePage() {
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
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Need a Cledara alternative that gets you to savings faster?</h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              If you are a smaller team, you may not need a full SaaS management platform. You may just need a fast way to turn billing exports into clear cut, consolidate, and renegotiate actions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_cledara_alternative_primary" }} className="btn-primary text-sm sm:text-base">
                View sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_cledara_alternative_secondary" }} className="btn-secondary text-sm sm:text-base">
                View pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <CompetitorQuickAnswer
        competitor="Cledara"
        shortAnswer="Cledara is a SaaS management platform with virtual cards and approval workflows. StackSmart is a self-serve savings report — upload billing data, get keep/cut/consolidate/renegotiate actions. Faster to start, no platform rollout."
        bestFit="Lean finance or ops teams under 200 people that need cost visibility from billing data before committing to a broader SaaS management layer."
        chooseWhen={[
          "You need a savings report this week, not a platform implementation over months",
          "You want concrete actions from billing data, not subscription tracking and virtual cards",
          "Your team is too small to justify a per-seat SaaS management platform",
        ]}
      />

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ["Faster first answer", "StackSmart is built to get a buyer-facing report from billing data quickly, without heavy setup."],
            ["Good fit for SMBs", "Useful when the real need is cost visibility and action sequencing, not a broader procurement platform."],
            ["See before you buy", "The public sample report lets you judge the output before paying or uploading real data."],
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
            <p>You want a one-time or lightweight recurring review rather than a full management layer.</p>
            <p>You care more about finding savings opportunities fast than implementing a broad software-control workflow.</p>
            <p>You want to start with a CSV export and get a concrete answer quickly.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_cledara_alternative"
            heading="Email yourself the sample report"
            body="Useful if you are comparing alternatives, sharing internally, or want to come back later without losing the proof asset."
            successMessage="Sample report sent. Open it now or return from your inbox later."
          />
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-semibold text-white">See the output first</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
              Open the public sample report to see whether StackSmart is the lighter-weight alternative you actually need.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_cledara_alternative_footer" }} className="btn-primary text-sm sm:text-base">
                Open sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_cledara_alternative_footer" }} className="btn-secondary text-sm sm:text-base">
                Compare plans
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related comparisons"
        title="Compare adjacent StackSmart buying paths"
        description="If you are weighing StackSmart against Cledara, these related pages help you compare broader spend-management options, audit approaches, and what a lighter SMB-first workflow looks like."
        links={[
          {
            href: "/vendr-alternative",
            title: "Vendr alternative for lean finance teams",
            description: "Compare when a procurement-heavy platform makes sense versus a lighter report-first savings workflow.",
          },
          {
            href: "/best-saas-spend-management-tools",
            title: "Best SaaS spend management tools",
            description: "Compare when a full platform makes sense versus when a fast report-first workflow is enough.",
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
