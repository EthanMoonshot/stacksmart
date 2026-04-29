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
  title: "BetterCloud Alternative for Lean Finance Teams",
  description:
    "Looking for a BetterCloud alternative focused on SaaS spend visibility instead of IT automation? See when a lightweight report-first savings workflow is a better fit for lean finance and ops teams.",
  path: "/bettercloud-alternative",
});

const jsonLd = buildCompetitorJsonLd({
  competitor: "BetterCloud",
  path: "/bettercloud-alternative",
  title: "BetterCloud Alternative for Lean Finance Teams | StackSmart",
  description:
    "Looking for a BetterCloud alternative focused on SaaS spend visibility instead of IT automation? See when a lightweight report-first savings workflow is a better fit for lean finance and ops teams.",
  faqs: [
    {
      question: "How is StackSmart different from BetterCloud?",
      answer:
        "BetterCloud is an IT operations and SaaS management platform focused on automated workflows, security policies, and user lifecycle management. StackSmart is a report-first tool — upload billing exports, invoices, or contracts and get a savings report with keep, cut, consolidate, and renegotiate actions for finance and ops teams, not IT automation.",
    },
    {
      question: "Who should use StackSmart instead of BetterCloud?",
      answer:
        "Finance or ops teams that want fast visibility into duplicate seats, inactive tools, and renewal risks without deploying an IT-focused operations platform with security policies, automated workflows, and user lifecycle controls.",
    },
    {
      question: "Can I try StackSmart before uploading my own data?",
      answer:
        "Yes. StackSmart has a public sample report you can review before uploading any billing data or paying.",
    },
  ],
});

export default function BetterCloudAlternativePage() {
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
              Need spend visibility, not IT automation?
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              BetterCloud is built for IT teams that need automated workflows, security policies, and user lifecycle management across SaaS apps. If your team needs cost clarity and savings actions instead, StackSmart turns billing exports into a concrete keep, cut, consolidate, and renegotiate report — without an IT operations rollout.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_bettercloud_alternative_primary" }} className="btn-primary text-sm sm:text-base">
                View sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_bettercloud_alternative_secondary" }} className="btn-secondary text-sm sm:text-base">
                View pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <CompetitorQuickAnswer
        competitor="BetterCloud"
        shortAnswer="BetterCloud is an IT operations platform with automated workflows, security policies, and user lifecycle management. StackSmart is a self-serve savings report for finance and ops — upload billing data and get keep/cut/consolidate/renegotiate actions. No IT automation layer, no security-policy rollout."
        bestFit="Finance or ops teams that need SaaS spend visibility and savings actions, not an IT-focused operations platform with security automation and lifecycle controls."
        chooseWhen={[
          "You want a savings report from billing data, not automated IT workflows or security policies",
          "Your team is finance or ops — you want cost actions, not user lifecycle management",
          "You want to act on spend data this week, not after deploying an IT operations platform",
        ]}
      />

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ["Spend visibility, not IT operations", "StackSmart produces a savings report from billing data quickly, so finance or ops can surface duplicate seats and renewal risks without deploying IT automation or security-policy workflows."],
            ["Built for finance and ops teams", "Useful when the real need is cost clarity and action sequencing, not standing up automated user provisioning, security policies, or lifecycle controls across SaaS apps."],
            ["Proof before commitment", "The public sample report lets you judge the output and share it internally before paying or uploading live billing data."],
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
          <h2 className="text-2xl font-semibold text-white">When StackSmart is the better BetterCloud alternative</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-dark-300">
            <p>You want a one-time Snapshot or lightweight recurring review focused on savings, not an IT operations platform with security automation and lifecycle management.</p>
            <p>You care more about surfacing duplicate seats, unused tools, and renewal risks from billing data than automating user provisioning or enforcing security policies.</p>
            <p>You want to start with a CSV export or invoice batch and get a concrete answer before committing to a heavier IT-focused program.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_bettercloud_alternative"
            heading="Email yourself the sample report"
            body="Useful if you are comparing BetterCloud alternatives, sharing internally, or want the proof asset in your inbox for later."
            successMessage="Sample report sent. Open it now or come back from your inbox later."
          />
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-semibold text-white">See the output before you commit</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
              Open the public sample report to decide whether StackSmart gives your team the spend visibility and savings actions you actually need — without an IT operations rollout.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_bettercloud_alternative_footer" }} className="btn-primary text-sm sm:text-base">
                Open sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_bettercloud_alternative_footer" }} className="btn-secondary text-sm sm:text-base">
                Compare plans
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related comparisons"
        title="Compare adjacent StackSmart buying paths"
        description="If you are weighing StackSmart against BetterCloud, these related pages help you compare lighter report-first workflows, adjacent competitor alternatives, and cost-audit paths for leaner teams."
        links={[
          {
            href: "/josys-alternative",
            title: "Josys alternative for lean finance teams",
            description: "Compare a lighter report-first path for teams evaluating SaaS and device governance platforms with identity management.",
          },
          {
            href: "/cloudeagle-alternative",
            title: "CloudEagle alternative for lean finance teams",
            description: "Compare a lighter report-first path for teams evaluating broader SaaS management and procurement platforms.",
          },
          {
            href: "/saas-cost-optimization-software",
            title: "SaaS cost optimization software",
            description: "See how StackSmart fits when the main job is fast savings visibility rather than IT operations or automation.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
