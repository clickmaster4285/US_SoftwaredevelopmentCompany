// Content for /products/healthcare-medical-software/medical-billing-software.
// Source: medical-billing-software-seo-content.docx (prepared 18 Nov 2026).
// FAQ text is reused verbatim by the FAQPage JSON-LD, so edit both together.

export const BILLING_PATH =
  "/products/healthcare-medical-software/medical-billing-software";

export const billingTitle =
  "Medical Billing Software | Custom RCM & Claims Platform";

export const billingDescription =
  "Custom medical billing software for US practices, hospitals and billing companies: eligibility, claim scrubbing, 837/835 EDI, denials, A/R and RCM reporting.";

export const PRODUCT_NAME = "Medical Billing Software";

export type LinkSpec = { anchor: string; href: string };

export const coreJobs = [
  "Stores patient demographic and insurance information",
  "Checks insurance eligibility and benefits",
  "Turns services into coded charges (CPT/HCPCS procedures, ICD-10-CM diagnoses and modifiers)",
  "Scrubs claims for errors and submits them electronically",
  "Tracks claim status, rejections and denials",
  "Posts insurer and patient payments",
  "Manages accounts receivable and patient statements",
  "Reports on the financial health of the practice or organization",
];

export const systemsRows = [
  [
    "Medical billing software",
    "Claims, payments, denials, A/R, patient statements",
    "Billers, billing managers, billing companies",
    "—",
  ],
  [
    "Medical coding software",
    "Assigns and validates ICD-10-CM, CPT and HCPCS codes; encoder and code-edit lookups",
    "Certified coders, CDI specialists",
    "Sends validated codes into the charge and claim",
  ],
  [
    "Practice management (PM) software",
    "Scheduling, registration, front-office workflow and, often, built-in billing",
    "Front desk, practice managers",
    "Supplies demographics, insurance and appointments",
  ],
  [
    "Revenue cycle management (RCM) software",
    "The full financial cycle from registration to final collection, plus analytics",
    "Revenue cycle leaders, CFOs",
    "Includes billing as one major component",
  ],
  [
    "EMR software",
    "Clinical documentation inside one practice",
    "Physicians, nurses",
    "Documentation supports codes and charges",
  ],
  [
    "EHR software",
    "A clinical record shared across organizations",
    "Care teams, health systems",
    "Same as EMR, at network scale",
  ],
];

export const stageRows = [
  [
    "1. Registration",
    "Patient demographics and insurance details are captured",
    "Demographics, subscriber details, payer ID",
  ],
  [
    "2. Eligibility",
    "Coverage, copay, deductible and benefits are checked before the visit",
    "X12 270/271",
  ],
  [
    "3. Prior authorization",
    "Approval is obtained for services that need it",
    "X12 278, payer portals, FHIR-based APIs at some payers",
  ],
  [
    "4. Charge capture",
    "Documented services become charges",
    "CPT/HCPCS, ICD-10-CM, modifiers, units",
  ],
  [
    "5. Coding review",
    "Codes are validated against documentation and edits",
    "NCCI edits, medical necessity policies",
  ],
  [
    "6. Claim scrubbing",
    "Claims are checked for errors before submission",
    "Payer rules, format edits",
  ],
  [
    "7. Submission",
    "Claims go out through a clearinghouse",
    "X12 837P (professional) / 837I (institutional)",
  ],
  [
    "8. Adjudication",
    "The payer accepts, pays, reduces or denies the claim",
    "Clearinghouse acknowledgments, X12 276/277 status",
  ],
  [
    "9. Payment posting",
    "Payments and adjustments are applied to claims",
    "X12 835 ERA, EFT",
  ],
  [
    "10. Denials and A/R",
    "Unpaid claims are worked, corrected and appealed",
    "CARC/RARC codes, appeal letters",
  ],
  [
    "11. Patient billing",
    "Patient balances are billed and collected",
    "Statements, online payments, payment plans",
  ],
  [
    "12. Reconciliation",
    "Deposits are matched to posted payments",
    "Bank deposits, EFT trace numbers",
  ],
];

export type FeatureGroup = {
  title: string;
  icon: string;
  visual?: "scrub";
  features: (readonly [string, string])[];
};

export const featureGroups: FeatureGroup[] = [
  {
    title: "Front-End Revenue Cycle",
    icon: "UserRoundCheck",
    features: [
      [
        "Patient information management",
        "One patient record with demographics, guarantor, insurance plans and coordination-of-benefits order.",
      ],
      [
        "Patient registration and demographics",
        "Required-field validation, address checks and duplicate-patient detection at intake.",
      ],
      [
        "Insurance eligibility verification",
        "Real-time and batch 270/271 checks, with coverage, copay, deductible and coinsurance shown in plain language.",
      ],
      [
        "Prior authorization management",
        "Authorization requirements by payer and service, tracking of authorization numbers, approved units and expiry dates, and alerts before authorized visits run out.",
      ],
    ],
  },
  {
    title: "Coding and Charges",
    icon: "Code2",
    features: [
      [
        "Medical coding management",
        "Code lookup, favorites by specialty, coder work queues and coder review before claims are released.",
      ],
      [
        "ICD-10 and CPT code support",
        "Current ICD-10-CM, CPT and HCPCS Level II code sets, updated on each official release cycle, with modifier management (e.g., -25, -59, -XS, -26, -TC).",
      ],
      [
        "Charge capture",
        "Charges from the EMR/EHR encounter, superbills or charge entry screens, with missing-charge reports that compare visits to billed charges.",
      ],
    ],
  },
  {
    title: "Claims",
    icon: "FileCheck2",
    visual: "scrub",
    features: [
      [
        "Automated claims generation",
        "Claims are built from charges, patient and payer data in the correct 837P or 837I format, with CMS-1500 and UB-04 printing for payers that still accept paper.",
      ],
      [
        "Electronic claims submission",
        "Batch and real-time submission through clearinghouse connections.",
      ],
      [
        "Claim scrubbing and validation",
        "Format edits, NCCI-style code pair checks, diagnosis–procedure linkage, payer-specific rules and missing-data checks before submission.",
      ],
      [
        "Clearinghouse integration",
        "Automated file exchange, rejection handling and acknowledgment reports.",
      ],
      [
        "Claims status tracking",
        "276/277 status checks and aging by claim, payer and status.",
      ],
    ],
  },
  {
    title: "Back-End Revenue Cycle",
    icon: "Wallet",
    features: [
      [
        "Denial management",
        "Denials grouped by CARC/RARC reason, root-cause tagging, work queues, appeal templates and deadline tracking.",
      ],
      [
        "Payment posting",
        "Automated posting from 835 ERAs, manual posting for paper EOBs and patient payments, and adjustment and write-off controls.",
      ],
      [
        "Electronic remittance advice (ERA) processing",
        "835 files are parsed into line-level payments, adjustments and denials, linked back to the original claim.",
      ],
      [
        "Accounts receivable management",
        "A/R aging buckets (0–30, 31–60, 61–90, 91–120, 120+ days), follow-up queues and payer and patient responsibility splits.",
      ],
      [
        "Patient billing and statements",
        "Clear statements, text and email billing, payment plans and self-pay estimates.",
      ],
      [
        "Payment processing",
        "Card, ACH and online payments through a PCI DSS-compliant payment gateway, with a patient payment portal.",
      ],
    ],
  },
  {
    title: "Reporting and Control",
    icon: "BarChart3",
    features: [
      [
        "Financial reporting and analytics",
        "Collections, denial rate, first-pass acceptance, days in A/R, payer performance, provider productivity and RCM dashboards.",
      ],
      [
        "Role-based access control",
        "Permissions for front desk, coders, billers, managers, providers and external billing staff.",
      ],
      [
        "Audit trails",
        "Every view, edit, write-off, adjustment and claim change is logged with user, timestamp and before/after values.",
      ],
    ],
  },
];

export const benefits = [
  [
    "Cleaner claims on the first submission",
    "Scrubbing rules catch missing data and code conflicts before the payer does.",
  ],
  [
    "Faster payment",
    "Electronic claims, ERAs and EFT shorten the time between the visit and the deposit.",
  ],
  [
    "Fewer preventable denials",
    "Eligibility and authorization checks before the visit stop many denials before they happen.",
  ],
  [
    "Clear view of A/R",
    "Aging and work queues show exactly which claims need action, and in what order.",
  ],
  [
    "Less manual posting",
    "Automated 835 posting replaces line-by-line entry from paper EOBs.",
  ],
  [
    "Better patient financial experience",
    "Upfront estimates, readable statements and online payments.",
  ],
  [
    "Decisions based on data",
    "Payer, provider and denial-reason reports show where revenue is lost.",
  ],
] as const;

export const organizationRows = [
  [
    "Independent medical practices",
    "Simple charge entry, clean claims, ERA auto-posting and patient statements, without needing dedicated IT staff",
  ],
  [
    "Multi-specialty clinics",
    "Specialty-specific coding and modifiers, multiple providers and NPIs, and reporting by department",
  ],
  [
    "Hospitals",
    "Institutional 837I claims, UB-04 data, revenue codes, chargemaster management and inpatient/outpatient billing",
  ],
  [
    "Physician groups",
    "Group and individual NPIs, multiple locations, payer contract tracking and provider-level productivity",
  ],
  [
    "Urgent care centers",
    "High visit volume, fast eligibility checks, point-of-service collections and occupational-medicine billing",
  ],
  [
    "Medical billing companies",
    "Multi-client (multi-tenant) separation, per-client reporting, staff productivity, client portals and BAAs with each provider",
  ],
  [
    "Ambulatory surgery centers",
    "Procedure-focused billing, implant and supply charges, authorization tracking and multiple-procedure rules",
  ],
  [
    "Specialty healthcare practices",
    "Therapy units and visit limits, behavioral health authorizations, DME HCPCS billing and recurring visit plans",
  ],
];

export const claimSteps = [
  [
    "Claim creation",
    "Charges, diagnoses, rendering and billing providers, place of service and payer details are assembled into an 837P or 837I.",
  ],
  [
    "Front-end edits",
    "Internal scrubbing checks required fields, NPI and taxonomy, code validity, diagnosis pointers and payer-specific rules.",
  ],
  [
    "Clearinghouse submission",
    "The clearinghouse applies its own edits, returns acceptance or rejection acknowledgments, and routes claims to each payer.",
  ],
  [
    "Payer adjudication",
    "The payer checks eligibility, benefits, medical necessity, coding edits and contract terms, then pays, reduces, pends or denies the claim.",
  ],
  [
    "Status follow-up",
    "276/277 transactions or payer portals show where pending claims stand.",
  ],
  [
    "Remittance",
    "The 835 ERA explains what was paid and why any amount was adjusted, using standard adjustment reason codes. EFT deposits the payment.",
  ],
  [
    "Resolution",
    "Denials are corrected and resubmitted or appealed. Patient responsibility moves to patient billing.",
  ],
] as const;

export const automationItems = [
  "Charges flowing from clinical documentation instead of being re-entered from paper superbills",
  "Code validation against NCCI procedure-to-procedure edits, medically unlikely edits and payer rules",
  "Medical necessity checks linking diagnoses to procedures based on coverage policies",
  "Automatic claim holds for missing authorization, referral or documentation",
  "ERA auto-posting with exceptions sent to a reviewer",
  "Rule-based work queues that route denials by reason, payer and dollar value",
  "Automated eligibility checks run in batches the night before scheduled visits",
];

export const rcmCapabilities = [
  [
    "Front-end RCM",
    "scheduling integration, registration quality checks, eligibility, prior authorization and patient cost estimates",
  ],
  [
    "Mid-cycle RCM",
    "charge capture, coding, clinical documentation integrity (CDI) queues and charge reconciliation",
  ],
  [
    "Back-end RCM",
    "claims, denials, payment posting, A/R follow-up, patient collections and refunds",
  ],
  [
    "Contract management",
    "expected reimbursement by payer contract, with underpayment detection when the paid amount doesn't match",
  ],
  [
    "RCM dashboards",
    "key performance indicators such as days in A/R, clean claim rate, denial rate by category, net collection rate, and A/R over 90 days",
  ],
  [
    "Revenue reconciliation",
    "matching bank deposits, EFTs, ERAs and posted payments, so the financial records and the bank agree",
  ],
] as const;

export const fixDenials = [
  "Group denials by CARC/RARC code, payer, provider, procedure and location",
  "Route each group to the right specialist with a clear due date",
  "Track appeal deadlines, which vary by payer and plan",
  "Generate appeal letters with supporting documentation attached",
  "Record outcomes to measure which appeals succeed",
];

export const preventionRows = [
  [
    "Eligibility / coverage terminated",
    "Batch eligibility checks before every visit",
  ],
  [
    "Missing prior authorization",
    "Authorization rules by payer and procedure; claim holds",
  ],
  [
    "Coding and bundling errors",
    "NCCI-style edits, modifier rules, coder review queues",
  ],
  [
    "Medical necessity",
    "Diagnosis–procedure validation against coverage policies",
  ],
  [
    "Missing or invalid data",
    "Required-field validation at registration and charge entry",
  ],
  ["Timely filing", "Filing-limit tracking by payer, with alerts"],
  ["Duplicate claims", "Duplicate detection before submission"],
];

export const eligibilitySteps = [
  "Runs batch 270/271 checks for scheduled appointments ahead of time",
  "Flags inactive coverage, plan changes and coordination-of-benefits issues",
  "Shows copay, deductible remaining and coinsurance at check-in",
  "Prompts staff to collect patient responsibility at the time of service",
  "Re-checks coverage for recurring visits",
];

export const authHelps = [
  "Keeping payer-specific authorization requirements by service code",
  "Creating authorization tasks automatically when a service that needs approval is scheduled or ordered",
  "Tracking submission, approval number, authorized units and date range",
  "Alerting staff before authorized visits or units run out",
  "Holding claims that lack a valid authorization",
];

export const postingItems = [
  [
    "ERA auto-posting",
    "835 files post line-level payments, contractual adjustments, patient responsibility and denials automatically.",
  ],
  [
    "EFT reassociation",
    "Each deposit is matched to its ERA using the EFT trace number.",
  ],
  [
    "Manual posting",
    "For paper EOBs, lockbox payments and patient payments, with batch balancing.",
  ],
  [
    "Exception queues",
    "For unmatched payments, overpayments, takebacks and recoupments.",
  ],
  [
    "Secondary billing",
    "After primary payment posts, a claim to the secondary payer is created automatically.",
  ],
] as const;

export const arItems = [
  "Aging by payer, provider, location and status",
  "Prioritized work queues by dollar value, age and likelihood of collection",
  "Follow-up notes, next-action dates and task assignment",
  "Credit balance and refund workflows",
  "Patient A/R with statement cycles, payment plans and collection-agency handoff rules",
];

export const integrationRows = [
  [
    "EHR systems",
    "Encounters, diagnoses, procedures and documentation into charge review",
    "HL7 v2 (ADT, DFT), FHIR, vendor APIs",
  ],
  [
    "EMR platforms",
    "The same flow for single-practice clinical systems",
    "HL7, FHIR, REST APIs",
  ],
  [
    "Practice management systems",
    "Patients, insurance, appointments and providers",
    "HL7 ADT/SIU, APIs, database sync",
  ],
  [
    "Clearinghouses",
    "Claims, acknowledgments, ERAs, eligibility and claim status",
    "X12 837, 999/277CA, 835, 270/271, 276/277",
  ],
  [
    "Insurance payer systems",
    "Direct submission, portals and prior authorization APIs",
    "X12 EDI, payer APIs, FHIR (Da Vinci implementation guides)",
  ],
  [
    "Payment gateways",
    "Card, ACH and online patient payments",
    "PCI DSS-compliant gateway APIs, tokenization",
  ],
  [
    "Accounting platforms",
    "Deposits, revenue and adjustments into the general ledger",
    "QuickBooks, Xero or ERP APIs, journal exports",
  ],
  [
    "Healthcare APIs",
    "Patient portals, analytics, AI tools and partner platforms",
    "REST, FHIR, webhooks, OAuth 2.0",
  ],
];

export const regulationRows = [
  [
    "HIPAA Administrative Simplification",
    "Covered entities must use the adopted standards: X12 transactions (837, 835, 270/271, 276/277, 278), code sets (ICD-10-CM, CPT, HCPCS) and the National Provider Identifier (NPI)",
  ],
  [
    "HIPAA Privacy Rule",
    "Limits how PHI is used and disclosed, and requires minimum-necessary access, which the software supports through role-based permissions",
  ],
  [
    "HIPAA Security Rule",
    "Requires administrative, physical and technical safeguards for electronic PHI",
  ],
  [
    "HIPAA Breach Notification Rule",
    "Requires notification to affected individuals, HHS and, for larger breaches, the media. Audit logs are needed to investigate what was accessed.",
  ],
  [
    "HITECH Act",
    "Strengthened enforcement and penalties, made business associates directly liable for certain HIPAA requirements and introduced breach notification requirements",
  ],
  [
    "CMS billing requirements",
    "Medicare claims must generally be submitted electronically (with limited exceptions), follow NCCI edits and coverage policies, and meet timely filing limits",
  ],
];

export const technicalSafeguards = [
  "Encryption in transit (TLS 1.2+) and at rest (AES-256)",
  "Unique user IDs, multi-factor authentication and automatic session timeouts",
  "Role-based access and minimum-necessary permissions, including client separation for billing companies",
  "Audit trails that cannot be altered, for access, edits, adjustments and exports",
  "Integrity controls on claims and financial records",
  "Payment card data handled by a PCI DSS-compliant gateway, not stored in the billing database",
];

export const adminSafeguards = [
  "User provisioning and de-provisioning workflows",
  "Access review reports for privacy and security officers",
  "Incident investigation through searchable audit logs",
  "Backup, disaster recovery and data retention policies",
];

export const cloudRows = [
  [
    "Upfront cost",
    "Lower; no servers",
    "Higher; hardware, licenses and IT setup",
  ],
  [
    "Remote and outsourced billing",
    "Built in; billers can work securely from anywhere",
    "Needs a VPN or remote desktop",
  ],
  [
    "Clearinghouse connectivity",
    "API-based and always on",
    "Depends on on-site configuration",
  ],
  [
    "Code set and rule updates",
    "Applied centrally",
    "Applied server by server",
  ],
  [
    "Scalability",
    "Add providers, clients and volume easily",
    "Limited by hardware",
  ],
  [
    "Security responsibility",
    "Shared with a HIPAA-eligible cloud provider under a BAA",
    "Entirely in-house",
  ],
  [
    "Best fit",
    "Practices, groups, billing companies, multi-location organizations",
    "Organizations with strict internal hosting policies",
  ],
];

export const customReasons = [
  "You are a medical billing company that needs multi-client separation, client portals and productivity tracking your current tools can't provide",
  "Your specialty has billing rules generic systems handle poorly (therapy units, behavioral health, ASC, DME, anesthesia time units)",
  "You need one financial view across several EHRs or PM systems acquired through growth",
  "Per-provider or percentage-of-collections fees keep growing with your volume",
  "You are a HealthTech company building billing or RCM into your own product",
];

export const buildAround = [
  "Custom billing workflows that match how your team actually works",
  "Automated claims processing with your own scrubbing rules and work queues",
  "Healthcare API integrations with EHRs, PMs, clearinghouses, payment gateways and accounting",
  "RCM dashboards and custom reporting with KPI definitions you control",
  "Secure data management with encryption, audit trails and role-based user management",
  "Scalable cloud architecture for more providers, clients and claim volume",
  "Ongoing software maintenance for code set updates, payer rule changes and new features",
];

export const implementationSteps = [
  [
    "Discovery",
    "We interview billers, coders, front-desk staff, managers and finance to map today's revenue cycle and its biggest losses.",
  ],
  [
    "Requirements and compliance planning",
    "We define modules, payers, transactions, roles, integrations, reporting and HIPAA/BAA requirements.",
  ],
  [
    "Architecture and UX design",
    "We design the data model, integration architecture and work-queue screens, and test prototypes with billing staff.",
  ],
  [
    "Agile development",
    "We build in short sprints with regular demos, starting with the highest-impact workflow (often claims and ERA posting).",
  ],
  [
    "Integration and enrollment",
    "We connect the clinical system, clearinghouse, payment gateway and accounting system. Payer EDI and ERA/EFT enrollment are planned early, because they take time.",
  ],
  [
    "Data migration",
    "We migrate patients, insurance, open A/R and payment history, with reconciliation against the legacy system.",
  ],
  [
    "Testing",
    "We run functional, X12 file and scrubbing-rule testing, plus parallel claim runs, security and performance testing.",
  ],
  [
    "Go-live",
    "Phased rollout by location, specialty or client, with the legacy system kept for working down old A/R.",
  ],
  [
    "Support and optimization",
    "Monitoring, code set updates, rule tuning from denial trends, and new features.",
  ],
] as const;

export const challengeRows = [
  [
    "High denial rates",
    "Pre-visit eligibility, authorization holds, scrubbing rules and denial-trend feedback",
  ],
  [
    "Growing A/R over 90 days",
    "Prioritized work queues, aging alerts and follow-up tracking",
  ],
  ["Manual payment posting", "835 auto-posting with exception queues"],
  ["Missed charges", "Encounter-to-charge reconciliation reports"],
  ["Coding errors", "Code validation, modifier rules and coder review queues"],
  [
    "Low patient collections",
    "Upfront estimates, point-of-service collection, online payments and payment plans",
  ],
  [
    "Disconnected EHR and billing",
    "HL7/FHIR charge interfaces and shared patient and insurance records",
  ],
  ["Little financial visibility", "RCM dashboards with clearly defined KPIs"],
  [
    "Billing company scaling problems",
    "Multi-tenant design, per-client reporting and staff productivity tracking",
  ],
];

export const whyClickmasters = [
  [
    "We scope before we build",
    "You get the scope, timeline and quote before development starts.",
  ],
  [
    "Revenue-cycle-aware design",
    "We design around the full claim lifecycle: eligibility, charges, claims, ERAs, denials and A/R, not only invoices.",
  ],
  [
    "Integration capability",
    "Our API development and data integration services cover EHR, PM, clearinghouse, payment and accounting connections.",
  ],
  [
    "Security-aware engineering",
    "Encryption, access control, audit trails and secure cloud infrastructure are designed in from the start, with no compliance guarantees we can't support.",
  ],
  [
    "Data and reporting",
    "Business intelligence and data engineering services support custom RCM dashboards.",
  ],
  [
    "Full lifecycle",
    "Product planning, UI/UX, development, QA and testing, cloud and DevOps, and long-term maintenance and support.",
  ],
  [
    "Connected healthcare products",
    "Our healthcare suite also covers EHR, EMR, practice management, clinic, hospital and telemedicine software, so your billing platform can be planned as part of a connected system.",
  ],
] as const;

export const billingFaqs = [
  {
    question: "What is medical billing software?",
    answer:
      "Medical billing software manages a healthcare provider's claims and payments. It stores patient and insurance information, checks eligibility, turns services into coded charges, scrubs and submits claims electronically, tracks claim status, posts payments, manages denials and accounts receivable, bills patients and reports on financial performance.",
  },
  {
    question:
      "What is the difference between medical billing software and practice management software?",
    answer:
      "Practice management software runs front-office operations such as scheduling and registration, and often includes basic billing. A dedicated billing system goes deeper into claims, scrubbing rules, ERA posting, denial management and A/R. Many organizations use both, connected through shared patient, insurance and charge data.",
  },
  {
    question:
      "What is the difference between medical billing and RCM software?",
    answer:
      "Billing software focuses on claims and payments. Revenue cycle management software covers the entire financial cycle, from registration, eligibility and prior authorization through coding, billing, collections, contract management and analytics. Billing is one major part of RCM.",
  },
  {
    question:
      "Does billing software replace medical coders and billers?",
    answer:
      "No. It automates repetitive, rule-based tasks such as eligibility checks, claim formatting, scrubbing and ERA posting. Code selection, documentation review, complex denials, appeals and compliance decisions still need qualified coding and billing professionals.",
  },
  {
    question: "What are 837, 835 and 270/271 transactions?",
    answer:
      "They are HIPAA-adopted X12 EDI standards. The 837 is the electronic claim (837P for professional, 837I for institutional). The 835 is the electronic remittance advice explaining payments and adjustments. The 270/271 pair is the eligibility inquiry and response. The 276/277 pair covers claim status.",
  },
  {
    question: "What is the difference between CMS-1500 and UB-04?",
    answer:
      "The CMS-1500 is the paper claim form for professional services billed by physicians and other practitioners. Its electronic equivalent is the 837P. The UB-04 (CMS-1450) is the paper form for institutional claims from hospitals and facilities. Its electronic equivalent is the 837I.",
  },
  {
    question: "How does medical billing software reduce claim denials?",
    answer:
      "It verifies eligibility before visits, tracks prior authorizations, validates codes and modifiers, checks medical necessity links, enforces required fields and applies payer-specific scrubbing rules before submission. Denial trends then feed back into these rules to prevent repeat errors.",
  },
  {
    question: "Is cloud-based medical billing software HIPAA compliant?",
    answer:
      'No software is "HIPAA certified"; HHS doesn\'t certify products. Cloud billing software can be designed to support HIPAA compliance through encryption, access controls, audit trails and HIPAA-eligible hosting under a BAA. Whether your organization is compliant also depends on your policies, training, contracts and how the system is used.',
  },
  {
    question: "Can the billing system integrate with our EHR or EMR?",
    answer:
      "Yes. Common integration methods include HL7 v2 messages (ADT for patients, DFT for charges), FHIR APIs and vendor-specific APIs. The right method depends on what your clinical system supports, which is assessed during discovery.",
  },
  {
    question: "Can you build medical billing software for a billing company?",
    answer:
      "Yes. Billing company platforms need multi-client data separation, client-level reporting, staff productivity tracking, client portals and support for many payers, clinical systems and clearinghouses. Billing companies are typically business associates of their provider clients, so the platform also needs strong access and audit controls.",
  },
  {
    question: "How much does custom medical billing software cost?",
    answer:
      "Cost depends on the modules, number of specialties and clients, integrations (EHR, PM, clearinghouse, payment, accounting), data migration, reporting needs and deployment model. We provide a scoped quote after discovery rather than a generic price.",
  },
  {
    question:
      "How long does it take to develop and implement a custom billing platform?",
    answer:
      "A focused platform covering core claims, ERA posting and A/R workflows typically takes a few months to build. Broader RCM platforms with many integrations take longer. Payer EDI and ERA/EFT enrollment can add several weeks, so we start them early.",
  },
];

const dir = "/products/billing";

export const billingImages = {
  dashboard: {
    src: `${dir}/medical-billing-software-dashboard.svg`,
    width: 1440,
    height: 900,
    alt: "Medical billing software dashboard showing claims status, denial rate and accounts receivable aging",
  },
  scrub: {
    src: `${dir}/medical-claim-scrubbing-837.svg`,
    width: 1440,
    height: 900,
    alt: "Medical claims processing screen with claim scrubbing errors flagged before 837 submission",
  },
  denials: {
    src: `${dir}/denial-management-work-queue.svg`,
    width: 1440,
    height: 900,
    alt: "Denial management work queue in medical billing software grouped by payer and denial reason",
  },
  posting: {
    src: `${dir}/era-835-payment-posting.svg`,
    width: 1440,
    height: 900,
    alt: "Payment posting screen showing 835 electronic remittance advice matched to claims",
  },
  rcm: {
    src: `${dir}/rcm-dashboard-days-in-ar.svg`,
    width: 1440,
    height: 900,
    alt: "Revenue cycle management RCM dashboard with days in A/R, clean claim rate and collections by payer",
  },
  eligibility: {
    src: `${dir}/eligibility-prior-authorization.svg`,
    width: 1440,
    height: 900,
    alt: "Medical billing software eligibility verification and prior authorization tracking screen",
  },
  cycle: {
    src: `${dir}/medical-billing-revenue-cycle.svg`,
    width: 1400,
    height: 620,
    alt: "Twelve-stage medical billing revenue cycle from registration and eligibility to payment posting and reconciliation",
  },
  integrations: {
    src: `${dir}/medical-billing-integrations.svg`,
    width: 1200,
    height: 820,
    alt: "Medical billing software integration diagram with EHR, clearinghouse, payers, payment gateway and accounting",
  },
} as const;
