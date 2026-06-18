import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import OwnerLedProofRefresh from "@/components/landing/OwnerLedProofRefresh";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Optometry Practice Software Subscription Audit | Cut Subscription Waste in Your Practice",
  description:
    "Optometry practices carry appointment booking, recalls, POS and inventory, frame and lens ordering portals, marketing, reviews, accounting, and payroll subscriptions. A software audit finds what to cut, consolidate, and renegotiate — using billing exports only.",
  path: "/optometry-practice-software-subscription-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/optometry-practice-software-subscription-audit"),
      url: absoluteUrl("/optometry-practice-software-subscription-audit"),
      name: "Optometry Practice Software Subscription Audit | StackSmart",
      description:
        "Optometry practices carry appointment booking, recalls, POS and inventory, frame and lens ordering portals, marketing, reviews, accounting, and payroll subscriptions. A software audit finds what to cut, consolidate, and renegotiate — using billing exports only.",
      dateModified: "2026-06-19",
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
          name: "Optometry Practice Software Subscription Audit",
          item: absoluteUrl("/optometry-practice-software-subscription-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What software do small optometry practices typically subscribe to?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A small optometry practice typically pays for a practice management and clinical system (Sunix, Optomate, Nuvola, Cliniko), a POS and optical inventory system (sometimes included in the practice management platform, sometimes a separate tool), online booking software, patient recall and reminder tools, frame and lens ordering portals from one or more suppliers, a review and marketing platform, payroll and HR (Xero Payroll, Employment Hero, MYOB), and accounting software. Because optometry sits at the intersection of clinical practice and retail optical, the stack tends to accumulate both health and retail tool categories.",
          },
        },
        {
          "@type": "Question",
          name: "How do optometry practices audit software subscriptions without a dedicated admin function?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Export 6 to 12 months of billing data from your business bank account, credit card, and Xero or MYOB. You do not need patient records or clinical data — billing exports show vendor names, amounts, and billing frequencies, which is sufficient to identify overlap, idle accounts, and renewal risk. Group charges by function: clinical and practice management, POS and inventory, booking, recalls, ordering portals, marketing, payroll, and accounting. For any category with more than one tool, check whether your core practice management or POS system includes that capability at your current plan tier. StackSmart automates the grouping step from a billing export.",
          },
        },
        {
          "@type": "Question",
          name: "What is the most common software waste in optometry practices?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most common findings are a standalone online booking tool running alongside booking features in the practice management system, a separate patient recall platform duplicating recall functionality already in the clinical system, and a POS or inventory subscription running in parallel with inventory features in the base practice management platform. Frame and lens ordering portals are often free or supplier-subsidised, but any paid subscription for an ordering platform that is rarely used is a cancellation candidate. Ghost accounts on per-user platforms after staff departures are also common.",
          },
        },
        {
          "@type": "Question",
          name: "When is the best time for an optometry practice to audit its software subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best trigger is 60 to 90 days before your largest annual contracts renew — practice management and POS systems are typically billed annually. For optometry practices, the start of a new financial year is a natural review point, as it aligns with frame and lens pricing cycles from suppliers and gives a clean baseline for the year ahead.",
          },
        },
        {
          "@type": "Question",
          name: "Why does an optometry practice need a recall-system renewal owner?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Recall, reminder, SMS, booking, and marketing tools often renew quietly because they sit between clinical admin, retail, and ownership. A recall-system renewal owner is the person responsible for checking usage, duplicate modules, send volume, and price changes before renewal, then deciding whether to keep, downgrade, consolidate, or renegotiate the tool.",
          },
        },
        {
          "@type": "Question",
          name: "How do optometry practice owners build a recurring bills register to track software due dates and payment accounts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Export 6 to 12 months of transactions from Xero, MYOB, or your business card. For each recurring charge, record the vendor name, monthly or annual cost, next billing or renewal date, which card or bank account it debits, who last confirmed the tool is still needed, and a decision: keep, cancel, downgrade, consolidate, renegotiate, or assign a renewal owner. Sort by next billing date so the most urgent renewals get attention first. Optometry practices span clinical and retail billing, so charges appear across the practice card, supplier accounts, POS terminal agreements, and sometimes the owner's personal card — making a consolidated register essential.",
          },
        },
      ],
    },
  ],
};

const wasteSignals = [
  {
    label: "Standalone booking tool alongside practice management booking",
    detail:
      "A third-party booking platform active in parallel with online booking features in Optomate, Sunix, or Cliniko. Many practices adopted a booking tool before the clinical system included patient-facing scheduling, and both are still billing.",
    color: "text-red-400",
    tag: "Consolidate",
  },
  {
    label: "Separate recall platform duplicating PMS recall features",
    detail:
      "A standalone patient recall or reminder tool running alongside automated recall functionality in the practice management system. Most modern optometry PMS platforms include appointment reminders and recall workflows — a paid separate tool is often redundant.",
    color: "text-red-400",
    tag: "Consolidate",
  },
  {
    label: "POS or inventory subscription, practice management includes it",
    detail:
      "A paid optical POS or inventory management subscription running in parallel with POS and inventory features already included in the practice management platform's current tier. Common after a plan upgrade where the feature set shifted but the standalone subscription was not reviewed.",
    color: "text-amber-400",
    tag: "Audit overlap",
  },
  {
    label: "Ghost accounts on per-user clinical platforms",
    detail:
      "Idle optometrist or staff accounts on per-user practice management, POS, or payroll platforms after staff departures. Platforms billing $60 to $150 per user per month carry meaningful per-account waste when accounts are not removed promptly.",
    color: "text-amber-400",
    tag: "Right-size",
  },
  {
    label: "Review or marketing tool on an oversized tier",
    detail:
      "A review management or email marketing tool on a Business or Growth plan selected during a patient acquisition drive, with the practice since relying on word-of-mouth and organic search. Monthly cost at a tier that exceeds actual contact volume or usage.",
    color: "text-orange-400",
    tag: "Downgrade",
  },
  {
    label: "Paid ordering portal subscription alongside free supplier portals",
    detail:
      "A paid third-party frame or lens ordering aggregator subscription running alongside free supplier-direct portals. Most major optical frame and lens suppliers offer ordering portals at no cost — a paid aggregator subscription is only justified if the consolidation benefit matches the cost.",
    color: "text-brand-400",
    tag: "Renegotiate",
  },
];

export default function OptometryPracticeSoftwareSubscriptionAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Optometry practice software subscription audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Optometry practice software subscription audit
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Optometry sits at the intersection of clinical practice and retail optical — which means the software stack spans both worlds. Booking, clinical and practice management, POS, optical inventory, frame and lens ordering portals, recalls, marketing, payroll, and accounting. As practice management platforms have expanded their feature sets, many optometry businesses are paying for tools that duplicate what the core system already includes. The audit works from billing exports only — no patient records or clinical data needed.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "optometry_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "optometry_audit_secondary" }}
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
              What is an optometry practice software subscription audit, and why do optical practices need one?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              An optometry practice software subscription audit is a structured review of every recurring software charge the practice pays — clinical and practice management systems, POS and optical inventory tools, online booking platforms, patient recall and reminder services, frame and lens ordering portals, review and marketing tools, payroll, HR, and accounting. Because optometry combines clinical and retail operations, the stack tends to be broader than in a pure-clinical or pure-retail business, and the overlap between clinical system features and standalone point solutions is often larger. The audit uses billing export data only — no patient records, clinical exam data, or health information is required. For owner-operators and practice managers without a dedicated admin or IT function, a billing export is the fastest way to get a structured picture of subscription waste.
            </p>
          </div>
        </div>
      </section>

      {/* Typical software stack */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What a typical optometry practice software stack looks like</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Most independent optometry practices with 2 to 8 staff are running 10 to 18 recurring subscriptions across clinical, retail, and business operations.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Clinical and practice management", "Optomate, Sunix, Nuvola, Cliniko — the operational core. Most include appointment scheduling, patient records, recalls, and billing that once required separate tools. The degree of retail/POS integration varies by platform."],
              ["POS and optical inventory", "Sometimes built into the practice management platform, sometimes a separate tool. Independent optical POS systems are common in older or larger practices, and frequently carry costs that duplicate PMS inventory features."],
              ["Online booking and scheduling", "A patient-facing booking portal — often adopted before the practice management system included online booking, and frequently still running in parallel after native scheduling was enabled."],
              ["Recalls and reminders", "Automated appointment reminders and vision recall campaigns — increasingly included in modern practice management platforms, but often still running as a standalone paid SMS or email service."],
              ["Frame and lens ordering portals", "Supplier-direct portals (mostly free) plus potentially a paid ordering aggregator. Paid aggregator subscriptions are worth reviewing for actual utilisation versus the cost relative to direct supplier portals."],
              ["Payroll, accounting, and marketing", "Xero, MYOB, Employment Hero — accounting and payroll tools. Marketing tools for patient review management and local SEO are often added during growth phases and retained at oversized tiers."],
            ].map(([cat, detail]) => (
              <div key={cat} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-sm font-semibold text-white">{cat}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waste signals */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Common software waste patterns in optometry practices</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the six patterns StackSmart most commonly surfaces when reviewing optometry practice billing exports.
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
          <h2 className="text-2xl font-semibold text-white">30-day software audit for an optometry practice</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Designed for a practice owner or practice manager. No IT function or clinical data access required.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Week 1 — Pull billing data",
                "Export 6 to 12 months of transactions from your business bank account, credit card, and Xero or MYOB. Include subscriptions billed to personal cards for practice tools. Aim for 12 months minimum — practice management and POS systems often bill annually. Consolidate into one list with vendor name, amount, and billing frequency.",
              ],
              [
                "Week 2 — Map the stack and identify overlap",
                "Group every subscription by function: clinical and practice management, POS and inventory, booking, recalls, ordering portals, marketing, payroll, and accounting. For any category with more than one tool, check your practice management system at your current plan tier — booking, recalls, POS, and inventory are the categories most likely to have native capability running alongside an older point solution.",
              ],
              [
                "Week 3 — Size the savings and prioritise",
                "Pull user lists from each per-seat platform and compare against current headcount for optometrists and staff. Calculate the annual cost of each idle account and each redundant subscription. Rank by dollar value and ease of action — cancellations first, then consolidation, downgrade, and renegotiation for contracts renewing within 90 days. For ordering portals, compare usage logs against subscription cost.",
              ],
              [
                "Week 4 — Act and document",
                "Remove idle accounts and cancel confirmed redundant tools. Where consolidation requires migrating workflows to PMS-native features, schedule a parallel running period before cancelling the secondary tool. Contact vendors for annual contracts renewing soon — current user counts and usage logs are useful leverage. Document decisions for the next review cycle.",
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
          <h2 className="text-2xl font-semibold text-white">Example findings from an optometry practice software audit</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Illustrative examples based on common patterns in optometry practice billing data. Actual amounts vary by practice size and stack.
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
                  ["Booking platform active, PMS booking module available", "Consolidate to PMS booking", "$720 – $2,400/yr"],
                  ["Recall tool running, PMS recall features unused", "Cancel recall tool", "$480 – $1,800/yr"],
                  ["Standalone POS subscription, PMS includes POS at current tier", "Cancel POS subscription", "$900 – $3,600/yr"],
                  ["2 idle optometrist accounts in practice management system", "Remove inactive accounts", "$960 – $3,600/yr"],
                  ["Ordering aggregator subscription, all orders via supplier portals", "Cancel aggregator subscription", "$480 – $1,440/yr"],
                  ["Marketing tool on Growth plan, low campaign volume", "Downgrade to standard tier", "$360 – $1,440/yr"],
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


      {/* GEO scannable: What this audit checks / What StackSmart needs / What you get back */}
      <section className="border-y border-dark-800/80 bg-dark-900/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">June 2026 owner-led audit</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">How the billing-export audit works for optometry practices</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-dark-700 bg-dark-950/70 p-6">
              <h3 className="text-sm font-semibold text-white">What this audit checks</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">Every recurring charge spanning clinical and retail: PMS, POS, optical inventory, online booking, recalls, SMS packs, frame and lens ordering portals, payment terminals, review and marketing tools, M365/Google Workspace, and staff/locum/dispenser seats.</p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-950/70 p-6">
              <h3 className="text-sm font-semibold text-white">What StackSmart needs</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">A billing export from Xero, MYOB, or business card statements covering 6 to 12 months. No patient records, prescriptions, clinical notes, or health fund data. The audit reads vendor names, amounts, and billing dates only.</p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-950/70 p-6">
              <h3 className="text-sm font-semibold text-white">What you get back</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">A categorised action list: keep tools tied to daily patient and retail workflows, cancel duplicates, downgrade oversized tiers, consolidate recall/SMS overlap, renegotiate contracts, and assign a renewal owner for every annual charge.</p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-950/70 p-6">
              <h3 className="text-sm font-semibold text-white">What to do before a renewal</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">Run the export review 60 to 90 days before PMS, POS, or payroll contracts renew. Compare staff seats against current headcount, check ordering portal usage, and prepare data for vendor renegotiation on annual charges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner/admin cleanup */}
      <section className="border-b border-dark-800/80 bg-dark-950/70 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Owner/admin cleanup</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Recall-system renewal owners and POS/inventory add-on review</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
            Optometry practices combine PMS/clinical systems, recall reminders, online booking, payments, POS, optical inventory, ordering portals, marketing, and M365/Google Workspace. A June 2026 billing-export review assigns recall-system renewal owners, catches POS/inventory duplication after PMS plan upgrades, and flags converted-trial subscriptions and ordering aggregators with low utilisation.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-dark-700 bg-dark-950/70 p-6">
              <h3 className="text-sm font-semibold text-white">Recall and reminder renewal owner</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">Assign a recall-system renewal owner for SMS, email, booking, patient reminder, and marketing automation tools. Review usage, send volume, and duplicate reminder modules before annual renewal rather than after the card is charged. Converted-trial SMS packs are a consistent finding.</p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-950/70 p-6">
              <h3 className="text-sm font-semibold text-white">POS, inventory, and ordering add-ons</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">Separate clinical/PMS costs from retail POS, inventory, ecommerce, payment terminal, and ordering portal add-ons. Keep tools tied to active daily sales workflows; downgrade or cancel modules bought for a short campaign, supplier change, or ordering aggregator with low utilisation versus free supplier-direct portals.</p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-950/70 p-6">
              <h3 className="text-sm font-semibold text-white">Staff, locum, and dispenser seats</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">Compare paid accounts across PMS, POS, M365/Google Workspace, Canva, email, booking, forms, and reporting tools against optometrists, dispensers, locums, admin, and leavers. Remove project-only, departed-user, or converted-trial seats after handoff.</p>
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <TrackLink href="/saas-spend-audit-tool" event="homepage_cta_clicked" props={{ target: "audit_tool", location: "optometry_practice_software_subscription_audit_proof_refresh" }} className="btn-primary text-sm">
              See the audit tool
            </TrackLink>
            <TrackLink href="/software-subscription-audit-checklist" event="homepage_cta_clicked" props={{ target: "checklist", location: "optometry_practice_software_subscription_audit_proof_refresh" }} className="btn-secondary text-sm">
              Use the checklist
            </TrackLink>
          </div>
        </div>
      </section>

      {/* Manual vs StackSmart */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Manual audit vs StackSmart for optometry practices</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Both approaches surface the same waste. StackSmart removes the manual categorisation step so the review happens in hours rather than being deferred.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Manual audit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Export bank, card, and accounting statements separately</li>
                <li>Manually categorise every charge by clinical and retail function</li>
                <li>Pull user lists from each platform individually</li>
                <li>Research which PMS and POS features now overlap point solutions</li>
                <li>Build a prioritised action list in a spreadsheet</li>
                <li>Format findings into something shareable with the practice owner</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-400/30 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">StackSmart</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Upload a single billing export — no clinical data needed</li>
                <li>Automatic categorisation across optometry practice tool categories</li>
                <li>Flags duplicate tools, idle seats, and renewal risks</li>
                <li>Prioritised keep, cut, consolidate, and renegotiate action list</li>
                <li>Shareable savings report ready immediately</li>
                <li>Repeatable baseline for the next annual review</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fit / Not fit */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is StackSmart the right fit for your optometry practice?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Independent or small-group optometry practice with 2 to 15 staff</li>
                <li>Practice owner or practice manager responsible for software decisions</li>
                <li>Paying for a PMS plus 4 or more additional subscriptions</li>
                <li>No dedicated IT, ops, or procurement function</li>
                <li>Billing data accessible from bank statements, card, or Xero/MYOB</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Large optical chain or franchise with a dedicated procurement function</li>
                <li>Primary need is clinical compliance or data governance auditing</li>
                <li>Fewer than five software subscriptions across the practice</li>
                <li>Requires automated provisioning, SSO, or directory integration</li>
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
                "What software do small optometry practices typically subscribe to?",
                "A small optometry practice typically pays for a clinical and practice management system (Optomate, Sunix, Nuvola, Cliniko), a POS and optical inventory tool, online booking software, patient recall and reminder tools, frame and lens ordering portals, a review and marketing platform, payroll and HR, and accounting software. The clinical-retail hybrid nature of optometry means the stack spans both health and retail tool categories.",
              ],
              [
                "How do optometry practices audit software subscriptions without a dedicated admin function?",
                "Export 6 to 12 months of billing data from your business bank account, credit card, and Xero or MYOB. Group charges by function and check whether your practice management or POS system now handles any functions you are paying for separately. Booking, recalls, POS, and inventory are the categories most likely to have native PMS capability running alongside an older point-solution subscription.",
              ],
              [
                "What is the most common software waste in optometry practices?",
                "The most common findings are a standalone booking tool running alongside PMS booking, a separate recall platform duplicating PMS recall features, and a POS or inventory subscription running in parallel with features in the base practice management platform. Ghost accounts on per-user platforms after staff departures are also consistent. Paid ordering aggregator subscriptions with low utilisation are an optometry-specific finding worth reviewing.",
              ],
              [
                "When is the best time for an optometry practice to audit its software subscriptions?",
                "The best trigger is 60 to 90 days before your largest annual contracts renew — practice management and POS systems typically bill annually and carry the highest per-seat cost. The start of a new financial year is a natural review point as it aligns with supplier pricing cycles and gives a clean baseline for the year ahead.",
              ],
              [
                "Why does an optometry practice need a recall-system renewal owner?",
                "Recall, reminder, SMS, booking, and marketing tools often renew quietly because they sit between clinical admin, retail, and ownership. A recall-system renewal owner is the person responsible for checking usage, duplicate modules, send volume, and price changes before renewal, then deciding whether to keep, downgrade, consolidate, or renegotiate the tool.",
              ],
              [
                "How do optometry practice owners build a recurring bills register to track software due dates and payment accounts?",
                "Export 6 to 12 months of transactions from Xero, MYOB, or your business card. For each recurring charge, record the vendor name, monthly or annual cost, next billing or renewal date, which card or bank account it debits, who last confirmed the tool is still needed, and a decision: keep, cancel, downgrade, consolidate, renegotiate, or assign a renewal owner. Sort by next billing date so the most urgent renewals get attention first. Optometry practices span clinical and retail billing, so charges appear across the practice card, supplier accounts, POS terminal agreements, and sometimes the owner's personal card — making a consolidated register essential.",
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

      {/* Recurring bills register */}
      <section className="border-t border-dark-800/80 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">2026-06-19 recurring bills register</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Build a recurring bills register for your optometry practice</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
            Optometry practice owners manage both clinical and retail software — which means recurring charges come from more billing sources than a typical clinic. PMS subscriptions, POS terminal agreements, optical inventory tools, supplier ordering portals, recall and SMS services, marketing platforms, and staff seat licences all bill through different accounts. Australian search demand for optometry practice management software (10 monthly searches, high bid $15) is modest but highly targeted — owners searching for platform options are evaluating whether their current stack is right. The billing-layer audit is the practical first step: map what you are actually paying for before considering a platform change.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Due date and payment account", "Record the billing date and which card, direct debit, supplier account, or POS terminal agreement each subscription charges. Optometry practices frequently discover charges split across the practice card, the owner's personal card, a supplier direct-debit, a POS terminal lease, and Apple ID subscriptions — making total software spend invisible from any single statement."],
              ["Last confirmed still needed", "For each tool, note when someone last verified it is actively used. Recall and SMS platforms, paid ordering aggregators alongside free supplier portals, POS inventory modules after a PMS plan upgrade, and marketing tools from a patient acquisition drive are the categories most likely to have no recent confirmation. If nobody has checked usage in 6 months, it belongs on the review list."],
              ["Keep, cancel, downgrade, consolidate, renegotiate, assign owner", "Give every subscription a decision. Keep tools tied to daily patient appointments and frame/lens ordering. Cancel duplicates — especially recall tools that overlap with PMS recall features. Downgrade POS and marketing tiers above current volume. Consolidate where the PMS now covers a standalone tool's function. Renegotiate annual PMS and POS contracts before the notice window closes. Assign a named renewal owner for every annual charge so nothing auto-renews at last year's seat count or tier."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-3xl border border-brand-500/30 bg-brand-500/10 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-200">Why billing-layer audit before platform migration</p>
            <p className="mt-3 text-sm leading-7 text-dark-200">Most optometry software demand is for the core clinical and POS platform — Optomate, Sunix, Nuvola. StackSmart does not replace any PMS or POS system. It reviews the paid subscription layer around it: booking tools, recall services, SMS packs, ordering portals, marketing platforms, payment terminals, and staff seats that accumulate across practice growth and staff changes. Cleaning up the billing layer first means the owner knows exactly what the practice is paying for before evaluating whether a platform change is worth the migration effort.</p>
          </div>
        </div>
      </section>

      <OwnerLedProofRefresh
        title="June 2026 optometry software cleanup for owners running clinical and retail systems together"
        summary="Optometry practices pay for both health-practice and retail optical tools. The June 2026 refresh targets booking, recalls, SMS packs, POS, inventory, ordering portals, payment terminals, staff/locum seats, converted-trial subscriptions, and ownerless annual renewals so a practice owner can reduce spend without interrupting patient care or frame/lens ordering."
        proofItems={[
          { label: "Recall, SMS, and booking duplication", finding: "A paid recall, SMS pack, booking, or review platform overlaps with recall and booking workflows already bundled into the PMS or optical POS tier. Converted-trial SMS packs are a consistent finding.", action: "Consolidate" },
          { label: "POS/inventory module drift", finding: "A standalone inventory or optical POS subscription continues billing after the core practice platform adds comparable functionality at the current tier, or after a plan upgrade that was never reviewed.", action: "Audit overlap" },
          { label: "Ordering portals and ownerless renewals", finding: "Paid ordering aggregators with low utilisation versus free supplier-direct access, plus annual PMS, POS, payroll, and marketing charges that renew without a named owner checking seat count or tier.", action: "Assign renewal owner + renegotiate" },
        ]}
        boundaries={[
          "Use billing exports, accounting supplier lines, card statements, and paid-seat lists only.",
          "Avoid patient records, prescriptions, clinical notes, Medicare/private-health information, and optical order details.",
          "Separate patient-care continuity from software cost action: recalls, orders, and appointment history must remain safe before cancellation.",
          "Assign renewal owners for PMS, POS, recall, payroll, marketing, and supplier portal subscriptions.",
        ]}
        location="optometry_practice_20260619"
      />

      {/* Lead capture */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="optometry_audit"
            heading="See what an optometry practice software audit report looks like"
            body="Email yourself the sample report to review the output format before uploading your own billing data. No patient records or clinical data required."
            successMessage="Sample report sent. Open it now or return from your inbox when you are ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Start the audit before the next renewal cycle</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see exactly what StackSmart produces from a billing export, then decide if it fits your review cycle.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "optometry_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "optometry_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit resources"
        title="More on software audits for health and allied health practices"
        description="These pages cover the software audit process for owner-led clinic, health, and retail-adjacent verticals."
        links={[
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "The general guide to running a software audit for any SMB without a finance or IT team.",
          },
          {
            href: "/medical-practice-software-subscription-audit",
            title: "Medical practice software subscription audit",
            description: "GP and specialist clinics — booking, telehealth, recalls, billing, and admin tool overlap.",
          },
          {
            href: "/allied-health-software-subscription-audit",
            title: "Allied health software subscription audit",
            description: "Physio, OT, speech, and allied health clinics — booking, clinical, billing, and NDIS tool overlap.",
          },
          {
            href: "/dental-practice-software-subscription-audit",
            title: "Dental practice software subscription audit",
            description: "Booking, clinical records, imaging, billing, recalls, and patient comms overlap in dental stacks.",
          },
          {
            href: "/retail-store-software-subscription-audit",
            title: "Retail store software subscription audit",
            description: "POS, inventory, loyalty, e-commerce, and marketing tool overlap in owner-led retail businesses.",
          },
          {
            href: "/how-to-audit-software-subscriptions",
            title: "How to audit software subscriptions",
            description: "Step-by-step process for reviewing recurring software spend without a procurement specialist.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
