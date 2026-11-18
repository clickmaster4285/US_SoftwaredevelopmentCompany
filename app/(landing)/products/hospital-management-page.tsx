import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { PageFrame } from "@/app/(landing)/[main_service]/[sub_service]/landing-primitives";
import { pageUrl, SITE_URL } from "@/lib/site";

export const HOSPITAL_PATH =
  "/products/healthcare-medical-software/hospital-management-system";

const description =
  "Hospital management system software by ClickMasters: patient records, appointments, billing, pharmacy, lab, IPD/OPD and reporting in one integrated platform.";

export const hospitalFaqs = [
  {
    question: "What is a hospital management system?",
    answer:
      "A hospital management system is software that manages a healthcare facility's clinical, administrative and financial operations from one database. It covers patient registration, appointments, medical records, diagnostics, pharmacy, wards, billing and reporting, so every department works from the same patient information.",
  },
  {
    question: "What are the main modules of hospital management software?",
    answer:
      "Common modules include patient registration, appointment scheduling, electronic medical records, OPD and IPD management, laboratory, radiology, pharmacy, bed and ward management, billing, insurance and claims, inventory, discharge, reports and role-based access control. Hospitals usually start with a core set and add others as needed.",
  },
  {
    question: "How does hospital management software work?",
    answer:
      "The patient is registered once and receives a unique record. Each department then adds to that record: the doctor documents the consultation and places orders, the lab publishes results, the pharmacy dispenses medicines, and billing collects charges automatically. Management reports are generated from the same data.",
  },
  {
    question: "What are the benefits of a hospital information management system?",
    answer:
      "The main benefits are centralized patient information, less repeated data entry, smoother handoffs between departments, more complete billing, live visibility of beds and stock, and faster management reporting. The actual impact depends on how well the system matches your workflows and how consistently staff use it.",
  },
  {
    question: "Can hospital management software manage patient records?",
    answer:
      "Yes. Patient records are the center of the system. Demographics, visit history, vitals, diagnoses, prescriptions, lab and imaging results, admissions and discharge summaries are stored in one electronic record that authorized staff can access according to their role.",
  },
  {
    question: "Does a hospital management system include billing?",
    answer:
      "Yes. Hospital billing is a core module. Charges for consultations, tests, procedures, medicines and bed days are posted as services are delivered. The billing module handles packages, discounts, deposits, partial payments, refunds, insurance splits and printed or digital invoices.",
  },
  {
    question: "Can pharmacy and inventory management be integrated?",
    answer:
      "Yes. The pharmacy receives prescriptions directly from doctors, dispenses against them and updates stock automatically. Pharmacy sales post to the patient bill, and the inventory module tracks medical supplies, batches, expiries, purchases and reorder levels across stores.",
  },
  {
    question: "Is hospital management software suitable for small hospitals?",
    answer:
      "Yes. Small hospitals and clinics can start with a focused set of modules such as registration, appointments, EMR, pharmacy and billing. Because the system is modular, additional departments like IPD, laboratory or operation theatre can be added later without replacing the software.",
  },
  {
    question: "What is the difference between HMS, HIS and EMR?",
    answer:
      "An EMR (electronic medical record) focuses on the clinical chart: notes, diagnoses, orders and results. An HIS (hospital information system) is a broad term for the information systems a hospital uses. An HMS covers the full operation, including the clinical record plus administration, billing, pharmacy, inventory, wards and reporting. In practice, HMS and HIS are often used interchangeably.",
  },
  {
    question: "Is cloud-based hospital management software secure?",
    answer:
      "It can be, when it is designed and operated properly. Security depends on encryption, strong authentication, role-based access, audit logs, regular backups, secure hosting and good internal policies. Responsibility is shared between the hosting provider, the software team and the hospital, so these safeguards should be agreed during planning.",
  },
  {
    question: "Can hospital management software support multiple departments?",
    answer:
      "Yes. Supporting multiple departments is the main purpose of an HMS. Orders, results, transfers and charges move between departments automatically, and the system can be configured for multiple branches with shared patient records and consolidated reporting.",
  },
  {
    question: "How long does hospital management software implementation take?",
    answer:
      "The timeline depends on the number of modules, departments, integrations, data migration and customization. A clinic with a core module set can go live much sooner than a multi-specialty hospital with theatre, imaging and insurance integration. We provide a timeline in the written outline after requirement analysis.",
  },
  {
    question: "How much does a hospital management system cost?",
    answer:
      "Cost depends on the number of departments and users, the modules required, integrations, customization, hosting and the support level after launch. Rather than publishing a generic price, we provide a written outline with scope, exclusions, timeline and price after understanding your requirements.",
  },
  {
    question: "Can hospital management software be customized?",
    answer:
      "Yes. Forms, workflows, price lists, roles, reports and print templates can be configured, and our development team can build custom modules or integrations when your hospital needs functionality beyond standard configuration.",
  },
  {
    question: "How can I request a hospital management software demo?",
    answer:
      "Send a request through our contact page or call +1 325 202 4074. Share your hospital type, departments and the main problems you want to solve, and we will arrange a demo focused on the workflows that matter to you.",
  },
];

const featureList = [
  "Patient registration and management",
  "Appointment scheduling",
  "Electronic medical records",
  "OPD and IPD management",
  "Hospital billing and invoicing",
  "Pharmacy management",
  "Laboratory information management",
  "Bed and ward management",
  "Inventory and medical supplies",
  "Discharge management",
  "Reports and analytics",
  "Role-based access control",
];

export function hospitalManagementSchema() {
  const url = pageUrl(HOSPITAL_PATH);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: "Hospital Management System Software | Clickmasters",
        description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#software` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: pageUrl("/") },
          { "@type": "ListItem", position: 2, name: "Products", item: pageUrl("/products") },
          {
            "@type": "ListItem",
            position: 3,
            name: "Healthcare & Medical Software",
            item: pageUrl("/products/healthcare-medical-software"),
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Hospital Management System",
            item: url,
          },
        ],
      },
      {
        "@type": ["SoftwareApplication", "Product"],
        "@id": `${url}#software`,
        name: "ClickMasters Hospital Management System",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Hospital Management Software",
        description,
        url,
        brand: { "@id": `${SITE_URL}/#organization` },
        provider: { "@id": `${SITE_URL}/#organization` },
        featureList,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: hospitalFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}

const contents = [
  { href: "#what-it-is", label: "What it is" },
  { href: "#modules", label: "Modules" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#benefits", label: "Benefits" },
  { href: "#comparison", label: "Comparison" },
  { href: "#security", label: "Security" },
  { href: "#implementation", label: "Implementation" },
  { href: "#faq", label: "FAQ" },
];

const connections = [
  { label: "Front office", text: "Registration, appointments, queues and patient communication." },
  { label: "Clinical", text: "Consultations, medical records, orders, prescriptions and nursing notes." },
  { label: "Diagnostics", text: "Laboratory and radiology requests, samples, results and reports." },
  { label: "Inpatient care", text: "Admissions, bed allocation, ward transfers, operation theatre and discharge." },
  { label: "Finance", text: "Charges, invoices, payments, insurance and claims." },
  { label: "Operations", text: "Pharmacy stock, medical supplies, staff rosters and management reports." },
];

const problems = [
  {
    title: "Manual, repeated data entry",
    text: "The same patient name, age, contact number and insurance details get typed at reception, again in the lab, again in the pharmacy and again in billing. Each re-entry costs time and creates a chance for mismatched records.",
  },
  {
    title: "Disconnected departments",
    text: "When the laboratory cannot see that a test was ordered, or billing cannot see that a procedure was performed, staff rely on phone calls, paper slips and memory. Charges are missed, results are delayed and patients wait longer than they need to.",
  },
  {
    title: "Limited visibility for management",
    text: "Answering simple questions such as \"how many beds are free right now?\" or \"which services generated the most revenue this month?\" often means asking several people to compile spreadsheets. By the time the report arrives, the situation has changed.",
  },
  {
    title: "Administrative overload",
    text: "Clinicians and nurses end up spending a large part of their shift on paperwork. Hospital management software removes much of that burden by capturing information once, at the point of care, and passing it automatically to whoever needs it next.",
  },
];

const modules: { title: string; level: "Core" | "Configurable"; text: string }[] = [
  { title: "Patient Registration and Management", level: "Core", text: "Create a unique medical record number for every patient, capture demographics, contacts, guardians and insurance details, and search instantly by name, phone or ID. Returning patients are recognized, so records are not duplicated." },
  { title: "Appointment Scheduling", level: "Core", text: "Manage doctor calendars, time slots, walk-ins and follow-ups. Front-desk staff see real availability, can reschedule in seconds, and keep queues moving with token or sequence numbers." },
  { title: "Electronic Medical Records (EMR)", level: "Core", text: "Record vitals, complaints, history, diagnoses, clinical notes, orders and prescriptions in a structured digital chart. Doctors review past visits and results in one view instead of flipping through paper files." },
  { title: "Electronic Health Records (EHR)", level: "Configurable", text: "Where a hospital needs to share records with outside providers, labs or networks, the EMR can be extended toward EHR-style data exchange. Interoperability standards such as HL7 or FHIR are scoped per project." },
  { title: "Doctor and Staff Management", level: "Core", text: "Maintain profiles for doctors, nurses, technicians and administrative staff, with departments, specialties, schedules and duty rosters. Link consultants to their fees and service charges." },
  { title: "OPD Management", level: "Core", text: "Run the outpatient department end to end: check-in, vitals, consultation, orders, prescriptions, follow-up dates and OPD billing, all linked to the patient's record." },
  { title: "IPD Management", level: "Core", text: "Handle admissions, admitting doctor, ward and bed assignment, daily rounds, nursing notes, medication charts, transfers and running inpatient charges throughout the stay." },
  { title: "Emergency Department Management", level: "Configurable", text: "Fast registration with minimal fields, triage levels, emergency treatment notes and quick conversion to admission, so urgent cases are recorded without slowing care." },
  { title: "Hospital Billing and Invoicing", level: "Core", text: "Hospital billing software that pulls charges automatically from consultations, procedures, tests, medicines and bed days. Supports packages, discounts, deposits, partial payments, refunds and printable invoices." },
  { title: "Pharmacy Management", level: "Core", text: "Dispense against electronic prescriptions, track batches and expiry dates, manage purchases and suppliers, and post pharmacy sales directly to the patient bill." },
  { title: "Laboratory Information Management", level: "Core", text: "Receive test orders from doctors, generate sample IDs, record results against reference ranges, approve reports and make them visible in the patient's chart. Analyzer integration is scoped per device." },
  { title: "Radiology and Diagnostic Management", level: "Configurable", text: "Schedule X-ray, ultrasound, CT and MRI studies, track their status and attach reports. PACS or imaging viewer integration can be added based on your existing equipment." },
  { title: "Operation Theatre Management", level: "Configurable", text: "Book theatres, assign surgeons, anesthetists and teams, capture pre-operative checklists and operative notes, and bill procedures and consumables accurately." },
  { title: "Bed and Ward Management", level: "Core", text: "See every ward, room and bed with its live status: available, occupied, reserved or under cleaning. Admissions and transfers update the bed board immediately." },
  { title: "Inventory and Medical Supplies", level: "Core", text: "Track consumables, surgical items and equipment across stores and departments, with purchase orders, goods receipts, internal issues and reorder alerts." },
  { title: "Insurance and Claims Management", level: "Configurable", text: "Record payers and policies, check coverage, split bills between patient and insurer, and prepare claim documents. Electronic claim submission depends on your payers and clearinghouse and is scoped per project." },
  { title: "Discharge Management", level: "Core", text: "Generate discharge summaries from the stay's records, confirm medication and follow-up instructions, settle the final bill and release the bed in one coordinated process." },
  { title: "Reports and Analytics", level: "Core", text: "Daily collections, department revenue, OPD and IPD volumes, bed occupancy, pharmacy sales and stock reports, with exports for finance teams. Custom dashboards can be added." },
  { title: "Role-Based Access Control", level: "Core", text: "Define what each role can view, create, edit or approve. A pharmacist sees prescriptions, a cashier sees bills, and only authorized clinicians see full clinical notes." },
  { title: "Multi-Department Coordination", level: "Core", text: "Orders, results, transfers and charges flow between departments automatically, and multi-branch setups can share patient records and consolidated reporting." },
];

const journey = [
  { title: "Registration", text: "Reception registers the patient or finds the existing record, captures insurance details and books an appointment or OPD token." },
  { title: "Consultation", text: "The doctor opens the chart, sees history and vitals recorded by the nurse, documents findings and places orders." },
  { title: "Diagnosis", text: "Lab and radiology receive the orders directly, process samples or studies and publish results back to the chart." },
  { title: "Treatment", text: "Prescriptions go to the pharmacy. If admission is needed, the patient is assigned a ward and bed through IPD." },
  { title: "Inpatient care", text: "Rounds, nursing notes, medication administration and procedures are recorded, and charges accumulate automatically." },
  { title: "Billing", text: "Every service, test, medicine and bed day appears on the bill. Insurance shares and deposits are applied." },
  { title: "Discharge", text: "The doctor completes the discharge summary, the bill is settled and the bed is released for the next admission." },
  { title: "Reporting", text: "The completed episode feeds management reports on volume, revenue, occupancy and stock usage." },
];

const benefits = [
  { title: "Centralized patient information", text: "Demographics, visits, results, prescriptions and bills sit in one record, available to authorized staff wherever they work." },
  { title: "Improved administrative workflows", text: "Standard steps such as admission, transfer and discharge follow a defined sequence, so fewer tasks are forgotten." },
  { title: "Better appointment coordination", text: "Shared calendars reduce double bookings and help reception balance doctor workloads." },
  { title: "More organized billing", text: "Charges are captured where services happen, not reconstructed at checkout, which reduces missed items and disputes." },
  { title: "Department-level visibility", text: "Heads of department see their queues, pending results and workloads without waiting for manual summaries." },
  { title: "Inventory tracking", text: "Pharmacy and store stock levels, expiries and consumption are visible, making purchasing decisions easier." },
  { title: "Operational reporting", text: "Management reports are generated from live data instead of being compiled by hand at month end." },
  { title: "Reduced repetitive data entry", text: "Information captured once at registration flows to every later step, saving staff time and reducing typing errors." },
  { title: "A foundation for growth", text: "New departments, branches or integrations can be added to the same platform instead of buying another standalone tool." },
];

const audiences = [
  "Multi-specialty hospitals with many departments, consultants, theatres and complex billing.",
  "Private hospitals that need tight control over packages, discounts and payer agreements.",
  "General hospitals managing high OPD volumes alongside inpatient wards.",
  "Clinics that mainly need registration, appointments, EMR, pharmacy and billing.",
  "Medical centers combining outpatient services, diagnostics and day-care procedures.",
  "Diagnostic centers focused on lab and imaging orders, results and reporting.",
  "Healthcare networks running several branches that need shared records and consolidated reports.",
];

const manualRows = [
  ["Patient records", "Paper files or separate systems per department", "Single digital record shared by authorized departments"],
  ["Appointments", "Registers or phone notes; double bookings are common", "Shared calendars with live doctor availability"],
  ["Lab and radiology orders", "Paper slips carried by patients or staff", "Electronic orders and results linked to the chart"],
  ["Billing", "Charges collected manually at checkout", "Charges posted automatically as services happen"],
  ["Pharmacy and stock", "Separate stock sheets, periodic manual counts", "Live stock, batch and expiry tracking linked to prescriptions"],
  ["Bed availability", "Confirmed by phoning wards", "Live bed board updated on admission and transfer"],
  ["Reporting", "Compiled by hand, often days later", "Generated from live data on demand"],
  ["Access control", "Physical file access, hard to audit", "Role-based permissions with activity logs"],
];

const hostingRows = [
  ["Architecture", "Hosted application and database on a cloud provider", "Application and database on hospital-owned servers"],
  ["Accessibility", "Authorized users can work from any approved location and device", "Mainly available on the hospital network unless remote access is set up"],
  ["Upfront infrastructure", "Lower; no server hardware to buy", "Higher; servers, storage, networking and backup hardware"],
  ["Maintenance", "Updates, scaling and backups can be managed centrally", "Hospital IT team handles patches, hardware and backups"],
  ["Security responsibility", "Shared between cloud provider, software vendor and hospital", "Primarily the hospital's responsibility"],
  ["Internet dependence", "Requires reliable connectivity; offline fallbacks can be planned", "Works on local network during internet outages"],
  ["Best fit", "Growing hospitals, multi-branch networks, limited in-house IT", "Facilities with strict on-site data policies and an established IT team"],
];

const safeguards = [
  "Role-based permissions so each user only sees the data their role needs.",
  "Authentication with strong password policies, session timeouts and optional multi-factor authentication.",
  "Audit logs that record who viewed, created or changed sensitive records, and when.",
  "Data backups on a defined schedule, with tested restore procedures.",
  "Encryption of data in transit (TLS) and at rest, configured to your hosting setup.",
  "Secure APIs with token-based authentication for integrations with labs, devices and payers.",
  "Access monitoring to flag unusual activity such as bulk exports or out-of-hours access.",
  "Privacy-aware architecture that limits data collection to what is needed and separates environments for testing.",
];

const implementation = [
  { title: "Requirement analysis", text: "We meet department heads, list required modules, users, reports and integrations, and agree on priorities." },
  { title: "Workflow mapping", text: "Current processes are documented step by step, including approvals, billing rules and handoffs between departments." },
  { title: "System configuration", text: "Departments, services, price lists, roles, templates and reports are set up to match the mapped workflows." },
  { title: "Data migration", text: "Existing patient lists, service masters, stock and balances are cleaned, mapped and imported." },
  { title: "Integration", text: "Connections to lab analyzers, imaging, accounting, payment gateways or payer systems are built where in scope." },
  { title: "Testing", text: "Functional, workflow and user acceptance testing with your staff, using realistic scenarios before go-live." },
  { title: "Staff onboarding", text: "Role-specific training for reception, clinicians, nurses, pharmacy, lab, billing and administrators." },
  { title: "Deployment and support", text: "Phased or full go-live with on-call support, followed by ongoing maintenance and improvements." },
];

const costFactors = [
  "Number of departments to be configured and connected.",
  "Number of users and concurrent sessions across shifts and branches.",
  "Required modules, from a core set to a full hospital ERP scope.",
  "Integrations with lab analyzers, PACS, accounting software, payment gateways or payer systems.",
  "Customization for unique workflows, forms, reports or languages.",
  "Hosting and infrastructure, whether cloud, on-premise or hybrid.",
  "Maintenance and support level after go-live.",
];

export function Section({
  id,
  eyebrow,
  title,
  children,
  aside,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-border py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {eyebrow}
          </p>
        ) : null}
        {aside ? (
          <div className="mt-3 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {title}
              </h2>
              <div className="mt-6">{children}</div>
            </div>
            {aside}
          </div>
        ) : (
          <>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </>
        )}
      </div>
    </section>
  );
}

const handoffs = [
  "Registration",
  "Consultation",
  "Laboratory",
  "Pharmacy",
  "Billing",
  "Ward and discharge",
];

function RecordFlow() {
  return (
    <aside className="rounded-3xl border border-border bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        One patient record
      </p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        Every department adds to the same chart instead of starting a new file.
      </p>
      <ol className="mt-5 space-y-3">
        {handoffs.map((step, index) => (
          <li key={step} className="flex items-center gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold">
              {index + 1}
            </span>
            <span className="text-sm font-medium">{step}</span>
          </li>
        ))}
      </ol>
    </aside>
  );
}

const truthItems = [
  ["Patients", "One chart from the first visit"],
  ["Staff", "Schedules, roles and duty rosters"],
  ["Services", "Orders, tests and procedures"],
  ["Stock", "Pharmacy and store levels"],
  ["Money", "Charges, invoices and claims"],
];

function SourceOfTruth() {
  return (
    <aside className="rounded-3xl border border-border bg-primary p-5 text-primary-foreground shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
        One source of truth
      </p>
      <p className="mt-2 text-lg font-semibold leading-snug">
        The whole facility, not only the chart.
      </p>
      <ul className="mt-5 space-y-3">
        {truthItems.map(([label, detail]) => (
          <li key={label} className="border-t border-primary-foreground/15 pt-3">
            <p className="text-sm font-semibold">{label}</p>
            <p className="mt-0.5 text-sm text-primary-foreground/75">{detail}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-3xl space-y-5 text-base leading-7 text-muted-foreground">
      {children}
    </div>
  );
}

export function CompareTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="mt-8">
      <div className="grid gap-3 md:hidden">
        {rows.map((row) => (
          <article key={row[0]} className="rounded-2xl border border-border bg-white p-4">
            <p className="font-semibold">{row[0]}</p>
            {headers.slice(1).map((header, index) => (
              <p key={header} className="mt-2 text-sm leading-6 text-muted-foreground first-of-type:mt-3">
                <span className="font-medium text-foreground">{header}. </span>
                {row[index + 1]}
              </p>
            ))}
          </article>
        ))}
      </div>
      <div className="hidden overflow-x-auto rounded-2xl border border-border md:block">
      <table className="w-full min-w-[720px] border-collapse text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-secondary text-foreground">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-t border-border align-top">
              {row.map((cell, index) => (
                <td
                  key={`${index}-${cell}`}
                  className={
                    index === 0
                      ? "px-4 py-3 font-medium text-foreground"
                      : "px-4 py-3 leading-6 text-muted-foreground"
                  }
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default function HospitalManagementPage() {
  return (
    <PageFrame>
      <main className="bg-background pt-28 text-foreground md:pt-32">
        <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-20">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-foreground">Home</Link></li>
              <li aria-hidden>/</li>
              <li><Link href="/products" className="hover:text-foreground">Products</Link></li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/products/healthcare-medical-software" className="hover:text-foreground">
                  Healthcare & Medical Software
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-foreground">Hospital Management System</li>
            </ol>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,460px)]">
            <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Healthcare software
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl md:leading-[1.05]">
            Hospital Management System
          </h1>
          <p className="mt-4 text-lg font-medium text-foreground md:text-xl">
            Complete healthcare management software
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
            One connected platform for patient registration, appointments, medical records, billing, pharmacy, laboratory, wards and reporting. Built and configured by ClickMasters around the way your hospital actually works.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Request a demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+13252024074"
              className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm font-semibold"
            >
              +1 325 202 4074
            </a>
          </div>
            </div>
            <figure className="overflow-hidden rounded-3xl border border-border bg-secondary shadow-lg shadow-black/5">
              <img
                src="/products/hospital-management-hero.jpg"
                alt="Hospital administration desk with an operations board on the monitor"
                className="aspect-[4/3] w-full object-cover"
              />
            </figure>
          </div>
          <nav aria-label="On this page" className="mt-10 flex flex-wrap gap-2">
            {contents.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-border px-3 py-1.5 text-sm font-medium hover:bg-secondary"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </section>

        <Section
          id="overview"
          title="Transform hospital operations with an integrated hospital management system"
          aside={<RecordFlow />}
        >
          <Prose>
            <p>
              A hospital runs on hundreds of handoffs every day. A patient checks in at the front desk, waits for a doctor, gets sent for a blood test, returns with results, receives a prescription, pays a bill and, if admitted, moves through wards, theatres and discharge. When every one of those steps lives in a separate spreadsheet, paper register or standalone tool, staff spend their time chasing information instead of acting on it.
            </p>
            <p>
              The ClickMasters Hospital Management System brings those handoffs into one place. Registration creates a single patient record. Every department that touches the patient (consultation, laboratory, radiology, pharmacy, nursing, billing) reads from and writes to that same record. Administrators see what is happening across the hospital without calling each department for an update.
            </p>
            <p>
              We approach HMS as a configurable product, not a one-size-fits-all box. Our team maps your departments, approval chains and billing rules first, then configures the modules you need. Where your workflows go beyond standard configuration, our{" "}
              <Link href="/software-development" className="font-medium text-foreground underline underline-offset-4">
                custom software development services
              </Link>{" "}
              extend the platform with features built specifically for your facility.
            </p>
          </Prose>
        </Section>

        <section id="what-it-is" className="scroll-mt-28 border-t border-border py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  Definition
                </p>
                <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
                  What is a hospital management system?
                </h2>
                <Prose>
                  <p className="mt-6">
                    A hospital management system (HMS) is software that manages the clinical, administrative and financial operations of a healthcare facility from a single database. It is sometimes called a hospital information management system, hospital ERP software or hospital administration software. The names differ, but the goal is the same: one source of truth for patients, staff, services, stock and money.
                  </p>
                  <p>
                    Where an electronic medical records (EMR) system focuses on the clinical chart, an HMS covers the whole facility. It handles the patient&apos;s chart, and also the appointment that brought them in, the bed they occupy, the medicines dispensed to them, the invoice they receive and the insurance claim that follows.
                  </p>
                </Prose>
              </div>
              <SourceOfTruth />
            </div>
            <h3 className="mt-12 text-lg font-semibold">What an HMS typically connects</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {connections.map((item) => (
                <div key={item.label} className="rounded-2xl border border-border bg-white p-5">
                  <h4 className="font-semibold">{item.label}</h4>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Section
          id="why"
          eyebrow="The problem"
          title="Why modern healthcare facilities need hospital management software"
        >
          <Prose>
            <p>
              Most hospitals do not set out to build fragmented systems. They grow into them. A billing tool is bought one year, a lab system the next, and the pharmacy keeps its own stock sheet. Over time, these islands create predictable problems.
            </p>
          </Prose>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {problems.map((item) => (
              <article key={item.title} className="rounded-2xl border border-border bg-white p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            An integrated hospital management system does not replace good clinical judgment or good management. It removes the friction around them, so people spend more time on patients and less time looking for information.
          </p>
        </Section>

        <Section
          id="modules"
          eyebrow="Scope"
          title="Complete hospital management system features and modules"
        >
          <Prose>
            <p>
              Below are the hospital management system modules available in our HMS scope. Every hospital is different, so modules are selected and configured during requirement analysis. We label each one so you know what to expect.
            </p>
          </Prose>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {modules.map((item) => (
              <article key={item.title} className="rounded-2xl border border-border bg-white p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
                    {item.level}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="how-it-works"
          eyebrow="Patient flow"
          title="How does a hospital management system work?"
        >
          <Prose>
            <p>
              The easiest way to understand an HMS is to follow one patient. At every stage below, staff add information to the same record, and the next department picks it up without re-entering anything.
            </p>
          </Prose>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {journey.map((step, index) => (
              <li key={step.title} className="flex gap-4 rounded-2xl border border-border bg-white p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          id="benefits"
          eyebrow="Outcomes"
          title="Benefits of hospital management software"
        >
          <Prose>
            <p>
              The value of hospital management software comes from removing gaps between people and departments. These are the benefits hospitals typically look for. The size of the improvement depends on your starting point, your processes and how fully the system is adopted.
            </p>
          </Prose>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <article key={item.title} className="rounded-2xl border border-border bg-white p-5">
                <h3 className="font-semibold leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="who" title="Who can use our hospital management system?">
          <Prose>
            <p>
              Because modules are selected per project, the same platform can be scaled down for a single-site facility or scaled up for a group of hospitals.
            </p>
            <p>
              We also offer hospital management software for small hospitals and clinics that need fewer modules today but want room to grow.
            </p>
          </Prose>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {audiences.map((item) => (
              <li key={item} className="rounded-2xl border border-border bg-white px-5 py-4 text-sm leading-6">
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="comparison"
          eyebrow="Comparison"
          title="Hospital management system vs traditional hospital management"
        >
          <Prose>
            <p>
              Many facilities still run on paper registers, spreadsheets and disconnected tools. Here is how that compares with an integrated hospital management system.
            </p>
          </Prose>
          <CompareTable
            caption="Integrated HMS compared with traditional, manual hospital management"
            headers={["Area", "Traditional / manual", "Integrated hospital management system"]}
            rows={manualRows}
          />

          <h3 className="mt-14 max-w-3xl text-2xl font-semibold tracking-tight md:text-3xl">
            Cloud-based vs on-premise hospital management software
          </h3>
          <Prose>
            <p className="mt-5">
              A cloud-based hospital management system runs on hosted infrastructure and is accessed securely through a browser or app. An on-premise system runs on servers inside or controlled directly by the hospital. Both are valid choices; the right one depends on your IT capacity, connectivity, budget and data policies.
            </p>
          </Prose>
          <CompareTable
            caption="Cloud-based and on-premise HMS deployment compared"
            headers={["Consideration", "Cloud-based HMS", "On-premise HMS"]}
            rows={hostingRows}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            Our team can help you assess these trade-offs and design the hosting setup, including hybrid models where some services run locally and others in the cloud.
          </p>
        </Section>

        <Section
          id="security"
          eyebrow="Privacy"
          title="Hospital data security and privacy"
        >
          <Prose>
            <p>
              Patient information is among the most sensitive data any organization holds. We design hospital software with privacy-aware architecture from the first sprint, not as an add-on after launch.
            </p>
            <p>
              Regulatory compliance, including HIPAA in the United States, depends on the software, the hosting environment and the hospital&apos;s own policies and agreements together. We work with your compliance and IT teams to build the technical safeguards your program requires; compliance obligations and any certifications remain specific to each deployment.
            </p>
          </Prose>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {safeguards.map((item) => (
              <li key={item} className="rounded-2xl border border-border bg-white px-5 py-4 text-sm leading-6">
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="implementation"
          eyebrow="Delivery"
          title="Hospital management system implementation process"
        >
          <Prose>
            <p>
              A hospital cannot pause operations while software is installed, so implementation is planned in phases. Here is how we take a project from first conversation to live system.
            </p>
          </Prose>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {implementation.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-border bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
            After go-live, our ongoing{" "}
            <Link href="/support-and-outsourcing" className="font-medium text-foreground underline underline-offset-4">
              software support and maintenance services
            </Link>{" "}
            cover bug fixes, updates, performance monitoring and new feature requests as your hospital evolves.
          </p>
        </Section>

        <Section id="cost" title="How much does hospital management software cost?">
          <Prose>
            <p>
              There is no honest single price for a hospital management system, because two hospitals rarely need the same thing. A 20-bed facility with OPD, pharmacy and billing has very different needs from a multi-specialty hospital with theatres, ICU, imaging and insurance integration. These are the factors that shape the cost:
            </p>
          </Prose>
          <ul className="mt-6 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
            {costFactors.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
            After an initial discussion, we provide a written outline covering scope, exclusions, timeline and price, so you can compare options with clear information before committing.
          </p>
        </Section>

        <Section id="why-us" title="Why choose ClickMasters for hospital management software?">
          <Prose>
            <p>
              ClickMasters is a software development company that works with healthcare organizations alongside clients in FinTech, e-commerce, education and logistics. We treat a hospital management system as a long-term software partnership, not a one-time installation.
            </p>
            <p>
              You can read more{" "}
              <Link href="/about" className="font-medium text-foreground underline underline-offset-4">
                about ClickMasters and how our team works
              </Link>
              , including our remote-first delivery model with sessions that overlap U.S. business hours.
            </p>
            <p>
              For larger hospitals and healthcare networks, our{" "}
              <Link
                href="/software-development/enterprise-software-development"
                className="font-medium text-foreground underline underline-offset-4"
              >
                enterprise software solutions
              </Link>{" "}
              cover multi-branch architecture, integrations and scalable infrastructure.
            </p>
          </Prose>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {[
              "Configured to your workflows: we map your processes before configuring the software.",
              "Full-cycle team: software, web and mobile development, UI/UX design, QA and testing, cloud and DevOps under one roof.",
              "Extensible: custom modules, integrations and patient-facing apps can be built on the same platform.",
              "Clear proposals: written scope, exclusions, timeline and price after the first conversation.",
              "Remote-first delivery across the US, Europe, Canada and Australia.",
              "Ongoing support: maintenance, dedicated teams and technical support after launch.",
            ].map((item) => (
              <li key={item} className="rounded-2xl border border-border bg-white px-5 py-4 text-sm leading-6">
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <section className="border-t border-border bg-secondary">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center md:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Request a hospital management system demo
              </h2>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                See how registration, EMR, billing, pharmacy and wards connect in one platform. Tell us about your departments and we will tailor the walkthrough to your hospital.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Request a demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section id="faq" className="scroll-mt-28 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Frequently asked questions
            </h2>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white">
              {hospitalFaqs.map((faq) => (
                <details key={faq.question} className="group p-5 md:p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold md:text-lg">
                    {faq.question}
                    <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-primary text-primary-foreground">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-end md:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Discuss your hospital software requirements
              </h2>
              <p className="mt-4 text-base leading-7 text-primary-foreground/80">
                Talk to our healthcare software development team about your departments, current systems and goals. We will respond with a clear written outline of scope, timeline and price.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-5 py-3 text-sm font-semibold text-primary"
              >
                Contact us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+13252024074"
                className="inline-flex items-center rounded-full border border-primary-foreground/30 px-5 py-3 text-sm font-semibold"
              >
                +1 325 202 4074
              </a>
            </div>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}
