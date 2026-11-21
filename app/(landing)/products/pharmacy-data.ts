// Content for /products/healthcare-medical-software/pharmacy-management-system.
// Source: pharmacy-management-system-seo-content.docx (prepared 18 Nov 2026).
// FAQ text is reused verbatim by the FAQPage JSON-LD, so edit both together.

export const PHARMACY_PATH =
  "/products/healthcare-medical-software/pharmacy-management-system";

export const pharmacyTitle =
  "Pharmacy Management System | Custom Pharmacy Software";

export const pharmacyDescription =
  "Cloud-based pharmacy management system for US retail, independent and multi-location pharmacies: dispensing, inventory, POS, insurance billing, technician workflows and complete medication management.";

export const PRODUCT_NAME = "Pharmacy Management System";

export type LinkSpec = { anchor: string; href: string };

export const pmsJobs = [
  [
    "Prescription processing",
    "Intake, data entry, clinical checks, verification and dispensing.",
  ],
  [
    "Inventory",
    "What is on the shelf, what is expiring, what needs to be ordered and from whom.",
  ],
  [
    "Billing and point of sale",
    "Insurance claims, patient copays, cash sales and front-store retail.",
  ],
  [
    "Records and compliance",
    "Patient profiles, dispensing history, controlled-substance logs and audit trails.",
  ],
] as const;

export const rxSteps = [
  [
    "Intake",
    "An electronic prescription arrives from the prescriber's system, or a technician scans a paper or faxed prescription. The patient profile is matched or created.",
  ],
  [
    "Data entry",
    "The drug is matched to an NDC (National Drug Code), with directions (sig), quantity, days' supply, refills and prescriber details.",
  ],
  [
    "Drug utilization review (DUR)",
    "The software checks the drug against the patient's profile for interactions, allergies, duplicate therapy and dose problems, using a licensed drug database.",
  ],
  [
    "Claim adjudication",
    "The claim goes to the patient's insurer or PBM in real time. The response comes back in seconds with the approved amount, the patient copay or a rejection code.",
  ],
  [
    "Pharmacist verification",
    "The pharmacist reviews the entry, the DUR alerts and the claim response, then approves the prescription.",
  ],
  [
    "Fill and product check",
    "The technician scans the stock bottle's barcode. The system confirms it matches the verified NDC before the label prints.",
  ],
  [
    "Final check and will-call",
    "The pharmacist checks the finished prescription and it moves to the pickup bin.",
  ],
  [
    "Pickup and POS",
    "At the counter, the patient's identity is confirmed, the copay is collected, a signature is captured, and counseling is offered or documented.",
  ],
  [
    "Inventory update",
    "The quantity dispensed is deducted from stock. If it falls below the reorder point, the item is added to the next order.",
  ],
] as const;

export type PharmacyFeature = { title: string; icon: string; text: string };

export const features: PharmacyFeature[] = [
  {
    title: "Pharmacy Inventory Management",
    icon: "Boxes",
    text: "Real-time stock levels by product, location and storage area (shelf, refrigerator, controlled-substance safe), with item-level history of receipts, dispenses, transfers and adjustments.",
  },
  {
    title: "Prescription Management",
    icon: "FileText",
    text: "E-prescription inbox, scanned-image queue, refill and renewal requests, transfers in and out, and a full prescription history per patient.",
  },
  {
    title: "Medication Dispensing Workflows",
    icon: "ListChecks",
    text: "Configurable workflow queues (entry, verification, fill, final check, will-call), with priority flags for waiters, deliveries and same-day needs.",
  },
  {
    title: "Pharmacy POS and Billing",
    icon: "CreditCard",
    text: "Prescription and front-store checkout in one transaction, copay collection, split tenders and receipts that show prescription details.",
  },
  {
    title: "Barcode Scanning",
    icon: "ScanBarcode",
    text: "NDC barcode verification during fill, scanning at receiving, cycle counts and returns. This removes one of the most common sources of dispensing errors: picking the wrong product or strength.",
  },
  {
    title: "Drug Database Management",
    icon: "Database",
    text: "Integration with a licensed drug knowledge base for product data, pricing references, interaction and allergy checks, and patient education leaflets.",
  },
  {
    title: "Batch and Lot Tracking",
    icon: "Layers",
    text: "The lot number is captured at receiving and dispensing, so the pharmacy can quickly identify affected patients and stock when a manufacturer or FDA recall is announced.",
  },
  {
    title: "Expiry Date Monitoring",
    icon: "CalendarClock",
    text: "Expiry dates are stored by lot, with alerts at 30, 60 and 90 days (or your own thresholds) and short-dated reports for return-to-vendor or reverse distributor processing.",
  },
  {
    title: "Automated Stock Reordering",
    icon: "RefreshCw",
    text: "Reorder points and order quantities that can be fixed or based on recent usage, with suggested orders ready for review before they go to the wholesaler.",
  },
  {
    title: "Supplier and Purchase Management",
    icon: "Truck",
    text: "Purchase orders, receiving against invoices, price-change tracking, credits and returns, all stored with supplier details.",
  },
  {
    title: "Customer and Patient Profiles",
    icon: "IdCard",
    text: "Demographics, insurance plans, allergies, conditions, medication history, communication preferences and caregiver relationships.",
  },
  {
    title: "Pharmacy Sales Reporting",
    icon: "BarChart3",
    text: "Prescription counts, gross margin by drug and payer, front-store sales, inventory turns, rejected claims and staff productivity.",
  },
  {
    title: "Role-Based Access Control",
    icon: "UserCheck",
    text: "Separate permissions for pharmacists, technicians, cashiers, managers and owners. For example, only a pharmacist can perform final verification.",
  },
  {
    title: "Audit Logs",
    icon: "FileClock",
    text: "A tamper-resistant record of who viewed, edited, verified, dispensed or deleted any record, for internal review, insurer audits and regulatory inspections.",
  },
  {
    title: "Multi-Branch Pharmacy Management",
    icon: "Store",
    text: "Central control of formulary, pricing and users, with stock visibility across stores, inter-store transfers and reporting by location or across the whole group.",
  },
];

export const benefits = [
  [
    "Fewer dispensing errors",
    "Barcode checks, DUR alerts and a required pharmacist verification step stop the wrong drug, strength or dose before it reaches the patient.",
  ],
  [
    "Less money tied up in stock",
    "Usage-based reordering and expiry visibility reduce overstock, write-offs and stock-outs.",
  ],
  [
    "Faster prescription turnaround",
    "Workflow queues and real-time claim responses reduce waiting time at the counter.",
  ],
  [
    "Fewer lost reimbursements",
    "Rejected claims are visible right away and can be corrected before the patient leaves.",
  ],
  [
    "Easier audits and inspections",
    "Dispensing, controlled-substance and access records can be pulled in minutes instead of searched for in paper files.",
  ],
  [
    "Better decisions",
    "Margin, payer mix and inventory reports show where the pharmacy earns money and where it loses it.",
  ],
  [
    "Room to grow",
    "Adding a second location, delivery or online refills is a configuration change, not a new system.",
  ],
] as const;

export const businessTypeRows = [
  [
    "Independent pharmacies",
    "Fast workflow for a small team, front-store POS, simple reordering from one primary wholesaler, low IT overhead and clear reports for the owner",
  ],
  [
    "Retail pharmacies",
    "High-volume queues, drive-through and will-call management, front-store retail, loyalty programs and automated refill reminders",
  ],
  [
    "Chain pharmacies",
    "Central administration, standard workflows across stores, inter-store transfers, group reporting and role control across many users",
  ],
  [
    "Hospital pharmacies",
    "Medication orders from clinical systems, unit-dose and automated dispensing cabinet support, formulary control and, where it applies, 340B tracking",
  ],
  [
    "Specialty pharmacies",
    "Prior authorization tracking, patient onboarding, cold-chain shipping, refill coordination calls, REMS program documentation and outcome tracking",
  ],
  [
    "Online pharmacies",
    "Patient portal and app, prescription upload and verification, state licensure rules for shipping, delivery tracking and secure online payments",
  ],
  [
    "Pharmacy distributors",
    "Warehouse inventory, lot and expiry tracking, customer order management and DSCSA product tracing data",
  ],
];

export const inventoryWorkflows = [
  [
    "Stock visibility",
    "Every unit is tracked by NDC, package size, lot, expiry and location. Managers see quantity on hand, quantity committed to pending prescriptions and quantity on order, for one store or the whole group.",
  ],
  [
    "Expiry tracking",
    "Lots are stored with their expiry dates. Short-dated stock is flagged early enough to dispense first, transfer to a busier store or return for credit before it becomes a write-off.",
  ],
  [
    "Purchasing",
    "Suggested orders are built from reorder points and recent usage. Buyers review and adjust them, then send them to the wholesaler. Receiving is checked against the invoice by scanning, and price changes are recorded.",
  ],
  [
    "Stock reconciliation",
    "Cycle counts and full physical counts are compared with system quantities. Differences are logged with a reason code (damage, theft, data entry error), so shrinkage patterns become visible. For controlled substances, the system supports the counts and records that DEA rules require, including the biennial inventory.",
  ],
  [
    "Reorder workflows",
    "Fixed reorder points suit stable items. Usage-based reorder points suit seasonal or fast-moving drugs. Both can be set per item and per location.",
  ],
] as const;

export const dispensingPrinciples = [
  [
    "Clear queues with ownership",
    "Each prescription is always in one named state (received, in entry, awaiting verification, filling, final check, ready, picked up), and everyone can see where it is.",
  ],
  [
    "Clinical checks the pharmacist can trust",
    "DUR alerts are ranked by severity, so a serious interaction stands out instead of being lost among low-value warnings.",
  ],
  [
    "Scan-to-verify",
    "The product scanned during fill must match the verified NDC, or the label won't print.",
  ],
  [
    "Controlled-substance controls",
    "These include stricter verification, quantity limits, prescriber DEA number checks, and dispensing data reporting to the state Prescription Drug Monitoring Program (PDMP) in the format your state requires.",
  ],
  [
    "Refill automation",
    "Refill-due lists, auto-refill enrollment and reminder messages keep patients on therapy.",
  ],
] as const;

export const posNeeds = [
  "Handle prescription pickups and front-store items in one basket",
  "Collect insurance copays and patient balances",
  "Capture patient signatures for pickup, counseling offers and privacy notice acknowledgments",
  "Enforce purchase limits and logbook rules for regulated over-the-counter products, such as pseudoephedrine under the federal Combat Methamphetamine Epidemic Act",
  "Support FSA/HSA card transactions, which require the POS to identify eligible items",
  "Process card, contactless, cash and split payments through a PCI DSS-compliant payment gateway",
  "Feed sales, taxes and payments to accounting",
];

export const integrationRows = [
  [
    "E-prescribing systems",
    "Receives new prescriptions, refill and change requests and cancellations from prescribers through a certified e-prescribing network, using the NCPDP SCRIPT standard",
  ],
  [
    "NCPDP-compatible workflows",
    "Real-time insurance claims, eligibility checks and reversals use the NCPDP Telecommunication Standard. Pharmacy identity uses NCPDP provider IDs",
  ],
  [
    "Insurance claim processing",
    "Connects to PBMs through a pharmacy claims switch, then reconciles payments and rejections",
  ],
  [
    "Payment gateways",
    "Card and digital payments through a PCI DSS-compliant provider, so card data stays out of the pharmacy system",
  ],
  [
    "Drug databases",
    "Licensed drug knowledge bases (commercial providers such as First Databank, Medi-Span or Gold Standard) for product data, clinical screening and patient leaflets",
  ],
  [
    "Barcode systems",
    "Handheld and countertop scanners, label printers and, where used, dispensing robots and vial-filling automation",
  ],
  [
    "Accounting software",
    "Exports sales, purchases, taxes and receivables to systems such as QuickBooks or Xero",
  ],
  [
    "Third-party healthcare platforms",
    "Connects to prescriber systems, clinics, telehealth platforms, delivery services and state PDMPs",
  ],
];

export const securityControls = [
  "Encryption of PHI in transit (TLS 1.2+) and at rest (AES-256)",
  "Unique logins and multi-factor authentication, with automatic session timeouts on shared counter terminals",
  "Role-based access, so each person sees only what their job needs",
  "Audit logs of every view, edit, verification and export",
  "Secure hosting on HIPAA-eligible cloud services covered by a Business Associate Agreement (BAA)",
  "Backups and disaster recovery that are tested, not just configured",
  "Security testing before go-live and at regular intervals afterward",
  "Payment separation so card data is handled by a PCI DSS-compliant gateway, not stored in the pharmacy database",
];

export const cloudRows = [
  [
    "Upfront cost",
    "Lower; no in-store servers",
    "Higher; servers, storage, licenses",
  ],
  [
    "Multi-location",
    "Built in; every store shares live data",
    "Needs syncing or a central server",
  ],
  [
    "Remote access",
    "Owners and managers can view reports from anywhere",
    "Usually limited to the store network",
  ],
  ["Updates", "Central, with little downtime", "Manual, store by store"],
  [
    "Internet dependency",
    "Needs reliable connectivity; an offline mode for POS and dispensing is recommended",
    "Keeps running if the internet is down, but claims still need connectivity",
  ],
  [
    "Security responsibility",
    "Shared with a HIPAA-eligible cloud provider under a BAA",
    "Entirely in-house",
  ],
  [
    "Best fit",
    "Most independents, chains, specialty and online pharmacies",
    "Sites with limited connectivity or strict local hosting policies",
  ],
];

export const customReasons = [
  "A specialty, compounding, long-term care or mail-order model with workflows generic systems handle poorly",
  "A multi-location group that needs central control and reporting its current vendor can't provide",
  "An online or app-first pharmacy where the patient experience is the product",
  "A distributor or HealthTech company building pharmacy software as its own SaaS product",
  "Integration needs (robots, delivery partners, clinic platforms) that closed systems won't allow",
  "Per-store licensing costs that keep growing with every new location",
];

export const architecture = [
  [
    "Modular architecture",
    "Dispensing, inventory, POS, billing and reporting are separate modules that can grow independently.",
  ],
  [
    "API-first design",
    "Patient apps, delivery partners and analytics tools connect cleanly.",
  ],
  [
    "Multi-location data model",
    "Stores, warehouses and users are structured for growth from day one.",
  ],
  [
    "Configurable rules",
    "Reorder points, alert thresholds, pricing and workflows that managers can change without a developer.",
  ],
  [
    "Ownership",
    "Engagements can be structured so you own the codebase and the data.",
  ],
] as const;

export const implementationSteps = [
  [
    "Discovery",
    "We spend time with pharmacists, technicians, cashiers and managers to map the real workflow, from intake to pickup.",
  ],
  [
    "Requirements and compliance planning",
    "We define modules, roles, integrations and data, and identify HIPAA, DEA, state board, PDMP and DSCSA requirements that affect the design.",
  ],
  [
    "UX design and prototypes",
    "We design queue and counter screens and test them with your staff before development.",
  ],
  [
    "Agile development",
    "We build in short sprints with regular demos, starting with the workflows that matter most.",
  ],
  [
    "Integration and certification",
    "We connect e-prescribing, claims, drug database, payment and accounting partners, and complete each provider's testing requirements.",
  ],
  [
    "Data migration",
    "We migrate patient profiles, prescription history, inventory and supplier data from your current system, with reconciliation reports.",
  ],
  [
    "QA and security testing",
    "We run functional, load, offline-mode and penetration testing before go-live.",
  ],
  [
    "Training and go-live",
    "We provide role-based training and a phased store-by-store rollout for groups.",
  ],
  [
    "Support and improvement",
    "We monitor the system, fix issues and add features based on real use.",
  ],
] as const;

export const challengeRows = [
  [
    "Stock-outs and overstock at the same time",
    "Usage-based reorder points per item and store, plus inter-store transfer suggestions",
  ],
  [
    "Expired stock write-offs",
    "Lot-level expiry tracking, early alerts and return-to-vendor workflows",
  ],
  [
    "Rejected or underpaid claims",
    "Real-time rejection queues, reason-code guidance and remittance reconciliation",
  ],
  [
    "Dispensing errors",
    "Scan-to-verify during fill, ranked DUR alerts and a required pharmacist final check",
  ],
  [
    "Alert fatigue",
    "Severity-based alerts, so pharmacists see critical warnings first",
  ],
  [
    "Slow counter during peak hours",
    "Will-call bin tracking, fast patient lookup and a combined Rx and retail basket",
  ],
  [
    "Controlled-substance record-keeping",
    "Perpetual inventory for scheduled drugs, discrepancy alerts and PDMP reporting support",
  ],
  [
    "Multiple disconnected tools",
    "One platform, or clean integrations, for dispensing, POS, inventory and accounting",
  ],
  [
    "Internet outages",
    "Offline mode for counter and dispensing, with automatic sync when the connection returns",
  ],
];

export const whyClickmasters = [
  [
    "We scope before we build",
    "As on every Clickmasters product, you get the scope, timeline and quote before development starts.",
  ],
  [
    "One team for the full lifecycle",
    "Product planning, UI/UX design, web and mobile development, QA and testing, cloud and DevOps, and ongoing maintenance and support.",
  ],
  [
    "Workflow-first design",
    "Screens are designed around how your pharmacists and technicians actually work, and tested with them.",
  ],
  [
    "Integration planning from day one",
    "E-prescribing, claims, drug databases, payments and accounting are planned during discovery, not added at the end.",
  ],
  [
    "HIPAA-aware engineering",
    "Encryption, access control, audit logs and secure cloud infrastructure are part of the design. We are honest about what software can and cannot guarantee.",
  ],
  [
    "Flexible engagement",
    "A fixed-scope project, an MVP for a new pharmacy product, or a dedicated team that works with your own staff.",
  ],
  [
    "Connected healthcare thinking",
    "Our healthcare suite also covers EMR, EHR, clinic, hospital, LIMS, billing and telemedicine software, so your pharmacy system can be planned as part of a wider care workflow.",
  ],
] as const;

export const pharmacyFaqs = [
  {
    question: "What is a pharmacy management system?",
    answer:
      "A pharmacy management system is complete pharmacy management software that runs a pharmacy's core operations: prescription intake and dispensing, clinical checks, insurance billing, point of sale, inventory, purchasing, patient records and medication management. It connects these tasks in one place, so pharmacy staff don't have to re-enter data or track stock by hand.",
  },
  {
    question: "What features should pharmacy management software include?",
    answer:
      "Key features include prescription and refill management, dispensing workflow queues, drug utilization review, barcode verification, inventory with lot and expiry tracking, automated reordering, supplier management, pharmacy POS, insurance claim processing, patient profiles, reporting, role-based access and audit logs. Multi-location management matters for groups.",
  },
  {
    question: "How does a pharmacy inventory management system reduce costs?",
    answer:
      "It shows exactly what is on hand, what is expiring and what is selling. That supports usage-based reordering, early action on short-dated stock, inter-store transfers and accurate counts. The result is less cash tied up in stock, fewer expired write-offs and fewer lost sales from stock-outs.",
  },
  {
    question:
      "What is the difference between pharmacy POS software and a regular POS?",
    answer:
      "A pharmacy POS links prescription pickups to the dispensing system. It collects insurance copays, captures signatures for pickup and counseling, enforces limits on regulated OTC products like pseudoephedrine and supports FSA/HSA eligible-item rules. A regular retail POS does none of this.",
  },
  {
    question: "Can pharmacy software process insurance claims in real time?",
    answer:
      "Yes. US pharmacy claims are usually adjudicated in real time with PBMs and insurers using the NCPDP Telecommunication Standard, sent through a pharmacy claims switch. The pharmacy sees the approved amount, the copay or a rejection reason within seconds.",
  },
  {
    question: "Does pharmacy management software support e-prescribing?",
    answer:
      "Yes. Modern systems receive electronic prescriptions, refill and change requests and cancellations from prescribers through a certified e-prescribing network using the NCPDP SCRIPT standard. Controlled-substance e-prescriptions (EPCS) have additional DEA security requirements.",
  },
  {
    question: "Is cloud-based pharmacy software HIPAA compliant?",
    answer:
      "No software is \"HIPAA certified\"; HHS doesn't certify products. A cloud-based pharmacy system can be built to support HIPAA compliance through encryption, access controls, audit logs and hosting on HIPAA-eligible services under a BAA. Compliance also depends on the pharmacy's own policies, training and vendor agreements.",
  },
  {
    question: "Can one system manage multiple pharmacy locations?",
    answer:
      "Yes. A multi-location pharmacy management system centralizes users, pricing and formulary, shows stock across every store, supports inter-store transfers and reports by store or for the whole group. A cloud deployment makes this much simpler.",
  },
  {
    question:
      "Which pharmacy management system is best for a retail pharmacy?",
    answer:
      "The best pharmacy management system for a retail pharmacy depends on prescription volume, front-store POS needs, insurance partners, location count and workflow preferences. Evaluate dispensing speed, inventory control, technician tasks, claim performance, e-prescribing, reporting and the vendor's US support. A hands-on workflow test is more useful than choosing from a feature checklist alone.",
  },
  {
    question:
      "How can pharmacy technicians use pharmacy management software?",
    answer:
      "Technicians can receive and enter prescriptions, verify patient and insurance information, prepare refill requests, scan stock and fill prescriptions, queue will-call orders, receive inventory and assist with claims follow-up. Role-based permissions should prevent technicians from performing pharmacist-only verification or clinical approval tasks.",
  },
  {
    question:
      "What can a pharmacy management system dashboard show?",
    answer:
      "A practical dashboard can show pending prescriptions, verification and filling queues, ready-for-pickup orders, rejected claims, low stock, approaching expiries, daily sales, waiting patients and staff workload. Managers can also filter inventory, margin and location reports.",
  },
  {
    question:
      "Is a pharmacy management system available as an app or for online use?",
    answer:
      "Yes. Pharmacy operations commonly use secure web applications on counter, office and mobile devices. A pharmacy management system app may support patient refills, delivery updates or refill reminders, while a pharmacy management system website or browser-based workflow application gives staff access to dispensing, inventory and claims online.",
  },
  {
    question:
      "How is artificial intelligence used in pharmacy medication management?",
    answer:
      "A pharmacy management system using artificial intelligence can assist with forecasting demand, identifying refill patterns, summarizing claims exceptions and prioritizing clinical or operational alerts. It should support - not replace - pharmacist review. Medication interaction decisions, dispensing verification and controlled-substance controls should remain governed by validated rules and licensed clinical databases.",
  },
  {
    question:
      "How do we compare pharmacy management software companies?",
    answer:
      "Compare implementation experience, US pharmacy integrations, regulatory support, data ownership, migration plans, security documentation, role controls, reporting, service levels and total cost. Ask pharmacy management software companies for references from similar independent, retail, specialty or multi-location operations.",
  },
  {
    question:
      "What should a pharmacy look for in a pharmacy management system USA deployment?",
    answer:
      "For a US pharmacy, confirm NCPDP SCRIPT and Telecommunication support, PBM and insurer connections, NDC and drug database coverage, state board and PDMP requirements, DEA controls where applicable, HIPAA-aware hosting, DSCSA features and US-based implementation or support. Confirm the software handles local tax, payment and data-retention rules before purchase.",
  },
  {
    question: "How much does custom pharmacy management software cost?",
    answer:
      "Cost depends on the modules, number of locations, integrations (e-prescribing, claims, drug database, payments, accounting), data migration, platforms (web, mobile, POS hardware) and deployment model. Reliable numbers come after discovery. We provide a scoped quote before development starts, not a generic price.",
  },
  {
    question:
      "How long does it take to build and implement a pharmacy management system?",
    answer:
      "A focused MVP covering one core workflow, such as dispensing and inventory, typically takes a few months. A complete multi-location platform with full integrations takes longer. Third-party certifications and data migration add time, so phased rollouts are common.",
  },
];

const dir = "/products/pharmacy";

export const pharmacyImages = {
  dashboard: {
    src: `${dir}/pharmacy-management-system-dashboard.svg`,
    width: 1440,
    height: 900,
    alt: "Pharmacy management system dashboard showing prescription queue, ready-for-pickup orders and daily sales summary",
  },
  inventory: {
    src: `${dir}/pharmacy-inventory-lot-expiry-tracking.svg`,
    width: 1440,
    height: 900,
    alt: "Pharmacy inventory management screen with stock levels, lot numbers and expiry date alerts by location",
  },
  scan: {
    src: `${dir}/pharmacy-ndc-barcode-scan-verification.svg`,
    width: 1440,
    height: 900,
    alt: "Pharmacist scanning an NDC barcode to verify medication during prescription dispensing in pharmacy software",
  },
  pos: {
    src: `${dir}/pharmacy-pos-checkout.svg`,
    width: 1440,
    height: 900,
    alt: "Pharmacy POS software checkout combining prescription pickup copay and front-store items",
  },
  branches: {
    src: `${dir}/multi-location-pharmacy-report.svg`,
    width: 1440,
    height: 900,
    alt: "Multi-location pharmacy management software report comparing stock and sales across store branches",
  },
  reorder: {
    src: `${dir}/pharmacy-automated-reorder-purchase-order.svg`,
    width: 1440,
    height: 900,
    alt: "Pharmacy stock management software suggested purchase order built from reorder points and recent usage",
  },
  workflow: {
    src: `${dir}/pharmacy-prescription-workflow.svg`,
    width: 1400,
    height: 600,
    alt: "Prescription workflow in a pharmacy management system from e-prescription intake to pickup and inventory update",
  },
  integrations: {
    src: `${dir}/pharmacy-software-integrations.svg`,
    width: 1200,
    height: 820,
    alt: "Pharmacy management software integrations with e-prescribing, PBM claims, drug database, payments and accounting",
  },
} as const;
