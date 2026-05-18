import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Property management software subscription audit | StackSmart",
  description: "Audit software subscriptions for property management and strata offices. Find hidden costs in platform add-ons, app marketplace installs, paid connectors, ownerless renewals, and duplicate inspection, maintenance, e-signature, CRM, and admin tools — from billing exports only.",
  path: "/property-management-software-subscription-audit",
});

const faqs = [
  [
    "What software should a property management office audit?",
    "Audit the core property management platform, inspection apps, maintenance request tools, tenant and owner communication portals, e-signature, forms, CRM, email marketing, payments, accounting, payroll, file storage, reporting, and admin subscriptions. The goal is to find duplicate workflow tools and idle seats, not to interfere with trust accounting or property records."
  ],
  [
    "Does StackSmart need access to tenant, owner, or trust-account data?",
    "No. StackSmart uses billing exports only \u2014 vendor name, charge amount, date, and billing frequency. It does not need tenant records, owner statements, leases, trust-account ledgers, or access to property-management systems."
  ],
  [
    "Where does property management software waste usually appear?",
    "Common waste appears in standalone inspection apps after a platform migration, duplicated maintenance portals and forms tools, e-signature accounts kept alongside platform-native signing, idle seats after staff changes, and marketing or CRM tools duplicated by agency-wide systems."
  ],
  [
    "How often should property management teams audit subscriptions?",
    "Review subscriptions at least annually before core platform renewals, and after staff changes, portfolio changes, office mergers, or system migrations. A quarterly review is useful if the office regularly tests new inspection, maintenance, or communication tools."
  ],
  [
    "Where do property management software costs hide beyond the main subscription?",
    "Beyond the core platform renewal, costs appear in: platform add-ons (SMS packs, e-sign top-ups, advanced reporting modules billed separately), app marketplace installs visible only in Xero or MYOB line items, paid connector fees for maintenance portal or accounting integrations, subscriptions signed up by property managers who have since left, and annual auto-renewals that pass through billing without a usage review. A billing export covering 12 months across all business cards and accounting software is the most reliable way to surface them all."
  ]
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/property-management-software-subscription-audit"),
      url: absoluteUrl("/property-management-software-subscription-audit"),
      name: "Property management software subscription audit | StackSmart",
      description: "Audit software subscriptions for property management and strata offices. Find hidden costs in platform add-ons, app marketplace installs, paid connectors, ownerless renewals, and duplicate inspection, maintenance, e-signature, CRM, and admin tools — from billing exports only.",
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
        { "@type": "ListItem", position: 2, name: "Real Estate Agency Software Audit", item: absoluteUrl("/real-estate-agency-software-audit") },
        { "@type": "ListItem", position: 3, name: "Property management software subscription audit", item: absoluteUrl("/property-management-software-subscription-audit") },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map(([name, text]) => ({
        "@type": "Question",
        name,
        acceptedAnswer: { "@type": "Answer", text },
      })),
    },
  ],
};

const stackCategories = [
  [
    "Core property management platform",
    "PropertyMe, Property Tree, Console Cloud, Re-Leased, MRI, or strata-specific systems. Add-ons and seat tiers often remain after team or portfolio changes."
  ],
  [
    "Inspection and condition-report apps",
    "Inspection Express, zInspector, SnapInspect, iAuditor, or platform-native inspection modules. Overlap appears when an office migrates systems or keeps a favourite legacy app."
  ],
  [
    "Maintenance and tenant portals",
    "Maintenance Manager, Tapi, portals, intake forms, contractor routing, and tenant communication tools. These can duplicate features now included in core systems."
  ],
  [
    "E-signature, forms, and documents",
    "DocuSign, Annature, Adobe Sign, JotForm, Typeform, PDF tools, and document automation. Often purchased piecemeal by property managers."
  ],
  [
    "CRM, marketing, and reputation",
    "Real estate CRMs, email marketing, review tools, social scheduling, listing syndication, and landing-page tools that may duplicate agency-wide systems."
  ],
  [
    "Accounting, payments, and admin",
    "Xero, MYOB, payroll, receipt capture, contractor payments, team comms, and scheduling tools used around the property-management operation."
  ]
];

const wasteSignals = [
  {
    label: "Inspection app duplicated by core platform",
    detail: "A standalone inspection app keeps billing after the property management platform adds condition reports or inspection workflows. The old app stays active because a few staff still know it.",
    color: "text-red-400",
    tag: "Consolidate"
  },
  {
    label: "Maintenance portal overlap",
    detail: "A dedicated maintenance request portal, a forms tool, and built-in tenant request features all collect the same maintenance jobs, creating workflow confusion and recurring charges.",
    color: "text-red-400",
    tag: "Review"
  },
  {
    label: "Idle seats after portfolio or team changes",
    detail: "Property managers, assistants, or contractors leave the office but remain active in per-seat platforms, CRM tools, e-signature accounts, or reporting dashboards.",
    color: "text-amber-400",
    tag: "Right-size"
  },
  {
    label: "E-signature and PDF tool sprawl",
    detail: "DocuSign, Adobe, Annature, and platform-native signing can all be active across the same office after lease workflow changes or mergers.",
    color: "text-amber-400",
    tag: "Consolidate"
  },
  {
    label: "Duplicate CRM and email tools",
    detail: "A property-specific CRM, agency-wide CRM, email marketing platform, and social scheduling tool can all hold overlapping contact lists and campaign features.",
    color: "text-orange-400",
    tag: "Standardise"
  },
  {
    label: "Legacy reporting dashboards",
    detail: "Reporting or owner-dashboard tools stay subscribed after the office moves reporting into the core property management platform or changes owner-communication workflow.",
    color: "text-brand-400",
    tag: "Cancel"
  },
  {
    label: "Platform add-ons billed outside the core subscription",
    detail: "SMS credit packs, e-sign top-up modules, advanced reporting add-ons, and API connector fees appear as separate line items in accounting exports alongside the core PM platform subscription. These can add 20 to 40 per cent to the nominal subscription cost without surfacing in the usual renewal conversation.",
    color: "text-brand-400",
    tag: "Audit"
  }
];

const auditWorkflow = [
  [
    "Week 1 \u2014 Export billing data",
    "Pull 6 to 12 months of transactions from business cards, bank accounts, and Xero or MYOB. Include subscriptions owned by the principal, property managers, assistants, and admin staff because app signups are often decentralised."
  ],
  [
    "Week 2 \u2014 Map tools to property workflows",
    "Group every recurring charge by workflow: inspections, maintenance, tenant comms, owner reporting, lease signing, CRM, payments, accounting, payroll, marketing, and admin. Mark which system is supposed to be the source of truth."
  ],
  [
    "Week 3 \u2014 Check overlap and active users",
    "Compare each per-seat tool against current staff. Check whether inspection, maintenance, signing, and communication features now exist inside the core property platform. Identify annual renewals inside the next 90 days."
  ],
  [
    "Week 4 \u2014 Create the action plan",
    "Cancel unused portals, remove idle seats, consolidate forms/signing workflows, and prepare renegotiation notes for core platforms or add-ons that no longer match portfolio size."
  ]
];

const sampleFindings = [
  [
    "Standalone inspection app retained after core platform migration",
    "Consolidate to current inspection workflow",
    "$600 \u2013 $3,000/yr"
  ],
  [
    "Three idle CRM or property-platform seats after staff turnover",
    "Remove inactive users",
    "$900 \u2013 $4,500/yr"
  ],
  [
    "DocuSign and Annature both active for lease signing",
    "Choose one signing workflow",
    "$500 \u2013 $2,000/yr"
  ],
  [
    "Maintenance portal plus forms tool collecting same requests",
    "Consolidate request intake",
    "$600 \u2013 $2,400/yr"
  ],
  [
    "Legacy owner reporting dashboard with low usage",
    "Cancel after confirming report replacement",
    "$800 \u2013 $3,500/yr"
  ],
  [
    "Email marketing tool duplicated by agency CRM",
    "Standardise campaign tool",
    "$400 \u2013 $1,800/yr"
  ]
];

const goodFit = [
  "Property management, strata, or real estate office with 5 to 50 staff",
  "Principal, office manager, or operations lead owns subscriptions",
  "Multiple platforms around inspections, maintenance, signing, CRM, and admin",
  "Billing export is available from accounting software or company cards",
  "No dedicated procurement function reviewing renewals"
];

const notBestFit = [
  "Large enterprise property group with mature IT procurement and vendor governance",
  "Primary need is trust-account, lease-compliance, or cybersecurity audit work",
  "Office has only one core property platform and very few add-ons",
  "Requires automated SaaS provisioning, SSO, or device-management integration"
];

export default function PropertyManagementSoftwareSubscriptionAuditPage() {
  return (
    <main className="min-h-screen bg-dark-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className="border-b border-dark-800/80 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Property management software subscription audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Property management software subscription audit</h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">Property management and strata offices accumulate software around inspections, maintenance requests, tenant communications, owner portals, e-signature, CRM, forms, payments, accounting, and marketing. A subscription audit gives the office owner or manager a clear keep, cut, consolidate, and renegotiate list without needing a procurement team.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "property_management_audit_primary" }} className="btn-primary text-sm sm:text-base">View sample savings report</TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "property_management_audit_secondary" }} className="btn-secondary text-sm sm:text-base">View pricing</TrackLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-dark-800/80 bg-dark-900/40 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-brand-400/20 bg-dark-900/80 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">Direct answer</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">What is a property management software subscription audit?</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">A property management software subscription audit is a structured review of every recurring software charge used by a rent roll, strata office, or property services team — property management platforms, inspection apps, maintenance portals, communications tools, e-signature, CRM, forms, payments, accounting, marketing, reporting, and admin software. It identifies duplicate tools, idle staff seats, retired portals, legacy inspection apps, and annual renewals that no longer match portfolio size. StackSmart works from billing exports only, so it does not need tenant records, owner ledgers, lease documents, trust-account data, or access to property-management systems.</p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What the software stack usually includes</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">A small property management or strata business can carry 12 to 25 recurring subscriptions once core platforms, add-ons, portals, marketing, and admin tools are counted.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {stackCategories.map((item) => (
              <div key={item[0]} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-sm font-semibold text-white">{item[0]}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Where property management subscription costs hide</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">Most overspend in property management software is not in the main platform renewal. It accumulates across the smaller charges that pass through billing without a second look.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Platform add-ons in accounting exports", "SMS credit packs, e-sign modules, advanced reporting tiers, and API access fees from PropertyMe, Property Tree, or Console Cloud appear as separate line items in Xero or MYOB — alongside but distinct from the core subscription charge. Without a line-by-line review, these pass unnoticed at renewal."],
              ["App marketplace installs", "Property management platforms carry their own app marketplaces. Add-ons installed by individual property managers — forms tools, inspection integrations, owner portal widgets — appear as direct-debit charges from third-party vendors, not from the core platform vendor."],
              ["Paid connector and integration fees", "Maintenance portal integrations, Zapier automations, and API connectors to accounting or inspection tools carry monthly fees. These look like small charges from an unfamiliar vendor and are routinely categorised as miscellaneous rather than software."],
              ["Ownerless subscriptions from departed staff", "Property managers who leave often hold the signup credential for a tool they chose. The subscription continues on a shared card until a billing audit traces it to an account nobody can access or justify."],
              ["Annual renewals without a usage review", "Core platforms, data services, and reporting tools auto-renew annually. The charge appears as a familiar vendor name in the bank statement and gets approved without checking whether seat counts, portfolio size, or active usage still match the plan."],
              ["Renewal calendar gaps", "Without a forward-looking renewal calendar, contract renegotiation windows close silently. A 30-day cancellation notice clause on a $4,000 annual subscription means missing the window costs another full year."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Common software waste patterns</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">These are the patterns a billing-export audit is designed to find before another renewal cycle repeats them.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {wasteSignals.map((signal) => (
              <div key={signal.label} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className={`text-sm font-semibold ${signal.color}`}>{signal.label}</h3>
                  <span className="flex-shrink-0 rounded-full border border-dark-600 bg-dark-800 px-2.5 py-0.5 text-xs text-dark-300">{signal.tag}</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-dark-300">{signal.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">30-day audit workflow</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">Built for an owner, practice manager, office manager, or studio lead. No procurement team, SSO rollout, or systems integration required.</p>
          <div className="mt-8 space-y-6">
            {auditWorkflow.map(([step, copy], i) => (
              <div key={step} className="flex gap-4 sm:gap-6">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-dark-700 bg-dark-900 text-sm font-semibold text-brand-300">{i + 1}</div>
                <div>
                  <h3 className="text-base font-semibold text-white">{step}</h3>
                  <p className="mt-2 text-sm leading-7 text-dark-300">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Example findings StackSmart can surface</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">Illustrative examples based on common billing patterns. Actual savings depend on team size, vendor mix, and contract terms.</p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-dark-700 text-dark-400">
                  <th className="pb-3 pr-6 font-medium">Finding</th>
                  <th className="pb-3 pr-6 font-medium">Action</th>
                  <th className="pb-3 font-medium">Typical annual saving</th>
                </tr>
              </thead>
              <tbody className="text-dark-300">
                {sampleFindings.map(([finding, action, impact]) => (
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

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Manual audit vs StackSmart</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">A manual spreadsheet can work, but the categorisation and prioritisation work is exactly why most owner-led teams delay the review.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Manual audit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Export bank, card, and accounting statements separately</li>
                <li>Manually identify which vendor belongs to which workflow</li>
                <li>Ask staff which tools are active, duplicated, or forgotten</li>
                <li>Estimate annualised cost and renewal risk in a spreadsheet</li>
                <li>Turn the spreadsheet into a prioritised action list</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-400/30 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">StackSmart</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Upload one billing export — no operational data required</li>
                <li>Automatic subscription grouping by practical business function</li>
                <li>Flags duplicates, idle seats, annual renewals, and tier mismatch</li>
                <li>Prioritised keep, cut, consolidate, and renegotiate actions</li>
                <li>Shareable savings report for the owner or operator</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is StackSmart the right fit?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">{goodFit.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">{notBestFit.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {faqs.map(([q, a]) => (
              <div key={q} className="border-b border-dark-800/60 pb-6">
                <h3 className="text-base font-semibold text-white">{q}</h3>
                <p className="mt-2 text-sm leading-7 text-dark-300">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture location="property_management_audit" heading="See what a property management software audit report looks like" body="Email yourself the sample report before uploading billing data. No tenant records, owner ledgers, or trust-account data required." successMessage="Sample report sent. Open it now or return from your inbox when you are ready." />
        </div>
      </section>

      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Start the audit before the next renewal cycle</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">Open the sample report to see exactly what StackSmart produces from a billing export, then decide if it fits your next software review.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "property_management_audit_footer" }} className="btn-primary text-sm sm:text-base">Open sample report</TrackLink>
            <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "property_management_audit_footer" }} className="btn-secondary text-sm sm:text-base">Compare plans</TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks eyebrow="Related audit resources" title="More audit resources for property and professional-services SMBs" description="Property-management teams sit between real estate, admin-heavy services, and owner-led SMB operations — these pages cover adjacent software-sprawl patterns." links={[
        {
          href: "/real-estate-agency-software-audit",
          title: "Real estate agency software audit",
          description: "Audit CRM, listings, property management, forms, marketing, and admin subscriptions across a real estate office."
        },
        {
          href: "/professional-services-software-audit",
          title: "Professional services software audit",
          description: "A broader framework for owner-led services firms with scattered recurring software."
        },
        {
          href: "/small-business-software-audit",
          title: "Small business software audit",
          description: "The general owner-led SMB software audit process."
        },
        {
          href: "/software-subscription-audit-checklist",
          title: "Software subscription audit checklist",
          description: "Prepare billing exports and group subscriptions before a review."
        },
        {
          href: "/reduce-saas-spend-small-business",
          title: "Reduce SaaS spend for small business",
          description: "Practical ways to turn a software audit into concrete savings actions."
        },
        {
          href: "/saas-spend-audit-tool",
          title: "SaaS spend audit tool",
          description: "See how StackSmart automates subscription categorisation and action planning from a billing export."
        }
      ]} />

      <Footer />
    </main>
  );
}
