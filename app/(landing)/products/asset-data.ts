// Content for /products/business-enterprise-management/asset-management-software.
// Source: Asset-Management-Software-SEO-Content.md + ...-SEO-Strategy.docx (19 Nov 2026).
// FAQ text is reused verbatim by the FAQPage JSON-LD, so edit both together.
// The page body must keep exactly 5 internal links (see assetLinks).

export const ASSET_PATH = "/products/business-enterprise-management/asset-management-software";

export const assetTitle = "Asset Management Software for Tracking & Maintenance";

export const assetDescription =
  "Asset management software to track equipment, IT and fixed assets: location, assignment, maintenance, depreciation and retirement in a single system.";

export const PRODUCT_NAME = "Asset Management Software";
export const INDUSTRY_SLUG = "business-enterprise-management";
export const INDUSTRY_LABEL = "Business & Enterprise Management";

export type LinkSpec = { anchor: string; href: string };

/** The only five in-body links on the page. */
export const assetLinks = {
  vehicle: {
    anchor: "vehicle maintenance management software",
    href: "/products/logistics-transportation-software/vehicle-maintenance-management-software",
  },
  inventory: {
    anchor: "inventory management software",
    href: "/products/business-enterprise-management/inventory-management-software",
  },
  erp: {
    anchor: "ERP software",
    href: "/products/business-enterprise-management/enterprise-resource-planning-erp-software",
  },
  predictive: { anchor: "predictive analytics", href: "/machine-learning-development-services/predictive-analytics" },
  custom: {
    anchor: "custom asset management software development",
    href: "/software-development/enterprise-software-development",
  },
} satisfies Record<string, LinkSpec>;

const dir = "/products/asset-management";
const img = (file: string, alt: string, width = 1440, height = 900) => ({ src: `${dir}/${file}`, width, height, alt });

export const assetImages = {
  dashboard: img("asset-management-software-dashboard.svg", "Asset management software dashboard showing total asset value, maintenance due, and assets by status and location"),
  registry: img("asset-registry-inventory-overview.svg", "Centralized asset registry listing asset IDs, categories, locations, assigned users and lifecycle status"),
  lifecycle: img("asset-lifecycle-management-workflow.svg", "Asset lifecycle management workflow from planning and procurement through tagging, assignment, maintenance, audit, transfer and retirement", 1200, 820),
  qr: img("qr-barcode-asset-tracking-scan.svg", "QR code asset tracking screen on a mobile device showing asset details and a check-out action"),
  maintenance: img("equipment-maintenance-dashboard.svg", "Equipment maintenance dashboard with upcoming preventive maintenance, open work orders and downtime by machine"),
  assignment: img("asset-assignment-location-tracking.svg", "Asset profile showing current custodian, assignment history and location transfer timeline"),
  multiLocation: img("multi-location-asset-management.svg", "Multi-location asset management view comparing asset counts, values and pending transfers across sites"),
  analytics: img("asset-analytics-reporting-dashboard.svg", "Asset analytics dashboard with utilization rates, maintenance cost by category and depreciation schedule"),
  audit: img("mobile-asset-tracking-audit-app.svg", "Mobile asset tracking app in audit mode listing found, missing and unexpected assets in a room"),
  integration: img("enterprise-asset-management-integration.svg", "Enterprise asset management architecture connecting the asset registry with ERP, HRMS, IT service management and IoT sensors", 1200, 820),
  og: img("asset-management-software-og.png", "Illustrative concept of an asset management software dashboard", 1200, 750),
};

export const centralPoints = [
  ["Visibility", "Every asset's location, status and condition in one place"],
  ["Control", "Defined processes for assigning, moving, servicing and retiring assets"],
  ["Accountability", "A named custodian and a full history of every handoff"],
  ["Efficiency", "Planned maintenance, fewer duplicate purchases, faster audits, and better decisions about repairing or replacing equipment"],
] as const;

export const typicalUses = [
  "Keeping an accurate asset register with tags, serial numbers and specifications",
  "Tracking location and custody as assets move between sites and people",
  "Planning and recording maintenance to reduce unplanned downtime",
  "Recording cost, depreciation and disposal for finance and audits",
  "Managing IT hardware and software licenses across employees",
  "Measuring utilization to guide purchasing and replacement decisions",
];

export const challengeRows = [
  ["Scattered asset records", "Spreadsheets per department disagree", "One registry with standard fields and IDs"],
  ["Manual asset tracking", "Records go stale between audits", "Scan-based check-in, check-out and transfers update records as they happen"],
  ["Lost or misplaced equipment", "Replacement costs and delays", "Location and custodian history for every asset"],
  ["Poor asset visibility", "Duplicate purchases, idle equipment", "Search and dashboards by site, status and type"],
  ["Unplanned maintenance", "Breakdowns and downtime", "Preventive schedules, reminders and work history"],
  ["Limited accountability", "No one owns the asset", "Assignment with acknowledgment and audit trail"],
  ["Inaccurate records", "Audit findings, misstated values", "Physical audits with scanning and reconciliation"],
  ["Multiple locations", "Each site tracks differently", "A location hierarchy and transfer workflow"],
  ["No utilization insights", "Buying more instead of using better", "Usage and availability reporting"],
  ["Complex lifecycles", "Retirement and disposal are undocumented", "Lifecycle statuses, approvals and disposal records"],
];

export type AssetFeature = { title: string; icon: string; what: string; why: string; benefit: string; useCase?: string };

export const features: AssetFeature[] = [
  { title: "Centralized Asset Registry", icon: "Database", what: "Stores every asset with an ID, category, make and model, serial number, specifications, location, custodian, cost, purchase date, vendor, warranty and status.", why: "Every other process depends on a reliable register.", benefit: "One searchable record instead of conflicting lists.", useCase: "A multi-site company replaces departmental spreadsheets with a single registry and finds equipment it didn't know it owned." },
  { title: "Asset Tracking and Identification", icon: "Fingerprint", what: "Gives each asset a unique identifier and records every movement, assignment and status change.", why: "An asset you can't identify can't be tracked.", benefit: "Fast lookups and a reliable history.", useCase: "Field supervisors identify a tool by its tag and see its owner and last service date." },
  { title: "QR Code and Barcode Asset Tracking", icon: "QrCode", what: "Prints durable QR or barcode labels and scans them with mobile devices or handheld scanners to check assets in and out, transfer them or audit them. RFID and GPS trackers are hardware-dependent options for specific needs.", why: "Scanning is faster and more accurate than typing.", benefit: "Quicker audits and fewer recording errors.", useCase: "An annual audit of 2,000 tagged items is completed by scanning room by room, and differences are flagged automatically." },
  { title: "Asset Assignment and Ownership Management", icon: "UserCheck", what: "Assigns assets to employees, departments, projects or locations, with acknowledgment, due-back dates and return workflows.", why: "Accountability prevents loss.", benefit: "You always know who's responsible for each asset.", useCase: "A departing employee's checklist lists every assigned laptop, phone and tool for return." },
  { title: "Asset Lifecycle Management", icon: "RefreshCw", what: "Moves each asset through defined statuses: planned, ordered, received, in service, in repair, in storage, retired, disposed.", why: "Lifecycle status drives maintenance, valuation and replacement planning.", benefit: "A clear picture of where every asset stands.", useCase: "Finance sees which assets are near end of life before budgeting." },
  { title: "Asset Maintenance Scheduling", icon: "CalendarClock", what: "Schedules maintenance by calendar interval, usage meter (hours, miles, cycles) or condition, with reminders and assigned technicians.", why: "Missed maintenance shortens asset life.", benefit: "Planned work replaces emergency repairs.", useCase: "Compressors are serviced every 500 run hours, with automatic work requests." },
  { title: "Preventive and Corrective Maintenance", icon: "Wrench", what: "Manages preventive tasks and corrective work orders, including problem description, parts, labor, cost, downtime and resolution.", why: "Repair history shows which assets cost the most to keep.", benefit: "Better repair-vs.-replace decisions.", useCase: "Maintenance history reveals one machine model fails twice as often as the others." },
  { title: "Equipment and Machinery Management", icon: "Factory", what: "Records operating equipment with technical specifications, operating locations, safety inspection records, certifications and operator assignments.", why: "Equipment availability affects production and safety.", benefit: "Equipment is ready, inspected and documented.", useCase: "A construction firm sees which excavators are available, on which site, and when inspections are due." },
  { title: "IT Asset Management", icon: "Laptop", what: "Tracks laptops, desktops, servers, network devices, mobile devices and peripherals, plus software licenses and subscriptions with seat counts and renewal dates.", why: "IT assets move often and carry security and licensing obligations.", benefit: "Clean onboarding and offboarding, plus license visibility.", useCase: "IT sees which licenses are unassigned before renewing." },
  { title: "Asset Location and Transfer Tracking", icon: "MapPin", what: "Models a location hierarchy (site, building, floor, room) and manages transfer requests, approvals, shipping and receipt.", why: "Unrecorded moves are the main cause of “lost” assets.", benefit: "Accurate location records across sites.", useCase: "Medical equipment moves between hospital departments with scan-in at the destination." },
  { title: "Asset Condition Monitoring", icon: "Gauge", what: "Records condition ratings and inspection results. Where sensors are installed, it can capture IoT readings such as runtime, temperature or vibration.", why: "Condition data supports maintenance and replacement timing.", benefit: "Early warning of deterioration.", useCase: "Inspection scores trigger maintenance when condition drops below a threshold." },
  { title: "Depreciation and Financial Records", icon: "Calculator", what: "Records acquisition cost, capitalization, useful life, salvage value and depreciation using the methods your accounting policy specifies, and shows net book value.", why: "Finance needs an accurate fixed asset register.", benefit: "A register that reconciles with the general ledger.", useCase: "The controller exports monthly depreciation entries to the accounting system. Methods and tax treatment are set by your accountant." },
  { title: "Asset Disposal and Retirement", icon: "Archive", what: "Manages retirement requests, approvals, disposal method (sale, donation, recycling, scrapping), data-wiping confirmation for IT assets, proceeds, and final write-off records.", why: "Undocumented disposals create audit and data-security risk.", benefit: "A clean, auditable end-of-life process.", useCase: "Retired laptops are only marked “disposed” after the certificate of data destruction is uploaded." },
  { title: "Document and Warranty Management", icon: "FileText", what: "Attaches invoices, manuals, warranties, service contracts, inspection certificates and photos to each asset, with expiry reminders.", why: "Warranty claims and inspections depend on paperwork.", benefit: "Documents are found in seconds, and warranty coverage is actually used.", useCase: "A technician checks warranty status before paying for a repair." },
  { title: "Audit Trail and Activity History", icon: "History", what: "Logs every creation, edit, assignment, transfer, maintenance event and disposal, with the user and a timestamp.", why: "History explains how the record got to where it is.", benefit: "Audit readiness and dispute resolution." },
  { title: "Asset Utilization Monitoring", icon: "Activity", what: "Measures how often assets are in use, idle or down, using check-out data, meters or sensors.", why: "Underused assets tie up capital.", benefit: "Redeploy idle assets before buying new ones.", useCase: "A company finds that a third of its loaner equipment sits unused and pauses purchases." },
  { title: "Reporting and Analytics Dashboard", icon: "BarChart3", what: "Reports on counts and value by category and location, maintenance due and overdue, cost of ownership, downtime, utilization, warranty expiry and audit variances.", why: "Managers need answers without spreadsheets.", benefit: "Better capital and maintenance decisions." },
  { title: "Role-Based Access and Permissions", icon: "ShieldCheck", what: "Controls who can view, edit, assign, transfer, approve or dispose of assets, by role, department and location.", why: "Asset data includes financial and security-sensitive information.", benefit: "The right people have the right access, with an audit trail." },
  { title: "Multi-Location Asset Management", icon: "Building2", what: "Supports many sites with location-specific users, transfers, audits and rollup reporting.", why: "Each site needs autonomy, and leadership needs a consolidated view.", benefit: "Consistent standards across every location." },
  { title: "ERP, CRM, Accounting and Third-Party Integrations", icon: "Plug", what: "Exchanges data with ERP and accounting (purchases, capitalization, depreciation), HRMS (employee assignments), IT service management tools, procurement and BI.", why: "Re-keying data between systems causes errors.", benefit: "Asset records stay consistent with financial and operational systems." },
];

export const lifecycle = [
  ["Asset planning", "Identify needs, standards and budgets, informed by utilization and replacement data."],
  ["Procurement and acquisition", "Request, approve and purchase, linked to the purchase order and vendor."],
  ["Registration and tagging", "Create the asset record and attach a QR, barcode or RFID tag."],
  ["Assignment and deployment", "Assign to a person, department, project or location, with acknowledgment."],
  ["Tracking and utilization", "Record movements, check-outs and usage."],
  ["Maintenance and repair", "Run preventive schedules and corrective work orders, and keep the service history."],
  ["Auditing and valuation", "Run periodic physical audits, reconcile records, and update depreciation and book value."],
  ["Transfer and reassignment", "Move assets between sites, teams or people with approvals and scan confirmation."],
  ["Disposal and retirement", "Approve retirement, record the disposal method and proceeds, wipe data where needed, and close the record."],
] as const;

export const howItWorks = [
  ["Register", "A received asset is entered (or imported from the purchase order), categorized and tagged."],
  ["Assign", "It's assigned to an employee or location, and the custodian acknowledges it."],
  ["Use and track", "Scans record check-outs, transfers and audits, and meters or sensors record usage where available."],
  ["Maintain", "Schedules generate preventive tasks, issues generate work orders, and costs and downtime are recorded."],
  ["Value", "Depreciation runs according to configured methods, and financial entries go to accounting."],
  ["Report", "Dashboards show location, status, maintenance, utilization and value."],
  ["Retire", "At end of life, retirement is approved, disposal is documented and the record is closed. Its history is kept."],
] as const;

export const industryRows = [
  ["Manufacturing", "Production machinery, tooling, molds, forklifts", "Preventive and meter-based maintenance, downtime tracking, spare-part links, IoT condition data"],
  ["Healthcare and hospitals", "Medical devices, beds, pumps, IT equipment", "Location across departments, inspection and calibration records, recall lookups by model or serial"],
  ["Construction", "Heavy equipment, tools, trailers, generators", "Site-based tracking, check-out to crews, inspections, utilization by project"],
  ["IT companies and technology departments", "Laptops, servers, network gear, licenses", "Employee assignment, onboarding and offboarding, license renewals, secure disposal"],
  ["Educational institutions", "Classroom technology, lab equipment, furniture", "Room-level location, student device loans, annual audits"],
  ["Retail and wholesale", "Store fixtures, POS hardware, refrigeration, forklifts", "Multi-store registers, maintenance of critical equipment, transfers between stores"],
  ["Warehousing and logistics", "Material-handling equipment, scanners, racking", "Maintenance schedules, scanner pools, multi-site rollups"],
  ["Government and public sector", "Fleet, facilities equipment, IT, field assets", "Accountability, audits, documented disposal"],
  ["Hospitality", "Kitchen equipment, HVAC, furniture, guest-room technology", "Preventive maintenance, multi-property tracking, refurbishment planning"],
  ["Financial and professional services", "IT hardware, office equipment, licenses", "Employee assignment, security-conscious disposal, office moves"],
];

export const fixedVsItRows = [
  ["Primary owner", "Finance and accounting", "IT"],
  ["Scope", "Capitalized physical assets: buildings, machinery, vehicles, furniture, equipment", "Hardware, software, licenses, cloud subscriptions, devices"],
  ["Key data", "Cost, useful life, depreciation, book value, disposal proceeds", "Device specs, user, configuration, license entitlements, security status"],
  ["Typical events", "Capitalization, depreciation, impairment, disposal", "Provisioning, reassignment, patching status, license renewal, secure wipe"],
  ["Shared ground", "Asset ID, location, custodian, lifecycle, audit trail", "Same"],
];

export const assetVsInventoryRows = [
  ["What's tracked", "Individual items the business owns and uses", "Stock held for sale, production or consumption"],
  ["Unit of tracking", "Each asset (unique ID or serial)", "Quantities of each SKU"],
  ["Key questions", "Where is it? Who has it? What condition? When is service due? What's it worth?", "How many do we have? Where? When do we reorder?"],
  ["Lifecycle", "Years: acquire → use → maintain → retire", "Days to months: receive → store → sell or consume"],
  ["Financial view", "Capitalized, depreciated", "Current asset, cost of goods sold"],
  ["Typical processes", "Assignment, maintenance, audit, disposal", "Receiving, picking, transfers, replenishment"],
];

export const cloudVsOnPremRows = [
  ["Access", "Browser and mobile scanning from any site", "Mainly the internal network or VPN"],
  ["Multi-location", "Natural fit", "Requires networking between sites"],
  ["Upfront cost", "Lower infrastructure outlay", "Servers and setup up front"],
  ["Maintenance", "Managed cloud operations", "Internal IT"],
  ["Scalability", "Grows with assets and users", "Capacity planning required"],
  ["Offline scanning", "Needs offline-capable mobile apps for weak-signal areas", "Works on the local network"],
  ["Best fit", "Distributed operations, field assets, growing businesses", "Isolated facilities or strict hosting policies"],
];

export const customReasons = [
  ["Asset types and data", "Are specialized, such as medical devices, heavy equipment or calibrated instruments"],
  ["Workflows", "Such as approvals, inspections, loans and disposal follow your own rules"],
  ["Integrations", "With ERP, accounting, HRMS, ITSM, procurement or IoT platforms are central"],
  ["Many locations", "You operate many locations with different processes"],
  ["Reporting", "Needs go beyond standard dashboards"],
  ["Per-user or per-asset pricing", "Grows faster than the value as you scale"],
  ["Own the code and data model", "Clickmasters' engagements include full IP assignment to the client."],
] as const;

export const integrationRows = [
  ["ERP systems", "Purchase orders, capitalization, cost centers, depreciation postings"],
  ["Accounting software", "Fixed asset register, journal entries, disposal gains or losses"],
  ["Procurement systems", "Approved requests and POs create pending asset records"],
  ["HRMS", "Employee joiners, movers and leavers drive assignment and return workflows"],
  ["IT service management platforms", "Incidents, requests and configuration records linked to IT assets"],
  ["Maintenance management systems", "Work orders and service history"],
  ["Barcode, QR and RFID solutions", "Scanning devices and label printers"],
  ["Business intelligence tools", "Asset, maintenance and cost analytics"],
  ["APIs and third-party platforms", "IoT platforms, vendor portals, telematics"],
];

export const aiPoints = [
  ["Predictive maintenance", "Models estimate failure risk from runtime, sensor readings and maintenance history, so service can be planned earlier"],
  ["Utilization insights", "Identify idle or overused assets and suggest redeployment"],
  ["Maintenance pattern analysis", "Find models, sites or vendors associated with repeat failures"],
  ["Anomaly detection", "Flag unusual sensor readings, costs or movements for review"],
  ["Automated reporting", "Generate narrative summaries of asset health and spend"],
  ["Intelligent classification", "Suggest categories and fields from invoices or descriptions during registration"],
] as const;

export const benefitGroups = [
  ["Operational", "Fewer lost assets, more planned maintenance and less emergency repair, better equipment availability, faster audits"],
  ["Financial", "A more accurate fixed asset register, fewer duplicate purchases, warranties actually used, better repair-vs.-replace and capital planning decisions"],
  ["Administrative", "Less spreadsheet maintenance, standard workflows for assignment, transfer and disposal, documents in one place"],
  ["Strategic", "Data on utilization, lifecycle cost and reliability to inform investment, standardization and vendor choices"],
] as const;

export const chooseChecklist = [
  ["Business requirements", "Which problems matter most (loss, maintenance, audits, depreciation, licenses)?"],
  ["Asset types", "Equipment, IT, vehicles, facilities, tools, and how specialized their data is"],
  ["Number of locations", "And how assets move between them"],
  ["Tracking requirements", "Barcode, QR, RFID or GPS, and mobile or offline needs"],
  ["Maintenance workflows", "Preventive schedules, meters, work orders, inspections"],
  ["Integration needs", "ERP, accounting, HRMS, ITSM, procurement, BI, IoT"],
  ["Security and permissions", "Roles, location-based access, audit trails, SSO"],
  ["Reporting", "Valuation, maintenance, utilization, audit variance"],
  ["Scalability", "Asset count, users and sites in five years"],
  ["Customization", "Fields, workflows, approvals, screens"],
  ["Implementation and support", "Data migration, tagging rollout, training, ongoing support"],
] as const;

export const processSteps = [
  ["Requirement discovery", "Stakeholder workshops across operations, finance, IT and maintenance, plus an asset inventory and pain-point ranking."],
  ["Business workflow analysis", "Map acquisition, assignment, transfer, maintenance, audit and disposal processes."],
  ["UI/UX planning", "Design registry, scanning, work-order and dashboard screens for desktop and mobile, tested with users."],
  ["Architecture and technology selection", "Data model, location hierarchy, integration design, security model and hosting."],
  ["Development", "Two-week sprints with regular demos."],
  ["Integration", "Connect ERP, accounting, HRMS, ITSM, scanners and, where relevant, IoT platforms."],
  ["Testing", "Functional, integration, scanning, performance, security and user acceptance testing."],
  ["Deployment", "Data migration and tagging rollout, starting with a pilot site, then expansion."],
  ["Maintenance and continuous improvement", "Post-launch support, monitoring and new modules on a roadmap."],
] as const;

/** "Enterprise and industrial experience" carries link 5 and is rendered separately. */
export const whyClickmasters = [
  ["Custom software built around your operation", "A remote-first software development company building custom web, mobile and AI products for US businesses."],
  ["Machine monitoring and predictive analytics", "IoT-integrated machine monitoring platforms, plus anomaly and risk detection models."],
  ["Mobile apps for field teams", "Offline-first cross-platform apps for technicians, drivers and inspectors."],
  ["Integration capability", "APIs and enterprise integrations with your existing systems."],
  ["Ownership and support", "Full IP assignment to the client, and post-launch maintenance and support as part of engagements."],
  ["Transparent scoping", "Scope, timeline and quote are agreed before development starts."],
] as const;

export const costFactors = [
  ["Number of modules", "Registry only, or maintenance, depreciation, ITAM, audits and analytics too"],
  ["Asset volume", "And data migration effort"],
  ["User roles", "And approval workflows"],
  ["Locations", "And the complexity of the location hierarchy"],
  ["Integrations", "ERP, accounting, HRMS, ITSM, procurement, IoT"],
  ["Mobile requirements", "Native or cross-platform, and offline scanning"],
  ["Barcode, QR or RFID", "Functionality and hardware"],
  ["Reporting complexity", "And dashboards"],
  ["AI capabilities", "Such as predictive maintenance or anomaly detection"],
  ["Hosting and security", "Hosting, security and ongoing maintenance"],
] as const;

export const assetFaqs = [
  { question: "What is asset management software?", answer: "It's software that records and manages the assets a business owns and uses, such as equipment, IT hardware, vehicles, tools and furniture. It tracks location, custodian, condition, maintenance, value and lifecycle status from acquisition to disposal." },
  { question: "What does an asset management system do?", answer: "It maintains an asset register, tracks movements and assignments, schedules and records maintenance, stores documents and warranties, calculates depreciation where configured, supports physical audits, and reports on asset value, condition and utilization." },
  { question: "What are the main features of asset management software?", answer: "An asset registry, barcode and QR tracking, assignment and check-out, location and transfer tracking, maintenance scheduling and work orders, depreciation records, document and warranty storage, audit trails, utilization and analytics dashboards, role-based access, multi-location support and integrations." },
  { question: "How does asset tracking software work?", answer: "Each asset gets a unique ID and label (barcode, QR, RFID or a GPS tracker for mobile assets). Scanning or tracker updates record who has the asset, where it is and its status, building a history every time it moves." },
  { question: "What is the difference between asset management and inventory management?", answer: "Asset management tracks individual items the business uses over years, including their custody, maintenance, value and retirement. Inventory management tracks quantities of stock held for sale or consumption, along with movement and replenishment. Many businesses need both." },
  { question: "What is fixed asset management software?", answer: "It focuses on the accounting side of long-term physical assets: acquisition cost, capitalization, useful life, depreciation, net book value, impairment and disposal. The goal is a fixed asset register that reconciles with the general ledger." },
  { question: "What is IT asset management software?", answer: "ITAM software tracks IT hardware, software and licenses across their lifecycle, including procurement, assignment to users, configuration, license entitlements and renewals, and secure retirement and data wiping." },
  { question: "How does asset lifecycle management work?", answer: "Assets move through defined stages: planning, procurement, registration and tagging, assignment, tracking, maintenance, auditing and valuation, transfer, and finally disposal. Software records each stage with approvals and history." },
  { question: "Can asset management software track equipment?", answer: "Yes. Equipment is one of the most common asset types. Systems can record specifications, location, operator, inspections, meter readings, maintenance schedules, repairs and downtime." },
  { question: "Can asset management software support multiple locations?", answer: "Yes. A location hierarchy (site, building, room) allows site-level users, transfers with approvals and receipt scans, site audits and consolidated reporting across the organization." },
  { question: "Does asset management software support barcode and QR codes?", answer: "Most systems do. Labels can be printed and scanned with mobile devices or handheld scanners for check-in and check-out, transfers and audits. RFID and GPS require additional hardware." },
  { question: "Can asset management software integrate with ERP?", answer: "Yes. Typical integrations exchange purchase orders, capitalization, cost centers and depreciation postings with ERP or accounting, while operational details stay in the asset system." },
  { question: "What industries use asset management systems?", answer: "Manufacturing, healthcare, construction, IT and technology, education, retail and wholesale, warehousing and logistics, government, hospitality, and financial and professional services all use them, with different priorities for maintenance, location tracking, audits and IT assets." },
  { question: "Is cloud-based asset management software suitable for small businesses?", answer: "Often, yes. Cloud systems avoid server costs, support mobile scanning across locations and can start small, with a registry, tagging and assignment, then add maintenance and depreciation later." },
  { question: "How much does custom asset management software cost?", answer: "It depends on modules, asset volume, roles, locations, integrations, mobile and scanning needs, reporting, AI features and hosting. A quote follows a scoping phase. There's no single fixed price." },
  { question: "Can businesses build custom asset management software?", answer: "Yes. Custom systems make sense when asset types, workflows, integrations or reporting are specialized, or when off-the-shelf pricing and limits don't fit. The business can own the code and data model." },
  { question: "What is the difference between EAM and ITAM?", answer: "Enterprise asset management (EAM) focuses on physical, operational assets in asset-intensive industries, including maintenance, reliability and work management. IT asset management (ITAM) focuses on IT hardware, software and licenses." },
  { question: "How can AI improve asset management?", answer: "With enough good-quality data, AI can support predictive maintenance, anomaly detection, utilization insights, maintenance pattern analysis, automated reporting and classification. Its outputs need validation and human decisions." },
];
