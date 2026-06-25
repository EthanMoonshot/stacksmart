import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Jira Cost for Small Teams",
  description:
    "Review Jira cost for small teams, compare project-management stack overlap, and find unused seats, duplicate tools, and permanent project-only subscriptions.",
  path: "/jira-cost-small-team",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/jira-cost-small-team"),
      url: absoluteUrl("/jira-cost-small-team"),
      name: "Jira Cost for Small Teams | StackSmart",
      description:
        "A practical Jira cost review for small teams comparing pricing, inactive seats, project-management overlap, and consolidation decisions.",
      dateModified: "2026-06-26",
      isPartOf: { "@id": absoluteUrl("/") },
      publisher: { "@type": "Organization", name: "StackSmart", url: absoluteUrl("/") },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "SaaS Spend Audit Tool", item: absoluteUrl("/saas-spend-audit-tool") },
        { "@type": "ListItem", position: 3, name: "Jira Cost for Small Teams", item: absoluteUrl("/jira-cost-small-team") },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why does Jira cost feel high for small teams?",
          acceptedAnswer: { "@type": "Answer", text: "Jira cost usually feels high for small teams when the headline plan price is only part of the problem. Inactive seats, contractors left active, add-ons, premium features, and duplicate project-management tools such as Asana, ClickUp, Trello, Notion, or Monday often create more waste than Jira itself." },
        },
        {
          "@type": "Question",
          name: "How should a small team review Jira pricing?",
          acceptedAnswer: { "@type": "Answer", text: "Export active users, recent logins, billing history, add-ons, and any adjacent project-management subscriptions. Group the stack by workflow, check whether Jira is the system of record or a project-only tool, remove inactive seats, and decide whether adjacent tools should be kept, cancelled, downgraded, or consolidated." },
        },
        {
          "@type": "Question",
          name: "Should small teams replace Jira with Asana or ClickUp?",
          acceptedAnswer: { "@type": "Answer", text: "Not automatically. The better question is which tool owns the workflow. Some engineering-heavy teams should keep Jira and cancel adjacent lightweight tools. Some agency, ecommerce, or professional-service teams should keep Asana, ClickUp, or Notion and cancel Jira if it was purchased for a project that ended." },
        },
        {
          "@type": "Question",
          name: "What data does StackSmart need for a Jira cost review?",
          acceptedAnswer: { "@type": "Answer", text: "A billing export or card statement plus a current active-user or seat list is enough for the first pass. StackSmart does not need access to Jira tickets or client/project content to flag inactive seats, duplicate project tools, ownerless renewals, and pricing-tier mismatch." },
        },
      ],
    },
  ],
};

const costSignals = [
  ["Inactive seats", "Staff who changed roles, contractors who finished, agency collaborators, or former employees remain active on Jira billing."],
  ["Adjacent PM tools", "Jira sits beside Asana, ClickUp, Trello, Notion, Monday, Linear, Basecamp, or client portals doing overlapping work."],
  ["Project-only drift", "Jira was bought for a migration, build, or client delivery project, then became a permanent subscription after the project ended."],
  ["Add-on creep", "Marketplace apps, reporting tools, roadmapping add-ons, and automation features remain active after the original need passed."],
  ["Tier mismatch", "The team pays for premium capabilities but uses Jira like a simple task board or issue tracker."],
  ["No renewal owner", "Nobody owns the renewal decision, so the subscription renews before seat count, add-ons, or workflow fit are reviewed."],
];

const teamExamples = [
  ["Marketing or web agency", "Jira may sit beside ClickUp or Asana because one technical project needed engineering-style tickets. If most delivery work now happens elsewhere, Jira needs an owner-use review."],
  ["Ecommerce operator", "A store may use Jira for one site rebuild while Shopify apps, support tools, and agency platforms also bill monthly. Project-only tools should not become permanent by accident."],
  ["Boutique consultancy", "Consultants often inherit Jira from a client delivery model but run internal work in Notion, Asana, or spreadsheets. The cost question is whether Jira is still the system of record."],
  ["Small software or product team", "Jira can be the right core tool. The waste is usually inactive seats, duplicate boards in other tools, and add-ons that are no longer used."],
];

export default function JiraCostSmallTeamPage() {
  return (
    <main className="min-h-screen bg-dark-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className="border-b border-dark-800/80 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Tool cost analysis · 2026-06-26 refresh</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Jira cost for small teams, and the project-tool overlap around it</h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Jira can be the right system of record for technical teams. But in owner-led SMBs, agencies, ecommerce operators, and boutique service firms, the real cost problem is often Jira plus the project tools sitting beside it: Asana, ClickUp, Trello, Notion, Monday, client portals, and old project-only subscriptions that never got cancelled.
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

      <section className="border-b border-dark-800/80 bg-dark-900/40 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-brand-400/20 bg-dark-900/80 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">Direct answer</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">How should a small team review Jira cost?</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              Review Jira cost by looking beyond the public pricing table. Pull active users, last login or recent activity, add-ons, billing frequency, renewal date, and adjacent project-management tools. Then decide whether Jira is the current system of record, a technical-team tool worth keeping, a project-only tool that should be cancelled, or one of several overlapping subscriptions that need consolidation. The practical outcome is a keep, cancel, downgrade, consolidate, renegotiate, or assign-owner decision.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Where Jira waste usually hides</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {costSignals.map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Jira versus Asana, ClickUp, Trello, and Notion is a workflow-owner question</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-dark-300">
            <p>If Jira owns current technical delivery, keep it and look for waste in inactive seats, add-ons, and duplicate lightweight tools. If Asana, ClickUp, Trello, or Notion owns day-to-day work and Jira was only purchased for a past client project, the cancellation path may be obvious.</p>
            <p>StackSmart does not need ticket content or project data to make the first pass. Billing exports, current seat lists, and renewal dates are enough to identify the project-management subscriptions that deserve a decision.</p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {teamExamples.map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-brand-400/20 bg-gradient-to-br from-dark-900 to-dark-950 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Decision workflow</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">A 20-minute Jira cost cleanup pass</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {[
                ["1. Export billing", "Confirm plan, add-ons, billing frequency, renewal date, and the payment source."],
                ["2. Check seats", "Compare active users with current staff, contractors, and project collaborators."],
                ["3. Map overlap", "List other project tools and decide which one owns each workflow."],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-dark-300">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related cost pages"
        title="Compare adjacent software-cost decisions"
        description="If you are pressure-testing Jira spend, these related pages help you look at broader project-tool overlap, software inventory, and SMB-friendly spend cleanup."
        links={[
          { href: "/small-business-software-inventory", title: "Small business software inventory", description: "Build the software list behind your Jira and project-tool cost review." },
          { href: "/business-subscription-tracker-small-business", title: "Business subscription tracker", description: "Track recurring software payments, renewal dates, and owners." },
          { href: "/saas-cost-optimization-software", title: "SaaS cost optimization software", description: "See when a lightweight savings review is enough to surface waste and pricing mismatch." },
          { href: "/software-subscription-audit-checklist", title: "Software subscription audit checklist", description: "Review a practical checklist for recurring software cost cleanup across the stack." },
        ]}
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="seo_jira_cost_small_team"
            heading="Keep the sample report handy"
            body="If you are reviewing Jira cost, project-management spend, or tool overlap, send yourself the sample report so you can revisit it later or share it internally."
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
