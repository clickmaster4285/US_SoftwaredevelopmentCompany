// Content for /products/healthcare-medical-software/patient-management-software.
// Source: patient-management-software-seo-content.docx (prepared 18 Nov 2026).
// FAQ text is reused verbatim by the FAQPage JSON-LD, so edit both together.

export const PATIENT_PATH =
  "/products/healthcare-medical-software/patient-management-software";

export const patientTitle =
  "Patient Management Software | Custom Healthcare Platform";

export const patientDescription =
  "Custom patient management software for US practices and clinics: registration, digital intake, scheduling, reminders, patient portal and EHR integration.";

export const PRODUCT_NAME = "Patient Management Software";

export const answersQuestions = [
  "Who is this patient, and do we already have a record for them?",
  "How can we reach them, and how do they prefer to be contacted?",
  "When is their next appointment, and with whom?",
  "Which forms, consents and documents are complete, and which are missing?",
  "Where are they right now: booked, checked in, roomed, seen or checked out?",
  "What follow-up, referral or recall is due?",
];

export const systemsRows = [
  [
    "Patient management software",
    "Patient identity, intake, scheduling, communication, flow, follow-up",
    "Front desk, schedulers, care coordinators, patients",
    "—",
  ],
  [
    "Practice management software",
    "Practice operations: scheduling, billing, claims, reporting",
    "Practice managers, billers",
    "Overlaps on scheduling and registration; adds the financial side",
  ],
  [
    "EMR software",
    "Clinical documentation within one practice",
    "Physicians, nurses",
    "Receives demographics and appointments; holds clinical data",
  ],
  [
    "EHR software",
    "A clinical record shared across organizations",
    "Care teams, health systems",
    "Same as EMR, at network scale",
  ],
  [
    "Hospital management software",
    "Whole-hospital operations: admissions, wards, beds, pharmacy, lab, billing",
    "Hospital administrators and departments",
    "Patient management is one module within it",
  ],
  [
    "Patient engagement software",
    "Outreach, education, surveys and portals",
    "Patients, marketing, care management",
    "One part of patient management, often sold separately",
  ],
];

export const journeySteps = [
  [
    "Booking",
    "The patient books online, through the portal or by phone. The system checks provider availability, visit type, location and insurance rules.",
  ],
  [
    "Pre-registration",
    "The patient gets a link to digital intake forms, consents, insurance card upload and photo ID.",
  ],
  [
    "Identity matching",
    "The system matches the patient to an existing record or creates a new one, flagging possible duplicates.",
  ],
  [
    "Reminders",
    "Automated reminders and confirmations go out by text, email or voice, following each patient's preferences.",
  ],
  [
    "Check-in",
    "The patient checks in at a kiosk, by QR code, on their phone or at the desk. Missing items and copays are flagged.",
  ],
  [
    "Patient flow",
    "Staff see each patient's status in real time: waiting, roomed, with provider, checkout.",
  ],
  [
    "Hand-offs",
    "Demographics and appointment data sync to the EMR/EHR for the visit, and visit details pass to billing afterward.",
  ],
  [
    "Check-out",
    "Follow-up appointments, referrals, orders and visit summaries are handled before the patient leaves.",
  ],
  [
    "Follow-up",
    "Recalls, post-visit surveys, care-plan reminders and portal messages keep the relationship active between visits.",
  ],
] as const;

export type FeatureGroup = {
  title: string;
  icon: string;
  visual?: "analytics";
  features: (readonly [string, string])[];
};

export const featureGroups: FeatureGroup[] = [
  {
    title: "Patient Administration",
    icon: "IdCard",
    features: [
      [
        "Patient registration and profile management",
        "Demographics, contacts, guarantor, insurance, preferred language, accessibility needs and communication preferences in one profile.",
      ],
      [
        "Digital patient intake",
        "Mobile-friendly forms, e-signatures for consents, insurance card and ID capture, and pre-visit questionnaires that write straight into the record.",
      ],
      [
        "Patient information management",
        "A master patient index with duplicate detection, merge tools and a full change history.",
      ],
      [
        "Patient medical history management",
        "Patient-reported history, medications and allergies captured during intake and shared with the clinical system for clinician review.",
      ],
      [
        "Document management",
        "Scanned and uploaded documents (referral letters, outside records, consent forms) indexed by patient, type and date.",
      ],
    ],
  },
  {
    title: "Scheduling and Flow",
    icon: "CalendarCheck",
    features: [
      [
        "Appointment scheduling",
        "Provider, room and equipment calendars, visit-type rules, online self-scheduling and multi-location booking.",
      ],
      [
        "Appointment reminders",
        "Automated text, email and voice reminders with two-way confirmation and rescheduling.",
      ],
      [
        "Provider and staff scheduling",
        "Provider templates, blocked time, on-call and shift schedules, and staff coverage by department.",
      ],
      [
        "Patient check-in and check-out",
        "Kiosk, mobile and front-desk check-in, copay prompts, follow-up booking and visit summaries at checkout.",
      ],
    ],
  },
  {
    title: "Engagement and Communication",
    icon: "MessagesSquare",
    features: [
      [
        "Patient portal",
        "Self-scheduling, forms, documents, visit summaries, payments and secure messaging, on web and mobile.",
      ],
      [
        "Patient communication management",
        "Campaigns, recalls and notifications by channel, with consent and opt-out tracking.",
      ],
      [
        "Secure patient messaging",
        "Encrypted, logged two-way messaging between patients and care teams, routed to the right inbox.",
      ],
    ],
  },
  {
    title: "Care Coordination",
    icon: "Route",
    features: [
      [
        "Referral management",
        "Incoming and outgoing referrals tracked from receipt to scheduled visit to closed loop.",
      ],
      [
        "Patient follow-up management",
        "Recall lists, overdue follow-up alerts and care-gap outreach.",
      ],
      [
        "Billing workflow integration",
        "Insurance details, copays and completed visit data passed to billing.",
      ],
    ],
  },
  {
    title: "Control and Insight",
    icon: "BarChart3",
    visual: "analytics",
    features: [
      [
        "Patient reporting and analytics",
        "No-show rates, lead time to appointment, wait times, intake completion, portal adoption and referral leakage.",
      ],
      [
        "Role-based access control",
        "Permissions by role, department and location, following the minimum-necessary principle.",
      ],
      [
        "Audit logs",
        "A record of every view, edit, export and message, with user and timestamp.",
      ],
      [
        "Multi-location management",
        "Shared patient records and central scheduling across sites, with location-specific settings.",
      ],
    ],
  },
];

export const benefits = [
  [
    "Fewer duplicate and incomplete records",
    "Identity matching and required-field rules at registration catch problems early.",
  ],
  [
    "Less time spent on paperwork",
    "Online intake replaces clipboards and re-typing.",
  ],
  [
    "Fewer no-shows and empty slots",
    "Automated reminders, easy rescheduling and waitlist backfill keep calendars full.",
  ],
  [
    "Shorter waits",
    "Pre-registration and digital check-in shorten time in the lobby.",
  ],
  [
    "Better patient experience",
    "Patients can book, message, sign forms and pay when it suits them.",
  ],
  [
    "Closed referral loops",
    "Referrals are tracked to completion, not lost in a fax tray.",
  ],
  [
    "Visibility for managers",
    "Real-time flow and analytics show bottlenecks, staffing gaps and access problems.",
  ],
] as const;

export const organizationRows = [
  [
    "Hospitals",
    "A hospital patient management system needs an enterprise master patient index, outpatient department scheduling, pre-admission registration and patient flow across departments",
  ],
  [
    "Private medical practices",
    "Fast registration, online booking, reminders, a simple portal and integration with the existing PM/EMR",
  ],
  [
    "Primary care clinics",
    "Recall and preventive-care outreach, chronic-care follow-ups, panel management and same-day access",
  ],
  [
    "Specialty clinics",
    "Referral intake, prior-visit documentation, procedure scheduling and specialty-specific intake forms",
  ],
  [
    "Multi-specialty practices",
    "Shared patient records across departments, cross-specialty scheduling and internal referrals",
  ],
  [
    "Outpatient centers",
    "Procedure scheduling with prep instructions, resource and room booking, post-procedure follow-up",
  ],
  [
    "Urgent care centers",
    "Online check-in, live wait times, walk-in queue management and quick registration",
  ],
  [
    "Diagnostic centers",
    "Order-based scheduling, prep instructions, equipment calendars and results notification",
  ],
  [
    "Healthcare networks",
    "Central scheduling across locations, an enterprise patient index and network-wide reporting",
  ],
  [
    "Telehealth providers",
    "Virtual visit booking, digital intake, identity verification, multi-state provider licensing rules and video visit links",
  ],
];

export const registrationItems = [
  "Required-field validation for name, date of birth, sex, address, phone and insurance",
  "Address and phone checks to catch formatting errors",
  "Duplicate detection using probabilistic matching on name, date of birth, phone, address and identifiers, with a review queue for likely matches",
  "Photo and ID capture to reduce identity mistakes and medical identity fraud",
  "Insurance card capture with eligibility checks handed off to billing",
];

export const intakeItems = [
  "Mobile-friendly forms sent by text or email before the visit",
  "Conditional questions that adapt to visit type, age or answers",
  "Electronic signatures for consents, HIPAA privacy notice acknowledgments and financial policies",
  "Patient-reported history, medications and allergies, flagged for clinician review before they reach the clinical record",
  "Language options and accessible design for patients with disabilities",
];

export const schedulingItems = [
  "Visit-type templates with set durations, required resources and eligible providers",
  "Online self-scheduling limited to suitable visit types",
  "Rescheduling and cancellation by patients, with automatic slot release",
  "Waiting list management that offers freed slots to waitlisted patients automatically",
  "No-show tracking by patient, provider, visit type and lead time, with policies for repeat no-shows",
  "Multi-provider and multi-location calendars with overbooking controls",
];

export const messageRows = [
  [
    "Booking confirmation",
    "Text, email",
    "Confirms date, time, location or video link",
  ],
  [
    "Pre-visit reminder",
    "Text, email, voice",
    "Reduces no-shows; allows confirm, cancel or reschedule",
  ],
  ["Intake request", "Text, email", "Gets forms done before arrival"],
  ["Prep instructions", "Text, email, portal", "Procedure or test preparation"],
  ["Running-late notice", "Text", "Manages wait-time expectations"],
  [
    "Follow-up and recall",
    "Text, email, portal",
    "Brings patients back for care that is due",
  ],
  [
    "Post-visit survey",
    "Text, email",
    "Patient feedback and experience measurement",
  ],
];

export const dataRows = [
  [
    "Demographics, contacts, preferences",
    "✔ (source of truth in most designs)",
    "Synced copy",
  ],
  ["Insurance and guarantor", "✔", "Synced copy"],
  ["Appointments and visit status", "✔", "Synced copy"],
  ["Consents, forms, administrative documents", "✔", "Often linked"],
  ["Patient-reported intake data", "✔ captured", "✔ after clinician review"],
  [
    "Diagnoses, clinical notes, orders, results",
    "Summary or link only",
    "✔ source of truth",
  ],
];

export const portalItems = [
  ["Self-service", "booking, rescheduling, forms, documents and payments"],
  ["Communication", "secure messages, notifications and visit summaries"],
  [
    "Information access",
    "upcoming appointments, care instructions and, through clinical system integration, results and records",
  ],
  [
    "Family access",
    "proxy access for parents, caregivers and guardians, with age-based rules for minors",
  ],
  [
    "Accessibility",
    "mobile-first design, multiple languages and accessible interfaces. HHS's Section 504 rule has adopted WCAG 2.1 AA as the web accessibility standard for many recipients of HHS funding.",
  ],
] as const;

export const workflowItems = [
  [
    "Automatic tasks",
    "a missing consent creates a front-desk task, and a no-show creates a rescheduling task",
  ],
  [
    "Patient journey tracking",
    "status boards show each patient's stage across departments",
  ],
  [
    "Referral management",
    "incoming referrals are logged, scheduled and tracked. Outgoing referrals are followed until the specialist visit is complete.",
  ],
  [
    "Care coordination",
    "care coordinators see patients with open care gaps, pending referrals or recent discharges and work them from one queue",
  ],
  [
    "Department management",
    "routing rules, department-specific queues and hand-off notifications",
  ],
  [
    "Escalations",
    "alerts when a patient waits too long, a referral stalls or a follow-up is overdue",
  ],
] as const;

export const integrationRows = [
  [
    "EMR",
    "Demographics, appointments, intake data, visit status",
    "HL7 v2 ADT/SIU, FHIR (Patient, Appointment, QuestionnaireResponse)",
  ],
  [
    "EHR",
    "The same at network scale, plus enterprise patient identity",
    "HL7 v2, FHIR R4/US Core, vendor APIs",
  ],
  [
    "Medical billing software",
    "Insurance, copays, completed visits, patient balances",
    "HL7 ADT/DFT, APIs",
  ],
  [
    "Practice management systems",
    "Shared scheduling and registration",
    "HL7 SIU/ADT, APIs, database sync",
  ],
  [
    "Telemedicine platforms",
    "Virtual visit creation, links and status",
    "Vendor APIs, webhooks",
  ],
  [
    "Laboratory systems",
    "Order-based scheduling, results-ready notifications",
    "HL7 ORM/ORU, FHIR",
  ],
  [
    "Payment gateways",
    "Copays, balances and payment plans online",
    "PCI DSS-compliant gateway APIs, tokenization",
  ],
  [
    "Healthcare APIs",
    "Communication providers, identity verification, analytics, partner apps",
    "REST, FHIR, OAuth 2.0, SMART on FHIR",
  ],
];

export const hipaaRows = [
  [
    "Privacy Rule",
    "Limits how PHI is used and disclosed; minimum-necessary access; patients' right to access their information; rules on communications such as reminders and marketing",
  ],
  [
    "Security Rule",
    "Requires administrative, physical and technical safeguards for electronic PHI, based on a documented risk analysis",
  ],
  [
    "Breach Notification Rule",
    "Requires notification to affected individuals, HHS and, for larger breaches, the media. Audit logs are needed to determine what was accessed.",
  ],
  [
    "Business Associate Agreements",
    "Hosting, messaging, telehealth, payment and development vendors that handle PHI typically need BAAs",
  ],
];

export const safeguards = [
  "Authentication and authorization: unique user IDs, MFA, SSO and session timeouts. Patient portal logins use secure identity verification and account recovery.",
  "Role-based access control by role, department and location",
  "Encryption in transit (TLS 1.2+) and at rest (AES-256)",
  "Audit logging of access, edits, exports and messages",
  "Secure patient communication: PHI stays inside the portal, and text or email notifications point to it, unless the patient chooses otherwise after being informed of the risks",
  "Data backup and recovery: encrypted, tested backups and documented recovery procedures",
  "Secure hosting on HIPAA-eligible cloud services under a BAA",
];

export const cloudRows = [
  [
    "Patient-facing access",
    "Portal, online booking and digital intake are native",
    "Requires exposing in-house servers securely to the internet",
  ],
  [
    "Multi-location",
    "Shared real-time data across sites",
    "Requires replication or VPN",
  ],
  ["Upfront cost", "Lower", "Higher (hardware, licenses, IT)"],
  ["Scalability", "On demand", "Limited by hardware"],
  ["Updates", "Central, little downtime", "Manual, per server"],
  [
    "Security responsibility",
    "Shared with a HIPAA-eligible provider under a BAA",
    "Entirely in-house",
  ],
  [
    "Best fit",
    "Practices, clinics, networks, telehealth providers",
    "Organizations with strict internal hosting mandates",
  ],
];

export const customReasons = [
  "You need one patient experience across scheduling, intake, messaging and payments",
  "Your workflows are distinctive: complex referral networks, specialty intake, multi-step procedures, care programs",
  "You run several clinical systems after growth or acquisitions and need one patient layer above them",
  "You are a digital health or telehealth company where the patient experience is the product",
  "Per-provider or per-message pricing keeps rising with growth",
];

export const buildItems = [
  "Custom patient management workflows matched to your front-office and care-team processes",
  "Patient portal development for web and native mobile apps",
  "Appointment management with your scheduling rules, waitlists and reminders",
  "Healthcare API integration and EMR/EHR integration using HL7 and FHIR",
  "Secure patient data management with encryption, access control and audit trails",
  "Custom dashboards, reporting and analytics for access, flow and engagement",
  "Cloud-based architecture and scalable web and mobile applications that grow with your network",
];

export const implementationSteps = [
  [
    "Requirements discovery",
    "We define goals, users, locations, patient volumes, channels, integrations and compliance requirements.",
  ],
  [
    "Healthcare workflow analysis",
    "We map today's patient journey from booking to follow-up, including exceptions such as walk-ins, no-shows, referrals and minors.",
  ],
  [
    "System architecture",
    "We design the data model (including the master patient index), integration architecture, security controls and deployment model.",
  ],
  [
    "UI/UX design",
    "We prototype staff screens and patient-facing flows and test them with front-desk staff and patients, with accessibility built in.",
  ],
  [
    "Development",
    "We build in agile sprints with regular demos, starting with the highest-impact workflow.",
  ],
  [
    "Third-party integrations",
    "We connect EMR/EHR, billing, PM, telemedicine, labs, payment and messaging providers.",
  ],
  [
    "Data migration",
    "We migrate patient demographics, appointments, documents and preferences, with duplicate cleanup and reconciliation.",
  ],
  [
    "Quality assurance",
    "We run functional, integration, accessibility, performance and security testing.",
  ],
  [
    "Deployment",
    "We use a phased rollout by location or department, with fallback procedures.",
  ],
  [
    "Staff training",
    "We provide role-based training for front desk, schedulers, coordinators and administrators, plus patient-facing guides.",
  ],
  [
    "Ongoing maintenance",
    "Monitoring, updates, security patches and feature improvements based on usage data.",
  ],
] as const;

export const challengeRows = [
  [
    "High no-show rates",
    "Multi-channel reminders, two-way confirmation, easy rescheduling and waitlist backfill",
  ],
  [
    "Duplicate patient records",
    "Master patient index, probabilistic matching and merge review queues",
  ],
  [
    "Long lobby waits",
    "Pre-registration, digital intake, mobile check-in and live flow boards",
  ],
  [
    "Phone overload",
    "Online self-scheduling, portal messaging and automated status updates",
  ],
  [
    "Lost referrals",
    "Referral tracking from receipt to completed visit, with stall alerts",
  ],
  [
    "Incomplete forms at arrival",
    "Pre-visit intake links with reminders and completion tracking",
  ],
  [
    "Disconnected tools",
    "One patient layer integrated with EMR, billing and telehealth",
  ],
  [
    "Low portal adoption",
    "Mobile-first design, simple sign-up and features patients actually need",
  ],
  [
    "Poor visibility for managers",
    "Dashboards for access, wait times, no-shows and engagement",
  ],
];

export const whyClickmasters = [
  [
    "We scope before we build",
    "You get the scope, timeline and quote before development starts.",
  ],
  [
    "Patient-experience design",
    "Our UI/UX team designs and tests patient-facing and staff screens with real users, with accessibility in mind.",
  ],
  [
    "Web and mobile delivery",
    "Our web and mobile app development teams build the portal and apps patients actually use.",
  ],
  [
    "Integration expertise",
    "Our API development and integration services cover EMR, EHR, billing, telemedicine and payment connections.",
  ],
  [
    "Security-aware engineering",
    "Encryption, access control, audit trails and secure cloud architecture are built in, with no compliance promises we can't support.",
  ],
  [
    "Full lifecycle",
    "QA and testing, cloud and DevOps, and long-term maintenance and support after launch.",
  ],
  [
    "Connected healthcare products",
    "Our healthcare suite also covers EMR, EHR, practice management, clinic, hospital, billing and telemedicine software, so your patient platform can be planned as part of a connected system.",
  ],
] as const;

export const patientFaqs = [
  {
    question: "What is patient management software?",
    answer:
      "Patient management software manages the administrative side of patient care: registration, demographics, digital intake, appointment scheduling, reminders, check-in and check-out, patient communication, portal access, referrals and follow-ups. It keeps one accurate patient profile and connects to clinical and billing systems.",
  },
  {
    question:
      "What is the difference between patient management software and an EMR?",
    answer:
      "Patient management software handles patient administration and engagement: who the patient is, how to reach them, when they're booked and what's outstanding. An EMR holds the clinical record: diagnoses, notes, medications, orders and results. They share demographics and appointment data through integration, but clinical documentation stays in the EMR.",
  },
  {
    question:
      "Is patient management software the same as practice management software?",
    answer:
      "They overlap on scheduling and registration. Practice management software is the system that runs the business of a practice, so it also covers billing, claims and practice finances. Patient management software goes deeper into intake, communication, portals, patient flow and care coordination. Many organizations use both, connected through shared patient and appointment data.",
  },
  {
    question: "What features should a patient management system include?",
    answer:
      "Core features include registration and profiles, digital intake, a master patient index, appointment scheduling and reminders, provider scheduling, check-in and check-out, a patient portal, secure messaging, document management, referral and follow-up management, billing integration, reporting, role-based access, audit logs and multi-location support.",
  },
  {
    question: "How does patient management software reduce no-shows?",
    answer:
      "It sends automated reminders on the patient's preferred channel, allows two-way confirmation and easy rescheduling, fills cancelled slots from a waiting list, and tracks no-show patterns by patient, provider and visit type, so the organization can adjust policies and outreach.",
  },
  {
    question: "Is patient management software HIPAA compliant?",
    answer:
      "No software is \"HIPAA certified\"; HHS doesn't certify products. A patient management platform can be designed to support HIPAA compliance through access controls, encryption, audit logging, secure messaging and HIPAA-eligible hosting under a BAA. Compliance also depends on your organization's policies, training, contracts and implementation.",
  },
  {
    question: "Can patient management software integrate with our EHR or EMR?",
    answer:
      "Yes. Common methods include HL7 v2 messages (ADT for patient data, SIU for scheduling), FHIR APIs (Patient, Appointment, QuestionnaireResponse resources) and vendor-specific APIs. The right approach depends on what your clinical system supports.",
  },
  {
    question: "Can patients use the system from their phones?",
    answer:
      "Yes. Modern patient management software includes mobile-friendly or native mobile apps for booking, intake forms, check-in, secure messaging, documents and payments. Mobile-first design is usually the biggest factor in patient adoption.",
  },
  {
    question: "Can you send appointment reminders by text message under HIPAA?",
    answer:
      "Generally, yes. Appointment reminders are a normal part of treatment communication, and reminders should include only minimal information. Automated texts and calls must also follow the TCPA and carrier rules on consent and opt-out, so the system should record consent and opt-outs for each channel.",
  },
  {
    question: "Does patient management software work for multiple locations?",
    answer:
      "Yes. A multi-location patient management system uses one shared patient index and central scheduling across sites, with location-specific providers, hours, visit types and reporting. A cloud deployment makes this much simpler.",
  },
  {
    question: "How much does custom patient management software cost?",
    answer:
      "Cost depends on the modules, patient-facing apps (web, iOS, Android), number of locations, integrations, data migration and security requirements. We provide a scoped quote after discovery rather than a generic price.",
  },
  {
    question: "How long does it take to build a patient management system?",
    answer:
      "A focused first release, such as scheduling, reminders and digital intake, typically takes a few months. A full platform with portal, mobile apps, referrals and several integrations takes longer. Phased releases let you start using core features early.",
  },
];

const dir = "/products/patient";

export const patientImages = {
  dashboard: {
    src: `${dir}/patient-management-software-dashboard.svg`,
    width: 1440,
    height: 900,
    alt: "Patient management software dashboard showing today's appointments, check-in status and waiting room flow",
  },
  intake: {
    src: `${dir}/digital-patient-intake-smartphone.svg`,
    width: 1440,
    height: 900,
    alt: "Digital patient intake form on a smartphone with insurance card upload and electronic consent signature",
  },
  scheduling: {
    src: `${dir}/patient-scheduling-calendar-waitlist.svg`,
    width: 1440,
    height: 900,
    alt: "Patient scheduling software calendar with provider availability, waitlist and automated appointment reminders",
  },
  portal: {
    src: `${dir}/patient-portal-app.svg`,
    width: 1440,
    height: 900,
    alt: "Patient portal app showing upcoming appointments, secure messages and online bill payment",
  },
  analytics: {
    src: `${dir}/patient-management-analytics.svg`,
    width: 1440,
    height: 900,
    alt: "Patient management system analytics showing no-show rate, average wait time and portal adoption by location",
  },
  coordination: {
    src: `${dir}/referral-care-coordination-board.svg`,
    width: 1440,
    height: 900,
    alt: "Patient workflow management software referral tracking and care coordination board",
  },
  journey: {
    src: `${dir}/patient-journey-workflow.svg`,
    width: 1400,
    height: 600,
    alt: "Patient journey through a patient management system from online booking to check-in, visit and follow-up",
  },
  integrations: {
    src: `${dir}/patient-management-integrations.svg`,
    width: 1200,
    height: 820,
    alt: "Patient management software integration diagram with EMR, EHR, billing, telemedicine, labs and payments",
  },
} as const;
