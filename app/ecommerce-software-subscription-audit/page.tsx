import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import OwnerLedProofRefresh from "@/components/landing/OwnerLedProofRefresh";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Ecommerce Software Subscription Audit",
  description:
    "Audit your ecommerce software subscriptions for duplicate Shopify apps, channel connectors, AI content tools subscribed per team member, unused marketing platforms, and apps still billing after a migration. StackSmart turns billing exports into a clear savings report.",
  path: "/ecommerce-software-subscription-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/ecommerce-software-subscription-audit"),
      url: absoluteUrl("/ecommerce-software-subscription-audit"),
      name: "Ecommerce Software Subscription Audit | StackSmart",
      description:
        "Audit your ecommerce software subscriptions for duplicate apps, unused integrations, and tools that grew with a store that has since scaled back.",
      dateModified: "2026-06-10",
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
          name: "Ecommerce Software Subscription Audit",
          item: absoluteUrl("/ecommerce-software-subscription-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why do ecommerce stores accumulate so many software subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ecommerce operators install apps to solve specific problems — abandoned cart recovery, loyalty, reviews, upsells, shipping automation. Each one adds a monthly charge. As the store grows, new apps layer on top of existing ones without removing the old. A Shopify store with 30 or more app subscriptions will often find significant duplication across email, reviews, loyalty, and fulfilment categories.",
          },
        },
        {
          "@type": "Question",
          name: "What does an ecommerce software audit cover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An ecommerce software subscription audit covers the Shopify app stack, email and SMS marketing platforms, reviews and UGC tools, loyalty and rewards apps, subscription management, ads and attribution reporting, helpdesk and live chat, inventory and warehouse management, shipping and fulfilment apps, and any standalone SaaS tools the business runs outside the platform. The goal is to find duplicated functions, apps installed for a campaign that never got removed, and tools priced at tiers that no longer match actual order volume.",
          },
        },
        {
          "@type": "Question",
          name: "How do I audit Shopify app subscriptions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Export 6 to 12 months of app billing from Shopify Payments or your business card. Supplement this with your email marketing, helpdesk, and attribution tool invoices. Group every charge by function — email, reviews, loyalty, shipping, reporting, support. Flag any category with more than one active tool. Cross-reference monthly charges against actual usage where possible. Cancel apps that are installed but not actively driving orders or solving a live problem.",
          },
        },
        {
          "@type": "Question",
          name: "Can StackSmart help ecommerce businesses reduce software spend?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. StackSmart is designed for owner-operated businesses with layered billing from multiple tools — which describes most small ecommerce operations. Upload a CSV from Shopify, your card statement, or accounting software. The report categorises every subscription, flags duplicates and apps priced above your usage tier, and gives you a prioritised list of keep, cut, consolidate, and renegotiate actions.",
          },
        },
        {
          "@type": "Question",
          name: "Where do ecommerce software costs hide beyond the Shopify app list?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Several cost categories consistently escape a standard app-list review. Shopify app marketplace charges appear in Shopify billing and accounting exports — not bank statements — so apps installed during testing and never removed stay invisible in a card-statement review. Channel connector fees for Amazon, eBay, and Google Shopping integrations appear as separate vendor charges alongside ad spend. Automation tools (Zapier, Make) on over-sized tiers, AI writing tools subscribed per contractor, and annual app billing that looks like a one-off charge all compound into meaningful overspend that only surfaces in a full 12-month billing export review.",
          },
        },
      ],
    },
  ],
};

const wasteCategories = [
  {
    category: "Email and SMS marketing",
    issue: "Klaviyo, Omnisend, Mailchimp, and Postscript all active at different points — some left running after a platform migration that never got fully completed.",
    action: "Consolidate",
    color: "text-red-400",
  },
  {
    category: "Reviews and social proof",
    issue: "Okendo, Yotpo, Judge.me, and Stamped running in parallel after testing different review platforms — only one is actively collecting and displaying reviews.",
    action: "Cut duplicates",
    color: "text-red-400",
  },
  {
    category: "Loyalty and rewards",
    issue: "Loyalty apps installed during a promotion and never properly evaluated — charging monthly while the program has low redemption rates and minimal customer engagement.",
    action: "Review or cut",
    color: "text-amber-400",
  },
  {
    category: "Ads and attribution",
    issue: "Triple Whale, Northbeam, or similar attribution tools running alongside the native ad platform reporting at an annual cost that exceeds the insight value for the store's current ad spend.",
    action: "Downgrade or cut",
    color: "text-amber-400",
  },
  {
    category: "Helpdesk and support",
    issue: "Gorgias, Tidio, Zendesk, and Freshdesk all tested for customer support — more than one still billing despite the team settling on a single tool months ago.",
    action: "Cancel unused",
    color: "text-orange-400",
  },
  {
    category: "Shipping and fulfilment",
    issue: "ShipStation, Shippit, or Starshipit subscriptions at plan tiers sized for a peak period order volume that has since normalised.",
    action: "Downgrade",
    color: "text-orange-400",
  },
  {
    category: "AI content and copy tools",
    issue: "ChatGPT Plus, Jasper, Copy.ai, and Canva Pro subscribed separately by store owners, freelancers, and contractors — all billing simultaneously for tools with significant feature overlap. Each appears as a different vendor in accounting exports.",
    action: "Consolidate",
    color: "text-amber-400",
  },
  {
    category: "Channel connectors and automation tiers",
    issue: "Zapier, Make, or custom middleware on Business or Teams plans sized for an integration project that completed — the tier was never dropped when the automation task count reduced. Channel connectors for Amazon, eBay, or Google Shopping also carry recurring monthly fees separate from ad spend.",
    action: "Downgrade",
    color: "text-orange-400",
  },
];

export default function EcommerceSoftwareSubscriptionAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Ecommerce software audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Cut the app spend your Shopify store no longer needs
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Small ecommerce stores install apps to solve problems and rarely remove them when the problem changes. Reviews tools, loyalty apps, email platforms, and attribution software layer up quietly. A subscription audit finds exactly what to cut, consolidate, and renegotiate before the next monthly bill.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "ecommerce_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "ecommerce_audit_secondary" }}
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
              What is an ecommerce software subscription audit?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              An ecommerce software subscription audit is a structured review of every tool your online store pays for — across the Shopify app store, email and SMS marketing, reviews, loyalty, ads attribution, helpdesk, inventory, shipping, and any standalone SaaS the business runs. The goal is to find apps that are installed but inactive, categories where two or more tools overlap, and plans priced above your actual order volume or team needs. The output is a prioritised action list: which apps to keep, which to cancel, where to consolidate, and which plans to downgrade or renegotiate.
            </p>
          </div>
        </div>
      </section>

      {/* Why ecommerce stores accumulate waste */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Why ecommerce stores accumulate subscription waste</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Three patterns create most of the small leaks that become costly habits in ecommerce billing.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              [
                "Test-and-forget installs",
                "An app gets installed to solve a short-term problem — a campaign, a seasonal promotion, a developer test. The campaign ends. The app stays active on a paid plan, billing quietly each month.",
              ],
              [
                "Incomplete platform migrations",
                "A store switches from one email or reviews platform to another but doesn't cancel the old subscription. Both tools bill for months or years after the migration while only one gets used.",
              ],
              [
                "Volume-tier mismatch",
                "Apps priced by order volume or contact count get locked in at a tier that made sense during a growth period. When volume stabilises or dips, the tier doesn't get reviewed and the overpayment continues.",
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

      {/* Where costs hide outside the obvious stack */}
      <section className="border-b border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Where ecommerce subscription costs hide outside the obvious stack</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">The most consistently missed charges in small store billing exports appear outside the main Shopify app list.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Shopify app marketplace charges not in bank statements", "Apps installed and billed through Shopify appear in the Shopify billing summary and accounting export — not in your bank statement. Apps installed during development, testing, or a product launch and never uninstalled continue charging without appearing in a standard card statement review."],
              ["Channel connector fees alongside ad spend", "Integrations for Amazon, eBay, Google Shopping, and social commerce carry monthly connector fees from vendors like Codisto, Linnworks, or Channable — billed separately from the channel itself. These appear as unfamiliar vendor names in accounting exports and are often missed in a category-level subscription review."],
              ["Automation tools at the wrong tier", "Zapier, Make, or similar tools are provisioned for an integration project at a Business or Teams tier. Once the project is complete and automations stabilise at lower volume, the tier stays unchanged. The overpayment for unused task capacity continues indefinitely."],
              ["AI tools subscribed per team member", "Store owners, copywriters, VA contractors, and in-house staff each subscribe independently to AI writing, image, and content tools. Each one is expensed separately — making it invisible as a category until a billing export maps vendor names to function."],
              ["Annual app subscriptions in a single charge", "Some Shopify apps offer annual billing at a discount. These appear as a large one-off charge from an app vendor — often categorised as a one-time cost rather than a recurring subscription — and are typically missed in a monthly subscription review."],
              ["Returns and post-purchase app stack overlap", "Returns management, post-purchase upsell, and subscription box tools often duplicate features now included in the store's primary helpdesk or checkout platform. Both tools bill monthly while only one is actively used."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-dark-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waste by category */}
      <section className="border-y border-dark-800/80 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Ecommerce software waste by category</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the categories where overlap and unused spend appear most frequently in small store billing exports.
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
          <h2 className="text-2xl font-semibold text-white">How to run an ecommerce software audit in 30 days</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            This runs alongside normal store operations. No developer or ops resource needed.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Step 1 — Gather all billing data",
                "Export 6 to 12 months of charges from your business card, accounting tool, and Shopify billing history. Include any standalone SaaS tools billed outside the platform. Annual subscriptions require the full 12-month window.",
              ],
              [
                "Step 2 — List every active app and tool",
                "Cross-reference your billing export against your Shopify app list. Every app that is installed and billing should appear on both lists. Apps that appear in billing but not in your active store are immediate cancellation candidates.",
              ],
              [
                "Step 3 — Group by function",
                "Organise every tool by category: email/SMS, reviews, loyalty, helpdesk, shipping, inventory, ads/attribution, subscriptions, analytics, accounting. Any category with more than one active tool is a consolidation candidate.",
              ],
              [
                "Step 4 — Check volume tiers",
                "For tools priced by contact count, order volume, or seats, compare the current tier against your last 3 months of actual usage. Flag where you are significantly below the tier threshold — these are downgrade candidates.",
              ],
              [
                "Step 5 — Act on the priority list",
                "Cancel apps that are clearly inactive or replaced. Downgrade tiers where actual usage is well below the plan. Consolidate overlapping tools on a deliberate timeline. Renegotiate annual contracts approaching renewal.",
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
          <h2 className="text-2xl font-semibold text-white">What an ecommerce subscription audit typically surfaces</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are example findings from small store billing exports. Amounts vary by app mix and tier.
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
                  ["Old email platform active after migration to Klaviyo", "Cancel immediately", "$480 – $2,400/yr"],
                  ["Two reviews apps both collecting and billing", "Cut one", "$600 – $1,800/yr"],
                  ["Attribution tool tier above current ad spend level", "Downgrade plan", "$1,200 – $4,800/yr"],
                  ["Loyalty app with minimal redemption since install", "Review or cut", "$600 – $2,400/yr"],
                  ["Helpdesk tool installed for testing, never rolled out", "Cancel", "$360 – $1,440/yr"],
                  ["Shipping app on peak-period volume tier", "Downgrade to current volume", "$960 – $3,600/yr"],
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
          <h2 className="text-2xl font-semibold text-white">Is StackSmart the right fit for your store?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Owner-operated ecommerce store on Shopify or a similar platform</li>
                <li>10 or more app subscriptions across the store and surrounding tools</li>
                <li>No dedicated ops or finance role managing software billing</li>
                <li>You want a clear report and action list, not another platform to manage</li>
                <li>Billing data available from card statements, Shopify, or Xero</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Large ecommerce operation with a dedicated tech and ops team</li>
                <li>Need automated app provisioning or developer-level SaaS governance</li>
                <li>Primary goal is security compliance, not cost reduction</li>
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
                "Why do ecommerce stores accumulate so many software subscriptions?",
                "Ecommerce operators install apps to solve specific problems — abandoned cart recovery, loyalty, reviews, upsells, shipping automation. Each one adds a monthly charge. As the store grows, new apps layer on top of existing ones without removing the old. A Shopify store with 30 or more app subscriptions will often find significant duplication across email, reviews, loyalty, and fulfilment categories.",
              ],
              [
                "What does an ecommerce software audit cover?",
                "An ecommerce software subscription audit covers the Shopify app stack, email and SMS marketing platforms, reviews and UGC tools, loyalty and rewards apps, subscription management, ads and attribution reporting, helpdesk and live chat, inventory and warehouse management, shipping and fulfilment apps, and any standalone SaaS tools the business runs outside the platform.",
              ],
              [
                "How do I audit Shopify app subscriptions?",
                "Export 6 to 12 months of app billing from Shopify Payments or your business card. Supplement this with your email marketing, helpdesk, and attribution tool invoices. Group every charge by function — email, reviews, loyalty, shipping, reporting, support. Flag any category with more than one active tool. Cross-reference monthly charges against actual usage where possible.",
              ],
              [
                "Can StackSmart help ecommerce businesses reduce software spend?",
                "Yes. StackSmart is designed for owner-operated businesses with layered billing from multiple tools — which describes most small ecommerce operations. Upload a CSV from Shopify, your card statement, or accounting software. The report categorises every subscription, flags duplicates and apps priced above your usage tier, and gives you a prioritised list of keep, cut, consolidate, and renegotiate actions.",
              ],
              [
                "Where do ecommerce software costs hide beyond the Shopify app list?",
                "Several cost categories consistently escape a standard app-list review. Shopify app marketplace charges appear in Shopify billing and accounting exports — not bank statements — so apps installed during testing and never removed stay invisible in a card-statement review. Channel connector fees for Amazon, eBay, and Google Shopping integrations appear as separate vendor charges alongside ad spend. Automation tools (Zapier, Make) on over-sized tiers, AI writing tools subscribed per contractor, and annual app billing that looks like a one-off charge all compound into meaningful overspend that only surfaces in a full 12-month billing export review.",
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

      <OwnerLedProofRefresh
        title="2026-06-10 ecommerce app-stack cleanup for owner-led stores"
        summary="Ecommerce software demand is measurable in Australia (ecommerce software 90 monthly searches; inventory management software small business 320). The practical owner-led wedge is waste in the paid layer: Shopify/WooCommerce app marketplace charges, duplicate email/review/returns/helpdesk tools, marketplace and shipping connectors, inventory add-ons, AI/content subscriptions, agency-installed trials, seasonal tools, and annual app renewals that never got an owner."
        proofItems={[
          { label: "App marketplace sprawl", finding: "Shopify/WooCommerce apps installed for a campaign, promo, bundle, review flow, upsell, or AI/content workflow keep billing after the store stops using the feature.", action: "Cancel or assign owner" },
          { label: "Inventory and fulfilment overlap", finding: "Inventory, shipping, returns, marketplace-sync, helpdesk, loyalty, and analytics subscriptions overlap with tools now included in the core commerce platform or 3PL workflow.", action: "Consolidate" },
          { label: "Connector and usage overages", finding: "Marketing contacts, SMS sends, automation tasks, connector fees, shipping labels, AI credits, and workflow usage can jump before the owner sees the cost in monthly billing.", action: "Downgrade or renegotiate" },
        ]}
        boundaries={[
          "Use billing exports, app billing lines, card statements, and account-owner lists only.",
          "Do not upload customer orders, payment data, support conversations, or fulfilment files.",
          "Separate revenue-critical apps from campaign leftovers before cutting anything.",
          "Give every app, connector, AI/content tool, and marketplace charge a renewal owner before peak season or annual app billing renews.",
        ]}
        location="ecommerce_audit_20260610"
      />

      {/* Lead capture */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InlineLeadCapture
            location="ecommerce_software_audit"
            heading="See what the audit output looks like"
            body="Email yourself the sample report to review the finding types and action format before uploading your store's billing data."
            successMessage="Sample report sent. Open it now or return from your inbox when ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Start the audit before the next app charge hits</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see exactly what StackSmart produces from billing data — then decide if it fits your store.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "ecommerce_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "ecommerce_audit_footer" }}
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
        description="If you are auditing your ecommerce software spend, these related guides cover the broader SMB audit approach and vertical-specific pages for other owner-led businesses."
        links={[
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "The owner-led SMB guide to finding and acting on software waste without a dedicated ops team.",
          },
          {
            href: "/how-to-audit-software-subscriptions",
            title: "How to audit software subscriptions",
            description: "A step-by-step walkthrough for turning billing data into a structured audit without a finance team.",
          },
          {
            href: "/retail-store-software-subscription-audit",
            title: "Retail store software subscription audit",
            description: "POS, rostering, inventory, loyalty, and ecommerce stack audit guide for independent and multi-site retailers.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "A structured checklist for reviewing subscriptions across every category in your stack.",
          },
          {
            href: "/shopify-app-stack-audit",
            title: "Shopify app stack audit",
            description: "Find duplicate review, loyalty, email, upsell, analytics, and helpdesk apps charging your Shopify store.",
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
