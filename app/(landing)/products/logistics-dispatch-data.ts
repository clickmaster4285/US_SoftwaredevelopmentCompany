// Content for /products/logistics-transportation-software/truck-dispatch-management-software.
// Primary keyword: "truck dispatch software".
// Secondary: truck dispatch management software, trucking dispatch software, dispatch board,
// load management, driver assignment, hours of service visibility, rate confirmations,
// driver mobile app, load tracking, invoicing and factoring, owner-operators, small fleets.
// FAQ text is reused verbatim by the FAQPage JSON-LD.
import type { ProductPageData } from "./product-seo-types";

const dir = "/products/truck-dispatch";
const img = (file: string, alt: string, width = 1440, height = 900) => ({ src: `${dir}/${file}`, width, height, alt });

const page: ProductPageData = {
  path: "/products/logistics-transportation-software/truck-dispatch-management-software",
  title: "Truck Dispatch Software with Dispatch Board & Driver App",
  description:
    "Custom truck dispatch software for carriers: shared dispatch board, load entry, driver assignment, driver app, load tracking, invoicing and settlements.",
  ogTitle: "Truck Dispatch Software | Dispatch Board, Driver App, Invoicing & Settlements",
  ogDescription:
    "Assign loads, drivers, trucks and trailers from one dispatch board, keep drivers updated through a mobile app, track every load and get invoices and driver pay out the door faster.",
  productName: "Truck Dispatch Management Software",
  industrySlug: "logistics-transportation-software",
  industryLabel: "Logistics & Transportation Software",
  theme: { accent: "#c2410c", dark: "#2a1104", soft: "#ffedd5", border: "#fed7aa", tint: "#fff7ed" },
  browserLabel: "dispatch.example",
  images: {
    dashboard: img("truck-dispatch-software-dashboard.svg", "Truck dispatch software dashboard with loads in progress, available drivers, revenue per mile, deadhead percentage and loads needing attention"),
    board: img("truck-dispatch-board-loads-drivers.svg", "Truck dispatch board showing loads, drivers, trucks and trailers with status, pickup and delivery times and hours available"),
    loadEntry: img("trucking-load-entry-rate-confirmation.svg", "Trucking load entry screen created from a broker rate confirmation with stops, commodity, rate and accessorials"),
    driverApp: img("truck-driver-mobile-app-load-documents.svg", "Truck driver mobile app with load details, stop navigation, status updates and bill of lading and proof of delivery photo capture"),
    tracking: img("truck-load-tracking-map-eta.svg", "Load tracking map with truck locations, ETAs to the next stop, automated check calls and detention timers"),
    workflow: img("truck-dispatch-load-lifecycle.svg", "Truck dispatch load lifecycle from rate confirmation and assignment to pickup, delivery, proof of delivery, invoicing and driver settlement"),
    settlements: img("trucking-invoicing-driver-settlements.svg", "Trucking invoicing and driver settlement screen with load invoices, factoring batch, driver pay per mile and deductions"),
    analytics: img("trucking-dispatch-analytics-revenue-per-mile.svg", "Trucking analytics with revenue per mile, deadhead miles, loads per truck and revenue by customer"),
    og: img("truck-dispatch-software-og.png", "Illustrative concept of a truck dispatch software dashboard", 1200, 750),
  },
  hero: {
    h1: "Truck Dispatch Software",
    subhead: "Assign loads, drivers and trucks from one shared dispatch board, and get from rate confirmation to paid invoice without the phone tag.",
    paragraphs: [
      "Truck dispatch software gives a trucking company one place to run the day: every load, driver, truck and trailer on a shared dispatch board, with stops, appointments, hours available and status updates from the driver's phone. When the load delivers, the proof of delivery is already attached, the invoice is ready and the driver's pay is calculated.",
      "Clickmasters designs and builds custom truck dispatch management software for US owner-operators, small and mid-size carriers, dedicated fleets and dispatch services, shaped around your equipment, your customers and the way your dispatchers actually work.",
    ],
    image: "dashboard",
    caption: "Loads in progress, available drivers, revenue per mile and deadhead at a glance",
    secondaryCta: { label: "Explore Dispatch Features", href: "#features" },
  },
  contents: [
    { href: "#what-is-truck-dispatch-software", label: "What it is" },
    { href: "#features", label: "Features" },
    { href: "#dispatch-board", label: "Dispatch board" },
    { href: "#driver-app", label: "Driver app" },
    { href: "#load-tracking", label: "Load tracking" },
    { href: "#invoicing-settlements", label: "Invoicing & pay" },
    { href: "#fleet-types", label: "Fleet types" },
    { href: "#vs-tms", label: "Dispatch vs. TMS" },
    { href: "#integrations", label: "Integrations" },
    { href: "#cost", label: "Cost" },
    { href: "#faq", label: "FAQ" },
  ],
  sections: [
    {
      id: "dispatch-problem",
      eyebrow: "The problem",
      title: "What Dispatching Looks Like Without Software",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "In many trucking companies, dispatch still runs on a whiteboard, a spreadsheet and a phone that never stops. Rate confirmations arrive by email, loads are typed into a sheet, drivers get load details by text, and every check call means another phone call. At the end of the week someone gathers paper BOLs to build invoices and works out driver pay by hand.",
            "That approach caps how many trucks one dispatcher can handle. It also hides the numbers that decide whether a carrier makes money: deadhead miles, revenue per mile, detention that never got billed, and loads that were delivered but not invoiced for days. A dispatch system replaces the whiteboard with a live board everyone shares.",
          ],
        },
      ],
    },
    {
      id: "what-is-truck-dispatch-software",
      eyebrow: "Definition",
      title: "What Is Truck Dispatch Software?",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "**Truck dispatch software** (also called trucking dispatch software or truck dispatch management software) is a system carriers use to book loads, assign them to drivers and equipment, follow them to delivery and turn them into invoices and driver pay. It manages:",
          ],
        },
        {
          type: "titledList",
          cols: 4,
          items: [
            ["Loads", "Rate confirmations, stops, appointments, commodity and rate"],
            ["Drivers", "Availability, hours remaining, qualifications and home time"],
            ["Equipment", "Trucks, trailers, types and current locations"],
            ["Dispatch", "Assignments, trip plans and dispatch messages"],
            ["Tracking", "Locations, ETAs, check calls and detention"],
            ["Documents", "BOLs, PODs, lumper receipts and scale tickets"],
            ["Money", "Invoices, factoring, driver settlements and expenses"],
            ["Insight", "Revenue per mile, deadhead, utilization and customers"],
          ],
        },
        {
          type: "linkPanel",
          text: "Dispatch is one part of the wider family of [logistics and transportation software](/products/logistics-transportation-software). Carriers often pair it with maintenance and fleet tools as they grow.",
        },
      ],
    },
    {
      id: "why-dispatch-software",
      eyebrow: "Business problems",
      title: "Problems Trucking Dispatch Software Solves",
      blocks: [
        {
          type: "table",
          caption: "Trucking dispatch challenges, what happens and how dispatch software helps",
          headers: ["Challenge", "What happens", "How software helps"],
          rows: [
            ["Whiteboard dispatch", "Only one person knows who is where", "A shared dispatch board for the whole team"],
            ["Retyping rate cons", "Errors in stops, times and rates", "Load entry from the rate confirmation in one screen"],
            ["Constant check calls", "Dispatchers phone drivers all day", "GPS-based status updates and automated check calls"],
            ["Hours surprises", "Loads assigned to drivers who can't legally finish", "Hours remaining shown from ELD data at assignment"],
            ["Paper documents", "BOLs lost or arriving days late", "Driver app photo capture attached to the load"],
            ["Unbilled detention", "Waiting time never invoiced", "Arrival and departure times recorded per stop"],
            ["Slow invoicing", "Delivered loads wait days for an invoice", "Invoices generated as soon as the POD arrives"],
            ["Manual driver pay", "Settlement errors and driver disputes", "Pay rules applied automatically per load"],
            ["Deadhead blind spot", "Empty miles never measured", "Deadhead and revenue per mile reporting"],
            ["Scattered records", "Customer and broker details in inboxes", "Customer, broker and contact records in one place"],
          ],
        },
      ],
    },
    {
      id: "features",
      eyebrow: "24 capability areas",
      title: "Key Features of Truck Dispatch Software",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "These are **configurable modules and custom-development options** scoped during discovery, not preinstalled features of a ready-made Clickmasters product. ELD, GPS, load board and factoring connections depend on the providers you use.",
          ],
        },
        {
          type: "features",
          items: [
            { title: "Shared Dispatch Board", icon: "LayoutGrid", text: "Every load, driver, truck and trailer on one live board, filtered by status, terminal, dispatcher or equipment type.", value: "The whole team sees the same picture." },
            { title: "Load Entry from Rate Confirmations", icon: "FileText", text: "Create loads with stops, appointments, commodity, weight, rate and accessorials from the broker's rate confirmation.", solves: "Retyping and transcription errors." },
            { title: "Load Board Integration", icon: "Search", text: "Search and import loads from the load boards you subscribe to, where their APIs allow it.", value: "Less copy-and-paste when booking freight." },
            { title: "Driver Assignment", icon: "UserCog", text: "Assign drivers, team drivers, trucks and trailers to a load with conflict checks.", solves: "Double-booked drivers and equipment." },
            { title: "Hours of Service Visibility", icon: "Clock", text: "Driving and duty hours remaining pulled from your ELD provider and shown at assignment.", value: "Assign loads drivers can legally finish." },
            { title: "Trip Planning", icon: "Route", text: "Multi-stop trips with appointment windows, estimated miles, fuel stops and planned breaks.", value: "Realistic plans before the truck rolls." },
            { title: "Driver Mobile App", icon: "Smartphone", text: "Load details, stops, navigation links, documents, status buttons and messages on the driver's phone.", solves: "Load details sent by text message." },
            { title: "BOL and POD Capture", icon: "Camera", text: "Drivers photograph bills of lading, PODs, lumper receipts and scale tickets, attached to the load instantly.", solves: "Waiting for paperwork to invoice." },
            { title: "Automated Check Calls", icon: "MapPinned", text: "Status updates and ETAs generated from GPS or ELD location instead of phone calls.", value: "Dispatchers handle more trucks." },
            { title: "Detention and Layover Tracking", icon: "Timer", text: "Arrival and departure times recorded at each stop, with detention timers and alerts.", value: "Accessorials billed with evidence." },
            { title: "Dispatcher Messaging", icon: "MessageCircle", text: "Two-way messages between dispatch and drivers, kept with the load history.", solves: "Instructions lost across phones." },
            { title: "Customer and Broker Records", icon: "Briefcase", text: "Customers, brokers, shippers and receivers with contacts, credit terms and facility notes.", value: "Facility details at the driver's fingertips." },
          ],
        },
        { type: "figure", image: "board", caption: "Loads, drivers, trucks and trailers with status and hours available" },
        {
          type: "features",
          start: 12,
          items: [
            { title: "Invoicing", icon: "Receipt", text: "Invoices with linehaul, fuel and accessorials generated from delivered loads, with documents attached.", value: "Bill the day the load delivers." },
            { title: "Factoring Exports", icon: "FileSpreadsheet", text: "Invoice batches and documents sent to your factoring company in the format it requires.", solves: "Building factoring packets by hand." },
            { title: "Driver Settlements", icon: "Banknote", text: "Pay per mile, percentage of revenue, flat rate or hourly, with advances, deductions and escrow.", solves: "Settlement errors and disputes." },
            { title: "Owner-Operator Settlements", icon: "IdCard", text: "Revenue splits, fuel card deductions and chargebacks for leased owner-operators.", value: "Clear statements every pay period." },
            { title: "Expense Tracking", icon: "Wallet", text: "Fuel, tolls, scales, lumper and repairs recorded per load and per truck.", value: "True profit per load." },
            { title: "Fuel Card Integration", icon: "Fuel", text: "Fuel purchases imported from your fuel card provider and matched to trucks and trips.", solves: "Manual fuel receipt entry." },
            { title: "IFTA Mileage Data", icon: "Map", text: "Miles by state from GPS or ELD data and fuel purchases, ready for your IFTA filing.", value: "Less end-of-quarter scrambling." },
            { title: "Driver and Equipment Documents", icon: "FileCheck", text: "CDL, medical card, registration and inspection documents with expiry reminders.", solves: "Expired documents discovered at a scale." },
            { title: "Maintenance Alerts", icon: "Wrench", text: "Upcoming service due by miles or date shown on the board before a truck is assigned.", value: "Fewer breakdowns mid-trip." },
            { title: "Customer Tracking Links", icon: "Globe", text: "Shareable tracking links and status emails for brokers and shippers.", solves: "Status calls from customers." },
            { title: "Multi-Terminal Dispatch", icon: "Building2", text: "Several terminals or dispatch teams with their own boards and shared drivers.", value: "Grow without losing control." },
            { title: "Dispatch Analytics", icon: "BarChart3", text: "Revenue per mile, deadhead percentage, loads per truck, revenue by customer and dispatcher performance.", value: "Know which freight makes money." },
          ],
        },
        { type: "cta", label: "Build Custom Truck Dispatch Software" },
      ],
    },
    {
      id: "how-it-works",
      eyebrow: "Workflow",
      title: "How Truck Dispatch Software Works",
      blocks: [
        {
          type: "numbered",
          cols: 5,
          items: [
            ["Book the load", "Enter or import the rate confirmation."],
            ["Plan the trip", "Stops, appointments, miles and equipment."],
            ["Assign", "Pick a driver, truck and trailer with hours available."],
            ["Dispatch", "Load details go to the driver app."],
            ["Track", "GPS updates status and ETA at each stop."],
            ["Record stops", "Arrival, departure and detention are timestamped."],
            ["Capture documents", "BOL and POD photos attach to the load."],
            ["Invoice", "The invoice is created when the load delivers."],
            ["Factor or collect", "Send to factoring or bill the customer directly."],
            ["Settle", "Driver pay and deductions calculated for the period."],
          ],
        },
        { type: "figure", image: "workflow", caption: "From rate confirmation to invoice and driver settlement", variant: "diagram" },
      ],
    },
    {
      id: "dispatch-board",
      eyebrow: "Dispatch",
      title: "The Dispatch Board: Loads, Drivers, Trucks and Trailers",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The dispatch board is the heart of the system. It shows open loads waiting for a driver, loads in progress, drivers coming available and equipment status in one view. Dispatchers drag a load onto a driver, see hours remaining and the next appointment, and catch conflicts before they happen.",
          ],
        },
        {
          type: "titledList",
          cols: 3,
          icon: "LayoutGrid",
          items: [
            ["Open loads", "Booked loads waiting for assignment, sorted by pickup time"],
            ["In progress", "Loads by status: dispatched, at pickup, loaded, at delivery"],
            ["Driver availability", "Where and when each driver frees up next"],
            ["Hours remaining", "Drive and duty time left from ELD data"],
            ["Equipment", "Truck and trailer location, type and service status"],
            ["Alerts", "Late arrivals, detention, missing documents and expiring credentials"],
          ],
        },
        {
          type: "caution",
          text: "Hours of service data shown on the board comes from your FMCSA-registered ELD provider. The dispatch system displays it to support planning; it does not replace the ELD or determine legal compliance.",
        },
      ],
    },
    {
      id: "load-entry",
      eyebrow: "Load management",
      title: "Load Entry, Rate Confirmations and Load Boards",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Every load starts with a rate confirmation. Load entry captures the customer or broker, pickup and delivery stops with appointment windows, commodity, weight, equipment, linehaul rate, fuel and agreed accessorials, and attaches the rate con itself. Loads can also be imported from load boards your company subscribes to, where the board offers an integration.",
          ],
        },
        { type: "figure", image: "loadEntry", caption: "A load created from a rate confirmation with stops, rate and accessorials" },
      ],
    },
    {
      id: "driver-app",
      eyebrow: "Drivers",
      title: "Driver Mobile App for Load Details, Documents and Status",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Drivers shouldn't have to call in for load details. A driver app shows the trip, stop addresses and facility notes, opens navigation, lets the driver tap through statuses (en route, arrived, loaded, delivered) and photograph documents that attach to the load instantly.",
            "Driver apps can be built for iOS and Android from one codebase through Clickmasters' [cross-platform app development](/mobile-app-development/cross-platform-app-development) practice.",
          ],
        },
        {
          type: "checklist",
          icon: "Smartphone",
          items: [
            "Load and stop details with facility notes",
            "Navigation links to each stop",
            "One-tap status updates",
            "BOL, POD and receipt photo capture",
            "Messages with dispatch",
            "Settlement statements and pay history",
            "Document expiry reminders",
            "Works with poor signal and syncs later",
          ],
        },
        { type: "figure", image: "driverApp", caption: "Load details, stop status and document capture on the driver's phone", variant: "diagram" },
      ],
    },
    {
      id: "load-tracking",
      eyebrow: "Visibility",
      title: "Load Tracking, Check Calls and Detention",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Load tracking uses location from the driver app, ELD or GPS units to update status and ETAs automatically. Brokers and shippers can receive tracking links instead of calling, and every stop records arrival and departure times so detention and layover can be billed with evidence.",
          ],
        },
        { type: "figure", image: "tracking", caption: "Truck locations, ETAs to the next stop and detention timers" },
        {
          type: "linkPanel",
          text: "Carriers running many short daily stops instead of truckloads should also look at [route optimization software](/products/logistics-transportation-software/route-optimization-software).",
        },
      ],
    },
    {
      id: "invoicing-settlements",
      eyebrow: "Money",
      title: "Invoicing, Factoring and Driver Settlements",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Cash flow in trucking depends on how fast a delivered load becomes an invoice. Dispatch software creates the invoice from the load (linehaul, fuel and accessorials, with the rate con and POD attached) and either sends it to the customer or batches it for your factoring company. Driver pay is calculated from the same loads.",
          ],
        },
        {
          type: "table",
          caption: "Driver pay models supported in settlements",
          headers: ["Pay model", "How it is calculated"],
          rows: [
            ["Per mile", "Loaded and optionally empty miles at set rates"],
            ["Percentage", "A share of linehaul or total revenue per load"],
            ["Flat per load", "A fixed amount per load or per stop"],
            ["Hourly", "Hours worked for local or dedicated routes"],
            ["Owner-operator split", "Revenue share minus fuel, insurance and chargebacks"],
            ["Extras", "Detention, layover, stop pay and bonuses"],
            ["Deductions", "Advances, escrow, fuel card and equipment charges"],
          ],
        },
        { type: "figure", image: "settlements", caption: "Load invoices, factoring batch and driver settlements" },
      ],
    },
    {
      id: "fleet-types",
      eyebrow: "Who it's for",
      title: "Truck Dispatch Software for Every Kind of Carrier",
      blocks: [
        {
          type: "table",
          caption: "Truck dispatch needs by carrier type",
          headers: ["Carrier type", "Typical needs"],
          rows: [
            ["Owner-operators", "Simple load entry, invoicing, factoring exports, expenses, IFTA miles"],
            ["Small fleets (2-20 trucks)", "Dispatch board, driver app, settlements, document tracking"],
            ["Mid-size carriers", "Multiple dispatchers, terminals, owner-operator settlements, analytics"],
            ["Dedicated and contract fleets", "Recurring routes, customer SLAs, hourly or route pay"],
            ["Dispatch services", "Several carriers' trucks managed from one account, commission billing"],
            ["Hot shot carriers", "Fast quoting, smaller equipment, flexible pay"],
            ["Reefer carriers", "Temperature settings per load, pre-cool notes, tighter appointments"],
            ["Flatbed and specialized", "Tarping, securement notes, permits and oversize details"],
          ],
        },
      ],
    },
    {
      id: "vs-tms",
      eyebrow: "Compare",
      title: "Truck Dispatch Software vs. a Transportation Management System",
      blocks: [
        {
          type: "table",
          caption: "Carrier dispatch compared with a shipper or broker transportation management system",
          headers: ["", "Truck dispatch software", "Shipper / broker TMS"],
          rows: [
            ["Who uses it", "Carriers running their own trucks", "Shippers, brokers and 3PLs buying freight"],
            ["Main job", "Assign and run drivers and equipment", "Plan, tender and track freight across carriers"],
            ["Core records", "Drivers, trucks, trailers, loads, settlements", "Orders, shipments, carriers, rates, audits"],
            ["Money", "Customer invoices, factoring and driver pay", "Freight audit, carrier payment, customer billing"],
          ],
        },
        {
          type: "linkPanel",
          text: "If you mostly buy freight from outside carriers, a [transportation management system](/products/logistics-transportation-software/transportation-management-system-tms) is the better fit. Many asset carriers with brokerage arms use both, connected.",
        },
      ],
    },
    {
      id: "integrations",
      eyebrow: "Integrations",
      title: "Dispatch Software Integrations",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Dispatch works best when data arrives on its own. Clickmasters' [API development and integration](/software-development/api-development-integration) team connects the dispatch system to:",
          ],
        },
        {
          type: "titledList",
          cols: 4,
          icon: "Plug",
          items: [
            ["ELD providers", "Hours of service, location and duty status"],
            ["GPS and telematics", "Truck locations, mileage and engine data"],
            ["Load boards", "Load search and import where APIs exist"],
            ["Fuel cards", "Fuel purchases by truck, date and state"],
            ["Factoring companies", "Invoice batches and documents"],
            ["Accounting", "QuickBooks or your general ledger"],
            ["Maps and mileage", "Practical miles, routing and tolls"],
            ["Payroll", "Driver settlements and deductions"],
          ],
        },
      ],
    },
    {
      id: "ready-vs-custom",
      eyebrow: "Build or buy",
      title: "Ready-Made vs. Custom Trucking Dispatch Software",
      blocks: [
        {
          type: "table",
          caption: "Ready-made compared with custom trucking dispatch software",
          headers: ["", "Ready-made", "Custom"],
          rows: [
            ["Workflows", "The vendor's standard dispatch flow", "Your board layout, statuses and approvals"],
            ["Driver pay", "Preset pay types", "Any pay, bonus and deduction rules you use"],
            ["Integrations", "The vendor's partner list", "Your ELD, fuel card, factoring and accounting"],
            ["Driver app", "Vendor-branded", "Your brand and the screens your drivers need"],
            ["Pricing model", "Per truck or per user subscription", "Build cost plus hosting and maintenance you control"],
            ["Data ownership", "Stored in the vendor's platform", "Your database and your exports"],
          ],
        },
      ],
    },
    {
      id: "custom-development",
      eyebrow: "What we deliver",
      title: "Custom Truck Dispatch Management Software Development",
      blocks: [
        { type: "prose", paragraphs: ["Clickmasters can deliver:"] },
        {
          type: "checklist",
          items: [
            "Discovery with owners, dispatchers, drivers and billing staff",
            "Workflow mapping from rate confirmation to settlement",
            "UI/UX design for dispatchers, drivers and back office",
            "Dispatch board with assignment and conflict checks",
            "Load entry, documents and customer records",
            "Driver mobile app for iOS and Android",
            "Tracking, check calls and detention timers",
            "Invoicing, factoring exports and driver settlements",
            "ELD, GPS, fuel card and accounting integrations",
            "Reporting on revenue per mile, deadhead and customers",
            "Data migration from spreadsheets or your current system",
            "Testing, rollout, training and ongoing support",
          ],
        },
        {
          type: "linkPanel",
          text: "The dispatcher web app and back office are built by our [web application development](/web-development/web-application-development) team.",
        },
      ],
    },
    {
      id: "benefits",
      eyebrow: "Outcomes",
      title: "Benefits of Truck Dispatch Software",
      blocks: [
        {
          type: "checklist",
          items: [
            "One shared view of every load, driver and truck",
            "Fewer phone calls for load details and check calls",
            "Loads assigned with hours available in view",
            "Documents attached the moment they are captured",
            "Detention and accessorials billed with evidence",
            "Invoices sent the day the load delivers",
            "Accurate driver settlements with fewer disputes",
            "Clear revenue per mile and deadhead numbers",
          ],
        },
        { type: "note", text: "Results depend on your freight, fleet size, setup and adoption. No specific revenue or savings outcome is guaranteed." },
      ],
    },
    {
      id: "choose",
      eyebrow: "Evaluation checklist",
      title: "How to Choose Truck Dispatch Software",
      blocks: [
        {
          type: "checkGrid",
          items: [
            "Fleet size and number of dispatchers",
            "Dispatch board usability",
            "Load entry from rate confirmations",
            "Driver app features and offline use",
            "ELD and GPS integration",
            "Load board integrations",
            "Invoicing and factoring workflow",
            "Driver and owner-operator pay rules",
            "Fuel card and IFTA mileage data",
            "Document and expiry tracking",
            "Accounting integration",
            "Reporting on profit per load",
            "Data migration and training",
            "Support hours that match dispatch hours",
          ],
        },
      ],
    },
    {
      id: "security",
      eyebrow: "Reliability & security",
      title: "Reliability, Security and Compliance Data",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Dispatch runs around the clock, and it holds driver records, customer rates and financial data. The system is designed with that in mind:",
          ],
        },
        {
          type: "checklist",
          icon: "Lock",
          items: [
            "Role-based access for dispatchers, billing, drivers and owners",
            "Drivers see only their own loads and settlements",
            "Audit trails for load, rate and pay changes",
            "Encrypted data in transit and at rest",
            "Offline-capable driver app with automatic sync",
            "Monitoring and backups for cloud hosting",
          ],
        },
        {
          type: "caution",
          text: "Hours of service, ELD and IFTA obligations remain the carrier's responsibility. The dispatch system can display ELD data and prepare mileage reports from your GPS and fuel records; filings and compliance decisions stay with you and your advisors.",
        },
      ],
    },
    {
      id: "why-us",
      eyebrow: "Your partner",
      title: "Why Choose Clickmasters Software Development Company?",
      blocks: [
        {
          type: "titledList",
          cols: 3,
          items: [
            ["Custom web, mobile and AI products", "Built for US businesses by a remote-first team."],
            ["A connected logistics suite", "Dispatch, TMS, fleet, maintenance, delivery, route optimization and courier software, designed to work together."],
            ["API development and integration", "Connections to ELD, GPS, fuel card, factoring and accounting systems."],
            ["Cross-platform mobile apps", "Driver apps for iOS and Android with push notifications."],
            ["Payment integration", "Stripe and processor integrations with webhook processing."],
            ["Transparent scoping", "Scope, timeline and quote are agreed before development starts."],
          ],
        },
        { type: "cta", label: "Talk to Our Software Development Team" },
      ],
    },
    {
      id: "process",
      eyebrow: "Delivery",
      title: "Dispatch Software Development Process",
      blocks: [
        {
          type: "steps",
          items: [
            ["Discovery", "Fleet, freight, customers, pay rules and current tools."],
            ["Workflow mapping", "Book, assign, track, invoice and settle."],
            ["Architecture", "Data model, driver app and integrations."],
            ["UI/UX design", "Dispatch board, driver app and back office."],
            ["Development", "Core modules built in iterative sprints."],
            ["Integrations", "ELD, GPS, fuel cards, factoring and accounting."],
            ["Quality assurance", "Assignment, pay, offline and load testing."],
            ["Pilot", "One terminal or dispatcher team goes live first."],
            ["Rollout and training", "Dispatcher and driver onboarding."],
            ["Support", "Monitoring, updates and new features."],
          ],
        },
      ],
    },
    {
      id: "cost",
      eyebrow: "Budgeting",
      title: "Truck Dispatch Software Cost",
      blocks: [
        {
          type: "cost",
          intro: "The cost of custom trucking dispatch software depends on:",
          items: [
            "Number of trucks, drivers and dispatchers",
            "Dispatch board and trip planning complexity",
            "Driver mobile app features",
            "ELD, GPS and load board integrations",
            "Invoicing, factoring and settlement rules",
            "Fuel card, IFTA and accounting integrations",
            "Multi-terminal or dispatch-service needs",
            "Data migration, rollout and support",
          ],
          panel: "There's no fixed price. Clickmasters agrees scope, timeline and quote before development starts, and can start with the dispatch board and driver app before adding billing modules.",
        },
      ],
    },
  ],
  faqTitle: "Frequently Asked Questions About Truck Dispatch Software",
  faqs: [
    { question: "What is truck dispatch software?", answer: "Truck dispatch software is a system carriers use to book loads, assign them to drivers, trucks and trailers, track them to delivery, capture documents, invoice customers and calculate driver pay." },
    { question: "What features should trucking dispatch software have?", answer: "Key features are a shared dispatch board, load entry from rate confirmations, driver assignment with hours remaining, a driver mobile app, document capture, load tracking, detention tracking, invoicing, factoring exports, driver settlements and analytics." },
    { question: "What is a dispatch board?", answer: "A dispatch board is a live view of open loads, loads in progress, drivers and equipment. Dispatchers use it to assign loads, see availability and hours remaining, and spot late or problem loads." },
    { question: "Can dispatch software show drivers' hours of service?", answer: "Yes, by integrating with your ELD provider. The board can show drive and duty time remaining at assignment. The ELD remains the official record for hours of service compliance." },
    { question: "Is there a mobile app for truck drivers?", answer: "Yes. A driver app can show load details and stops, open navigation, update status, capture BOL and POD photos, message dispatch and show settlement statements, and it can work with poor signal." },
    { question: "Can dispatch software automate check calls?", answer: "Yes. Location from the driver app, ELD or GPS can update load status and ETAs automatically, and customers can receive tracking links instead of calling for updates." },
    { question: "How does dispatch software handle invoicing and factoring?", answer: "When a load delivers and the POD is attached, an invoice is created with linehaul, fuel and accessorials. It can be emailed to the customer or batched with documents for your factoring company." },
    { question: "Can it calculate driver pay and settlements?", answer: "Yes. Settlements can use per-mile, percentage, flat, hourly or owner-operator split pay, plus extras such as detention and stop pay, and deductions such as advances, fuel and escrow." },
    { question: "Does dispatch software help with IFTA reporting?", answer: "It can prepare miles by state from GPS or ELD data and fuel purchases from fuel cards, which simplifies IFTA reporting. The filing itself remains the carrier's responsibility." },
    { question: "Can it integrate with load boards?", answer: "Where a load board offers an API and your subscription allows it, loads can be searched and imported into the dispatch system instead of copied by hand." },
    { question: "Is dispatch software good for owner-operators?", answer: "Yes. Owner-operators can use a simplified setup for load entry, documents, invoicing, factoring exports, expenses and mileage, then add a dispatch board and driver app as they add trucks." },
    { question: "What is the difference between truck dispatch software and a TMS?", answer: "Dispatch software is built for carriers running their own drivers and trucks. A shipper or broker TMS is built for planning, tendering and tracking freight across many outside carriers." },
    { question: "Can a dispatch service use this software for several carriers?", answer: "Yes. A custom system can manage several carriers' trucks and drivers from one account, with separate records, documents and commission billing for each carrier." },
    { question: "Should we buy dispatch software or build our own?", answer: "Ready-made software suits standard workflows. A custom system suits carriers with specific pay rules, equipment, customers or integrations, or those who want their own branded driver app and full ownership of their data." },
    { question: "How much does custom truck dispatch software cost?", answer: "It depends on fleet size, dispatch board complexity, driver app features, integrations, invoicing and settlement rules and data migration. Clickmasters agrees scope, timeline and a quote before development starts." },
    { question: "How long does it take to build a dispatch system?", answer: "A first release with the dispatch board, load entry and driver app is shorter than a full platform with settlements, factoring and multi-terminal support. The timeline is set during scoping and can be phased." },
  ],
  finalCta: {
    title: "Build Dispatch Software Around Your Fleet",
    paragraphs: [
      "Whether you run one truck, twenty or two hundred, the right dispatch system starts with your loads, your drivers and how your dispatchers already work.",
      "Tell Clickmasters Software Development Company where dispatch, documents or billing slow you down today. We'll recommend the modules and integrations you need and scope the first release of your custom truck dispatch management software.",
    ],
  },
  primaryCta: "Discuss Your Dispatch Software Requirements",
  mobileCta: "Discuss Your Dispatch Software",
  schema: {
    serviceType: "Truck dispatch software development",
    serviceDescription:
      "Design, development and integration of custom truck dispatch management software for carriers, covering a shared dispatch board, load entry, driver assignment with hours of service visibility, a driver mobile app, load tracking, detention tracking, invoicing, factoring exports and driver settlements.",
  },
};

export default page;
