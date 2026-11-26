// Content for /products/healthcare-medical-software/telemedicine-software.
// Source: telemedicine-software-seo-content.docx (prepared 18 Nov 2026).
// FAQ text is reused verbatim by the FAQPage JSON-LD, so edit both together.

export const TELE_PATH =
  "/products/healthcare-medical-software/telemedicine-software";

export const teleTitle =
  "Telemedicine Software | Custom Telehealth Development";

export const teleDescription =
  "Custom telemedicine software for US healthcare: secure video visits, virtual waiting rooms, e-prescribing, RPM, EHR integration and HIPAA-aware design.";

export const PRODUCT_NAME = "Telemedicine Software";

export const platformParts = [
  "A patient app or portal for booking, intake, consent, joining visits, messaging and payments",
  "A provider workspace with the schedule, virtual waiting room, video, patient history and documentation",
  "Video and audio infrastructure that is encrypted and works on poor connections",
  "Clinical integrations with EHR/EMR, e-prescribing, labs and billing",
  "An admin console for providers, licenses, locations, visit types, pricing and reports",
];

export const relatedRows = [
  [
    "Telemedicine software",
    "Remote clinical care: virtual visits, remote diagnosis and treatment",
    "—",
  ],
  [
    "Telehealth software",
    "A broader term: remote clinical care plus non-clinical services (education, admin meetings, provider training)",
    "Telemedicine is the clinical part of telehealth. In practice, many buyers use the two terms the same way.",
  ],
  [
    "Remote patient monitoring (RPM) software",
    "Collecting and reviewing patient data from home devices",
    "Often a module of a telemedicine platform; the data triggers virtual follow-up visits",
  ],
  [
    "Patient management software",
    "Registration, scheduling, communication, patient flow",
    "Supplies the patient identity and booking layer that virtual visits depend on",
  ],
  [
    "EMR software",
    "The clinical record within one practice",
    "Where telemedicine visit notes, orders and prescriptions are documented",
  ],
  [
    "EHR software",
    "A clinical record shared across organizations",
    "Same role at network scale; also provides history from outside providers",
  ],
  [
    "Hospital management software",
    "Whole-hospital operations",
    "Telemedicine extends outpatient, ED, ICU and specialist services",
  ],
  [
    "Practice management software",
    "Scheduling, billing, practice operations",
    "Handles telehealth claims and practice-level scheduling",
  ],
];

export const visitSteps = [
  [
    "Booking",
    "The patient books a virtual visit, or is sent a visit link by staff. Visit type, provider and time are confirmed.",
  ],
  [
    "Identity and location",
    "The patient signs in and their identity is verified. The system records the patient's physical location (state) at the time of the visit, because licensing and prescribing rules depend on it.",
  ],
  [
    "Consent and intake",
    "Telehealth consent, intake forms, symptoms, medications and insurance are collected before the visit.",
  ],
  [
    "Device and connection check",
    "The app tests camera, microphone and bandwidth, and offers audio-only fallback where appropriate.",
  ],
  [
    "Virtual waiting room",
    "The patient waits in a branded room. Staff can see who is waiting and for how long, and can message them.",
  ],
  [
    "The consultation",
    "The provider admits the patient into a secure video session. History, intake answers and RPM data are visible beside the video. Screen sharing, image upload and multi-party calls (an interpreter, a family member or a specialist) can be added.",
  ],
  [
    "Documentation and orders",
    "The provider documents the visit, sends prescriptions electronically, orders labs and creates referrals, either in the platform or in the integrated EHR/EMR.",
  ],
  [
    "Wrap-up",
    "The patient receives a visit summary, care instructions, a follow-up booking and a payment request where applicable.",
  ],
  [
    "Billing and follow-up",
    "Visit details pass to billing with the correct telehealth place-of-service and modifiers. Follow-up tasks and RPM monitoring continue after the visit.",
  ],
] as const;

export type FeatureGroup = {
  title: string;
  icon: string;
  visual?: "provider";
  features: (readonly [string, string])[];
};

export const featureGroups: FeatureGroup[] = [
  {
    title: "Virtual Visits",
    icon: "Video",
    features: [
      [
        "Secure video consultations",
        "Encrypted, browser-based or in-app HD video with adaptive quality on weak connections.",
      ],
      [
        "Audio consultations",
        "Audio-only visits for patients without video access, where clinically appropriate and allowed by payer rules.",
      ],
      [
        "Virtual waiting rooms",
        "Branded waiting rooms with queue visibility, wait-time messages and provider-controlled admission.",
      ],
      [
        "Real-time patient communication",
        'In-visit chat, secure messaging before and after the visit, and live updates such as "the provider is running 10 minutes late".',
      ],
      [
        "Multi-provider management",
        "Multi-party sessions for interpreters, caregivers and specialist consults; provider pools and routing for on-demand care.",
      ],
    ],
  },
  {
    title: "Patient Experience",
    icon: "Smartphone",
    features: [
      [
        "Virtual appointment scheduling",
        "Online booking for virtual visit types, on-demand queues and provider availability across states.",
      ],
      [
        "Patient registration",
        "Account creation, identity verification, demographics and insurance.",
      ],
      [
        "Digital patient intake",
        "Pre-visit forms, symptom questionnaires, consent and photo upload.",
      ],
      [
        "Patient portal",
        "Upcoming visits, join links, visit history, documents, messages and payments on web and mobile.",
      ],
      [
        "Appointment notifications",
        "Text and email confirmations, reminders and one-tap join links.",
      ],
      [
        "Medical document sharing",
        "Secure upload and exchange of images, lab reports, referral letters and visit summaries.",
      ],
    ],
  },
  {
    title: "Clinical Workflow",
    icon: "Stethoscope",
    visual: "provider",
    features: [
      [
        "Provider dashboard",
        "Today's schedule, the waiting room, tasks, messages, RPM alerts and unsigned notes on one screen.",
      ],
      [
        "Consultation notes",
        "Visit templates (SOAP, behavioral health, follow-up) with time tracking and e-signature.",
      ],
      [
        "E-prescription integration",
        "Prescriptions sent electronically to the patient's chosen pharmacy through a certified e-prescribing network.",
      ],
      [
        "EHR and EMR integration",
        "Patient history in, visit documentation out, through HL7 and FHIR.",
      ],
      [
        "Remote patient monitoring",
        "Device data, thresholds, alerts and review queues.",
      ],
      [
        "Patient follow-up management",
        "Follow-up scheduling, care-plan reminders and outreach to patients who missed visits.",
      ],
    ],
  },
  {
    title: "Business and Control",
    icon: "BarChart3",
    features: [
      [
        "Billing and payment integration",
        "Insurance claims with telehealth coding, self-pay pricing and card payments.",
      ],
      [
        "Reporting and analytics",
        "Visit volume, wait times, connection quality, no-shows, provider utilization, conversion from booking to completed visit, and revenue.",
      ],
      [
        "Role-based access control",
        "Separate permissions for patients, providers, nurses, schedulers, admins and support staff.",
      ],
      [
        "Audit trails",
        "A logged record of every access, session, document view, prescription and record change.",
      ],
    ],
  },
];

export const benefits = [
  [
    "Wider access to care",
    "Rural patients, patients with mobility limits and patients with busy schedules can be seen without traveling.",
  ],
  [
    "Faster appointments",
    "On-demand queues and flexible virtual slots shorten waiting times for routine and follow-up care.",
  ],
  [
    "Fewer no-shows",
    "One-tap join links and no travel remove common reasons for missed appointments.",
  ],
  [
    "Continuity between visits",
    "RPM and secure messaging keep chronic and post-discharge patients connected to their care team.",
  ],
  [
    "More flexible capacity",
    "Providers can see patients from any approved location, and specialist time can be shared across sites.",
  ],
  [
    "Lower operating overhead",
    "Fewer in-person visits for problems that don't need an exam room.",
  ],
  [
    "New service lines",
    "Virtual primary care, behavioral health, specialty consults and subscription models become possible.",
  ],
] as const;

export const typeRows = [
  [
    "Video-based telemedicine",
    "Real-time (synchronous) video between patient and provider",
    "Primary care, urgent care, follow-ups, behavioral health",
  ],
  [
    "Store-and-forward telehealth",
    "Images, recordings or data are captured and sent for later review (asynchronous)",
    "Teledermatology, teleradiology, teleophthalmology, e-consults between providers",
  ],
  [
    "Remote patient monitoring",
    "Connected devices send physiological data from home",
    "Hypertension, diabetes, heart failure, COPD, post-surgical recovery",
  ],
  [
    "Virtual primary care",
    "Ongoing primary care delivered mainly online, with in-person care as needed",
    "Employer health, direct primary care, health plans",
  ],
  [
    "Virtual specialty care",
    "Remote specialist consultations",
    "Cardiology, endocrinology, neurology, dermatology, infectious disease",
  ],
  [
    "Hospital telehealth",
    "Hospital-based programs such as telestroke, tele-ICU, virtual nursing, virtual discharge and hospital-at-home",
    "Acute and post-acute care",
  ],
  [
    "Mental health telehealth",
    "Therapy, psychiatry and group sessions by video or audio",
    "Counseling, psychiatric medication management, substance use treatment",
  ],
  [
    "Chronic care telemedicine",
    "Scheduled virtual visits plus RPM and care management",
    "Long-term condition management and care plans",
  ],
];

export const organizationRows = [
  [
    "Hospitals",
    "Department-level programs, provider-to-provider consults, telestroke and tele-ICU carts, EHR integration and enterprise identity (SSO)",
  ],
  [
    "Private medical practices",
    "Simple setup, visit links from the existing schedule, a branded patient experience and EMR and billing connections",
  ],
  [
    "Primary care clinics",
    "Same-day virtual slots, chronic-care follow-ups, care gap outreach and audio-only options",
  ],
  [
    "Specialty clinics",
    "Referral intake, image and document review, store-and-forward and multi-party consults",
  ],
  [
    "Urgent care centers",
    "On-demand queues, wait-time visibility, provider pools and fast intake",
  ],
  [
    "Mental health providers",
    "Recurring sessions, group therapy rooms, a strong privacy design and stricter handling of sensitive records",
  ],
  [
    "Multi-specialty practices",
    "Shared platform across departments, specialty templates and internal virtual referrals",
  ],
  [
    "Telehealth startups",
    "Multi-state provider networks, license tracking, self-pay and subscription billing, scalable on-demand architecture",
  ],
  [
    "Healthcare networks",
    "Central administration, many locations and brands, network-wide reporting and integration with several EHRs",
  ],
];

export const videoArchitecture = [
  "WebRTC for browser and mobile video, with media encrypted by default (DTLS-SRTP)",
  "A media server (SFU) for multi-party calls and recording, and TURN servers so calls connect through restrictive firewalls and mobile networks",
  "Adaptive bitrate with automatic fallback to audio when bandwidth drops",
  "Commercial video APIs or self-hosted media servers. Commercial APIs speed up delivery. When they handle PHI, the provider must be willing to sign a BAA.",
  "Optional end-to-end encryption where the use case calls for it, weighed against features such as recording and live captions",
];

export const videoClinical = [
  "No-download browser join for patients, with native apps for frequent users",
  "Pre-call device and connection test",
  "Provider-controlled admission from the waiting room",
  "Add a participant mid-call (an interpreter, caregiver or specialist)",
  "Screen and image sharing for results and education",
  "Session recording only with documented consent, keeping in mind that some states require consent from all parties",
  "Accessibility: captions, adjustable text and screen-reader support",
  "Connection-quality logging, so support teams can resolve failed visits",
];

export const portalItems = [
  [
    "One place to join",
    "Upcoming visits with clear join buttons, reachable from text and email links",
  ],
  ["Self-service intake and consent", "Completed before the visit"],
  ["Visit history", "Summaries, care instructions and prescriptions sent"],
  [
    "Secure messaging",
    "With the care team, with clear response-time expectations",
  ],
  ["Payments", "Copays, self-pay visits and subscriptions"],
  ["Family and proxy access", "For parents and caregivers"],
  ["Mobile apps", "Push notifications for visit reminders and messages"],
  [
    "Multiple languages and accessible design",
    "Including WCAG-aligned interfaces",
  ],
] as const;

export const schedulingRules = [
  [
    "License-aware matching",
    "Patients are matched only with providers licensed in the state where the patient is located.",
  ],
  [
    "Visit-type rules",
    "Which visits can be virtual, audio-only or require in-person follow-up.",
  ],
  [
    "On-demand queues",
    "Alongside booked appointments, with provider pools across time zones.",
  ],
  ["Time-zone handling", "For patients, providers and reminders."],
  [
    "Buffer and overflow rules",
    "So a running-late provider doesn't strand the whole queue.",
  ],
  ["Automatic join links", "Created for every virtual appointment."],
] as const;

export const rpmRows = [
  [
    "Devices",
    "Blood pressure cuffs, glucometers, pulse oximeters, weight scales, thermometers and ECG patches. Some use cellular connections, others Bluetooth paired to a phone.",
  ],
  [
    "Data collection",
    "Device platforms and APIs, or health data frameworks on the patient's phone (for example Apple HealthKit or Android Health Connect)",
  ],
  [
    "Thresholds and alerts",
    "Patient-specific ranges that trigger alerts to the care team",
  ],
  [
    "Review queues",
    "Nurses and care managers review readings, document interventions and escalate to providers",
  ],
  [
    "Patient engagement",
    "Reminders to take readings, trend charts and messaging",
  ],
  [
    "Time and data tracking",
    "Records device days and clinical time spent, which matter for RPM and chronic care management billing",
  ],
];

export const eRxItems = [
  "Prescriptions are sent electronically to retail or mail-order pharmacies through a certified e-prescribing network, using the NCPDP SCRIPT standard",
  "Drug interaction and allergy checks use a licensed drug database",
  "Controlled substances require Electronic Prescribing of Controlled Substances (EPCS), with identity proofing and two-factor authentication under DEA rules",
  "Telehealth prescribing of controlled substances is governed by the Ryan Haight Act, which generally requires an in-person evaluation, and by temporary DEA flexibilities that have been extended several times. The platform should support configurable rules, so policy can be updated as federal and state requirements change.",
  "PDMP checks are supported where state law requires them",
];

export const ehrItems = [
  [
    "Inbound",
    "demographics, problem list, medications, allergies and recent results, so the provider isn't working blind",
  ],
  [
    "Outbound",
    "visit notes, diagnoses, orders, prescriptions and visit summaries written back to the chart",
  ],
  [
    "Methods",
    "FHIR R4/US Core APIs, SMART on FHIR app launch (the telemedicine workspace opens inside the EHR), HL7 v2 messages (ADT, SIU, MDM for documents) and vendor-specific APIs",
  ],
] as const;

export const integrationRows = [
  [
    "Electronic Medical Records (EMR)",
    "Patient history in, visit documentation out",
    "FHIR, HL7 v2, vendor APIs",
  ],
  [
    "Electronic Health Records (EHR)",
    "The same at enterprise scale, plus in-EHR app launch",
    "SMART on FHIR, FHIR R4, HL7 v2",
  ],
  [
    "Medical billing systems",
    "Telehealth claims with correct place-of-service and modifiers",
    "HL7 DFT, APIs, X12 837 via billing system",
  ],
  [
    "Pharmacy platforms",
    "E-prescriptions, refills, fulfillment status",
    "NCPDP SCRIPT via certified network, partner APIs",
  ],
  [
    "Healthcare APIs",
    "Identity verification, eligibility, interpreters, scheduling partners",
    "REST, FHIR, OAuth 2.0",
  ],
  [
    "Payment gateways",
    "Copays, self-pay visits, subscriptions",
    "PCI DSS-compliant gateway APIs, tokenization",
  ],
  [
    "Wearable health devices",
    "RPM readings and activity data",
    "Device vendor APIs, HealthKit/Health Connect",
  ],
  [
    "Laboratory systems",
    "Lab orders and results, at-home test kits",
    "HL7 ORM/ORU, FHIR, lab partner APIs",
  ],
];

export const hipaaRows = [
  [
    "HIPAA Privacy Rule",
    "Minimum-necessary access, patient rights to access their information, and limits on use and disclosure, including recordings and messages",
  ],
  [
    "HIPAA Security Rule",
    "Administrative, physical and technical safeguards based on a documented risk analysis",
  ],
  [
    "Breach Notification Rule",
    "Notification of affected individuals, HHS and, for larger breaches, the media. Detailed audit logs make investigation possible.",
  ],
  [
    "Business Associate Agreements",
    "Video providers, cloud hosts, messaging, e-prescribing and support vendors that handle PHI typically need BAAs",
  ],
  [
    "End of the pandemic enforcement discretion",
    "OCR's COVID-era leniency for consumer video apps ended in August 2023. Telehealth video must now meet normal HIPAA expectations.",
  ],
];

export const safeguards = [
  "Encryption of video and audio in transit (WebRTC DTLS-SRTP), data in transit (TLS 1.2+) and data at rest (AES-256)",
  "Secure authentication: MFA for providers and staff, secure patient login and identity verification, and session timeouts",
  "Authorization and access management: role-based access by role, organization and location, with single-use or expiring visit links",
  "Audit logging of sessions, chart access, document views, prescriptions and admin changes",
  "Recording controls: recording off by default, consent captured and stored, encrypted storage and retention rules",
  "Data backup and recovery that is tested and documented",
  "Secure hosting on HIPAA-eligible cloud infrastructure under a BAA",
];

export const regulatoryItems = [
  [
    "State medical licensing",
    "Providers generally must be licensed in the state where the patient is physically located during the visit. Licensure compacts (such as the Interstate Medical Licensure Compact for physicians, PSYPACT for psychologists and the Nurse Licensure Compact) can make multi-state licensing easier, but they do not create a single national license.",
  ],
  [
    "Cross-state practice",
    "Some states allow limited exceptions, such as follow-up care or physician-to-physician consults. Platforms should store provider licenses by state and enforce matching.",
  ],
  [
    "Patient consent",
    "Many states require informed consent for telehealth, and some specify its content or documentation. Consent should be captured and stored for each patient and modality.",
  ],
  [
    "Telehealth prescribing",
    "Federal rules (DEA) govern controlled substances, and states add their own rules on establishing a provider–patient relationship before prescribing.",
  ],
  [
    "Reimbursement",
    "Medicare telehealth coverage has depended on temporary extensions passed by Congress, while Medicaid and commercial payer rules differ by state and plan. The platform should keep coding rules configurable.",
  ],
] as const;

export const cloudRows = [
  [
    "Patient access",
    "Built for internet-facing access from any device",
    "Requires exposing in-house infrastructure securely",
  ],
  [
    "Video at scale",
    "Media servers scale up for peak demand",
    "Limited by in-house servers and bandwidth",
  ],
  [
    "Geographic reach",
    "Multi-region deployment lowers latency for patients nationwide",
    "Typically one data center",
  ],
  ["Upfront cost", "Lower", "Higher (servers, bandwidth, licenses)"],
  ["Updates", "Continuous, central", "Manual"],
  [
    "Security responsibility",
    "Shared with a HIPAA-eligible cloud provider under a BAA",
    "Entirely in-house",
  ],
  [
    "Best fit",
    "Practices, networks, startups, most hospitals",
    "Organizations with strict internal hosting rules or closed networks (some government or military settings)",
  ],
];

export const customReasons = [
  [
    "Virtual care is your product",
    "You are a telehealth startup or digital health company, and the patient experience, brand and workflows set you apart.",
  ],
  [
    "Multi-state provider network",
    "You need license-aware routing, credentialing data and state-specific policies.",
  ],
  [
    "Specialized care model",
    "Behavioral health, chronic care with RPM, hospital-at-home, specialty e-consults.",
  ],
  [
    "Deep EHR integration",
    "Such as launching inside the EHR and writing back structured documentation.",
  ],
  [
    "Rising per-provider fees",
    "Per-provider or per-minute fees grow faster than your revenue.",
  ],
] as const;

export const buildItems = [
  "Custom telemedicine platforms and video consultation systems",
  "Patient portal development and telehealth mobile applications for iOS and Android",
  "Provider dashboards with the waiting room, chart context and documentation",
  "Appointment management with license-aware scheduling and on-demand queues",
  "Remote patient monitoring integration with devices and health data platforms",
  "EHR and EMR integration and healthcare API development using FHIR and HL7",
  "Secure cloud architecture and scalable backend systems for peak video demand",
  "Ongoing software maintenance for security patches, browser and OS updates and regulatory rule changes",
];

export const implementationSteps = [
  [
    "Requirements discovery",
    "We define goals, services, states, users, visit types, payers, integrations and compliance scope.",
  ],
  [
    "Healthcare workflow analysis",
    "We map the patient and provider journey end to end, including failed connections, no-shows, escalations to in-person care and emergencies during a visit.",
  ],
  [
    "Architecture planning",
    "We decide on the video approach (commercial API or self-hosted), data model, integration architecture, security controls and hosting regions.",
  ],
  [
    "UI/UX design",
    "We prototype patient and provider flows and test them with real users, with particular attention to older patients and low-bandwidth conditions.",
  ],
  [
    "Video infrastructure setup",
    "We configure media servers, TURN, recording policy, quality monitoring and BAAs with providers.",
  ],
  [
    "Frontend and backend development",
    "We build web, iOS and Android apps, the provider workspace, admin console and APIs in agile sprints.",
  ],
  [
    "Healthcare integrations",
    "We connect EHR/EMR, e-prescribing, pharmacy, labs, billing, payments and devices.",
  ],
  [
    "Security testing",
    "We run penetration testing, vulnerability scanning, access-control checks and video-session security reviews.",
  ],
  [
    "Quality assurance",
    "We run functional, cross-device and cross-browser, network-condition, load and accessibility testing.",
  ],
  [
    "Deployment",
    "We roll out in phases by service line or region, with monitoring and support staff ready.",
  ],
  [
    "Maintenance and support",
    "We monitor uptime and call quality, release updates, add new features and adjust rules when regulations change.",
  ],
] as const;

export const challengeRows = [
  [
    "Dropped or poor-quality calls",
    "Adaptive bitrate, TURN relays, audio fallback, pre-call checks and quality logging",
  ],
  [
    "Patients struggling to join",
    "No-download browser join, one-tap links, test calls and simple instructions",
  ],
  [
    "Providers switching between systems",
    "Chart context beside the video; in-EHR launch through SMART on FHIR",
  ],
  [
    "Licensing complexity across states",
    "Store provider licenses by state, capture patient location, enforce matching",
  ],
  [
    "Consent and documentation gaps",
    "Required consent steps, stored by patient and modality",
  ],
  [
    "Telehealth claim denials",
    "Configurable place-of-service and modifier rules connected to billing",
  ],
  [
    "Controlled-substance prescribing rules",
    "Configurable prescribing policies, EPCS and PDMP support",
  ],
  [
    "RPM data overload",
    "Patient-specific thresholds, prioritized review queues and escalation rules",
  ],
  [
    "Peak-time demand",
    "Auto-scaling cloud media infrastructure and on-demand provider pools",
  ],
];

export const whyClickmasters = [
  [
    "We scope before we build",
    "You get the scope, timeline and quote before development starts.",
  ],
  [
    "Web and mobile delivery",
    "Our web and mobile app development teams build patient apps, provider workspaces and admin consoles.",
  ],
  [
    "Patient-centered design",
    "Our UI/UX team designs and tests flows for patients of all ages and abilities.",
  ],
  [
    "Integration expertise",
    "Our API development and integration services cover EHR, e-prescribing, billing, payments and devices.",
  ],
  [
    "Secure cloud engineering",
    "Our cloud, DevOps and data security services support scalable, monitored, HIPAA-aware infrastructure.",
  ],
  [
    "Thorough QA",
    "Our QA and testing team covers cross-device, network-condition and load testing, which matter a lot in telehealth.",
  ],
  [
    "Long-term support",
    "Our maintenance and support team keeps the platform current as browsers, devices and regulations change.",
  ],
  [
    "Connected healthcare products",
    "Our healthcare suite also covers EHR, EMR, patient management, practice management, billing and pharmacy software, so your telemedicine platform can be planned as part of a connected system.",
  ],
] as const;

export const teleFaqs = [
  {
    question: "What is telemedicine software?",
    answer:
      "Telemedicine software lets licensed clinicians diagnose, treat and follow up with patients remotely. It typically includes secure video and audio visits, virtual waiting rooms, online scheduling, digital intake and consent, a patient portal, a provider dashboard, consultation notes, e-prescribing, remote patient monitoring, billing integration and EHR/EMR integration.",
  },
  {
    question: "What is the difference between telemedicine and telehealth?",
    answer:
      "Telemedicine usually refers to remote clinical services: diagnosis, treatment and follow-up. Telehealth is broader. It also includes non-clinical services such as patient education, provider training and administrative meetings. Many organizations and vendors use the terms interchangeably.",
  },
  {
    question: "What features should telemedicine software have?",
    answer:
      "Essential features include encrypted video and audio, virtual waiting rooms, online booking, identity verification, intake and consent, a patient portal, a provider dashboard, visit documentation, e-prescribing, EHR integration, secure messaging, document sharing, billing and payments, reporting, role-based access and audit trails. RPM and multi-party calls are common additions.",
  },
  {
    question: "Is there such a thing as HIPAA-compliant telemedicine software?",
    answer:
      "Software can be designed to support HIPAA compliance through encryption, access controls, audit logs, secure hosting and vendors willing to sign BAAs. But no software is HIPAA-compliant on its own, and HHS doesn't certify products. Compliance depends on how your organization configures, uses and governs the platform, including policies, training and agreements.",
  },
  {
    question:
      "Can providers see patients in other states through telemedicine?",
    answer:
      "Generally, providers must be licensed in the state where the patient is physically located during the visit, with limited state-specific exceptions. Licensure compacts can speed up multi-state licensing. Telemedicine platforms should record patient location and match patients only with appropriately licensed providers. Your compliance team should confirm the rules for each state.",
  },
  {
    question: "Can doctors prescribe medication through telemedicine?",
    answer:
      "Yes, for many medications, using e-prescribing to send prescriptions to the patient's pharmacy. Controlled substances are subject to the Ryan Haight Act, DEA telemedicine rules and temporary flexibilities that have been extended several times, plus state rules. Platforms should support EPCS and configurable prescribing policies.",
  },
  {
    question: "How does telemedicine software integrate with an EHR?",
    answer:
      "Common methods include FHIR APIs to read patient history and write back documentation, SMART on FHIR to launch the telemedicine workspace inside the EHR, HL7 v2 messages for demographics, scheduling and documents, and vendor-specific APIs. The right approach depends on the EHR and its available interfaces.",
  },
  {
    question: "What is remote patient monitoring in telemedicine?",
    answer:
      "Remote patient monitoring uses connected devices, such as blood pressure cuffs, glucometers, pulse oximeters and scales, to send patient data from home to the care team. The software applies thresholds, alerts staff to concerning readings, supports review and intervention, and tracks the data and time needed for RPM billing.",
  },
  {
    question: "What technology is used for telemedicine video?",
    answer:
      "Most modern platforms use WebRTC for browser and mobile video, with media encrypted in transit, plus media servers for multi-party calls and TURN servers to connect through firewalls. Organizations can use a commercial video API (preferably one that signs a BAA) or self-hosted media infrastructure.",
  },
  {
    question: "Can telemedicine software support audio-only visits?",
    answer:
      "Yes. Audio-only visits help patients with limited bandwidth or no video device. Whether audio-only care is clinically appropriate and reimbursable depends on the service, payer and state, so platforms should make audio-only a configurable visit type with correct documentation and coding.",
  },
  {
    question: "How much does custom telemedicine software development cost?",
    answer:
      "Cost depends on the platforms (web, iOS, Android), video approach, number of integrations (EHR, e-prescribing, billing, devices), RPM, multi-state rules, security requirements and expected scale. We provide a scoped quote after discovery rather than a generic price.",
  },
  {
    question: "How long does it take to build a telemedicine platform?",
    answer:
      "A focused first release, such as scheduling, secure video, intake and visit notes, typically takes a few months. A full platform with mobile apps, e-prescribing, EHR integration and RPM takes longer. Phased releases let you start seeing patients early while other features are still being built.",
  },
];

const dir = "/products/telemedicine";

export const teleImages = {
  consult: {
    src: `${dir}/telemedicine-video-consultation-chart.svg`,
    width: 1440,
    height: 900,
    alt: "Telemedicine software video consultation screen with doctor on video and patient chart displayed side by side",
  },
  join: {
    src: `${dir}/patient-joining-virtual-visit-smartphone.svg`,
    width: 1440,
    height: 900,
    alt: "Patient joining a virtual doctor visit from a smartphone telehealth app with a one-tap join link",
  },
  provider: {
    src: `${dir}/telemedicine-provider-dashboard-waiting-room.svg`,
    width: 1440,
    height: 900,
    alt: "Telemedicine provider dashboard showing virtual waiting room queue, today's schedule and unsigned visit notes",
  },
  rpm: {
    src: `${dir}/remote-patient-monitoring-dashboard.svg`,
    width: 1440,
    height: 900,
    alt: "Remote patient monitoring dashboard with blood pressure and glucose readings flagged against patient thresholds",
  },
  scheduling: {
    src: `${dir}/license-aware-telehealth-scheduling.svg`,
    width: 1440,
    height: 900,
    alt: "Telemedicine scheduling software matching patients to providers licensed in the patient's state, with on-demand queue",
  },
  flow: {
    src: `${dir}/virtual-visit-workflow.svg`,
    width: 1400,
    height: 600,
    alt: "Virtual visit workflow in telemedicine software from booking and identity check to consultation, e-prescribing and billing",
  },
  integrations: {
    src: `${dir}/telemedicine-integration-diagram.svg`,
    width: 1200,
    height: 820,
    alt: "Telemedicine platform integration diagram connecting video visits to EHR, e-prescribing, pharmacy and billing systems",
  },
} as const;
