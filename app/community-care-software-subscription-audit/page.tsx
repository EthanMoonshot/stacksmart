import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import OwnerLedRefreshSection from "@/components/landing/OwnerLedRefreshSection";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Community Care Software Subscription Audit | Find Software Waste",
  description:
    "A practical software subscription audit for owner-led community care, home care, support coordination, and smaller care providers using billing exports instead of sensitive client data.",
  path: "/community-care-software-subscription-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/community-care-software-subscription-audit"),
      url: absoluteUrl("/community-care-software-subscription-audit"),
      name: "Community Care Software Subscription Audit | StackSmart",
      description:
        "A practical software subscription audit for owner-led community care, home care, support coordination, and smaller care providers that need to find unused seats, duplicate tools, add-ons, and ownerless renewals.",
      dateModified: "2026-07-09",
      isPartOf: { "@id": absoluteUrl("/") },
      publisher: {
        "@type": "Organization",
        name: "StackSmart",
        url: absoluteUrl("/"),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        {
          "@type": "ListItem",
          position: 2,
          name: "Small Business Software Audit",
          item: absoluteUrl("/small-business-software-audit"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Community Care Software Subscription Audit",
          item: absoluteUrl("/community-care-software-subscription-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do small community care providers audit software subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Export 6 to 12 months of billing from Xero, MYOB, card statements, direct debits, and vendor invoices. Group each recurring charge by function such as care management, rostering, payroll, worker onboarding, document storage, SMS, telehealth, forms, reporting, accounting, and marketing. Compare seat counts against the current roster and assign a keep, cancel, downgrade, consolidate, renegotiate, or renewal-owner decision before notice windows close.",
          },
        },
        {
          "@type": "Question",
          name: "Does StackSmart need participant, patient, or client records?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. StackSmart is designed for the billing and subscription layer. A community care provider can use billing exports, card statements, direct debits, and software invoices without uploading sensitive participant, patient, care-plan, or clinical notes data.",
          },
        },
        {
          "@type": "Question",
          name: "What software waste is common in owner-led care providers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Common findings include dormant coordinator or support-worker seats, duplicate rostering and payroll tools, SMS or document packs that renew at old usage levels, reporting or compliance tools bought for one audit cycle, unused add-on modules in the care-management platform, and subscriptions still owned by a previous admin or operations manager.",
          },
        },
        {
          "@type": "Question",
          name: "Is this for enterprise aged-care procurement teams?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. This page is for smaller owner-led community care, home care, support-coordination, allied-health-adjacent, and care-provider teams that need a practical software-spend cleanup. It is not an enterprise procurement suite or a replacement for clinical, care-management, or compliance systems.",
          },
        },
      ],
    },
  ],
};

const wastePatterns = [
  [
    "Roster and coordinator seats",
    "Care coordinators, support workers, admin users, and contractor clinicians often remain active in rostering, care-management, forms, payroll, telehealth, or messaging tools after they leave, change hours, or move out of a program.",
  ],
  [
    "Care-platform add-ons",
    "SMS packs, document storage, reporting modules, compliance packs, payroll connectors, and plan-management add-ons can renew quietly after the original implementation owner has moved on.",
  ],
  [
    "Duplicate operations tools",
    "Small providers often carry a care-management platform plus separate rostering, payroll, forms, scheduling, team chat, file storage, and marketing tools that now overlap with included platform features.",
  ],
  [
    "Annual renewals with no owner",
    "A vendor contract may renew from an old operations inbox or director card without anyone checking whether current headcount, programs, or sites still justify the tier.",
  ],
];

const auditSteps = [
  "Export 6 to 12 months from Xero, MYOB, business-card statements, direct debits, and vendor invoices.",
  "Tag every recurring charge as care management, rostering, payroll, onboarding, forms, document storage, SMS, telehealth, compliance, reporting, accounting, marketing, or AI/admin tools.",
  "Compare per-seat tools with the current support-worker, coordinator, clinician, and admin roster.",
  "Flag add-on modules that were bought for one program, audit cycle, funding change, or implementation project but still bill monthly or annually.",
  "List every contract renewing inside 90 days and assign one named owner to approve keep, cancel, downgrade, consolidate, renegotiate, or renewal-owner actions.",
];

export default function CommunityCareSoftwareSubscriptionAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Community care software subscription audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Find the software waste hiding around your care-management system
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Community care, home care, support coordination, and smaller care-provider teams often buy software one operational problem at a time: rostering, SMS, payroll, onboarding, forms, document storage, reporting, telehealth, marketing, and accounting. StackSmart gives the owner or operator a clear subscription-spend snapshot from billing data only — no participant, patient, or clinical records — so they can cut unused seats, duplicate tools, and ownerless renewals before the next notice window closes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "community_care_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "community_care_audit_secondary" }}
                className="btn-secondary text-sm sm:text-base"
              >
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
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              How should a small community care provider audit software subscriptions?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              Start with billing exports, not sensitive care records. Pull 6 to 12 months from Xero, MYOB, business cards, direct debits, and vendor invoices. Group recurring charges by function, compare seat counts against the current roster, identify duplicate tools or add-ons, and assign each flagged subscription a keep, cancel, downgrade, consolidate, renegotiate, or renewal-owner decision. The fastest wins usually come from dormant coordinator/admin/support-worker seats, SMS or document packs still billing at old usage, and tools purchased for one audit, funding, or program change that never got cancelled.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-dark-800/80 bg-dark-950 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-400/20 bg-dark-900/80 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-amber-400">2026 proof refresh</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              Aged-care and community-care software demand is real — but the audit opportunity is the subscription layer
            </h2>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              Today’s DataForSEO AU live check showed community care software at 30 monthly searches, aged care software at 140 / $19.77 CPC / $23.49 high bid, home care software at 110 / $9.10 CPC / $13.23 high bid, and support coordination software at 140 / $25.25 CPC / $33.06 high bid. StackSmart is not trying to replace those operating platforms. The buyer-intent wedge is practical: owner-led 5-50 staff providers already have care-management, rostering, payroll, SMS, forms, document, compliance, accounting, and marketing subscriptions, but no mature procurement function to keep the stack clean. A billing-export audit turns that messy renewal picture into a simple owner/operator keep, cancel, downgrade, consolidate, renegotiate, and renewal-owner action list.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {wastePatterns.map(([title, detail]) => (
              <div key={title} className="rounded-xl border border-dark-700 bg-dark-800/60 p-5">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-dark-300">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-dark-800/80 bg-dark-950 py-14 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">Practical audit workflow</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              A billing-data-only pass the owner can hand to admin
            </h2>
            <ol className="mt-6 space-y-4">
              {auditSteps.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-xl border border-dark-800 bg-dark-900/70 p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-sm font-semibold text-brand-300">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-7 text-dark-300">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl border border-dark-700 bg-dark-900/80 p-6">
            <h3 className="text-lg font-semibold text-white">Sample findings StackSmart would flag</h3>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-dark-300">
              <li>• Four inactive support-worker seats still billing in the rostering platform.</li>
              <li>• A duplicate forms tool retained after the care-management platform added forms.</li>
              <li>• SMS and document packs renewing at last year’s program volume.</li>
              <li>• A compliance/reporting subscription bought for an audit cycle with no named renewal owner.</li>
              <li>• A payroll connector and a separate timesheet app both solving the same admin handoff.</li>
            </ul>
            <div className="mt-6">
              <TrackLink
                href="/software-subscription-audit-checklist"
                event="homepage_cta_clicked"
                props={{ target: "checklist", location: "community_care_sample_findings" }}
                className="btn-secondary text-sm"
              >
                Use the audit checklist
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-dark-800/80 bg-dark-900/40 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-6">
              <h2 className="text-xl font-semibold text-white">Good fit</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>• Owner-led community care, home care, support coordination, and smaller care-provider teams.</li>
                <li>• Roughly 5–50 staff or contractors with recurring software and add-on subscriptions.</li>
                <li>• Low procurement maturity: the owner, operator, practice manager, or admin lead owns the cleanup.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-red-400/20 bg-red-500/5 p-6">
              <h2 className="text-xl font-semibold text-white">Not a fit</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>• Enterprise aged-care procurement teams looking for a full vendor-management platform.</li>
                <li>• Teams needing clinical/care-record review, care-plan analysis, or compliance advice.</li>
                <li>• Providers without billing exports, card statements, or vendor invoices to analyse.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <section className="border-b border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-brand-400/20 bg-dark-900/80 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">2026-06-02 measured refresh</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">Community-care software audits should start with renewal risk, not another platform shortlist</h2>
            <p className="mt-4 text-sm leading-7 text-dark-300">
              Live AU demand still shows buyers searching for aged-care software (170 monthly searches, CPC about $14.91) and community-care software (40 monthly searches). For owner-led providers with 5–50 staff, the fastest commercial win is usually not replacing the care-management system. It is finding the paid layer around it: SMS packs, form tools, coordinator seats, payroll connectors, onboarding apps, reporting add-ons, document storage, telehealth, and renewals nobody owns.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                ["90-day renewal lane", "List every annual care, roster, payroll, SMS, form, document, and reporting vendor renewing in the next 90 days before the notice window closes."],
                ["Roster-to-seat check", "Compare active software seats with current coordinators, support workers, clinicians, contractors, and admin staff — not last quarter's roster."],
                ["Billing-only boundary", "Use invoices, Xero/MYOB exports, card statements, and vendor receipts. Do not upload participant notes, care plans, health records, or clinical files."],
              ].map(([title, detail]) => (
                <div key={title} className="rounded-xl border border-dark-700/80 bg-dark-950/70 p-4">
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-xs leading-6 text-dark-300">{detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/ndis-provider-software-audit" event="homepage_cta_clicked" props={{ from: "community_care_2026_06_02", target: "ndis_provider" }} className="btn-secondary text-sm">NDIS provider version</TrackLink>
              <TrackLink href="/saas-renewal-management" event="homepage_cta_clicked" props={{ from: "community_care_2026_06_02", target: "renewal_management" }} className="btn-primary text-sm">Build a renewal-risk list</TrackLink>
            </div>
          </div>
        </div>
      </section>

      {/* 2026-06-08 owner-led community care billing audit workflow */}
      <section className="border-b border-dark-800/80 bg-dark-950 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">2026-06-08 conversion refresh · practical billing-export audit for care providers</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">Run the subscription cleanup from invoices and card statements — no participant records needed</h2>
          <p className="mt-4 text-sm leading-7 text-dark-300">
            Owner-led community care, home care, and support coordination teams carry rostering, care-management add-ons, SMS packs, document storage, forms, telehealth, compliance/training tools, payroll connectors, and marketing subscriptions — all bought one operational problem at a time. The audit starts and finishes with billing data. No participant notes, care plans, or clinical files are reviewed.
          </p>
          <div className="mt-8 space-y-4">
            {[
              {
                step: "1. Export from Xero, MYOB, card statements, and vendor invoices",
                detail: "Pull 12 months of recurring charges from every payment source: accounting software, business cards, direct debits, and software vendor invoices. Community care providers commonly have charges spread across a director card, an operations account, and individual vendor direct debits set up during implementation.",
              },
              {
                step: "2. Match each tool to a current coordinator, worker, or admin role",
                detail: "For every subscription ask: who on the current roster uses this? Care coordinators, support workers, admin staff, and contractor clinicians all generate seats. Common orphans: rostering seats for workers who left months ago, SMS packs at old volume tiers, compliance/training tools purchased for one audit cycle, document-signing platforms retained after the care system added e-signatures.",
              },
              {
                step: "3. Flag add-ons that outlived their original purpose",
                detail: "Care-management platforms add features over time. Forms, document storage, SMS, reporting, and scheduling modules that were originally purchased as standalone tools may now duplicate what the core platform includes. Check whether each standalone subscription covers a job the care system already handles.",
              },
              {
                step: "4. Assign keep, cancel, downgrade, consolidate, renegotiate, or renewal-owner",
                detail: "Every flagged item gets one decision. Seat removals need no vendor call. Add-on cancellations where the core platform now covers the function are immediate savings. Renegotiation targets are annual rostering, care-management, payroll, and compliance contracts approaching renewal — current headcount and program scope are your leverage.",
              },
              {
                step: "5. Set a 90-day renewal lane and named owners",
                detail: "List every vendor renewing inside 90 days and assign a named decision-maker: the owner, operations manager, or admin lead. Ownerless renewals — subscriptions that auto-renew from an old director card or ops inbox with nobody reviewing — are the single most common waste category in community care teams that have not run a formal audit.",
              },
            ].map((item) => (
              <div key={item.step} className="rounded-xl border border-dark-700 bg-dark-900/70 p-5">
                <h3 className="text-sm font-semibold text-white">{item.step}</h3>
                <p className="mt-2 text-sm leading-7 text-dark-300">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-6">
            <h3 className="text-base font-semibold text-white">Billing-only boundary: what StackSmart does and does not touch</h3>
            <p className="mt-3 text-sm leading-7 text-dark-300">
              StackSmart processes invoices, card statements, accounting exports, and vendor receipts. It does not access, request, or store participant records, care plans, clinical notes, health information, NDIS plan details, or any data covered by privacy legislation. The output is a subscription-level action list for the provider owner or operations lead — not clinical advice, compliance evidence, or care-management reporting.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackLink href="/demo" event="homepage_cta_clicked" props={{ from: "community_care_2026_06_08", target: "demo" }} className="btn-primary text-sm">See sample care-provider report</TrackLink>
            <TrackLink href="/software-subscription-audit-checklist" event="homepage_cta_clicked" props={{ from: "community_care_2026_06_08", target: "checklist" }} className="btn-secondary text-sm">Use the audit checklist</TrackLink>
          </div>
        </div>
      </section>


      {/* 2026-07-09 community care operator refresh */}
      <section className="scroll-mt-24 border-b border-dark-800/80 bg-dark-900/40 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">2026-07-09 refresh · community care operators</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Find the paid tools hiding around the care platform</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                A community-care provider does not need an enterprise procurement suite to find waste. Most owner-led teams need a practical billing pass across rostering, care-management, plan-management, payroll, SMS, document-signing, compliance, telehealth, HR, marketing, and accounting subscriptions. StackSmart starts with invoices, card statements, accounting exports, direct debits, and vendor receipts — not participant records or care notes — then turns the list into owner/operator decisions before the next renewal window.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <TrackLink href="/ndis-provider-software-audit" event="homepage_cta_clicked" props={{ from: "community_care_2026_07_09", to: "ndis_provider_audit" }} className="rounded-full border border-dark-700 px-4 py-2 text-brand-200 hover:border-brand-400/60">NDIS audit</TrackLink>
                <TrackLink href="/software-subscription-audit-checklist" event="homepage_cta_clicked" props={{ from: "community_care_2026_07_09", to: "subscription_checklist" }} className="rounded-full border border-dark-700 px-4 py-2 text-brand-200 hover:border-brand-400/60">Audit checklist</TrackLink>
                <TrackLink href="/demo" event="homepage_cta_clicked" props={{ from: "community_care_2026_07_09", to: "demo" }} className="rounded-full border border-dark-700 px-4 py-2 text-brand-200 hover:border-brand-400/60">Sample report</TrackLink>
              </div>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">High-signal checks for a 5-50 staff provider</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li><span className="font-semibold text-white">Rostering and payroll:</span> support-worker, coordinator, and admin seats still licensed after roster changes.</li>
                <li><span className="font-semibold text-white">Care ops add-ons:</span> SMS, forms, signatures, compliance, document storage, and reporting packs no one has re-priced.</li>
                <li><span className="font-semibold text-white">Ownerless renewals:</span> tools bought for one program, funding change, audit prep, or trial that now renew from an old card.</li>
                <li><span className="font-semibold text-white">Action output:</span> keep, cancel, downgrade, consolidate, renegotiate, or assign a renewal owner — without touching participant data.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-dark-800/80 bg-dark-950 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            heading="Want a community-care software spend snapshot?"
            body="Upload billing exports or start with the sample report. StackSmart helps you find unused seats, duplicate tools, add-ons, and ownerless renewals without touching participant or clinical records."
            location="community_care_software_subscription_audit"
          />
        </div>
      </section>

      <OwnerLedRefreshSection type="communityCare" />

      <SeoClusterLinks
        title="Related StackSmart audit pages"
        links={[
          {
            href: "/ndis-provider-software-audit",
            title: "NDIS provider software audit",
            description: "Clean up rostering, plan-management, SMS, compliance, and support-worker seat costs.",
          },
          {
            href: "/allied-health-software-subscription-audit",
            title: "Allied health software audit",
            description: "Audit PMS add-ons, telehealth, reminders, forms, AI scribes, and contractor clinician seats.",
          },
          {
            href: "/childcare-software-subscription-audit",
            title: "Childcare software audit",
            description: "Find enrolment, parent-comms, CCS billing, rostering, and compliance subscription waste.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "Use the owner/operator checklist before the next renewal window closes.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "Turn billing exports and statements into a practical software-spend action list.",
          },
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "See the broader StackSmart audit workflow for owner-led SMBs.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
