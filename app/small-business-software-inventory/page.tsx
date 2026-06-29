import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Small Business Software Inventory",
  description:
    "Build a practical small business software inventory from billing exports, card statements, app marketplaces, and owner-use checks — without rolling out enterprise ITAM.",
  path: "/small-business-software-inventory",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/small-business-software-inventory"),
      url: absoluteUrl("/small-business-software-inventory"),
      name: "Small Business Software Inventory | StackSmart",
      description:
        "A practical owner-led SMB software inventory workflow for finding recurring software waste, duplicate tools, unused seats, ownerless renewals, and billing-source gaps.",
      dateModified: "2026-06-30",
      isPartOf: { "@id": absoluteUrl("/") },
      publisher: { "@type": "Organization", name: "StackSmart", url: absoluteUrl("/") },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Small Business Software Audit", item: absoluteUrl("/small-business-software-audit") },
        { "@type": "ListItem", position: 3, name: "Small Business Software Inventory", item: absoluteUrl("/small-business-software-inventory") },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a small business software inventory?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A small business software inventory is a list of every recurring software tool the business pays for, including the payment source, renewal date, owner, users, category, and keep/cancel/downgrade/consolidate decision. For owner-led SMBs, the fastest version starts from billing exports rather than an enterprise IT discovery project.",
          },
        },
        {
          "@type": "Question",
          name: "How do I build a software inventory without an IT team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Export 6 to 12 months of card, bank, accounting, app marketplace, and invoice data. Group recurring charges by tool and category. Add a named owner, last confirmed use, renewal date, and decision for each subscription. Then review duplicates, inactive seats, personal-card charges, annual renewals, and tools with no current owner.",
          },
        },
        {
          "@type": "Question",
          name: "Is software inventory management the same as SaaS management?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not for most 5 to 50 staff businesses. Enterprise SaaS management often means SSO discovery, procurement workflows, and IT governance. A practical SMB software inventory is narrower: what are we paying for, who owns it, when does it renew, and what should we keep, cancel, downgrade, consolidate, renegotiate, or assign an owner to?",
          },
        },
        {
          "@type": "Question",
          name: "What columns should a small business software inventory include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use tool name, category, payment source, monthly or annual cost, renewal date, current owner, active users or seat count, last confirmed still-needed date, billing email, data sensitivity, and action decision. StackSmart focuses the inventory around the columns that expose waste quickly.",
          },
        },
      ],
    },
  ],
};

const inventoryRows = [
  ["Tool and vendor", "Normalise charges like Atlassian, Canva, Shopify apps, Xero add-ons, Google Workspace, Microsoft 365, Klaviyo, DocuSign, and niche vertical software."],
  ["Payment source", "Record whether it bills through the business card, Xero/QBO/MYOB marketplace, Shopify app billing, app store, invoice, or a founder/personal card."],
  ["Category", "Group by the job it does: project management, accounting, email/SMS, AI, design, file storage, bookings, rostering, practice management, payments, analytics, or support."],
  ["Named owner", "One person must be able to say why the tool exists and who would notice if it disappeared. No owner means it is a review candidate."],
  ["Renewal date", "Annual renewals and quiet monthly charges need a date before they can be managed. Missing renewal date means the tool has renewal risk."],
  ["Action decision", "Keep, cancel, downgrade, consolidate, renegotiate, or assign an owner. Inventory is only useful when it creates action."],
];

const wasteSignals = [
  ["Duplicate tools", "Two project tools, two email platforms, two booking systems, or several Shopify/Xero add-ons doing the same job."],
  ["Zombie seats", "Users who left the business, contractors who finished, or project-only seats still billing on per-seat tools."],
  ["Marketplace blind spots", "Xero, QBO, MYOB, Shopify, Google Workspace, and Microsoft 365 add-ons that do not show up clearly in a simple card scan."],
  ["Personal-card drift", "Founder or manager cards still paying for tools that became operational software after the original trial."],
  ["Ownerless renewals", "Annual contracts renewing in the next 30 to 90 days without a named internal reviewer."],
  ["AI and automation spread", "ChatGPT, transcription, automation, and content tools adopted quickly but rarely checked for active use."],
];

export default function SmallBusinessSoftwareInventoryPage() {
  return (
    <main className="min-h-screen bg-dark-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className="border-b border-dark-800/80 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Small business software inventory · 2026-06-30</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Build a software inventory that actually finds waste</h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Software inventory management sounds like an IT project. For an owner-led SMB, it should start with a simpler question: what are we paying for, who owns it, when does it renew, and what should we do next? StackSmart turns billing exports into a practical software inventory for businesses with 5 to 50 staff — without enterprise procurement overhead.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "software_inventory_primary" }} className="btn-primary text-sm sm:text-base">
                View sample inventory report
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "software_inventory_secondary" }} className="btn-secondary text-sm sm:text-base">
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
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">What should a small business software inventory include?</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              A small business software inventory should include every recurring software charge, payment source, category, owner, active users or seats, renewal date, billing email, last confirmed use, and action decision. The goal is not a perfect IT asset database. The goal is a decision-grade view of subscriptions across cards, invoices, app marketplaces, Microsoft 365, Google Workspace, Shopify, Xero, QBO, MYOB, and founder-paid tools so the owner can cut waste before the next renewal.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">The six columns that matter first</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">Start narrow. If the inventory does not lead to keep, cancel, downgrade, consolidate, renegotiate, or assign-owner decisions, it becomes admin theatre.</p>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {inventoryRows.map(([title, copy]) => (
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
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Waste signals</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Where the inventory usually pays for itself</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">These are the patterns StackSmart prioritises for owner-led businesses because they create practical action without a long IT rollout.</p>
            </div>
            <div className="space-y-4">
              {wasteSignals.map(([title, copy]) => (
                <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-dark-300">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">A 30-minute owner-led inventory pass</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              ["1. Pull billing data", "Export the last 6 to 12 months from your business card, accounting system, marketplace billing, and invoices."],
              ["2. Group by job", "Put every charge into a category and payment source so duplicates, add-ons, and marketplace subscriptions become visible."],
              ["3. Decide the action", "For each item, choose keep, cancel, downgrade, consolidate, renegotiate, or assign an owner before the next renewal."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">June 2026 proof refresh</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">What a decision-grade inventory looks like for a 5-50 staff SMB</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                The highest-intent inventory searches are not asking for an enterprise CMDB. They are usually an owner, office manager, bookkeeper, practice manager, or agency operator trying to answer: which recurring software charges are still needed, who owns them, and what can we change before renewal?
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "software_inventory_proof" }} className="btn-primary text-sm">
                  See the sample inventory output
                </TrackLink>
                <TrackLink href="/business-subscription-tracker-small-business" event="homepage_cta_clicked" props={{ target: "tracker", location: "software_inventory_proof" }} className="btn-secondary text-sm">
                  Compare with a subscription tracker
                </TrackLink>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Clinics and allied health", "Practice management, bookings, reminders, forms, telehealth, payment terminals, AI scribes, and review tools often sit across invoices, cards, and app marketplaces."],
                ["Agencies and studios", "Project tools, design seats, client portals, AI/content subscriptions, proposal software, and converted trials need a named owner and last-confirmed-use date."],
                ["Accounting and bookkeeping", "Xero/MYOB/QBO add-ons, proposal/e-signature, document portals, AI tools, and client-pass-through subscriptions need separation before renewal decisions."],
                ["Retail and ecommerce", "Shopify apps, POS add-ons, email/SMS platforms, reviews, loyalty, inventory, returns, and marketplace fees create inventory blind spots that card exports alone miss."],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/80 p-5">
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-dark-300">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit pages"
        title="Turn the inventory into action"
        description="Use these pages to move from software list to renewal cleanup, subscription tracking, and practical SMB savings decisions."
        links={[
          { href: "/business-subscription-tracker-small-business", title: "Business subscription tracker", description: "Track recurring software payments, owners, renewal dates, and action decisions." },
          { href: "/small-business-software-audit", title: "Small business software audit", description: "Run the broader software audit from billing exports and card statements." },
          { href: "/software-subscription-audit-checklist", title: "Software subscription audit checklist", description: "Use a step-by-step checklist to review waste and renewals." },
          { href: "/saas-spend-audit-tool", title: "SaaS spend audit tool", description: "See how StackSmart turns a CSV export into a savings report." },
        ]}
      />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="small_business_software_inventory"
            heading="Send yourself the sample inventory report"
            body="Use the sample report to show an owner, practice manager, bookkeeper, or operations lead what a billing-first software inventory should produce."
            successMessage="Sample report sent. You can use it as the starting point for your software inventory pass."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
