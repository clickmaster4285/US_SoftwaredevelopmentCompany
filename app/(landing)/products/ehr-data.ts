// Content for /products/healthcare-medical-software/electronic-health-records-ehr-software.
// Source: electronic-health-records-ehr-software-seo-content.docx (prepared 16 Nov 2026).
// FAQ text is reused verbatim by the FAQPage JSON-LD, so edit both together.

export const EHR_PATH =
  "/products/healthcare-medical-software/electronic-health-records-ehr-software";

export const ehrTitle =
  "Electronic Health Records Software | Custom EHR Development";

export const ehrDescription =
  "Custom electronic health records (EHR) software for hospitals, clinics and medical groups: interoperable, secure and built around your workflows.";

export const atAGlance = [
  [
    "Built for",
    "hospitals, medical practices, specialty clinics, diagnostic centers and healthcare networks",
  ],
  [
    "Core capability",
    "longitudinal patient records with structured clinical documentation",
  ],
  [
    "Designed for",
    "standards-based interoperability (HL7® v2, HL7® FHIR®), role-based access and full audit trails",
  ],
  [
    "Delivery model",
    "written scope, phased delivery, and source code owned by your organization",
  ],
];

export const ehrJobs = [
  [
    "Capture",
    "clinicians record encounters, assessments, diagnoses, orders, medications and notes in structured fields and free-text documentation.",
  ],
  [
    "Organize",
    "the system links every entry to one verified patient identity and arranges it by date, encounter, problem and data type.",
  ],
  [
    "Retrieve",
    "authorized users search, filter and view the record, from a single lab value to a ten-year medication history.",
  ],
  [
    "Exchange",
    "where integrations exist, the EHR sends and receives data from laboratories, imaging systems, pharmacies and other healthcare platforms.",
  ],
];

export const storedInformation = [
  "Demographics, contact details, emergency contacts and insurance identifiers",
  "Medical, surgical, family and social history",
  "Problem lists, diagnoses and chronic condition tracking",
  "Current and historical medications",
  "Allergies, intolerances and immunization records",
  "Vital signs, clinical assessments and physical examination findings",
  "Laboratory results and diagnostic reports",
  "Imaging reports and links to images stored in imaging systems",
  "Clinical notes, care plans, referrals and discharge summaries",
  "Scanned documents, consent forms and outside records",
];

export const paperVsDigitalRows = [
  [
    "One physical copy in one location",
    "Available to authorized users wherever access is permitted",
  ],
  [
    "Handwriting can be hard to read",
    "Typed, structured and standardized entries",
  ],
  ["Slow manual retrieval", "Search by patient, date, diagnosis or data type"],
  ["Easy to misfile, damage or lose", "Backed up, versioned and recoverable"],
  ["Hard to show who viewed a chart", "Every access and change is logged"],
  [
    "Can't be analyzed at scale",
    "Structured data supports reporting and analytics",
  ],
];

export const challenges = [
  {
    title: "Fragmented Patient Information",
    problem:
      "a patient's history is spread across departments, legacy systems, spreadsheets and paper folders.",
    help: "a single patient record pulls clinical data into one longitudinal view, with each item tagged by source and date.",
  },
  {
    title: "Paper-Based Medical Records",
    problem:
      "physical charts are slow to retrieve, take up storage space, and only one person can use them at a time.",
    help: "digital charting and document scanning replace physical retrieval. Many authorized users can view the record at once.",
  },
  {
    title: "Incomplete Patient Medical Histories",
    problem:
      "clinicians make decisions without seeing earlier diagnoses, medications or outside results.",
    help: "structured history sections, imported outside records and integrations keep the history as complete as the available sources allow.",
  },
  {
    title: "Duplicate Patient Records",
    problem:
      "a misspelled name or a changed address creates a second chart, and the patient's history splits in two.",
    help: "patient-matching rules, duplicate detection at registration, and a controlled merge workflow for HIM staff keep one record per patient.",
  },
  {
    title: "Difficulty Retrieving Historical Medical Information",
    problem:
      "finding a lab result from three years ago means calling another department or searching an archive.",
    help: "indexed search and date-range filters bring up historical data in seconds.",
  },
  {
    title: "Limited Information Exchange",
    problem: "results arrive by fax or PDF and staff re-key them by hand.",
    help: "HL7 and FHIR integrations bring results in as structured data and file them to the correct patient automatically, where partner systems support it.",
  },
  {
    title: "Disorganized Clinical Documentation",
    problem: "notes vary by provider and make it hard to find key findings.",
    help: "specialty templates, structured fields and standardized note formats make documentation consistent without removing clinical judgment.",
  },
  {
    title: "Manual Record Management",
    problem: "staff spend hours filing, copying and chasing paperwork.",
    help: "automated filing, task queues and document workflows cut repetitive administrative work.",
  },
  {
    title: "Patient Data Security Risks",
    problem:
      "unlocked cabinets, shared passwords and untracked access put sensitive health information at risk.",
    help: "encryption, role-based access control, multi-factor authentication and audit trails protect records and make access accountable.",
  },
  {
    title: "Inefficient Healthcare Workflows",
    problem:
      "handoffs between front desk, nursing, physicians and lab staff depend on memory and paper notes.",
    help: "configurable clinical workflows route tasks, results and documents to the right person at the right step.",
  },
];

export type EhrFeature = {
  title: string;
  icon: string;
  does: string;
  how: string;
  problem: string;
  value: string;
  who: string;
  /** Anchor text inside `how` that links to a sibling product page. */
  link?: { anchor: string; slug: string };
};

export type EhrFeatureGroup = {
  title: string;
  summary: string;
  features: EhrFeature[];
};

export const featureGroups: EhrFeatureGroup[] = [
  {
    title: "The patient record",
    summary:
      "One verified identity, a complete history and a chart clinicians can trust.",
    features: [
      {
        title: "Centralized Patient Health Records",
        icon: "FolderHeart",
        does: "keeps all clinical data for a patient in one unified record. This is the core of any patient health records software.",
        how: "each patient gets a unique identifier, and every encounter, note, result and document is linked to it. A summary view shows active problems, medications, allergies and recent results.",
        problem: "fragmented records spread across departments and systems.",
        value:
          "clinicians start each encounter with the full picture instead of hunting for it.",
        who: "physicians, nurses, specialists and care coordinators.",
      },
      {
        title: "Patient Medical History Management",
        icon: "History",
        does: "records past medical, surgical, family and social history in structured form.",
        how: "history is captured at intake and updated at each encounter. Changes are versioned, so earlier entries are kept rather than overwritten.",
        problem:
          "histories that are incomplete or repeated inconsistently between providers.",
        value:
          "patients answer the same questions less often, and clinicians can trust that the history is current.",
        who: "primary care physicians, specialists and intake nurses.",
      },
      {
        title: "Electronic Patient Charting",
        icon: "ClipboardList",
        does: "provides the digital chart where clinicians document vitals, assessments, exam findings and plans.",
        how: "chart sections can be configured by specialty, with structured fields for measurable data and free text for narrative. Vitals can be trended over time.",
        problem:
          "paper charts that are hard to read, hard to share and impossible to analyze.",
        value:
          "faster charting, clear documentation and data that can be reported on.",
        who: "physicians, nurses and medical assistants.",
      },
      {
        title: "Clinical Documentation Management",
        icon: "FileSignature",
        does: "controls how clinical documents are created, reviewed, signed, amended and stored.",
        how: "templates, draft and signed states, co-signature routing for supervised clinicians, and amendment tracking that keeps the original text.",
        problem:
          "unsigned notes, inconsistent formats and undocumented changes.",
        value:
          "documentation that holds up to internal review, external audits and medico-legal scrutiny.",
        who: "clinicians, HIM teams and compliance officers.",
      },
      {
        title: "Patient Demographic Management",
        icon: "IdCard",
        does: "maintains identity, contact, language, guardian and insurance information.",
        how: "captured at registration, validated against existing records, and available to clinical and administrative modules. Where registration is handled by a dedicated Patient Management Software platform, the EHR can synchronize demographics instead of capturing them twice.",
        problem:
          "wrong contact details, duplicate identities and mismatched records.",
        value:
          "accurate patient identification is the basis for safe record linkage.",
        who: "front-desk staff, registration teams and HIM specialists.",
        link: {
          anchor: "Patient Management Software",
          slug: "patient-management-software",
        },
      },
      {
        title: "Diagnosis and Condition Tracking",
        icon: "Stethoscope",
        does: "maintains an active and resolved problem list for each patient.",
        how: "clinicians add diagnoses using standard code sets such as ICD-10-CM, or SNOMED CT where required. Each problem has an onset date, status and linked notes.",
        problem:
          "chronic conditions that get lost between visits or providers.",
        value:
          "a clear view of the patient's conditions for care planning and continuity.",
        who: "physicians, specialists and chronic care managers.",
      },
      {
        title: "Medication History Management",
        icon: "Pill",
        does: "records current, past and discontinued medications with dose, route, frequency and the prescriber.",
        how: "a medication list updated at each encounter. It supports medication reconciliation at admission, transfer and discharge. Drug databases and e-prescribing can be integrated where required.",
        problem:
          "medication lists that are out of date or contradict each other.",
        value:
          "clinicians see what the patient is actually taking before they prescribe.",
        who: "physicians, pharmacists and nurses.",
      },
      {
        title: "Allergy and Immunization Records",
        icon: "Syringe",
        does: "documents allergies, intolerances, reaction severity, and vaccination history.",
        how: "structured allergy entries appear prominently in the chart header. Immunization records hold vaccine, dose, date, lot number and administering provider.",
        problem:
          "allergy information buried in free-text notes, and immunization histories spread across providers.",
        value:
          "critical safety information is visible on every screen where it matters.",
        who: "prescribers, nurses, pediatricians and primary care teams.",
      },
    ],
  },
  {
    title: "Results and documentation",
    summary:
      "Structured results, diagnostic reports, notes and encounters, all on one timeline.",
    features: [
      {
        title: "Laboratory Results Management",
        icon: "FlaskConical",
        does: "receives, displays and files lab results against the correct patient and order.",
        how: "results arrive through lab integrations (commonly HL7 v2 ORU messages or FHIR resources) or by manual entry. Abnormal values are flagged and trends can be charted.",
        problem: "re-keying faxed results and missing abnormal values.",
        value: "faster result review and clear acknowledgment workflows.",
        who: "ordering physicians, nurses and lab coordinators.",
      },
      {
        title: "Diagnostic Report Management",
        icon: "ScanLine",
        does: "stores radiology, cardiology, pathology and other diagnostic reports.",
        how: "reports are imported from diagnostic systems or uploaded, then linked to the original order and the encounter. Image viewer links can be added where a PACS integration exists.",
        problem: "diagnostic findings held in separate departmental systems.",
        value:
          "a single place to review all diagnostic information for a patient.",
        who: "referring physicians, specialists and diagnostic staff.",
      },
      {
        title: "Clinical Notes and Physician Documentation",
        icon: "NotebookPen",
        does: "supports progress notes, SOAP notes, consult notes, operative notes, discharge summaries and referral letters.",
        how: "specialty templates, reusable text snippets and structured sections pull in relevant data (such as vitals or recent labs) where the clinician chooses.",
        problem:
          "slow, inconsistent documentation that takes time away from patients.",
        value: "thorough notes written in less time.",
        who: "physicians, physician assistants and nurse practitioners.",
      },
      {
        title: "Patient Encounter Management",
        icon: "CalendarCheck",
        does: "groups everything from one visit, admission or telehealth session into a single encounter.",
        how: "each encounter records type, provider, location, time, reason for visit, documentation and outcomes, and links to orders and results.",
        problem: "documentation that can't be traced back to a specific visit.",
        value: "a clear clinical timeline and correct context for every entry.",
        who: "clinicians, HIM teams and billing staff.",
      },
      {
        title: "Medical Document Upload and Storage",
        icon: "FileUp",
        does: "stores scanned records, outside reports, consent forms and images in the patient record.",
        how: "files are uploaded, categorized by document type, tagged to an encounter, and kept in encrypted storage with access controls.",
        problem: "loose paper and outside records that never reach the chart.",
        value:
          "a complete record, including documents created outside your organization.",
        who: "HIM staff, referral coordinators and clinicians.",
      },
      {
        title: "Clinical Workflow Management",
        icon: "Workflow",
        does: "turns clinical processes into tasks, queues and status-driven steps.",
        how: "configurable workflows, for example intake → vitals → provider review → orders → results acknowledgment → follow-up. Tasks are assigned by role.",
        problem:
          "handoffs that rely on memory, sticky notes or verbal reminders.",
        value: "fewer missed steps and clear accountability for each task.",
        who: "nursing teams, clinical coordinators and department managers.",
      },
    ],
  },
  {
    title: "Access and exchange",
    summary:
      "The right access for every clinician, fast retrieval and standards-based exchange.",
    features: [
      {
        title: "Authorized Provider Access",
        icon: "UserCheck",
        does: "gives each clinician the right level of access to the right patients.",
        how: 'access depends on role, department, location and care-team relationship. "Break-the-glass" emergency access can be set up with mandatory justification and review.',
        problem:
          "either too much access, which is a privacy risk, or too little, which delays care.",
        value: "clinicians reach what they need while privacy stays protected.",
        who: "clinicians, privacy officers and IT administrators.",
      },
      {
        title: "Patient Record Search and Retrieval",
        icon: "Search",
        does: "finds patients and specific clinical information quickly.",
        how: "patient search by name, date of birth, identifier or phone number, plus search inside the chart by date, data type, diagnosis or keyword.",
        problem: "slow retrieval of historical information.",
        value:
          "seconds instead of minutes, during busy clinics and emergencies.",
        who: "every clinical and administrative user.",
      },
      {
        title: "Healthcare Data Exchange",
        icon: "ArrowLeftRight",
        does: "sends and receives clinical data between the EHR and external systems.",
        how: "interface engines and APIs exchange messages and documents such as lab orders, results, referrals, discharge summaries and continuity-of-care documents.",
        problem:
          "information exchange that depends on fax, phone or manual re-entry.",
        value: "data arrives in structured form and is filed automatically.",
        who: "clinicians, referral teams and partner organizations.",
      },
      {
        title: "EHR Interoperability",
        icon: "Network",
        does: "lets the EHR share data in standard formats that other systems can read.",
        how: "data is modeled with standards such as HL7 FHIR resources and common terminologies (LOINC, SNOMED CT, ICD-10, RxNorm) where the project requires them.",
        problem: "data locked inside one vendor's proprietary format.",
        value:
          "easier integration now and more flexibility as your technology changes.",
        who: "IT teams, healthcare networks and data analysts.",
      },
      {
        title: "Role-Based Access Control",
        icon: "KeyRound",
        does: "sets permissions by role rather than by individual user.",
        how: "roles such as physician, nurse, front desk, billing or administrator each get defined read, write, sign and export permissions. Field-level restrictions can protect sensitive categories of data.",
        problem: "inconsistent, hand-managed permissions.",
        value:
          "permissions that are easy to manage and easy to audit, following the principle of least privilege.",
        who: "IT administrators and compliance teams.",
      },
      {
        title: "Audit Logs and Activity Tracking",
        icon: "FileClock",
        does: "records who accessed, created, changed, printed or exported each record, and when.",
        how: "tamper-resistant logs store user, timestamp, action, patient, record element and source, and can be searched for investigations.",
        problem: "no way to prove or investigate who accessed patient data.",
        value:
          "accountability, support for privacy investigations, and evidence for internal and external audits.",
        who: "privacy officers, compliance teams and security staff.",
      },
    ],
  },
  {
    title: "Insight and platform",
    summary:
      "Reporting on structured clinical data, on secure and scalable infrastructure.",
    features: [
      {
        title: "Clinical Reporting and Analytics",
        icon: "BarChart3",
        does: "turns structured clinical data into operational and clinical reports.",
        how: "dashboards and exportable reports on patient populations, documentation completeness, open results, encounter volumes and condition registries, with filters by provider, location and period.",
        problem: "decisions made without reliable data.",
        value:
          "visibility into clinical operations and quality improvement work.",
        who: "medical directors, administrators and quality teams.",
      },
      {
        title: "Secure Cloud-Based Record Management",
        icon: "CloudCog",
        does: "hosts the EHR on secure cloud infrastructure, or on-premises or hybrid infrastructure where required.",
        how: "cloud-hosted electronic health records management software can use encrypted storage, network isolation, automated backups, multi-zone redundancy and monitoring. Configuration and contracts with the hosting provider determine the final security posture.",
        problem:
          "fragile on-site servers, limited remote access and weak disaster recovery.",
        value:
          "scalable capacity, controlled remote access and planned recovery.",
        who: "IT leaders, multi-location organizations and remote clinicians.",
      },
    ],
  },
];

export const lifecycle = [
  {
    title: "Patient Registration",
    text: "A new patient arrives at an outpatient clinic. Front-desk staff record name, date of birth, contact details, insurance information and consent. If a patient portal is in use, the patient can submit this information before the visit.",
  },
  {
    title: "Patient Identification",
    text: "The system checks the new entry against existing records using name, date of birth and identifiers. If a likely match exists, perhaps from a previous visit under a maiden name, staff are prompted to confirm it instead of creating a duplicate.",
  },
  {
    title: "Medical History Collection",
    text: "A nurse records past conditions, surgeries, family history, smoking status and current medications. If the patient brings records from another provider, those documents are scanned or imported into the chart.",
  },
  {
    title: "Clinical Assessment",
    text: "The physician records vitals, symptoms and examination findings in a specialty template. Earlier blood pressure readings are shown as a trend, so the physician can see how this reading compares.",
  },
  {
    title: "Diagnosis Documentation",
    text: 'The physician adds "essential hypertension" to the problem list with a standard code and onset date. The diagnosis now appears in the chart summary for every authorized provider.',
  },
  {
    title: "Medication Records",
    text: "A new medication is prescribed and added to the medication list with dose and frequency. The system checks the allergy list, and any integrated drug interaction checks run, before the prescription is finalized.",
  },
  {
    title: "Laboratory and Diagnostic Results",
    text: "A basic metabolic panel is ordered. When the lab returns results through an HL7 or FHIR interface, they are filed to the patient's chart automatically and abnormal values are flagged for the ordering physician to review.",
  },
  {
    title: "Treatment Documentation",
    text: "The physician documents the care plan, patient education and lifestyle recommendations in the encounter note and signs it electronically.",
  },
  {
    title: "Follow-Up Records",
    text: "A follow-up task is created for six weeks later. At that visit, the clinician sees the previous note, the lab results and the medication history in one place.",
  },
  {
    title: "Longitudinal Health Record Updates",
    text: "Over the years, each visit, result, referral and hospitalization adds to the same record. The result is a longitudinal patient record that shows the patient's health over time rather than as unconnected episodes.",
  },
];

export const benefits = [
  [
    "Centralized patient information",
    "one authoritative record replaces scattered files and systems.",
  ],
  [
    "Easier access to medical histories",
    "authorized clinicians review prior care without requesting records from other departments.",
  ],
  [
    "Organized clinical documentation",
    "templates and structured fields keep notes consistent and complete.",
  ],
  [
    "Better information continuity",
    "information carries over between visits, shifts, departments and providers.",
  ],
  [
    "Improved coordination between authorized providers",
    "shared access and task routing support team-based care.",
  ],
  [
    "Reduced dependence on paper records",
    "less physical storage, printing and manual filing.",
  ],
  [
    "Structured healthcare data",
    "coded diagnoses, medications and results can be reported, analyzed and exchanged.",
  ],
  ["Efficient record retrieval", "search replaces manual chart pulls."],
  [
    "Better documentation workflows",
    "signing, co-signing and amendment processes are built into the system.",
  ],
  [
    "Improved healthcare information management",
    "this is where a well-designed healthcare information management software platform pays off for HIM teams.",
  ],
  [
    "More organized clinical operations",
    "queues, tasks and dashboards show what needs attention.",
  ],
  [
    "Support for informed clinical decision-making",
    "clinicians see relevant history, results and alerts at the point of care. The decisions themselves stay with qualified professionals.",
  ],
];

export const organizations: {
  title: string;
  icon: string;
  text: string;
  link?: { anchor: string; slug: string };
}[] = [
  {
    title: "Hospitals",
    icon: "Hospital",
    text: "An EHR system for hospitals has to support inpatient admissions, transfers and discharges, nursing documentation, medication administration records, multiple departments and round-the-clock use by large teams. Integration with laboratory, radiology, pharmacy and hospital management systems is usually essential. So are high availability and detailed access controls.",
  },
  {
    title: "Multi-Specialty Healthcare Centers",
    icon: "Layers",
    text: "Each specialty needs its own templates and workflows: cardiology, orthopedics and dermatology document very differently. The EHR still has to keep one shared record, so a referral from one specialty to another keeps its full context.",
  },
  {
    title: "Private Medical Practices",
    icon: "Stethoscope",
    text: "Electronic health record software for practitioners in private practice should be fast, simple and low maintenance. Practices tend to need efficient charting, e-prescribing, lab integration and close coordination with scheduling and billing. Many practices run their EHR alongside Clinic Management Software that handles appointments, visit flow and front-desk operations.",
    link: {
      anchor: "Clinic Management Software",
      slug: "clinic-management-software",
    },
  },
  {
    title: "Primary Care Providers",
    icon: "HeartPulse",
    text: "Primary care depends on long-term continuity: preventive care, immunizations, chronic disease monitoring and referrals. Strong problem lists, health maintenance reminders and longitudinal trend views matter most here.",
  },
  {
    title: "Specialist Clinics",
    icon: "Microscope",
    text: "Specialists need deep, procedure-specific documentation, specialty measurements and quick access to referral information. Structured referral intake and communication back to the referring physician are key requirements.",
  },
  {
    title: "Outpatient Medical Facilities",
    icon: "Building2",
    text: "Ambulatory surgery centers, urgent care and day-treatment facilities need quick registration, encounter-focused documentation and smooth handoff back to the patient's regular providers.",
  },
  {
    title: "Diagnostic Centers",
    icon: "ScanLine",
    text: "Diagnostic centers focus on orders, results and reports. Their EHR needs strong integration with lab and imaging systems, report distribution to referring providers, and accurate matching of each result to the right patient.",
  },
  {
    title: "Healthcare Networks",
    icon: "Network",
    text: "Networks with several facilities need a shared patient index, consistent data standards across sites, location-based access rules, and data exchange with affiliated and external organizations.",
  },
  {
    title: "Growing Medical Organizations",
    icon: "TrendingUp",
    text: "Growing organizations need an architecture that scales: modular features, multi-location support and APIs that allow new services to be added without replacing the platform.",
  },
];

export const ehrVsEmrRows = [
  [
    "Definition",
    "A comprehensive digital record of a patient's health information, designed to be shared across authorized providers and settings",
    "A digital version of the patient chart kept by one practice or organization",
  ],
  [
    "Primary purpose",
    "Continuity of care and information sharing across the care journey",
    "Documentation and treatment within one organization",
  ],
  [
    "Scope of patient information",
    "Longitudinal: can include data from several providers, labs, hospitals and outside sources",
    "Mainly the care delivered by that practice",
  ],
  [
    "Clinical documentation",
    "Full clinical documentation, plus data received from external sources",
    "Full clinical documentation within the practice",
  ],
  [
    "Patient history",
    "Built to collect history across providers over time",
    "History as recorded by that practice",
  ],
  [
    "Data exchange",
    "A core design goal, using standards-based exchange",
    "Often limited, or added later",
  ],
  [
    "Interoperability",
    "Usually designed around HL7, FHIR and standard terminologies",
    "Varies; may focus on internal workflows",
  ],
  [
    "Provider access",
    "Authorized providers across departments, locations or organizations",
    "Mainly providers inside the practice",
  ],
  [
    "Typical use cases",
    "Hospitals, health networks, multi-specialty groups, coordinated care",
    "Single-specialty practices, small clinics",
  ],
];

export const ehrVsPmRows = [
  [
    "Primary purpose",
    "Clinical documentation and patient health information",
    "Administrative and financial operations",
  ],
  [
    "Clinical documentation",
    "Core function: notes, charts, orders, results",
    "Minimal or none",
  ],
  [
    "Patient health information",
    "Diagnoses, medications, allergies, labs, history",
    "Demographics and insurance",
  ],
  [
    "Appointment scheduling",
    "May show the schedule; usually not the main scheduler",
    "Core function: calendars, rooms, reminders",
  ],
  [
    "Billing",
    "Supplies coded encounter data",
    "Charge capture, claims, statements",
  ],
  [
    "Provider administration",
    "Clinical roles and permissions",
    "Provider schedules, credentials, payer enrollment",
  ],
  [
    "Financial workflows",
    "Not a focus",
    "Payments, collections, financial reporting",
  ],
  [
    "Healthcare integrations",
    "Labs, imaging, pharmacy, HIEs",
    "Clearinghouses, payers, payment processors",
  ],
];

export const interopTopics: {
  title: string;
  text: string;
  link?: { anchor: string; slug: string };
}[] = [
  {
    title: "HL7 Healthcare Standards",
    text: "HL7 International publishes the most widely used healthcare messaging standards. HL7 v2 is still common for real-time messages such as patient admissions (ADT), lab orders (ORM/OML) and results (ORU). HL7 CDA and its C-CDA implementation guides define structured clinical documents such as continuity-of-care documents and discharge summaries.",
  },
  {
    title: "FHIR APIs",
    text: 'HL7 FHIR (Fast Healthcare Interoperability Resources) defines healthcare data as modular "resources", such as Patient, Observation, Condition, MedicationRequest and AllergyIntolerance, exchanged through RESTful APIs in JSON or XML. FHIR is widely used for modern web and mobile integrations, patient-facing apps and payer-provider exchange. Frameworks such as SMART on FHIR add standard authorization for third-party apps. FHIR comes in several releases (for example R4 and R5), and many national programs specify a particular version and implementation guide. Version selection is decided project by project.',
  },
  {
    title: "Healthcare Information Exchange",
    text: "Health information exchanges (HIEs) and national networks allow records to be shared across organizations. Connecting to them usually involves particular onboarding, legal agreements and technical specifications that depend on the jurisdiction.",
  },
  {
    title: "Structured Healthcare Data",
    text: "Exchange only works when both sides interpret the data the same way. Standard vocabularies, such as LOINC for lab tests, SNOMED CT for clinical terms, ICD-10 for diagnoses and RxNorm for medications in the US, keep the meaning consistent across systems.",
  },
  {
    title: "Laboratory Integrations",
    text: "Bidirectional lab interfaces send electronic orders and receive results that are filed automatically to the correct patient and order. They can also connect with an in-house laboratory information management system.",
  },
  {
    title: "Medical Imaging Integrations",
    text: "Imaging integrations link the EHR with RIS and PACS systems, which work with the DICOM standard. The EHR usually holds the order and the radiologist's report, plus a link that opens the images in an approved viewer.",
  },
  {
    title: "Pharmacy System Integrations",
    text: "Pharmacy integrations can support electronic prescribing, medication history and dispensing information. In the US, e-prescribing networks generally use NCPDP SCRIPT standards. Other countries use their own national e-prescribing services.",
  },
  {
    title: "External Healthcare Platform Connectivity",
    text: "APIs can connect the EHR to patient portals, telemedicine platforms, remote monitoring devices, analytics tools and billing systems. A common example is passing coded encounter data to Medical Billing Software for claim preparation.",
    link: {
      anchor: "Medical Billing Software",
      slug: "medical-billing-software",
    },
  },
  {
    title: "Secure Medical Data Exchange",
    text: "Every integration should use encrypted transport (TLS), authenticated endpoints, OAuth 2.0 or similar authorization, message validation, and logging of everything sent and received.",
  },
  {
    title: "Patient Information Synchronization",
    text: "Synchronization rules decide which system is authoritative for each data element, how conflicts are resolved and how often data is updated. Getting this right prevents duplicate records and contradictory data.",
  },
];

export const securityControls = [
  [
    "Secure authentication",
    "strong password policies, session timeouts, and single sign-on (SAML or OpenID Connect) with your identity provider where required.",
  ],
  [
    "Multi-factor authentication",
    "a second factor for clinical and administrative users, with stricter policies for remote and privileged access.",
  ],
  [
    "Role-based access control",
    "least-privilege permissions by role, department and location.",
  ],
  [
    "Data encryption",
    "encryption in transit (TLS 1.2+) and at rest (for example AES-256), with managed encryption keys.",
  ],
  [
    "Secure API communication",
    "authenticated, rate-limited and validated APIs that follow OWASP API security practices.",
  ],
  ["Audit trails", "detailed, tamper-resistant logs of access and changes."],
  [
    "Access monitoring",
    "alerts for unusual patterns such as bulk exports or out-of-hours access.",
  ],
  [
    "Backup and recovery",
    "automated, encrypted backups with tested restore procedures and defined recovery objectives.",
  ],
  [
    "Data retention policies",
    "configurable retention and archival rules to match your legal and organizational obligations.",
  ],
  [
    "User permission management",
    "central administration for onboarding, role changes and prompt removal of access.",
  ],
  [
    "Patient data protection",
    "data minimization, masking of sensitive fields, and secure handling of exports and printing.",
  ],
];

export const privacyFrameworks = [
  [
    "United States",
    "HIPAA, including the Privacy and Security Rules for protected health information",
  ],
  [
    "United Kingdom",
    "UK GDPR and the Data Protection Act 2018, plus NHS-specific standards where applicable",
  ],
  [
    "Canada",
    "PIPEDA and provincial health privacy laws, such as Ontario's PHIPA",
  ],
  ["Australia", "The Privacy Act 1988 and the My Health Records Act"],
  [
    "EU / EEA",
    "GDPR for organizations processing data of individuals in the EU/EEA",
  ],
];

export const customVsReadyRows = [
  [
    "Customization",
    "Built around your specialties, terminology and processes",
    "Configurable within the vendor's limits",
  ],
  [
    "Clinical workflow flexibility",
    "Workflows designed to fit how your teams work",
    "Teams often change their workflows to fit the software",
  ],
  [
    "Integration options",
    "Integrations planned for your existing systems",
    "Limited to the vendor's supported connectors and APIs",
  ],
  [
    "Scalability",
    "Architecture sized and extended to match your growth",
    "Depends on the vendor's plans and pricing tiers",
  ],
  [
    "Database architecture",
    "Data model designed for your data and reporting needs",
    "Fixed vendor data model",
  ],
  [
    "Deployment options",
    "Cloud, on-premises or hybrid, as you decide",
    "Usually the vendor's chosen hosting",
  ],
  [
    "User access",
    "Roles and permissions modeled on your organization",
    "Predefined role structures",
  ],
  [
    "Reporting",
    "Reports and dashboards built for your KPIs",
    "Standard reports; custom reports may cost extra",
  ],
  [
    "Feature expansion",
    "Roadmap set by your priorities",
    "Roadmap set by the vendor",
  ],
  [
    "Maintenance",
    "Your team or a support partner maintains the system",
    "Vendor maintains it; upgrades happen on their schedule",
  ],
  [
    "Licensing and ownership",
    "Your organization can own the source code (per contract)",
    "Ongoing subscription or per-user licensing; no code ownership",
  ],
];

export const whenCustom = [
  "Your specialty workflows aren't well served by generic products.",
  "You need to integrate deeply with existing or proprietary systems.",
  "You run a multi-location or multi-specialty organization with complex access rules.",
  "You are a healthcare technology company building an EHR-based product.",
  "Long-term licensing costs or vendor lock-in are a concern.",
  "You need full control over data architecture, hosting and the product roadmap.",
];

export const processPhases = [
  {
    title: "Discover",
    stages: [
      [
        "Healthcare Requirement Discovery",
        "Understand your organization, users, goals and constraints",
        "Stakeholder interviews, requirements document, written project scope",
      ],
      [
        "Clinical Workflow Analysis",
        "Map how care and documentation actually happen today",
        "Current-state and future-state workflow maps, pain-point log",
      ],
      [
        "EHR Feature Planning",
        "Prioritize modules for the first release and later phases",
        "Feature backlog, MVP definition, phased roadmap",
      ],
    ],
  },
  {
    title: "Design",
    stages: [
      [
        "UI/UX Design",
        "Design clinician-friendly screens that keep clicks to a minimum",
        "Wireframes, clickable prototypes, design system, usability feedback",
      ],
      [
        "System Architecture",
        "Define components, hosting, scalability and integration approach",
        "Architecture diagrams, technology decisions, non-functional requirements",
      ],
      [
        "Database Design",
        "Model patient, clinical and audit data for integrity and performance",
        "Data model, terminology mapping plan, data migration strategy",
      ],
    ],
  },
  {
    title: "Build",
    stages: [
      [
        "Frontend Development",
        "Build responsive clinical interfaces",
        "Web (and optionally mobile) application releases",
      ],
      [
        "Backend Development",
        "Build business logic, services and data access",
        "APIs, services, background jobs, admin tools",
      ],
      [
        "API and Healthcare Integrations",
        "Connect labs, imaging, pharmacy, billing and other systems",
        "Interface specifications, HL7/FHIR interfaces, integration test results",
      ],
      [
        "Security Implementation",
        "Apply authentication, authorization, encryption and logging",
        "Security controls, configuration documentation, vulnerability scan results",
      ],
    ],
  },
  {
    title: "Test, launch and support",
    stages: [
      [
        "Quality Assurance",
        "Verify functionality, performance and reliability",
        "Test plans, automated test suites, defect reports, performance results",
      ],
      [
        "Clinical Workflow Testing",
        "Confirm the system works for real clinical scenarios",
        "User acceptance testing with clinicians, scenario scripts, sign-off",
      ],
      [
        "Deployment",
        "Go live safely, with data migration and training",
        "Deployment runbook, migrated data verification, training materials",
      ],
      [
        "Maintenance and Support",
        "Keep the system secure, stable and improving",
        "Monitoring, patches, enhancement releases, support SLAs",
      ],
    ],
  },
];

export const techRows = [
  [
    "Frontend",
    "React.js, Next.js",
    "Component-based, responsive clinical interfaces; Next.js adds server rendering and routing for complex applications",
  ],
  [
    "Backend",
    "Node.js (TypeScript) and other suitable runtimes",
    "Efficient API services and real-time features with a large ecosystem",
  ],
  [
    "Relational database",
    "PostgreSQL, MySQL, SQL Server",
    "Strong consistency and transactions for core clinical and audit data",
  ],
  [
    "Document database",
    "MongoDB",
    "Flexible storage for semi-structured data such as form definitions or FHIR-style JSON documents",
  ],
  [
    "APIs",
    "REST APIs, FHIR-based endpoints",
    "Standard integration for internal apps, partners and third-party tools",
  ],
  [
    "Interoperability",
    "HL7 v2 interface engines, FHIR servers",
    "Standards-based exchange with labs, imaging, pharmacies and HIEs",
  ],
  [
    "Cloud infrastructure",
    "AWS, Microsoft Azure, Google Cloud",
    "Managed security services, encryption, redundancy and scaling",
  ],
  [
    "Authentication and authorization",
    "OAuth 2.0, OpenID Connect, SAML SSO, MFA",
    "Secure sign-in and fine-grained permissions",
  ],
  [
    "Architecture pattern",
    "Modular monolith or microservices",
    "Independent modules that can grow without a full rebuild",
  ],
  [
    "Data protection",
    "TLS, at-rest encryption, key management, secrets vaults",
    "Protection of health information at every layer",
  ],
  [
    "Scalable backend services",
    "Containers, load balancing, queues, caching",
    "Reliable performance as users and data volumes grow",
  ],
];

export const costFactors = [
  [
    "Number of software modules",
    "a focused charting system costs far less than a full hospital EHR.",
  ],
  [
    "Clinical documentation complexity",
    "specialty templates, structured data capture and signing workflows add effort.",
  ],
  [
    "Number of users",
    "affects infrastructure, licensing of third-party services and performance engineering.",
  ],
  [
    "Organization size",
    "multi-location and multi-department setups need more complex access and data models.",
  ],
  [
    "Healthcare integrations",
    "each lab, imaging, pharmacy, billing or HIE interface adds analysis, build and testing.",
  ],
  [
    "Interoperability requirements",
    "FHIR APIs, terminology mapping and national standards add scope.",
  ],
  [
    "Existing data migration",
    "importing, cleaning and verifying legacy records can be a significant workstream.",
  ],
  [
    "Security requirements",
    "advanced monitoring, penetration testing and compliance documentation.",
  ],
  [
    "Web and mobile applications",
    "separate clinician, patient or administrator apps increase scope.",
  ],
  [
    "Hosting and infrastructure",
    "cloud, on-premises or hybrid environments, redundancy and disaster recovery.",
  ],
  [
    "Maintenance and support",
    "ongoing updates, monitoring, enhancements and support coverage.",
  ],
];

export const whyClickmasters = [
  [
    "Custom healthcare software development",
    "software designed around your clinical and operational workflows, not a fixed template.",
  ],
  [
    "Web application development",
    "secure, responsive clinical and administrative web apps, including electronic health record online software that clinicians open in any browser.",
  ],
  [
    "Mobile application development",
    "iOS and Android apps for clinicians or patients, such as an electronic health record healthcare app for viewing results and visit notes on the go.",
  ],
  [
    "Scalable architecture",
    "modular systems on cloud platforms such as AWS, Azure and Google Cloud, designed to grow with you.",
  ],
  [
    "API integrations",
    "standards-based integrations with the healthcare and business systems you already use.",
  ],
  [
    "Healthcare workflow development",
    "clinical workflow analysis turned into practical, usable software.",
  ],
  [
    "UI/UX design",
    "clinician-centered interfaces that reduce documentation effort.",
  ],
  [
    "Software quality assurance",
    "structured functional, regression, performance and security testing.",
  ],
  [
    "Maintenance and technical support",
    "ongoing monitoring, updates and improvements after launch.",
  ],
  [
    "Transparent engagement",
    "clear written scope, phased delivery and regular communication.",
  ],
];

export const consultationChecklist = [
  [
    "EHR requirement assessment",
    "your organization, users, specialties and goals",
  ],
  [
    "Clinical workflow planning",
    "how documentation and care handoffs should work",
  ],
  [
    "Feature recommendations",
    "which modules belong in your first release and which come later",
  ],
  [
    "Integration discussion",
    "labs, imaging, pharmacy, billing and other systems",
  ],
  [
    "Security architecture discussion",
    "access control, encryption, audit and hosting",
  ],
  ["Project cost estimation", "a phased scope with a realistic budget range"],
];

export const ehrFaqs = [
  {
    question: "What is Electronic Health Records software?",
    answer:
      "Electronic Health Records software is a digital system for creating, storing, managing and sharing a patient's health information over time. It holds medical history, diagnoses, medications, allergies, lab results, clinical notes and diagnostic reports in one secure record. Authorized providers across departments or organizations can access that record, which supports continuity of care.",
  },
  {
    question: "How does an EHR system work?",
    answer:
      "An EHR system links all clinical data to a verified patient identity. Clinicians record encounters, diagnoses, medications and notes. Results arrive from labs and diagnostic systems by integration or manual entry. Each entry is time-stamped and attributed to a user, and role-based permissions decide who can view or edit it. Over time this builds a longitudinal health record.",
  },
  {
    question: "What information does EHR software store?",
    answer:
      "EHR software typically stores demographics, medical and surgical history, family and social history, problem lists, diagnoses, medications, allergies, immunizations, vital signs, lab results, imaging and diagnostic reports, clinical notes, care plans, referrals, discharge summaries and scanned documents. The exact data set depends on the organization's clinical requirements and the modules implemented.",
  },
  {
    question: "What are the main features of an EHR system?",
    answer:
      "Core features include centralized patient records, electronic charting, clinical documentation, problem and medication lists, allergy and immunization records, lab and diagnostic results, encounter management, document storage, search, role-based access control, audit logs, reporting and interoperability through standards such as HL7 and FHIR.",
  },
  {
    question: "What is the difference between EHR and EMR?",
    answer:
      "An EMR is generally a digital chart used inside one practice or organization. An EHR is designed for broader, longitudinal health information that can be shared across providers and care settings, with interoperability as a core goal. In practice the terms overlap, so compare the actual capabilities of a system rather than its label.",
  },
  {
    question: "How does EHR software help healthcare providers?",
    answer:
      "EHR software gives providers quick access to complete patient histories, consistent documentation tools, organized results and shared records across care teams. It cuts time spent finding paper charts or re-entering data, supports coordinated care, and puts relevant information in front of clinicians when they make decisions.",
  },
  {
    question: "Can EHR software support multiple healthcare providers?",
    answer:
      "Yes. EHR systems are designed for many providers working from the same patient record. Physicians, nurses, specialists and support staff can each access the record according to their role, see each other's documentation, and coordinate through shared tasks, referrals and messaging, all with audit logging.",
  },
  {
    question: "Can an EHR system integrate with laboratory systems?",
    answer:
      "Yes, in most cases. EHRs commonly integrate with external labs and laboratory information systems using HL7 v2 messages or FHIR APIs for electronic orders and results. Feasibility depends on the lab's interface capabilities, the standards it supports and any contracts involved. These details are confirmed during project discovery.",
  },
  {
    question: "What is interoperability in EHR software?",
    answer:
      "Interoperability is the ability of an EHR to exchange data with other systems and use it in a consistent, meaningful way. It relies on messaging standards such as HL7 and FHIR and on shared vocabularies such as LOINC, SNOMED CT and ICD-10, so data from labs, hospitals and other providers is interpreted correctly.",
  },
  {
    question: "What is FHIR in healthcare software?",
    answer:
      "FHIR (Fast Healthcare Interoperability Resources) is a standard from HL7 International for exchanging healthcare data through modern web APIs. It represents information as modular resources, such as Patient, Observation and Condition, in JSON or XML. FHIR is widely used for EHR integrations, patient apps and data sharing between organizations.",
  },
  {
    question: "Can custom EHR software integrate with existing systems?",
    answer:
      "Yes. One of the main advantages of a custom EHR is that integrations are designed for your current systems, such as practice management, billing, lab, imaging, pharmacy or patient portal platforms. Which integrations are possible depends on each system's APIs or interfaces, the supported standards and vendor access agreements.",
  },
  {
    question: "Is cloud-based EHR software secure?",
    answer:
      "Cloud-based EHR software can be highly secure when it is properly designed and operated. That means encryption in transit and at rest, multi-factor authentication, role-based access, network isolation, monitoring, backups and audit trails. Security also depends on configuration, organizational policies, staff practices and agreements with the hosting provider.",
  },
  {
    question: "How much does custom EHR software development cost?",
    answer:
      "The cost depends on the number of modules, documentation complexity, number of users, integrations, data migration, security requirements, platforms (web and mobile) and hosting. A focused first release costs far less than a full enterprise EHR. Clickmasters gives a written scope and estimate after reviewing your requirements.",
  },
  {
    question: "How long does it take to develop an EHR system?",
    answer:
      "Timelines depend on scope. A focused first version with core charting and records can take a few months. A multi-module EHR with several integrations and data migration usually takes considerably longer. Phased delivery lets your teams start using core features sooner while more modules are developed.",
  },
  {
    question: "Can EHR software manage patient medical histories?",
    answer:
      "Yes. Managing medical history is a core EHR function. The system records past medical, surgical, family and social history, along with diagnoses, medications, allergies and earlier results. Updates are versioned, so clinicians can see what changed and when, which builds a complete longitudinal picture.",
  },
  {
    question: "Does EHR software support clinical documentation?",
    answer:
      "Yes. EHR software supports progress notes, SOAP notes, consult notes, operative notes, discharge summaries and referral letters. Specialty templates, structured fields, electronic signatures, co-signature workflows and amendment tracking keep documentation consistent, complete and auditable.",
  },
  {
    question: "Can EHR systems integrate with medical billing software?",
    answer:
      "Yes. EHR systems commonly pass coded encounter data, such as diagnoses, procedures and services, to medical billing software for charge capture and claim preparation. This avoids entering the same data twice and keeps clinical documentation and billing aligned. Integration details depend on both systems and the data standards they use.",
  },
  {
    question:
      "What is the difference between EHR and practice management software?",
    answer:
      "EHR software manages clinical information: notes, diagnoses, medications and results. Practice management software manages administrative and financial operations: scheduling, registration, insurance, billing and reporting. Most practices use both, connected by integration, so clinical and business workflows share accurate patient data.",
  },
  {
    question: "Can an EHR system support multiple healthcare locations?",
    answer:
      "Yes. A properly designed EHR can serve several clinics, hospitals or departments from one patient record. It can include location-based access rules, site-specific workflows and reporting, and a shared patient index, so patients who visit different locations keep one continuous health record.",
  },
  {
    question:
      "Can ClickMasters develop custom Electronic Health Records software?",
    answer:
      "Yes. Clickmasters develops custom healthcare software, including EHR platforms, covering requirement discovery, clinical workflow analysis, UI/UX design, web and mobile development, healthcare integrations, security implementation, quality assurance, deployment and ongoing support. Every project starts with a written scope agreed before development begins.",
  },
];

export const schemaFeatureList = [
  "Centralized patient health records",
  "Patient medical history management",
  "Electronic patient charting",
  "Clinical documentation management",
  "Diagnosis and condition tracking",
  "Medication history management",
  "Allergy and immunization records",
  "Laboratory results management",
  "Diagnostic report management",
  "Patient encounter management",
  "Clinical workflow management",
  "HL7 and FHIR-based interoperability",
  "Role-based access control",
  "Audit logs and activity tracking",
  "Clinical reporting and analytics",
  "Secure cloud-based record management",
];

const dir = "/products/ehr";

/** Illustrative concepts and diagrams; files live in public/products/ehr/. */
export const ehrImages = {
  dashboard: {
    src: `${dir}/ehr-patient-dashboard.svg`,
    width: 1440,
    height: 900,
    alt: "Electronic health records software patient dashboard concept showing problems, medications and recent lab results",
  },
  chart: {
    src: `${dir}/ehr-electronic-patient-chart.svg`,
    width: 1440,
    height: 900,
    alt: "Electronic patient charting interface concept for custom EHR software",
  },
  labs: {
    src: `${dir}/ehr-laboratory-results-dashboard.svg`,
    width: 1440,
    height: 900,
    alt: "EHR laboratory results dashboard concept with flagged abnormal values and trends",
  },
  notes: {
    src: `${dir}/ehr-clinical-documentation-soap-note.svg`,
    width: 1440,
    height: 900,
    alt: "Clinical documentation and physician notes interface concept for EHR",
  },
  analytics: {
    src: `${dir}/ehr-clinical-analytics-dashboard.svg`,
    width: 1440,
    height: 900,
    alt: "Clinical reporting and analytics dashboard concept for EHR software",
  },
  security: {
    src: `${dir}/ehr-secure-access-audit-log.svg`,
    width: 1440,
    height: 900,
    alt: "Secure EHR patient records interface concept with multi-factor authentication and audit log",
  },
  lifecycle: {
    src: `${dir}/ehr-patient-information-lifecycle.svg`,
    width: 1400,
    height: 560,
    alt: "Patient health information lifecycle in an electronic health record system",
  },
  interop: {
    src: `${dir}/ehr-interoperability-architecture.svg`,
    width: 1200,
    height: 820,
    alt: "EHR interoperability architecture diagram with HL7 and FHIR integrations to lab, imaging and pharmacy systems",
  },
  exchange: {
    src: `${dir}/ehr-lab-data-exchange-workflow.svg`,
    width: 1200,
    height: 700,
    alt: "Healthcare data exchange workflow between EHR and laboratory system",
  },
} as const;
