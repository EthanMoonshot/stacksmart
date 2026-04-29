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
  title: "Josys Alternative for Lean Finance Teams",
  description:
    "Looking for a Josys alternative focused on SaaS spend visibility instead of device and app governance? See when a lightweight report-first savings workflow is a better fit for lean finance and ops teams.",
  path: "/josys-alternative",
});

const jsonLd = buildCompetitorJsonLd({
  competitor: "Josys",
  path: "/josys-alternative",
  title: "Josys Alternative for Lean Finance Teams | StackSmart",
  description:
    "Looking for a Josys alternative focused on SaaS spend visibility instead of device and app governance? See when a lightweight report-first savings workflow is a better fit for lean finance and ops teams.",
  faqs: [
    {
      question: "How is StackSmart different from Josys?",
      answer:
        "Josys is a SaaS and device governance platform with identity management, app lifecycle controls, and IT asset tracking. StackSmart is a report-first tool — upload billing exports, invoices, or contracts and get a savings report with keep, cut, consolidate, and renegotiate actions for finance and ops teams, without deploying governance or identity workflows.",
    },
    {
      question: "Who should use StackSmart instead of Josys?",
      answer:
        "Lean finance or ops teams that want fast visibility into duplicate seats, inactive tools, and renewal risks without deploying a governance platform with identity management, device controls, and app lifecycle workflows.",
    },
    {
      question: "Can I try StackSmart before uploading my own data?",
      answer:
        "Yes. StackSmart has a public sample report you can review before uploading any billing data or paying.",
    },
    {
      question: "Does StackSmart replace Josys for IT governance?",
      answer:
        "No. StackSmart does not handle identity management, device tracking, or app lifecycle governance. It is built for finance and ops teams that need SaaS spend visibility, duplicate-seat findings, renewal-risk flags, and concrete savings actions from billing data.",
    },
  ],
});

export default function JosysAlternativePage() {
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
              Need spend visibility, not governance?
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Josys is built for IT teams managing SaaS and device governance — identity controls, app lifecycle workflows, and asset tracking across the organisation. If your team mainly needs cost clarity from billing data, StackSmart delivers a concrete savings report with keep, cut, consolidate, and renegotiate actions without a governance rollout.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_josys_alternative_primary" }} className="btn-primary text-sm sm:text-base">
                View sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_josys_alternative_secondary" }} className="btn-secondary text-sm sm:text-base">
                View pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <CompetitorQuickAnswer
        competitor="Josys"
        shortAnswer="Josys is a SaaS and device governance platform with identity management, app lifecycle controls, and IT asset tracking. StackSmart is a self-serve savings report for finance and ops — upload billing data and get keep/cut/consolidate/renegotiate actions. No identity layer, no device management."
        bestFit="Lean finance or ops teams that need SaaS spend visibility and savings actions, not a governance platform with identity management and device controls."
        chooseWhen={[
          "You want a savings report from billing data, not identity management or device governance",
          "Your team is finance or ops — you want cost actions, not app lifecycle controls",
          "You want to act on duplicate seats and renewal risks this week, not after deploying a governance platform",
        ]}
      />

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {([
            ["Spend visibility, not governance", "StackSmart produces a savings report from billing data quickly, so finance or ops can surface duplicate seats and renewal risks without deploying identity management or device controls."],
            ["Built for finance and ops", "Useful when the real need is cost clarity and action sequencing, not standing up app lifecycle governance, identity workflows, or IT asset tracking across the organisation."],
            ["Concrete actions from exports", "Upload a CSV export or invoice batch and get a keep, cut, consolidate, and renegotiate report — no agents, no integrations, no governance layer required."],
            ["Proof before commitment", "The public sample report lets stakeholders judge the output and share it internally before paying or uploading live billing data."],
          ] as const).map(([title, copy]) => (
            <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h2 className="text-lg font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-dark-300">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">When StackSmart is the better fit</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-dark-300">
            <p>You want a one-time Snapshot or lightweight recurring review focused on savings, not a governance platform with identity management and device lifecycle controls.</p>
            <p>You care more about surfacing duplicate seats, unused tools, and renewal risks from billing data than managing app access, device compliance, or user identity across SaaS apps.</p>
            <p>You want to start with a CSV export or invoice batch and get a concrete answer before committing to a heavier governance program.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What StackSmart does not do</h2>
          <p className="mt-4 text-sm leading-7 text-dark-300 max-w-3xl">
            StackSmart is not a replacement for Josys if your primary need is identity management, device tracking, or app lifecycle governance. It is designed for teams whose main job is getting spend visibility, finding waste, and acting on the highest-leverage savings from billing data.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_josys_alternative"
            heading="Email yourself the sample report"
            body="Useful if you are comparing Josys alternatives, sharing internally, or want the proof asset in your inbox for later."
            successMessage="Sample report sent. Open it now or come back from your inbox later."
          />
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-semibold text-white">See the output before you commit</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
              Open the public sample report to decide whether StackSmart gives your team the spend visibility and savings actions you actually need — without a governance rollout.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_josys_alternative_footer" }} className="btn-primary text-sm sm:text-base">
                Open sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_josys_alternative_footer" }} className="btn-secondary text-sm sm:text-base">
                Compare plans
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related comparisons"
        title="Compare adjacent StackSmart buying paths"
        description="If you are weighing StackSmart against Josys, these related pages help you compare lighter report-first workflows, adjacent competitor alternatives, and audit approaches for leaner teams."
        links={[
          {
            href: "/bettercloud-alternative",
            title: "BetterCloud alternative for lean finance teams",
            description: "Compare a lighter report-first path for teams evaluating IT operations platforms with security automation and lifecycle controls.",
          },
          {
            href: "/trelica-alternative",
            title: "Trelica alternative for lean finance teams",
            description: "Compare a lighter report-first path for teams evaluating SaaS management platforms with discovery and compliance.",
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
