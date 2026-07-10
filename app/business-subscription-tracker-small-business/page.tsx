import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Business Subscription Tracker for Small Business",
  description:
    "Track recurring software subscriptions, renewal dates, payment sources, owners, and keep/cancel/downgrade decisions for owner-led SMBs.",
  path: "/business-subscription-tracker-small-business",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/business-subscription-tracker-small-business"),
      url: absoluteUrl("/business-subscription-tracker-small-business"),
      name: "Business Subscription Tracker for Small Business | StackSmart",
      description:
        "A practical subscription tracker for owner-led SMBs reviewing recurring software payments, renewal dates, named owners, payment sources, and action decisions.",
      dateModified: "2026-07-11",
      isPartOf: { "@id": absoluteUrl("/") },
      publisher: { "@type": "Organization", name: "StackSmart", url: absoluteUrl("/") },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Software Subscription Audit Checklist", item: absoluteUrl("/software-subscription-audit-checklist") },
        { "@type": "ListItem", position: 3, name: "Business Subscription Tracker", item: absoluteUrl("/business-subscription-tracker-small-business") },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a business subscription tracker?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A business subscription tracker is a list of recurring software and service payments with cost, payment source, renewal date, owner, last confirmed use, and action decision. For small businesses, the best tracker starts from billing exports and card statements rather than manual memory.",
          },
        },
        {
          "@type": "Question",
          name: "How is a subscription tracker different from an expense tracker?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A general expense tracker records money leaving the business. A software subscription tracker adds renewal ownership and action decisions: who uses the tool, when it renews, whether there are duplicate tools or inactive seats, and whether the next move is keep, cancel, downgrade, consolidate, renegotiate, or assign an owner.",
          },
        },
        {
          "@type": "Question",
          name: "What should small businesses track for each software subscription?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Track vendor, category, cost, billing frequency, payment source, renewal date, named owner, active users or seats, last confirmed still-needed date, billing email, cancellation notice period, and action decision. These fields reveal waste faster than a generic finance category report.",
          },
        },
        {
          "@type": "Question",
          name: "Does StackSmart replace accounting software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. StackSmart does not replace Xero, QuickBooks, MYOB, or an expense platform. It uses billing exports to create a decision-grade software subscription view focused on practical cleanup, waste reduction, and renewal ownership.",
          },
        },
      ],
    },
  ],
};

const trackerFields = [
  ["Payment source", "Business card, accounting export, invoice, Shopify app billing, Xero/QBO/MYOB marketplace, Microsoft 365, Google Workspace, or personal card."],
  ["Renewal date", "Monthly charges matter, but annual renewals are where owners lose negotiation time and accidental renewals hurt most."],
  ["Named owner", "Every subscription needs a person who can explain current use. If nobody can, the tool is a cancellation or review candidate."],
  ["Last confirmed still-needed", "A simple date prevents old assumptions from carrying tools for another year."],
  ["Decision", "Keep, cancel, downgrade, consolidate, renegotiate, assign owner, or investigate billing source."],
  ["Evidence", "Usage export, active user count, billing history, invoice, or team confirmation — enough to act without a long meeting."],
];

const commonFindings = [
  ["Converted trials", "A free trial moved to paid and the person who tested it never became the long-term owner."],
  ["Duplicate subscriptions", "Two tools solve the same job: Asana and Jira, Canva and Adobe, Gorgias and Zendesk, Klaviyo and Mailchimp, or multiple Shopify review apps."],
  ["Forgotten annual plans", "A yearly software charge appears once, renews quietly, and is missed by monthly card-statement checks."],
  ["Former-staff seats", "Departed staff, contractors, or seasonal workers remain active on per-seat platforms."],
  ["Marketplace add-ons", "App ecosystem charges hide inside Shopify, Xero, QBO, MYOB, Microsoft, or Google billing rather than the main card export."],
  ["No current owner", "The charge might be legitimate, but nobody owns renewal timing, seat count, or downgrade decisions."],
];

export default function BusinessSubscriptionTrackerSmallBusinessPage() {
  return (
    <main className="min-h-screen bg-dark-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className="border-b border-dark-800/80 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Business subscription tracker · 2026-07-11 proof refresh</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Track software subscriptions before they renew again</h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              A normal expense tracker tells you what was paid. A useful business subscription tracker tells you who owns each recurring software payment, whether it is still needed, when it renews, and what decision should happen next. StackSmart helps owner-led SMBs turn billing exports into a clear subscription tracker for action — not another spreadsheet nobody maintains.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "business_subscription_tracker_primary" }} className="btn-primary text-sm sm:text-base">
                View sample tracker report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "business_subscription_tracker_secondary" }} className="btn-secondary text-sm sm:text-base">
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
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">What should a business subscription tracker include?</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              A business subscription tracker should include the vendor, category, cost, billing frequency, payment source, renewal date, named owner, active users or seats, last-confirmed-still-needed date, cancellation notice period, and action decision. For small businesses, the most important difference from a generic expense tracker is the decision column: keep, cancel, downgrade, consolidate, renegotiate, or assign a renewal owner.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Subscription tracker fields that create action</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {trackerFields.map(([title, copy]) => (
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
          <h2 className="text-2xl font-semibold text-white">What the first tracker pass usually finds</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">For clinics, agencies, bookkeepers, ecommerce stores, property offices, community care providers, and other owner-led SMBs, the recurring waste pattern is predictable.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {commonFindings.map(([title, copy]) => (
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Practical workflow</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Use billing data first, team interviews second</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-dark-300">
              <p>Many subscription trackers fail because someone starts with a blank spreadsheet and asks the team to remember every tool. Start with data instead: card exports, accounting exports, invoices, app marketplaces, Microsoft 365, Google Workspace, Shopify, Xero, QBO, and MYOB billing. Then ask the team to confirm ownership only for the tools that remain uncertain.</p>
              <p>That sequence keeps the tracker grounded in actual spend and avoids turning a quick cleanup into a company-wide software survey.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">June 2026 proof refresh</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">A tracker is only useful if it creates a renewal decision</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                For owner-led SMBs, the subscription tracker should be a decision register, not a passive expense list. Each row should show payment source, renewal date, named owner, last-confirmed-still-needed date, and a clear next action before the charge rolls over again.
              </p>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                StackSmart keeps the workflow practical for operators who do not have procurement maturity: pull billing exports first, group recurring tools by job, then send only the uncertain rows to the team for owner confirmation.
              </p>
            </div>
            <div className="rounded-3xl border border-brand-400/20 bg-dark-900/80 p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white">Tracker action list</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Keep because current owner and usage are confirmed",
                  "Cancel because no active owner or workflow remains",
                  "Downgrade because the tier exceeds actual use",
                  "Consolidate because another tool already does the job",
                  "Renegotiate before the annual renewal date",
                  "Assign an owner because nobody currently owns the spend",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-dark-700 bg-dark-950/60 p-4 text-sm leading-6 text-dark-300">{item}</div>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <TrackLink href="/software-subscription-audit-checklist" event="homepage_cta_clicked" props={{ target: "checklist", location: "subscription_tracker_proof" }} className="btn-secondary text-sm">
                  Use the audit checklist
                </TrackLink>
                <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "subscription_tracker_proof" }} className="btn-primary text-sm">
                  View sample report
                </TrackLink>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">2026-07-11 proof refresh</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Track the renewal owner, not just the renewal date</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                Recurring software waste is often an ownership problem. The tracker should show who can approve the next charge, who would notice if the tool disappeared, and when someone last confirmed the subscription was still needed.
              </p>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                This is especially useful for clinics, agencies, bookkeepers, ecommerce stores, community care providers, and professional-services firms where the owner sees the card statement but software decisions are scattered across office managers, practice managers, project leads, and external bookkeepers.
              </p>
            </div>
            <div className="rounded-3xl border border-brand-400/20 bg-dark-900/80 p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white">Rows to flag immediately</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "No named renewal owner",
                  "Last confirmed still-needed is blank or older than 90 days",
                  "Billing contact is an ex-staff member or generic inbox nobody checks",
                  "Same vendor appears twice under different cards or invoices",
                  "Annual plan renews inside 60 days with no notice-window owner",
                  "Software category already has another active tool doing the same job",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-dark-700 bg-dark-950/60 p-4 text-sm leading-6 text-dark-300">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <SeoClusterLinks
        eyebrow="Related subscription cleanup pages"
        title="Move from tracking to savings"
        description="These pages help turn recurring-payment visibility into a practical software audit and savings report."
        links={[
          { href: "/small-business-software-inventory", title: "Small business software inventory", description: "Build the inventory behind the tracker from billing exports and owner-use checks." },
          { href: "/software-subscription-audit-checklist", title: "Software subscription audit checklist", description: "Follow a step-by-step audit workflow for recurring software charges." },
          { href: "/small-business-software-audit", title: "Small business software audit", description: "Review the broader owner-led SMB software audit approach." },
          { href: "/saas-spend-audit-tool", title: "SaaS spend audit tool", description: "See how StackSmart turns exports into keep, cut, downgrade, and consolidate actions." },
        ]}
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="business_subscription_tracker_small_business"
            heading="Send yourself the sample subscription tracker report"
            body="Use the sample to review recurring software payments with an owner, office manager, bookkeeper, or practice manager."
            successMessage="Sample tracker report sent. You can use it for your next software review."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
