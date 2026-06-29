import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Microsoft 365 Licence Audit for Small Business",
  description:
    "Audit your Microsoft 365 licences without needing an IT team. Find inactive users, leaver seats, duplicate Copilot or Teams add-ons, shared mailbox waste, and annual renewal savings for owner-led businesses with 5 to 50 staff.",
  path: "/microsoft-365-license-audit-small-business",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/microsoft-365-license-audit-small-business"),
      url: absoluteUrl("/microsoft-365-license-audit-small-business"),
      name: "Microsoft 365 Licence Audit for Small Business | StackSmart",
      description:
        "Find inactive users, leaver seats, shared mailbox waste, duplicate add-ons, and annual renewal savings in your Microsoft 365 subscription — for owner-led businesses with 5 to 50 staff.",
      dateModified: "2026-06-30",
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
          name: "Microsoft 365 Licence Audit",
          item: absoluteUrl("/microsoft-365-license-audit-small-business"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I audit Microsoft 365 licences for a small business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start with your Microsoft 365 billing statement or admin centre invoice, not the admin console itself. List every licenced user, then check: is each person still at the business? Are they actively using the licence tier assigned? Do you have shared mailboxes that could replace paid Exchange Online seats? Are Copilot, Teams Phone, or SharePoint add-ons assigned to people who do not use them? The output should be a keep, cancel, downgrade, consolidate, or assign-owner decision for every licence line.",
          },
        },
        {
          "@type": "Question",
          name: "What is the most common Microsoft 365 waste in small businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Leaver seats are the most common source of waste. When a staff member leaves and their Microsoft 365 licence is not removed, the business keeps paying $15 to $55 per month for an inactive account. A 20-person business with three departures in the past year typically has two to three orphaned M365 licences still billing. The second most common waste is licence tier mismatch — paying for Business Premium when Basic or Standard covers actual usage.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need admin access to the Microsoft 365 admin centre to run a licence audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not for the billing-first pass. StackSmart works from your Microsoft 365 invoice, credit card statement, or accounting export. You do not need global admin access, Azure AD permissions, or IT involvement for the first review. Admin centre access is useful for the second step — confirming seat assignments and removing inactive users — but the billing audit identifies the waste before you touch the admin console.",
          },
        },
        {
          "@type": "Question",
          name: "How much can a small business save by auditing Microsoft 365 licences?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A 15 to 30-person business that has not reviewed Microsoft 365 licensing in 12 months typically finds $1,200 to $4,800 in annual recoverable spend from leaver seats, tier mismatches, unused add-ons, and shared mailbox opportunities. The savings scale with headcount turnover and the number of add-on products (Copilot, Teams Phone, Power BI, Visio) in the subscription.",
          },
        },
        {
          "@type": "Question",
          name: "What Microsoft 365 add-ons should small businesses audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most commonly over-provisioned Microsoft 365 add-ons in small businesses are Copilot ($30/user/month, often assigned to the full team when only two or three people use it), Teams Phone (assigned to staff who only use mobile), Power BI Pro (bought for a reporting project that ended), Visio and Project (purchased for one-off use), and Defender for Business (when a third-party security tool already covers the same endpoints). Each add-on should have a named owner and confirmed active usage before renewal.",
          },
        },
        {
          "@type": "Question",
          name: "How often should a small business review Microsoft 365 licences?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At minimum, review before your annual renewal date — this is when pricing adjustments and seat changes take effect. A quarterly check covering recent departures, new add-on purchases, and licence tier assignments takes under 30 minutes once you have a baseline. Any staff departure should trigger an immediate licence review for that user across all Microsoft 365 products.",
          },
        },
      ],
    },
  ],
};

export default function Microsoft365LicenseAuditPage() {
  return (
    <main className="min-h-screen bg-dark-950 text-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="border-b border-dark-800/80 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Microsoft 365 licence audit · owner-led SMB</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Audit your Microsoft 365 licences
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Most small businesses pay for Microsoft 365 seats that nobody uses. Leaver accounts, tier mismatches, and add-ons assigned to the full team when only a few people need them. A billing-first licence audit finds the waste without touching the admin console.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "m365_audit_primary" }} className="btn-primary text-sm sm:text-base">
                See the report output
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "m365_audit_secondary" }} className="btn-secondary text-sm sm:text-base">
                See pricing
              </TrackLink>
            </div>
          </div>
        </div>
      </section>

      {/* Direct answer block */}
      <section className="border-b border-dark-800/80 bg-dark-900/40 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-brand-400/20 bg-dark-900/80 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">Direct answer</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
              How do you audit Microsoft 365 licences for a small business?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              Start with your Microsoft 365 billing statement or credit card charges, not the admin console. List every licenced user and match them against your current team. Check for leaver seats still billing, shared mailboxes that could replace paid Exchange seats, Copilot or Teams Phone add-ons assigned to users who do not use them, and licence tiers above what each role actually needs. The output should be a keep, cancel, downgrade, consolidate, or assign-owner decision for every licence. You do not need global admin access, Azure AD permissions, or IT involvement for this first billing-led pass. See the <a href="/software-subscription-audit-checklist" className="text-brand-400 hover:text-brand-300 transition-colors">software subscription audit checklist</a> for the broader framework and the <a href="/small-business-software-audit" className="text-brand-400 hover:text-brand-300 transition-colors">small business software audit</a> guide for the full owner-led workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Common M365 waste patterns */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">What the audit finds</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Common Microsoft 365 waste in small businesses</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Owner-led businesses with 5 to 50 staff typically carry the same categories of M365 waste. These six patterns account for most of the recoverable spend in a first-time licence review.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                label: "Leaver seats still billing",
                detail: "Staff who left the business but whose Microsoft 365 licence was never removed. A 20-person business with three departures in the past year typically has two to three orphaned M365 seats at $15 to $55 per user per month.",
                color: "text-red-400",
                tag: "Cancel immediately",
              },
              {
                label: "Licence tier mismatch",
                detail: "Paying for Business Premium ($22/user/month) when the user only needs Basic ($6/user/month) for email and Teams. Common when the business started on one plan and never reviewed tier assignments as roles changed.",
                color: "text-amber-400",
                tag: "Downgrade",
              },
              {
                label: "Copilot assigned to full team",
                detail: "Microsoft 365 Copilot at $30/user/month assigned to every user when only two or three people actively use it. A 15-person team paying for full Copilot rollout with three active users is spending $4,320/year on unused Copilot seats.",
                color: "text-amber-400",
                tag: "Right-size",
              },
              {
                label: "Teams Phone on mobile-only staff",
                detail: "Teams Phone licences assigned to staff who only use their mobile phones. Common in field roles, clinic staff, and hospitality teams where a desk phone or Teams calling is not part of the daily workflow.",
                color: "text-orange-400",
                tag: "Remove or reassign",
              },
              {
                label: "Shared mailbox opportunities",
                detail: "Paid Exchange Online seats for generic inboxes (info@, accounts@, support@) that could be converted to free shared mailboxes. Each conversion saves $6 to $22 per month with no functionality loss for inbound email routing.",
                color: "text-brand-400",
                tag: "Consolidate",
              },
              {
                label: "Unused add-ons from past projects",
                detail: "Power BI Pro, Visio, Project, or Defender licences purchased for a specific project or compliance check that kept billing after the work finished. The person who requested the add-on has often left or changed roles.",
                color: "text-dark-400",
                tag: "Review and cancel",
              },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className={`text-sm font-semibold ${item.color}`}>{item.label}</h3>
                  <span className="flex-shrink-0 rounded-full border border-dark-600 bg-dark-800 px-2.5 py-0.5 text-xs text-dark-300">{item.tag}</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-dark-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical audit workflow */}
      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Audit workflow</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">How to audit Microsoft 365 licences in one sitting</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            This workflow runs from billing data. No IT team, no admin console deep-dive, and no disruption to how your team uses Microsoft 365 day to day.
          </p>
          <div className="mt-8 space-y-4">
            {[
              {
                step: "1. Pull your Microsoft 365 billing data",
                detail: "Export your M365 invoice from the Microsoft admin centre billing section, or pull the recurring Microsoft charges from your credit card statement or accounting software. You need the per-user line items showing licence type, quantity, and monthly or annual cost. If you pay through a Microsoft partner or reseller, request the itemised invoice showing individual licence assignments.",
              },
              {
                step: "2. Match every licence to a current team member",
                detail: "List every licenced user and cross-reference against your current staff list. Any licence assigned to someone who has left the business is an immediate cancellation. Any licence assigned to a generic name or a former contractor is a review candidate. This pass alone typically surfaces two to five orphaned seats in a 15-to-30 person business.",
              },
              {
                step: "3. Check licence tiers against actual role needs",
                detail: "For each remaining user, confirm whether their licence tier matches what they actually use. A receptionist who only uses Outlook and Teams does not need Business Premium. A field worker who checks email on their phone does not need a desktop Office licence. Map each role to the lowest tier that covers their daily workflow: Basic ($6), Standard ($12.50), or Premium ($22).",
              },
              {
                step: "4. Audit add-ons: Copilot, Teams Phone, Power BI, Visio, Project",
                detail: "List every Microsoft 365 add-on in your subscription. For each one, name the person who requested it and confirm they still use it regularly. Copilot is the most common over-provisioned add-on in 2026 — often rolled out to the full team when only a few people actively use the AI features. Remove add-ons from any user who has not used the feature in the past 30 days.",
              },
              {
                step: "5. Review shared mailboxes and generic accounts",
                detail: "Identify any paid Exchange Online seats used for generic inboxes — info@, support@, accounts@, admin@. These can typically be converted to free shared mailboxes without losing inbound email functionality. Each conversion saves $6 to $22 per month. Check whether the generic account is the admin or billing contact for other tools — update those contacts before converting.",
              },
              {
                step: "6. Produce a decision list and act before renewal",
                detail: "Every licence line gets a decision: keep (active user, correct tier), cancel (leaver seat or unused account), downgrade (tier mismatch), reassign (add-on moved to the person who actually uses it), or assign-owner (someone must own the renewal decision). Execute cancellations and downgrades before the next billing cycle. Schedule renegotiation for the annual renewal window.",
              },
            ].map((item) => (
              <div key={item.step} className="rounded-xl border border-dark-700 bg-dark-900/70 p-5">
                <h3 className="text-sm font-semibold text-white">{item.step}</h3>
                <p className="mt-2 text-sm leading-7 text-dark-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What StackSmart checks vs what you need */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What the audit checks, what you need, and what you get back</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                heading: "What the audit checks",
                items: [
                  "Licence count vs active headcount",
                  "Tier assignment vs role requirements",
                  "Add-on usage (Copilot, Teams Phone, Power BI)",
                  "Shared mailbox conversion opportunities",
                  "Leaver and contractor seats",
                  "Renewal date and annual pricing",
                ],
              },
              {
                heading: "What you need to provide",
                items: [
                  "M365 invoice or billing export",
                  "Credit card or accounting data",
                  "Current staff list (names only)",
                  "Recent departures list",
                ],
              },
              {
                heading: "What you do not need",
                items: [
                  "Global admin or Azure AD access",
                  "IT involvement or SSO setup",
                  "Employee usage monitoring",
                  "Microsoft partner engagement",
                  "Sensitive client or patient data",
                ],
              },
              {
                heading: "What you get back",
                items: [
                  "Per-user licence decision list",
                  "Add-on waste flags with savings",
                  "Shared mailbox conversion list",
                  "Renewal calendar with notice dates",
                  "Total recoverable annual spend",
                ],
              },
            ].map((col) => (
              <div key={col.heading} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                <h3 className="text-sm font-semibold text-white">{col.heading}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-dark-300">
                  {col.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample findings table */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Typical Microsoft 365 audit findings</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are common findings from M365 billing reviews in owner-led businesses with 10 to 40 staff. Actual amounts depend on licence mix and headcount turnover.
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
                  ["3 leaver seats on Business Standard", "Cancel immediately", "$450 – $1,980/yr"],
                  ["8 users on Premium, only need Standard", "Downgrade tier", "$912 – $1,824/yr"],
                  ["Copilot on 15 users, 3 active", "Remove from 12 users", "$4,320/yr"],
                  ["Teams Phone on 5 mobile-only staff", "Remove licence", "$480 – $960/yr"],
                  ["4 shared mailboxes on paid seats", "Convert to shared mailbox", "$288 – $1,056/yr"],
                  ["Power BI Pro from completed project", "Cancel add-on", "$120 – $240/yr"],
                ].map(([finding, action, impact]) => (
                  <tr key={finding} className="border-b border-dark-800/60">
                    <td className="py-3 pr-6 text-white">{finding}</td>
                    <td className="py-3 pr-6">{action}</td>
                    <td className="py-3 tabular-nums">{impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-dark-500">Representative findings. A 15–30 person business typically recovers $1,200–$4,800 per year from a first-time M365 licence review.</p>
        </div>
      </section>

      {/* Privacy and security boundaries */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">Privacy and scope</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">What a billing-led M365 audit does and does not do</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                StackSmart audits Microsoft 365 billing, not your admin console. The audit works from invoices, credit card statements, and accounting exports to identify waste — it does not access your tenant, read emails, monitor employee usage, or require Azure AD permissions. Admin console changes (removing seats, downgrading tiers) are actions you take yourself after reviewing the findings.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "m365_privacy_section" }} className="btn-primary text-sm">See the report output</TrackLink>
                <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "m365_privacy_section" }} className="btn-secondary text-sm">View pricing</TrackLink>
              </div>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">Scope boundaries</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-dark-300">
                <li><span className="font-semibold text-emerald-400">In scope:</span> licence costs, seat counts, tier assignments, add-on charges, renewal dates, billing-source consolidation, and per-licence keep/cancel/downgrade decisions.</li>
                <li><span className="font-semibold text-emerald-400">In scope:</span> identifying leaver seats, shared mailbox conversion candidates, and unused add-ons from billing data patterns.</li>
                <li><span className="font-semibold text-red-400">Not in scope:</span> accessing your Microsoft 365 tenant, reading mailbox content, monitoring employee productivity, enforcing security policies, or replacing your IT admin or Microsoft partner.</li>
                <li><span className="font-semibold text-red-400">Not in scope:</span> compliance certification, legal advice, data migration, or enterprise SAM (Software Asset Management) reporting.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fit / Not fit */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is this the right fit?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Owner-led business with 5 to 50 staff paying for Microsoft 365</li>
                <li>No dedicated IT team managing M365 licensing</li>
                <li>Staff turnover in the past 12 months and no formal offboarding process for M365 seats</li>
                <li>Annual renewal approaching and nobody has reviewed seat counts or tier assignments</li>
                <li>Copilot, Teams Phone, or other add-ons rolled out without a usage review</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Enterprise with 500+ users needing automated licence governance</li>
                <li>IT team already managing M365 through admin centre and Azure AD</li>
                <li>Need security policy enforcement, DLP, or compliance reporting</li>
                <li>Primary goal is migration (on-premises to cloud) rather than cost review</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Manual vs StackSmart */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Manual M365 licence review vs StackSmart</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Manual review</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Download M365 invoice and match users to staff list manually</li>
                <li>Check each add-on assignment in the admin centre one by one</li>
                <li>Build a spreadsheet to track tier assignments and usage</li>
                <li>Research shared mailbox conversion requirements yourself</li>
                <li>Repeat the entire process at next renewal</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-400/30 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">With StackSmart</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Upload M365 billing data alongside all other software charges</li>
                <li>M365 waste flagged automatically with other subscription waste</li>
                <li>Licence tier and add-on recommendations included in the report</li>
                <li>Shared mailbox conversion candidates identified from billing patterns</li>
                <li>Combined savings report covering M365 and your full software stack</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">June 2026 proof refresh</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">M365 pricing checks should become licence actions before renewal</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                Microsoft 365 pricing intent is often a symptom: an owner sees the bill rising, notices Copilot or Teams Phone add-ons, or suspects departed staff are still active. The useful audit answer is not another plan table — it is a keep, cancel, downgrade, consolidate, renegotiate, or assign-owner decision for each paid licence line.
              </p>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                StackSmart is a fit for owner-led SMBs that can provide billing exports, current team lists, and renewal dates. It is not a replacement for security hardening, tenant migration, endpoint management, or complex enterprise licence negotiation.
              </p>
            </div>
            <div className="rounded-3xl border border-brand-400/20 bg-dark-900/80 p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white">M365 audit output</h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-dark-300">
                <li>Leaver seats, shared-mailbox conversion candidates, tier mismatch, Copilot/Teams Phone add-ons, and project-only licences separated into action rows.</li>
                <li>Payment source, renewal date, owner, last-confirmed-still-needed date, and practical next action recorded for each licence line.</li>
                <li>Broader recurring software waste linked into the <a href="/small-business-software-inventory" className="text-brand-400 hover:text-brand-300 transition-colors">software inventory</a>, <a href="/business-subscription-tracker-small-business" className="text-brand-400 hover:text-brand-300 transition-colors">subscription tracker</a>, and <a href="/software-subscription-audit-checklist" className="text-brand-400 hover:text-brand-300 transition-colors">audit checklist</a>.</li>
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
                "How do I audit Microsoft 365 licences for a small business?",
                "Start with your Microsoft 365 billing statement or admin centre invoice, not the admin console itself. List every licenced user, then check: is each person still at the business? Are they actively using the licence tier assigned? Do you have shared mailboxes that could replace paid Exchange Online seats? Are Copilot, Teams Phone, or SharePoint add-ons assigned to people who do not use them? The output should be a keep, cancel, downgrade, consolidate, or assign-owner decision for every licence line.",
              ],
              [
                "What is the most common Microsoft 365 waste in small businesses?",
                "Leaver seats are the most common source of waste. When a staff member leaves and their Microsoft 365 licence is not removed, the business keeps paying $15 to $55 per month for an inactive account. A 20-person business with three departures in the past year typically has two to three orphaned M365 licences still billing. The second most common waste is licence tier mismatch — paying for Business Premium when Basic or Standard covers actual usage.",
              ],
              [
                "Do I need admin access to run a Microsoft 365 licence audit?",
                "Not for the billing-first pass. StackSmart works from your Microsoft 365 invoice, credit card statement, or accounting export. You do not need global admin access, Azure AD permissions, or IT involvement for the first review. Admin centre access is useful for the second step — confirming seat assignments and removing inactive users — but the billing audit identifies the waste before you touch the admin console.",
              ],
              [
                "How much can a small business save by auditing Microsoft 365 licences?",
                "A 15 to 30-person business that has not reviewed Microsoft 365 licensing in 12 months typically finds $1,200 to $4,800 in annual recoverable spend from leaver seats, tier mismatches, unused add-ons, and shared mailbox opportunities. The savings scale with headcount turnover and the number of add-on products in the subscription.",
              ],
              [
                "What Microsoft 365 add-ons should small businesses audit?",
                "The most commonly over-provisioned add-ons are Copilot ($30/user/month, often assigned to the full team when only a few people use it), Teams Phone (assigned to staff who only use mobile), Power BI Pro (bought for a reporting project that ended), Visio and Project (purchased for one-off use), and Defender for Business (when a third-party security tool already covers the same endpoints). Each add-on should have a named owner and confirmed active usage before renewal.",
              ],
              [
                "How often should a small business review Microsoft 365 licences?",
                "At minimum, review before your annual renewal date — this is when pricing adjustments and seat changes take effect. A quarterly check covering recent departures, new add-on purchases, and licence tier assignments takes under 30 minutes once you have a baseline. Any staff departure should trigger an immediate licence review for that user across all Microsoft 365 products.",
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
            location="seo_m365_licence_audit"
            heading="See the sample savings report before uploading your M365 data"
            body="The report shows how StackSmart flags Microsoft 365 waste alongside your full software stack — leaver seats, tier mismatches, and add-on waste in one view."
            successMessage="Sample report sent. Open it now or return from your inbox later."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Start the M365 licence review</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see how StackSmart identifies Microsoft 365 waste from billing data, then decide whether it fits your next renewal review.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "m365_audit_footer" }} className="btn-primary text-sm sm:text-base">
              Open sample report
            </TrackLink>
            <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "m365_audit_footer" }} className="btn-secondary text-sm sm:text-base">
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit guides"
        title="From M365 licences to your full software stack"
        description="Microsoft 365 is usually one of the largest single line items in a small business software bill. These related pages cover the broader audit workflow and specific verticals."
        links={[
          {
            href: "/google-workspace-license-audit-small-business",
            title: "Google Workspace licence audit",
            description: "The same billing-first audit approach for Google Workspace — suspended users, storage, Gemini add-ons, and departed staff seats.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "Structured checklist for reviewing every recurring software charge, not just Microsoft 365.",
          },
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "Full owner-led audit guide covering all software categories for businesses with 5 to 50 staff.",
          },
          {
            href: "/saas-subscription-management-software",
            title: "SaaS subscription management software",
            description: "Compare lightweight audit tools with enterprise subscription management platforms.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See how StackSmart turns billing exports into a structured savings report.",
          },
          {
            href: "/accounting-firm-software-stack-audit",
            title: "Accounting firm software stack audit",
            description: "M365 and practice management audit guide for accounting firms that run on Microsoft 365.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
