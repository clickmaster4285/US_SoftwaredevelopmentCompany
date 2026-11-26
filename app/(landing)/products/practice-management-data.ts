// Content for /products/healthcare-medical-software/medical-practice-management-software.
// Source: medical-practice-management-software-seo-content-v2.docx (prepared 16 Nov 2026).
// FAQ text is reused verbatim by the FAQPage JSON-LD, so edit both together.

export const PRACTICE_PATH =
  "/products/healthcare-medical-software/medical-practice-management-software";

export const practiceTitle =
  "Medical Practice Management Software | Clickmasters";

export const practiceDescription =
  "Custom medical practice management software for provider scheduling, billing, claims, RCM and multi-location reporting. Get a project estimate.";

export const heroSystem = [
  "Provider schedules, rooms and locations",
  "Patient registration, coverage and accounts",
  "Charges, claims, payments and receivables",
  "Staff work queues and administrative automation",
  "Financial and operational reporting across the practice",
];

export const coreFunctionality = [
  ["Scheduling", "provider calendars, rooms, visit types and locations"],
  [
    "Patient administration",
    "demographics, guarantors, insurance and self-pay accounts",
  ],
  ["Front-desk operations", "check-in, copay collection, check-out"],
  [
    "Billing and claims",
    "charge capture, invoices, claim submission and tracking",
  ],
  ["Receivables", "payment posting, patient balances, denials and follow-up"],
  ["Administration", "staff, roles, documents, work queues"],
  ["Reporting", "operational, financial and provider performance"],
];

export const recordChain = [
  "Patient account",
  "Appointment",
  "Encounter",
  "Charges",
  "Claim or invoice",
  "Payment",
  "Report",
];

export const adoptionTriggers = [
  "front-desk staff spend more time re-keying data than helping patients,",
  "claims are rejected for avoidable errors,",
  'owners can\'t get a reliable answer to "what are we owed, and by whom?", or',
  "a second provider or location makes informal processes unmanageable.",
];

export const adminVsClinicalRows = [
  [
    "Answers the question",
    "Who, when, where, how much, and paid or not?",
    "What is wrong with the patient, and what was done?",
  ],
  [
    "Main users",
    "Front desk, schedulers, billers, managers, owners",
    "Physicians, nurses, clinical staff",
  ],
  [
    "Key data",
    "Appointments, accounts, coverage, charges, claims, payments",
    "Notes, diagnoses, medications, allergies, results",
  ],
  [
    "Where they meet",
    "Coded diagnoses and procedures pass from the clinical record into billing",
    "Appointment and patient context pass from PMS to the clinical record",
  ],
];

export const challenges = [
  {
    title: "Fragmented Administrative Workflows",
    challenge:
      "scheduling in one tool, billing in another, payments in a spreadsheet and documents in email.",
    help: "one system where each step creates data for the next, so information is entered once and reused.",
  },
  {
    title: "Inefficient Physician Scheduling",
    challenge:
      "each physician's preferences live in someone's head; new-patient slots are given away and procedure time is mis-booked.",
    help: "rule-based provider templates define visit types, durations, reserved slots and locations, so staff book against rules, not memory.",
  },
  {
    title: "Disorganized Patient Registration",
    challenge:
      "repeated paper forms, duplicate accounts and missing insurance details.",
    help: "pre-registration, duplicate detection and required-field validation before an appointment is confirmed.",
  },
  {
    title: "Manual Billing and Payment Tracking",
    challenge:
      "paper superbills, missed charges and payments that can't be matched to services.",
    help: "charges captured against each encounter, an unbilled-encounter list, and payments posted to specific charges.",
  },
  {
    title: "Insurance Claims Administration",
    challenge:
      "rejections for missing data, expired authorizations and denials nobody follows up.",
    help: "pre-submission validation, claim status tracking and denial worklists routed to the right person.",
  },
  {
    title: "Staff Coordination Difficulties",
    challenge: "tasks passed verbally and unclear ownership of follow-ups.",
    help: "role-based work queues and visible patient status, from arrival through rooming and check-out to billing.",
  },
  {
    title: "Missed Appointments",
    challenge:
      "no-shows waste provider time and push other patients further out.",
    help: "automated reminders with confirmation, waitlists and no-show tracking by patient and provider.",
  },
  {
    title: "Poor Financial Reporting",
    challenge: "month-end numbers assembled by hand, late and inconsistent.",
    help: "live reports on charges, payments, adjustments and receivables ageing by payer, provider and location.",
  },
  {
    title: "Limited Operational Visibility",
    challenge:
      "managers can't see utilization, bottlenecks or backlogs until a problem has already formed.",
    help: "dashboards for schedule fill rate, check-in waits, unbilled encounters and open claims.",
  },
  {
    title: "Managing Multiple Practice Locations",
    challenge:
      "each site has its own habits and tools, and group-level numbers don't add up.",
    help: "shared patient accounts, standard workflows, location-aware scheduling and consolidated reporting with per-site drill-down.",
  },
];

export type PracticeFeature = {
  title: string;
  icon: string;
  does: string;
  how: string;
  problem: string;
  value: string;
  who: string;
};

export type FeatureGroup = {
  title: string;
  summary: string;
  features: PracticeFeature[];
};

export const featureGroups: FeatureGroup[] = [
  {
    title: "Operations",
    summary:
      "Run the day: schedules, providers, registration and patient flow.",
    features: [
      {
        title: "Centralized Practice Management Dashboard",
        icon: "LayoutDashboard",
        does: "shows the state of the practice on one screen: today's schedule fill, patients waiting, unbilled encounters, open claims, collections and alerts.",
        how: "widgets pull live data from each module, with layouts by role (front-desk lead, billing lead, practice manager, owner).",
        problem: "managers chasing status across several systems.",
        value:
          "issues such as a billing backlog or an overbooked provider are visible early.",
        who: "practice managers, owners, team leads.",
      },
      {
        title: "Physician and Provider Management",
        icon: "Stethoscope",
        does: "keeps the provider master record for physician practice management software: specialty, locations, visit types offered, billing identifiers (such as NPI in the US), fee schedules, referral preferences and supervising relationships.",
        how: "provider profiles drive scheduling rules, claim data and productivity reports, so a change in one place applies everywhere.",
        problem:
          "inconsistent provider data causing booking and billing errors. This is the foundation of any multi-physician practice management system.",
        value:
          "accurate claims, correct booking and reliable provider reporting.",
        who: "administrators, billers, providers.",
      },
      {
        title: "Advanced Appointment Scheduling",
        icon: "CalendarClock",
        does: "books patients against provider, room, equipment and location rules. This is the scheduling half of medical scheduling and billing software.",
        how: "first-available search, visit-type durations, reserved slots, recurring and group appointments, telehealth visits, waitlists and optional online self-booking within your rules. Appointments can carry authorization and eligibility flags.",
        problem: "double bookings, wasted gaps and booking inconsistencies.",
        value:
          "better use of provider time, which is a practice's most limited resource.",
        who: "schedulers, providers, patients.",
      },
      {
        title: "Patient Registration and Administration",
        icon: "IdCard",
        does: "manages the patient account, including demographics, guarantor, insurance (primary and secondary), self-pay status, consents and communication preferences.",
        how: "desk or online pre-registration, duplicate checks, card scanning and required-field validation. Coverage can be verified through eligibility integrations where available.",
        problem: "claim denials caused by registration errors.",
        value: "clean data at the front door means fewer problems downstream.",
        who: "front desk, billers, patients.",
      },
      {
        title: "Patient Check-In and Check-Out",
        icon: "DoorOpen",
        does: "manages arrival and departure.",
        how: "at check-in, staff confirm details, collect copays or deposits, capture forms and mark the patient as arrived. Kiosk or mobile self check-in is optional. At check-out, staff book follow-ups, collect balances and issue visit summaries.",
        problem: "queues, missed copays and follow-ups not booked.",
        value:
          "more revenue collected at the time of service and smoother patient flow.",
        who: "front desk, patients, managers.",
      },
      {
        title: "Physician Calendar Management",
        icon: "CalendarDays",
        does: "gives each physician control of their own time: clinic sessions, admin blocks, leave, on-call duty, meetings and cross-site sessions.",
        how: "physicians or their assistants manage templates and exceptions, and changes update bookable slots instantly, with alerts to schedulers when booked patients are affected.",
        problem:
          "patients booked into sessions a physician isn't working, and last-minute rescheduling.",
        value: "fewer disruptions and more predictable provider capacity.",
        who: "physicians, assistants, schedulers.",
      },
    ],
  },
  {
    title: "Revenue",
    summary: "Turn encounters into charges, claims and collected cash.",
    features: [
      {
        title: "Medical Billing and Invoice Management",
        icon: "ReceiptText",
        does: "converts completed encounters into patient invoices or insurance charges.",
        how: "charges are built from your fee schedule and coding (for example, CPT/HCPCS and ICD-10 in the US), with modifiers and packages where relevant. Self-pay invoices are issued directly, insured charges move into the claims workflow, and patient statements follow.",
        problem: "missed charges, pricing errors and invoicing delays.",
        value: "billed revenue that reflects the care actually delivered.",
        who: "billers, owners, patients.",
      },
      {
        title: "Insurance Claims Workflow",
        icon: "ShieldCheck",
        does: "handles insurance claims management from creation to resolution.",
        how: "claims are generated from charges, checked against validation rules, then submitted through a clearinghouse or payer connection where integrated, or exported. Claims are tracked through draft, submitted, accepted, rejected, paid, denied and appealed. Formats differ by market: for example, X12 837/835 transactions in the US, and provincial, national or private-insurer channels in Canada, Australia and the UK. We confirm your exact routes during discovery.",
        problem: "avoidable rejections and lost or unworked claims.",
        value: "faster, more predictable payer reimbursement.",
        who: "billers, practice managers, owners.",
      },
      {
        title: "Revenue Cycle Management Support",
        icon: "RefreshCcw",
        does: "supports the full revenue cycle, from eligibility and authorization before the visit, through charge capture and claims, to payment posting, denial management and patient collections.",
        how: "each revenue cycle step has its own status, owner and worklist, and KPIs (such as time from visit to claim and days in receivables) are tracked automatically.",
        problem: "revenue leaking between disconnected steps.",
        value:
          "a structured, measurable revenue process instead of ad-hoc follow-up.",
        who: "billing teams, finance, owners.",
      },
      {
        title: "Payment and Receivables Tracking",
        icon: "Wallet",
        does: "posts and tracks every payer and patient payment.",
        how: "manual posting or electronic remittance (ERA) import where integrated, line-level allocation, adjustments, refunds, payment plans and online payment links through a gateway. Receivables are aged by payer and patient.",
        problem:
          "unapplied cash, unclear patient balances and aged receivables nobody owns.",
        value: "clear cash visibility and focused collections.",
        who: "billers, finance, front desk.",
      },
    ],
  },
  {
    title: "Administration",
    summary: "Organize staff, sites, documents, communication and access.",
    features: [
      {
        title: "Staff and Employee Administration",
        icon: "UsersRound",
        does: "manages staff profiles, roles, location assignments, shifts and work queues.",
        how: "administrators assign queues (eligibility checks, unbilled encounters, denials, recalls) by person or team and can see workload and backlog.",
        problem: "unclear ownership of administrative work.",
        value: "a balanced workload and accountability.",
        who: "managers, team leads, staff.",
      },
      {
        title: "Multi-Location Practice Management",
        icon: "Building2",
        does: "runs several sites, and where needed several billing entities, from one system.",
        how: "each location has its own rooms, schedules, staff and fee schedules. Patient accounts are shared, providers can work across sites, and reports consolidate at group level with drill-down by site.",
        problem: "site-by-site systems and inconsistent processes.",
        value: "group-wide control and fair comparison between locations.",
        who: "group leadership, site managers, patients.",
      },
      {
        title: "Medical Document Management",
        icon: "FolderOpen",
        does: "stores administrative documents such as referrals, authorizations, insurance cards, IDs, consents and payer correspondence.",
        how: "documents are uploaded or scanned, categorized, linked to the patient account or encounter, and searchable, with access controlled by role. Letter templates generate standard correspondence.",
        problem: "paper files and documents lost in inboxes.",
        value: "faster answers to payer requests and audits.",
        who: "front desk, billers, managers.",
      },
      {
        title: "Patient Communication Management",
        icon: "MessageSquare",
        does: "centralizes administrative communication with patients, including confirmations, pre-visit forms, statements, recall notices and announcements.",
        how: "template-based messages are sent by SMS, email or portal, triggered by events and logged on the patient account, with consent and preferences respected.",
        problem: "ad-hoc calls and messages sent from personal devices.",
        value: "consistent communication and fewer inbound calls.",
        who: "patients, front desk.",
      },
      {
        title: "Automated Appointment Reminders",
        icon: "BellRing",
        does: "reduces no-shows through scheduled reminders.",
        how: "reminders are sent at intervals you set, such as 48 hours and 2 hours before the visit. They support two-way confirmation where available, and cancellations are offered automatically to waitlisted patients.",
        problem: "empty slots and time spent on reminder calls.",
        value: "better use of provider capacity.",
        who: "schedulers, providers, patients.",
      },
      {
        title: "Role-Based Access Management",
        icon: "KeyRound",
        does: "controls what each user can see, edit and approve.",
        how: "roles (front desk, scheduler, biller, provider, manager, administrator) with permissions that can be restricted further by location or department. Write-offs, refunds and exports can require approval.",
        problem: "over-broad access to patient and financial data.",
        value:
          "supports least-privilege access and protects against costly errors.",
        who: "compliance leads, managers, all users.",
      },
    ],
  },
  {
    title: "Insight and Platform",
    summary:
      "Measure performance, automate routine work and connect your systems.",
    features: [
      {
        title: "Practice Performance Analytics",
        icon: "Activity",
        does: "practice performance reporting on capacity and demand.",
        how: "metrics include schedule utilization, no-show and cancellation rates, new-patient volume, referral sources, wait times and provider productivity, with filters by period, provider, location and visit type.",
        problem: "decisions made without operational evidence.",
        value: "informed staffing, scheduling and service decisions.",
        who: "owners, practice managers, providers.",
      },
      {
        title: "Financial Reporting and Insights",
        icon: "BarChart3",
        does: "provides financial reporting for owners and finance teams.",
        how: "reports cover charges, payments and adjustments; receivables ageing by payer; collections by provider and location; payer mix; denial reasons; and the daily close. Reports can be scheduled or exported for accountants.",
        problem: "late, manual and inconsistent financial reporting.",
        value: "better cash-flow management and earlier detection of problems.",
        who: "owners, finance, billing leads.",
      },
      {
        title: "Workflow Automation",
        icon: "Workflow",
        does: "medical practice automation software and medical office workflow automation for repetitive administrative steps.",
        how: "rules you define. For example: flag appointments missing insurance details 48 hours ahead, create a task when an authorization is close to expiry, route denials by reason code, send statements on a cycle, or alert managers when encounters stay unbilled for more than a set number of days.",
        problem: "steps that depend on someone remembering them.",
        value: "fewer missed tasks and more staff time for higher-value work.",
        who: "all administrative staff.",
      },
      {
        title: "Third-Party Software Integrations",
        icon: "Plug",
        does: "connects the PMS to clinical systems, clearinghouses, labs, payments, telehealth, messaging and BI tools.",
        how: "integrations are built per project with HL7 v2, HL7 FHIR, X12 or REST APIs, depending on what the third party offers. See Healthcare Integrations below.",
        problem: "manual data transfer between systems.",
        value: "one reliable flow of data.",
        who: "everyone who would otherwise re-key data.",
      },
      {
        title: "Cloud-Based Practice Administration",
        icon: "Cloud",
        does: "secure, browser-based access for authorized users across sites and remote teams.",
        how: "hosting on AWS, Microsoft Azure or Google Cloud, in a region chosen for your data residency needs, with encryption, backups, monitoring and access controls. Private-cloud or on-premise deployment can be scoped if policy requires it.",
        problem: "on-site servers and workstation-bound software.",
        value: "supports remote billing teams and multi-site management.",
        who: "managers, remote staff, multi-site teams.",
      },
      {
        title: "Custom Reporting and Dashboards",
        icon: "PieChart",
        does: "reports and dashboards built around your own questions and KPIs.",
        how: "during discovery, we define the measures each role needs and build them as dashboards, scheduled reports or data exports to your BI tools.",
        problem:
          "off-the-shelf reports that don't answer the questions leadership actually asks.",
        value: "reporting that matches how you run the business.",
        who: "leadership, finance, managers.",
      },
    ],
  },
];

export const allFeatureTitles = featureGroups.flatMap((g) =>
  g.features.map((f) => f.title),
);

export const workflowStages = [
  "Patient Registration",
  "Appointment Scheduling",
  "Provider Assignment",
  "Patient Check-In",
  "Consultation Workflow",
  "Billing and Claims",
  "Payment Tracking",
  "Follow-Up",
  "Financial and Operational Reporting",
];

export const workflowRows = [
  [
    "1. Patient Registration",
    "Account created, coverage captured, duplicate check run",
    "A referred patient completes an online form; the system flags that the insurance ID is missing a digit before the visit",
  ],
  [
    "2. Appointment Scheduling",
    "Slot booked by visit type and rules",
    "A 40-minute new-patient visit is booked into a reserved new-patient slot",
  ],
  [
    "3. Provider Assignment",
    "Patient matched to the right provider and location",
    "Referral rules assign the patient to the physician with the right subspecialty at the nearest site",
  ],
  [
    "4. Patient Check-In",
    "Details confirmed, copay collected, status set to arrived",
    "Front desk scans the insurance card, collects the copay and marks the patient as roomed",
  ],
  [
    "5. Consultation Workflow",
    "Provider sees the patient; documentation happens in the clinical system",
    "The physician documents in the EMR; coded diagnoses and procedures flow back to the PMS",
  ],
  [
    "6. Billing and Claims",
    "Charges reviewed, claim validated and submitted",
    "A validation rule catches a missing authorization number before submission",
  ],
  [
    "7. Payment Tracking",
    "Remittance posted; patient balance billed",
    "The payer pays part of the claim; the remainder moves to the patient's statement",
  ],
  [
    "8. Follow-Up",
    "Next visit, recall and balance follow-up",
    "A 3-month review is booked at check-out, and a recall reminder is scheduled",
  ],
  [
    "9. Financial and Operational Reporting",
    "Data rolls up to dashboards",
    "The manager sees that new-patient slots for this specialty are full for three weeks and opens an extra session",
  ],
];

export const benefits = [
  {
    title: "Centralized Administration",
    text: "Scheduling, accounts, billing and reporting share one database.",
    example:
      "updating a patient's insurance once updates today's claim and every future appointment.",
  },
  {
    title: "Improved Operational Visibility",
    text: "Managers see backlogs as they form.",
    example:
      "the dashboard shows 30 encounters unbilled for more than three days, so the billing lead reassigns work that morning.",
  },
  {
    title: "Better Provider Scheduling",
    text: "Templates match each physician's preferences and the practice's priorities.",
    example:
      "urgent slots held until 10 a.m. stop same-day patients being sent elsewhere.",
  },
  {
    title: "Efficient Patient Coordination",
    text: "Every team sees patient status.",
    example:
      "when a physician runs 20 minutes late, the front desk can see it and inform waiting patients.",
  },
  {
    title: "Organized Financial Workflows",
    text: "Every revenue step has an owner and a status.",
    example:
      "denied claims no longer sit in a pile; each one has an assignee and a due date.",
  },
  {
    title: "Improved Billing Management",
    text: "Charges come from encounters, not paper.",
    example:
      "a procedure that used to be missed on paper superbills is now captured, because the coded visit drives the charge.",
  },
  {
    title: "More Structured Staff Operations",
    text: "Work queues replace verbal handovers.",
    example: "a new hire knows exactly which tasks are theirs from day one.",
  },
  {
    title: "Reduced Repetitive Administrative Tasks",
    text: "Medical office workflow automation handles routine steps.",
    example:
      "statements, reminders and authorization-expiry alerts run without staff starting them.",
  },
  {
    title: "Better Practice Performance Monitoring",
    text: "KPIs are tracked continuously.",
    example:
      "a rising no-show rate on Monday mornings prompts an extra reminder for those slots.",
  },
  {
    title: "Easier Multi-Location Administration",
    text: "One system, many sites.",
    example:
      "a physician who works at two sites has one calendar, and the group sees combined productivity.",
  },
  {
    title: "Scalable Business Operations",
    text: "Growth happens through configuration, not system replacement.",
    example:
      "adding a provider means creating a profile and templates, not buying another system.",
  },
];

export const practiceTypes = [
  {
    title: "Independent Physician Practices",
    icon: "UserRound",
    text: "A small team covering many roles. Priorities are simple screens, combined scheduling and billing, reliable reminders and phased delivery that starts small.",
  },
  {
    title: "Family Medicine Practices",
    icon: "HeartHandshake",
    text: "All ages, often whole households. Requirements include household and guarantor linking, family statements, preventive-care recalls and mixed paediatric and adult visit types.",
  },
  {
    title: "Primary Care Providers",
    icon: "Stethoscope",
    text: "High volume and same-day demand. Requirements include same-day slot management, chronic-care recall programmes, fast check-in and strong no-show controls.",
  },
  {
    title: "Specialist Medical Practices",
    icon: "Microscope",
    text: "Referral-driven, with procedures. Requirements include referral intake and tracking, prior authorization management, procedure scheduling with equipment and rooms, and specialty billing rules.",
  },
  {
    title: "Multi-Physician Organizations",
    icon: "UsersRound",
    text: "Shared resources and individual preferences. Requirements include per-physician templates, shared queues, provider productivity reporting and fair new-patient distribution.",
  },
  {
    title: "Multi-Specialty Medical Groups",
    icon: "Network",
    text: "Several departments in one organization. Requirements include specialty fee schedules and visit types, internal referrals, department permissions and consolidated group finance across billing entities.",
  },
  {
    title: "Private Medical Centers",
    icon: "Hospital",
    text: "Often self-pay or private-insurance focused. Requirements include online booking, deposits, packages and memberships, private insurer billing and branded patient communication.",
  },
  {
    title: "Outpatient Healthcare Facilities",
    icon: "Building2",
    text: "Consultations, diagnostics and procedures in one facility. Requirements include room, equipment and staff scheduling, procedure-day workflows, facility and professional charges where applicable, and throughput reporting.",
  },
  {
    title: "Growing Healthcare Organizations",
    icon: "TrendingUp",
    text: "Adding providers and sites quickly. Requirements include multi-entity architecture, standardized workflows, strong permissions, scalable cloud infrastructure and APIs for future apps and portals.",
  },
  {
    title: "Dental Practices",
    icon: "Smile",
    text: "Chairs, hygienists and recall cycles. Practice management software for dentists needs chair and hygienist scheduling, treatment-plan tracking and six-month recall reminders. The practice management software dental groups use must also report by chair and handle dental insurance claims.",
  },
  {
    title: "Therapy and Mental Health Practices",
    icon: "Brain",
    text: "Recurring sessions and sensitive records. Practice management software for mental health providers needs stricter access to session notes and telehealth visits. The practice management software therapy clinics use must also track session series, therapist caseloads and visit limits.",
  },
  {
    title: "Optometry and Eye Care Practices",
    icon: "Eye",
    text: "Exams plus optical sales. The practice management software optometry practices use needs exam-lane scheduling, optical orders, frame and lens inventory, and vision plans billed alongside medical insurance.",
  },
];

export const pmsVsClinicRows = [
  [
    "Primary purpose",
    "Run the administrative and financial business of a practice or group",
    "Run a clinic's daily patient flow end to end",
  ],
  [
    "Operational scope",
    "Practice- or organization-wide administration",
    "Single clinic or a small number of branches",
  ],
  [
    "Provider administration",
    "Detailed provider records, billing identifiers, fee schedules, productivity",
    "Doctor schedules and availability",
  ],
  [
    "Appointment management",
    "Rule-based templates across many providers and sites",
    "Doctor and room calendar for the clinic",
  ],
  [
    "Billing workflows",
    "Charge capture, insurance claims, remittances, denials, RCM",
    "Invoices, receipts, patient payments; insurance often lighter",
  ],
  [
    "Staff management",
    "Work queues, team assignment, backlog tracking",
    "Staff roles and daily coordination",
  ],
  [
    "Financial reporting",
    "A/R ageing, payer mix, collections by provider and location",
    "Revenue and activity summaries",
  ],
  [
    "Multi-location support",
    "Core design assumption, including multiple entities",
    "Supported for branches",
  ],
  [
    "Scalability",
    "Built for group and organizational growth",
    "Built for clinic growth",
  ],
];

export const systemDefinitions = [
  [
    "Practice management software (PMS)",
    "runs the business, including scheduling, accounts, billing, claims, payments and reporting.",
  ],
  [
    "Electronic medical records (EMR)",
    "the digital chart within one practice, covering encounter notes, diagnoses, medications, allergies and orders.",
  ],
  [
    "Electronic health records (EHR)",
    "a broader, longitudinal health record designed to be shared across providers and care settings.",
  ],
];

export const pmsEmrEhrRows = [
  [
    "Primary purpose",
    "Administrative and financial operations",
    "Clinical documentation within a practice",
    "Longitudinal, shareable patient health record",
  ],
  [
    "Administrative capabilities",
    "Extensive: scheduling, registration, billing, claims, reporting",
    "Limited",
    "Limited to moderate",
  ],
  [
    "Clinical documentation",
    "None or minimal (receives coded output)",
    "Core function",
    "Core function, across care settings",
  ],
  [
    "Data managed",
    "Appointments, accounts, coverage, charges, claims, payments",
    "Notes, problems, medications, allergies, orders",
    "Complete health history, results, care-team data",
  ],
  [
    "Integration possibilities",
    "Sends schedules and demographics; receives coded diagnoses and procedures",
    "Exchanges data with PMS, labs and pharmacies",
    "Exchanges data across organizations (often via FHIR)",
  ],
];

export const customVsReadyRows = [
  [
    "Customization",
    "Designed around your workflows, roles and rules",
    "Configurable within the vendor's options",
  ],
  [
    "Workflow flexibility",
    "Software adapts to the practice",
    "Practice often adapts to the software",
  ],
  [
    "Integration options",
    "Built for your systems where third-party APIs allow",
    "Limited to the vendor's supported integrations",
  ],
  [
    "Scalability",
    "Architecture planned for your growth path",
    "Tied to vendor tiers and per-user pricing",
  ],
  [
    "Deployment",
    "Your choice of cloud provider and region; private cloud or on-premise can be scoped",
    "Vendor-hosted, usually multi-tenant",
  ],
  [
    "Data access",
    "Direct access to your database and APIs, under agreed terms",
    "Through vendor exports and APIs, under vendor terms",
  ],
  [
    "Reporting",
    "Designed for your KPIs",
    "Standard reports; custom options vary",
  ],
  ["Feature expansion", "On your roadmap", "On the vendor's roadmap"],
  [
    "Maintenance",
    "Your development partner or in-house team, under agreed terms",
    "Vendor-managed",
  ],
  [
    "Long-term business requirements",
    "Evolves with your model and structure",
    "Best when your needs match the product's direction",
  ],
  [
    "Upfront cost and time to start",
    "Higher upfront investment and a build period",
    "Lower upfront cost and a faster start",
  ],
];

export const whenCustom = [
  "Your workflows, specialties or billing rules don't fit standard products.",
  "You need integrations that off-the-shelf tools don't support.",
  "You run, or plan to run, multiple sites or entities with consolidated reporting.",
  "You want control over hosting, data structures and the roadmap.",
  "Per-user subscription costs are becoming significant as you grow.",
];

export const securityMeasures = [
  [
    "Authentication",
    "strong password policies, multi-factor authentication, optional single sign-on, session timeouts and lockouts.",
  ],
  [
    "Role-based permissions",
    "least-privilege access by role, location and function, with approval for sensitive actions.",
  ],
  [
    "Data encryption",
    "TLS in transit, and encryption at rest for databases, files and backups.",
  ],
  [
    "Secure API communication",
    "authenticated, scoped and rate-limited APIs, with input validation and secrets management.",
  ],
  [
    "Audit logs",
    "records of who viewed, created, changed, exported or deleted data, and when.",
  ],
  ["Data backups", "automated, encrypted backups with defined retention."],
  [
    "Disaster recovery",
    "documented recovery objectives, tested restore procedures and multi-zone hosting where required.",
  ],
  [
    "Access monitoring",
    "alerts for unusual logins, out-of-hours access and bulk exports, plus periodic access reviews.",
  ],
  [
    "Patient data protection",
    "data minimization, masking of sensitive fields, and separation of development, test and production environments.",
  ],
];

export const securityLayers = [
  { label: "Authorized user", detail: "Named account on an approved device" },
  {
    label: "Multi-factor authentication",
    detail: "MFA, optional SSO, session timeouts",
  },
  {
    label: "Role-based access",
    detail: "Least privilege by role and location",
  },
  {
    label: "Encrypted application & APIs",
    detail: "TLS, scoped and rate-limited APIs",
  },
  {
    label: "Encrypted database & files",
    detail: "Encryption at rest, masked fields",
  },
  {
    label: "Backups & disaster recovery",
    detail: "Encrypted, restore-tested, multi-zone",
  },
];

export const privacyRegions = [
  {
    region: "USA · HIPAA",
    text: "the Privacy and Security Rules require administrative, physical and technical safeguards for protected health information. Vendors that handle PHI for a covered entity generally need a Business Associate Agreement (BAA).",
  },
  {
    region: "UK and EU · UK GDPR / EU GDPR",
    text: "health data is special category data. It requires a lawful basis and an additional condition, appropriate security, data processing agreements, DPIAs where required and respect for data subject rights.",
  },
  {
    region: "Canada",
    text: "PIPEDA and provincial health information laws (for example, PHIPA in Ontario or HIA in Alberta).",
  },
  {
    region: "Australia",
    text: "the Privacy Act 1988 and the Australian Privacy Principles.",
  },
];

export const integrationRows = [
  [
    "EHR and EMR platforms",
    "Sync patients and appointments; receive coded diagnoses and procedures",
    "HL7 v2 (ADT, SIU, DFT), HL7 FHIR, vendor APIs",
  ],
  [
    "Medical billing platforms",
    "Send charges to an external billing or RCM platform",
    "Platform APIs or structured exports",
  ],
  [
    "Insurance and claims systems",
    "Eligibility, claim submission, status, remittance",
    "Clearinghouses; X12 270/271, 276/277, 837, 835 in the US; national or insurer channels elsewhere",
  ],
  [
    "Laboratory systems",
    "Order tracking and result notifications linked to encounters",
    "HL7 ORM/ORU, FHIR, lab APIs",
  ],
  [
    "Payment gateways",
    "Card payments, payment links, deposits, plans",
    "Gateway APIs (for example, Stripe or regional providers)",
  ],
  [
    "Telemedicine applications",
    "Video visits booked and billed through the PMS",
    "Video SDKs/APIs or existing platforms",
  ],
  [
    "Patient communication platforms",
    "SMS, email, WhatsApp, voice",
    "Messaging provider APIs",
  ],
  [
    "Analytics and reporting systems",
    "Advanced BI and data warehousing",
    "Secure exports, APIs, warehouse pipelines",
  ],
];

export const processPhases = [
  {
    title: "Discover and plan",
    stages: [
      [
        "Requirement Discovery",
        "Understand goals, size, specialties, payers, users and current systems",
        "Requirements summary, success criteria",
      ],
      [
        "Practice Workflow Analysis",
        "Map how patients, data and money move today, and where they stall",
        "Current and future workflow maps, role definitions",
      ],
      [
        "Feature and Module Planning",
        "Decide what goes into the first release and what comes later",
        "Prioritized backlog, release plan, written scope, timeline and quote",
      ],
    ],
  },
  {
    title: "Design and architect",
    stages: [
      [
        "UI/UX Design",
        "Design fast screens for each role",
        "Wireframes, clickable prototype, design system",
      ],
      [
        "Software Architecture",
        "Define stack, modules, hosting, security and integrations",
        "Architecture document, hosting and security plan",
      ],
    ],
  },
  {
    title: "Build and integrate",
    stages: [
      [
        "Frontend Development",
        "Build the responsive interface",
        "Working screens in staging, demonstrated each iteration",
      ],
      [
        "Backend Development",
        "Build scheduling, billing, workflow and permission logic",
        "Tested services and APIs",
      ],
      [
        "Database Development",
        "Model patients, appointments, encounters, charges, claims and payments",
        "Data model, migrations, data migration plan",
      ],
      [
        "API Integration",
        "Connect the agreed external systems",
        "Working integrations, documentation, monitoring",
      ],
    ],
  },
  {
    title: "Test, launch and support",
    stages: [
      [
        "Security Testing",
        "Verify authentication, permissions, encryption and common vulnerabilities",
        "Security test results, remediation, permission verification",
      ],
      [
        "Quality Assurance",
        "Functional, regression, performance and cross-device testing",
        "Test reports, UAT with your team",
      ],
      [
        "Deployment",
        "Go live safely",
        "Production release; configuration of providers, locations, fee schedules and roles; data migration; staff onboarding",
      ],
      [
        "Maintenance and Support",
        "Keep the system secure and improving",
        "Agreed support plan, monitoring, updates and feature roadmap",
      ],
    ],
  },
];

export const techRows = [
  [
    "Frontend",
    "React.js, Next.js, TypeScript",
    "Fast, responsive screens for high-volume front-desk and billing work",
  ],
  [
    "Backend",
    "Node.js (or Python where it suits the project)",
    "Business rules, workflow engine, integration services",
  ],
  [
    "APIs",
    "REST, with GraphQL where useful",
    "Clean integration points for EHRs, clearinghouses, apps and portals",
  ],
  [
    "Relational databases",
    "PostgreSQL or similar",
    "Financial, claims and audit data benefits from transactional integrity",
  ],
  [
    "Document databases",
    "MongoDB, where flexible data structures help",
    "Configurable forms, templates and event logs",
  ],
  [
    "Cloud infrastructure",
    "AWS, Microsoft Azure, Google Cloud; Docker and Kubernetes",
    "Region and data residency, availability, scaling, managed backups",
  ],
  [
    "Authentication and authorization",
    "OAuth 2.0 / OpenID Connect, MFA, role- and attribute-based access",
    "Secure access by role, location and function",
  ],
  [
    "Healthcare standards",
    "HL7 v2, HL7 FHIR, X12 (US)",
    "Interoperability with clinical and payer systems",
  ],
];

export const architecturePrinciples = [
  [
    "Modular application architecture",
    "scheduling, billing, claims, communication and reporting are built as separate modules, so they can be extended independently.",
  ],
  [
    "API-first design",
    "every module exposes secure APIs, which makes future patient portals, mobile apps and integrations easier to add.",
  ],
  [
    "Performance",
    "indexed queries for large account and claims datasets, caching for frequent lookups, and background jobs for batch claims and heavy reports.",
  ],
  [
    "Scalability",
    "horizontal scaling on cloud infrastructure as users, sites and data grow.",
  ],
];

export const costFactors = [
  [
    "Required modules",
    "scheduling and billing alone vs a full suite with claims, RCM, analytics and documents.",
  ],
  [
    "Number of physicians",
    "more providers mean more templates, rules and productivity reporting.",
  ],
  [
    "User accounts and roles",
    "more roles mean more permission design and testing.",
  ],
  [
    "Practice locations",
    "multi-site and multi-entity structures add configuration and reporting work.",
  ],
  [
    "Billing and claims complexity",
    "self-pay invoicing vs full insurance claims, remittances and denials.",
  ],
  [
    "Integrations",
    "each EHR, clearinghouse, lab or payment connection adds scope.",
  ],
  [
    "Web and mobile requirements",
    "a web app only, or also provider or patient mobile apps.",
  ],
  [
    "Reporting capabilities",
    "standard reports vs custom dashboards and BI exports.",
  ],
  ["Security requirements", "MFA, SSO, advanced audit logging and monitoring."],
  [
    "Infrastructure and maintenance",
    "hosting, availability targets, support level and ongoing development.",
  ],
];

export const whyClickMasters = [
  [
    "Custom Healthcare Software Development",
    "Our healthcare product range covers practice management, clinic management, EHR, EMR, billing and patient management, so we design each system knowing how it connects to the others.",
  ],
  [
    "Web Application Development",
    "Secure, web-based medical practice management software for staff who work across desktops, tablets and remote locations.",
  ],
  [
    "Mobile Application Development",
    "iOS and Android apps for providers or patients when your project needs them.",
  ],
  [
    "Scalable Software Architecture",
    "Modular, cloud-ready systems designed to grow with your organization.",
  ],
  [
    "API Integrations",
    "Secure API design and third-party integration, which is essential for connected healthcare operations.",
  ],
  [
    "UI/UX Design",
    "Interfaces designed for speed and clarity in high-volume administrative work.",
  ],
  [
    "Quality Assurance",
    "Functional, regression, load and payment-flow testing before launch.",
  ],
  [
    "Maintenance and Support",
    "Monitoring, updates, fixes and new features after go-live. Every engagement starts with written scope before development.",
  ],
];

export const consultationChecklist = [
  [
    "Business requirement discussion",
    "your goals, structure, payers and growth plans",
  ],
  ["Workflow assessment", "where patients, data and revenue get stuck today"],
  ["Feature planning", "the modules you need first, and what can follow"],
  [
    "Development consultation",
    "architecture, hosting, integrations and security",
  ],
  ["Custom project estimate", "a written scope, timeline and quote"],
];

export const practiceFaqs = [
  {
    question: "What is medical practice management software?",
    answer:
      "Medical practice management software is a system that runs the administrative and financial side of a medical practice. It manages provider scheduling, patient registration and coverage, check-in and check-out, billing, insurance claims, payments, staff work and reporting. It works alongside EMR or EHR systems, which handle clinical documentation, so the practice runs efficiently and gets paid accurately.",
  },
  {
    question: "How does medical practice management software work?",
    answer:
      "It connects a chain of records: patient account, appointment, encounter, charges, claim or invoice, payment and report. Each step creates data for the next. A booked appointment becomes an encounter at check-in, coded services become charges, charges become claims, and payments update balances. Reports then summarize performance across providers, payers and locations.",
  },
  {
    question:
      "What are the essential features of a practice management system?",
    answer:
      "Essential features include provider and appointment scheduling, patient registration and insurance details, check-in and check-out, billing, claims workflow, payment and receivables tracking, role-based access and reporting. Growing practices often add multi-location management, workflow automation, document management, patient communication, EHR or EMR integration, revenue cycle tools and custom dashboards.",
  },
  {
    question: "Who needs medical practice management software?",
    answer:
      "Any practice that schedules several providers, bills insurers or patients, and needs clear financial visibility. That includes independent physicians, family medicine and primary care practices, specialist practices, multi-physician organizations, multi-specialty groups, private medical centres and outpatient facilities. It becomes especially valuable once a practice adds providers, payers or locations.",
  },
  {
    question:
      "What is the difference between practice management software and EHR?",
    answer:
      "Practice management software runs the business: scheduling, accounts, billing, claims, payments and reporting. An EHR holds the clinical record: diagnoses, medications, results, notes and care history that can be shared across providers. Most practices use both. Integrating them means patients are registered once and coded clinical work flows directly into billing. Smaller practices sometimes prefer combined medical records practice management software, which we can build as one product.",
  },
  {
    question: "Is there practice management software for dentists?",
    answer:
      "Yes. Practice management software for dentists adds dental-specific workflows to the core scheduling and billing modules: chair and hygienist scheduling, treatment plans with phased procedures, six-month recall reminders, dental insurance claims and production reporting by provider and chair. We can build a dedicated dental system or add dental modules to a multi-specialty platform.",
  },
  {
    question:
      "Can practice management software support therapy and mental health practices?",
    answer:
      "Yes. Therapy and mental health practices need recurring session scheduling, therapist caseloads, authorization and visit-limit tracking, telehealth sessions and stricter access controls around session notes. These rules are configured in the permissions model so only the right clinicians see sensitive information, while billing staff see what they need to submit claims.",
  },
  {
    question: "Does practice management software work for optometry practices?",
    answer:
      "Yes. Optometry and eye care practices combine medical visits with retail. Their software needs exam-lane and pre-test scheduling, optical orders, frame and lens inventory, and billing that handles vision plans alongside medical insurance. These modules can share the same patient record and reporting as the rest of the practice.",
  },
  {
    question: "Can practice management software manage multiple physicians?",
    answer:
      "Yes. Each physician has a profile with specialty, locations, visit types, billing identifiers and schedule templates, while the practice shares one calendar, patient database and billing system. Schedulers can search across providers for the first suitable slot, and reports show appointments, productivity and collections for each physician.",
  },
  {
    question: "Does medical practice software support billing?",
    answer:
      "Yes. Billing is a core function. Charges are created from completed encounters using your fee schedule and codes, self-pay invoices are issued, insured charges flow into claims, payments are posted and patient statements are sent. Practices that want medical billing and practice management software in one platform can have both built on the same database, while those with complex billing teams can connect a dedicated revenue cycle platform instead.",
  },
  {
    question: "Can it manage insurance claims workflows?",
    answer:
      "Yes. Claims are generated from charges, checked against validation rules, submitted through a clearinghouse or payer connection where integrated, and tracked through each status. Rejections and denials go to worklists for correction or appeal. Claim formats and submission channels vary by country and payer, so we confirm your exact requirements during discovery.",
  },
  {
    question: "Can it support multiple practice locations?",
    answer:
      "Yes. Each location can have its own rooms, schedules, staff and fee schedules, while patient accounts are shared across the organization. Physicians can work at several sites from one calendar. Leadership sees consolidated financial and operational reports, and site managers see their own location's performance.",
  },
  {
    question:
      "Is medical practice management software suitable for small practices?",
    answer:
      "Yes. Small practices often benefit the most, because a few staff cover many roles. A focused first version with scheduling, registration, billing and reminders can remove a large amount of manual work, and more modules can be added later. If an off-the-shelf product already fits your workflow, we'll tell you honestly.",
  },
  {
    question: "Can it integrate with EMR and EHR systems?",
    answer:
      "In many cases, yes. Integrations usually use HL7 v2 messages, HL7 FHIR APIs or the vendor's own API to exchange patients, appointments and coded charges. Whether an integration is feasible depends on the other system's capabilities and access policies. We assess each integration during discovery, before it's included in scope or timelines.",
  },
  {
    question: "How much does custom medical practice management software cost?",
    answer:
      "Cost depends on the modules required, number of physicians and users, locations, billing and claims complexity, integrations, web and mobile apps, reporting, security and ongoing maintenance. Because these vary widely, we don't publish fixed prices. After discovery, you receive a written scope, timeline and quote before development starts.",
  },
  {
    question: "How long does development take?",
    answer:
      "Timelines depend on scope. A focused first release with core scheduling, registration and billing modules is delivered much faster than a multi-location platform with claims, integrations and mobile apps. Many practices launch essential modules first and add others in phases. We confirm a realistic timeline in writing after the workflow analysis.",
  },
  {
    question: "Is cloud-based practice management software secure?",
    answer:
      "It can be, when it's designed and operated properly. Key safeguards include encryption in transit and at rest, multi-factor authentication, role-based permissions, audit logs, monitoring, tested backups and disaster recovery, and reputable hosting in an appropriate region. Practice policies matter too, including staff training, access reviews and prompt removal of access for leavers.",
  },
  {
    question: "Can the system automate administrative tasks?",
    answer:
      "Yes. Rules can automate reminders, statements, eligibility checks before visits, authorization-expiry alerts, denial routing by reason code, recall notices and alerts for encounters left unbilled. Automation reduces repetitive work and makes sure important steps happen on time, while staff stay focused on exceptions and patient-facing tasks.",
  },
  {
    question: "Does it provide financial and operational reporting?",
    answer:
      "Yes. Financial reports cover charges, payments, adjustments, receivables ageing, payer mix, denials and collections by provider and location. Operational reports cover utilization, no-shows, wait times, new-patient volume and staff backlogs. Custom dashboards can track the specific KPIs your leadership team uses to run the practice.",
  },
  {
    question: "Can the software manage physician schedules?",
    answer:
      "Yes. Physicians, or their assistants, manage session templates, visit types, reserved slots, leave, on-call duty and cross-site sessions. Changes update bookable slots immediately, and schedulers are alerted if existing appointments are affected. This keeps each physician's calendar accurate and their time used effectively.",
  },
  {
    question: "Can practice management software be customized?",
    answer:
      "Custom-developed software can be shaped around your workflows, visit types, scheduling rules, billing logic, permissions, reports, integrations and branding. Ready-made products allow configuration within limits. With custom development, you also control the roadmap, so new modules and features can be added as your organization grows.",
  },
  {
    question: "What integrations can be added?",
    answer:
      "Common integrations include EHR and EMR platforms, medical billing and RCM platforms, clearinghouses and insurance systems, laboratory systems, payment gateways, telemedicine applications, SMS and email providers, and BI or analytics tools. Each is developed according to project requirements and depends on the third party's APIs, standards and access approval.",
  },
  {
    question:
      "Can Clickmasters develop custom medical practice management software?",
    answer:
      "Yes. Clickmasters designs and develops custom medical practice management software, covering requirement discovery, workflow analysis, module planning, UI/UX design, architecture, frontend and backend development, database design, integrations, security testing, QA, deployment and ongoing support. Every project starts with a written scope, timeline and quote.",
  },
];

const dir = "/products/practice";

/** Concept illustrations and diagrams; files live in public/products/practice/. */
export const practiceImages = {
  dashboard: {
    src: `${dir}/medical-practice-management-dashboard.svg`,
    width: 1440,
    height: 900,
    alt: "Concept illustration of a medical practice management software dashboard showing schedule utilization, open claims and daily collections",
  },
  scheduling: {
    src: `${dir}/physician-scheduling-dashboard.svg`,
    width: 1440,
    height: 900,
    alt: "Physician scheduling dashboard concept with multi-provider calendar and visit types across practice locations",
  },
  claims: {
    src: `${dir}/insurance-claims-workflow.svg`,
    width: 1440,
    height: 900,
    alt: "Insurance claims workflow diagram from claim creation and validation to submission, payment and denial management",
  },
  locations: {
    src: `${dir}/multi-location-practice-administration.svg`,
    width: 1440,
    height: 900,
    alt: "Multi-location medical practice administration interface comparing performance across practice sites",
  },
  analytics: {
    src: `${dir}/practice-performance-analytics.svg`,
    width: 1440,
    height: 900,
    alt: "Practice performance analytics dashboard concept with provider productivity and no-show trends",
  },
  financial: {
    src: `${dir}/practice-financial-reporting.svg`,
    width: 1440,
    height: 900,
    alt: "Medical practice financial reporting interface showing accounts receivable ageing and payer mix",
  },
  venn: {
    src: `${dir}/pms-emr-ehr-comparison.svg`,
    width: 1200,
    height: 760,
    alt: "Diagram comparing practice management software, EMR and EHR systems and how they share data",
  },
  hub: {
    src: `${dir}/healthcare-integrations-hub.svg`,
    width: 1200,
    height: 800,
    alt: "Healthcare integrations hub connecting practice management software with EHR, EMR, clearinghouse, lab, payment and telehealth systems",
  },
  architecture: {
    src: `${dir}/practice-management-architecture.svg`,
    width: 1200,
    height: 820,
    alt: "Modular medical practice management software architecture with React frontend, API layer and cloud databases",
  },
} as const;
