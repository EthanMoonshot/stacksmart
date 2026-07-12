import Link from "next/link";

const refreshes = {
  accounting: {
    eyebrow: "2026 owner-led accounting practice refresh",
    title:
      "A practical software audit for firms that do not have a procurement team",
    answer:
      "An accounting firm software stack audit starts with billing exports, card statements, and marketplace invoices — not client ledgers. StackSmart helps a principal or practice manager find duplicate practice tools, ownerless renewals, idle AI seats, and Xero/MYOB/QBO add-ons that can be cut, downgraded, or consolidated before the next renewal.",
    proof: [
      "Separate firm-owned subscriptions from client pass-through billing before reviewing anything.",
      "Run an owner-use pass: every recurring charge needs one current owner and one current use case.",
      "Check proposal, e-sign, document, workflow, reporting, AI, and connector categories for two tools doing the same job.",
    ],
    checklist: [
      "Export firm card recurring charges",
      "Export Xero/MYOB/QBO marketplace billing",
      "Tag each app by job and owner",
      "Mark cancel, downgrade, consolidate, or keep",
    ],
    faq: [
      [
        "Can an accounting practice audit software without exposing client data?",
        "Yes. Start from billing exports, app invoices, card statements, and marketplace billing. Client files, ledgers, tax records, and payroll data are not needed for the first pass.",
      ],
      [
        "What usually creates waste in accounting-firm software stacks?",
        "The most common waste is duplicate proposal/e-sign tooling, idle workflow seats, AI tools bought at team tier, reporting add-ons with overlapping features, and connectors left running after a process changed.",
      ],
    ],
    links: [
      ["Bookkeeping firm audit", "/bookkeeping-firm-software-stack-audit"],
      ["Xero app audit", "/xero-app-stack-audit"],
      ["Audit checklist", "/software-subscription-audit-checklist"],
    ],
  },
  bookkeeping: {
    eyebrow: "2026 owner-led bookkeeping firm refresh",
    title:
      "Find recurring app waste before it becomes another month-end cleanup task",
    answer:
      "A bookkeeping firm software audit is a billing-led review of Xero, QBO, MYOB, receipt capture, payroll, workflow, proposal, e-sign, AI, and connector tools. The goal is not to replace the practice platform; it is to spot duplicate add-ons, zombie seats, recurring payments nobody owns, and marketplace charges that survive because nobody checks every payment path together.",
    proof: [
      "Match firm-card charges against marketplace billing so small add-ons are not missed.",
      "Flag connector fees that create reconciliation drag or duplicate transaction mapping.",
      "Right-size AI transcription, writing, and workflow seats to people who used the tool recently.",
    ],
    checklist: [
      "Pull card-statement software charges",
      "Pull Xero/QBO/MYOB add-on billing",
      "Group by bookkeeping job",
      "Review owner, active use, and renewal date",
    ],
    faq: [
      [
        "Do bookkeeping firms need to inspect client accounts to run this audit?",
        "No. The first pass uses firm billing records and subscription invoices only. Client accounts and transaction-level records are outside the audit boundary.",
      ],
      [
        "Which bookkeeping software categories should be checked first?",
        "Start with receipt capture, payroll, proposals, e-sign, client portals, workflow, reporting dashboards, AI tools, and connector fees because these categories commonly overlap.",
      ],
    ],
    links: [
      ["Accounting firm audit", "/accounting-firm-software-stack-audit"],
      ["Xero app audit", "/xero-app-stack-audit"],
      ["SaaS renewal management", "/saas-renewal-management"],
    ],
  },
  marketingAgency: {
    eyebrow: "2026 owner-led agency stack refresh",
    title: "Stop agency tool creep before it eats margin again",
    answer:
      "A marketing agency software stack audit reviews billing exports and card statements for SEO, reporting, design, AI, social scheduling, project management, CRM, proposal, contractor, and client-campaign tools. It is for owner-led agencies with 5-50 staff that need a practical cancel, downgrade, consolidate, renegotiate, and renewal-owner list without a procurement team.",
    proof: [
      "Catch client-project residue: campaign tools, trials, and reporting seats that kept billing after a project ended.",
      "Replace shared-login guesswork with a billing-led owner-use check for every recurring app.",
      "Right-size AI, design, SEO, social, and project-management seats to the people using them now.",
    ],
    checklist: [
      "Export agency card and bank software charges",
      "Pull invoices for SEO, reporting, design, AI, social, CRM, and PM tools",
      "Group charges by agency job and client-project residue",
      "Assign owner, renewal date, payment account, and action",
    ],
    faq: [
      [
        "What does a marketing agency software audit cover?",
        "It covers billing for SEO tools, reporting dashboards, social schedulers, design apps, AI subscriptions, project management, CRM, proposal, contractor, and client-campaign tools so the owner can find duplicate accounts, converted trials, unused seats, and ownerless renewals.",
      ],
      [
        "Does StackSmart need access to client campaign data?",
        "No. The first pass uses invoices, billing exports, and card statements only. Client ad accounts, analytics properties, creative files, and campaign data are not required.",
      ],
    ],
    links: [
      ["Bookkeeping firm audit", "/bookkeeping-firm-software-stack-audit"],
      ["Professional services audit", "/professional-services-software-audit"],
      [
        "Business subscription tracker",
        "/business-subscription-tracker-small-business",
      ],
    ],
  },
  professionalServices: {
    eyebrow: "2026 owner-led professional services refresh",
    title:
      "A billing-first audit for boutique firms with too many delivery tools",
    answer:
      "A professional services software audit reviews billing exports for proposal, CRM, time tracking, project management, e-signature, document, AI transcription, reporting, and client-project tools. It is built for boutique consultancies and service firms with 5-50 staff where the principal and admin team need clear renewal decisions, not an enterprise procurement project.",
    proof: [
      "Find project tools that became permanent overhead after the client work ended.",
      "Resolve the principal/admin ownership gap by naming one renewal owner for every subscription.",
      "Compare proposal, CRM, PM, time-tracking, e-sign, AI, and document tools before buying another platform.",
    ],
    checklist: [
      "Export card, bank, and accounting recurring charges",
      "Collect proposal, CRM, PM, time, document, AI, and e-sign invoices",
      "Tag each subscription by delivery, sales, admin, or client-project job",
      "Return a keep, cancel, downgrade, consolidate, renegotiate, or owner action",
    ],
    faq: [
      [
        "Who is a professional services software audit for?",
        "It is for owner-led consultancies and boutique service firms with roughly 5-50 staff that have accumulated proposal, CRM, time tracking, project management, e-signature, AI, reporting, and client-project subscriptions without a formal procurement process.",
      ],
      [
        "What files are needed for the first audit pass?",
        "Billing exports, invoices, card statements, and a rough list of current users are enough. StackSmart does not need client files, commercial advice documents, or project deliverables.",
      ],
    ],
    links: [
      ["Marketing agency audit", "/marketing-agency-software-stack-audit"],
      ["Small business software audit", "/small-business-software-audit"],
      [
        "Small business software inventory",
        "/small-business-software-inventory",
      ],
    ],
  },
  childcare: {
    eyebrow: "2026 owner-led childcare stack refresh",
    title:
      "Audit centre subscriptions without touching child or family records",
    answer:
      "A childcare software subscription audit reviews billing for parent communication, CCS/admin, enrolment, forms, rostering, payroll, payments, learning-story, compliance, training, marketing, and AI/admin tools. It is for owner-led centres and small groups with 5-50 staff that need to find duplicate apps, idle educator seats, and renewal waste from billing exports only.",
    proof: [
      "Keep child records, family details, attendance histories, and learning observations out of scope.",
      "Check director handover gaps where subscriptions stay active because nobody owns the renewal.",
      "Compare parent comms, forms, payments, rostering, payroll, CCS, and learning-story tools for overlap.",
    ],
    checklist: [
      "Export card, bank, Xero, MYOB, or centre-management software charges",
      "Collect parent-comms, CCS, enrolment, rostering, payroll, payments, and learning-story invoices",
      "Compare seat counts with current educators/admin users",
      "Produce keep, cancel, downgrade, consolidate, renegotiate, and renewal-owner actions",
    ],
    faq: [
      [
        "Can childcare centres audit software without child records?",
        "Yes. StackSmart starts with billing exports, invoices, card statements, and subscription ownership notes. Child records, family records, attendance data, learning stories, and CCS case details are not needed for the billing-layer review.",
      ],
      [
        "Where does subscription waste appear in childcare centres?",
        "Common waste appears in duplicate parent communication tools, enrolment/forms apps, rostering and payroll overlap, payment add-ons, learning-story apps, training portals, marketing tools, and subscriptions left active after director or administrator handover.",
      ],
    ],
    links: [
      ["Community care audit", "/community-care-software-subscription-audit"],
      ["Clinic software audit", "/clinic-software-subscription-audit"],
      ["Software audit checklist", "/software-subscription-audit-checklist"],
    ],
  },
  communityCare: {
    eyebrow: "2026 owner-led community-care refresh",
    title: "Clean up the care-admin stack without touching participant data",
    answer:
      "A community care software subscription audit reviews billing exports for care management, rostering, plan-management, document, forms, SMS, payroll, compliance, accounting, reporting, and AI/admin tools. It is for owner-led providers with 5-50 staff that need one practical action list across finance, coordination, rostering, and admin owners.",
    proof: [
      "No participant records, care plans, clinical notes, support documentation, or health information are needed.",
      "Surface duplicate roster, care, forms, SMS, payroll, compliance, and document tools before renewal windows close.",
      "Turn owner/admin handoff gaps into named renewal owners and payment-account notes.",
    ],
    checklist: [
      "Export Xero/MYOB, card, bank, and direct-debit recurring software charges",
      "Collect care-management, roster, forms, SMS, payroll, compliance, document, and AI/admin invoices",
      "Compare coordinator, support-worker, and admin seat counts to current users",
      "Assign keep, cancel, downgrade, consolidate, renegotiate, and renewal-owner decisions",
    ],
    faq: [
      [
        "What does a community care software audit cover?",
        "It covers the subscription and billing layer around care management, rostering, forms, documents, SMS, payroll, compliance, accounting, reporting, and AI/admin tools so owners can find waste without reviewing participant data.",
      ],
      [
        "What output does StackSmart produce for a care provider?",
        "The output is a short action list: keep, cancel, downgrade, consolidate, renegotiate, assign renewal owner, confirm payment account, and note last-confirmed-still-needed for each recurring software charge.",
      ],
    ],
    links: [
      ["NDIS provider audit", "/ndis-provider-software-audit"],
      ["Childcare audit", "/childcare-software-subscription-audit"],
      ["SaaS spend audit tool", "/saas-spend-audit-tool"],
    ],
  },

  alliedHealth: {
    eyebrow: "2026 owner-led allied health refresh",
    title: "Audit clinic software waste from billing data only",
    answer:
      "An allied health software subscription audit reviews the paid admin layer around practice management, booking, reminders, telehealth, forms, AI scribes, payments, payroll, marketing, and reporting tools. It is built for owner-led clinics with 5-50 staff that need duplicate charges, idle practitioner seats, and ownerless renewals turned into a practical action list without touching patient records.",
    proof: [
      "Keep patient files, clinical notes, Medicare details, referrals, and treatment records out of scope.",
      "Compare booking, reminders, forms, telehealth, AI, payments, payroll, and marketing tools for overlap.",
      "Use billing contacts, payment accounts, notice periods, and last-confirmed-still-needed notes to stop quiet renewals drifting.",
    ],
    checklist: [
      "Export Xero/MYOB, card, bank, and direct-debit software charges",
      "Collect PMS, booking, reminders, forms, telehealth, payments, payroll, AI, and marketing invoices",
      "Compare practitioner, admin, and contractor seats against current users",
      "Assign keep, cancel, downgrade, consolidate, renegotiate, and renewal-owner actions",
    ],
    faq: [
      [
        "Can an allied health clinic audit software without patient records?",
        "Yes. The first pass uses billing exports, invoices, card statements, vendor receipts, and subscription ownership notes. Patient records, clinical notes, referrals, Medicare details, and treatment information are not needed.",
      ],
      [
        "Where does software waste show up in allied health practices?",
        "Common waste appears in duplicate booking and reminder tools, telehealth subscriptions retained after usage changed, AI scribes bought by individual practitioners, payment or forms add-ons duplicated by the PMS, idle practitioner seats, and annual renewals with no named owner.",
      ],
    ],
    links: [
      ["Clinic software audit", "/clinic-software-subscription-audit"],
      [
        "Psychology practice audit",
        "/psychology-practice-software-subscription-audit",
      ],
      ["Software audit checklist", "/software-subscription-audit-checklist"],
    ],
  },
  hospitality: {
    eyebrow: "2026 owner-led hospitality group refresh",
    title: "Find venue software waste before the next contract rolls over",
    answer:
      "A hospitality group software audit reviews billing for POS, reservations, rostering, payroll, delivery, loyalty, reviews, Wi-Fi, music, signage, SMS, payments, accounting, and AI/admin tools. It is for owner-led cafes, restaurants, bars, and multi-site venues that need to stop duplicate per-site add-ons, unused manager seats, and auto-renewing contracts before another busy season hides the cost.",
    proof: [
      "Map every vendor to a venue, payment account, billing contact, notice period, and current owner.",
      "Find POS/reservation/rostering/delivery/review add-ons that duplicate features now included in the main platforms.",
      "Turn buried renewal emails and annual contracts into a 90-day owner/operator review lane.",
    ],
    checklist: [
      "Export venue card, bank, accounting, and direct-debit software charges",
      "Collect POS, reservations, rostering, payroll, delivery, loyalty, reviews, Wi-Fi, music, signage, SMS, and payment invoices",
      "Group tools by venue, workflow, payment account, and contract date",
      "Assign keep, cancel, downgrade, consolidate, renegotiate, and renewal-owner decisions",
    ],
    faq: [
      [
        "What should a small hospitality group audit first?",
        "Start with POS and reservation add-ons, rostering and payroll connectors, delivery integrations, loyalty and review tools, Wi-Fi and music subscriptions, SMS/email packs, payment terminals, and per-site manager seats because these often bill from different accounts.",
      ],
      [
        "Is this a POS replacement project?",
        "No. StackSmart audits the subscription layer around the systems a venue already runs. The output is a keep, cancel, downgrade, consolidate, renegotiate, and renewal-owner list for the owner/operator.",
      ],
    ],
    links: [
      ["Multi-site venue audit", "/multi-site-venue-software-audit"],
      ["Retail store audit", "/retail-store-software-subscription-audit"],
      ["SaaS renewal management", "/saas-renewal-management"],
    ],
  },
  xero: {
    eyebrow: "2026 Xero app-stack refresh",
    title:
      "Use Xero app billing as the map for a cleaner small-business software stack",
    answer:
      "A Xero app stack audit reviews the apps and connectors billing around Xero, then compares them with card-statement software charges. For owner-led SMBs and Xero-heavy firms, this catches duplicate receipt tools, reporting dashboards, payroll add-ons, payment tools, AI/admin apps, and integrations that remain active after the workflow changed.",
    proof: [
      "Keep the audit billing-only: no ledger, payroll, client, or bank transaction records are required.",
      "Check whether native Xero features or the main practice platform now replace older paid add-ons.",
      "Assign every connected app a current owner, renewal date, and cut/downgrade/consolidate decision.",
    ],
    checklist: [
      "Export Xero marketplace/app billing",
      "Export firm-card subscriptions",
      "List connected apps by job",
      "Confirm owner and last active use",
    ],
    faq: [
      [
        "What is a Xero app stack audit?",
        "It is a review of recurring Xero-connected app costs, marketplace subscriptions, and adjacent card-statement tools to find overlap, unused seats, and ownerless renewals.",
      ],
      [
        "Does StackSmart need access to Xero data?",
        "No. StackSmart can start from billing exports and card statements. The audit does not require client ledgers, bank feeds, payroll files, or invoice details.",
      ],
    ],
    links: [
      ["Accounting firm audit", "/accounting-firm-software-stack-audit"],
      ["Bookkeeping firm audit", "/bookkeeping-firm-software-stack-audit"],
      ["Small business software audit", "/small-business-software-audit"],
    ],
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
    checklist: [
      "Collect provider software invoices",
      "Export recurring card charges",
      "Group by care/admin job",
      "Confirm owner, active users, and next renewal",
    ],
    faq: [
      [
        "Can an NDIS provider audit software without participant records?",
        "Yes. The first audit pass uses subscription billing, vendor invoices, and card statements only. Participant records and care documentation are not required.",
      ],
      [
        "Where does software waste show up in small NDIS providers?",
        "It often appears in overlapping rostering, care-management, forms, document, SMS, payroll, accounting, compliance, and AI/admin tools — especially after rapid growth or a platform change.",
      ],
    ],
    links: [
      ["Community care audit", "/community-care-software-subscription-audit"],
      ["Clinic software audit", "/clinic-software-subscription-audit"],
      ["SaaS audit tool", "/saas-spend-audit-tool"],
    ],
  },
  property: {
    eyebrow: "2026 property-management SMB refresh",
    title:
      "Review the tools around the property platform before replacing the platform",
    answer:
      "A property management software subscription audit is the cheaper first step before a platform replacement project. It reviews billing for the core PM system plus portals, inspection tools, e-sign, SMS packs, CRM, maintenance, trust-account-adjacent add-ons, AI/admin tools, and connectors — without requiring tenant, owner-ledger, or trust-account records.",
    proof: [
      "Audit the software layer around the rent roll or property-services workflow, not sensitive tenant or trust data.",
      "Find duplicate portals, e-sign, inspection, CRM, communications, and reporting tools that survived process changes.",
      "Create a cut/downgrade/consolidate list before negotiating renewals or shopping for a new system.",
    ],
    checklist: [
      "Export recurring software charges",
      "List PM-system add-ons and portals",
      "Group tools by property workflow",
      "Assign renewal owner and action",
    ],
    faq: [
      [
        "Should a property team audit subscriptions before changing property-management software?",
        "Usually yes. A billing-first audit can reveal add-ons, duplicate portals, SMS packs, e-sign tools, and reporting subscriptions that can be removed without a disruptive platform migration.",
      ],
      [
        "Does StackSmart need tenant or trust-account data?",
        "No. The audit starts from billing exports, invoices, and card statements. Tenant, owner ledger, and trust-account records are not needed for the subscription-layer review.",
      ],
    ],
    links: [
      ["Real estate agency audit", "/real-estate-agency-software-audit"],
      ["Professional services audit", "/professional-services-software-audit"],
      ["Renewal management", "/saas-renewal-management"],
    ],
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
    checklist: [
      "Export Shopify billing history",
      "Export business card recurring charges",
      "Group every app by store function",
      "Flag duplicates, campaign leftovers, and tier mismatches",
    ],
    faq: [
      [
        "Can a Shopify store owner audit apps without customer data?",
        "Yes. The audit uses Shopify billing exports, card statements, and vendor invoices only. Customer records, order data, and store admin access are not required for the billing-layer review.",
      ],
      [
        "Where does app waste show up most in Shopify stores?",
        "The most common waste is duplicate review/loyalty apps, email platforms at over-committed contact tiers, campaign and seasonal apps left installed, shipping tools superseded by Shopify Shipping or 3PL integrations, and AI content tools adopted during 2023-2024 that nobody checks.",
      ],
    ],
    links: [
      ["Ecommerce audit", "/ecommerce-software-subscription-audit"],
      ["Retail store audit", "/retail-store-software-subscription-audit"],
      ["Audit checklist", "/software-subscription-audit-checklist"],
    ],
  },
} as const;

type RefreshKey = keyof typeof refreshes;

const dailyProductionNotes: Partial<
  Record<
    RefreshKey,
    {
      demand: string;
      ownerFit: string;
      exportList: string[];
      actionList: string[];
      notFor: string;
    }
  >
> = {
  bookkeeping: {
    demand:
      "DataForSEO-backed intelligence keeps bookkeeping and accounting software terms commercially relevant, and StackSmart's current commercial state shows the priority is conversion-ready owner-led SMB pages rather than broad informational volume.",
    ownerFit:
      "Best fit: a 5-50 person bookkeeping firm where the owner, practice manager, and senior bookkeepers share responsibility for Xero/QBO/MYOB add-ons, receipt capture, payroll, workflow, proposal, e-sign, AI, reporting, and connector tools.",
    exportList: [
      "Firm card, bank, Xero, QBO, MYOB, and marketplace billing exports",
      "Receipt capture, payroll, workflow, proposal, e-sign, AI, reporting, and connector invoices",
      "Current user/seat list and payment-account notes",
      "Last-confirmed-still-needed notes for any subscription nobody clearly owns",
    ],
    actionList: [
      "Separate firm-owned subscriptions from client pass-through costs",
      "Find cancelled-but-still-charged, duplicate, and ownerless tools",
      "Right-size idle seats and AI licences",
      "Assign keep, cancel, downgrade, consolidate, renegotiate, and renewal-owner decisions",
    ],
    notFor:
      "Not for client files, ledgers, payroll data, tax records, or transaction review. The first pass is billing-only and produces actions the owner can hand to an admin or bookkeeper.",
  },
  marketingAgency: {
    demand:
      "Keyword intelligence continues to support agency/project-management and software subscription terms, while the updated ICP points toward agencies where software waste is owner-visible margin leakage rather than an enterprise SAM problem.",
    ownerFit:
      "Best fit: a 5-50 person marketing, creative, SEO, or web agency with client-project residue, duplicate individual accounts, AI/tool sprawl, contractor offboarding gaps, and shared-login risk.",
    exportList: [
      "Agency card, bank, Xero, or MYOB recurring charges",
      "SEO, reporting, design, AI, social, CRM, PM, proposal, and contractor-tool invoices",
      "Current staff, contractor, and client-project owner notes",
      "Renewal dates, payment accounts, and last-confirmed-still-needed notes",
    ],
    actionList: [
      "Find converted trials and client-campaign tools that became permanent charges",
      "Consolidate duplicate SEO/reporting/social/design/AI tools",
      "Remove departed contractor and idle seat costs",
      "Assign each recurring bill a renewal owner and payment account",
    ],
    notFor:
      "Not for campaign performance review or client account access. StackSmart can start from billing exports and invoices only.",
  },
  professionalServices: {
    demand:
      "Professional-services audit pages match StackSmart's strongest owner-led SMB fit: high recurring software spread, low procurement maturity, and a principal who can act quickly on practical billing findings.",
    ownerFit:
      "Best fit: a 5-50 person consultancy, advisory, or boutique professional services firm with proposal, CRM, time, project, e-sign, document, AI transcription, and reporting subscriptions spread across principals and admins.",
    exportList: [
      "Card, bank, and accounting recurring software charges",
      "Proposal, CRM, time tracking, PM, e-sign, document, AI, and reporting invoices",
      "Current user list and principal/admin owner notes",
      "Renewal dates, payment account, and last-confirmed-still-needed fields",
    ],
    actionList: [
      "Find client-project tools that kept billing after delivery",
      "Compare duplicate proposal, CRM, PM, time, e-sign, AI, and document tools",
      "Right-size idle seats and annual renewals",
      "Create one renewal-owner register for the principal/admin handoff",
    ],
    notFor:
      "Not for client documents, project deliverables, legal/financial advice files, or sensitive matter records. The audit remains at the billing layer.",
  },
  childcare: {
    demand:
      "Childcare and education-admin pages fit the owner-led SMB ICP because centre operators carry recurring platform, forms, comms, payroll, rostering, and compliance subscriptions but rarely have a procurement review cadence.",
    ownerFit:
      "Best fit: a 5-50 staff childcare, early learning, or small centre-group operator where the approved provider, director, finance admin, and payroll/rostering lead each own part of the subscription stack.",
    exportList: [
      "Centre card, bank, Xero, MYOB, or direct-debit recurring charges",
      "Parent-comms, CCS/admin, enrolment, forms, rostering, payroll, payments, learning-story, compliance, training, marketing, and AI/admin invoices",
      "Current educator/admin seat counts",
      "Director/admin handover notes, renewal dates, and payment accounts",
    ],
    actionList: [
      "Find duplicate parent-comms, forms, payments, rostering, payroll, and learning-story tools",
      "Remove idle educator/admin seats",
      "Flag cancelled-but-still-charged subscriptions after director handover",
      "Assign keep, cancel, downgrade, consolidate, renegotiate, and renewal-owner actions",
    ],
    notFor:
      "Not for child, family, attendance, learning-story, CCS case, or clinical records. StackSmart can complete the first pass from billing exports and invoices.",
  },
  communityCare: {
    demand:
      "Community-care and NDIS-adjacent pages remain commercially relevant because care providers use many overlapping admin tools and need direct answers that avoid sensitive participant-data handling.",
    ownerFit:
      "Best fit: a 5-50 staff community care, home care, support coordination, or smaller provider where owners, coordinators, rosterers, finance admins, and operations leads each manage part of the software spend.",
    exportList: [
      "Provider card, bank, Xero, MYOB, and direct-debit recurring charges",
      "Care-management, rostering, plan-management, forms, document, SMS, payroll, compliance, accounting, reporting, and AI/admin invoices",
      "Current coordinator, support-worker, and admin seat counts",
      "Renewal dates, billing contacts, payment accounts, and last-confirmed-still-needed notes",
    ],
    actionList: [
      "Find duplicate roster, care, forms, document, SMS, payroll, compliance, and AI/admin tools",
      "Remove ghost worker/coordinator/admin seats",
      "Flag ownerless renewals from admin handoff gaps",
      "Create keep, cancel, downgrade, consolidate, renegotiate, and renewal-owner decisions",
    ],
    notFor:
      "Not for participant records, support plans, care documentation, clinical notes, or health information. The subscription audit is billing-export only.",
  },
  alliedHealth: {
    demand:
      "Allied-health software demand remains a strong owner-led SMB fit because clinics carry PMS-adjacent subscriptions, AI/admin tools, reminders, forms, and payment add-ons without enterprise procurement maturity. The 2026-07-13 refresh uses the latest VOC around contract calendars, notice periods, auto-renew clauses, accounts-payable ownership, and buried renewal emails.",
    ownerFit:
      "Best fit: a 5-50 staff physiotherapy, podiatry, psychology, OT, speech, or multidisciplinary allied-health clinic where the owner, practice manager, reception/admin lead, and bookkeeper each control part of the software stack.",
    exportList: [
      "Xero/MYOB, card, bank, and direct-debit recurring charges",
      "PMS, booking, reminders, forms, telehealth, payments, payroll, AI, review, and marketing invoices",
      "Current practitioner/admin/contractor seats and billing-contact notes",
      "Notice periods, payment accounts, and last-confirmed-still-needed fields",
    ],
    actionList: [
      "Find duplicate booking, reminders, forms, telehealth, AI, payment, and marketing tools",
      "Remove idle practitioner, contractor, and admin seats",
      "Flag cancelled-but-still-charged and still-paying-for-it subscriptions",
      "Assign keep, cancel, downgrade, consolidate, renegotiate, and renewal-owner decisions",
    ],
    notFor:
      "Not for patient files, clinical notes, referrals, Medicare details, treatment records, or health information. The first pass is billing-export only.",
  },
  hospitality: {
    demand:
      "Hospitality groups remain a commercially useful owner-led SMB segment because POS, reservations, rostering, delivery, loyalty, review, Wi-Fi, music, signage, payment, and payroll tools renew across venues while accounts payable rarely owns a single contract calendar.",
    ownerFit:
      "Best fit: a 5-50 staff cafe group, restaurant group, bar group, multi-site venue, or hospitality operator where the owner/operator, venue managers, bookkeeper, and payroll/rostering lead each own different software bills.",
    exportList: [
      "Venue card, bank, Xero/MYOB, and direct-debit recurring software charges",
      "POS, reservations, rostering, payroll, delivery, loyalty, reviews, Wi-Fi, music, signage, SMS, payments, and AI/admin invoices",
      "Per-site manager/admin seat counts, billing contacts, and payment accounts",
      "Notice periods, auto-renew clauses, renewal emails, and last-confirmed-still-needed notes",
    ],
    actionList: [
      "Find duplicate per-site add-ons and still-paying-for-it vendor bills",
      "Remove idle manager/admin seats and off-season tools",
      "Consolidate POS, reservations, rostering, delivery, loyalty, review, and SMS overlap",
      "Build a 90-day contract calendar with keep, cancel, downgrade, consolidate, renegotiate, and renewal-owner decisions",
    ],
    notFor:
      "Not for replacing POS or reservation systems. StackSmart audits the billing and subscription layer around the venue systems already in use.",
  },
  accounting: {
    demand:
      "DataForSEO-backed keyword intelligence keeps accounting practice software at 390 AU monthly searches with high commercial bid pressure, while software audit and software subscriptions terms show principals are already looking for cost-control answers.",
    ownerFit:
      "Best fit: a 5-50 person accounting firm where the principal or practice manager pays for proposal tools, workflow, e-signature, reporting, Xero/QBO/MYOB add-ons, AI note tools, and client-portal subscriptions but does not have a procurement team checking every renewal.",
    exportList: [
      "Firm card and bank recurring charges",
      "Xero, MYOB, QBO, and marketplace invoices",
      "Practice-management, proposal, e-sign, reporting, AI, and connector bills",
      "A current staff/app-owner list with last confirmed still-needed notes",
    ],
    actionList: [
      "Separate firm-owned subscriptions from client-recovered costs",
      "Mark duplicate proposal/e-sign/reporting/AI tools",
      "Right-size idle seats and unused AI licences",
      "Assign a renewal owner, due date, and payment account to every recurring bill",
    ],
    notFor:
      "Not for client-ledger review, tax-file inspection, or enterprise procurement rollout. The first pass is billing-only and produces decisions the principal can hand to an admin or bookkeeper.",
  },
  ndis: {
    demand:
      "DataForSEO shows 390 monthly AU searches for NDIS software with $21.19 CPC. Most SERPs serve platform selection; StackSmart captures the practical owner/operator need underneath: stop paying for duplicate roster, care, claims, compliance, document, SMS, payroll, AI, and admin tools before the next direct debit.",
    ownerFit:
      "Best fit: a 5-50 staff NDIS or community-care provider where the owner, coordinator, finance admin, and rostering lead each own part of the stack and nobody has a single subscription tracker.",
    exportList: [
      "Business card, bank, Xero, or MYOB recurring charges",
      "Care-management, rostering, plan-management, claims, SMS, document, payroll, compliance, and AI/admin invoices",
      "Current staff/coordinator seat counts",
      "Renewal dates, billing contacts, and payment accounts where known",
    ],
    actionList: [
      "Find ghost support-worker, coordinator, and admin seats",
      "Compare duplicate rostering, forms, SMS, payroll, and claims workflows",
      "Flag cancelled-but-still-charged and compliance tools from the last audit cycle",
      "Create keep, cancel, downgrade, consolidate, renegotiate, and renewal-owner decisions",
    ],
    notFor:
      "Not for participant-record, support-plan, clinical-note, or care-document access. StackSmart can run the first pass from subscription billing only.",
  },
  property: {
    demand:
      "Keyword intelligence keeps property management software at 880 AU monthly searches with $19.87 CPC and real estate CRM demand at high commercial bid pressure. That demand often starts as platform comparison, but the cheaper first move is auditing the paid layer around the system already in use.",
    ownerFit:
      "Best fit: an owner-led rent roll, strata office, property-services team, or real-estate group with 5-50 staff and scattered charges for portals, inspections, maintenance, e-signature, CRM, SMS, reporting, listing, AI, and admin tools.",
    exportList: [
      "Card and bank recurring charges across the agency or rent-roll entity",
      "Property-management platform invoices and add-on bills",
      "Inspection, maintenance, e-sign, CRM, SMS, reporting, listing, AI, and admin subscriptions",
      "Payment account, renewal date, billing contact, and last confirmed still-needed notes",
    ],
    actionList: [
      "Identify add-ons billed outside the core PM system",
      "Find duplicate portals, inspection, e-sign, CRM, and SMS tools",
      "Right-size departed property-manager and admin seats",
      "Build a renewal-owner register before notice windows close",
    ],
    notFor:
      "Not for tenant data, owner ledgers, leases, or trust-account records. The audit is billing-export only and stays at the subscription layer.",
  },
  shopify: {
    demand:
      "DataForSEO shows 1,600 monthly AU searches for Shopify apps and 210 for Shopify app subscription with $24.11 CPC. The high-intent question is not another app list; it is which installed apps, external SaaS charges, and annual renewals still deserve to stay.",
    ownerFit:
      "Best fit: an owner-led ecommerce or retail operator with 5-50 staff where Shopify apps, email/SMS tools, reviews, loyalty, shipping, inventory, support, analytics, AI, and agency-installed campaign tools all bill in different places.",
    exportList: [
      "Shopify billing history and app invoices",
      "Business card and bank recurring software charges",
      "Email/SMS/contact-tier, shipping, inventory, review, loyalty, support, analytics, and AI bills",
      "App owner, last-used, renewal date, and payment-account notes",
    ],
    actionList: [
      "Find campaign apps and converted trials that became permanent charges",
      "Compare duplicate review, loyalty, email/SMS, shipping, and inventory tools",
      "Right-size contact tiers, unused AI seats, and off-platform SaaS",
      "Assign keep, cancel, downgrade, consolidate, renegotiate, and renewal-owner decisions",
    ],
    notFor:
      "Not for customer records, order history, or store admin access. StackSmart can start from Shopify billing exports, invoices, and card statements.",
  },
};

export default function OwnerLedRefreshSection({ type }: { type: RefreshKey }) {
  const data = refreshes[type];
  const dailyNote = dailyProductionNotes[type];
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
    <section className="border-y border-white/10 bg-slate-950/70 px-4 py-16 sm:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.06] p-6 shadow-2xl shadow-cyan-950/20 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            {data.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {data.title}
          </h2>
          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/80 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
              Direct answer
            </p>
            <p className="mt-3 text-base leading-8 text-slate-200">
              {data.answer}
            </p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {data.proof.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>

          {dailyNote ? (
            <div className="mt-6 rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.06] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
                2026-07-13 owner-led SMB refresh
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                {dailyNote.demand}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {dailyNote.ownerFit}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {dailyNote.notFor}
              </p>
            </div>
          ) : null}
        </div>

        <div className="space-y-5">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white">
              First 30-minute audit pass
            </h3>
            <ol className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              {(dailyNote?.exportList ?? data.checklist).map((item, index) => (
                <li key={item} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-xs font-bold text-slate-950">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
          {dailyNote ? (
            <div className="rounded-3xl border border-amber-300/20 bg-amber-300/[0.06] p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-white">
                What the owner gets back
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                {dailyNote.actionList.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-200" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-white">
              Related owner-led SMB audits
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {data.links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
                >
                  {label}
                </Link>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-400">
              StackSmart is built for practical billing-export reviews: identify
              waste, assign owners, and turn recurring charges into a short
              action list before renewal dates arrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
