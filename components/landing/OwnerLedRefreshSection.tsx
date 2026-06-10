import Link from "next/link";

const refreshes = {
  accounting: {
    eyebrow: "2026 owner-led accounting practice refresh",
    title: "A practical software audit for firms that do not have a procurement team",
    answer:
      "An accounting firm software stack audit starts with billing exports, card statements, and marketplace invoices — not client ledgers. StackSmart helps a principal or practice manager find duplicate practice tools, ownerless renewals, idle AI seats, and Xero/MYOB/QBO add-ons that can be cut, downgraded, or consolidated before the next renewal.",
    proof: [
      "Separate firm-owned subscriptions from client pass-through billing before reviewing anything.",
      "Run an owner-use pass: every recurring charge needs one current owner and one current use case.",
      "Check proposal, e-sign, document, workflow, reporting, AI, and connector categories for two tools doing the same job.",
    ],
    checklist: ["Export firm card recurring charges", "Export Xero/MYOB/QBO marketplace billing", "Tag each app by job and owner", "Mark cancel, downgrade, consolidate, or keep"],
    faq: [
      ["Can an accounting practice audit software without exposing client data?", "Yes. Start from billing exports, app invoices, card statements, and marketplace billing. Client files, ledgers, tax records, and payroll data are not needed for the first pass."],
      ["What usually creates waste in accounting-firm software stacks?", "The most common waste is duplicate proposal/e-sign tooling, idle workflow seats, AI tools bought at team tier, reporting add-ons with overlapping features, and connectors left running after a process changed."],
    ],
    links: [["Bookkeeping firm audit", "/bookkeeping-firm-software-stack-audit"], ["Xero app audit", "/xero-app-stack-audit"], ["Audit checklist", "/software-subscription-audit-checklist"]],
  },
  bookkeeping: {
    eyebrow: "2026 owner-led bookkeeping firm refresh",
    title: "Find recurring app waste before it becomes another month-end cleanup task",
    answer:
      "A bookkeeping firm software audit is a billing-led review of Xero, QBO, MYOB, receipt capture, payroll, workflow, proposal, e-sign, AI, and connector tools. The goal is not to replace the practice platform; it is to spot duplicate add-ons, zombie seats, recurring payments nobody owns, and marketplace charges that survive because nobody checks every payment path together.",
    proof: [
      "Match firm-card charges against marketplace billing so small add-ons are not missed.",
      "Flag connector fees that create reconciliation drag or duplicate transaction mapping.",
      "Right-size AI transcription, writing, and workflow seats to people who used the tool recently.",
    ],
    checklist: ["Pull card-statement software charges", "Pull Xero/QBO/MYOB add-on billing", "Group by bookkeeping job", "Review owner, active use, and renewal date"],
    faq: [
      ["Do bookkeeping firms need to inspect client accounts to run this audit?", "No. The first pass uses firm billing records and subscription invoices only. Client accounts and transaction-level records are outside the audit boundary."],
      ["Which bookkeeping software categories should be checked first?", "Start with receipt capture, payroll, proposals, e-sign, client portals, workflow, reporting dashboards, AI tools, and connector fees because these categories commonly overlap."],
    ],
    links: [["Accounting firm audit", "/accounting-firm-software-stack-audit"], ["Xero app audit", "/xero-app-stack-audit"], ["SaaS renewal management", "/saas-renewal-management"]],
  },
  xero: {
    eyebrow: "2026 Xero app-stack refresh",
    title: "Use Xero app billing as the map for a cleaner small-business software stack",
    answer:
      "A Xero app stack audit reviews the apps and connectors billing around Xero, then compares them with card-statement software charges. For owner-led SMBs and Xero-heavy firms, this catches duplicate receipt tools, reporting dashboards, payroll add-ons, payment tools, AI/admin apps, and integrations that remain active after the workflow changed.",
    proof: [
      "Keep the audit billing-only: no ledger, payroll, client, or bank transaction records are required.",
      "Check whether native Xero features or the main practice platform now replace older paid add-ons.",
      "Assign every connected app a current owner, renewal date, and cut/downgrade/consolidate decision.",
    ],
    checklist: ["Export Xero marketplace/app billing", "Export firm-card subscriptions", "List connected apps by job", "Confirm owner and last active use"],
    faq: [
      ["What is a Xero app stack audit?", "It is a review of recurring Xero-connected app costs, marketplace subscriptions, and adjacent card-statement tools to find overlap, unused seats, and ownerless renewals."],
      ["Does StackSmart need access to Xero data?", "No. StackSmart can start from billing exports and card statements. The audit does not require client ledgers, bank feeds, payroll files, or invoice details."],
    ],
    links: [["Accounting firm audit", "/accounting-firm-software-stack-audit"], ["Bookkeeping firm audit", "/bookkeeping-firm-software-stack-audit"], ["Small business software audit", "/small-business-software-audit"]],
  },
  ndis: {
    eyebrow: "2026 NDIS/community-care refresh",
    title: "Audit the subscription layer without touching participant records",
    answer:
      "An NDIS provider software audit should start with billing exports, invoices, and card statements for rostering, care management, plan-management, forms, document, compliance, SMS, payroll, accounting, and AI/admin tools. StackSmart focuses on owner-led and admin-heavy providers that need to find duplicate tools and renewal waste without exposing participant, care-plan, or clinical records.",
    proof: [
      "Keep participant and support-plan data out of scope; review vendor billing and subscription ownership only.",
      "Check whether rostering, care, forms, documents, SMS, payroll, and compliance platforms now overlap.",
      "Use a renewal-owner pass so every tool has one person accountable before it renews.",
    ],
    checklist: ["Collect provider software invoices", "Export recurring card charges", "Group by care/admin job", "Confirm owner, active users, and next renewal"],
    faq: [
      ["Can an NDIS provider audit software without participant records?", "Yes. The first audit pass uses subscription billing, vendor invoices, and card statements only. Participant records and care documentation are not required."],
      ["Where does software waste show up in small NDIS providers?", "It often appears in overlapping rostering, care-management, forms, document, SMS, payroll, accounting, compliance, and AI/admin tools — especially after rapid growth or a platform change."],
    ],
    links: [["Community care audit", "/community-care-software-subscription-audit"], ["Clinic software audit", "/clinic-software-subscription-audit"], ["SaaS audit tool", "/saas-spend-audit-tool"]],
  },
  property: {
    eyebrow: "2026 property-management SMB refresh",
    title: "Review the tools around the property platform before replacing the platform",
    answer:
      "A property management software subscription audit is the cheaper first step before a platform replacement project. It reviews billing for the core PM system plus portals, inspection tools, e-sign, SMS packs, CRM, maintenance, trust-account-adjacent add-ons, AI/admin tools, and connectors — without requiring tenant, owner-ledger, or trust-account records.",
    proof: [
      "Audit the software layer around the rent roll or property-services workflow, not sensitive tenant or trust data.",
      "Find duplicate portals, e-sign, inspection, CRM, communications, and reporting tools that survived process changes.",
      "Create a cut/downgrade/consolidate list before negotiating renewals or shopping for a new system.",
    ],
    checklist: ["Export recurring software charges", "List PM-system add-ons and portals", "Group tools by property workflow", "Assign renewal owner and action"],
    faq: [
      ["Should a property team audit subscriptions before changing property-management software?", "Usually yes. A billing-first audit can reveal add-ons, duplicate portals, SMS packs, e-sign tools, and reporting subscriptions that can be removed without a disruptive platform migration."],
      ["Does StackSmart need tenant or trust-account data?", "No. The audit starts from billing exports, invoices, and card statements. Tenant, owner ledger, and trust-account records are not needed for the subscription-layer review."],
    ],
    links: [["Real estate agency audit", "/real-estate-agency-software-audit"], ["Professional services audit", "/professional-services-software-audit"], ["Renewal management", "/saas-renewal-management"]],
  },
  shopify: {
    eyebrow: "2026 owner-led Shopify store refresh",
    title: "Audit the app stack before adding another Shopify app",
    answer:
      "A Shopify app stack audit starts from Shopify billing history and card statements — not customer data or store admin access. StackSmart helps an owner-operator find duplicate review and loyalty apps, email/SMS tiers above actual list size, campaign apps that became permanent charges, shipping and inventory tools superseded by Shopify native features, AI apps with no active output review, and annual renewals without a named owner.",
    proof: [
      "Pull both Shopify billing and card-statement charges so off-platform SaaS is not missed.",
      "Run the owner-use check: every app needs one person who used it in the last 30 days.",
      "Right-size email/SMS tiers to actual contacts and check inventory tools against Shopify native.",
    ],
    checklist: ["Export Shopify billing history", "Export business card recurring charges", "Group every app by store function", "Flag duplicates, campaign leftovers, and tier mismatches"],
    faq: [
      ["Can a Shopify store owner audit apps without customer data?", "Yes. The audit uses Shopify billing exports, card statements, and vendor invoices only. Customer records, order data, and store admin access are not required for the billing-layer review."],
      ["Where does app waste show up most in Shopify stores?", "The most common waste is duplicate review/loyalty apps, email platforms at over-committed contact tiers, campaign and seasonal apps left installed, shipping tools superseded by Shopify Shipping or 3PL integrations, and AI content tools adopted during 2023-2024 that nobody checks."],
    ],
    links: [["Ecommerce audit", "/ecommerce-software-subscription-audit"], ["Retail store audit", "/retail-store-software-subscription-audit"], ["Audit checklist", "/software-subscription-audit-checklist"]],
  },
} as const;

type RefreshKey = keyof typeof refreshes;

export default function OwnerLedRefreshSection({ type }: { type: RefreshKey }) {
  const data = refreshes[type];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text },
    })),
  };

  return (
    <section className="border-y border-white/10 bg-slate-950/70 px-6 py-16 sm:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.06] p-6 shadow-2xl shadow-cyan-950/20 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">{data.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{data.title}</h2>
          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/80 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Direct answer</p>
            <p className="mt-3 text-base leading-8 text-slate-200">{data.answer}</p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {data.proof.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white">First 30-minute audit pass</h3>
            <ol className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              {data.checklist.map((item, index) => (
                <li key={item} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-xs font-bold text-slate-950">{index + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white">Related owner-led SMB audits</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {data.links.map(([label, href]) => (
                <Link key={href} href={href} className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/50 hover:bg-cyan-300/10">
                  {label}
                </Link>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-400">
              StackSmart is built for practical billing-export reviews: identify waste, assign owners, and turn recurring charges into a short action list before renewal dates arrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
