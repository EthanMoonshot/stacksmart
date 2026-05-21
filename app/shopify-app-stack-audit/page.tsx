import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Shopify App Stack Audit",
  description:
    "Audit your Shopify app stack for duplicate review, loyalty, email and SMS, upsell, returns, shipping, inventory, analytics, and helpdesk apps. StackSmart turns your billing export into a clear savings report for owner-led ecommerce operators.",
  path: "/shopify-app-stack-audit",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/shopify-app-stack-audit"),
      url: absoluteUrl("/shopify-app-stack-audit"),
      name: "Shopify App Stack Audit | StackSmart",
      description:
        "Audit your Shopify app stack for duplicate and unused apps across reviews, loyalty, email and SMS, upsell, returns, shipping, inventory, analytics, and helpdesk.",
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
        {
          "@type": "ListItem",
          position: 3,
          name: "Shopify App Stack Audit",
          item: absoluteUrl("/shopify-app-stack-audit"),
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does a Shopify app stack audit cover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Shopify app stack audit covers every recurring app charge billed through Shopify or separately — review and UGC apps, loyalty and referral programs, email marketing, SMS marketing, upsell and cross-sell apps, subscription and recurring order tools, returns and exchange management, shipping and fulfilment apps, inventory and warehouse management, analytics and attribution platforms, helpdesk and customer support tools, and any standalone SaaS tools the store uses alongside Shopify. The goal is to find apps covering the same function, apps installed for a campaign or test that were never uninstalled, and apps billing at tiers above the store's actual order volume and active feature usage.",
          },
        },
        {
          "@type": "Question",
          name: "Why do Shopify stores accumulate too many app charges?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Shopify stores accumulate app charges in three predictable ways: apps are installed to solve an immediate campaign or seasonal need and never uninstalled after the need passes; email, SMS, and loyalty tools are trialled multiple times with each evaluation leaving a residual subscription; and app tiers are upgraded to unlock a specific feature or handle a peak period, then left at the higher tier after the peak subsides. The Shopify App Store makes installation frictionless, which means removal and audit discipline rarely keeps pace with adoption.",
          },
        },
        {
          "@type": "Question",
          name: "How do I audit my Shopify app stack?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start by exporting your Shopify billing history and any external subscriptions paid by card or bank transfer. Include all app charges from Shopify billing, all standalone email, SMS, analytics, helpdesk, and inventory tools paid outside Shopify. Group every charge by function. Flag categories with more than one active app. Check whether Shopify native features (email, analytics, returns) now cover what an installed app was originally purchased to provide. Review the tier for each app against your store's actual monthly order volume and active feature utilisation. Note annual commitments due for renewal within 60 days.",
          },
        },
        {
          "@type": "Question",
          name: "How much can a Shopify store save from an app stack audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most owner-led Shopify stores with 50 to 2,000 monthly orders carry $4,000 to $20,000 in recoverable app charges annually. The largest items are typically email marketing platforms contracted at high contact tiers that the store list has not grown into, duplicate review and loyalty apps left billing alongside replacements, and analytics or attribution tools with overlapping coverage. Stores that grew rapidly and scaled app tiers during peak periods without a downward review are the most likely to find significant recoverable spend.",
          },
        },
      ],
    },
  ],
};

const wasteCategories = [
  {
    category: "Email marketing",
    issue:
      "Klaviyo, Omnisend, and Mailchimp all active — the store migrated to Klaviyo during a growth push but kept the legacy email platform billing while a list migration was completed. Both charge based on contact count, so both tiers are at their most expensive.",
    action: "Consolidate",
    color: "text-red-400",
  },
  {
    category: "Reviews and UGC",
    issue:
      "Yotpo, Judge.me, and Stamped all installed — one from the original store setup, one from a rebrand, one from a trial. All collecting reviews from the same customers with duplicate charges across overlapping tiers.",
    action: "Cut to one",
    color: "text-red-400",
  },
  {
    category: "Loyalty and referral programs",
    issue:
      "Smile.io, LoyaltyLion, and Referral Candy all active after separate decisions to add loyalty and referral mechanics at different points. Programs overlap on customer incentives with no clear owner or consolidation decision made.",
    action: "Consolidate",
    color: "text-amber-400",
  },
  {
    category: "Upsell and cross-sell apps",
    issue:
      "ReConvert, Zipify, and Bold Upsell all installed — each trialled at different times to improve average order value, with one or two active on a single checkout flow and the others billing without contributing to active revenue.",
    action: "Cut to active apps",
    color: "text-amber-400",
  },
  {
    category: "Analytics and attribution",
    issue:
      "Triple Whale, Northbeam, and a standalone Google Analytics 4 connector all running simultaneously. Attribution data split across platforms, with only one used in weekly reporting while the others generate charges.",
    action: "Standardise one",
    color: "text-orange-400",
  },
  {
    category: "Helpdesk and customer support",
    issue:
      "Gorgias and Zendesk both active — Gorgias adopted for its Shopify integration but Zendesk left billing after the full migration was delayed. Both routing tickets from the same customer support queue.",
    action: "Complete migration",
    color: "text-brand-400",
  },
];

export default function ShopifyAppStackAuditPage() {
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
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Shopify app stack audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Find the app overlap charging your Shopify store
            </h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">
              Shopify&apos;s app marketplace makes it easy to add functionality fast. After a few years, most owner-led stores carry duplicate review apps, parallel email platforms, multiple loyalty tools, overlapping analytics subscriptions, and apps installed for campaigns that were never uninstalled. A Shopify app stack audit finds what to remove, consolidate, and renegotiate — turning surplus app charges into recovered margin.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink
                href="/demo"
                event="homepage_cta_clicked"
                props={{ target: "demo", location: "shopify_audit_primary" }}
                className="btn-primary text-sm sm:text-base"
              >
                View sample savings report
              </TrackLink>
              <TrackLink
                href="/pricing"
                event="homepage_cta_clicked"
                props={{ target: "pricing", location: "shopify_audit_secondary" }}
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
              How do you audit your Shopify app stack?
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
              Export your Shopify billing history and any external app charges paid by card or bank transfer outside Shopify&apos;s billing system. Include every recurring charge: apps billed through Shopify, standalone email and SMS platforms, external analytics tools, helpdesk and support software, inventory management systems, shipping tools, and any other SaaS the store pays for separately. Group every charge by function: reviews and UGC, loyalty and referral, email marketing, SMS marketing, upsell and cross-sell, subscriptions and recurring orders, returns management, shipping and fulfilment, inventory, analytics and attribution, and helpdesk and customer support. Flag any category with more than one active subscription. Check whether Shopify native features now cover what an installed app was originally purchased for. Review each app tier against your store&apos;s current monthly order volume and active feature usage. Note annual commitments renewing within 60 days.
            </p>
          </div>
        </div>
      </section>

      {/* Why Shopify stacks accumulate waste */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Why Shopify app stacks accumulate subscription waste</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            Three patterns drive most of the app charge accumulation in owner-led Shopify stores.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              [
                "Campaign installs that stay active",
                "Apps installed to support a specific campaign, seasonal push, or feature test rarely get uninstalled after the need passes. A store can accumulate 8 to 12 apps installed for one-time purposes that are billing month after month at the base tier while delivering no active value.",
              ],
              [
                "Platform migration overlap",
                "Switching email platforms, loyalty tools, or helpdesk providers leaves both the old and new system billing simultaneously during a migration. The longer the transition, the more both platforms charge — and the migration deadline slips while both invoices auto-renew.",
              ],
              [
                "Peak-period tier upgrades",
                "Apps are upgraded to higher tiers during Q4, a product launch, or a high-growth period to handle increased order volumes or unlock a specific feature. When the peak subsides, the tier is rarely reviewed back down — and the higher monthly charge compounds through the quieter months.",
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
          <h2 className="text-2xl font-semibold text-white">Shopify app stack waste by category</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are the app categories where Shopify store operators most commonly find recoverable spend.
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
          <h2 className="text-2xl font-semibold text-white">How to audit your Shopify app stack in 30 days</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            The store owner or ecommerce manager can run this review without disrupting live store operations or active campaigns.
          </p>
          <div className="mt-8 space-y-6">
            {[
              [
                "Step 1 — Export Shopify billing and external app charges",
                "Download your Shopify billing history from the Payments section of your admin. Separately export any app charges paid outside Shopify — email platforms, analytics tools, helpdesk software, or inventory management systems on separate invoices. Include 6 to 12 months of data to capture annual subscription cycles.",
              ],
              [
                "Step 2 — Group every app by function",
                "Organise charges into functional categories: reviews and UGC, loyalty and referral, email marketing, SMS marketing, upsell and cross-sell, subscription and recurring orders, returns and exchange management, shipping and fulfilment, inventory management, analytics and attribution, helpdesk and customer support. Any category with more than one active app is an immediate consolidation candidate.",
              ],
              [
                "Step 3 — Check for Shopify native feature overlap",
                "Review what Shopify now includes natively at your plan level. Shopify has expanded native email, basic analytics, returns management, and checkout customisation significantly. Apps purchased to fill these gaps 18 to 36 months ago may now be redundant and can be removed without replacing with another paid app.",
              ],
              [
                "Step 4 — Review tiers against current order volume",
                "For contact-count email platforms and order-volume apps, compare the tier you are paying for against your current actual monthly numbers. Apps upgraded for Q4 or a peak launch period are often sitting at 2 to 3x the tier your regular order volume actually requires.",
              ],
              [
                "Step 5 — Uninstall, downgrade, and consolidate",
                "Uninstall clearly unused apps before the next billing cycle — each uninstall stops the charge immediately. Downgrade contact-count and order-volume apps to the tier your current usage actually requires. Plan migrations for duplicate tools during a lower-volume period to minimise disruption to active campaigns and automations.",
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
          <h2 className="text-2xl font-semibold text-white">What a Shopify app stack audit typically finds</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">
            These are example findings from Shopify store billing exports. Amounts vary by store size, order volume, and app mix.
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
                  ["Email platform duplicated during migration, both billing by contact count", "Complete migration, cancel old", "$1,800 – $9,600/yr"],
                  ["Two review apps collecting from the same customers", "Cut to one", "$600 – $3,600/yr"],
                  ["Three upsell apps, one active on checkout", "Uninstall unused two", "$480 – $2,400/yr"],
                  ["Email list at 60% of contracted tier, plan not reviewed post-peak", "Downgrade to actual tier", "$960 – $4,800/yr"],
                  ["Duplicate analytics tools, reporting from one only", "Cancel unused", "$720 – $3,600/yr"],
                  ["Apps installed for a campaign, still billing 14 months later", "Uninstall immediately", "$360 – $2,400/yr"],
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
          <h2 className="text-2xl font-semibold text-white">Is StackSmart right for your Shopify store?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-400">Good fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-200">
                <li>Owner or operator of a Shopify store with a growing app stack</li>
                <li>50 to 5,000 monthly orders with 10 or more active app subscriptions</li>
                <li>No dedicated ecommerce ops or procurement team reviewing app charges</li>
                <li>Store has grown through multiple platform migrations or seasonal scale-ups</li>
                <li>Billing data accessible from Shopify admin and business card statements</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dark-700 bg-dark-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-dark-400">Not the best fit</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-dark-400">
                <li>Enterprise retail group with centralised IT and procurement managing app licensing</li>
                <li>Need an audit of Shopify order or customer data — StackSmart works from billing data only</li>
                <li>Fewer than five active recurring app subscriptions</li>
                <li>Requires automated provisioning or compliance workflows beyond billing review</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 owner-led SMB proof refresh */}
      <section className="border-y border-dark-800/80 bg-dark-900/40 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">2026 proof refresh</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Find the hidden app-marketplace charges before they become margin drag</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">
            For small ecommerce operators, app waste is rarely one huge platform mistake. It is review apps, loyalty tools, page builders, inventory helpers, SMS/email tiers, attribution dashboards, and seasonal campaign tools quietly billing through Shopify and card statements after the owner has moved on.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Marketplace plus card export", "Review Shopify billing, app-store charges, and external SaaS paid by card so app subscriptions outside the Shopify invoice are not missed."],
              ["Agency and owner access cleanup", "Flag apps installed by an agency, freelancer, or ex-team member where no current owner can say why it is still active or which campaign uses it."],
              ["Tier right-sizing after peaks", "Check whether holiday, launch, or growth-period upgrades are still billing at higher order, contact, usage, or feature tiers after sales volume normalised."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-dark-700 bg-dark-950/70 p-5">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-dark-300">{body}</p>
              </div>
            ))}
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
                "What does a Shopify app stack audit cover?",
                "A Shopify app stack audit covers every recurring app charge billed through Shopify or separately — review and UGC apps, loyalty and referral programs, email marketing, SMS marketing, upsell and cross-sell apps, subscription tools, returns management, shipping, inventory management, analytics platforms, and helpdesk tools. The goal is to find duplicate apps, apps billing beyond their useful life, and tiers priced above current usage.",
              ],
              [
                "Why do Shopify stores accumulate too many app charges?",
                "Shopify stores accumulate app charges through campaign installs that never get removed, platform migration overlaps where both old and new tools bill simultaneously, and peak-period tier upgrades that are not reviewed back down after the volume subsides. The Shopify App Store makes installation frictionless, which means removal discipline rarely keeps pace with adoption.",
              ],
              [
                "How do I audit my Shopify app stack?",
                "Export your Shopify billing history and any external charges paid by card or bank. Group every charge by function. Flag categories with more than one active app. Check Shopify native features for overlap with installed apps. Review each app tier against your current actual monthly order volume and active feature usage. Note annual commitments due for renewal within 60 days.",
              ],
              [
                "How much can a Shopify store save from an app stack audit?",
                "Most owner-led Shopify stores with 50 to 2,000 monthly orders carry $4,000 to $20,000 in recoverable app charges annually. The largest items are typically email platforms at over-committed contact tiers, duplicate review and loyalty apps, and analytics tools with overlapping coverage where only one is used in active reporting.",
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
            location="shopify_app_stack_audit"
            heading="See what the Shopify app stack audit report looks like"
            body="Email yourself the sample report to review the output format before uploading your store billing data. No Shopify login or store data required."
            successMessage="Sample report sent. Open it now or return from your inbox when ready."
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Turn surplus app charges into recovered margin</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">
            Open the sample report to see what StackSmart produces from a billing export. No Shopify credentials or store data needed — just billing statements.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink
              href="/demo"
              event="homepage_cta_clicked"
              props={{ target: "demo", location: "shopify_audit_footer" }}
              className="btn-primary text-sm sm:text-base"
            >
              Open sample report
            </TrackLink>
            <TrackLink
              href="/pricing"
              event="homepage_cta_clicked"
              props={{ target: "pricing", location: "shopify_audit_footer" }}
              className="btn-secondary text-sm sm:text-base"
            >
              Compare plans
            </TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks
        eyebrow="Related audit resources"
        title="More on software audits for ecommerce and retail operators"
        description="These related pages cover the ecommerce and retail audit guides, the broader SMB checklist, and the core StackSmart audit tool."
        links={[
          {
            href: "/ecommerce-software-subscription-audit",
            title: "Ecommerce software subscription audit",
            description: "App and subscription audit guide for owner-operated Shopify and ecommerce stores.",
          },
          {
            href: "/retail-store-software-subscription-audit",
            title: "Retail store software subscription audit",
            description: "POS, rostering, inventory, loyalty, and ecommerce stack audit guide for independent and multi-site retailers.",
          },
          {
            href: "/small-business-software-audit",
            title: "Small business software audit",
            description: "The owner-led SMB guide to finding and acting on software waste without a dedicated IT or finance team.",
          },
          {
            href: "/how-to-audit-software-subscriptions",
            title: "How to audit software subscriptions",
            description: "A step-by-step walkthrough for turning billing data into a structured audit without a finance team.",
          },
          {
            href: "/software-subscription-audit-checklist",
            title: "Software subscription audit checklist",
            description: "A structured checklist for reviewing every subscription category in your store stack.",
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
