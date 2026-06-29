import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Google Workspace Licence Audit for Small Business",
  description:
    "Audit your Google Workspace licences without an IT team. Find suspended users, departed staff seats, Gemini add-on waste, storage overspend, aliases vs paid users, and annual renewal savings for owner-led businesses with 5 to 50 staff.",
  path: "/google-workspace-license-audit-small-business",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/google-workspace-license-audit-small-business"),
      url: absoluteUrl("/google-workspace-license-audit-small-business"),
      name: "Google Workspace Licence Audit for Small Business | StackSmart",
      description:
        "Find suspended users, departed staff seats, Gemini add-on waste, storage overspend, and annual renewal savings in your Google Workspace subscription — for owner-led businesses with 5 to 50 staff.",
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
          name: "Google Workspace Licence Audit",
          item: absoluteUrl("/google-workspace-license-audit-small-business"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I audit Google Workspace licences for a small business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start with your Google Workspace billing statement or credit card charges rather than the admin console. List every licenced user and check: is each person still at the business? Are suspended accounts still consuming paid seats? Are email aliases being paid for as full users? Is Gemini assigned to staff who do not use it? Is your storage plan sized for your actual usage or for a headcount you no longer have? The output should be a keep, cancel, downgrade, consolidate, or assign-owner decision for every licence.",
          },
        },
        {
          "@type": "Question",
          name: "What is the most common Google Workspace waste in small businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Suspended user accounts that still count as paid seats are the most common waste. When a staff member leaves, their Google Workspace account is typically suspended rather than deleted to preserve their Drive files and email history. The suspended account continues to occupy a paid licence seat until it is explicitly removed from the subscription. A 20-person business with four departures over two years may have three to four suspended accounts still billing at $7 to $18 per user per month.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need Google admin console access to audit Workspace licences?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not for the billing-first pass. StackSmart works from your Google Workspace invoice, credit card statement, or accounting export. You do not need super admin access, Google admin console permissions, or IT involvement for the first review. Admin console access is useful for the second step — confirming seat assignments, identifying suspended accounts, and reviewing storage usage — but the billing audit identifies the waste before you touch the admin panel.",
          },
        },
        {
          "@type": "Question",
          name: "How much can a small business save by auditing Google Workspace licences?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A 15 to 30-person business that has not reviewed Google Workspace licensing in 12 months typically finds $800 to $3,600 in annual recoverable spend from suspended accounts, plan tier mismatches, unused Gemini seats, storage over-provisioning, and aliases treated as paid users. The savings are highest in businesses with frequent staff turnover or those that upgraded to Business Plus or Enterprise without reviewing whether Standard covers their needs.",
          },
        },
        {
          "@type": "Question",
          name: "What Google Workspace add-ons should small businesses review?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most commonly over-provisioned Google Workspace add-ons are Gemini (often assigned to the full team when few people use it), Google Vault (retained after a compliance project ends), additional storage (purchased at a higher tier than current usage requires), and Google Voice (assigned to staff who use mobile only). Marketplace add-ons purchased through the Google Workspace Marketplace are also commonly forgotten — they bill separately and often duplicate functionality available in the core plan.",
          },
        },
        {
          "@type": "Question",
          name: "How often should a small business review Google Workspace licences?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Review before your annual renewal or plan anniversary date — this is when Google applies pricing changes and seat adjustments. A quarterly check covering recent departures, suspended accounts, and Gemini or add-on assignments takes under 20 minutes once you have a baseline. Any staff departure should trigger an immediate review: suspend the account, transfer ownership of critical Drive files and Shared Drives, and remove the licence from your subscription count before the next billing cycle.",
          },
        },
      ],
    },
  ],
};

export default function GoogleWorkspaceLicenseAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Google Workspace licence audit · owner-led SMB</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Audit your Google Workspace licences
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Suspended accounts still billing, aliases treated as paid users, Gemini assigned to the whole team, and storage plans sized for a headcount you no longer have. A billing-first licence audit finds the waste without needing admin console access.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "gws_audit_primary" }} className="btn-primary text-sm sm:text-base">
                See the report output
              </TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "gws_audit_secondary" }} className="btn-secondary text-sm sm:text-base">
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
              How do you audit Google Workspace licences for a small business?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              Start with your Google Workspace billing statement or credit card charges rather than the admin console. List every licenced user and check: is each person still at the business? Are suspended accounts still consuming paid seats? Are email aliases counted as full users? Is Gemini assigned to staff who do not use it? Is your storage plan sized for actual usage or for a headcount you no longer have? The output should be a keep, cancel, downgrade, consolidate, or assign-owner decision for every licence. You do not need super admin access, Google admin console permissions, or IT involvement for this billing-led first pass. See the <a href="/software-subscription-audit-checklist" className="text-brand-400 hover:text-brand-300 transition-colors">software subscription audit checklist</a> for the broader framework and the <a href="/small-business-software-audit" className="text-brand-400 hover:text-brand-300 transition-colors">small business software audit</a> guide for the full owner-led workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Common Workspace waste patterns */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">What the audit finds</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Common Google Workspace waste in small businesses</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Owner-led businesses with 5 to 50 staff carry the same categories of Workspace waste. These six patterns account for most of the recoverable spend in a first-time licence review.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                label: "Suspended accounts still billing",
                detail: "When staff leave, their Google Workspace account is typically suspended to preserve Drive files and email history. The suspended account continues occupying a paid licence seat. A 20-person business with four departures over two years may have three to four suspended accounts billing at $7 to $18 per user per month.",
                color: "text-red-400",
                tag: "Transfer files and cancel",
              },
              {
                label: "Aliases counted as paid users",
                detail: "Email aliases (info@, hello@, enquiries@) sometimes set up as full paid user accounts rather than aliases on an existing user. Each unnecessary full account costs $7 to $18 per month. Converting to an alias on an existing account is free and preserves the email address.",
                color: "text-amber-400",
                tag: "Convert to alias",
              },
              {
                label: "Gemini assigned to full team",
                detail: "Google Workspace Gemini add-on assigned to every user when only a few people actively use the AI features. Similar to the Microsoft Copilot pattern — a full-team rollout with concentrated actual usage means most seats are paying for a feature nobody opens.",
                color: "text-amber-400",
                tag: "Right-size",
              },
              {
                label: "Plan tier above actual needs",
                detail: "Paying for Business Plus ($18/user/month) when Business Starter ($7/user/month) or Standard ($14/user/month) covers actual usage. Common when the business upgraded for a specific feature — larger storage, Vault, or advanced endpoint management — and never reviewed whether the feature is still needed.",
                color: "text-orange-400",
                tag: "Downgrade",
              },
              {
                label: "Storage over-provisioning",
                detail: "Pooled storage plan sized for a headcount the business no longer has, or purchased additional storage when removing suspended accounts and cleaning up departed staff Drive files would free enough space. Review actual storage consumption before buying more.",
                color: "text-brand-400",
                tag: "Review usage",
              },
              {
                label: "Marketplace add-ons forgotten",
                detail: "Google Workspace Marketplace apps purchased for a project or trial that kept billing after the work ended. These appear on a separate billing line and are easy to miss in a standard Workspace invoice review. Common examples: CRM connectors, e-sign add-ons, and reporting tools.",
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
          <h2 className="mt-2 text-2xl font-semibold text-white">How to audit Google Workspace licences in one sitting</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            This workflow runs from billing data. No IT team, no admin console deep-dive, and no disruption to how your team uses Google Workspace day to day.
          </p>
          <div className="mt-8 space-y-4">
            {[
              {
                step: "1. Pull your Google Workspace billing data",
                detail: "Export your Workspace invoice from the Google Admin console billing section, or pull the recurring Google charges from your credit card statement or accounting software. If you pay through a Google reseller or partner, request the itemised invoice showing per-user licence assignments. Include any separate Marketplace add-on charges.",
              },
              {
                step: "2. Match every licence to a current team member",
                detail: "List every licenced user and cross-reference against your current staff list. Any licence assigned to someone who has left the business — including suspended accounts — is a review candidate. Any account set up for a generic email address (info@, support@, accounts@) should be checked to confirm whether it needs a full paid licence or can be converted to an alias or group.",
              },
              {
                step: "3. Identify suspended accounts consuming paid seats",
                detail: "Suspended Google Workspace accounts continue to occupy a paid licence seat. For each suspended account, decide: transfer ownership of critical Drive files and Shared Drives to a current team member, set up email forwarding or an auto-reply if needed, then delete the account and reduce your licence count. This is the single highest-yield step in most Workspace audits.",
              },
              {
                step: "4. Check plan tier against actual usage",
                detail: "For each user, confirm whether their Workspace tier matches what they actually need. Staff who only use Gmail, Calendar, and Meet do not need Business Plus features like Vault, advanced endpoint management, or extended storage. Map each role to the lowest tier that covers their daily workflow: Starter ($7), Standard ($14), or Plus ($18).",
              },
              {
                step: "5. Audit add-ons: Gemini, Vault, extra storage, Marketplace apps",
                detail: "List every Workspace add-on in your subscription. For each one, name the person who requested it and confirm active usage. Gemini is the most common over-provisioned add-on — often rolled out to the full team when only a few people use AI features. Google Vault is frequently retained after a compliance project or legal hold ends. Marketplace apps purchased for trials or projects are often forgotten entirely.",
              },
              {
                step: "6. Produce a decision list and act before renewal",
                detail: "Every licence line gets a decision: keep (active user, correct tier), cancel (suspended account or departed staff), downgrade (tier mismatch), convert (alias or group instead of paid user), or assign-owner (someone must own the renewal decision). Execute account deletions and tier changes before the next billing cycle. Schedule the annual renewal review at least 30 days before your plan anniversary.",
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
                  "Suspended accounts still billing",
                  "Aliases set up as paid users",
                  "Plan tier vs actual role needs",
                  "Gemini and Vault add-on usage",
                  "Storage consumption vs plan allocation",
                  "Marketplace add-on charges",
                ],
              },
              {
                heading: "What you need to provide",
                items: [
                  "Workspace invoice or billing export",
                  "Credit card or accounting data",
                  "Current staff list (names only)",
                  "Recent departures list",
                ],
              },
              {
                heading: "What you do not need",
                items: [
                  "Super admin or admin console access",
                  "IT involvement or SSO setup",
                  "Employee usage monitoring",
                  "Google reseller engagement",
                  "Sensitive client or patient data",
                ],
              },
              {
                heading: "What you get back",
                items: [
                  "Per-user licence decision list",
                  "Suspended account cleanup list",
                  "Alias conversion candidates",
                  "Add-on waste flags with savings",
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
          <h2 className="text-2xl font-semibold text-white">Typical Google Workspace audit findings</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are common findings from Workspace billing reviews in owner-led businesses with 10 to 40 staff. Actual amounts depend on plan tier and headcount turnover.
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
                  ["4 suspended accounts on Business Standard", "Transfer files, delete accounts", "$672 – $864/yr"],
                  ["3 aliases set up as paid users", "Convert to alias on existing user", "$252 – $648/yr"],
                  ["Gemini on 18 users, 4 active", "Remove from 14 users", "$1,680 – $3,360/yr"],
                  ["12 users on Plus, only need Standard", "Downgrade tier", "$576 – $1,152/yr"],
                  ["Vault retained after compliance project", "Cancel add-on", "$240 – $480/yr"],
                  ["3 Marketplace apps from past trials", "Cancel unused apps", "$180 – $720/yr"],
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
          <p className="mt-4 text-xs text-dark-500">Representative findings. A 15–30 person business typically recovers $800–$3,600 per year from a first-time Workspace licence review.</p>
        </div>
      </section>

      {/* Privacy and security boundaries */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">Privacy and scope</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">What a billing-led Workspace audit does and does not do</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                StackSmart audits Google Workspace billing, not your admin console. The audit works from invoices, credit card statements, and accounting exports to identify waste — it does not access your Google tenant, read emails, monitor employee usage, or require admin console permissions. Admin console changes (removing suspended accounts, downgrading tiers) are actions you take yourself after reviewing the findings.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "gws_privacy_section" }} className="btn-primary text-sm">See the report output</TrackLink>
                <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "gws_privacy_section" }} className="btn-secondary text-sm">View pricing</TrackLink>
              </div>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">Scope boundaries</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-dark-300">
                <li><span className="font-semibold text-emerald-400">In scope:</span> licence costs, seat counts, plan tier assignments, add-on charges, renewal dates, billing-source consolidation, and per-licence keep/cancel/downgrade decisions.</li>
                <li><span className="font-semibold text-emerald-400">In scope:</span> identifying suspended accounts, alias conversion candidates, and unused add-ons from billing data patterns.</li>
                <li><span className="font-semibold text-red-400">Not in scope:</span> accessing your Google Workspace tenant, reading mailbox or Drive content, monitoring employee productivity, enforcing security policies, or replacing your IT admin or Google partner.</li>
                <li><span className="font-semibold text-red-400">Not in scope:</span> compliance certification, legal advice, data migration, or enterprise SAM reporting.</li>
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
                <li>Owner-led business with 5 to 50 staff paying for Google Workspace</li>
                <li>No dedicated IT team managing Workspace licensing</li>
                <li>Staff turnover in the past 12 months and suspended accounts not cleaned up</li>
                <li>Annual renewal approaching and nobody has reviewed seat counts or plan tiers</li>
                <li>Gemini or Vault add-ons rolled out without a usage review</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Enterprise with 500+ users needing automated licence governance</li>
                <li>IT team already managing Workspace through admin console</li>
                <li>Need DLP, endpoint management, or compliance reporting</li>
                <li>Primary goal is migration (on-premises or M365 to Google) rather than cost review</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Manual vs StackSmart */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Manual Workspace licence review vs StackSmart</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Manual review</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Download Workspace invoice and match users to staff list manually</li>
                <li>Check each user status and plan assignment in the admin console</li>
                <li>Build a spreadsheet to track suspended accounts and aliases</li>
                <li>Research Gemini and Vault usage per user individually</li>
                <li>Repeat the entire process at next renewal</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-400/30 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">With StackSmart</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Upload Workspace billing data alongside all other software charges</li>
                <li>Workspace waste flagged automatically with other subscription waste</li>
                <li>Plan tier and add-on recommendations included in the report</li>
                <li>Suspended account and alias conversion candidates identified from billing</li>
                <li>Combined savings report covering Workspace and your full software stack</li>
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
              <h2 className="mt-3 text-2xl font-semibold text-white">Workspace pricing searches should land on a billing-first licence decision</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                A small business searching Google Workspace pricing or admin guidance usually needs a practical answer before renewal: which accounts still need paid seats, which aliases should be aliases, which Gemini or Marketplace add-ons are ownerless, and what can be changed without a full IT project?
              </p>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                StackSmart is a fit when the owner, practice manager, bookkeeper, or operations lead can export billing and confirm current team ownership. It is not a replacement for a managed IT provider, legal hold design, or Workspace security migration.
              </p>
            </div>
            <div className="rounded-3xl border border-brand-400/20 bg-dark-900/80 p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white">Workspace audit output</h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-dark-300">
                <li>Suspended users, departed staff, aliases-as-users, and unused Gemini seats separated into action rows.</li>
                <li>Payment source, renewal date, billing owner, last-confirmed-still-needed date, and cancellation or downgrade path recorded.</li>
                <li>Related software charges linked into the broader <a href="/small-business-software-inventory" className="text-brand-400 hover:text-brand-300 transition-colors">software inventory</a> and <a href="/business-subscription-tracker-small-business" className="text-brand-400 hover:text-brand-300 transition-colors">subscription tracker</a>.</li>
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
                "How do I audit Google Workspace licences for a small business?",
                "Start with your Google Workspace billing statement or credit card charges rather than the admin console. List every licenced user and check: is each person still at the business? Are suspended accounts still consuming paid seats? Are email aliases counted as full users? Is Gemini assigned to staff who do not use it? Is your storage plan sized for actual usage or for a headcount you no longer have? The output should be a keep, cancel, downgrade, consolidate, or assign-owner decision for every licence.",
              ],
              [
                "What is the most common Google Workspace waste in small businesses?",
                "Suspended user accounts that still count as paid seats are the most common waste. When a staff member leaves, their Workspace account is typically suspended rather than deleted to preserve Drive files and email history. The suspended account continues to occupy a paid licence seat until explicitly removed. A 20-person business with four departures over two years may have three to four suspended accounts still billing at $7 to $18 per user per month.",
              ],
              [
                "Do I need admin console access to run a Google Workspace licence audit?",
                "Not for the billing-first pass. StackSmart works from your Workspace invoice, credit card statement, or accounting export. You do not need super admin access, admin console permissions, or IT involvement for the first review. Admin console access is useful for the second step — confirming seat assignments, identifying suspended accounts, and reviewing storage — but the billing audit identifies the waste before you touch the admin panel.",
              ],
              [
                "How much can a small business save by auditing Google Workspace?",
                "A 15 to 30-person business that has not reviewed Workspace licensing in 12 months typically finds $800 to $3,600 in annual recoverable spend from suspended accounts, plan tier mismatches, unused Gemini seats, storage over-provisioning, and aliases treated as paid users. Savings scale with headcount turnover and plan complexity.",
              ],
              [
                "What Google Workspace add-ons should small businesses review?",
                "The most commonly over-provisioned add-ons are Gemini (often assigned to the full team when few people use AI features), Google Vault (retained after a compliance project ends), additional storage purchased at a higher tier than current usage requires, and Google Voice assigned to staff who use mobile only. Marketplace add-ons are also frequently forgotten — they bill separately and often duplicate core plan functionality.",
              ],
              [
                "How often should a small business review Google Workspace licences?",
                "Review before your annual renewal or plan anniversary date. A quarterly check covering recent departures, suspended accounts, and add-on assignments takes under 20 minutes once you have a baseline. Any staff departure should trigger an immediate review: suspend the account, transfer ownership of critical Drive files and Shared Drives, and reduce your licence count before the next billing cycle.",
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
            location="seo_gws_licence_audit"
            heading="See the sample savings report before uploading your Workspace data"
            body="The report shows how StackSmart flags Google Workspace waste alongside your full software stack — suspended accounts, plan mismatches, and add-on waste in one view."
            successMessage="Sample report sent. Open it now or return from your inbox later."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Start the Workspace licence review</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see how StackSmart identifies Google Workspace waste from billing data, then decide whether it fits your next renewal review.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "gws_audit_footer" }} className="btn-primary text-sm sm:text-base">
              Open sample report
            </TrackLink>
            <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "gws_audit_footer" }} className="btn-secondary text-sm sm:text-base">
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit guides"
        title="From Workspace licences to your full software stack"
        description="Google Workspace is usually one of the largest single line items in a small business software bill. These related pages cover the broader audit workflow and specific verticals."
        links={[
          {
            href: "/microsoft-365-license-audit-small-business",
            title: "Microsoft 365 licence audit",
            description: "The same billing-first audit approach for Microsoft 365 — leaver seats, Copilot add-ons, tier mismatches, and shared mailbox waste.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "Structured checklist for reviewing every recurring software charge, not just Google Workspace.",
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
            href: "/agency-software-stack-audit",
            title: "Agency software stack audit",
            description: "Workspace and project tool audit guide for agencies and studios that run on Google Workspace.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
