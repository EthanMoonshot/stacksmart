import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Retail Store Software Subscription Audit",
  description:
    "Audit your retail store's software subscriptions for duplicate POS tools, unused rostering seats, redundant loyalty apps, and subscriptions that crept in across sites. StackSmart turns billing exports into a clear savings report for independent and multi-site retailers.",
  path: "/retail-store-software-subscription-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/retail-store-software-subscription-audit"),
      url: absoluteUrl("/retail-store-software-subscription-audit"),
      name: "Retail Store Software Subscription Audit | StackSmart",
      description:
        "Audit your retail store software subscriptions for duplicate tools, unused seats, and subscriptions that accumulated across sites and seasons.",
      dateModified: "2026-06-09",
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
          name: "Retail Store Software Subscription Audit",
          item: absoluteUrl("/retail-store-software-subscription-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why do retail businesses accumulate software waste?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Retail operators build their software stack in response to immediate problems — a new POS for a second site, a loyalty app for a seasonal campaign, a rostering tool suggested by a manager. Each site can end up with its own tools, creating duplication across the group. Annual subscriptions renew automatically between peak seasons, and nobody reviews whether the tier or tool still matches the business.",
          },
        },
        {
          "@type": "Question",
          name: "What does a retail software subscription audit cover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A retail software subscription audit covers point-of-sale and payment processing tools, rostering and workforce management platforms, inventory and stock management systems, loyalty and rewards programs, ecommerce and online store tools, email and SMS marketing platforms, payroll and HR software, accounting tools, and reporting or analytics platforms. The goal is to find tools that are duplicated across sites, seats that exceed current headcount, and subscriptions priced above actual usage.",
          },
        },
        {
          "@type": "Question",
          name: "How do I audit retail software subscriptions across multiple sites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Centralise billing data first — pull charges from the business card, accounting tool, and any individual site expense accounts. Map every tool to the sites that use it. Flag any tool that appears in billing for a site that has closed or been absorbed, any category where two sites use different tools for the same function, and any seat count that exceeds current active headcount. Use this as the basis for a consolidation plan.",
          },
        },
        {
          "@type": "Question",
          name: "Can StackSmart help retail businesses find software savings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. StackSmart is designed for owner-led multi-site businesses with fragmented billing across tools and locations. Upload a CSV from Xero, MYOB, or your business card. The report categorises every subscription, flags duplicates and unused seats, and gives you a clear keep, cut, consolidate, and renegotiate action list — without a platform rollout.",
          },
        },
      ],
    },
  ],
};

const wasteCategories = [
  {
    category: "POS and payments",
    issue: "Square, Lightspeed, and Cin7 all active across a small group — each site adopted independently before any group-level standardisation was attempted.",
    action: "Consolidate",
    color: "text-red-400",
  },
  {
    category: "Rostering and workforce",
    issue: "Deputy, Tanda, or Humanforce seats priced at peak season headcount that persist through quieter trading periods without a tier review.",
    action: "Right-size",
    color: "text-amber-400",
  },
  {
    category: "Inventory and stock",
    issue: "Inventory management tools duplicated across a retail and online channel — one for the store, one for the Shopify site — without any integration or consolidation.",
    action: "Consolidate",
    color: "text-amber-400",
  },
  {
    category: "Loyalty and rewards",
    issue: "A loyalty program app installed for a launch campaign and kept active at full subscription cost despite minimal customer enrolment or redemption activity.",
    action: "Review or cut",
    color: "text-orange-400",
  },
  {
    category: "Email and SMS marketing",
    issue: "Klaviyo, Mailchimp, and ActiveCampaign all active — one for the online store, one for the retail list — with no consolidation after the channels were brought under one team.",
    action: "Consolidate",
    color: "text-red-400",
  },
  {
    category: "Payroll and HR",
    issue: "Employment Hero, KeyPay, or ADP licensed at a seat count from a larger team period — not reviewed after a restructure or a season where casual headcount dropped.",
    action: "Downgrade",
    color: "text-orange-400",
  },
];

export default function RetailStoreSoftwareSubscriptionAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Retail store software audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Find the software waste across your retail operation
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Independent and multi-site retailers build their software stack site-by-site and season-by-season. POS tools, rostering platforms, loyalty apps, and inventory systems accumulate without a clear picture of what is being used or what is duplicated. A subscription audit finds exactly what to cut, consolidate, and renegotiate.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "retail_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "retail_audit_secondary" }}
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
              What is a retail store software subscription audit?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              A retail store software subscription audit is a structured review of every software subscription your retail business pays for — across POS and payment processing, rostering and workforce management, inventory and stock control, loyalty programs, ecommerce, email and SMS marketing, payroll, accounting, and reporting tools. The goal is to find tools duplicated across sites, seats that grew with a larger team and were never reduced, and subscriptions priced at tiers above your actual trading volume. The output is a clear action list: keep, cut, consolidate, or renegotiate.
            </p>
          </div>
        </div>
      </section>


      {/* 2026 proof refresh */}
      <section className="border-b border-dark-800/80 bg-dark-950 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">2026 proof refresh</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Measured retail demand, translated into a waste audit</h2>
              <p className="mt-4 text-sm leading-7 text-dark-300">
                Live AU keyword checks show active demand around retail inventory software (170 monthly searches), retail POS software (140), ecommerce software (90), and Shopify apps (1,600). StackSmart uses that buying moment differently: before an owner-led retailer adds another system, it reconciles the paid stack already hiding in card statements, accounting exports, app marketplaces, and site-level admin accounts.
              </p>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <h3 className="text-base font-semibold text-white">Retail action map</h3>
              <ol className="mt-4 space-y-3 text-sm leading-7 text-dark-300">
                <li><span className="font-semibold text-white">1.</span> Pull POS, payments, Shopify app, loyalty, SMS/email, returns, review, inventory, marketplace, and card-statement charges into one list.</li>
                <li><span className="font-semibold text-white">2.</span> Mark who owns each tool, which store or channel uses it, and whether casual/seasonal staff seats are still active after peak trading.</li>
                <li><span className="font-semibold text-white">3.</span> Flag duplicate site-level tools, forgotten app-marketplace add-ons, inactive manager logins, connector fees, and renewals with no owner.</li>
                <li><span className="font-semibold text-white">4.</span> Leave with a keep, cancel, downgrade, consolidate, renegotiate, and renewal-owner list — without replacing your POS or touching customer order data.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Why retailers accumulate waste */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Why retail businesses accumulate software waste</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Three patterns drive most of the creeping SaaS spend in independent and multi-site retail.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              [
                "Site-by-site tool adoption",
                "Each new store or site adds its own preferred tools — a different POS, a different rostering system. Over time a three-site group carries subscriptions for two or three versions of the same tool without consolidation.",
              ],
              [
                "Seasonal headcount inflation",
                "Rostering and payroll tools get provisioned at peak season team sizes. When casual headcount returns to base, the seat count and tier don't always follow — creating sustained overpayment between busy periods.",
              ],
              [
                "Campaign tools that outlast the campaign",
                "Loyalty apps, review platforms, and SMS marketing tools get installed for a launch or campaign. The campaign ends. The subscription stays active at full cost, billing quietly each month.",
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
          <h2 className="text-2xl font-semibold text-white">Retail software waste by category</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the categories where overlap and unused spend appear most frequently in retail billing exports.
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
          <h2 className="text-2xl font-semibold text-white">How to run a retail software subscription audit</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            This works in a quieter trading week and does not require any disruption to live store operations.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Step 1 — Centralise billing data",
                "Pull 6 to 12 months of charges from your accounting tool, business credit card, and any site-level expense accounts. Cover both monthly and annual subscriptions across the whole group, not just head office.",
              ],
              [
                "Step 2 — Map tools to sites",
                "List every software subscription and note which site or sites it serves. Flag any tool that duplicates a function already covered at another site. Flag any subscription billing for a site that has since closed or merged.",
              ],
              [
                "Step 3 — Cross-reference headcount",
                "For rostering, payroll, HR, and POS tools, compare seat counts and tier thresholds against your current active team. Flag any tier that was set at a peak headcount that has since returned to base.",
              ],
              [
                "Step 4 — Rank by cost and ease",
                "Calculate annual cost for every flagged item. Start with clean cancellations — tools for closed sites, apps nobody uses. Then move to tier downgrades, consolidations across sites, and renewal renegotiations.",
              ],
              [
                "Step 5 — Act and document",
                "Cancel unused subscriptions before the next billing cycle. Consolidate duplicated tools across sites with a migration plan timed to a quiet trading period. Renegotiate annual contracts before auto-renew.",
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

      {/* Sample findings table */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What a retail software audit typically surfaces</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are example findings from independent and multi-site retail billing exports. Amounts vary by team size and site count.
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
                  ["Different POS systems across sites, same group", "Consolidate to one", "$2,400 – $8,400/yr"],
                  ["Rostering tier set at peak season headcount", "Downgrade to base headcount", "$1,200 – $4,800/yr"],
                  ["Loyalty app, low redemption since launch", "Review or cut", "$600 – $2,400/yr"],
                  ["Email marketing duplicated across retail and online channels", "Consolidate", "$960 – $3,600/yr"],
                  ["Inventory tool separate from online store", "Integrate or consolidate", "$1,200 – $4,200/yr"],
                  ["Annual POS contract renewing, no usage review", "Renegotiate before renewal", "$1,500 – $6,000/yr"],
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
          <h2 className="text-2xl font-semibold text-white">Is StackSmart the right fit for your retail business?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Owner-operated independent retailer or small multi-site group</li>
                <li>Software that has grown site-by-site or season-by-season without a review</li>
                <li>No dedicated IT or procurement team managing subscriptions</li>
                <li>You want a clear report and action list, not another system to manage</li>
                <li>Billing data available from Xero, MYOB, or business card statements</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Large retail chain with centralised IT and procurement teams</li>
                <li>Need automated provisioning or enterprise SaaS governance</li>
                <li>Primary goal is compliance or security, not cost reduction</li>
                <li>Fewer than six active software subscriptions</li>
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
                "Why do retail businesses accumulate software waste?",
                "Retail operators build their software stack in response to immediate problems — a new POS for a second site, a loyalty app for a seasonal campaign, a rostering tool suggested by a manager. Each site can end up with its own tools, creating duplication across the group. Annual subscriptions renew automatically between peak seasons, and nobody reviews whether the tier or tool still matches the business.",
              ],
              [
                "What does a retail software subscription audit cover?",
                "A retail software subscription audit covers point-of-sale and payment processing tools, rostering and workforce management platforms, inventory and stock management systems, loyalty and rewards programs, ecommerce and online store tools, email and SMS marketing platforms, payroll and HR software, accounting tools, and reporting or analytics platforms.",
              ],
              [
                "How do I audit retail software subscriptions across multiple sites?",
                "Centralise billing data first — pull charges from the business card, accounting tool, and any individual site expense accounts. Map every tool to the sites that use it. Flag any tool that appears in billing for a site that has closed or been absorbed, any category where two sites use different tools for the same function, and any seat count that exceeds current active headcount.",
              ],
              [
                "Can StackSmart help retail businesses find software savings?",
                "Yes. StackSmart is designed for owner-led multi-site businesses with fragmented billing across tools and locations. Upload a CSV from Xero, MYOB, or your business card. The report categorises every subscription, flags duplicates and unused seats, and gives you a clear keep, cut, consolidate, and renegotiate action list.",
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


      {/* June 9 proof/conversion refresh */}
      <section className="border-t border-dark-800/80 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">June 2026 owner-led retail audit</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Reconcile card-statement charges before adding another retail platform</h2>
            <p className="mt-4 text-base leading-7 text-dark-300">DataForSEO AU checks (June 2026) show POS software Australia at 260 monthly searches / $20.22 CPC and retail inventory management software at 170 / $39.69 CPC. That buying intent is real, but for an owner-led retailer the faster win is not another platform evaluation — it is pulling the billing export and reconciling every POS add-on, app-marketplace charge, connector fee, converted trial, loyalty renewal, and multi-site duplicate already on the card statement.</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">1. Pull every payment path into one list</p>
                <p className="mt-3 text-sm leading-7 text-dark-300">Business card statement, Xero or MYOB export, POS marketplace billing, Shopify app receipts, per-site expense cards, and any ecommerce platform invoices. Multi-site retailers miss subscriptions because each store, channel, and head office pay through different cards.</p>
              </div>
              <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">2. Flag duplicate charges and ownerless renewals</p>
                <p className="mt-3 text-sm leading-7 text-dark-300">Group by job: POS, payments, inventory, rostering, loyalty, email/SMS, ecommerce apps, review tools, reporting, and payroll. Flag duplicate site-level tools, forgotten marketplace add-ons, unused licence seats, connector fees, AI/tool overlap, and annual renewals with no named owner.</p>
              </div>
              <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">3. Hand the owner-use action list to your manager</p>
                <p className="mt-3 text-sm leading-7 text-dark-300">Every subscription gets a keep, cancel, downgrade, consolidate, renegotiate, or renewal-owner decision. The output is a list a store manager or bookkeeper can execute: cancel old campaign apps, downgrade seasonal rostering seats, consolidate duplicate email/SMS tools, and set notice-window dates.</p>
              </div>
          </div>
          <div className="mt-8 rounded-3xl border border-brand-500/30 bg-brand-500/10 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-200">Owner-led proof: what StackSmart needs from you</p>
            <p className="mt-3 text-sm leading-7 text-dark-200">A billing export or card statement covering 6 to 12 months. No POS admin credentials, customer order data, or inventory system access. The audit stays on the billing layer: it finds the duplicate charges, platform add-ons, converted trials, unused licences, and ownerless renewals hiding across your retail stack, then returns a practical action list before the next renewal cycle closes.</p>
          </div>
        </div>
      </section>

      {/* Lead capture */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="retail_store_audit"
            heading="See what the audit output looks like"
            body="Email yourself the sample report to review the finding types and action format before uploading your store's billing data."
            successMessage="Sample report sent. Open it now or return from your inbox when ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Start the audit before the next renewal cycle</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see exactly what StackSmart produces from billing data — then decide if it fits your retail business.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "retail_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "retail_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit resources"
        title="More on software audits for owner-led businesses"
        description="If you are auditing your retail software spend, these related guides cover the broader SMB audit approach and vertical-specific pages for other owner-led businesses."
        links={[
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "The owner-led SMB guide to finding and acting on software waste without a dedicated ops team.",
          },
          {
            href: "/ecommerce-software-subscription-audit",
            title: "Ecommerce software subscription audit",
            description: "App and subscription audit guide for small Shopify and ecommerce store operators.",
          },
          {
            href: "/how-to-audit-software-subscriptions",
            title: "How to audit software subscriptions",
            description: "A step-by-step walkthrough for turning billing data into a structured audit without a finance team.",
          },
          {
            href: "/hospitality-group-software-audit",
            title: "Hospitality group software audit",
            description: "POS, reservations, rostering, and delivery stack audit guide for small hospitality groups.",
          },
          {
            href: "/saas-spend-audit-tool",
            title: "SaaS spend audit tool",
            description: "See how StackSmart automates categorisation, duplicate detection, and action planning from billing exports.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}
