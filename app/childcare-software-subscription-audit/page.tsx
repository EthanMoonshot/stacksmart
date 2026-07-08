import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import OwnerLedRefreshSection from "@/components/landing/OwnerLedRefreshSection";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Childcare Software Subscription Audit | Cut the Cost of Your Admin Stack",
  description:
    "Childcare and early learning centres carry enrolment, rostering, payroll, parent comms, CCS billing, compliance, training, and form tools. A software audit finds duplicate apps, idle educator seats, and ownerless subscriptions after director handover — from billing exports only, no child records needed.",
  path: "/childcare-software-subscription-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/childcare-software-subscription-audit"),
      url: absoluteUrl("/childcare-software-subscription-audit"),
      name: "Childcare Software Subscription Audit | StackSmart",
      description:
        "Childcare and early learning centres carry enrolment, rostering, payroll, parent comms, compliance, CCS billing, and marketing tools. A software audit finds what to cut, consolidate, and renegotiate.",
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
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Small Business Software Audit",
          item: absoluteUrl("/small-business-software-audit"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Childcare Software Subscription Audit",
          item: absoluteUrl("/childcare-software-subscription-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where do childcare software costs hide outside the main centre-management platform?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They often hide in parent communication apps, CCS billing add-ons, educator training seats, digital forms, sign-in tools, SMS packs, compliance subscriptions, and app-store charges set up by a previous director. A 2026 proof refresh should tie each charge back to a current owner, usage signal, and keep/cancel/downgrade/consolidate/renegotiate decision.",
          },
        },
        {
          "@type": "Question",
          name: "What software do childcare centres typically subscribe to?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A typical childcare or early learning centre pays for an enrolment and management platform (Kinderm8, HiMama, Xplor, Storypark), a rostering tool, payroll software (Xero, MYOB), a parent communication app, a CCS-compliant billing and claiming tool, a compliance or documentation platform, and marketing tools like an email platform or social media scheduler. Multi-site operators carry these costs across each location, which multiplies quickly.",
          },
        },
        {
          "@type": "Question",
          name: "How do childcare operators audit their software subscriptions without an admin team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Export 6 to 12 months of billing transactions from Xero, MYOB, or your business credit card. Group every charge by function — enrolment, rostering, parent communications, CCS billing, compliance, and marketing. Look for categories with more than one active tool, features your team does not use that are driving you into a higher pricing tier, and annual contracts approaching renewal. Upload the export to StackSmart to automate the categorisation and get a prioritised action list.",
          },
        },
        {
          "@type": "Question",
          name: "Do childcare management platforms include all the tools a centre needs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Modern childcare management platforms like Xplor and Kinderm8 increasingly bundle enrolment, parent communications, billing, and compliance features. Many centres that built their stack with separate point tools before these features matured are now paying for overlapping capability. An audit identifies where the bundled platform has caught up and a standalone tool can be retired.",
          },
        },
        {
          "@type": "Question",
          name: "When is the best time to audit childcare software subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best time is 60 to 90 days before your largest annual contracts renew — this gives you enough lead time to renegotiate or switch. For childcare centres, the start of each enrolment year is a natural trigger: headcount and staffing change, which affects per-seat pricing on most platforms. Running the audit then means your subscription counts reflect actual operations.",
          },
        },
        {
          "@type": "Question",
          name: "What happens to childcare software subscriptions when a director or centre admin changes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When a director or lead admin leaves, several subscription categories persist without a named owner. Personal app store subscriptions expensed to the centre continue billing under the departing person's credentials. Annual management and billing platform contracts auto-renew at the previous seat count without the incoming director reviewing terms or enrolment numbers. Educator accounts in rostering and training platforms stay licensed for departed staff until an explicit review. Running a billing audit at the start of a director's tenure — or at the start of each enrolment year — catches these persisting costs before they compound over a full contract period.",
          },
        },
        {
          "@type": "Question",
          name: "How do childcare operators build a recurring bills register to track subscription due dates and payment accounts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "List every recurring software charge from your Xero, MYOB, or card export. For each subscription, record the vendor, monthly or annual cost, billing date, which card or bank account it charges, who last confirmed the tool is still needed, and a decision column: keep, cancel, downgrade, consolidate, renegotiate, or assign a renewal owner. Sort by next billing date so you act on the most urgent charges first. This register replaces the informal knowledge that disappears when a director or admin leaves and gives the incoming person a clear starting point.",
          },
        },
      ],
    },
  ],
};

const wasteSignals = [
  {
    label: "Parent comms tool alongside bundled platform feature",
    detail:
      "Enrolment platforms like Xplor and Kinderm8 now include parent messaging and documentation. Centres that set up a separate parent communication app before that feature shipped are paying for the same capability twice.",
    color: "text-red-400",
    tag: "Consolidate",
  },
  {
    label: "Rostering tool duplicating management platform scheduling",
    detail:
      "Some childcare management platforms include basic rostering. A separate Deputy or Tanda subscription running in parallel adds monthly cost and creates a data sync problem between the two.",
    color: "text-red-400",
    tag: "Audit overlap",
  },
  {
    label: "Ghost educator seats after seasonal departures",
    detail:
      "Casual and part-time educators leave at the end of each term or semester. Their accounts in per-seat management and rostering platforms often remain active until the next review — billing for access nobody uses.",
    color: "text-amber-400",
    tag: "Right-size",
  },
  {
    label: "Marketing platform on a tier for multi-location volume",
    detail:
      "Email marketing tools priced by subscriber count can jump tiers when parent and enquiry lists combine across sites. Many single-centre operators are on a tier built for multi-site operators.",
    color: "text-amber-400",
    tag: "Downgrade",
  },
  {
    label: "Compliance or documentation tools no longer active",
    detail:
      "Quality improvement and NQF documentation tools sometimes sit idle after an assessment period. Annual auto-renewals keep billing for tools the team stopped using after accreditation.",
    color: "text-orange-400",
    tag: "Cancel or pause",
  },
  {
    label: "Annual contracts locked to previous enrolment numbers",
    detail:
      "CCS billing, management, and rostering contracts signed at peak enrolment renew at the same rate even when enrolment drops. Renegotiating to current numbers before auto-renewal avoids overpaying for capacity you do not need.",
    color: "text-brand-400",
    tag: "Renegotiate",
  },
  {
    label: "Staff training and CPD platforms with idle accounts",
    detail:
      "Online early childhood training, CPD, and first aid renewal platforms carry per-user fees. As educators leave, their training platform accounts often stay active until explicitly reviewed — continuing to bill for access nobody uses.",
    color: "text-amber-400",
    tag: "Right-size",
  },
  {
    label: "Digital form and sign-in tools alongside platform features",
    detail:
      "JotForm, Typeform, or dedicated childcare sign-in kiosk apps running alongside management platforms that now include digital forms and parent sign-in. The standalone tool persists because the form was built there before the platform added the capability.",
    color: "text-red-400",
    tag: "Consolidate",
  },
];

export default function ChildcareSoftwareSubscriptionAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Childcare software subscription audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Cut the cost of your childcare admin stack
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Childcare and early learning operators pay for more software than most small businesses their size — enrolment management, rostering, payroll, parent communications, CCS billing, compliance, and marketing. Each category has accumulated specialist tools, and the major platforms now bundle features that many centres are paying for separately. A software audit finds the overlap, the ghost seats, and the renewals worth renegotiating.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "childcare_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "childcare_audit_secondary" }}
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
              How do childcare centres audit their software subscriptions?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              Export 6 to 12 months of billing data from Xero, MYOB, or your business credit card. Group every recurring software charge by category — enrolment management, rostering, payroll, parent communications, CCS billing, compliance, training, and marketing. For each category with more than one active tool, compare what each tool does against what your current management platform now includes natively. Flag seat counts that no longer reflect actual educator and admin headcount. Check upcoming annual renewal dates on your management and billing platforms. Assign each subscription a decision — keep, cut, consolidate, or renegotiate — and work from highest annual cost downward. StackSmart works from billing exports only — it does not need access to child records, CCS claiming data, immunisation records, or family contact information.
            </p>
          </div>
        </div>
      </section>

      {/* Typical software stack */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What a typical childcare software stack looks like</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Most single-site and small multi-site childcare operators are running 8 to 12 recurring subscriptions across these categories.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Enrolment and centre management", "Kinderm8, HiMama, Xplor, Storypark — the primary operational platform. Larger platforms now bundle parent comms, billing, and documentation, but many centres still use a point tool from before those features shipped."],
              ["Rostering and staff scheduling", "Deputy, Tanda, or a manual shift management tool. Some management platforms include basic scheduling; a parallel rostering subscription may be redundant."],
              ["Payroll and HR", "Xero Payroll, MYOB, or Employment Hero. Usually integrated with rostering but sometimes running as a separate subscription with its own per-employee fee."],
              ["CCS billing and claiming", "Xplor, Kinderm8, or a specialist CCS billing tool. Some centres pay for a standalone claiming tool on top of a management platform that already handles CCS."],
              ["Parent communications", "Storypark, HiMama, or Seesaw alongside a management platform with messaging built in. Often a clear consolidation candidate."],
              ["Compliance and NQF documentation", "Quality improvement and assessment tools. Often bought pre-assessment and left active on an annual subscription after the review period ends."],
            ].map(([cat, detail]) => (
              <div key={cat} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-sm font-semibold text-white">{cat}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director and admin handover */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Director and admin handover: where childcare subscriptions persist</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">Childcare centres have above-average director and admin turnover relative to their size. Each handover creates a gap where subscriptions continue billing without anyone owning the decision.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Personal app store subscriptions keep billing", "Directors and lead administrators often sign up for tools on a personal card or Apple/Google account and expense them to the centre. When they leave, the subscription continues under their personal account — billing the centre's card — until a billing audit traces it to credentials nobody can access."],
              ["Annual contracts auto-renew under new leadership", "Management platform, CCS billing, and compliance tool contracts signed by the previous director auto-renew without the incoming director knowing the terms, seat count, or cancellation window. The new director inherits the contract at the previous enrolment numbers — often above current capacity."],
              ["Educator accounts persist after term end", "Casual and part-time educators who finish at the end of each term often retain active accounts in rostering, management, and training platforms. Per-user billing for departed educators accumulates every semester unless a deliberate offboarding checklist removes access promptly."],
              ["Training platform seats tied to previous staff", "CPD, NQF professional development, and compliance training platforms carry per-educator seat fees. When a cohort of educators is replaced at the end of a term, the previous users' seats often stay licensed for months before an admin notices the discrepancy."],
              ["Form and sign-in tools built by departing admins", "Digital forms, enrolment packs, and sign-in kiosk configurations built by a previous admin in a standalone tool (JotForm, Typeform) can't easily be moved. The tool stays active because the form lives there — even after the management platform added the same capability."],
              ["Renewal calendar not handed over", "Most childcare subscription renewal dates are not formally documented. When a director or lead admin changes, the renewal calendar disappears with them. Annual contracts on management platforms, billing tools, and compliance software then renew silently — often with 30-day cancellation windows that close before the new director even knows the contract exists."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waste signals */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Common software waste patterns for childcare operators</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the six patterns StackSmart most commonly surfaces when reviewing childcare centre billing exports.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {wasteSignals.map((s) => (
              <div key={s.label} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className={`text-sm font-semibold ${s.color}`}>{s.label}</h3>
                  <span className="flex-shrink-0 rounded-full border border-dark-600 bg-dark-800 px-2.5 py-0.5 text-xs text-dark-300">
                    {s.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-dark-300">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30-day workflow */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">30-day software audit for a childcare centre</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Designed to run alongside operations. No dedicated finance or IT function required.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Week 1 — Pull billing data",
                "Export 6 to 12 months of transactions from Xero, MYOB, or your business credit card. Include any PayPal or direct-debit charges. Cover at least 12 months to capture annual contracts — management and billing platforms often bill annually. The output should list every vendor, amount, and billing frequency.",
              ],
              [
                "Week 2 — Map the stack and check for overlap",
                "Group every subscription by function: enrolment management, rostering, payroll, parent communications, CCS billing, compliance, and marketing. For categories with more than one tool, open each platform and check what features your primary management platform now includes. Flag the overlapping tools. Pull your current educator and admin list and cross-reference it against seat counts in per-user platforms.",
              ],
              [
                "Week 3 — Size savings and prioritise",
                "Calculate the annual cost of each flagged item. Redundant parent communication tools and ghost educator seats are usually the quickest wins. Prioritise: cancellations first (no vendor conversation needed), then consolidation conversations, then tier downgrades, then renegotiations for contracts renewing within 90 days.",
              ],
              [
                "Week 4 — Act and document",
                "Cancel or deactivate redundant tools and idle accounts before the next billing cycle. Initiate conversations with management and billing platform vendors about current enrolment numbers ahead of renewal. Document each decision so the next review — ideally aligned to your enrolment year — starts from a clean baseline.",
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
          <h2 className="text-2xl font-semibold text-white">Example findings from a childcare software audit</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are illustrative example findings based on common patterns in childcare centre billing data. Actual amounts vary by centre size and stack.
          </p>
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
                {[
                  ["Parent comms app alongside management platform messaging", "Retire standalone app", "$480 – $1,800/yr"],
                  ["6 idle educator accounts in rostering platform", "Remove inactive seats", "$720 – $2,400/yr"],
                  ["Standalone CCS billing tool, management platform now handles CCS", "Consolidate billing", "$600 – $2,400/yr"],
                  ["NQF documentation tool active post-assessment", "Cancel or pause", "$360 – $1,200/yr"],
                  ["Email marketing on multi-site tier, single-centre usage", "Downgrade plan", "$300 – $960/yr"],
                  ["Annual management contract at peak enrolment count", "Renegotiate to current numbers", "$800 – $3,600/yr"],
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

      {/* Manual vs StackSmart */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Manual audit vs StackSmart for childcare operators</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Both routes find the same waste. StackSmart removes the spreadsheet work so the review actually happens.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Manual audit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Export from Xero or MYOB and card statements separately</li>
                <li>Manually deduplicate and categorise each line item</li>
                <li>Cross-reference each platform's seat counts by hand</li>
                <li>Build your own prioritisation logic in a spreadsheet</li>
                <li>Format the findings into something shareable</li>
                <li>Rebuild the process from scratch at the next review</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-400/30 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">StackSmart</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Upload a single billing export (CSV or invoice data)</li>
                <li>Automatic categorisation across childcare tool categories</li>
                <li>Flags feature overlap, ghost seats, and renewal risks</li>
                <li>Prioritised keep, cut, consolidate, and renegotiate action list</li>
                <li>Shareable savings report ready immediately</li>
                <li>Repeatable baseline for the next enrolment-year review</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fit / Not fit */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is StackSmart the right fit for your centre?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Childcare or early learning centre with 5 to 50 staff</li>
                <li>Owner, director, or operations manager responsible for software decisions</li>
                <li>Paying for enrolment management, rostering, payroll, and at least 2 other tools</li>
                <li>No dedicated IT or procurement function</li>
                <li>Billing data accessible from Xero, MYOB, or card statements</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Large childcare group with a finance or IT department</li>
                <li>Primary need is compliance reporting or regulatory audit preparation</li>
                <li>Fewer than five software subscriptions in total</li>
                <li>Need automated user provisioning or directory integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Frequently asked questions</h2>
          <div className="mt-8 space-y-6">
            {[
              [
                "What software do childcare centres typically subscribe to?",
                "A typical childcare or early learning centre pays for an enrolment and management platform (Kinderm8, HiMama, Xplor, Storypark), a rostering tool, payroll software (Xero, MYOB), a parent communication app, a CCS-compliant billing and claiming tool, a compliance or documentation platform, and marketing tools like an email platform or social media scheduler. Multi-site operators carry these costs across each location, which multiplies quickly.",
              ],
              [
                "How do childcare operators audit their software subscriptions without an admin team?",
                "Export 6 to 12 months of billing transactions from Xero, MYOB, or your business credit card. Group every charge by function — enrolment, rostering, parent communications, CCS billing, compliance, and marketing. Look for categories with more than one active tool, features your team does not use that are driving you into a higher pricing tier, and annual contracts approaching renewal. Upload the export to StackSmart to automate the categorisation and get a prioritised action list.",
              ],
              [
                "Do childcare management platforms include all the tools a centre needs?",
                "Modern childcare management platforms like Xplor and Kinderm8 increasingly bundle enrolment, parent communications, billing, and compliance features. Many centres that built their stack with separate point tools before these features matured are now paying for overlapping capability. An audit identifies where the bundled platform has caught up and a standalone tool can be retired.",
              ],
              [
                "When is the best time to audit childcare software subscriptions?",
                "The best time is 60 to 90 days before your largest annual contracts renew — this gives you enough lead time to renegotiate or switch. For childcare centres, the start of each enrolment year is a natural trigger: headcount and staffing change, which affects per-seat pricing on most platforms. Running the audit then means your subscription counts reflect actual operations.",
              ],
              [
                "What happens to childcare software subscriptions when a director or centre admin changes?",
                "When a director or lead admin leaves, several subscription categories persist without a named owner. Personal app store subscriptions expensed to the centre continue billing under the departing person's credentials. Annual management and billing platform contracts auto-renew at the previous seat count without the incoming director reviewing terms or enrolment numbers. Educator accounts in rostering and training platforms stay licensed for departed staff until an explicit review. Running a billing audit at the start of a director's tenure — or at the start of each enrolment year — catches these persisting costs before they compound over a full contract period.",
              ],
              [
                "How do childcare operators build a recurring bills register to track subscription due dates and payment accounts?",
                "List every recurring software charge from your Xero, MYOB, or card export. For each subscription, record the vendor, monthly or annual cost, billing date, which card or bank account it charges, who last confirmed the tool is still needed, and a decision column: keep, cancel, downgrade, consolidate, renegotiate, or assign a renewal owner. Sort by next billing date so you act on the most urgent charges first. This register replaces the informal knowledge that disappears when a director or admin leaves and gives the incoming person a clear starting point.",
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


      {/* June 10 proof/conversion refresh */}
      <section className="border-t border-dark-800/80 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">2026-06-19 childcare-management audit refresh</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Review childcare admin subscriptions without touching child records</h2>
            <p className="mt-4 text-base leading-7 text-dark-300">Live AU checks show measurable demand for childcare management software (110 monthly searches, $46 CPC, competition index 3) and childcare software (70 searches, $13 CPC). For owner-led single-centre and small multi-site operators, StackSmart answers the adjacent question: what software charges are still billing across enrolment, parent comms, CCS billing, rostering, payroll, payments, learning stories, SMS packs, compliance modules, casual staff access, forms, and marketing?</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">1. Use billing data only</p>
                <p className="mt-3 text-sm leading-7 text-dark-300">The audit starts from Xero, MYOB, card, and vendor billing exports. It does not need child records, attendance records, parent data, medical information, staff files, or compliance documents.</p>
              </div>
              <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">2. Catch director-handover waste</p>
                <p className="mt-3 text-sm leading-7 text-dark-300">When a centre director or admin lead changes, app-store tools, training platforms, parent-comms add-ons, casual educator seats, payment tools, and annual contracts often keep renewing under the old operating pattern.</p>
              </div>
              <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">3. Turn findings into centre actions</p>
                <p className="mt-3 text-sm leading-7 text-dark-300">Each charge gets a practical decision: keep for daily operations, cancel a duplicate form/comms tool, downgrade educator seats, consolidate with the main centre platform, renegotiate to current enrolment, or assign a renewal owner before notice windows close.</p>
              </div>
          </div>
          <div className="mt-8 rounded-3xl border border-brand-500/30 bg-brand-500/10 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-200">What the StackSmart output should prove</p>
            <p className="mt-3 text-sm leading-7 text-dark-200">A centre owner should finish the audit with a clear admin-stack map: what the main platform covers, what standalone tools remain justified, what tools are duplicated, where staff/leaver seats are still paid, and which renewal dates need action before the next enrolment cycle.</p>
          </div>
        </div>
      </section>

      {/* Recurring bills register */}
      <section className="border-t border-dark-800/80 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">2026-06-19 recurring bills register</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Build a recurring bills register for your childcare centre</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
            Owner-led childcare centres often track subscriptions informally — a director remembers which card pays for the parent comms app, when the management platform renews, and which educator training seats are still active. When that director leaves, the knowledge goes with them. A recurring bills register captures what matters for every charge: vendor, cost, billing date, payment account, last-confirmed-still-needed date, and a clear decision. Australian centres searching for childcare management software (110 monthly searches, $46 CPC) and childcare software (70 searches) are often looking for platform capability they may already have — making the billing-layer audit the cheaper first step before a platform migration.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Due date and payment account", "Record the billing date and which card, direct debit, or bank account each subscription charges. Centre operators frequently discover charges split across a business card, a director's personal card, an Apple ID, and a direct debit — making it impossible to see total software spend from a single statement."],
              ["Last confirmed still needed", "For each tool, note when someone last verified it is actively used. Parent comms apps, compliance tools post-assessment, casual educator training seats, and form builders are the categories most likely to have no recent confirmation. If nobody has checked in 6 months, it is a review candidate."],
              ["Keep, cancel, downgrade, consolidate, renegotiate, assign owner", "Give every subscription a decision. Keep tools tied to daily operations. Cancel duplicates and idle subscriptions. Downgrade tiers that exceed current enrolment or educator count. Consolidate where the management platform now covers a standalone tool's function. Renegotiate annual contracts before the notice window closes. Assign a named renewal owner so no charge auto-renews without a decision."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-3xl border border-brand-500/30 bg-brand-500/10 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-200">Why billing-layer audit before platform migration</p>
            <p className="mt-3 text-sm leading-7 text-dark-200">Most childcare software demand is for management platforms — the core operational system. StackSmart does not replace Xplor, Kinderm8, or any management platform. It reviews the billing layer around it: the recurring charges for parent comms, forms, sign-in tools, SMS packs, compliance modules, educator training seats, and marketing tools that accumulate across director handovers and enrolment cycles. Cleaning up the billing layer first means the centre knows exactly what it is paying for before evaluating whether a platform change is worth the disruption.</p>
          </div>
        </div>
      </section>

      {/* Lead capture */}

      {/* 2026-07-09 childcare operator refresh */}
      <section className="scroll-mt-24 border-b border-dark-800/80 bg-dark-900/40 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-brand-400/20 bg-dark-900/80 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">2026-07-09 refresh · childcare and education</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">Audit centre-level subscriptions before buying another childcare platform</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              Childcare software waste usually sits around the core platform: parent communication, enrolment and waitlist tools, incident/compliance apps, rostering, payroll, learning journals, SMS packs, forms, payment add-ons, and centre-by-centre trial tools. StackSmart can review billing exports, card statements, accounting exports, app invoices, and direct debits without accessing child, parent, family, incident, or enrolment records. The owner gets a centre-by-centre action list for what to keep, cancel, downgrade, consolidate, renegotiate, or assign to a renewal owner before term or holiday staffing changes reset the cost base again.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-dark-700 bg-dark-800/60 p-4"><h3 className="text-sm font-semibold text-white">Centre duplication</h3><p className="mt-2 text-sm leading-6 text-dark-300">Separate sites paying for different parent-comms, waitlist, forms, or learning apps that now overlap.</p></div>
              <div className="rounded-xl border border-dark-700 bg-dark-800/60 p-4"><h3 className="text-sm font-semibold text-white">Staffing drift</h3><p className="mt-2 text-sm leading-6 text-dark-300">Rostering, payroll, SMS, and HR tiers still priced for a larger casual or holiday team.</p></div>
              <div className="rounded-xl border border-dark-700 bg-dark-800/60 p-4"><h3 className="text-sm font-semibold text-white">Ownerless renewals</h3><p className="mt-2 text-sm leading-6 text-dark-300">Trial tools bought for one compliance, enrolment, or marketing push that keep billing after the need has passed.</p></div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <TrackLink href="/community-care-software-subscription-audit" event="homepage_cta_clicked" props={{ from: "childcare_2026_07_09", to: "community_care" }} className="rounded-full border border-dark-700 px-4 py-2 text-brand-200 hover:border-brand-400/60">Community care audit</TrackLink>
              <TrackLink href="/small-business-software-inventory" event="homepage_cta_clicked" props={{ from: "childcare_2026_07_09", to: "software_inventory" }} className="rounded-full border border-dark-700 px-4 py-2 text-brand-200 hover:border-brand-400/60">Build a software inventory</TrackLink>
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ from: "childcare_2026_07_09", to: "demo" }} className="rounded-full border border-dark-700 px-4 py-2 text-brand-200 hover:border-brand-400/60">View sample report</TrackLink>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="childcare_audit"
            heading="See what a childcare software audit report looks like"
            body="Email yourself the sample report to review the output format before uploading your own billing data."
            successMessage="Sample report sent. Open it now or return from your inbox when you are ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Start the audit before the next renewal arrives</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see exactly what StackSmart produces from billing data, then decide if it fits your review cycle.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "childcare_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "childcare_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <OwnerLedRefreshSection type="childcare" />

      <SeoClusterLinks
        eyebrow="Related audit resources"
        title="More on software audits for education and care businesses"
        description="These pages cover the software audit process, tools, and guides for other owner-led SMB verticals."
        links={[
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "The general guide to running a software audit for any SMB without a finance or IT team.",
          },
          {
            href: "/ndis-provider-software-audit",
            title: "NDIS provider software audit",
            description: "Rostering, care management, and compliance stack audit guide for NDIS and community care providers.",
          },
          {
            href: "/clinic-software-subscription-audit",
            title: "Clinic software subscription audit",
            description: "Allied health and clinic-specific guide to reviewing admin, booking, billing, and marketing subscriptions.",
          },
          {
            href: "/how-to-audit-software-subscriptions",
            title: "How to audit software subscriptions",
            description: "Step-by-step process for reviewing recurring software spend without a procurement specialist.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "Prepare billing exports and group subscriptions by category before starting a childcare centre review.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See how StackSmart turns a billing export into a structured savings report.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
