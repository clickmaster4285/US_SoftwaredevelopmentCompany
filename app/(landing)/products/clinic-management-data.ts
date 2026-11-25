// Content for /products/healthcare-medical-software/clinic-management-software.
// Source: clinic-management-software-seo-content.docx (prepared 16 Nov 2026).
// FAQ text is reused verbatim by the FAQPage JSON-LD, so edit both together.

export const CLINIC_PATH =
  "/products/healthcare-medical-software/clinic-management-software";

export const clinicTitle =
  "Clinic Management Software Development | ClickMasters";

export const clinicDescription =
  "Custom clinic management software for appointments, patient records, EMR, billing and follow-ups, built around your clinic's workflow.";

export const productLink = (slug: string) =>
  `/products/healthcare-medical-software/${slug}`;

export const heroOutcomes = [
  "A single calendar for every doctor, room and branch",
  "Patient profiles and visit history in one place",
  "Consultation notes, prescriptions and lab orders linked to each visit",
  "Invoices, payments and outstanding balances tracked against each patient",
  "Automated reminders and follow-ups that don't depend on someone remembering",
];

export const coreRecords = [
  {
    title: "The patient record",
    text: "Who the patient is, how to contact them, their history, allergies, insurance or payment details and past visits.",
  },
  {
    title: "The appointment",
    text: "When and with whom the patient is booked, for what reason, in which room or branch.",
  },
  {
    title: "The visit",
    text: "What happened during the consultation, including notes, diagnoses, prescriptions, lab orders, procedures and the charges that follow.",
  },
];

export const whoNeeds = [
  {
    title: "Clinic owners",
    text: "who want visibility into appointments, revenue and staff workload without asking for manual reports.",
  },
  {
    title: "Doctors and specialists",
    text: "who need patient history and previous notes in front of them before the patient walks in.",
  },
  {
    title: "Front-desk and administrative staff",
    text: "who handle bookings, check-ins, payments and phone calls at the same time.",
  },
  {
    title: "Multi-doctor and multi-specialty clinics",
    text: "coordinating shared rooms, equipment and schedules.",
  },
  {
    title: "Healthcare entrepreneurs",
    text: "opening new clinics or clinic chains who want systems in place from day one.",
  },
];

export const manualVsDigital = [
  [
    "Booking",
    "Paper diary or shared spreadsheet; double bookings are common",
    "Live calendar per doctor and room; conflicts are blocked at booking",
  ],
  [
    "Patient lookup",
    "Searching files or multiple apps",
    "Search by name, phone, ID or date of birth",
  ],
  [
    "Consultation notes",
    "Handwritten, hard to read or retrieve",
    "Structured notes attached to the visit and patient",
  ],
  [
    "Prescriptions",
    "Handwritten slips",
    "Generated from templates, stored in visit history",
  ],
  [
    "Billing",
    "Calculated by hand, entered separately",
    "Charges flow from the consultation to the invoice",
  ],
  [
    "Follow-ups",
    "Depend on staff memory",
    "Scheduled and tracked automatically",
  ],
  [
    "Reporting",
    "Compiled manually at month-end",
    "Available on a dashboard at any time",
  ],
];

export const challenges = [
  {
    title: "Appointment Scheduling Conflicts",
    problem:
      "Two patients booked into the same slot, a doctor booked while on leave, or a procedure room double-allocated. Usually this happens because more than one person manages the diary.",
    solution:
      "A single shared calendar checks doctor availability, room capacity and appointment duration before confirming a booking. Leave, breaks and clinic holidays are blocked in advance.",
  },
  {
    title: "Disorganized Patient Records",
    problem:
      "Patient details exist in several places. Paper files go missing, duplicates build up, and doctors start consultations without full history.",
    solution:
      "One patient profile per person, with duplicate detection at registration and all visits, notes, prescriptions and documents attached to that profile.",
  },
  {
    title: "Manual Billing Errors",
    problem:
      "Services are missed, prices are entered incorrectly, discounts are applied inconsistently and receipts don't match what was performed.",
    solution:
      "A configured service and price list, with charges added from the consultation record, means the invoice reflects what was actually recorded during the visit.",
  },
  {
    title: "Long Patient Waiting Times",
    problem:
      "Overbooking, slow check-in and poor visibility of who is waiting for whom.",
    solution:
      "Realistic appointment durations by visit type, quick check-in for pre-registered patients, and a live queue view that shows doctors and staff who has arrived and how long they've waited.",
  },
  {
    title: "Poor Staff Coordination",
    problem:
      "Reception doesn't know a doctor is running late, nurses don't know which room a patient is in, and messages are passed verbally.",
    solution:
      "Shared status updates (arrived, in triage, with doctor, ready for billing) visible to everyone involved in the visit.",
  },
  {
    title: "Missed Follow-Ups",
    problem:
      "A doctor asks a patient to return in two weeks, but no one books it or reminds the patient.",
    solution:
      "Follow-up intervals recorded during the consultation create tasks and reminders automatically, and unbooked follow-ups appear on a list for staff to action.",
  },
  {
    title: "Reporting Difficulties",
    problem:
      "Owners can't easily answer basic questions: How many patients did we see last month? Which doctor has the longest waiting list? How much is outstanding?",
    solution:
      "Reports are generated from data the clinic already records every day, with no separate data entry.",
  },
  {
    title: "Scattered Clinic Information",
    problem:
      "Policies, price lists, staff schedules, lab results and patient messages live in different apps and inboxes.",
    solution:
      "A central system with role-based access, so each person sees the information relevant to their job in one place.",
  },
];

export type ClinicFeature = {
  title: string;
  icon: string;
  does: string;
  how: string;
  problem: string;
  benefits: string | string[];
  /** Optional link to the dedicated product page for deeper coverage. */
  note?: { before: string; anchor: string; slug: string; after: string };
};

export const features: ClinicFeature[] = [
  {
    title: "Appointment Scheduling and Calendar Management",
    icon: "CalendarCheck",
    does: "Clinic appointment scheduling software manages bookings for every doctor, room and service from one calendar.",
    how: "Staff choose a patient, visit type and doctor. The system shows only slots that fit the visit's duration and the doctor's availability. Day, week and per-doctor views are available, and recurring appointments (such as physiotherapy sessions) can be booked as a series. Online booking can be added if patients should book themselves.",
    problem:
      "Double bookings, overbooking and time lost on phone back-and-forth.",
    benefits: [
      "Owners: better use of doctor time and rooms.",
      "Doctors: a predictable day with realistic slot lengths.",
      "Staff: faster bookings with fewer errors.",
      "Patients: confirmed times and less waiting.",
    ],
  },
  {
    title: "Patient Registration and Profile Management",
    icon: "UserRound",
    does: "Captures and maintains each patient's demographic, contact, emergency contact, insurance or payment and consent information.",
    how: "New patients are registered at the desk or through a pre-visit online form. The system checks for possible duplicates by name, phone and date of birth. Documents such as ID or referral letters can be uploaded to the profile.",
    problem:
      "Incomplete details, duplicate records and repeated paperwork on every visit.",
    benefits:
      "Faster check-in, accurate contact data for reminders, and a single source of truth for every team member.",
  },
  {
    title: "Electronic Medical Records (EMR)",
    icon: "ClipboardList",
    does: "Electronic medical records for clinics let doctors document consultations digitally: presenting complaints, examination findings, diagnoses, treatment plans and clinical notes.",
    how: "Doctors use structured templates (configurable by specialty) along with free-text notes. Records are tied to the visit and the patient, time-stamped, and attributed to the clinician who wrote them. Diagnosis coding (such as ICD-10) can be supported where needed.",
    problem:
      "Illegible handwriting, lost notes and time spent searching for past findings.",
    benefits:
      "Doctors see a patient's history in seconds, notes are consistent across clinicians, and records are available for audits and referrals.",
    note: {
      before: "For clinics that need a full standalone charting system, our ",
      anchor: "Electronic Medical Records (EMR) Software",
      slug: "electronic-medical-records-emr-software",
      after: " covers clinical documentation in more depth.",
    },
  },
  {
    title: "Electronic Health Records (EHR) Integration",
    icon: "Link2",
    does: "Connects your clinic system with external EHR platforms so patient information can be shared with hospitals, other providers or health networks where permitted.",
    how: "Integrations are typically built on healthcare data standards such as HL7 v2 and HL7 FHIR, or on the specific API of the EHR platform involved. The exact scope depends on what the external system exposes and what access it grants.",
    problem:
      "Re-typing information received from other providers and missing history from outside the clinic.",
    benefits:
      "More complete patient context for doctors and less duplicate data entry for staff. (Integrations are built per project. See the Integrations section below.)",
  },
  {
    title: "Doctor and Staff Management",
    icon: "UsersRound",
    does: "Manages doctor profiles, specialties, working hours, leave, consultation fees and staff roles. This is the foundation of multi-doctor clinic management software.",
    how: "Each doctor has a schedule template (for example, Monday morning at Branch A, Wednesday afternoon at Branch B). Leave and changes update the booking calendar automatically. Staff accounts are tied to roles that control what they can see and do.",
    problem:
      "Bookings made against unavailable doctors and confusion over who covers which session.",
    benefits:
      "Clear rosters, accurate availability and fairer workload distribution.",
  },
  {
    title: "Clinic Billing and Invoice Generation",
    icon: "ReceiptText",
    does: "Clinic billing software generates invoices and receipts from the services, procedures and items recorded during each visit.",
    how: "The clinic sets up its service catalogue and price list, including taxes, packages and discounts. When a consultation is completed, recorded services are added to the invoice. Staff review the invoice, apply any approved adjustments and issue it digitally or in print.",
    problem: "Missed charges, pricing errors and slow checkout.",
    benefits:
      "Accurate invoices, consistent pricing and faster patient checkout.",
    note: {
      before:
        "If your clinic handles insurance claims, coding and payer follow-up, see our dedicated ",
      anchor: "Medical Billing Software",
      slug: "medical-billing-software",
      after: ", which can be integrated with your clinic system.",
    },
  },
  {
    title: "Payment and Outstanding Balance Tracking",
    icon: "Wallet",
    does: "Records payments against invoices and tracks unpaid or partially paid balances per patient.",
    how: "Payments can be recorded by method (cash, card, bank transfer, online payment link or insurance portion). Balances update automatically. Overdue amounts appear on a receivables list, and staff can send payment reminders.",
    problem: "Unclear patient balances and revenue that's never collected.",
    benefits:
      "Owners see what's owed at any time. Front-desk staff can resolve balances while the patient is still at the clinic.",
  },
  {
    title: "Prescription Management",
    icon: "Pill",
    does: "Lets doctors create, print or send prescriptions from within the consultation.",
    how: "Doctors select medicines from a configurable drug list, set dosage, frequency and duration, and use saved templates for common prescriptions. Prescriptions are stored in the patient's history. Allergy warnings can be shown where the allergy is recorded. Electronic transmission to pharmacies depends on local e-prescribing regulations and available integrations.",
    problem:
      "Handwritten prescriptions that are hard to read and no record of what was prescribed.",
    benefits:
      "Clear prescriptions for patients and pharmacists, and complete medication history for doctors.",
  },
  {
    title: "Patient Visit History",
    icon: "History",
    does: "Shows a chronological timeline of every visit, including notes, diagnoses, prescriptions, lab results, documents and invoices.",
    how: "Every action linked to a visit is saved to the patient timeline automatically. Doctors can filter by visit type, doctor or date.",
    problem: "Having to ask patients to recall previous treatment.",
    benefits:
      "Better continuity of care, especially when patients see different doctors in the same clinic.",
  },
  {
    title: "Laboratory and Diagnostic Workflow Integration",
    icon: "FlaskConical",
    does: "Manages lab and imaging orders from request to result.",
    how: "Doctors raise orders during the consultation. Orders are sent to an in-house lab module or an external lab (through integration, or as a printed or digital request). Results are attached to the patient record, and the requesting doctor is notified.",
    problem:
      "Lost lab slips, results that arrive but aren't reviewed, and patients chasing results by phone.",
    benefits:
      "A closed loop from order to result, with pending results visible on a worklist.",
  },
  {
    title: "Automated Appointment Reminders",
    icon: "BellRing",
    does: "Sends reminders before appointments by SMS, email or messaging apps.",
    how: "The clinic sets reminder timing (for example, 48 hours and 2 hours before). Messages use templates with the patient's name, doctor, time and location. Patients can confirm or request a change where two-way messaging is enabled.",
    problem: "No-shows and late cancellations that leave empty slots.",
    benefits:
      "Fewer wasted slots, less time spent on reminder calls, and patients who arrive prepared.",
  },
  {
    title: "Patient Follow-Up Management",
    icon: "Repeat",
    does: "Makes sure patients who need to return are booked and contacted.",
    how: "Doctors set a follow-up interval during the consultation. The system creates a follow-up task, sends the patient a booking reminder, and lists overdue follow-ups for staff.",
    problem:
      "Patients with chronic conditions or post-treatment reviews falling through the cracks.",
    benefits:
      "Better continuity of care for patients and more consistent return visits for the clinic.",
  },
  {
    title: "Role-Based Access Control",
    icon: "KeyRound",
    does: "Controls what each user can see and do based on their role.",
    how: "Roles such as Receptionist, Nurse, Doctor, Billing and Administrator are configured with specific permissions. For example, receptionists can book and bill but can't open clinical notes, and doctors can view their own patients' records. Permissions can be refined by branch or department.",
    problem:
      "Everyone having access to everything, which is a privacy and operational risk.",
    benefits:
      'Supports the "minimum necessary" access principle that healthcare privacy rules expect, and reduces accidental changes.',
  },
  {
    title: "Analytics and Reporting Dashboard",
    icon: "BarChart3",
    does: "Turns daily clinic data into reports and dashboards.",
    how: "Pre-built and custom reports cover appointments by doctor or service, no-show rates, new versus returning patients, revenue by service, outstanding balances and branch comparisons. Reports can be filtered by date and exported.",
    problem: "Decisions made on instinct because data is too hard to compile.",
    benefits:
      "Owners can see which services, doctors and time slots drive the clinic, and adjust staffing or opening hours accordingly.",
  },
  {
    title: "Multi-Branch Clinic Management",
    icon: "Building2",
    does: "Runs several clinic locations from one system.",
    how: "Each branch has its own rooms, schedules, price lists (if needed) and staff, while patient records can be shared across branches according to your rules. Head office sees consolidated reports, and branch managers see their own.",
    problem:
      "Separate systems per location, patients re-registered at every branch, and no group-level reporting.",
    benefits:
      "Patients can visit any branch with their history available, and owners manage the group from one view.",
  },
  {
    title: "Cloud-Based Data Access",
    icon: "Cloud",
    does: "Cloud-based clinic management software lets authorized users access the system securely from any approved device with an internet connection.",
    how: "The application is hosted on secure cloud infrastructure (such as AWS, Microsoft Azure or Google Cloud, selected per project and region) with encrypted connections, managed backups and controlled access. On-premise or hybrid deployment can be considered where a clinic's policies require it.",
    problem:
      "Software tied to a single computer at the front desk, and data lost when hardware fails.",
    benefits:
      "Doctors can review schedules remotely, owners can check reports from anywhere, and the clinic isn't dependent on one machine.",
  },
  {
    title: "Patient Communication Management",
    icon: "MessageSquare",
    does: "Centralizes outbound and inbound patient communication.",
    how: "Appointment confirmations, reminders, lab-ready notices, payment reminders, health campaigns and clinic announcements are sent from templates and logged against the patient profile. Patient communication preferences and consent are respected.",
    problem:
      "Messages sent from staff personal phones, with no record of what was said.",
    benefits:
      "Consistent, professional communication and a full log for every patient.",
  },
  {
    title: "Custom Notifications and Workflow Automation",
    icon: "Workflow",
    does: "Clinic workflow automation handles repetitive tasks based on rules you define.",
    how: "Examples include notifying the doctor when a patient checks in, alerting billing when a visit is completed, flagging patients with an unpaid balance at booking, assigning a task when a lab result arrives, or sending a feedback request after a visit.",
    problem: "Routine steps that rely on someone remembering to do them.",
    benefits:
      "Less manual coordination, fewer missed steps and more staff time for patients.",
  },
];

export const journeySteps = [
  "Patient Registration",
  "Appointment Booking",
  "Doctor Consultation",
  "Medical Records",
  "Prescription",
  "Billing",
  "Payment",
  "Follow-Up",
];

export const journeyRows = [
  [
    "1. Patient Registration",
    "Patient registers at the desk or online before the visit",
    "Demographics, contact details, consent, insurance or payment info",
  ],
  [
    "2. Appointment Booking",
    "Staff or patient books a slot with the right doctor",
    "Doctor, room, visit type, time; reminders scheduled",
  ],
  [
    "3. Doctor Consultation",
    "Patient checks in, then the doctor opens the visit with history on screen",
    "Check-in time, waiting time, consultation start",
  ],
  [
    "4. Medical Records",
    "Doctor documents findings, diagnosis and plan",
    "Clinical notes, diagnoses, lab orders, attachments",
  ],
  [
    "5. Prescription",
    "Doctor prescribes from the visit screen",
    "Medicines, dosage, duration; added to history",
  ],
  [
    "6. Billing",
    "Services from the visit become invoice items",
    "Itemized invoice, taxes, discounts",
  ],
  [
    "7. Payment",
    "Patient pays in full, in part, or via insurance",
    "Payment method, balance, receipt",
  ],
  [
    "8. Follow-Up",
    "Return visit is scheduled or reminded",
    "Follow-up task, reminder, next appointment",
  ],
];

export const benefits = [
  {
    title: "Improved Administrative Efficiency",
    text: "Clinic administration software removes repeated data entry. A patient's details are entered once at registration and then reused for bookings, prescriptions, invoices and reminders.",
    example:
      "A receptionist checking in a returning patient confirms the details on screen instead of filling out a new form.",
  },
  {
    title: "Better Patient Experience",
    text: "Patients notice shorter check-ins, accurate appointment times, clear prescriptions and timely reminders.",
    example:
      "A patient receives a reminder the day before, confirms with one tap, and on arrival is checked in within moments because their details are already on file.",
  },
  {
    title: "Reduced Manual Workload",
    text: "Automation handles reminders, follow-up lists and routine notifications.",
    example:
      "Instead of calling every patient booked for tomorrow, staff only call those who haven't confirmed.",
  },
  {
    title: "Organized Medical Records",
    text: "Every note, prescription and result sits on one patient timeline.",
    example:
      "A doctor seeing a colleague's patient for the first time can review the last three visits before calling them in.",
  },
  {
    title: "More Efficient Appointment Management",
    text: "Visit-type durations and conflict checks make schedules realistic.",
    example:
      "A 45-minute procedure can't be squeezed into a 15-minute consultation slot by mistake.",
  },
  {
    title: "Improved Billing Visibility",
    text: "Owners see daily collections, outstanding balances and revenue by service without waiting for month-end.",
    example:
      "An administrator spots that a particular service is often discounted and reviews the pricing policy.",
  },
  {
    title: "Better Communication Between Staff",
    text: "Visit status updates replace shouting down the corridor.",
    example:
      "The nurse marks triage complete, and the doctor's screen shows the patient is ready.",
  },
  {
    title: "Data-Driven Clinic Management",
    text: "Reports show which services, doctors and time slots are busiest.",
    example:
      "A clinic notices that Saturday mornings fill weeks in advance and adds an extra doctor session.",
  },
  {
    title: "Scalable Clinic Operations",
    text: "When the clinic adds doctors, services or branches, the clinic management software system grows with it instead of being replaced.",
    example:
      "Opening a second branch means configuring a new location, not migrating to new software.",
  },
];

export const clinicTypes = [
  {
    title: "General Practice Clinics",
    icon: "Stethoscope",
    text: "High patient volume, short consultations and a mix of walk-ins and booked visits. Key requirements include fast registration, a walk-in queue alongside scheduled appointments, quick-entry consultation templates, chronic-condition follow-ups and referral letters.",
  },
  {
    title: "Dental Clinics",
    icon: "Smile",
    text: "Treatment is often planned across several sittings. Dental software usually needs an interactive tooth chart (odontogram), multi-visit treatment plans with cost estimates, chair-based scheduling rather than doctor-only scheduling, X-ray image attachments and recall reminders for check-ups and cleanings.",
  },
  {
    title: "Dermatology Clinics",
    icon: "ScanFace",
    text: "Visual documentation matters. Requirements include clinical photo capture with before-and-after comparison, procedure and package billing (for example, laser or cosmetic sessions), consent forms per procedure and session-based scheduling.",
  },
  {
    title: "Cardiology Clinics",
    icon: "HeartPulse",
    text: "Diagnostic results drive decisions. Requirements include ECG, echo and stress test ordering and result attachment, tracking of vital signs and trends, medication history, and integration with diagnostic devices or labs where technically feasible.",
  },
  {
    title: "Pediatric Clinics",
    icon: "Baby",
    text: "The patient is a child, but the contact is a parent or guardian. Requirements include guardian-linked profiles, growth charts (height, weight, head circumference), immunization schedules with due-date reminders and weight-based dosing support in prescriptions.",
  },
  {
    title: "Gynecology Clinics",
    icon: "Flower2",
    text: "Care often follows a timeline, such as pregnancy. Requirements include antenatal visit schedules, gestational age calculation, ultrasound report attachments, sensitive-record privacy controls and reminders tied to care milestones.",
  },
  {
    title: "Physiotherapy Clinics",
    icon: "PersonStanding",
    text: "Treatment happens in series. Requirements include recurring session booking, treatment plans with session counts, progress and outcome tracking, exercise programme handouts and package or session-based billing.",
  },
  {
    title: "Multi-Specialty Clinics",
    icon: "Hospital",
    text: "Several departments share patients, rooms and billing. Requirements include specialty-specific templates in one system, internal referrals between doctors, shared patient records with department-level permissions and consolidated billing across departments.",
  },
  {
    title: "Outpatient Medical Centres",
    icon: "Building2",
    text: "These combine consultations, diagnostics and minor procedures. Requirements include queue and token management, room and equipment scheduling, lab and imaging modules, day-procedure workflows and detailed operational reporting.",
  },
];

export const customReasons = [
  {
    title: "Custom Workflows",
    text: "Your check-in process, consultation templates, approval steps and billing rules are designed into the software instead of being worked around.",
  },
  {
    title: "Flexible Modules",
    text: "Start with the modules you need now, such as scheduling, records and billing, and add others like a lab module, a patient app or multi-branch support as the clinic grows.",
  },
  {
    title: "Integration Capabilities",
    text: "Connect to the specific labs, payment providers, messaging services or EHR platforms your clinic already uses, where those systems provide integration access.",
  },
  {
    title: "Scalability",
    text: "The architecture is planned for your expected growth in users, patients, branches and data volume.",
  },
  {
    title: "Custom Reporting",
    text: "Reports are built around the questions your management actually asks, not only the reports a vendor chose to include.",
  },
  {
    title: "Multi-Location Support",
    text: "Branch structures, shared or separate patient records, and consolidated reporting are designed around how your group is organized.",
  },
  {
    title: "Role-Based Permissions",
    text: "Permissions are defined by your roles, departments and branches, not generic presets.",
  },
  {
    title: "Business-Specific Requirements",
    text: "Local language, regional tax rules, specific invoice formats, specialty workflows or unique service models can all be included in the scope.",
  },
];

export const securityControls = [
  {
    title: "Role-based access control",
    text: "users only access the data their role requires.",
  },
  {
    title: "Authentication",
    text: "secure login with strong password policies, optional multi-factor authentication (MFA) and automatic session timeouts.",
  },
  {
    title: "Data encryption",
    text: "encryption in transit (TLS) and at rest for databases and stored files.",
  },
  {
    title: "Secure backups",
    text: "automated, encrypted backups with defined retention and tested restore procedures.",
  },
  {
    title: "Audit logs",
    text: "records of who viewed, created, changed or deleted patient information, and when.",
  },
  {
    title: "Access monitoring",
    text: "alerts for unusual activity such as repeated failed logins or bulk data exports.",
  },
  {
    title: "Data protection practices",
    text: "data minimization, secure deletion and separation of environments (development, testing, production).",
  },
  {
    title: "Secure API integrations",
    text: "authenticated, encrypted connections to third-party systems, with access limited to the data each integration needs.",
  },
];

export const securityLayers = [
  { label: "User", detail: "Approved device and named account" },
  {
    label: "Authentication",
    detail: "Strong passwords, MFA, session timeouts",
  },
  { label: "Role-based access", detail: "Only the data each role needs" },
  { label: "Encrypted application", detail: "TLS on every connection" },
  {
    label: "Encrypted database",
    detail: "Encryption at rest for records and files",
  },
  { label: "Backups", detail: "Automated, encrypted, restore-tested" },
];

export const privacyRegions = [
  {
    region: "USA",
    text: "The HIPAA Privacy and Security Rules set requirements for protecting patient health information, including administrative, physical and technical safeguards. Vendors that handle protected health information for a covered entity are typically required to sign a Business Associate Agreement (BAA).",
  },
  {
    region: "UK and EU",
    text: "UK GDPR / EU GDPR treat health data as special category data, which requires a lawful basis, appropriate security, data processing agreements and respect for patient rights. UK clinics may also need to consider NHS-related data security standards where applicable.",
  },
  {
    region: "Canada",
    text: "PIPEDA and provincial health privacy laws (for example, Ontario's PHIPA) may apply.",
  },
  {
    region: "Australia",
    text: "The Privacy Act 1988 and the Australian Privacy Principles govern health information.",
  },
];

export const integrationRows = [
  [
    "EHR and EMR systems",
    "Share or import patient records with other providers",
    "HL7 v2, HL7 FHIR or vendor APIs",
  ],
  [
    "Laboratory systems (LIS)",
    "Send orders, receive results into the patient record",
    "HL7 messages, lab APIs or structured file exchange",
  ],
  [
    "Pharmacy management systems",
    "Send prescriptions, check medicine availability",
    "Pharmacy APIs; e-prescribing networks subject to local regulation",
  ],
  [
    "Medical billing solutions",
    "Pass charges and codes for claims processing",
    "Billing platform APIs or structured exports",
  ],
  [
    "Payment gateways",
    "Card payments, payment links, online booking deposits",
    "Gateway APIs such as Stripe, PayPal or regional providers",
  ],
  [
    "Telemedicine platforms",
    "Video consultations linked to appointments",
    "Video SDKs/APIs or integration with an existing platform",
  ],
  [
    "Patient communication tools",
    "SMS, email, WhatsApp reminders and messages",
    "Messaging provider APIs (for example, Twilio or WhatsApp Business Platform)",
  ],
];

export const processSteps = [
  {
    title: "Requirement Analysis",
    text: "We discuss your goals, clinic size, specialties, users, current tools and pain points.",
    deliverable: "A requirements summary and an initial list of modules.",
  },
  {
    title: "Clinic Workflow Discovery",
    text: "We map how patients, staff and information actually move through your clinic, from booking to follow-up.",
    deliverable:
      "Documented workflows, user roles and a prioritized feature list (MVP vs later phases).",
  },
  {
    title: "UI/UX Design",
    text: "We design screens for each role, with attention to speed at the front desk and clarity in the consultation room.",
    deliverable:
      "Wireframes and clickable prototypes to review with your team before development.",
  },
  {
    title: "Software Architecture",
    text: "We define the technology stack, data model, hosting approach, security controls and integration plan.",
    deliverable:
      "An architecture overview, a hosting recommendation and a security approach.",
  },
  {
    title: "Frontend and Backend Development",
    text: "We build the application in iterations, so you can see working features regularly.",
    deliverable: "Regular progress demos and access to a staging environment.",
  },
  {
    title: "Third-Party Integrations",
    text: "We connect the agreed external systems: labs, payments, messaging, EHR and others.",
    deliverable: "Working, tested integrations and their documentation.",
  },
  {
    title: "Security and Quality Testing",
    text: "We run functional, regression, performance and security testing, including role-permission checks.",
    deliverable:
      "Test reports, fixed defects and a user acceptance testing (UAT) session with your staff.",
  },
  {
    title: "Deployment",
    text: "We deploy to production, migrate existing data where required and support go-live.",
    deliverable:
      "A live system, data migration, admin documentation and staff onboarding support.",
  },
  {
    title: "Maintenance and Ongoing Support",
    text: "After launch we provide bug fixes, updates, monitoring and new feature development as your clinic grows.",
    deliverable:
      "An agreed support arrangement and a roadmap for future improvements.",
  },
];

export const customVsReadyRows = [
  [
    "Customization",
    "Built around your workflows, specialties and roles",
    "Configurable within the limits the vendor provides",
  ],
  [
    "Initial investment",
    "Usually higher upfront, because development is scoped to your needs",
    "Usually lower upfront; typically subscription-based",
  ],
  [
    "Ongoing costs",
    "Hosting, support and enhancements, as agreed",
    "Recurring licence or per-user fees, which may rise with users or branches",
  ],
  [
    "Workflow flexibility",
    "High: workflows are designed for you",
    "Moderate: clinics often adapt processes to the software",
  ],
  [
    "Scalability",
    "Planned for your growth path",
    "Depends on the vendor's plans and pricing tiers",
  ],
  [
    "Integrations",
    "Built to connect with your chosen systems, where APIs allow",
    "Limited to the vendor's supported integrations",
  ],
  [
    "Data ownership",
    "Terms are set in your development and hosting agreements, so you can negotiate full control",
    "Governed by the vendor's terms; export options vary",
  ],
  [
    "Maintenance",
    "Handled by your development partner or in-house team",
    "Handled by the vendor",
  ],
  [
    "Feature expansion",
    "Add features on your own roadmap",
    "Depends on the vendor's roadmap",
  ],
  ["Time to start", "Requires a development period", "Can often start quickly"],
];

export const costFactors = [
  {
    title: "Number of modules",
    text: "a scheduling-and-billing system is a very different project from one that includes EMR, labs, pharmacy and a patient app.",
  },
  {
    title: "Number of users and roles",
    text: "more roles mean more permission design and testing.",
  },
  {
    title: "Single or multi-branch",
    text: "multi-location support adds data structure, reporting and permission complexity.",
  },
  {
    title: "Integration complexity",
    text: "each external system (labs, EHR, billing, payments, messaging) adds work, and some are more complex than others.",
  },
  {
    title: "Web and mobile applications",
    text: "a web app for staff, plus optional mobile apps for doctors or patients.",
  },
  {
    title: "Security requirements",
    text: "MFA, detailed audit logs, advanced monitoring and compliance-driven controls.",
  },
  {
    title: "Reporting requirements",
    text: "standard reports vs custom dashboards and data exports.",
  },
  {
    title: "Hosting and infrastructure",
    text: "cloud provider, region, backup and availability requirements.",
  },
  {
    title: "Data migration",
    text: "moving records from existing systems or spreadsheets.",
  },
];

export const whyClickMasters = [
  {
    title: "Custom Software Development Expertise",
    text: "We build software around specific business workflows rather than forcing businesses into fixed templates.",
  },
  {
    title: "Web and Mobile Development",
    text: "We can deliver a web-based clinic system for staff, and a clinic management system app for doctors or patients where your project needs it.",
  },
  {
    title: "Scalable Software Architecture",
    text: "Our systems are designed with modular, cloud-ready architecture so they can grow with your clinic.",
  },
  {
    title: "UI/UX Design",
    text: "Our design work focuses on clear, fast interfaces for busy front desks and consultation rooms.",
  },
  {
    title: "API Development and Integration",
    text: "We build secure APIs and connect your system with the third-party tools your clinic relies on.",
  },
  {
    title: "Quality Assurance",
    text: "Our QA and testing services cover functional, regression, load and payment-flow testing before launch.",
  },
  {
    title: "Ongoing Maintenance and Support",
    text: "We offer maintenance and support after go-live, including fixes, updates and new features.",
  },
];

export const consultationChecklist = [
  [
    "Custom clinic software consultation",
    "your goals, clinic type and team structure",
  ],
  [
    "Workflow assessment",
    "how patients and information currently move through your clinic",
  ],
  ["Feature planning", "which modules you need now and which can wait"],
  [
    "Development discussion",
    "technology, hosting, integrations and security approach",
  ],
  ["Project quotation", "a clear scope, timeline and cost estimate"],
];

export const clinicFaqs = [
  {
    question: "What is clinic management software?",
    answer:
      "Clinic management software is a digital system that runs a clinic's daily operations in one place: appointment scheduling, patient registration, medical records, prescriptions, billing, payments, reminders and reporting. It replaces paper diaries, spreadsheets and disconnected tools, so information entered once (such as patient details) is available to everyone who needs it, according to their role.",
  },
  {
    question: "How does clinic management software work?",
    answer:
      "It links three records: the patient, the appointment and the visit. Staff register the patient and book a slot. The doctor opens the visit with the patient's history on screen, records notes and prescriptions, and the services recorded flow to the invoice. Payments, balances and follow-up reminders are then tracked automatically against the same patient profile.",
  },
  {
    question: "What features should a clinic management system include?",
    answer:
      "Core features include appointment scheduling, patient registration, electronic medical records, prescriptions, billing and payment tracking, automated reminders, follow-up management, role-based access and reporting. Depending on the clinic, you may also need lab integration, multi-branch support, patient communication tools, online booking, telemedicine or a patient mobile app. The right mix depends on your specialty and size.",
  },
  {
    question: "How does clinic software help doctors?",
    answer:
      "Clinic software for doctors puts the patient's history, previous notes, prescriptions and lab results on screen before the consultation begins. Specialty templates speed up documentation, prescription templates reduce repetitive writing, and follow-ups are scheduled from the visit screen. Doctors also see their day's schedule and patient arrival status, which helps them manage time between consultations.",
  },
  {
    question: "Can clinic management software manage multiple doctors?",
    answer:
      "Yes. Multi-doctor clinic management software gives each doctor their own schedule, working hours, leave, consultation fees and patient list, while sharing a central calendar and patient database. Reception can see every doctor's availability at once, patients can be referred internally, and reports can compare appointments and revenue by doctor.",
  },
  {
    question: "Does clinic management software include appointment scheduling?",
    answer:
      "Appointment scheduling is usually the central module. It manages bookings by doctor, room and visit type, prevents double bookings, supports recurring appointments and walk-ins, and sends automated reminders. Online booking through your website or a patient app can also be included, so patients can choose available slots without calling the clinic.",
  },
  {
    question: "Can it manage patient medical records?",
    answer:
      "Yes. An integrated EMR module stores consultation notes, diagnoses, treatment plans, prescriptions, lab results and documents on each patient's timeline. Records are time-stamped and attributed to the clinician who created them, and access is controlled by role. Templates can be tailored to each specialty, such as dental charts, growth charts or physiotherapy progress notes.",
  },
  {
    question: "Is clinic management software suitable for small clinics?",
    answer:
      "Yes. A small clinic can start with a focused system covering scheduling, patient records, billing and reminders, then add modules later. Even single-doctor practices benefit from fewer no-shows, faster check-ins and organized records. For very standard workflows, a ready-made product may be enough, so we'll tell you honestly if custom development isn't the right fit.",
  },
  {
    question:
      "Can clinic management software integrate with EHR and EMR systems?",
    answer:
      "Often, yes, but it depends on the external system. Integrations are typically built using HL7 v2, HL7 FHIR or the vendor's own API, and require the other system to provide access. We assess each integration's feasibility, data scope and requirements during discovery, so you know what's achievable before development starts.",
  },
  {
    question: "How much does custom clinic management software cost?",
    answer:
      "Cost depends on the number of modules, users and branches, integration complexity, whether you need web and mobile apps, security and reporting requirements, data migration and hosting. Because these vary widely between clinics, we don't publish fixed prices. Share your requirements and we'll provide a scoped estimate with a breakdown before any development begins.",
  },
  {
    question: "How long does it take to develop clinic management software?",
    answer:
      "Timelines depend on scope. A focused first version with core modules such as scheduling, records and billing is usually delivered faster than a full multi-branch platform with integrations and mobile apps. Many clinics launch an initial version first and add features in later phases. We confirm a realistic timeline after workflow discovery.",
  },
  {
    question: "Is cloud-based clinic management software secure?",
    answer:
      "It can be, when it's designed and operated properly. Key safeguards include encryption in transit and at rest, role-based access, multi-factor authentication, audit logs, secure backups and reputable cloud hosting in an appropriate region. Security also depends on clinic practices, such as strong passwords, staff training and timely removal of access for staff who leave.",
  },
  {
    question: "Can clinic software support multiple locations?",
    answer:
      "Yes. Multi-branch clinic management software lets each location manage its own doctors, rooms, schedules and pricing, while patient records can be shared across branches according to your rules. Head office gets consolidated reports, and branch managers see their own performance. Patients can visit any branch with their history available.",
  },
  {
    question: "Can the software integrate with medical billing systems?",
    answer:
      "Yes, where the billing system provides integration access. Clinic invoices, service codes and patient details can be passed to a medical billing or claims platform, reducing double entry. Alternatively, a dedicated billing module can be built into the system. We'll recommend an approach based on how your clinic handles insurance, claims and payments.",
  },
  {
    question: "Can ClickMasters develop a customized clinic management system?",
    answer:
      "Yes. ClickMasters designs and develops custom clinic management software based on your workflows, specialty, team structure and growth plans. We handle requirements, UI/UX design, architecture, development, integrations, testing, deployment and ongoing support. Every project starts with a clear scope, timeline and quote, so you can make an informed decision.",
  },
];

/** Concept-illustration screens; files live in public/products/clinic/. */
export const clinicImages = {
  dashboard: {
    src: "/products/clinic/clinic-management-software-dashboard.svg",
    alt: "Concept illustration of a clinic management software dashboard showing appointments, patient queue and daily billing",
  },
  calendar: {
    src: "/products/clinic/clinic-appointment-scheduling-calendar.svg",
    alt: "Clinic appointment scheduling software calendar view for multiple doctors and rooms",
  },
  patient: {
    src: "/products/clinic/clinic-patient-profile-visit-history.svg",
    alt: "Patient management dashboard illustration showing patient profile and visit history timeline",
  },
  billing: {
    src: "/products/clinic/clinic-billing-dashboard.svg",
    alt: "Clinic billing software dashboard illustration with invoice, payments and outstanding balances",
  },
  analytics: {
    src: "/products/clinic/clinic-analytics-reporting-dashboard.svg",
    alt: "Clinic analytics and reporting dashboard concept showing appointment trends and revenue by service",
  },
} as const;
