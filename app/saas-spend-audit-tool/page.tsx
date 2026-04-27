import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "SaaS Spend Audit Tool",
  description:
    "Looking for a SaaS spend audit tool? See how StackSmart turns billing exports into clear cut, consolidate, and renegotiate actions for growing teams.",
  path: "/saas-spend-audit-tool",
});

export default function SaaSSpendAuditToolPage() {
  return (
    <main className="min-h-screen bg-dark-950 text-white">
      <Navbar />

      <section className="border-b border-dark-800/80 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Bottom-funnel guide</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Need a SaaS spend audit tool that actually shows what to do next?</h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Most teams do not need another generic software inventory. They need a fast way to turn billing exports into action: what to cut, what to consolidate, what to renegotiate, and where spend is fine.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_saas_spend_audit_tool_primary" }} className="btn-primary text-sm sm:text-base">
                View sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_saas_spend_audit_tool_secondary" }} className="btn-secondary text-sm sm:text-base">
                View pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ["Upload billing data", "Start with a CSV export or invoice data. No bank access required for the core flow."],
            ["Get a savings report", "StackSmart groups tools, surfaces overlaps, and shows likely savings opportunities."],
            ["Take action faster", "Use the report to cut waste, consolidate tools, and renegotiate with more confidence."],
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
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-2xl font-semibold text-white">What a strong SaaS spend audit tool should help you answer</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-dark-300">
                <p>Which subscriptions are duplicated across teams?</p>
                <p>Which tools look overpriced for their likely level of use?</p>
                <p>Where is spend concentrated by category, so you know what deserves negotiation attention first?</p>
                <p>What is worth keeping, so you are not cutting software blindly?</p>
              </div>
            </div>
            <div className="rounded-[24px] border border-brand-500/20 bg-brand-500/5 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Why StackSmart</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Built for fast SMB review, not enterprise procurement theatre</li>
                <li>CSV-first and self-serve</li>
                <li>Public sample report available before purchase</li>
                <li>Designed to lead to action, not just a spreadsheet dump</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_saas_spend_audit_tool"
            heading="Email yourself the sample report"
            body="A simple way to keep the proof asset handy while you compare options or share it with someone else on the team."
            successMessage="Sample report sent. You can open it now or return from your inbox later."
          />
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-semibold text-white">See the output before you buy</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
              The fastest way to judge StackSmart is to open the sample report and see the kind of buyer-facing output it delivers.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_saas_spend_audit_tool_footer" }} className="btn-primary text-sm sm:text-base">
                Open sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_saas_spend_audit_tool_footer" }} className="btn-secondary text-sm sm:text-base">
                Compare plans
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Pick the path that fits your team</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Whether you need a one-time audit or ongoing savings visibility, StackSmart has a plan for that.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">One-time audit</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Snapshot — $49</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Upload billing data once, get a full savings report with clear next actions. No subscription required.
              </p>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_saas_spend_audit_tool_routing_snapshot" }} className="btn-primary mt-5 inline-block text-sm">
                Get Snapshot
              </TrackLink>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Ongoing oversight</p>
              <h3 className="mt-3 text-lg font-semibold text-white">Starter or Growth — from $29/mo</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                Keep savings visibility running month over month with renewal alerts and ongoing recommendations.
              </p>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_saas_spend_audit_tool_routing_recurring" }} className="btn-secondary mt-5 inline-block text-sm">
                Compare plans
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit paths"
        title="Explore related StackSmart audit and savings pages"
        description="If you are looking for a SaaS spend audit tool, these related pages help you compare audit methods, software-cost optimisation approaches, and next-step decision support."
        links={[
          {
            href: "/how-to-audit-software-subscriptions",
            title: "How to audit software subscriptions",
            description: "See a simple sequence for turning recurring software spend into concrete action.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "Use a practical checklist to structure the review before turning it into a report.",
          },
          {
            href: "/saas-cost-optimization-software",
            title: "SaaS cost optimization software",
            description: "Compare StackSmart with broader cost-optimisation approaches and see where a report-first workflow fits.",
          },
          {
            href: "/saas-spend-management",
            title: "SaaS spend management",
            description: "Understand the three approaches to spend management and find the right starting point for your team.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
