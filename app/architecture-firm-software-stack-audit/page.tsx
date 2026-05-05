import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrackLink from "@/components/analytics/TrackLink";
import InlineLeadCapture from "@/components/leadgen/InlineLeadCapture";
import SeoClusterLinks from "@/components/landing/SeoClusterLinks";
import { buildMetadata, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Architecture firm software stack audit | StackSmart",
  description: "Audit software subscriptions for small architecture and design studios. Find duplicate CAD/BIM seats, rendering tools, proposal apps, file storage, project management, e-signature, CRM, and accounting subscriptions from billing exports only.",
  path: "/architecture-firm-software-stack-audit",
});

const faqs = [
  [
    "What software should an architecture firm audit?",
    "Audit CAD/BIM licences, rendering tools, visualisation plugins, file storage, project management, collaboration, proposal software, CRM, e-signature, accounting, payroll, HR, and admin subscriptions. The goal is not to remove production-critical tools; it is to find idle seats, duplicate workflows, and annual renewals that no longer match active projects or headcount."
  ],
  [
    "Can StackSmart review design software without seeing project files?",
    "Yes. StackSmart works from billing exports only. It does not need drawings, BIM models, client project folders, confidential proposals, or access to design platforms. Vendor name, amount, date, and billing frequency are enough to identify recurring charges and likely waste patterns."
  ],
  [
    "Where do architecture firms usually waste software spend?",
    "The biggest waste is usually idle CAD/BIM seats, design contractors left active after a project, rendering tools retained after a visualisation phase, duplicate project-management platforms, and overlapping file-storage plans. Proposal and e-signature overlap is also common in studios that changed sales workflows."
  ],
  [
    "How often should an architecture studio audit its software stack?",
    "At minimum, review software before annual CAD/BIM renewals and after major project closeouts. A quarterly review is useful for studios with frequent contractor onboarding, pitch work, or project-specific visualisation tools."
  ]
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/architecture-firm-software-stack-audit"),
      url: absoluteUrl("/architecture-firm-software-stack-audit"),
      name: "Architecture firm software stack audit | StackSmart",
      description: "Audit software subscriptions for small architecture and design studios. Find duplicate CAD/BIM seats, rendering tools, proposal apps, file storage, project management, e-signature, CRM, and accounting subscriptions from billing exports only.",
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
        { "@type": "ListItem", position: 2, name: "Professional Services Software Audit", item: absoluteUrl("/professional-services-software-audit") },
        { "@type": "ListItem", position: 3, name: "Architecture firm software stack audit", item: absoluteUrl("/architecture-firm-software-stack-audit") },
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
    "CAD, BIM, and design production",
    "Revit, AutoCAD, Archicad, Vectorworks, SketchUp, Rhino, and associated user seats. High annual cost means idle seats or duplicate design platforms quickly become material."
  ],
  [
    "Rendering and visualisation",
    "Enscape, Lumion, Twinmotion, V-Ray, D5 Render, Adobe, and presentation plugins. Often purchased for a specific project and left renewing after project close."
  ],
  [
    "Project management and collaboration",
    "Monograph, Monday, Asana, Trello, Notion, Miro, Teams, Slack, and file-review tools. Studios frequently carry two collaboration systems after a workflow change."
  ],
  [
    "File storage and document control",
    "Dropbox, Google Workspace, Microsoft 365, OneDrive, Egnyte, and drawing issue/document systems. Overlap appears when project teams standardise differently by client."
  ],
  [
    "Proposals, CRM, and e-signature",
    "Pipedrive, HubSpot, Proposify, PandaDoc, DocuSign, Xero Practice Manager-style tools, and tender portals. These often grow independently from delivery systems."
  ],
  [
    "Accounting, payroll, and admin",
    "Xero, MYOB, Employment Hero, Deputy, expense tools, receipt capture, and contractor admin software \u2014 small subscriptions that accumulate around the studio owner or practice manager."
  ]
];
const wasteSignals = [
  {
    "label": "Idle CAD/BIM seats after project close",
    "detail": "Annual design licences stay active for contractors, interns, or project team members who no longer need production access. Two or three unused seats can outweigh every small admin subscription combined.",
    "color": "text-red-400",
    "tag": "Right-size"
  },
  {
    "label": "Rendering tools kept after the visualisation phase",
    "detail": "Rendering engines and asset libraries are often bought for a pitch, competition, or client presentation and kept at the same paid tier after usage drops.",
    "color": "text-red-400",
    "tag": "Cancel or downgrade"
  },
  {
    "label": "Two project management systems",
    "detail": "One system used for studio operations and another used by project teams, with neither fully retired after a transition. Both bill monthly but only one is treated as the source of truth.",
    "color": "text-amber-400",
    "tag": "Consolidate"
  },
  {
    "label": "Duplicate file storage",
    "detail": "Google Workspace, Microsoft 365, Dropbox, and client-specific file portals all active at once. Some overlap is legitimate, but old paid storage plans often survive long after a client project ends.",
    "color": "text-amber-400",
    "tag": "Review"
  },
  {
    "label": "Proposal and e-signature overlap",
    "detail": "A proposal platform, CRM quote feature, and DocuSign account can all support similar client-signoff workflows, especially after the firm changes how it sells retainers or fixed-fee projects.",
    "color": "text-orange-400",
    "tag": "Consolidate"
  },
  {
    "label": "Adobe and plugin tier mismatch",
    "detail": "Creative Cloud, stock imagery, model libraries, and design plugins remain on broad team plans when only a smaller group actively needs them.",
    "color": "text-brand-400",
    "tag": "Downgrade"
  }
];
const auditWorkflow = [
  [
    "Week 1 \u2014 Pull billing exports",
    "Export 6 to 12 months of subscription charges from the studio credit card, bank account, and Xero or MYOB. Include software bought by directors, project leads, and admin staff, because design plugins and proposal tools often sit outside the main finance process."
  ],
  [
    "Week 2 \u2014 Categorise by studio workflow",
    "Group each charge into production design, rendering, collaboration, file storage, proposals, CRM, e-signature, accounting, payroll, or admin. Mark which tools are project-critical versus convenience tools."
  ],
  [
    "Week 3 \u2014 Compare seats to active users",
    "For every per-seat platform, compare paid seats against current staff, contractors, and project roles. Check whether annual design licences are attached to former contractors or completed project teams."
  ],
  [
    "Week 4 \u2014 Cut, consolidate, and renegotiate",
    "Cancel obvious project-specific tools, downgrade broad team plans, and prepare renewal conversations for high-value design licences. Document every decision so the next project ramp-up does not recreate the same waste."
  ]
];
const sampleFindings = [
  [
    "Two unused Revit or Archicad seats retained after contractor offboarding",
    "Remove inactive users before renewal",
    "$2,000 \u2013 $8,000/yr"
  ],
  [
    "Rendering platform and asset library both billing after pitch phase",
    "Cancel or downgrade project-specific tools",
    "$600 \u2013 $3,000/yr"
  ],
  [
    "Monday and Asana both active for project delivery",
    "Standardise one project system",
    "$500 \u2013 $2,500/yr"
  ],
  [
    "Dropbox team plan plus Microsoft 365 storage for same users",
    "Reduce duplicate storage seats",
    "$600 \u2013 $2,400/yr"
  ],
  [
    "PandaDoc, HubSpot quotes, and DocuSign all active",
    "Choose one client-signoff workflow",
    "$500 \u2013 $2,000/yr"
  ],
  [
    "Full Adobe team plan for staff who only need Acrobat",
    "Downgrade lower-use seats",
    "$700 \u2013 $3,600/yr"
  ]
];
const goodFit = [
  "Architecture or interior design studio with 5 to 50 staff",
  "Owner, practice manager, or operations lead owns software decisions",
  "Multiple CAD/BIM, rendering, collaboration, and admin subscriptions",
  "Billing data is available from accounting exports or company cards",
  "No dedicated procurement team regularly reviewing renewals"
];
const notBestFit = [
  "Large multidisciplinary practice with central IT/procurement already managing licences",
  "Primary need is CAD/BIM implementation consulting or security governance",
  "Studio has fewer than five recurring software subscriptions",
  "Requires automated provisioning, SSO, or licence-management integrations"
];

export default function ArchitectureFirmSoftwareStackAuditPage() {
  return (
    <main className="min-h-screen bg-dark-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className="border-b border-dark-800/80 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950 pt-28 pb-16 sm:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-brand-300">Architecture firm software stack audit</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Architecture firm software stack audit</h1>
            <p className="mt-6 text-lg leading-8 text-dark-300">Small architecture and design studios often run high-cost CAD/BIM seats alongside rendering plugins, project management, file storage, proposal, CRM, e-signature, accounting, and admin tools. A software stack audit shows which seats, duplicate tools, and annual renewals are worth keeping before another design-software bill rolls over.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "architecture_firm_audit_primary" }} className="btn-primary text-sm sm:text-base">View sample savings report</TrackLink>
              <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "architecture_firm_audit_secondary" }} className="btn-secondary text-sm sm:text-base">View pricing</TrackLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-dark-800/80 bg-dark-900/40 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-brand-400/20 bg-dark-900/80 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">Direct answer</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">What is an architecture firm software stack audit?</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-300">An architecture firm software stack audit is a practical review of every recurring software charge used by the studio — CAD and BIM licences, rendering tools, visualisation plugins, file sharing, project management, proposal software, CRM, e-signature, accounting, payroll, and admin systems. It identifies idle design seats, duplicate collaboration tools, project-management overlap, legacy plugins, and annual renewals that no longer match current staff or project volume. StackSmart works from billing exports only, so it does not need project files, client drawings, confidential proposals, or access to production systems.</p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">What the software stack usually includes</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-dark-300">A 5 to 30 person architecture studio can easily carry 15 to 30 recurring tools once design, project delivery, marketing, and admin subscriptions are counted together.</p>
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
          <InlineLeadCapture location="architecture_firm_audit" heading="See what an architecture software stack audit report looks like" body="Email yourself the sample report before uploading studio billing data. No project files, drawings, or client data required." successMessage="Sample report sent. Open it now or return from your inbox when you are ready." />
        </div>
      </section>

      <section className="border-t border-dark-800/80 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white">Start the audit before the next renewal cycle</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-dark-300">Open the sample report to see exactly what StackSmart produces from a billing export, then decide if it fits your next software review.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackLink href="/demo" event="homepage_cta_clicked" props={{ target: "demo", location: "architecture_firm_audit_footer" }} className="btn-primary text-sm sm:text-base">Open sample report</TrackLink>
            <TrackLink href="/pricing" event="homepage_cta_clicked" props={{ target: "pricing", location: "architecture_firm_audit_footer" }} className="btn-secondary text-sm sm:text-base">Compare plans</TrackLink>
          </div>
        </div>
      </section>

      <SeoClusterLinks eyebrow="Related audit resources" title="More audit resources for professional-services firms" description="Architecture studios share software-sprawl patterns with agencies, consultancies, and other project-based professional-services businesses." links={[
  {
    "href": "/professional-services-software-audit",
    "title": "Professional services software audit",
    "description": "A broader guide for admin-heavy expert businesses reviewing recurring software spend."
  },
  {
    "href": "/consulting-firm-software-stack-audit",
    "title": "Consulting firm software stack audit",
    "description": "Review proposal, delivery, CRM, file-storage, and admin subscriptions in consulting firms."
  },
  {
    "href": "/agency-software-stack-audit",
    "title": "Agency software stack audit",
    "description": "Find overlap across project management, design, marketing, reporting, and client collaboration tools."
  },
  {
    "href": "/small-business-software-audit",
    "title": "Small business software audit",
    "description": "The general owner-led SMB software audit process."
  },
  {
    "href": "/software-subscription-audit-checklist",
    "title": "Software subscription audit checklist",
    "description": "Checklist and worksheet for preparing billing data before an audit."
  }
]} />

      <Footer />
    </main>
  );
}
