// Content for /products/business-enterprise-management/customer-relationship-management-crm-software.
// Source: CRM-Software-SEO-Content.docx (prepared 19 Nov 2026).
// FAQ text is reused verbatim by the FAQPage JSON-LD, so edit both together.
// The page body must keep exactly 5 internal links (see crmLinks).

export const CRM_PATH =
  "/products/business-enterprise-management/customer-relationship-management-crm-software";

export const crmTitle = "Customer Relationship Management (CRM) Software";

export const crmDescription =
  "Customer relationship management (CRM) software that unifies leads, contacts, pipelines and support. Plan a CRM built around how your team sells.";

export const PRODUCT_NAME = "Customer Relationship Management (CRM) Software";
export const INDUSTRY_SLUG = "business-enterprise-management";
export const INDUSTRY_LABEL = "Business & Enterprise Management";

export type LinkSpec = { anchor: string; href: string };

/** The only five in-body links on the page. */
export const crmLinks = {
  ai: {
    anchor: "AI automation systems",
    href: "/artificial-intelligence-ai/ai-automation-systems",
  },
  realEstate: {
    anchor: "real estate CRM software",
    href: "/products/real-estate-property-management/real-estate-crm-software",
  },
  erp: {
    anchor: "ERP software",
    href: "/products/business-enterprise-management/enterprise-resource-planning-erp-software",
  },
  api: {
    anchor: "API development and integration",
    href: "/software-development/api-development-integration",
  },
  customCrm: {
    anchor: "custom CRM development",
    href: "/software-development/enterprise-software-development",
  },
} satisfies Record<string, LinkSpec>;

const dir = "/products/crm";

export const crmImages = {
  dashboard: {
    src: `${dir}/crm-software-sales-dashboard.svg`,
    width: 1440,
    height: 900,
    alt: "CRM software dashboard showing pipeline value by stage, tasks due today and leads by source",
  },
  pipeline: {
    src: `${dir}/crm-sales-pipeline-kanban-view.svg`,
    width: 1440,
    height: 900,
    alt: "Sales pipeline in CRM software with deals organized by stage from qualification to closed won",
  },
  leads: {
    src: `${dir}/crm-lead-management-scoring.svg`,
    width: 1440,
    height: 900,
    alt: "CRM lead management screen showing lead scores, sources, assigned owners and qualification status",
  },
  profile: {
    src: `${dir}/crm-customer-profile-timeline.svg`,
    width: 1440,
    height: 900,
    alt: "CRM customer profile with contact details, communication timeline, open deals and support tickets",
  },
  workflow: {
    src: `${dir}/crm-workflow-automation-builder.svg`,
    width: 1440,
    height: 900,
    alt: "CRM workflow automation creating onboarding tasks and syncing a won deal to ERP",
  },
  analytics: {
    src: `${dir}/crm-analytics-sales-forecast.svg`,
    width: 1440,
    height: 900,
    alt: "CRM analytics dashboard with stage conversion rates, sales cycle length and forecast versus target",
  },
  lifecycle: {
    src: `${dir}/crm-customer-lifecycle-diagram.svg`,
    width: 1200,
    height: 820,
    alt: "Customer lifecycle managed in CRM software from lead and opportunity to onboarding, support and renewal",
  },
  integration: {
    src: `${dir}/crm-integration-ecosystem.svg`,
    width: 1200,
    height: 820,
    alt: "CRM integration ecosystem connecting email, calendar, website forms, marketing, support, billing, ERP and analytics through APIs",
  },
  og: {
    src: `${dir}/crm-software-og.png`,
    width: 1200,
    height: 750,
    alt: "Illustrative concept of a CRM software sales dashboard",
  },
};

export const threeJobs = [
  ["Organizes customer data", "Contacts, companies (accounts), communication history and documents live in one searchable record."],
  ["Runs the revenue process", "Leads are captured, qualified and assigned, and opportunities move through defined pipeline stages until they’re won or lost."],
  ["Supports the relationship after the sale", "Onboarding, support requests, renewals and expansion are tracked on the same record."],
] as const;

export const howItWorks = [
  ["Records", "Leads, contacts, accounts, opportunities, activities, tickets and products are stored as related objects. A contact belongs to an account, and an opportunity links the account, the contacts involved and the products being discussed."],
  ["Capture", "Data enters through web forms, email and calendar sync, imports, integrations and manual entry by reps."],
  ["Process", "Pipeline stages, assignment rules, required fields and automations move each record forward and prompt the next action."],
  ["Insight", "Dashboards and reports summarize the pipeline, activity, conversion between stages and customer health."],
  ["Connection", "APIs and integrations share customer data with marketing tools, support desks, billing, ERP and analytics systems."],
] as const;

export const signs = [
  "Leads go cold because nobody owns the follow-up or the reminder lived in one person’s calendar.",
  "The pipeline is a guess. Forecasts are built from rep opinions and spreadsheets rather than stage data.",
  "Customer history is fragmented across personal inboxes, phones and shared drives.",
  "Handoffs break. Context is lost between marketing and sales, sales and onboarding, or one rep and their replacement.",
  "Managers can’t coach because activity and conversion data isn’t visible.",
  "Existing customers are under-served. Renewals, service issues and expansion opportunities aren’t tracked systematically.",
];

export const spreadsheetRows = [
  ["Single customer record", "No. Data is split across files and mailboxes.", "Yes, with communication history attached"],
  ["Ownership and assignment", "Informal", "Rules-based, with clear owners"],
  ["Reminders and follow-ups", "Personal calendars", "Tasks and automated reminders on the record"],
  ["Pipeline visibility", "Manual roll-ups", "Live stage-by-stage views"],
  ["Access control and audit trail", "Very limited", "Role-based permissions and change history"],
  ["Scales with team size", "Breaks down quickly", "Designed for multi-user, multi-team use"],
];

export type CrmFeature = { title: string; icon: string; does: string; problem: string; impact: string };

export const features: CrmFeature[] = [
  { title: "Contact and Account Management", icon: "Contact", does: "Stores people (contacts) and organizations (accounts) with their relationships, roles, communication preferences and full activity history.", problem: "Customer knowledge trapped in individual inboxes.", impact: "Anyone on the team can pick up a relationship with full context, and B2B teams can map every decision-maker in an account." },
  { title: "Lead Capture, Tracking and Assignment", icon: "UserPlus", does: "Captures leads from web forms, landing pages, chat, email, events and imports; records the source; and routes each lead to the right owner by territory, product line, round-robin or workload.", problem: "Leads that sit unassigned or get worked twice.", impact: "Faster first response and clean attribution of which channels produce real opportunities." },
  { title: "Lead Scoring, Qualification and Nurturing", icon: "Gauge", does: "Ranks leads by fit (industry, company size, role) and engagement (visits, email clicks, meetings), and applies qualification criteria such as budget, authority, need and timing. Leads that aren’t ready go into nurture sequences.", problem: "Reps spending time on poor-fit leads while strong ones wait.", impact: "Sales effort goes to the highest-value conversations, and marketing gets clear feedback on lead quality." },
  { title: "Sales Pipeline and Deal Management", icon: "KanbanSquare", does: "Moves opportunities through defined stages, such as qualification, discovery, proposal, negotiation and closed won/lost, with amounts, close dates, products and next steps.", problem: "Deals stalled without anyone noticing.", impact: "A visual, shared pipeline that shows where every deal stands and what’s blocking it." },
  { title: "Sales Activities, Tasks and Reminders", icon: "ListChecks", does: "Logs calls, emails and meetings; schedules tasks; and sends reminders when a follow-up is due or a deal has gone quiet.", problem: "Forgotten follow-ups.", impact: "Consistent outreach cadence and a reliable record of what was promised to whom." },
  { title: "Email, Calendar and Communication History", icon: "Mail", does: "Syncs email and calendar activity to the right contact and deal, with templates and meeting scheduling.", problem: "Reps re-typing what they’ve already done in email.", impact: "Complete communication history with less manual logging." },
  { title: "Marketing Campaigns and Segmentation", icon: "Megaphone", does: "Builds segments from CRM data (industry, lifecycle stage, product owned, location) and connects them to email campaigns and marketing automation.", problem: "Generic, untargeted messaging.", impact: "Relevant communication, and campaign results that feed back to the customer record." },
  { title: "Customer Service and Ticket Management", icon: "LifeBuoy", does: "Logs support requests as tickets linked to the customer, with priorities, assignment, SLAs, status tracking and resolution notes. Feedback such as CSAT or NPS can be collected after a ticket closes.", problem: "Sales not knowing a customer has an open issue before calling about a renewal.", impact: "Service and sales see the same customer reality." },
  { title: "Workflow Automation", icon: "Workflow", does: "Triggers actions on events, such as creating an onboarding task when a deal closes, alerting a manager when a high-value deal stalls, or updating a field when a ticket escalates.", problem: "Repetitive manual steps and inconsistent processes.", impact: "Standardized execution without adding admin work." },
  { title: "Dashboards, Reporting and Analytics", icon: "BarChart3", does: "Shows pipeline value by stage, conversion between stages, sales cycle length, activity by rep, forecast vs. target, source performance and retention metrics.", problem: "Decisions based on anecdote.", impact: "Managers coach on data, and leadership forecasts from actual pipeline movement." },
  { title: "Collaboration, Documents and Mobile Access", icon: "Smartphone", does: "Internal notes and mentions on records, attached proposals and contracts, and responsive or mobile access for field teams.", problem: "Context shared in side channels and then lost.", impact: "The whole account team works from one record, wherever they are." },
  { title: "Integrations, APIs and Role-Based Permissions", icon: "Plug", does: "Connects the CRM to other systems through APIs and webhooks, and controls who can see and change which records and fields.", problem: "Information silos and over-exposed customer data.", impact: "Connected workflows with appropriate access for each role." },
];

export const moduleRows = [
  ["Sales CRM", "Leads, accounts, contacts, opportunities, pipeline, forecasting, quotes", "Sales reps, sales managers"],
  ["Marketing", "Segments, campaigns, forms, lead scoring, attribution", "Marketing team"],
  ["Service", "Tickets, SLAs, knowledge articles, customer feedback", "Support and success teams"],
  ["Customer success", "Onboarding plans, health scores, renewals, expansion", "Account managers, CSMs"],
  ["Partner or customer portal", "Self-service access to tickets, documents, orders or deal registration", "Customers, partners"],
  ["Analytics", "Dashboards, scheduled reports, data exports to BI", "Managers, leadership"],
  ["Administration", "Users, roles, permissions, fields, workflows, audit logs", "CRM admins, IT"],
];

export const leadSteps = [
  "A new lead is captured from a website form, and its source, campaign and page are recorded automatically.",
  "Duplicates are checked against existing contacts and accounts.",
  "The lead is assigned to a sales rep by territory, segment or round-robin, and the rep is notified.",
  "The rep follows up within the target response time. If the task is overdue, the CRM escalates to a manager.",
  "The lead is scored and qualified. Fit and engagement criteria decide whether it becomes an opportunity, goes into nurture or is disqualified with a reason.",
];

export const pipelinePoints = [
  ["Stages that mirror how your customers buy", "Each stage has clear entry and exit criteria, so “proposal sent” means the same thing for every rep."],
  ["Deal fields that matter", "Amount, close date, products, competitors, decision-makers and next step."],
  ["Automated nudges", "When a deal has had no activity for a set number of days or a close date has passed."],
  ["Weighted forecasting", "Based on stage probability and historical conversion, reviewed alongside rep judgment."],
  ["Win/loss reasons", "Captured at close, to improve messaging, pricing and targeting."],
] as const;

export const retention = [
  ["Onboarding", "A won deal can automatically create an onboarding checklist and hand the account to the delivery or success team with full context."],
  ["Communication history", "Every email, call, meeting and ticket stays on one timeline, so the customer never has to repeat themselves."],
  ["Support handling", "Tickets are prioritized and tracked against response targets, and account managers can see open issues."],
  ["Feedback", "Post-interaction surveys and notes record satisfaction and risk signals."],
  ["Renewals", "Contract end dates trigger reminders well ahead of time."],
  ["Upsell and cross-sell", "Usage, purchase history and segment data highlight accounts that are good candidates for additional products or services."],
  ["Segmentation", "Customers grouped by value, lifecycle stage or need receive more relevant communication."],
] as const;

export const automationRows = [
  ["Web form submitted", "Create or update lead, assign owner, send acknowledgment email, create follow-up task"],
  ["Lead score passes threshold", "Notify owner and move to the sales-ready queue"],
  ["Deal moves to “Proposal”", "Generate proposal from template and set a follow-up reminder"],
  ["Deal inactive for 14 days", "Alert owner and manager"],
  ["Deal closed won", "Create onboarding tasks, notify finance, push customer to ERP or billing"],
  ["Ticket marked high priority", "Escalate to team lead and flag the account owner"],
  ["Contract renewal in 90 days", "Create renewal opportunity and task for the account manager"],
];

export const reportingRoles = [
  ["Sales reps", "Today’s tasks, deals needing attention, personal pipeline vs. target"],
  ["Sales managers", "Pipeline by stage and rep, stage conversion rates, sales cycle length, activity levels, slipping deals"],
  ["Marketing", "Leads and opportunities by source and campaign, lead-to-opportunity conversion"],
  ["Service", "Ticket volume, response and resolution times, satisfaction trends"],
  ["Leadership", "Forecast vs. target, won revenue by segment, retention and expansion trends"],
] as const;

export const benefits = [
  ["Centralized customer information", "One record per customer instead of scattered files."],
  ["Better lead visibility", "You know where every lead came from, who owns it and its status."],
  ["An organized pipeline", "Shared stage definitions and a live view of every deal."],
  ["Faster, more consistent follow-up", "Tasks and reminders replace memory."],
  ["Better team coordination", "Clean handoffs between marketing, sales, onboarding and support."],
  ["Less manual data entry", "Email sync, form capture and automation reduce re-typing."],
  ["A better customer experience", "Customers don’t have to repeat their history to each new contact."],
  ["Structured retention workflows", "Renewals, health checks and service issues are tracked."],
  ["Visible performance", "Activity and conversion data supports coaching and planning."],
  ["Scalable processes", "New reps, teams and regions use the same system and rules."],
] as const;

export const industryRows = [
  ["B2B sales and technology companies", "Accounts with multiple decision-makers, long sales cycles, territories, quotes, forecasting"],
  ["SaaS", "Trial and sign-up tracking, product-usage signals, onboarding, subscriptions, renewals, expansion and churn risk"],
  ["Professional services and consulting", "Prospects, proposals and statements of work, client relationships, handoff to project delivery"],
  ["Agencies", "New-business pipeline, retainers, client communication, campaign and service follow-ups"],
  ["Real estate", "Buyer and seller inquiries, property interests, showings, agent follow-ups and referral tracking"],
  ["Financial services", "Client households or entities, advisor relationships, document collection, review schedules, strict access control"],
  ["Healthcare", "Patient or referral-partner outreach and service coordination. Any protected health information needs HIPAA-aligned architecture and agreements."],
  ["Ecommerce and retail", "Customer purchase history, segmentation, loyalty, support tickets, win-back campaigns"],
  ["Education", "Prospective-student inquiries, application stages, enrollment follow-up, alumni relations"],
  ["Manufacturing and distribution", "Dealer and distributor accounts, quotes, reorder patterns, integration with ERP for orders and inventory"],
  ["Logistics", "Shipper and account management, rate quotes, service issues, contract renewals"],
  ["Small businesses", "Simple pipeline, contact history, reminders and email integration, without enterprise complexity"],
  ["Enterprise organizations", "Multiple business units, territories, complex permissions, SSO, audit requirements, many integrations"],
];

export const comparisonRows = [
  ["CRM vs. marketing automation", "Marketing automation runs campaigns, nurture sequences and lead scoring at scale. CRM is the system of record for relationships and the sales pipeline. They work best integrated."],
  ["CRM vs. customer support software", "Help desks specialize in ticket queues, SLAs and knowledge bases. CRM gives the full relationship context. Many businesses integrate the two or use a CRM service module."],
  ["CRM vs. contact management software", "Contact managers store names and details. CRM adds pipelines, activities, automation, reporting and team collaboration."],
  ["Cloud CRM vs. on-premise CRM", "See the deployment comparison below."],
  ["Custom CRM vs. off-the-shelf CRM", "See the build comparison below."],
];

export const integrations = [
  ["Email and calendars", "Activity sync, meeting scheduling"],
  ["Website forms and lead sources", "Automatic lead capture with source tracking"],
  ["Marketing automation and email platforms", "Segments out, engagement data in"],
  ["Ecommerce platforms", "Customer and order history for segmentation and support"],
  ["Payment and billing systems", "Subscription status, invoices and payment history"],
  ["Customer support platforms", "Tickets and satisfaction data on the customer record"],
  ["ERP software", "Customers, orders, invoices and credit status"],
  ["Communication tools", "Call logging, team notifications"],
  ["Analytics and data warehouses", "Governed CRM data for reporting"],
  ["Internal applications and third-party APIs", "Whatever systems are specific to your business"],
] as const;

export const cloudVsOnPremRows = [
  ["Hosting", "Cloud infrastructure (for example AWS, Azure or Google Cloud)", "Your own servers"],
  ["Access", "Browser and mobile access from anywhere", "Usually office network or VPN"],
  ["Upfront cost", "Lower infrastructure investment", "Hardware and setup up front"],
  ["Maintenance", "Managed through cloud operations and DevOps", "Internal IT manages updates, backups and security"],
  ["Scalability", "Scales with users and data", "Requires capacity planning"],
  ["Control", "Shared-responsibility security model", "Full physical control"],
  ["Best fit", "Distributed and remote teams, growing businesses", "Strict data-residency or isolated-network requirements"],
];

export const customVsReadyRows = [
  ["Speed to start", "Fast for standard sales processes", "Longer upfront. Delivered in phases."],
  ["Process fit", "You adapt to the product’s model", "Built around your stages, data and rules"],
  ["Cost model", "Per-user subscription that grows with headcount and add-ons", "Development investment plus hosting and support. No per-seat license for software you own."],
  ["Customization", "Configuration, apps and vendor extension limits", "Any workflow, interface or integration"],
  ["Data model ownership", "Shaped by the vendor", "Your data model"],
  ["Upgrades and roadmap", "Controlled by the vendor", "Controlled by you"],
  ["Best fit", "Teams with conventional sales motions", "Distinctive processes, complex integrations or high seat counts"],
];

export const customReasons = [
  ["Your sales process is a differentiator", "Examples include multi-party deals, configure-price-quote workflows, dealer networks or regulated approvals that off-the-shelf pipelines handle poorly."],
  ["Your team works around the CRM", "Reps keep spreadsheets alongside it because the CRM doesn’t match reality."],
  ["Per-user costs grow faster than value", "Especially when many users only need light access."],
  ["Integration is the main requirement", "The CRM has to act as a hub for ERP, billing, product and support data."],
  ["You need customer or partner portals", "Tightly tied to CRM data."],
  ["Data ownership and control matter", "For security, compliance or long-term strategy."],
] as const;

export const security = [
  "Role-based access control, including record-level and field-level permissions where needed",
  "Single sign-on and multi-factor authentication through identity providers such as Okta, Auth0 or Azure AD",
  "Encryption in transit and at rest",
  "Audit logs of record changes, exports and permission updates",
  "Data quality controls: duplicate detection, validation rules, required fields and standardized picklists",
  "Privacy operations: consent and communication preferences, plus processes for access and deletion requests where US state privacy laws apply",
  "Backups, environment separation and secure development practices, including code review and security testing",
];

export const implementationSteps = [
  ["Discovery", "Map your customer lifecycle, sales stages, roles, data sources, reports and integrations, and agree on phase-one scope."],
  ["Design", "Define the data model, pipeline stages, permissions, automations and integration architecture, and prototype the key screens with real users."],
  ["Build or configure", "Deliver in short iterations (Clickmasters works in two-week sprints) with regular demos."],
  ["Data migration", "Clean, deduplicate and map contacts, accounts, open deals and history from spreadsheets or a legacy CRM, then test-load and reconcile."],
  ["Testing", "Functional, integration, security and user acceptance testing against real scenarios."],
  ["Training and launch", "Role-based training and a clear go-live plan, with a parallel run where risk justifies it."],
  ["Adoption and optimization", "Monitor usage and data quality after launch, gather feedback, refine workflows and add modules on a roadmap."],
] as const;

export const challengeRows = [
  ["Low user adoption", "Design around reps’ daily work, minimize required fields, automate logging, and make managers run reviews from the CRM"],
  ["Dirty or duplicated data", "Clean before migration, set duplicate rules, and assign data owners"],
  ["Over-complex configuration", "Start with the essential stages and fields. Add complexity only when it earns its keep."],
  ["Unclear pipeline definitions", "Agree on stage entry and exit criteria with sales leadership before build"],
  ["Integration gaps", "Inventory every system early and define field ownership and sync rules"],
  ["No executive sponsor", "Name an owner who can settle process disputes between teams"],
  ["Training as a one-off", "Provide role-based onboarding, quick-reference guides and refresher sessions after launch"],
];

export const costFactors = [
  ["Approach", "An off-the-shelf subscription, a configured platform with integrations, or a custom build"],
  ["Users and roles", "Seat counts and the mix of full and light users"],
  ["Modules", "Sales only, or sales plus marketing, service, portals and analytics"],
  ["Integrations", "Number and complexity, especially two-way sync with ERP, billing or legacy systems"],
  ["Data migration", "Volume, quality and number of source systems"],
  ["Custom workflows", "Dashboards and interfaces"],
  ["Security and compliance", "Requirements specific to your data and industry"],
  ["Training and support", "Ongoing enhancements after launch"],
] as const;

export const selectionQuestions = [
  ["Process fit", "Can it model your actual stages, roles and handoffs without workarounds?"],
  ["Usability", "Will reps find it faster than their current method? Test with real users."],
  ["Integration", "Does it connect cleanly to email, calendar, marketing, support, billing and ERP?"],
  ["Reporting", "Can managers answer their key questions without exports?"],
  ["Scalability", "Will it handle more users, teams, regions and data without re-platforming?"],
  ["Security", "Does it offer role-based and field-level permissions, SSO, audit logs and encryption?"],
  ["Total cost of ownership", "What do licenses or development, implementation, integrations, admin and support cost over five years?"],
  ["Ownership", "Who controls the data model, roadmap and data portability?"],
  ["Partner capability", "Does your implementation partner understand sales operations as well as software?"],
] as const;

export const howWeHelp = [
  "Sales process and requirements analysis before any configuration or code",
  "CRM architecture and database design for your objects, relationships and permissions",
  "CRM UI/UX design focused on fast daily use by reps, managers and service teams",
  "Custom CRM modules, including lead management systems, pipeline customization, customer success tools, and customer or partner portals",
  "Custom dashboards and reporting for each role",
  "Workflow automation and AI-assisted lead qualification where it fits",
  "Integrations with email, marketing, support, billing, ERP and third-party APIs, including extending established CRMs",
  "Data migration from spreadsheets or legacy CRMs, with validation",
  "Testing and QA, security-focused development and cloud deployment on AWS, Azure or Google Cloud",
  "Maintenance, performance optimization and ongoing development after launch",
];

export const crmFaqs = [
  { question: "What is CRM software?", answer: "Customer relationship management software (CRM) is a system that stores customer and prospect data, tracks every interaction, and manages the sales pipeline and service process in one shared platform." },
  { question: "What does CRM software do for a business?", answer: "It centralizes contact and account data, captures and assigns leads, tracks deals through pipeline stages, reminds teams to follow up, records communication history and reports on sales and customer performance." },
  { question: "What are the main features of CRM software?", answer: "Core features are contact and account management, lead management, pipeline and deal tracking, task and activity management, email and calendar integration, workflow automation, reporting and dashboards, and role-based permissions. Many CRMs also include marketing and service capabilities." },
  { question: "What is the difference between CRM and ERP?", answer: "CRM manages customer-facing activity: leads, opportunities, communication and service. ERP manages back-office operations such as orders, inventory, purchasing and accounting. Integrating them gives sales visibility into orders and invoices, and gives operations clean customer data." },
  { question: "What is the difference between CRM and marketing automation?", answer: "Marketing automation runs campaigns, nurture sequences and engagement tracking at scale. CRM is the system of record for relationships and deals. Leads typically move from marketing automation into the CRM when they’re sales-ready." },
  { question: "Is CRM software suitable for small businesses?", answer: "Yes. Small businesses benefit from a single customer record, a simple pipeline, reminders and email integration. Keep the setup simple at first and add automation and modules as the team grows." },
  { question: "Can CRM software automate follow-ups?", answer: "Yes. CRMs can create follow-up tasks, send reminders, trigger templated emails and alert managers about inactive deals based on rules you define. Automated outreach should respect consent and US marketing regulations." },
  { question: "How much does CRM software cost?", answer: "Off-the-shelf CRMs are usually priced per user per month and vary by tier and add-ons. Custom CRM costs depend on modules, integrations, data migration and design complexity, and are quoted after scoping." },
  { question: "What is custom CRM software?", answer: "Custom CRM software is built around a company’s own sales and service process, data model and integrations, instead of adapting to a vendor’s template. The business typically owns the code and controls the roadmap." },
  { question: "Can a CRM integrate with ERP and other business systems?", answer: "Yes. CRMs commonly integrate with ERP, billing, ecommerce, support desks, marketing platforms, email, calendars and data warehouses through APIs. Integrations need clear rules for which system owns each piece of data." },
  { question: "How long does CRM implementation take?", answer: "It depends on scope. A configured CRM for a single sales team can launch in weeks. Custom CRMs with multiple modules, integrations and data migration take several months and are usually delivered in phases." },
  { question: "How do businesses choose the right CRM software?", answer: "Start from your sales and service process, then evaluate process fit, usability, integrations, reporting, security, scalability and five-year total cost. Test with the people who’ll use the system every day." },
];
