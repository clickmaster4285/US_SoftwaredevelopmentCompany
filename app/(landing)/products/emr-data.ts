// Content for /products/healthcare-medical-software/electronic-medical-records-emr-software.
// Source: electronic-medical-records-emr-software-seo-content.docx (prepared 18 Nov 2026).
// FAQ text is reused verbatim by the FAQPage JSON-LD, so edit both together.

export const EMR_PATH =
  "/products/healthcare-medical-software/electronic-medical-records-emr-software";

export const emrTitle =
  "Electronic Medical Records (EMR) Software | Clickmasters";

export const emrDescription =
  "Electronic medical health records software and custom Electronic Medical Records (EMR) software for US practices, hospitals and clinics: charting, e-prescribing, lab integration, FHIR APIs and HIPAA-aware security.";

export const PRODUCT_NAME = "Electronic Medical Records (EMR) Software";

export const structuredUses = [
  "Flag a drug–allergy conflict before a prescription is signed",
  "Show a patient's A1c trend across the last eight visits",
  "List every patient overdue for a colorectal screening",
  "Pre-fill the problem list and medications into today's note",
  "Produce the documentation a coder needs to assign ICD-10-CM and CPT codes",
];

export const emrVsEhrRows = [
  [
    "Scope",
    "The clinical record held by one practice or organization",
    "A longitudinal record built to follow the patient across organizations",
  ],
  [
    "Main purpose",
    "Diagnosis, treatment, documentation and follow-up inside the practice",
    "Sharing and combining records among hospitals, specialists, labs and patients",
  ],
  [
    "Data sharing",
    "Mostly internal; external exchange is added through integrations",
    "Designed for exchange from the start (HL7, FHIR, C-CDA, health information exchanges)",
  ],
  [
    "Typical buyer",
    "Physician practices, specialty clinics, small medical groups",
    "Hospitals, health systems, ACOs, large multi-site networks",
  ],
  ["Build complexity", "Lower to moderate", "Moderate to high"],
];

export const visitSteps = [
  [
    "Before the visit",
    "The appointment is booked, insurance eligibility is checked, and the patient completes intake forms and history questionnaires online. The answers go straight into the chart, so nobody has to re-type them.",
  ],
  [
    "Check-in and rooming",
    "Front-desk staff confirm demographics. A medical assistant records vitals, reviews medications and allergies, and documents the chief complaint.",
  ],
  [
    "The encounter",
    "The physician opens a note template for the visit type. Prior history, the problem list and recent results are already on screen. The clinician documents the HPI, exam, assessment and plan, adding diagnoses from a coded list.",
  ],
  [
    "Orders and prescriptions",
    "Labs and imaging are ordered electronically. Prescriptions are sent to the patient's pharmacy, and the system checks for drug interactions, allergies and duplicate therapy before transmission.",
  ],
  [
    "Results",
    "Lab results come back into the chart as discrete values, not scanned PDFs. Abnormal values are flagged and routed to the ordering provider's inbox to sign.",
  ],
  [
    "Close-out and billing",
    "The signed note, diagnoses and procedures pass to the billing workflow. Follow-up tasks, referrals and recall reminders are created automatically.",
  ],
] as const;

export type EmrFeature = { title: string; icon: string; bullets: string[] };

export type EmrFeatureGroup = {
  title: string;
  summary: string;
  visuals: (
    | "documentation"
    | "scheduling"
    | "prescribing"
    | "labs"
    | "reports"
  )[];
  features: EmrFeature[];
};

export const featureGroups: EmrFeatureGroup[] = [
  {
    title: "The clinical record",
    summary: "History, the chart itself and the notes clinicians write.",
    visuals: ["documentation"],
    features: [
      {
        title: "Patient Medical History Management",
        icon: "History",
        bullets: [
          "Structured problem list with ICD-10-CM coding, onset dates and active/resolved status",
          "Medication list with RxNorm-normalized drugs, dosage, start and stop dates and reconciliation history",
          "Allergies and intolerances with reaction type and severity",
          "Past medical, surgical, family and social history (including tobacco, alcohol and occupational exposure)",
          "Immunization history, with optional connection to state immunization registries",
        ],
      },
      {
        title: "Digital Patient Charts",
        icon: "FolderHeart",
        bullets: [
          "One chart view showing demographics, alerts, problems, medications, allergies, vitals and recent encounters",
          "Encounter timeline you can filter by visit type, provider, diagnosis or date",
          "Flowsheets and trend graphs for vitals, labs and specialty measurements (BMI, blood pressure, INR, HbA1c)",
          "Document management for referral letters, outside records, consent forms and imaging reports, with indexing so files can be found again",
        ],
      },
      {
        title: "Clinical Documentation",
        icon: "NotebookPen",
        bullets: [
          "Specialty-specific note templates (SOAP, H&P, procedure notes, well visits, follow-ups)",
          'Smart phrases, macros and pick-lists that cut typing without producing copy-paste "note bloat"',
          "Optional voice dictation and ambient-documentation integration",
          "Note signing, co-signing for residents or mid-level providers, and addenda that keep the original note intact",
          "Documentation prompts that support accurate E/M level selection",
        ],
      },
    ],
  },
  {
    title: "Scheduling and prescribing",
    summary: "Getting the patient in, and getting the right medication out.",
    visuals: ["scheduling", "prescribing"],
    features: [
      {
        title: "Appointment Scheduling",
        icon: "CalendarCheck",
        bullets: [
          "Provider, room and equipment calendars with appointment types and durations",
          "Patient self-scheduling, waitlists and automated SMS/email reminders",
          "Recall lists for chronic-care and preventive follow-ups",
          "Two-way sync with practice management or clinic software, so there is a single source of truth for bookings",
        ],
      },
      {
        title: "E-Prescription Workflows",
        icon: "Pill",
        bullets: [
          "Electronic prescribing to retail and mail-order pharmacies using the NCPDP SCRIPT standard through a certified e-prescribing network",
          "Drug–drug, drug–allergy and duplicate-therapy checking through a licensed drug database",
          "Refill and change requests received from pharmacies and routed to the prescriber's queue",
          "Electronic Prescribing of Controlled Substances (EPCS) support, which requires identity proofing and two-factor authentication under DEA rules",
          "Prescription Drug Monitoring Program (PDMP) lookup, where state rules require it",
        ],
      },
    ],
  },
  {
    title: "Results and clinical safety",
    summary: "Discrete results, decision support and clean patient data.",
    visuals: ["labs"],
    features: [
      {
        title: "Lab and Diagnostic Integration",
        icon: "FlaskConical",
        bullets: [
          "Electronic lab orders and results through HL7 v2 (ORM/ORU) or FHIR interfaces",
          "LOINC-coded results stored as discrete values, so they can be graphed and checked by rules",
          "Abnormal and critical value flagging with routing to the right provider",
          "Imaging orders and report retrieval, with links to PACS viewers where available",
        ],
      },
      {
        title: "Clinical Decision Support",
        icon: "HeartPulse",
        bullets: [
          "Alerts for interactions, allergies, contraindications and dose ranges",
          "Preventive care and screening reminders based on age, sex and risk factors",
          "Order sets and care protocols for common conditions",
          "Alert tiers and tuning to limit alert fatigue. This matters as much as the alerts themselves: clinicians ignore systems that interrupt them constantly.",
        ],
      },
      {
        title: "Patient Information Management",
        icon: "IdCard",
        bullets: [
          "Demographics, insurance details, emergency contacts, preferred language and communication preferences",
          "Consent management and records of disclosure preferences",
          "Patient portal access to visit summaries, results, medications and secure messaging",
          "Duplicate-patient detection and merge tools to protect record integrity",
        ],
      },
    ],
  },
  {
    title: "Insight and control",
    summary: "Reporting, access permissions and a full audit history.",
    visuals: ["reports"],
    features: [
      {
        title: "Reporting and Analytics",
        icon: "BarChart3",
        bullets: [
          "Operational dashboards: visit volumes, unsigned notes, open orders, no-show rates",
          "Clinical registries for chronic conditions (diabetes, hypertension, COPD)",
          "Quality measure reporting to support value-based care and payer programs",
          "Data export to analytics warehouses for population health work",
        ],
      },
      {
        title: "Role-Based Access Control (RBAC)",
        icon: "UserCheck",
        bullets: [
          "Permissions by role (physician, nurse, medical assistant, front desk, biller, administrator)",
          "Minimum-necessary access, so staff see only the data their job requires",
          "Location and department restrictions for multi-site groups",
          'Controlled "break-the-glass" emergency access with mandatory justification and review',
        ],
      },
      {
        title: "Audit Trails",
        icon: "FileClock",
        bullets: [
          "Record of every view, create, edit, print, export and delete action, with user, timestamp and patient",
          "Audit logs that cannot be altered, kept for the retention period your compliance policy sets",
          "Access reports for privacy officers, plus alerts for unusual access patterns, such as staff opening records of co-workers or public figures",
        ],
      },
    ],
  },
];

export const benefits = [
  [
    "Readable, complete records",
    "No illegible handwriting or missing pages. Each entry is dated and tied to the person who made it.",
  ],
  [
    "Faster access to information",
    "A clinician sees history, medications and results in seconds instead of searching a paper file or calling another office.",
  ],
  [
    "Safer prescribing",
    "Automated interaction and allergy checks catch errors before a prescription is sent.",
  ],
  [
    "Fewer repeated tests",
    "Recent results are visible in the chart, so tests are not reordered by accident.",
  ],
  [
    "Cleaner billing",
    "Structured documentation supports accurate coding and fewer denials caused by missing documentation.",
  ],
  [
    "Better follow-up",
    "Recall lists, reminders and registries keep preventive and chronic-care patients from being forgotten.",
  ],
  [
    "Practice insight",
    "Reports show bottlenecks, such as unsigned notes, open orders and scheduling gaps, that are invisible on paper.",
  ],
  [
    "Readiness for value-based care",
    "Quality measures and population data depend on structured clinical records.",
  ],
] as const;

export type LinkSpec = { anchor: string; href: string };

export const organizations: {
  title: string;
  icon: string;
  text: string;
  link?: LinkSpec;
}[] = [
  {
    title: "Independent Physician Practices",
    icon: "Stethoscope",
    text: "Small practices need speed and simplicity: fast note templates, simple scheduling, e-prescribing and a clean handoff to billing. Every extra click adds up over 25–30 visits a day, so the interface matters more than the length of the feature list.",
  },
  {
    title: "Private and Outpatient Clinics",
    icon: "Building2",
    text: "Clinics with walk-ins, several exam rooms and shared staff need patient flow tracking, room status and quick documentation for high-volume visits. Many clinics pair their EMR with clinic management software that handles front-desk operations, queues and daily administration. The EMR then stays focused on the clinical record.",
    link: {
      anchor: "clinic management software",
      href: "/products/healthcare-medical-software/clinic-management-software",
    },
  },
  {
    title: "Multi-Specialty Practices and Medical Groups",
    icon: "Layers",
    text: "Groups need specialty-specific templates (cardiology, orthopedics, dermatology, pediatrics, OB/GYN), shared patient records across departments, internal referrals, and permissions set by location and specialty.",
  },
  {
    title: "Hospitals and Hospital Outpatient Departments",
    icon: "Hospital",
    text: "Hospital environments need EMR components that connect to the hospital information system, ADT feeds, inpatient pharmacy, lab and radiology. Order management, clinical decision support and audit requirements are much heavier.",
  },
  {
    title: "Behavioral Health Providers",
    icon: "Brain",
    text: "Behavioral health needs treatment plans, therapy session notes, outcome measurement scales and stricter segregation of sensitive records, including substance use disorder records covered by 42 CFR Part 2.",
  },
  {
    title: "Therapists and Therapy Practices",
    icon: "Brain",
    text: "EMR systems for therapists need treatment plans, psychotherapy notes, outcome scales, scheduling and secure client communication. Access controls should separate routine administrative records from more sensitive clinical notes.",
  },
  {
    title: "HealthTech Startups",
    icon: "Rocket",
    text: "Startups building a new care model, such as virtual-first care, remote monitoring or specialty platforms, often need an EMR core they own instead of licensing a closed system. The usual approach is an MVP covering one workflow end to end, then expanding modules once the model is proven.",
  },
];

export const cloudVsOnPremRows = [
  [
    "Upfront cost",
    "Lower. No server hardware to buy",
    "Higher. Servers, storage, networking and licenses",
  ],
  [
    "Ongoing cost",
    "Predictable hosting and support costs",
    "Hardware refresh, IT staff, power and maintenance",
  ],
  [
    "Access",
    "Secure access from any location and device",
    "Usually limited to the facility network or VPN",
  ],
  [
    "Scalability",
    "Add locations, users and storage quickly",
    "Needs hardware planning and purchases",
  ],
  [
    "Security responsibility",
    "Shared: the cloud provider secures the infrastructure; you and your developer secure the application, access and configuration",
    "Fully on your organization",
  ],
  [
    "HIPAA requirement",
    "Requires a Business Associate Agreement (BAA) with the hosting provider and HIPAA-eligible services",
    "Physical, network and administrative safeguards managed in-house",
  ],
  [
    "Updates",
    "Rolled out centrally with less downtime",
    "Manual and often delayed",
  ],
  [
    "Disaster recovery",
    "Multi-zone backups and failover can be built in",
    "Needs separate backup sites and procedures",
  ],
  [
    "Best fit",
    "Most practices, clinics, growing groups and startups",
    "Organizations with strict data residency needs or large existing data centers",
  ],
];

export const hl7Messages = [
  ["ADT", "patient admissions, discharges, transfers and demographic updates"],
  ["ORM / OML", "lab and diagnostic orders"],
  ["ORU", "results"],
  ["SIU", "scheduling information"],
  ["DFT", "financial transactions sent to billing"],
] as const;

export const integrationTopics: {
  title: string;
  text: string;
  link?: LinkSpec;
}[] = [
  {
    title: "FHIR APIs",
    text: "HL7 FHIR (Fast Healthcare Interoperability Resources) is the modern, RESTful standard for health data exchange. A FHIR-ready EMR exposes resources such as Patient, Encounter, Condition, Observation, MedicationRequest and AllergyIntolerance through secure APIs. With SMART on FHIR and OAuth 2.0, approved third-party apps can launch inside the EMR. FHIR R4 and the US Core profiles are the current reference point for US interoperability. They are also tied to ONC certification and the 21st Century Cures Act rules on patient data access and information blocking.",
  },
  {
    title: "Laboratory Systems",
    text: "Lab interfaces send orders out and bring results back as discrete, LOINC-coded values. Practices with in-house labs, or reference labs that need tighter workflow control, often run a dedicated laboratory information management system (LIMS) to handle sample tracking, testing and quality control. The EMR integration makes sure the ordering physician receives verified results in the patient chart, linked to the original order.",
    link: {
      anchor: "laboratory information management system (LIMS)",
      href: "/products/healthcare-medical-software/laboratory-information-management-system-lims",
    },
  },
  {
    title: "Billing Platforms",
    text: "Signed encounters, diagnosis codes, procedure codes and modifiers flow from the EMR to billing or revenue cycle systems. These systems then generate claims (837P/837I), process remittances (835) and check eligibility (270/271) through clearinghouses. Good mapping here prevents coding errors and lost charges.",
  },
  {
    title: "Pharmacy Systems",
    text: "E-prescribing connects the EMR to pharmacies through a certified e-prescribing network. Refill requests, change requests and cancellations flow back, and medication history can be pulled in to support medication reconciliation.",
  },
  {
    title: "Hospital Information Systems (HIS)",
    text: "For hospital-affiliated practices, the EMR exchanges ADT, orders, results and clinical documents with the hospital's HIS. This often uses C-CDA documents for transitions of care and discharge summaries.",
  },
  {
    title: "Clinical Terminologies",
    text: "Interoperability depends on shared vocabularies as well as message formats. A well-built EMR maps data to ICD-10-CM (diagnoses), CPT/HCPCS (procedures), SNOMED CT (clinical findings), LOINC (lab tests) and RxNorm (medications).",
  },
];

export const safeguardGroups = [
  {
    title: "Technical Safeguards",
    icon: "Lock",
    items: [
      "Encryption of PHI in transit (TLS 1.2+) and at rest (AES-256), with managed key handling",
      "Unique user identification and strong authentication, including multi-factor authentication",
      "Automatic session timeouts and device-level protections",
      "Audit controls that log access to and changes in PHI",
      "Integrity controls to detect improper changes to records",
      "Least-privilege access through role-based permissions",
    ],
  },
  {
    title:
      "Administrative and Operational Safeguards (supported by the software)",
    icon: "ClipboardList",
    items: [
      "User provisioning and de-provisioning workflows",
      "Access review reports for privacy and security officers",
      "Breach investigation support through searchable audit logs",
      "Configurable retention and secure disposal rules",
    ],
  },
  {
    title: "Infrastructure Safeguards",
    icon: "CloudCog",
    items: [
      "Hosting on HIPAA-eligible cloud services covered by a signed Business Associate Agreement",
      "Network segmentation, firewalls and intrusion detection",
      "Encrypted, tested backups and documented disaster recovery procedures",
      "Vulnerability scanning and penetration testing before go-live and on a regular schedule after",
    ],
  },
] as const;

export const customReasons = [
  "Specialty workflows that generic templates handle poorly",
  "A new care model (virtual-first, remote monitoring, concierge, multi-state telehealth)",
  "The need to own your data model, product roadmap and intellectual property",
  "Integration with proprietary devices, platforms or legacy systems",
  "Per-user licensing costs that keep growing as you add providers",
];

export const architecture = [
  [
    "Modular design",
    "Charting, scheduling, e-prescribing and reporting are separate modules, so each can be extended or replaced without destabilizing the rest.",
  ],
  [
    "API-first",
    "FHIR and REST APIs are designed in from the start, so mobile apps, patient portals and partner systems connect without workarounds.",
  ],
  [
    "Multi-tenant or single-tenant",
    "Multi-tenant suits SaaS EMR products serving many practices; single-tenant suits organizations that need full isolation.",
  ],
  [
    "Horizontal scaling",
    "Cloud infrastructure that handles more users, locations and data volume without a redesign.",
  ],
  [
    "Configurable clinical content",
    "Templates, order sets and rules that your clinical leads can maintain without developer involvement.",
  ],
] as const;

export const buildBuyRows = [
  [
    "Buy off-the-shelf",
    "Your workflows are standard, you need to go live fast and you accept the vendor's roadmap",
  ],
  [
    "Extend an existing system",
    "Your core EMR works, but you need custom modules, apps or integrations around it",
  ],
  [
    "Build custom",
    "Your workflows, product model or integration needs are distinctive, or the EMR itself is your product",
  ],
];

export const implementationSteps = [
  [
    "Discovery and workflow mapping",
    "We interview physicians, nurses, front-desk staff, billers and administrators and map current workflows, pain points and must-have integrations.",
  ],
  [
    "Requirements and compliance planning",
    "We define the feature scope, data model, user roles, integration list and security controls, and identify HIPAA, EPCS and state-specific requirements.",
  ],
  [
    "UX design and clinical prototyping",
    "We design charting screens and run clickable prototypes with real clinicians before development starts.",
  ],
  [
    "Agile development",
    "We build in short sprints with regular demos, starting with the workflows that deliver the most value.",
  ],
  [
    "Integration build and testing",
    "We connect labs, pharmacy networks, billing and other systems, and test them with sample and edge-case messages.",
  ],
  [
    "Data migration",
    "We extract, clean, map and validate data from your legacy EMR or digitized paper records, with reconciliation reports to confirm accuracy.",
  ],
  [
    "Quality assurance and security testing",
    "We run functional, regression, performance, accessibility and penetration testing before any PHI goes live.",
  ],
  [
    "Training and go-live",
    "We provide role-based training, super-user programs, and a phased or parallel go-live to limit disruption.",
  ],
  [
    "Post-launch support and optimization",
    "We monitor the system, fix issues, refine templates and develop new features based on real usage.",
  ],
] as const;

export const challengeRows = [
  [
    "Physician burnout and documentation burden",
    "Too many clicks, rigid templates, duplicated data entry",
    "Specialty templates, smart defaults, pre-filled history and usability testing with real clinicians",
  ],
  [
    "Alert fatigue",
    "Every rule fires a pop-up at the same priority",
    "Tiered alerts, passive reminders for low-risk items and regular alert-rule review",
  ],
  [
    "Poor adoption",
    "Staff were not involved in design; training was too generic",
    "Clinician involvement from discovery, role-based training and super-users in each department",
  ],
  [
    "Data migration errors",
    "Legacy data is incomplete, unstructured or inconsistently coded",
    "Data profiling, mapping rules, test migrations and reconciliation before cutover",
  ],
  [
    "Integration failures",
    "Interfaces built late, with little testing",
    "Integration planning in discovery, interface engines, message monitoring and error queues",
  ],
  [
    "Note bloat from copy-forward",
    "Copy-paste makes notes long and less trustworthy",
    "Controlled copy-forward, highlighted changes and concise templates",
  ],
  [
    "Downtime risk",
    "Single-server setups and untested backups",
    "Cloud redundancy, tested backups, downtime procedures and read-only fallback access",
  ],
  [
    "Rising licensing costs",
    "Per-provider fees on commercial platforms",
    "Owned custom platform or hybrid model with predictable hosting costs",
  ],
];

export const whyClickmasters = [
  [
    "We scope before we build",
    "Discovery comes first: we map your workflows, integrations and compliance needs before committing to a timeline or budget.",
  ],
  [
    "Full-cycle delivery under one team",
    "Our product, UI/UX design, web and mobile development, QA and testing, and cloud and DevOps services cover the whole lifecycle, from first prototype to long-term maintenance.",
  ],
  [
    "Clinician-centered UX",
    "We design charting screens with your providers and test them before development, because usability decides whether an EMR gets adopted.",
  ],
  [
    "Interoperability-ready architecture",
    "Structured data, standard terminologies and FHIR/HL7-ready interfaces are planned from the first sprint.",
  ],
  [
    "HIPAA-aware engineering",
    "Encryption, access control, audit logging and secure infrastructure are built into the design. We are open about what software can and cannot do for compliance.",
  ],
  [
    "Flexible engagement",
    "Choose a fixed-scope project, an MVP for a new HealthTech product, or a dedicated development team that extends your in-house staff.",
  ],
  [
    "Ownership",
    "For custom builds, the engagement can be structured so your organization owns the codebase and data model.",
  ],
] as const;

export const emrFaqs = [
  {
    question: "What is Electronic Medical Records (EMR) software?",
    answer:
      "Electronic Medical Records software is a digital system that stores and manages a patient's clinical record within a single practice or healthcare organization. It holds the medical history, problem list, medications, allergies, vitals, clinical notes, orders, lab results and treatment plans. Because the data is structured, the system can support e-prescribing, clinical alerts, reporting and billing.",
  },
  {
    question: "What is the difference between EMR and EHR software?",
    answer:
      "An EMR is the clinical record held by one practice and used mainly for diagnosis and treatment inside that organization. An EHR is designed to follow the patient across organizations, combining and sharing records with hospitals, specialists, labs and the patient through interoperability standards. Many modern systems blur the line, but the core difference is how widely the record is meant to be shared.",
  },
  {
    question: "What are the most important features of an EMR system?",
    answer:
      "The core features are patient history management, digital charts, clinical documentation templates, e-prescribing with drug interaction checks, lab order and result integration, clinical decision support, scheduling, a patient portal, reporting, role-based access control and full audit trails. The right mix depends on your specialty and workflows.",
  },
  {
    question: "Is cloud-based EMR software secure?",
    answer:
      "It can be very secure when built and run correctly. That means encryption in transit and at rest, multi-factor authentication, role-based access, audit logging, regular security testing and hosting on HIPAA-eligible cloud services covered by a Business Associate Agreement. Security depends on both the infrastructure and how the application is designed and configured.",
  },
  {
    question: "Is there such a thing as HIPAA-certified EMR software?",
    answer:
      "No. HHS does not certify software as HIPAA compliant. An EMR can include safeguards that support compliance, such as encryption, access controls and audit logs, but compliance depends on how your organization uses the system, its policies, workforce training and agreements with vendors. ONC Health IT Certification is a separate federal program tied to specific criteria and payment programs. It is not a HIPAA certification.",
  },
  {
    question:
      "Can EMR software integrate with labs, billing and pharmacy systems?",
    answer:
      "Yes. EMR systems usually connect to laboratories through HL7 v2 or FHIR interfaces, to billing and practice management systems for charge capture and claims, and to pharmacies through certified e-prescribing networks. Integrations should be planned during discovery, because they affect the data model and the timeline.",
  },
  {
    question: "What is the meaning of an electronic medical record system?",
    answer:
      "An electronic medical record system is software that stores a patient's clinical information for a single practice or healthcare organization. It replaces or supplements a paper chart with digital history, encounters, medications, allergies, orders, results and treatment plans, while providing controlled access and an audit trail.",
  },
  {
    question: "What types of electronic medical record systems are available?",
    answer:
      "Common types include cloud-based systems, on-premise systems, practice or specialty-specific EMRs, hospital EMRs, behavioral-health systems and custom platforms. Buyers should compare deployment model, specialty support, interoperability, reporting, security and total cost rather than relying on a generic feature list.",
  },
  {
    question: "How much do electronic medical record systems cost?",
    answer:
      "EMR system cost depends on the number of providers and locations, selected modules, deployment model, integrations, data migration, security requirements and support. Per-user subscription systems may have lower upfront costs, while custom systems require a discovery and scoped development proposal. The recurring costs of hosting, updates, support and training should be included in the comparison.",
  },
  {
    question: "Which EMR system is appropriate for hospitals or therapists?",
    answer:
      "Hospitals usually need EMR components that connect to admission, discharge and transfer systems, inpatient pharmacy, laboratory and radiology workflows. Therapists generally need focused charting, treatment plans, session notes, scheduling and privacy controls. Requirements differ by setting, so a system should be selected or designed around the organization's actual clinical workflow.",
  },
  {
    question: "What are HL7 and FHIR, and why do they matter for EMR software?",
    answer:
      "HL7 v2 is the long-established messaging standard used for orders, results, admissions and scheduling between clinical systems. FHIR is the newer, API-based standard that exposes health data as resources such as Patient, Observation and MedicationRequest. Supporting both lets an EMR connect with older hospital and lab systems and with modern apps, patient access APIs and US interoperability requirements.",
  },
  {
    question: "How much does custom EMR software development cost?",
    answer:
      "Cost depends on scope: the number of modules, specialties supported, integrations, data migration, compliance requirements, platforms (web, mobile) and deployment model. A focused MVP costs far less than a full multi-specialty platform. Reliable estimates come after discovery, so we provide a scoped proposal once we understand your requirements rather than quoting a generic price.",
  },
  {
    question: "How long does it take to build and implement an EMR system?",
    answer:
      "A focused EMR MVP for one workflow or specialty typically takes a few months. A complete platform with multiple specialties, integrations and data migration takes longer. Implementation adds time for data migration, training and a phased go-live. A phased rollout lets you start using core features while other modules are still in development.",
  },
  {
    question: "Can you migrate data from our current EMR system?",
    answer:
      "Yes, in most cases. Migration involves extracting data from the legacy system, cleaning and mapping it to the new data model, running test migrations and reconciling the results before cutover. How much can be moved as structured data depends on the export options and data quality of the existing system. We assess this during discovery.",
  },
];

const dir = "/products/emr";

export const emrImages = {
  chart: {
    src: `${dir}/emr-digital-patient-chart.svg`,
    width: 1440,
    height: 900,
    alt: "Electronic Medical Records (EMR) software dashboard showing a digital patient chart with problems, medications and vitals",
  },
  tablet: {
    src: `${dir}/emr-tablet-clinical-documentation.svg`,
    width: 1440,
    height: 900,
    alt: "Physician documenting a patient visit in a cloud-based EMR system on a tablet in a medical practice",
  },
  scheduling: {
    src: `${dir}/emr-appointment-scheduling.svg`,
    width: 1440,
    height: 900,
    alt: "EMR appointment scheduling calendar concept with provider columns, appointment types and a recall list",
  },
  prescribing: {
    src: `${dir}/emr-e-prescribing-interaction-check.svg`,
    width: 1440,
    height: 900,
    alt: "EMR e-prescribing screen concept with a drug–allergy interaction alert and pharmacy routing",
  },
  labs: {
    src: `${dir}/emr-lab-results-flowsheet.svg`,
    width: 1440,
    height: 900,
    alt: "EMR lab results flowsheet concept with LOINC-coded values, abnormal flags and an HbA1c trend",
  },
  reports: {
    src: `${dir}/emr-reporting-dashboard.svg`,
    width: 1440,
    height: 900,
    alt: "EMR reporting dashboard concept with visit volume, unsigned notes, open orders and a diabetes registry",
  },
  access: {
    src: `${dir}/emr-role-based-access-audit-trail.svg`,
    width: 1440,
    height: 900,
    alt: "EMR role-based access control matrix and audit trail concept for HIPAA-aware medical records management software",
  },
  workflow: {
    src: `${dir}/emr-patient-visit-workflow.svg`,
    width: 1400,
    height: 560,
    alt: "Patient visit workflow in an EMR system from online intake to signed note and billing",
  },
  integration: {
    src: `${dir}/emr-integration-hl7-fhir-diagram.svg`,
    width: 1200,
    height: 820,
    alt: "EMR software integration diagram connecting lab, pharmacy, billing and hospital systems through HL7 and FHIR",
  },
} as const;
