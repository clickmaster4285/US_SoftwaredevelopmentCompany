// Content for /products/healthcare-medical-software/laboratory-information-management-system-lims.
// Source: laboratory-information-management-system-seo-content.docx (prepared 18 Nov 2026).
// FAQ text is reused verbatim by the FAQPage JSON-LD, so edit both together.

export const LIMS_PATH =
  "/products/healthcare-medical-software/laboratory-information-management-system-lims";

export const limsTitle =
  "Laboratory Information Management System (LIMS) Software";

export const limsDescription =
  "Laboratory Information Management System Software for US labs: sample tracking, workflow, data management, QC, audit trails and Part 11-ready design.";

export const PRODUCT_NAME = "Laboratory Information Management System (LIMS)";

export const limsManages = [
  [
    "Samples",
    "registration, labeling, location, storage, aliquots and disposal",
  ],
  ["Work", "test assignment, scheduling, worklists and instrument batches"],
  ["Data", "result capture, calculations, specification checks and review"],
  [
    "Quality",
    "QC samples, control charts, deviations, OOS investigations and corrective actions",
  ],
  [
    "Resources",
    "instruments, calibration, reagents, standards, consumables and analyst training records",
  ],
  [
    "Output",
    "certificates of analysis (CoAs), test reports and management dashboards",
  ],
] as const;

export const limsVsLisRows = [
  [
    "Typical setting",
    "Pharma, biotech, R&D, environmental, food, chemical and manufacturing QC labs; some clinical and public-health labs",
    "Hospital and reference clinical labs testing patient specimens",
  ],
  [
    "Centered on",
    "The sample, batch or study",
    "The patient and the physician's order",
  ],
  [
    "Typical workflow",
    "Batches, stability studies, specifications, CoAs, method and instrument control",
    "Patient orders, specimen collection, analyzer results, physician reporting, billing",
  ],
  [
    "Key integrations",
    "ERP, MES, ELN, chromatography data systems, SDMS",
    "EHR/EMR, HIS, billing, reference labs, public-health reporting",
  ],
  [
    "Common regulatory frame",
    "GLP, GMP, 21 CFR Part 11, ISO/IEC 17025 (scope dependent)",
    "CLIA, CAP accreditation, HIPAA (scope dependent)",
  ],
];

export const sampleSteps = [
  [
    "Login and accessioning",
    "The sample arrives and is registered against a client, project, study, batch or order. Required metadata is captured: source, collection time, matrix, condition on receipt, temperature and requested tests.",
  ],
  [
    "Identification",
    "The LIMS generates a unique ID and prints a barcode or QR label. Aliquots and derived samples receive child IDs linked to the parent.",
  ],
  [
    "Test assignment",
    "Tests are assigned automatically from the product specification, analysis profile or order. Each test carries its method, limits and turnaround target.",
  ],
  [
    "Scheduling and worklists",
    "Samples are grouped into instrument batches with the required QC samples (blanks, standards, controls, duplicates, spikes) and assigned to qualified analysts.",
  ],
  [
    "Analysis and data capture",
    "Results come in directly from instruments or from controlled manual entry. Calculations, unit conversions and rounding run in the system, not in a spreadsheet.",
  ],
  [
    "Validation and review",
    "Results are checked against specifications and QC acceptance rules. Exceptions are flagged. A second person reviews and approves, using an electronic signature where required.",
  ],
  [
    "Reporting",
    "The LIMS produces the final report or CoA and releases results to the customer, physician, ERP or EHR.",
  ],
  [
    "Storage and disposal",
    "Retained samples are tracked by location until their retention period ends. Disposal is recorded.",
  ],
] as const;

export type LimsFeature = { title: string; icon: string; text: string };

export const features: LimsFeature[] = [
  {
    title: "Sample Management and Tracking",
    icon: "TestTubes",
    text: "Real-time status and location for every sample, aliquot and container, across freezers, racks, shelves and boxes. Includes parent–child relationships and full sample history.",
  },
  {
    title: "Sample Accessioning and Registration",
    icon: "ClipboardPlus",
    text: "Configurable login screens by sample type, batch registration for high-volume receipt, client and project linkage, condition-on-receipt checks and rejection workflows for unacceptable samples.",
  },
  {
    title: "Barcode and QR Code Management",
    icon: "QrCode",
    text: "Label templates for tubes, vials, plates and containers. Scan-based receipt, transfer and storage reduce transcription errors at each handoff.",
  },
  {
    title: "Chain of Custody Tracking",
    icon: "Link2",
    text: "A continuous, signed record of every person and location that held a sample, which is essential for environmental, forensic, toxicology and regulated testing.",
  },
  {
    title: "Laboratory Workflow Automation",
    icon: "Workflow",
    text: "Rule-based routing, automatic test assignment, retest and reflex-test triggers, and status-driven notifications, so work moves forward without someone chasing it.",
  },
  {
    title: "Test Scheduling and Assignment",
    icon: "CalendarClock",
    text: "Worklists by instrument, method and analyst, workload balancing and turnaround-time monitoring. The system also checks analyst qualification and blocks assignment to anyone not trained on the method.",
  },
  {
    title: "Results Management",
    icon: "ClipboardCheck",
    text: "Structured result entry, automatic calculations, specification and limit checks, unit handling, result versioning and multi-level review and approval.",
  },
  {
    title: "Instrument Integration",
    icon: "Cable",
    text: "Direct data capture from analyzers, balances, pH meters, chromatography systems and plate readers. This removes manual transcription, one of the most common sources of data-integrity findings.",
  },
  {
    title: "Quality Control Management",
    icon: "Activity",
    text: "QC sample scheduling, acceptance criteria, control charts, trend detection and automatic holds on batches that fail QC.",
  },
  {
    title: "Laboratory Inventory Management",
    icon: "Boxes",
    text: "Stock levels, locations, lot numbers and expiry dates for consumables, with reorder alerts and usage tracking against tests.",
  },
  {
    title: "Reagent and Chemical Tracking",
    icon: "FlaskConical",
    text: "Preparation records for reagents and standard solutions, linked to the parent lots, with expiry enforcement and links to safety data sheets (SDS). Each result records the lot it consumed.",
  },
  {
    title: "Laboratory Reporting and Analytics",
    icon: "BarChart3",
    text: "Reports and CoAs, turnaround-time and backlog dashboards, instrument utilization, analyst productivity, failure trends and customer-level reporting.",
  },
  {
    title: "Audit Trails and Data Integrity",
    icon: "FileClock",
    text: "Secure, computer-generated, time-stamped audit trails that record who changed what, when, the old and new values, and why. They are designed around the ALCOA+ principles: data that is attributable, legible, contemporaneous, original and accurate, plus complete, consistent, enduring and available.",
  },
  {
    title: "User and Role Management",
    icon: "UserCheck",
    text: "Role-based access control for analysts, reviewers, QA, lab managers and clients. Training-based permissions, password policies and SSO/MFA support.",
  },
  {
    title: "Electronic Documentation",
    icon: "FileSignature",
    text: 'Controlled SOPs and methods with versioning, linked to the tests that use them. Includes electronic signatures with a recorded meaning, such as "reviewed" or "approved".',
  },
  {
    title: "Multi-Laboratory Management",
    icon: "Building2",
    text: "Shared master data with site-specific configuration, sample transfers between labs, and reporting for each site or across the network.",
  },
];

export const benefits = [
  [
    "Traceability by default",
    "Any reported result can be traced back through review, QC, instrument, method, analyst and sample in minutes.",
  ],
  [
    "Fewer transcription errors",
    "Barcodes and instrument integration remove the manual copying behind many data errors.",
  ],
  [
    "Faster turnaround",
    "Automated assignment, worklists and status alerts reduce idle time between steps.",
  ],
  [
    "Easier audits and inspections",
    "Audit trails, signatures, training records and calibration history are already organized when an auditor asks for them.",
  ],
  [
    "Better use of capacity",
    "Backlog and utilization data show where instruments or analysts are the bottleneck.",
  ],
  [
    "Lower inventory waste",
    "Expiry-aware reagent tracking stops expired materials from being used and reduces write-offs.",
  ],
  [
    "Scalable operations",
    "New tests, sites or clients become configuration changes instead of new spreadsheets.",
  ],
] as const;

export const labTypeRows = [
  [
    "Clinical laboratories",
    "Patient-linked orders and specimens, analyzer interfaces, reference ranges, critical-value notification, HIPAA-protected data, CLIA and CAP documentation",
  ],
  [
    "Medical diagnostic laboratories",
    "High-volume accessioning, reflex testing, molecular and pathology workflows, results delivery to ordering providers",
  ],
  [
    "Pharmaceutical laboratories",
    "Raw material, in-process and finished-product testing, specifications, stability studies, OOS investigations, CoAs, GMP and 21 CFR Part 11 controls",
  ],
  [
    "Biotechnology laboratories",
    "Biospecimen and cell-line tracking, freezer storage, parent–child lineage, assay development, ELN integration",
  ],
  [
    "Research and development laboratories",
    "Flexible experiment and study structures, sample genealogy, method development, protocol versioning",
  ],
  [
    "Environmental testing laboratories",
    "Chain of custody, field sampling data, regulatory method references, QC batches (blanks, spikes, duplicates), detection limits, client reporting",
  ],
  [
    "Food and beverage testing laboratories",
    "Product and lot specifications, microbiology and chemistry tests, supplier testing, release decisions, food-safety program records",
  ],
  [
    "Chemical laboratories",
    "Formulation testing, chemical inventory, hazard data, specification management, CoAs",
  ],
  [
    "Manufacturing quality control laboratories",
    "Integration with ERP/MES, batch release, in-process checks, specification limits, statistical process data",
  ],
  [
    "Academic and scientific research laboratories",
    "Multi-group projects, shared instruments, grant-linked sample collections, data export for analysis and publication",
  ],
];

export const trackingCapabilities = [
  "Unique identification at login, with barcode or QR labels printed on site",
  "Scan-based events at every handoff: receipt, aliquoting, transfer, storage and disposal",
  "Storage hierarchy: building → room → freezer → rack → box → position",
  "Condition monitoring for temperature-sensitive samples, with optional links to storage sensors",
  "Parent–child genealogy for aliquots, extracts, dilutions and pooled samples",
  "Retention and disposal rules by sample type, client or regulation",
];

export const automationRules = [
  "Automatic test assignment from specifications, profiles or orders",
  "Reflex and retest rules that create follow-up tests when a result meets defined criteria",
  "Batch building that adds the required QC samples automatically",
  "Turnaround-time tracking with escalation alerts before deadlines are missed",
  "Review queues that route results to the right reviewer based on test, client or risk",
  "Notifications to customers or clinicians when results are released",
];

export const instrumentRows = [
  [
    "File-based parsing (CSV, TXT, XML, vendor exports)",
    "Many analytical instruments, plate readers and chromatography data system exports",
  ],
  [
    "Serial / RS-232 or USB",
    "Balances, pH meters, titrators and older bench instruments",
  ],
  [
    "ASTM E1394 / CLSI LIS2-A2 and HL7 v2",
    "Clinical chemistry, hematology and immunoassay analyzers",
  ],
  [
    "Vendor APIs and middleware",
    "Chromatography data systems, automation lines, scientific data management systems (SDMS)",
  ],
  [
    "Lab automation standards (e.g., SiLA 2, AnIML)",
    "Robotic and automated workcells, standardized analytical data",
  ],
];

export const dataChecks = [
  "The instrument is calibrated and qualified for use",
  "The result matches the expected sample ID, test and batch",
  "Values are within the instrument's reporting range",
  "Calculations and units are applied consistently",
  "The original raw file is kept and linked to the reported result",
];

export const qcCapabilities = [
  "QC sample definitions (blanks, standards, controls, duplicates, matrix spikes) and automatic insertion into batches",
  "Acceptance criteria and automatic batch holds when they fail",
  "Control charts and trend rules, such as Westgard rules on Levey-Jennings charts in clinical labs",
  "Recurring QC trend reports by test, instrument and analyst",
];

export const qaCapabilities = [
  [
    "Out-of-Specification (OOS) management",
    "Results outside specification start a documented investigation: lab-error assessment, retest or resample decisions, root cause and conclusion. This follows the general approach of FDA's guidance on investigating OOS results in pharmaceutical production.",
  ],
  [
    "Deviations and CAPA",
    "Corrective and preventive action linked to the affected samples and tests.",
  ],
  [
    "Calibration management",
    "Schedules, due-date alerts, certificates and automatic blocking of overdue instruments.",
  ],
  [
    "Analyst training records",
    "Linked to the methods each person is qualified to run.",
  ],
  [
    "Document control",
    "SOPs and test methods with version history and periodic review.",
  ],
] as const;

export const complianceRows = [
  [
    "FDA 21 CFR Part 11",
    "Electronic records and signatures that FDA predicate rules require (e.g., GMP, GLP, some clinical research)",
    "Validated system, secure computer-generated audit trails, unique user accounts, electronic signatures linked to their records with the signer's name, date/time and meaning",
  ],
  [
    "Good Laboratory Practice (GLP) — 21 CFR Part 58",
    "Nonclinical laboratory studies that support FDA submissions",
    "Study-level traceability, raw data retention, QA unit review, protocol and SOP control",
  ],
  [
    "Good Manufacturing Practice (GMP) — 21 CFR Parts 210/211",
    "Pharmaceutical QC and manufacturing labs",
    "Complete laboratory records, specifications, OOS investigations, change control, data integrity",
  ],
  [
    "ISO/IEC 17025",
    "Testing and calibration labs seeking accreditation",
    "Method validation records, measurement traceability, equipment calibration, staff competence, report content requirements",
  ],
  [
    "HIPAA",
    "Labs handling protected health information (PHI) as covered entities or business associates",
    "Access controls, encryption, audit logs, minimum-necessary access, BAAs with vendors",
  ],
  [
    "CLIA / CAP",
    "US clinical labs testing human specimens",
    "QC, proficiency testing, personnel and result-reporting records",
  ],
];

export const complianceDesign = [
  "Audit trails that cannot be disabled or edited by users, capturing old value, new value, user, timestamp and reason",
  "Electronic signatures that need re-authentication and record the signature's meaning",
  "Role-based access with segregation of duties: an analyst cannot approve their own result where rules forbid it",
  "Encryption in transit and at rest, MFA, session timeouts and SSO",
  "Validation support: requirements traceability, risk assessment, test scripts and evidence (IQ/OQ/PQ). This follows a risk-based approach consistent with GAMP 5 and FDA's Computer Software Assurance thinking",
  "Change control and versioned configuration, so the validated state is documented",
  "Backup, retention and archive policies that keep records readable for the required retention period",
];

export const cloudRows = [
  [
    "Upfront cost",
    "Lower; no servers to buy",
    "Higher; hardware, licenses and IT setup",
  ],
  [
    "Multi-site access",
    "Built in; all labs share live data",
    "Needs VPN, replication or a central data center",
  ],
  [
    "Scalability",
    "Scales storage and users on demand",
    "Limited by in-house hardware",
  ],
  [
    "Instrument connectivity",
    "Needs a secure local gateway or agent to collect instrument files",
    "Direct access on the lab network",
  ],
  [
    "Validation",
    "Requires supplier qualification and controlled release management for updates",
    "Upgrades fully controlled by the lab",
  ],
  [
    "Security responsibility",
    "Shared with the cloud provider (and a BAA where PHI is involved)",
    "Entirely in-house",
  ],
  [
    "Best fit",
    "Multi-site groups, growing labs, contract labs, client portals",
    "Labs with strict data-residency rules, limited connectivity or heavy local instrument automation",
  ],
];

export const customReasons = [
  "Your workflows are distinctive (novel assays, multi-step bioprocesses, unusual sample types)",
  "You need a client-facing portal or white-labeled reporting as part of your service",
  "Per-user licensing and consulting fees keep growing with your lab",
  "Your current system can't integrate with your instruments, ERP or customer platforms",
  "You are a laboratory-services or HealthTech company building LIMS as your own SaaS product",
];

export const architecture = [
  "A configurable data model for sample types, tests, specifications and workflows, managed by lab administrators rather than developers",
  "Modular architecture. Sample management, QC, inventory, instruments and reporting can grow independently.",
  "An API-first design for instruments, portals and enterprise systems",
  "Multi-tenant or single-tenant deployment, depending on whether you run one lab network or serve many customers",
  "Validation-ready documentation produced alongside the code",
];

export const systemRows = [
  [
    "ERP (e.g., SAP, Oracle, Microsoft Dynamics)",
    "Material and batch master data, inspection lots, release decisions",
  ],
  ["MES", "In-process test requests and results"],
  [
    "ELN (electronic lab notebook)",
    "Experiments, protocols and links to samples and results",
  ],
  [
    "Chromatography data systems / SDMS",
    "Sequences, raw data and processed results",
  ],
  ["EHR / EMR / HIS", "Clinical orders and results via HL7 v2 or FHIR"],
  ["Billing and accounting", "Billable tests, client invoices"],
  [
    "Customer portals",
    "Sample submission, status tracking and report download",
  ],
  ["Identity providers", "SSO through SAML or OpenID Connect"],
];

export type LinkSpec = { anchor: string; href: string };

export const implementationSteps: {
  title: string;
  text: string;
  link?: LinkSpec;
}[] = [
  {
    title: "Requirements Discovery",
    text: "We interview lab directors, analysts, QA, IT and customers to define scope, regulatory context, user roles, sample volumes and success criteria. We then write user requirements specifications (URS).",
  },
  {
    title: "Laboratory Workflow Analysis",
    text: "We map each workflow as it runs today, from sample receipt to report, including the exceptions: rejections, retests, OOS investigations and urgent samples.",
  },
  {
    title: "System Architecture",
    text: "We define the data model, deployment model (cloud, on-premise or hybrid), integration architecture, security controls and validation approach.",
  },
  {
    title: "UI/UX Design",
    text: "We design bench-friendly screens for scanning, entry and review, prototype them and test them with analysts before development.",
  },
  {
    title: "Development and Integration",
    text: "We build in agile sprints with regular demos. Instrument and system interfaces are developed alongside the core modules.",
  },
  {
    title: "Data Migration",
    text: "Legacy sample histories, specifications, test methods, inventory and results need careful extraction, cleaning, mapping and reconciliation, often from spreadsheets and older databases. Our data migration services team plans test migrations and reconciliation reports, so historical records stay traceable after cutover.",
    link: {
      anchor: "data migration services",
      href: "/data-services/data-migration-services",
    },
  },
  {
    title: "Testing and Validation",
    text: "We run functional, integration, performance and security testing. For regulated labs, we produce validation documentation (traceability matrix, test scripts and evidence) to support your IQ/OQ/PQ.",
  },
  {
    title: "Deployment",
    text: "We use a phased or parallel go-live, with rollback plans and hypercare support during the first weeks.",
  },
  {
    title: "Training and Ongoing Support",
    text: "We provide role-based training, super-users, administrator handover, monitoring, maintenance and planned enhancements.",
  },
];

export const challengeRows = [
  [
    "Lost or mislabeled samples",
    "Unique IDs, barcode labels and scan-based tracking at every handoff",
  ],
  [
    "Manual transcription errors",
    "Direct instrument integration and validated calculations",
  ],
  [
    "Spreadsheets as the system of record",
    "Controlled, versioned data with audit trails",
  ],
  [
    "Missed turnaround targets",
    "Worklists, priority flags and deadline alerts",
  ],
  [
    "Inspection and audit stress",
    "Organized audit trails, signatures, calibration and training records",
  ],
  [
    "Expired reagents and standards in use",
    "Lot and expiry enforcement that blocks use",
  ],
  [
    "Inconsistent OOS handling",
    "A structured, documented investigation workflow",
  ],
  ["No visibility across sites", "Multi-lab dashboards and shared master data"],
  [
    "Legacy systems that can't integrate",
    "API-first design and an integration layer",
  ],
];

export const whyClickmasters = [
  [
    "We scope before we build",
    "You get the scope, timeline and quote before development starts, the same way we approach every product.",
  ],
  [
    "Workflow-first design",
    "We map your bench workflows and test screens with analysts before writing code.",
  ],
  [
    "Integration capability",
    "Our API development, data integration and data migration services cover the hardest parts of a LIMS project.",
  ],
  [
    "Data and AI expertise",
    "Data engineering, business intelligence and AI automation services support reporting, analytics and smart automation.",
  ],
  [
    "Security-aware engineering",
    "Audit trails, access control, encryption and secure cloud infrastructure are built in, backed by our data security and cloud services.",
  ],
  [
    "Validation-ready delivery",
    "Requirements traceability and test evidence are produced as part of development, not added at the end.",
  ],
  [
    "Full lifecycle",
    "UI/UX, development, QA and testing, cloud and DevOps, and long-term maintenance and support.",
  ],
  [
    "Honest about scope",
    "We explain clearly what software can do for compliance and what remains your lab's responsibility.",
  ],
] as const;

export const limsFaqs = [
  {
    question: "What is a Laboratory Information Management System (LIMS)?",
    answer:
      "A LIMS is software that manages a laboratory's samples, tests, results and resources. It handles sample registration and tracking, test assignment, instrument data capture, QC, review and approval, reporting, inventory and audit trails, so every result is traceable back to its sample, method, instrument and analyst.",
  },
  {
    question: "What is the difference between LIMS and LIS?",
    answer:
      "A LIS (Laboratory Information System) usually serves clinical labs and centers on patients and physician orders, with integrations to EHRs and billing. A LIMS usually centers on samples, batches and studies, and is common in pharmaceutical, biotech, environmental, food and manufacturing labs. Some systems cover both, so the workflow matters more than the label.",
  },
  {
    question: "What are the main features of LIMS software?",
    answer:
      "Core features include sample accessioning and tracking, barcode labeling, chain of custody, workflow automation, test scheduling, results management, instrument integration, QC management, inventory and reagent tracking, reporting, audit trails, role-based access, electronic signatures and multi-lab support.",
  },
  {
    question: "Which laboratories need a LIMS?",
    answer:
      "Any lab with significant sample volume, regulated data or traceability needs can benefit. That includes clinical and diagnostic, pharmaceutical, biotech, R&D, environmental, food and beverage, chemical, manufacturing QC and academic research labs.",
  },
  {
    question: "Is LIMS software 21 CFR Part 11 compliant?",
    answer:
      'Software alone can\'t be "Part 11 compliant". Compliance depends on validation, procedures and how the system is used. A LIMS can be designed with the technical controls Part 11 expects, such as secure audit trails, unique logins and linked electronic signatures, so a regulated lab can validate it for its intended use. Part 11 applies only to records that FDA predicate rules require.',
  },
  {
    question: "Does a LIMS support ISO/IEC 17025 accreditation?",
    answer:
      "A LIMS can support ISO/IEC 17025 by managing method records, equipment calibration, measurement traceability, staff competence and report content. Accreditation is granted to the laboratory by an accreditation body after assessment. It is never granted to the software.",
  },
  {
    question: "Can a LIMS integrate with laboratory instruments?",
    answer:
      "Yes. Common methods include file parsing, serial connections, clinical analyzer protocols (ASTM/LIS2-A2, HL7), vendor APIs and middleware. Each instrument is assessed during discovery, because integration effort varies widely by model and data format.",
  },
  {
    question: "Is cloud-based LIMS software secure?",
    answer:
      "It can be, with encryption in transit and at rest, MFA, role-based access, audit logging, regular security testing and a qualified hosting provider. Labs handling PHI also need a Business Associate Agreement with providers that process that data. Regulated labs should include the cloud provider in their supplier qualification.",
  },
  {
    question: "How does a LIMS handle Out-of-Specification (OOS) results?",
    answer:
      "The LIMS flags results outside specification limits, holds the sample or batch, and starts a documented investigation: a laboratory error check, retest or resample decisions, root cause and conclusion. Each step is linked to the original result and recorded in the audit trail.",
  },
  {
    question: "How much does custom LIMS software development cost?",
    answer:
      "Cost depends on the number of workflows and sample types, instrument integrations, enterprise integrations, data migration, validation documentation, deployment model and number of sites. We give a scoped quote after discovery rather than a generic price.",
  },
  {
    question: "How long does it take to implement a LIMS?",
    answer:
      "A focused LIMS covering core sample, test and reporting workflows for one lab typically takes a few months. Multi-site, regulated deployments with many instrument interfaces and full validation take longer. Phased rollouts let labs start using core modules early.",
  },
  {
    question: "Can you migrate data from spreadsheets or an existing LIMS?",
    answer:
      "Yes. Migration covers extracting, cleaning, mapping and loading historical samples, results, specifications and inventory, then reconciling them against the source. How much history moves as structured data depends on the quality and format of the legacy data.",
  },
];

const dir = "/products/lims";

export const limsImages = {
  dashboard: {
    src: `${dir}/lims-laboratory-dashboard.svg`,
    width: 1440,
    height: 900,
    alt: "Laboratory information management system dashboard showing sample status, pending tests and turnaround times",
  },
  tracking: {
    src: `${dir}/lims-sample-tracking-chain-of-custody.svg`,
    width: 1440,
    height: 900,
    alt: "LIMS software sample tracking screen with barcode IDs, storage locations and chain of custody history",
  },
  scan: {
    src: `${dir}/lims-analyst-scanning-sample-tube.svg`,
    width: 1440,
    height: 900,
    alt: "Lab analyst scanning a barcoded sample tube into a laboratory information management system",
  },
  qc: {
    src: `${dir}/lims-quality-control-chart-oos.svg`,
    width: 1440,
    height: 900,
    alt: "LIMS quality control chart showing control sample results and out-of-specification alerts",
  },
  integration: {
    src: `${dir}/lims-instrument-integration-diagram.svg`,
    width: 1200,
    height: 820,
    alt: "Laboratory instrument integration diagram connecting analyzers, ERP and EHR systems to a cloud-based LIMS",
  },
  results: {
    src: `${dir}/lims-results-review-specification-checks.svg`,
    width: 1440,
    height: 900,
    alt: "LIMS results review screen with instrument data, specification checks and electronic signature approval",
  },
  audit: {
    src: `${dir}/lims-audit-trail-electronic-signature.svg`,
    width: 1440,
    height: 900,
    alt: "LIMS audit trail with old and new values, reasons for change and electronic signature meaning",
  },
  workflow: {
    src: `${dir}/lims-sample-lifecycle-workflow.svg`,
    width: 1400,
    height: 600,
    alt: "Sample lifecycle in a laboratory information management system from accessioning to storage and disposal",
  },
} as const;
