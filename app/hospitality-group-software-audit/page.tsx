import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Hospitality Group Software Audit | Cut Subscription Waste Across Your Venues",
  description:
    "Small hospitality groups and multi-site venues carry POS, bookings, rostering, delivery, music licensing, Wi-Fi tools, review platforms, and per-site add-on fees. A software audit finds duplication, idle staff seats, and renewals worth renegotiating before the next cycle.",
  path: "/hospitality-group-software-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/hospitality-group-software-audit"),
      url: absoluteUrl("/hospitality-group-software-audit"),
      name: "Hospitality Group Software Audit | StackSmart",
      description:
        "Small hospitality groups and multi-site venues carry POS, bookings, rostering, payroll, delivery, loyalty, accounting, and marketing tools. A software audit finds what to cut, consolidate, and renegotiate.",
      dateModified: "2026-06-13",
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
          name: "Hospitality Group Software Audit",
          item: absoluteUrl("/hospitality-group-software-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where do hospitality management software costs hide outside the POS or booking platform?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They hide in reservations, delivery integrations, loyalty, SMS, review-management, guest Wi-Fi, analytics, music, reporting, and per-site add-on modules. A 2026 proof refresh should reconcile venue-level billing exports against actual active venues and workflows, then create keep, cancel, downgrade, consolidate, renegotiate, or renewal-owner actions before auto-renewals pass.",
          },
        },
        {
          "@type": "Question",
          name: "What software do small hospitality groups and venues typically subscribe to?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A small hospitality group or multi-site venue typically pays for a POS system (Square, Lightspeed, Kounta), a reservations and table management platform (SevenRooms, OpenTable, Resy), rostering (Deputy, Tanda, HumanForce), payroll (Xero, MYOB), one or more delivery aggregator integrations (Deliverect, Mr Yum, Me&U), a loyalty or CRM platform, accounting software, and marketing tools like email and social scheduling. Multi-venue operators pay many of these costs separately per site, which compounds quickly.",
          },
        },
        {
          "@type": "Question",
          name: "How do hospitality operators audit software subscriptions without a head office ops function?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Export 6 to 12 months of billing data from Xero, MYOB, or your business credit card. Capture charges across all venues — hospitality groups often have subscriptions billed to different payment methods for different sites. Group every charge by function: POS, reservations, rostering, payroll, delivery, loyalty, and marketing. Compare seat counts and per-venue licence fees against your actual headcount and trading sites. Flag anything renewing in the next 90 days as a renegotiation target.",
          },
        },
        {
          "@type": "Question",
          name: "What causes the most software waste in small hospitality groups?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Multi-venue subscription duplication is the most common source of waste. Hospitality groups often have the same software category billed separately per site — reservations platforms, rostering tools, and loyalty programs that could be consolidated to a group licence. Ghost seats from seasonal and casual staff are the second-largest driver: hospitality has high turnover and staff accounts are rarely removed promptly when someone finishes up.",
          },
        },
        {
          "@type": "Question",
          name: "Can a small hospitality group reduce software costs without switching platforms?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually yes. The most valuable actions in most hospitality audits do not require a platform switch — they are account removals, plan downgrades, and vendor conversations about group pricing. Removing idle staff accounts, consolidating delivery integrations, and negotiating a group rate across sites typically recovers more spend than switching to a different POS or reservations system.",
          },
        },
        {
          "@type": "Question",
          name: "What costs outside the main software categories should hospitality operators look for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Background music licensing services (billed per venue at $30 to $120 per month), POS and reservations add-on modules, Wi-Fi management and venue analytics tools, and review or reputation management platforms are consistently missed in a standard software review. These appear outside the headline platform categories in accounting exports — often categorised as venue costs or marketing rather than software subscriptions. A 12-month billing export that captures all recurring charges, not just the obvious platform invoices, is the most reliable way to surface them.",
          },
        },
      ],
    },
  ],
};

const wasteSignals = [
  {
    label: "Per-site subscription duplication",
    detail:
      "Reservations platforms, rostering tools, and loyalty programs billed at an individual site rate across two or three venues. Most of these vendors offer group or multi-site pricing — but operators have to ask and negotiate for it.",
    color: "text-red-400",
    tag: "Consolidate",
  },
  {
    label: "Ghost seats from seasonal and casual staff",
    detail:
      "Hospitality has high casual and seasonal staff turnover. Rostering platforms and payroll tools with per-user pricing accumulate idle accounts every summer, Christmas, and event season when staff cycle through without a formal offboarding process.",
    color: "text-red-400",
    tag: "Right-size",
  },
  {
    label: "Multiple delivery platform integrations",
    detail:
      "Delivery aggregator integration tools (Deliverect, Mr Yum, Bopple) solve a real problem but accumulate across platforms as new delivery channels are added. A venue on four delivery platforms may have two integration tools doing overlapping work.",
    color: "text-amber-400",
    tag: "Audit overlap",
  },
  {
    label: "Reservations platform beyond current covers",
    detail:
      "Table management and reservations platforms priced by covers or seats lock in at a rate tied to pandemic-era recovery expectations or a higher-volume trading period. Current actual covers may justify a lower tier.",
    color: "text-amber-400",
    tag: "Renegotiate",
  },
  {
    label: "Loyalty and CRM tools with no active programme",
    detail:
      "A loyalty or CRM platform set up during a marketing push that never ran consistently. The subscription continues billing monthly while the programme sits inactive and the data goes stale.",
    color: "text-orange-400",
    tag: "Cancel or pause",
  },
  {
    label: "Marketing tools on a tier built for expansion",
    detail:
      "Email and social scheduling platforms on a Business or Agencies plan selected when multi-venue expansion was imminent. If the expansion stalled, the tier is paying for volume and users that do not exist yet.",
    color: "text-brand-400",
    tag: "Downgrade",
  },
  {
    label: "Background music and venue tech licensing",
    detail: "Background music licensing services (Soundtrack Your Brand, Mood Media, Rockbot) billed per venue often stack alongside a personal music streaming account the owner also pays for. Wi-Fi management platforms, footfall counters, and venue analytics tools add further per-site recurring costs that don't surface in the main software category review.",
    color: "text-amber-400",
    tag: "Review",
  },
  {
    label: "POS add-on modules billed at premium tiers",
    detail: "Lightspeed Analytics, Square for Restaurants advanced features, and similar POS add-on modules are enabled during setup and often remain on premium tiers after the reporting or marketing workflow they supported has changed. Venues that trialled and switched POS systems sometimes retain add-on billing on the old platform.",
    color: "text-orange-400",
    tag: "Audit",
  },
];

export default function HospitalityGroupSoftwareAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Hospitality group software audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Cut subscription waste across your venues
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Small hospitality groups and multi-site venues carry one of the most complex software stacks in the SMB market — POS, reservations, rostering, payroll, delivery integrations, loyalty, accounting, and marketing tools, often billed separately per site. High casual staff turnover and layered per-venue pricing make this stack expensive to maintain and easy to overpay. A software audit finds the duplication, idle seats, and renewals worth renegotiating.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "hospitality_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "hospitality_audit_secondary" }}
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
              How do hospitality groups audit their software subscriptions?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              Export 6 to 12 months of billing data from Xero, MYOB, or your business credit card — capturing charges across all venues, which are often billed to different payment methods. Group every recurring charge by category: POS, reservations, rostering, payroll, delivery integrations, loyalty, accounting, and marketing. Flag categories where you are paying per-site for tools that offer group pricing. Cross-reference staff accounts in rostering and payroll tools against your current active headcount and remove idle accounts from the last seasonal cycle. Check annual contract renewal dates on your POS, reservations, and rostering platforms — these are your highest-value renegotiation targets. Assign each subscription a decision and act on seat removals and cancellations first.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              2026 proof refresh: today’s DataForSEO AU live check showed restaurant management software at 70 monthly searches / $20.98 CPC / $19.33 high bid, hospitality software at 40 / $28.88 CPC / $37.56 high bid, POS software Australia at 210 / $30.24 CPC / $28.15 high bid, and POS system for small business at 210 / $50.98 CPC / $53.03 high bid. StackSmart is not trying to replace the operating platform. It audits the subscription layer around that platform for an owner-led 5-50 staff multi-site venue group, restaurant group, cafe group, or bar operator: POS and reservations add-ons, delivery/order integrations, rostering and payroll connectors, loyalty and review tools, Wi-Fi/guest analytics, SMS/email packs, music, signage, and per-site contracts renewed without group pricing review. Start with Xero or MYOB exports, business-card statements, venue-level direct debits, POS/reservation invoices, delivery-integration invoices, and marketing/review platform receipts. The output is a practical keep, cancel, downgrade, consolidate, renegotiate, and renewal-owner action list before notice windows or auto-renewals close.
            </p>
          </div>
        </div>
      </section>

      {/* Typical software stack */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What a typical hospitality group software stack looks like</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Most small multi-site hospitality groups are running 10 to 18 recurring subscriptions across these categories — some billed at a group level, others per venue.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Point of sale", "Square, Lightspeed, Kounta (now Lightspeed), TouchBistro — the operational core. POS vendors often bundle inventory, reporting, and basic loyalty features, but these are frequently supplemented by standalone tools."],
              ["Reservations and table management", "SevenRooms, OpenTable, Resy, Nowbookit — often billed per venue or per covers. Multi-venue operators paying individual site rates may be leaving group pricing on the table."],
              ["Rostering and staff scheduling", "Deputy, Tanda, HumanForce, Sling — heavily used in hospitality. High casual staff volumes mean per-user pricing compounds, and idle accounts from finished casuals accumulate quickly."],
              ["Delivery integration and ordering", "Deliverect, Mr Yum, Bopple, Me&U — aggregator integration tools that pull multiple delivery channels into the POS. Multiple tools in this category often overlap, particularly where one was added per channel."],
              ["Loyalty and CRM", "Marsello, Lightspeed Loyalty, or a standalone email CRM — sometimes set up for a loyalty programme that was never consistently activated, billing monthly with minimal active use."],
              ["Payroll and accounting", "Xero, MYOB — usually at a group level but sometimes billed per entity. Marketing tools (Mailchimp, Klaviyo) often on a plan sized for an expansion that has not happened yet."],
            ].map(([cat, detail]) => (
              <div key={cat} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-sm font-semibold text-white">{cat}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue-level add-ons and hidden costs */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Venue-level add-ons and costs hidden outside the main software review</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">The highest-value missed costs in hospitality group billing exports appear outside the headline platform categories.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["POS and reservations add-on modules", "Advanced reporting, analytics dashboards, marketing automation, and loyalty modules inside POS and reservations platforms carry separate billing on top of the core licence. These are enabled during onboarding or a growth period and rarely reviewed when the venue's needs change. Per-site, they add $50 to $300 per month without appearing in the headline subscription cost."],
              ["Background music licensing per venue", "Commercial music licensing services are billed monthly per venue — typically $30 to $120 per site. Multi-venue operators paying for Soundtrack Your Brand or Mood Media across three venues may also carry a personal music subscription for the same purpose. These costs sit outside the software category in most billing reviews."],
              ["Wi-Fi management and venue analytics tools", "Guest Wi-Fi platforms, footfall counters, and queue management tools billed per venue accumulate quickly across a multi-site group. These are often procured by a venue manager during a fit-out and never consolidated to a group agreement."],
              ["Review and reputation management platforms", "Google review management tools, TripAdvisor premium features, and reputation monitoring services are often subscribed to during a marketing push and left running monthly with minimal ongoing activity. At two to three venues, these add up to a category worth reviewing."],
              ["Multi-site renewal calendar gaps", "Hospitality groups with two to five venues often have no centralised renewal calendar. POS contracts, reservations platform agreements, and rostering plans renew at different times across different venues — often with 30-day cancellation windows that close without a renegotiation attempt."],
              ["Delivery platform integration overlap", "Aggregator integration tools like Deliverect and Bopple were added as new delivery channels launched. As channel mix settles, two integration tools can cover overlapping platforms — both billing monthly with no consolidation review."],
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
          <h2 className="text-2xl font-semibold text-white">Common software waste patterns in hospitality groups</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the patterns StackSmart most commonly surfaces when reviewing hospitality group billing exports.
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
          <h2 className="text-2xl font-semibold text-white">30-day software audit for a small hospitality group</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Designed to run in the quieter trading periods. No dedicated ops or finance function required.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Week 1 — Pull billing data across all venues",
                "Export 6 to 12 months of transactions from Xero, MYOB, and your business credit cards — covering all entities and venues. Hospitality groups often have subscriptions billed to different cards for different sites. Consolidate everything into one list with vendor, amount, billing frequency, and which venue or entity it belongs to.",
              ],
              [
                "Week 2 — Map the stack and identify multi-site duplication",
                "Group every subscription by function: POS, reservations, rostering, payroll, delivery integrations, loyalty, accounting, and marketing. Flag categories where you are paying per-site rates for tools that could move to group pricing. Pull staff lists from rostering and payroll tools and flag accounts for casuals and staff who have finished up since the last seasonal period.",
              ],
              [
                "Week 3 — Size savings and set priorities",
                "Calculate the annual cost of each flagged item across all venues. Ghost seats in rostering tools and per-site reservation platform fees are typically the highest-value items. Prioritise: remove idle staff accounts immediately, then open group-pricing conversations with reservation and rostering vendors, then address delivery integration overlap, then cancel inactive loyalty or marketing tools.",
              ],
              [
                "Week 4 — Act, document, and schedule the next seasonal review",
                "Remove idle staff accounts in each platform directly. Contact vendors for group pricing quotes — your combined venue count is leverage. Cancel tools with no active use before the next billing cycle. Document each decision and schedule the next review for the end of the next seasonal peak, when headcount is clearest.",
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
          <h2 className="text-2xl font-semibold text-white">Example findings from a hospitality group software audit</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are illustrative example findings based on common patterns in hospitality group billing data. Actual amounts vary by venue count, headcount, and stack.
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
                  ["3 venues on individual reservation platform rates", "Negotiate group licence", "$1,800 – $6,000/yr"],
                  ["12 idle casual staff accounts in rostering tool", "Remove inactive accounts", "$720 – $3,600/yr"],
                  ["Two delivery integration tools across overlapping platforms", "Consolidate to one", "$960 – $3,200/yr"],
                  ["Loyalty platform active with no running programme", "Cancel or pause", "$480 – $1,800/yr"],
                  ["Email marketing on Agencies tier, two-venue newsletter usage", "Downgrade to standard plan", "$600 – $2,400/yr"],
                  ["Annual rostering contract at peak seasonal headcount", "Renegotiate to current active count", "$1,200 – $4,800/yr"],
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
          <h2 className="text-2xl font-semibold text-white">Manual audit vs StackSmart for hospitality operators</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Both routes find the same waste. StackSmart removes the spreadsheet step so the review happens during a quiet trading week rather than never.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Manual audit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Export from multiple entities, cards, and venues separately</li>
                <li>Deduplicate and categorise each line item by hand</li>
                <li>Pull staff lists from each platform individually</li>
                <li>Map per-site vs. group pricing structures manually</li>
                <li>Build a prioritised action list in a spreadsheet</li>
                <li>Rebuild the process at the next seasonal review</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-brand-400/30 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-300">StackSmart</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li>Upload a consolidated billing export (CSV or invoice data)</li>
                <li>Automatic categorisation across hospitality tool categories</li>
                <li>Flags multi-site duplication, ghost seats, and renewal risks</li>
                <li>Prioritised keep, cut, consolidate, and renegotiate action list</li>
                <li>Shareable savings report ready immediately</li>
                <li>Repeatable baseline for the next seasonal review</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fit / Not fit */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Is StackSmart the right fit for your group?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Hospitality operator with 1 to 5 venues and 5 to 80 staff</li>
                <li>Owner, operator, or general manager responsible for software decisions</li>
                <li>Paying for POS, rostering, reservations, and at least 3 other tools</li>
                <li>No dedicated IT, ops, or procurement function</li>
                <li>Billing data accessible from Xero, MYOB, or card statements</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Large hospitality group with a corporate ops or finance function</li>
                <li>Primary need is security governance or PCI compliance tooling</li>
                <li>Fewer than five software subscriptions across all venues</li>
                <li>Requires automated user provisioning or directory integration</li>
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
                "What software do small hospitality groups and venues typically subscribe to?",
                "A small hospitality group or multi-site venue typically pays for a POS system (Square, Lightspeed, Kounta), a reservations and table management platform (SevenRooms, OpenTable, Resy), rostering (Deputy, Tanda, HumanForce), payroll (Xero, MYOB), one or more delivery aggregator integrations (Deliverect, Mr Yum, Me&U), a loyalty or CRM platform, accounting software, and marketing tools like email and social scheduling. Multi-venue operators pay many of these costs separately per site.",
              ],
              [
                "How do hospitality operators audit software subscriptions without a head office ops function?",
                "Export 6 to 12 months of billing data from Xero, MYOB, or your business credit card, capturing charges across all venues. Group every charge by function: POS, reservations, rostering, payroll, delivery, loyalty, and marketing. Compare seat counts and per-venue licence fees against your actual headcount and trading sites. Flag anything renewing in the next 90 days as a renegotiation target.",
              ],
              [
                "What causes the most software waste in small hospitality groups?",
                "Multi-venue subscription duplication is the most common source of waste. Hospitality groups often have the same software category billed separately per site — reservations platforms, rostering tools, and loyalty programs that could be consolidated to a group licence. Ghost seats from seasonal and casual staff are the second-largest driver.",
              ],
              [
                "Can a small hospitality group reduce software costs without switching platforms?",
                "Usually yes. The most valuable actions in most hospitality audits do not require a platform switch — they are account removals, plan downgrades, and vendor conversations about group pricing. Removing idle staff accounts, consolidating delivery integrations, and negotiating a group rate across sites typically recovers more spend than switching to a different POS or reservations system.",
              ],
              [
                "What costs outside the main software categories should hospitality operators look for?",
                "Background music licensing services (billed per venue at $30 to $120 per month), POS and reservations add-on modules, Wi-Fi management and venue analytics tools, and review or reputation management platforms are consistently missed in a standard software review. These appear outside the headline platform categories in accounting exports — often categorised as venue costs or marketing rather than software subscriptions. A 12-month billing export that captures all recurring charges, not just the obvious platform invoices, is the most reliable way to surface them.",
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

      {/* 2026-06-08 owner-led hospitality venue billing audit */}
      <section className="border-y border-dark-800/80 bg-dark-900/30 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">2026-06-08 conversion refresh · venue-level billing audit steps</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">Run the venue software audit from card statements and accounting exports</h2>
          <p className="mt-4 text-sm leading-7 text-dark-300">
            Hospitality operators do not need a procurement system to review software costs. The practical starting point is the same as any owner-led SMB: pull billing data, match each charge to a current venue and workflow, and make a keep/cancel/consolidate/renegotiate decision before auto-renewals process. The difference is that hospitality stacks multiply across sites — every venue adds its own POS add-ons, rostering seats, delivery integrations, music licensing, and review tools.
          </p>
          <div className="mt-8 space-y-4">
            {[
              {
                step: "1. Export billing across all venues and entities",
                detail: "Pull 12 months from Xero, MYOB, or QBO plus every business card, direct debit, and venue-level payment method. Hospitality groups commonly have charges spread across venue-specific cards, a head-office account, and direct-debit arrangements with POS and rostering vendors. Consolidate into one list with venue, vendor, amount, and frequency.",
              },
              {
                step: "2. Match each subscription to a venue and active workflow",
                detail: "For each charge, confirm: which venue uses this, is it still trading at a level that justifies the tier, and does a current manager own it? Common orphans: delivery integrations for platforms you no longer use, rostering seats for casuals who finished months ago, loyalty/CRM tools with no active programme, music licensing at closed or seasonal venues.",
              },
              {
                step: "3. Flag site-level duplicates and group-pricing gaps",
                detail: "Identify where the same category is billed per-site at individual rates — reservations, rostering, delivery, review management, Wi-Fi/analytics. Most vendors offer multi-site group pricing when asked. Flag each per-site subscription where a group rate would reduce the combined cost.",
              },
              {
                step: "4. Assign keep, cancel, downgrade, consolidate, renegotiate, or renewal-owner",
                detail: "Every flagged item gets one decision. Seat removals (casual staff, seasonal workers) need no vendor conversation. Group-pricing consolidation requires one call per vendor. POS add-on downgrades require checking whether the venue still uses the premium reporting or marketing module. Assign a named renewal owner for every annual contract.",
              },
              {
                step: "5. Set a seasonal review cadence",
                detail: "Hospitality staff turnover peaks after summer, Christmas, and event seasons. Set a post-season review to clear ghost seats and check whether delivery, loyalty, and marketing tool tiers still match trading volumes. A 30-minute post-season pass prevents the worst accumulation between annual reviews.",
              },
            ].map((item) => (
              <div key={item.step} className="rounded-xl border border-dark-700 bg-dark-900/70 p-5">
                <h3 className="text-sm font-semibold text-white">{item.step}</h3>
                <p className="mt-2 text-sm leading-7 text-dark-300">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-brand-400/20 bg-dark-900/80 p-6">
              <h3 className="text-base font-semibold text-white">Why venue groups carry more waste per dollar of revenue</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">
                Every site multiplies the stack: POS at each venue, reservations per location, rostering seats for each team, delivery integrations per kitchen, music licensing per trading floor, and review/reputation tools per listing. A three-venue operator often pays three times what a single-site equivalent would — without ever negotiating group rates or consolidating accounts. The billing export reveals the full per-site multiplication in one pass.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-400/20 bg-dark-900/80 p-6">
              <h3 className="text-base font-semibold text-white">The operator action list</h3>
              <p className="mt-3 text-sm leading-7 text-dark-300">
                The useful output is a venue-by-venue action board: keep production-critical POS and rostering, cancel dormant delivery/loyalty/marketing tools, right-size rostering seats to current headcount, consolidate per-site reservations and review tools to group pricing, renegotiate annual POS and rostering contracts using multi-site leverage, and assign renewal ownership to the operator, GM, or venue manager responsible for each vendor relationship.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackLink href="/demo" event="homepage_cta_clicked" props={{ from: "hospitality_2026_06_08", target: "demo" }} className="btn-primary text-sm">See sample venue report</TrackLink>
            <TrackLink href="/saas-spend-audit-tool" event="homepage_cta_clicked" props={{ from: "hospitality_2026_06_08", target: "audit_tool" }} className="btn-secondary text-sm">Try the audit tool</TrackLink>
          </div>
        </div>
      </section>

      {/* Lead capture */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="hospitality_audit"
            heading="See what a hospitality group software audit report looks like"
            body="Email yourself the sample report to review the output format before uploading your own billing data."
            successMessage="Sample report sent. Open it now or return from your inbox when you are ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Start the audit during the next quiet trading week</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see exactly what StackSmart produces from billing data, then decide if it fits your review cycle.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "hospitality_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "hospitality_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit resources"
        title="More on software audits for hospitality and retail businesses"
        description="These pages cover the software audit process, tools, and guides for other owner-led SMB verticals."
        links={[
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "The general guide to running a software audit for any SMB without a finance or IT team.",
          },
          {
            href: "/fitness-studio-software-subscription-audit",
            title: "Fitness studio software subscription audit",
            description: "Booking, member management, payments, and marketing stack audit guide for fitness and wellness studios.",
          },
          {
            href: "/how-to-audit-software-subscriptions",
            title: "How to audit software subscriptions",
            description: "Step-by-step process for reviewing recurring software spend without a procurement specialist.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "Work through a structured checklist before turning billing data into a savings report.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See how StackSmart turns a billing export into a structured savings report.",
          },
          {
            href: "/multi-site-venue-software-audit",
            title: "Multi-site venue software audit",
            description: "Per-site POS add-ons, rostering, reservations, and delivery tools duplicated across hospitality group locations.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
