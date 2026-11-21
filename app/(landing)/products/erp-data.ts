// Content for /products/business-enterprise-management/enterprise-resource-planning-erp-software.
// Source: ERP-Software-SEO-Content.docx (prepared 19 Nov 2026).
// FAQ text is reused verbatim by the FAQPage JSON-LD, so edit both together.
// The page body must keep exactly 5 internal links (see erpLinks).

export const ERP_PATH =
  "/products/business-enterprise-management/enterprise-resource-planning-erp-software";

export const erpTitle = "Enterprise Resource Planning (ERP) Software | Clickmasters";

export const erpDescription =
  "Enterprise resource planning (ERP) software that connects finance, inventory, sales, HR and operations in one system. Plan your ERP with Clickmasters.";

export const PRODUCT_NAME = "Enterprise Resource Planning (ERP) Software";
export const INDUSTRY_SLUG = "business-enterprise-management";
export const INDUSTRY_LABEL = "Business & Enterprise Management";

export type LinkSpec = { anchor: string; href: string };

/** The only five in-body links on the page. */
export const erpLinks = {
  crm: {
    anchor: "CRM software",
    href: "/products/business-enterprise-management/customer-relationship-management-crm-software",
  },
  inventory: {
    anchor: "inventory management software",
    href: "/products/business-enterprise-management/inventory-management-software",
  },
  customErp: {
    anchor: "custom ERP development",
    href: "/software-development/enterprise-software-development",
  },
  api: {
    anchor: "API development and integration",
    href: "/software-development/api-development-integration",
  },
  migration: {
    anchor: "data migration services",
    href: "/data-services/data-migration-services",
  },
} satisfies Record<string, LinkSpec>;

const dir = "/products/erp";

export const erpImages = {
  dashboard: {
    src: `${dir}/erp-software-executive-dashboard.svg`,
    width: 1440,
    height: 900,
    alt: "ERP software dashboard showing cash position, open sales orders, AR aging and inventory value",
  },
  hub: {
    src: `${dir}/erp-system-modules-central-database.svg`,
    width: 1200,
    height: 820,
    alt: "Diagram of an ERP system with finance, inventory, procurement, sales, HR and manufacturing modules sharing one central database",
  },
  orderToCash: {
    src: `${dir}/erp-order-to-cash-workflow.svg`,
    width: 1200,
    height: 820,
    alt: "Order-to-cash workflow in ERP software from sales order to inventory reservation, shipment, invoice and general ledger posting",
  },
  inventory: {
    src: `${dir}/erp-inventory-module-multi-warehouse.svg`,
    width: 1440,
    height: 900,
    alt: "ERP inventory management screen showing stock levels by warehouse, reorder points and lot tracking",
  },
  approval: {
    src: `${dir}/erp-purchase-order-approval-workflow.svg`,
    width: 1440,
    height: 900,
    alt: "ERP workflow automation routing a purchase order through role-based approval steps",
  },
  integration: {
    src: `${dir}/erp-integration-architecture-api.svg`,
    width: 1200,
    height: 820,
    alt: "ERP integration architecture connecting ecommerce, CRM, banking, payroll, shipping and BI systems through APIs",
  },
  permissions: {
    src: `${dir}/erp-role-based-access-permissions.svg`,
    width: 1440,
    height: 900,
    alt: "ERP role-based access control screen assigning permissions by user role and module",
  },
  timeline: {
    src: `${dir}/erp-implementation-process-timeline.svg`,
    width: 1200,
    height: 820,
    alt: "ERP implementation process timeline from discovery and design through data migration, testing, go-live and support",
  },
  og: {
    src: `${dir}/erp-software-og.png`,
    width: 1200,
    height: 750,
    alt: "Illustrative concept of an ERP software executive dashboard",
  },
};

export const erpVsCrmRows = [
  [
    "Main question it answers",
    "“How do we deliver, account for and run the business?”",
    "“Who are our customers and prospects, and what’s next in the sales pipeline?”",
    "One department’s job (for example, invoicing or time tracking)",
  ],
  [
    "Core records",
    "Items, stock, orders, purchase orders, general ledger, employees, cost centers",
    "Leads, contacts, accounts, opportunities, activities",
    "Specific to that tool",
  ],
  [
    "Typical users",
    "Finance, operations, warehouse, procurement, production, management",
    "Sales, marketing, account management, customer service",
    "One team",
  ],
  [
    "Data model",
    "Shared across departments",
    "Shared across customer-facing teams",
    "Isolated, often synced by export",
  ],
];

export const layers = [
  [
    "A central database",
    "Customers, vendors, items, the chart of accounts, locations and employees are defined once and shared by every module. This master data is the foundation of the whole system.",
  ],
  [
    "Functional modules",
    "Each department gets screens, rules and workflows for its own work, such as purchasing, receiving or payroll preparation. Every module writes to the central database.",
  ],
  [
    "A reporting and integration layer",
    "Dashboards, reports and APIs read the same transactions in real time or close to it, and exchange data with outside systems such as ecommerce storefronts, banks, carriers or payroll providers.",
  ],
] as const;

export const orderToCash = [
  "A customer order arrives from a sales rep, a portal or an ecommerce integration.",
  "The ERP checks credit limits and available inventory, then reserves stock.",
  "The warehouse receives a pick list. Shipment confirmation updates inventory and triggers the invoice.",
  "Accounts receivable records the invoice, and the general ledger posts revenue and cost of goods sold automatically.",
  "Management dashboards show the order, margin and cash position without a manual consolidation step.",
];

export const signs = [
  ["The month-end close takes too long", "Data has to be pulled from several systems and reconciled by hand."],
  ["Inventory numbers don’t match", "The warehouse count, the ecommerce site and the books disagree, which leads to stockouts or excess stock."],
  ["Nobody has a single version of the numbers", "Leadership meetings start with arguments about whose report is right."],
  ["Growth adds headcount instead of throughput", "New locations, entities, sales channels or product lines mean more people re-keying data."],
  ["Approvals happen over email", "Purchase approvals, expense sign-offs and price exceptions have no audit trail."],
  ["Entry-level accounting software has hit its limits", "You need multi-entity consolidation, job costing, landed costs or role-based permissions it can’t provide."],
] as const;

export type ErpModule = {
  title: string;
  icon: string;
  text: string;
  link?: LinkSpec;
};

export const modules: ErpModule[] = [
  {
    title: "Financial Management and Accounting",
    icon: "Landmark",
    text: "General ledger, chart of accounts, accounts payable, accounts receivable, bank reconciliation, budgeting, cost centers and financial statements. In multi-entity setups this can include intercompany transactions and consolidated reporting. Finance is the backbone, because every other module posts to it.",
  },
  {
    title: "Inventory and Warehouse Management",
    icon: "Boxes",
    text: "Item masters, units of measure, stock by location, lot or serial tracking, transfers, cycle counts, reorder points and inventory valuation. Some businesses run inventory as a dedicated application. Our inventory management software covers that case, while an ERP ties the same stock movements directly to orders, purchasing and the general ledger.",
    link: erpLinks.inventory,
  },
  {
    title: "Procurement and Purchasing",
    icon: "ShoppingCart",
    text: "Purchase requisitions, approval routing, purchase orders, vendor management, goods receipt and three-way matching of PO, receipt and invoice before payment.",
  },
  {
    title: "Sales and Order Management",
    icon: "Receipt",
    text: "Quotes, sales orders, pricing rules and discounts, credit checks, backorders, fulfillment status, invoicing and returns (RMAs).",
  },
  {
    title: "Human Resources and Payroll Integration",
    icon: "Users",
    text: "Employee records, departments, positions, time and attendance data, and labor cost allocation. Payroll is often handled by a specialized provider and integrated, so the ERP receives journal entries and cost allocations instead of calculating pay itself.",
  },
  {
    title: "Manufacturing and Production Planning",
    icon: "Factory",
    text: "Bills of materials (BOMs), routings, work orders, material requirements planning (MRP), shop-floor reporting, scrap tracking and production costing.",
  },
  {
    title: "Supply Chain Management",
    icon: "Truck",
    text: "Demand planning, supplier lead times, inbound logistics, multi-warehouse replenishment and order fulfillment visibility from supplier to customer.",
  },
  {
    title: "CRM Integration",
    icon: "Handshake",
    text: "Synchronization of customers, quotes, orders and account status between the ERP and a sales platform, so sales teams can see credit holds, open orders and delivery dates.",
  },
  {
    title: "Project and Operations Management",
    icon: "FolderKanban",
    text: "Project budgets, job costing, time and expense capture, milestone billing and resource allocation. This matters most for professional services, construction and engineer-to-order businesses.",
  },
  {
    title: "Business Intelligence and Reporting",
    icon: "BarChart3",
    text: "Operational dashboards, financial reports, KPI tracking and data exports to a data warehouse or BI tool.",
  },
  {
    title: "Document, Asset and Workflow Management",
    icon: "FileStack",
    text: "Attached documents (invoices, contracts, certificates), fixed asset registers with depreciation schedules, and configurable approval workflows across modules.",
  },
];

export const capabilities = [
  ["Workflow automation", "Rules-based approvals, status changes, notifications and scheduled jobs replace email chains and manual handoffs."],
  ["Role-based access control", "Users see the data and actions their role needs, with separation of duties for sensitive steps such as vendor creation and payment approval."],
  ["Audit trails", "Every create, change and approval is logged with user and timestamp."],
  ["Multi-location and multi-entity support", "Separate warehouses, branches or legal entities can operate independently while still rolling up for consolidated reporting."],
  ["Configurable data fields and forms", "The system adapts to your terminology and required data without a code change for every adjustment."],
  ["APIs and integrations", "Documented interfaces let other systems exchange data safely."],
  ["Usable interfaces", "Clear screens for the people who live in the system all day: buyers, warehouse staff, AP clerks and controllers."],
] as const;

export const benefits = [
  ["One source of truth", "Departments stop reconciling each other’s numbers."],
  ["Less manual data entry", "A transaction is entered once and flows through to every downstream step."],
  ["Faster, more reliable reporting", "Financial and operational reports come straight from live transactions."],
  ["Better inventory control", "Accurate on-hand and committed quantities support better purchasing decisions."],
  ["Stronger internal controls", "Approvals, permissions and audit logs support internal policy and external audits."],
  ["Scalability", "New users, locations and product lines are added through configuration instead of new spreadsheets."],
  ["Better decisions", "Margin, cash and capacity data is available when leaders need it, not weeks later."],
] as const;

export const industryRows = [
  ["Manufacturing", "BOMs, MRP, work orders, production costing, quality checkpoints, scrap and yield tracking"],
  ["Distribution and wholesale", "Multi-warehouse inventory, landed costs, volume pricing, purchasing from many vendors, drop-shipping"],
  ["Retail and ecommerce", "Centralized catalog and stock across stores and online channels, order routing, returns, channel-level margins"],
  ["Logistics", "Order and shipment tracking, carrier cost allocation, customer billing, integration with transportation and fleet systems"],
  ["Construction", "Job costing, subcontractor purchasing, progress billing, equipment and asset tracking"],
  ["Professional services", "Project accounting, time and expense, utilization, milestone and retainer billing"],
  ["Automotive", "Parts inventory and serial tracking, supplier management, service and warranty workflows"],
  ["Food and beverage", "Lot traceability, expiration dates, recipe (formula) management, batch production"],
  ["Healthcare administration", "Back-office finance, procurement and supply inventory, HR and asset management. Clinical records belong in dedicated clinical systems, not in the ERP."],
  ["Multi-location businesses", "Location-level P&L, inter-location transfers, centralized purchasing, consolidated reporting"],
];

export const cloudVsOnPremRows = [
  ["Hosting", "Hosted on cloud infrastructure such as AWS, Microsoft Azure or Google Cloud", "Your own servers or data center"],
  ["Upfront cost", "Lower infrastructure outlay; ongoing hosting costs", "Hardware, licensing and setup costs up front"],
  ["Access", "Secure browser and mobile access from any location", "Typically network or VPN access"],
  ["Scaling", "Capacity scales with usage", "Requires hardware planning"],
  ["Maintenance", "Updates and infrastructure managed through DevOps processes", "Internal IT handles patches, backups and upgrades"],
  ["Control", "Shared-responsibility security model", "Full physical control of data and infrastructure"],
  ["Best fit", "Distributed teams, growing companies, multi-location operations", "Strict data-residency requirements or significant existing infrastructure"],
];

export const customVsReadyRows = [
  ["Fit", "Standard processes. You adapt your workflows to the product.", "Built around your workflows, terminology and business rules"],
  ["Time to first use", "Often faster for standard needs", "Longer upfront. Usually delivered in phases."],
  ["Cost model", "Per-user subscription or license, plus implementation and customization partners", "Development investment plus hosting and support; no per-seat license fees for the software you own"],
  ["Flexibility", "Limited to configuration and the vendor’s extension framework", "Any workflow, interface or integration your business needs"],
  ["Ownership", "Vendor controls the roadmap and pricing", "You own the code and the roadmap"],
  ["Risk", "Heavy customization can make upgrades painful", "Requires a disciplined development partner and clear scope"],
];

export const customReasons = [
  "Your competitive advantage lives in a process off-the-shelf products handle poorly, such as unusual pricing, configure-to-order production or a specialized fulfillment model.",
  "You’ve already tried a packaged ERP and ended up running core work in spreadsheets around it.",
  "Per-user license fees grow faster than the value your teams get from the software.",
  "You need to connect legacy systems that packaged ERPs don’t integrate with cleanly.",
  "You need a focused ERP covering a few modules done very well, not a suite where most features go unused.",
];

export const integrations = [
  ["Ecommerce platforms and marketplaces", "Orders in, inventory and fulfillment status out"],
  ["CRM systems", "Customers, quotes, orders and credit status"],
  ["Banking and payment processors", "Payments, remittances and bank feeds for reconciliation"],
  ["Payroll and HR providers", "Payroll journals, employee and cost-center data"],
  ["Shipping carriers and logistics platforms", "Rates, labels and tracking"],
  ["Warehouse and transportation systems", "Picks, shipments and freight costs"],
  ["BI tools and data warehouses", "Governed data for analytics"],
  ["Legacy and in-house systems", "Through APIs, file-based exchange or middleware, depending on what the older system supports"],
] as const;

export const reporting = [
  ["Role-based dashboards", "A controller sees cash, AR aging and close status; an operations manager sees open orders, backorders and fill rates; a purchasing lead sees open POs and late vendors."],
  ["Standard financial statements", "Income statement, balance sheet and cash flow, by entity, department or location."],
  ["Operational reports", "Inventory turnover, margin by product or customer, production variance, project profitability."],
  ["Drill-down", "From a summary figure to the underlying transactions."],
  ["Scheduled reports and alerts", "For thresholds such as low stock, overdue invoices or budget overruns."],
  ["Exports and BI feeds", "For analysis beyond the ERP, without manual extracts."],
] as const;

export const security = [
  "Role-based access control and separation of duties for sensitive workflows",
  "Single sign-on and multi-factor authentication through identity providers (SAML, OAuth 2.0 and OpenID Connect)",
  "Encryption of data in transit and at rest",
  "Audit logging of changes to master data, transactions and permissions",
  "Backups, recovery planning and environment separation (development, staging and production)",
  "Master data governance: clear ownership of customers, vendors, items and accounts so duplicates and errors don’t spread across modules",
  "Secure development practices, including code review, dependency scanning and security testing before release",
];

export const implementationSteps: { title: string; text: string; link?: LinkSpec }[] = [
  { title: "Discovery and business process analysis", text: "Map current workflows, pain points, reports, data sources and integrations. Agree on what goes into phase one." },
  { title: "Solution design and architecture", text: "Define the module scope, data model, integration architecture, security model and hosting approach." },
  { title: "UI/UX design", text: "Design and test screens and dashboards with real users before development begins." },
  { title: "Phased development", text: "Build in short iterations (Clickmasters works in two-week sprints) with regular demos to stakeholders." },
  {
    title: "Data migration",
    text: "Cleanse, map and load master data and open transactions from legacy systems, with trial loads and reconciliation. Our data migration services cover extraction, transformation, validation and cutover planning.",
    link: erpLinks.migration,
  },
  { title: "Testing", text: "Functional, integration, performance and user acceptance testing (UAT) against real business scenarios." },
  { title: "Training and deployment", text: "Role-based training, a parallel run where appropriate, then cutover." },
  { title: "Hypercare and ongoing support", text: "Close monitoring after go-live, then maintenance, optimization and new modules on a planned roadmap." },
];

export const challengeRows = [
  ["Scope creep", "Fix the phase-one scope in writing. Park new requests in a backlog for later phases."],
  ["Poor data quality", "Start data cleansing early. Assign data owners and run several trial migrations."],
  ["Low user adoption", "Involve key users in design, build for their daily tasks, and train by role, not by module."],
  ["Over-customization", "Customize where it creates real advantage and standardize everywhere else."],
  ["Integration surprises", "Inventory every system and data flow during discovery and test integrations early."],
  ["“Big bang” cutover risk", "Phase the rollout by module or location, with a parallel run for critical processes."],
  ["No executive ownership", "Name an executive sponsor and a decision-maker who can resolve cross-department conflicts."],
];

export const costFactors = [
  "Number and complexity of modules (finance only vs. finance plus inventory, manufacturing and projects)",
  "Number of integrations and the condition of the legacy systems you connect to",
  "Data migration volume and quality",
  "Users, entities and locations, plus any multi-currency or multi-company requirements",
  "Custom workflows, reports and dashboards",
  "Hosting model (cloud or on-premise) and security requirements",
  "Training, change management and post-launch support",
];

export const selectionQuestions = [
  ["Process fit", "Does it support your order-to-cash, procure-to-pay and production processes without workarounds?"],
  ["Total cost of ownership", "What are licenses or development, implementation, hosting, support and upgrades over five years?"],
  ["Integration", "Can it connect cleanly to the systems you’re keeping?"],
  ["Scalability", "Will it handle twice your transaction volume, plus new entities, locations and channels?"],
  ["Usability", "Will warehouse staff, buyers and accountants find it faster than what they use today?"],
  ["Reporting", "Can managers get answers without asking IT for exports?"],
  ["Security and control", "Does it offer role-based access, audit trails and SSO?"],
  ["Ownership and roadmap", "Who controls future changes, and what happens if your needs change?"],
  ["Partner capability", "Does the implementation or development team understand both the technology and your operations?"],
] as const;

export const howWeHelp = [
  ["Business process analysis", "We map how work actually flows through your organization before we propose modules."],
  ["ERP architecture", "We design data models, module boundaries and integrations that can scale with new entities, locations and users."],
  ["ERP UI/UX and dashboard design", "We design screens for the people who use the system every day, plus role-based dashboards for leadership."],
  ["Module development", "We build finance, inventory, purchasing, sales, production, project and reporting modules to your agreed scope."],
  ["Integration and legacy connectivity", "We connect your ERP to ecommerce, CRM, banking, payroll, logistics and legacy systems."],
  ["Data migration", "We move master data and open transactions from spreadsheets and older systems, with validation at every stage."],
  ["QA and security-focused development", "We test functionality, integrations, performance and user acceptance, and secure the system with role-based access, SSO and audit logging."],
  ["Cloud deployment", "We deploy on AWS, Microsoft Azure or Google Cloud, with containerized infrastructure and CI/CD pipelines."],
  ["Maintenance and optimization", "We provide post-launch support, performance tuning and roadmap delivery for new modules."],
] as const;

export const techStack = [
  "Node.js", "Python", "Java", ".NET", "React", "Angular", "PostgreSQL", "Microsoft SQL Server", "Oracle",
];

export const erpFaqs = [
  {
    question: "What is ERP software?",
    answer:
      "ERP (enterprise resource planning) software is a business management system that runs core operations, such as finance, inventory, purchasing, sales, production and HR, on one shared database. Every department works from the same real-time data instead of separate tools.",
  },
  {
    question: "What are the main ERP modules?",
    answer:
      "Common ERP modules include financial management and accounting, inventory and warehouse management, procurement, sales and order management, HR and payroll integration, manufacturing and production planning, supply chain management, project management, and reporting and analytics. Most businesses start with finance plus one or two operational modules.",
  },
  {
    question: "What is the difference between ERP and CRM?",
    answer:
      "CRM software manages customer-facing activity: leads, contacts, opportunities and the sales pipeline. ERP software manages how the business delivers and accounts for that work: orders, inventory, purchasing, production and finance. Many companies integrate the two so that a closed deal becomes an ERP sales order automatically.",
  },
  {
    question: "Is ERP software suitable for small and medium-sized businesses?",
    answer:
      "Yes. SMBs often adopt ERP when entry-level accounting tools and spreadsheets can’t keep up with more locations, inventory, entities or transactions. A phased approach, starting with the modules that solve the biggest problem, keeps the investment proportional to the need.",
  },
  {
    question: "What is cloud ERP software?",
    answer:
      "Cloud ERP is ERP software hosted on cloud infrastructure and accessed securely through a browser or app. It lowers upfront infrastructure costs, supports remote and multi-location teams, and scales with usage. On-premise ERP runs on servers your organization owns and manages.",
  },
  {
    question: "How much does ERP software cost?",
    answer:
      "It depends on modules, integrations, users, data migration and customization. Packaged ERPs usually charge subscription or license fees plus implementation. For custom ERP builds, Clickmasters’ published planning range for a modular system is roughly $80,000–$200,000. A quote is always based on your scope.",
  },
  {
    question: "How long does ERP implementation take?",
    answer:
      "It depends on scope, data quality and the number of integrations. Focused phase-one releases can go live in a few months, while a full modular custom ERP typically takes about 8–14 months. Phased rollouts deliver value earlier than a single “big bang” launch.",
  },
  {
    question: "Can ERP software be customized?",
    answer:
      "Yes. Packaged ERPs allow configuration and some extensions, within the vendor’s limits. A custom ERP is built around your workflows, business rules, reports and interfaces, and you own the code and the roadmap.",
  },
  {
    question: "Can ERP software integrate with our existing systems?",
    answer:
      "Usually, yes. ERPs commonly integrate with ecommerce platforms, CRMs, banks and payment processors, payroll providers, shipping carriers, warehouse systems and BI tools. Legacy systems can be connected through APIs, file exchange or middleware, depending on what they support.",
  },
  {
    question: "How does data migration work when moving to a new ERP?",
    answer:
      "Data is extracted from your current systems, cleansed, mapped to the new data model, loaded in trial runs and reconciled before final cutover. Master data (customers, vendors, items, accounts) and open transactions are usually migrated, while older history may be archived for reference.",
  },
  {
    question: "What industries use ERP software?",
    answer:
      "Manufacturing, distribution and wholesale, retail and ecommerce, logistics, construction, professional services, automotive, food and beverage, healthcare administration and multi-location businesses all use ERP. What changes is which modules and workflows matter most.",
  },
  {
    question:
      "When should a business choose custom ERP development over an off-the-shelf ERP?",
    answer:
      "Consider custom ERP when your core processes are a competitive advantage that packaged software handles poorly, when license costs grow faster than value, when heavy workarounds have built up around an existing ERP, or when you need tight integration with legacy systems.",
  },
];
