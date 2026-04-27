import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Jira Cost for Small Teams",
  description:
    "Review Jira cost for small teams, where pricing waste usually creeps in, and how to decide whether to keep, downgrade, or consolidate project-management spend.",
  path: "/jira-cost-small-team",
});

export default function JiraCostSmallTeamPage() {
  return (
    <main className="min-h-screen bg-dark-950 text-white">
      <Navbar />

      <section className="border-b border-dark-800/80 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Tool cost analysis</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Jira cost for small teams, and where the waste usually hides</h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Jira can be a strong fit, but small teams often carry more project-management tooling than they really need. The issue is not just Jira pricing, it is Jira plus everything sitting beside it.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_jira_cost_primary" }} className="btn-primary text-sm sm:text-base">
                View sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_jira_cost_secondary" }} className="btn-secondary text-sm sm:text-base">
                View pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            ["Tier mismatch", "Teams often stay on a pricing tier that made sense earlier but no longer matches current usage."],
            ["Overlap with other PM tools", "Jira cost becomes more painful when Asana, Trello, ClickUp, or Notion are also in the stack."],
            ["Seat waste", "The real cost problem is often inactive or low-value seats rather than the headline plan price."],
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
          <h2 className="text-2xl font-semibold text-white">A better question than “Is Jira too expensive?”</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-dark-300">
            <p>Ask whether Jira is the right project-management cost for your current team, and whether adjacent tools are duplicating the same workflow.</p>
            <p>That is the kind of question StackSmart helps structure from billing data, category spend, and overlap signals.</p>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related cost pages"
        title="Compare adjacent software-cost decisions"
        description="If you're pressure-testing Jira spend, these related pages help you look at broader SaaS waste, overlap, and SMB-friendly spend-management alternatives."
        links={[
          {
            href: "/saas-cost-optimization-software",
            title: "SaaS cost optimization software",
            description: "See when a lightweight savings review is enough to surface waste and pricing mismatch.",
          },
          {
            href: "/best-saas-spend-management-tools",
            title: "Best SaaS spend management tools",
            description: "Compare StackSmart with other spend-management options for leaner teams.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "Review a practical checklist for recurring software cost cleanup across the stack.",
          },
        ]}
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_jira_cost_small_team"
            heading="Keep the sample report handy"
            body="If you are reviewing project-management spend or comparing tool overlap, send yourself the sample report so you can revisit it later or share it internally."
            successMessage="Sample report sent. You can open it now or return from your inbox later."
          />
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-semibold text-white">See the kind of output first</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
              Open the sample report and see how StackSmart turns recurring software spend into concrete actions.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "seo_jira_cost_footer" }} className="btn-primary text-sm sm:text-base">
                Open sample report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "seo_jira_cost_footer" }} className="btn-secondary text-sm sm:text-base">
                Compare plans
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
