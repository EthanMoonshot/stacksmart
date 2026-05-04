import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Law Firm Software Subscription Audit",
  description:
    "Audit software subscriptions for boutique law firms and owner-led legal practices. Find duplicate matter management, document, e-sign, dictation, trust accounting, and marketing tools without accessing client files or regulated legal data.",
  path: "/law-firm-software-subscription-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/law-firm-software-subscription-audit"),
      url: absoluteUrl("/law-firm-software-subscription-audit"),
      name: "Law Firm Software Subscription Audit | StackSmart",
      description:
        "Audit software subscriptions for boutique law firms — matter management, document, e-sign, dictation, trust accounting, and marketing tools without accessing client files or regulated legal data.",
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
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Professional Services Software Audit",
          item: absoluteUrl("/professional-services-software-audit"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Law Firm Software Subscription Audit",
          item: absoluteUrl("/law-firm-software-subscription-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What software subscriptions should a law firm audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A law firm software audit should cover practice and matter management, matter intake and CRM, document management and file storage, e-signature and contract execution, dictation, transcription, and AI note-taking tools, trust accounting and billing software, legal research subscriptions, secure client communication and portals, marketing and reputation management, and general business tools like accounting, payroll, and communications. The audit focuses entirely on the business and admin software side — not client files, legal matter content, or privileged communications. The goal is to find duplicate tools, unused seats, and subscriptions billing at tiers that no longer reflect the firm's active headcount and matter volume.",
          },
        },
        {
          "@type": "Question",
          name: "Why do boutique law firms accumulate too many software subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Boutique law firms accumulate software through several predictable patterns: each partner or practice area brings its own preferred tools, leaving the firm running multiple versions of matter management, dictation, and document platforms; AI and transcription tools have been adopted rapidly by legal teams and rarely reviewed for overlap; practice management migrations leave the previous platform billing alongside the replacement during a transition that can stretch for months; and marketing and reputation platforms signed up during a growth or rebrand phase continue billing at elevated tiers with minimal active use.",
          },
        },
        {
          "@type": "Question",
          name: "Can a law firm audit its software without accessing client files?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The audit works entirely from billing data — bank statements, credit card exports, and accounting software transactions. No client files, legal documents, trust records, privileged communications, or regulated legal information are accessed at any point. The firm's owner, managing partner, or office manager can complete the review independently from financial records alone. StackSmart analyses recurring billing charges only.",
          },
        },
        {
          "@type": "Question",
          name: "How much software waste does a boutique law firm typically carry?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Boutique law firms with 3 to 20 fee earners typically carry $4,000 to $18,000 in recoverable software spend annually. The largest items are usually matter management systems left billing post-migration, duplicated dictation or AI transcription tools adopted by different partners independently, e-signature tools that have proliferated across team preferences, and legal research subscriptions contracted at firm-wide tiers when only one or two practitioners actively use them.",
          },
        },
      ],
    },
  ],
};

const wasteCategories = [
  {
    category: "Practice and matter management",
    issue:
      "Two practice management platforms billing simultaneously after a migration — the previous system still handling some active matters while the new platform onboards the rest of the team, both at full tier pricing.",
    action: "Consolidate",
    color: "text-red-400",
  },
  {
    category: "Dictation and AI transcription",
    issue:
      "BigHand, Nuance Dragon, Otter.ai, and Fireflies all running across the firm — each partner or practice group adopted their preferred tool independently, with no firm-wide standard and full tiers billing across all.",
    action: "Cut to one",
    color: "text-red-400",
  },
  {
    category: "Document management and file storage",
    issue:
      "NetDocuments, iManage, and SharePoint running in parallel — one as the intended standard, one left over from a legacy system, and one set up by a department that never fully migrated to the central platform.",
    action: "Consolidate",
    color: "text-amber-400",
  },
  {
    category: "E-signature and contract execution",
    issue:
      "DocuSign, Adobe Acrobat Sign, and Dropbox Sign all active because different fee earners set up their own preferences. Engagement letters, authority forms, and settlements all executing through different platforms.",
    action: "Standardise one",
    color: "text-amber-400",
  },
  {
    category: "Legal research",
    issue:
      "Legal research subscription contracted at an all-firm or multi-seat tier with active usage concentrated in one or two fee earners. Other licensed users rely on publicly available sources or have not logged in for months.",
    action: "Right-size seats",
    color: "text-orange-400",
  },
  {
    category: "Marketing and reputation",
    issue:
      "Legal directory, reputation management, or client marketing platform subscribed during a growth or rebrand phase, billing at a Business or Agency tier with limited ongoing active use from the firm.",
    action: "Downgrade or review",
    color: "text-brand-400",
  },
];

export default function LawFirmSoftwareSubscriptionAuditPage() {
  return (
    <main className="min-h-screen bg-dark-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="border-b border-dark-800/80 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Law firm software audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Cut the software overlap in your law firm
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Boutique law firms and owner-led legal practices accumulate more recurring software than most managing partners track — matter management platforms, dictation and AI tools, document systems, e-signature tools, legal research subscriptions, trust accounting add-ons, and marketing platforms that stack up across partner preferences and platform migrations. A subscription audit finds what to cut, consolidate, and renegotiate without accessing client files or privileged communications.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "law_firm_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "law_firm_audit_secondary" }}
                className="btn-secondary text-sm sm:text-base"
              >
                View pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      {/* GEO Direct Answer Block */}
      <section className="border-b border-dark-800/80 bg-dark-900/40 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-brand-400/20 bg-dark-900/80 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">Direct answer</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              How does a boutique law firm audit its software subscriptions?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              Export billing data from your firm&apos;s accounting software, business bank, and credit card statements covering the past 6 to 12 months. Include every recurring charge: practice management, matter intake tools, document management, e-signature platforms, dictation and AI transcription tools, legal research subscriptions, trust accounting software, secure client portals, marketing and reputation tools, accounting, payroll, and general office software. Group every charge by function. Flag any category where the firm runs more than one active tool. Check per-seat subscription licences against your current active fee earner and admin headcount. Identify legal research tiers above actual active user counts. Note annual contracts renewing within 60 days. No client files, legal documents, privileged communications, or trust records are accessed at any step.
            </p>
          </div>
        </div>
      </section>

      {/* Why firms accumulate waste */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Why boutique law firms carry more software than they need</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Three patterns drive most of the software accumulation in owner-led and boutique legal practices.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              [
                "Partner-driven tool fragmentation",
                "Each partner or practice group tends to use their preferred dictation tool, matter management system, and document platform. Without a firm-wide standard enforced across the whole team, the firm ends up running multiple full-price subscriptions for the same workflow category.",
              ],
              [
                "AI and transcription tool sprawl",
                "Legal teams adopted AI transcription and meeting note tools rapidly, often without coordination. A firm of 10 fee earners can easily carry four or five separate AI tools — each adopted individually, each billing monthly — covering exactly the same function.",
              ],
              [
                "Matter management migration leftovers",
                "Migrating from one practice management system to another is a significant project. During the transition, both the old and new systems bill simultaneously. The previous platform often keeps charging for months after active use has moved to the replacement, because no one explicitly cancels it.",
              ],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waste by category */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Law firm software waste by category</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the subscription categories where boutique law firms most commonly find recoverable spend.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {wasteCategories.map((item) => (
              <div key={item.category} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className={`text-sm font-semibold ${item.color}`}>{item.category}</h3>
                  <span className="flex-shrink-0 rounded-full border border-dark-600 bg-dark-800 px-2.5 py-0.5 text-xs text-dark-300">
                    {item.action}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-dark-300">{item.issue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30-day audit workflow */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">How to run a law firm software audit in 30 days</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            The managing partner or firm administrator can run this review independently. No client files or privileged information is accessed.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Step 1 — Export billing data",
                "Pull 6 to 12 months of transactions from your firm&apos;s accounting software, business bank, and card statements. Include every recurring charge: practice management platforms, document tools, e-signature, dictation and AI tools, legal research, trust accounting software, communications, marketing, and general business tools. Annual subscriptions need the full 12-month window.",
              ],
              [
                "Step 2 — Group by function",
                "Organise every charge into functional categories: matter management, matter intake, document management, e-signature, dictation and AI transcription, legal research, trust and billing, client portals, marketing, accounting and payroll. Any category with more than one active tool is an immediate consolidation candidate.",
              ],
              [
                "Step 3 — Flag per-partner tool fragmentation",
                "Review dictation, AI transcription, and document tools for partner-level adoption that has never been standardised across the firm. These categories tend to accumulate the most overlap in boutique firms because individual fee earners set up their own preferences without a firm standard being enforced.",
              ],
              [
                "Step 4 — Check seat counts and research tiers",
                "Compare per-seat licence counts against your current active fee earner and admin roster. Pay particular attention to legal research subscriptions — these are often contracted at all-firm tiers with concentrated active usage. Flag annual contracts renewing within 60 days.",
              ],
              [
                "Step 5 — Act in order of impact",
                "Cancel clearly unused tools before the next billing cycle. Plan consolidations with relevant partners and the office manager before actioning — matter workflow migrations need sign-off. Renegotiate annual contracts at renewal using actual usage data and current headcount as leverage.",
              ],
            ].map(([title, copy], i) => (
              <div key={title} className="flex gap-4 sm:gap-6">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-dark-700 bg-dark-900 text-sm font-semibold text-brand-300">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-dark-300">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample findings */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What a law firm software audit typically finds</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are example findings from boutique law firm billing exports. Amounts vary by firm size and tool mix.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-dark-700 text-dark-400">
                  <th className="pb-3 pr-6 font-medium">Finding</th>
                  <th className="pb-3 pr-6 font-medium">Action</th>
                  <th className="pb-3 font-medium">Typical annual impact</th>
                </tr>
              </thead>
              <tbody className="text-dark-300">
                {[
                  ["Previous PMS billing post-migration, new system already active", "Cancel old system", "$2,400 – $9,600/yr"],
                  ["Three dictation/AI tools, each adopted per partner preference", "Standardise one", "$960 – $4,800/yr"],
                  ["E-sign tools duplicated across team, no firm standard enforced", "Cut to one", "$720 – $3,600/yr"],
                  ["Legal research subscription at firm tier, 1–2 active users", "Right-size seats", "$1,800 – $7,200/yr"],
                  ["Document management legacy system alongside current platform", "Consolidate", "$1,200 – $5,400/yr"],
                  ["Marketing or directory platform, elevated tier, low active use", "Downgrade", "$600 – $2,400/yr"],
                ].map(([finding, action, impact]) => (
                  <tr key={finding} className="border-b border-dark-800/60">
                    <td className="py-3 pr-6 text-white">{finding}</td>
                    <td className="py-3 pr-6">{action}</td>
                    <td className="py-3">{impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fit / Not fit */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is StackSmart right for your firm?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Managing partner or firm administrator of a boutique or sole-practitioner law firm</li>
                <li>3 to 25 fee earners and admin staff</li>
                <li>Software stack that has grown through individual partner adoption without a firm-wide standard</li>
                <li>No dedicated IT or procurement team managing subscriptions</li>
                <li>Billing data accessible from accounting software, bank, or card statements</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Large law firm with centralised IT, finance, and procurement managing software lifecycle</li>
                <li>Primary goal is a legal compliance, data governance, or matter security audit — StackSmart focuses on business admin software only</li>
                <li>Fewer than six active business software subscriptions</li>
                <li>Need automated identity management, provisioning, or SSO workflows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {[
              [
                "What software subscriptions should a law firm audit?",
                "A law firm software audit should cover practice and matter management, matter intake and CRM, document management and file storage, e-signature and contract execution, dictation and AI transcription tools, legal research subscriptions, trust accounting and billing software, secure client communication and portals, marketing and reputation management, and general business tools. The audit focuses on admin and business software — not client files or privileged information.",
              ],
              [
                "Why do boutique law firms accumulate too many software subscriptions?",
                "Boutique law firms accumulate software through partner-driven tool fragmentation where each fee earner adopts their preferred dictation, document, and matter tool; rapid adoption of AI transcription tools without a firm standard; and practice management migrations that leave the previous platform billing alongside the replacement during a transition that can stretch for months.",
              ],
              [
                "Can a law firm audit software without accessing client files?",
                "Yes. The audit works entirely from billing data — bank statements, credit card exports, and accounting software transactions. No client files, legal documents, trust records, privileged communications, or regulated legal information are accessed at any point. The firm&apos;s owner, managing partner, or office manager can complete the review independently from financial records alone.",
              ],
              [
                "How much software waste does a boutique law firm typically carry?",
                "Boutique law firms with 3 to 20 fee earners typically carry $4,000 to $18,000 in recoverable software spend annually. The largest items are usually matter management systems left billing post-migration, duplicated dictation or AI transcription tools adopted by different partners independently, and legal research subscriptions at firm-wide tiers with concentrated active usage.",
              ],
            ].map(([q, a]) => (
              <div key={q} className="border-b border-dark-800/60 pb-6">
                <h3 className="text-base font-semibold text-white">{q}</h3>
                <p className="mt-2 text-sm leading-7 text-dark-300">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead capture */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="law_firm_software_audit"
            heading="See what the law firm audit report looks like"
            body="Email yourself the sample report to review the finding format before uploading your firm&apos;s billing data. No client files or legal data required."
            successMessage="Sample report sent. Open it now or return from your inbox when ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Audit the admin stack — not the client files</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see what StackSmart produces from a billing export. No client data, no privileged information — just the firm&apos;s business software stack.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "law_firm_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "law_firm_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit resources"
        title="More on software audits for professional services firms"
        description="These related pages cover the professional services audit guide, sibling firm-type guides, and the core StackSmart audit tool."
        links={[
          {
            href: "/professional-services-software-audit",
            title: "Professional services software audit",
            description: "Project management, proposals, time tracking, and CRM audit guide for boutique consultancies and service firms.",
          },
          {
            href: "/consulting-firm-software-stack-audit",
            title: "Consulting firm software stack audit",
            description: "Project management, CRM, proposals, time tracking, research tools, and AI audit for owner-led consultancies.",
          },
          {
            href: "/accounting-firm-software-stack-audit",
            title: "Accounting firm software stack audit",
            description: "Practice management, tax, document, and e-sign stack audit guide for small accounting and bookkeeping firms.",
          },
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "The owner-led SMB guide to finding and acting on software waste without a dedicated IT or finance team.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "A structured checklist for reviewing every subscription category in your firm stack.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See how StackSmart turns a billing export into categorised findings and a clear action list.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
