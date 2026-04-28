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
  title: "CloudEagle Alternative for Lean Finance Teams",
  description:
    "Looking for a CloudEagle alternative without a broad SaaS management rollout? See when a lightweight report-first savings workflow is a better fit for lean finance and ops teams.",
  path: "/cloudeagle-alternative",
});

const jsonLd = buildCompetitorJsonLd({
  competitor: "CloudEagle",
  path: "/cloudeagle-alternative",
  title: "CloudEagle Alternative for Lean Finance Teams | StackSmart",
  description:
    "Looking for a CloudEagle alternative without a broad SaaS management rollout? See when a lightweight report-first savings workflow is a better fit for lean finance and ops teams.",
  faqs: [
    {
      question: "How is StackSmart different from CloudEagle?",
      answer:
        "CloudEagle is a broader SaaS management and procurement platform with discovery, renewal, and workflow controls. StackSmart is a report-first tool — upload billing exports, invoices, or contracts and get a savings report with keep, cut, consolidate, and renegotiate actions your team can run directly.",
    },
    {
      question: "Who should use StackSmart instead of CloudEagle?",
      answer:
        "Lean finance or ops teams that want fast visibility into duplicate seats, inactive tools, and renewal risks without committing to a larger SaaS management rollout. It is best for teams under roughly 50 people that want quick savings clarity first.",
    },
    {
      question: "Can I try StackSmart before uploading my own data?",
      answer:
        "Yes. StackSmart has a public sample report you can review before uploading any billing data or paying.",
    },
  ],
});

export default function CloudEagleAlternativePage() {
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
              Need a CloudEagle alternative without a full SaaS-management rollout?
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              If your team mainly wants fast savings visibility, StackSmart gives you a quicker path from billing exports to concrete keep, cut, consolidate, and renegotiate actions — without layering on a broader discovery, workflow, and procurement program first.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_cloudeagle_alternative_primary" }} className="btn-primary text-sm sm:text-base">
                View sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_cloudeagle_alternative_secondary" }} className="btn-secondary text-sm sm:text-base">
                View pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <CompetitorQuickAnswer
        competitor="CloudEagle"
        shortAnswer="CloudEagle is a broader SaaS management and procurement platform with discovery, renewal, and workflow controls. StackSmart is a self-serve savings report — upload billing data and get keep/cut/consolidate/renegotiate actions your team can execute directly. No larger rollout required."
        bestFit="Lean finance or ops teams that want duplicate-seat, inactive-tool, and renewal-risk visibility quickly, before committing to a broader SaaS management layer."
        chooseWhen={[
          "You want a concrete savings report from exports or invoices before adopting a heavier management platform",
          "You care more about surfacing duplicate seats and renewal risks fast than rolling out broader workflow controls",
          "You want a one-time Snapshot or lightweight recurring review instead of a full SaaS-management program",
        ]}
      />

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ["Faster answer, lighter rollout", "StackSmart turns billing exports and invoices into a savings report quickly, so finance or ops can act before taking on a wider SaaS-management implementation."],
            ["Savings actions your team can run", "Get keep, cut, consolidate, and renegotiate recommendations your team can execute directly instead of starting with a larger platform migration."],
            ["Useful before platform-level commitment", "The sample report helps you judge whether a lighter report-first workflow is already enough before you commit to broader discovery or governance tooling."],
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
          <h2 className="text-2xl font-semibold text-white">When StackSmart is the better CloudEagle alternative</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-dark-300">
            <p>You want a one-time Snapshot or a lightweight recurring review instead of a broader SaaS management rollout with more process overhead.</p>
            <p>You care more about surfacing duplicate seats, unused tools, and renewal risks this week than building a larger operating layer around software management.</p>
            <p>You want to start with exports, invoices, or contracts and get a concrete answer before deciding whether a heavier platform is truly necessary.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_cloudeagle_alternative"
            heading="Email yourself the sample report"
            body="Useful if you are comparing CloudEagle alternatives, sharing internally, or want the proof asset in your inbox for later."
            successMessage="Sample report sent. Open it now or come back from your inbox later."
          />
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-semibold text-white">See the output before you commit</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
              Open the public sample report to decide whether StackSmart gives your team the lighter-weight savings workflow you actually need — before you commit to a broader SaaS-management program.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_cloudeagle_alternative_footer" }} className="btn-primary text-sm sm:text-base">
                Open sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_cloudeagle_alternative_footer" }} className="btn-secondary text-sm sm:text-base">
                Compare plans
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related comparisons"
        title="Compare adjacent StackSmart buying paths"
        description="If you are weighing StackSmart against CloudEagle, these related pages help you compare lighter report-first workflows, adjacent procurement alternatives, and cost-audit paths for leaner teams."
        links={[
          {
            href: "/vertice-alternative",
            title: "Vertice alternative for lean finance teams",
            description: "Compare a lighter report-first path for teams evaluating SaaS procurement and vendor-management platforms.",
          },
          {
            href: "/bettercloud-alternative",
            title: "BetterCloud alternative for lean finance teams",
            description: "Compare a lighter report-first path for teams evaluating IT operations and SaaS automation platforms.",
          },
          {
            href: "/saas-cost-optimization-software",
            title: "SaaS cost optimization software",
            description: "See how StackSmart fits when the main job is fast savings visibility rather than a broader management layer.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
