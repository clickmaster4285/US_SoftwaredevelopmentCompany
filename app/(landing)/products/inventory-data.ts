// Content for /products/business-enterprise-management/inventory-management-software.
// Source: Inventory-Management-Software-SEO-Content.md + Inventory-Management-Software-SEO-Strategy.docx (19 Nov 2026).
// FAQ text is reused verbatim by the FAQPage JSON-LD, so edit both together.
// The page body must keep exactly 5 internal links (see inventoryLinks).

export const INVENTORY_PATH =
  "/products/business-enterprise-management/inventory-management-software";

export const inventoryTitle = "Inventory Management Software & Stock Control | Clickmasters";

export const inventoryDescription =
  "Inventory management software for real-time stock tracking, reorder alerts, purchase orders and multi-location control, built around how you operate.";

export const PRODUCT_NAME = "Inventory Management Software";
export const INDUSTRY_SLUG = "business-enterprise-management";
export const INDUSTRY_LABEL = "Business & Enterprise Management";

export type LinkSpec = { anchor: string; href: string };

/** The only five in-body links on the page. */
export const inventoryLinks = {
  wms: {
    anchor: "warehouse management system (WMS)",
    href: "/products/retail-ecommerce-software/warehouse-management-system-wms",
  },
  scm: {
    anchor: "supply chain management software",
    href: "/products/business-enterprise-management/supply-chain-management-software",
  },
  retail: {
    anchor: "retail inventory management system",
    href: "/products/retail-ecommerce-software/retail-inventory-management-system",
  },
  erp: {
    anchor: "ERP software",
    href: "/products/business-enterprise-management/enterprise-resource-planning-erp-software",
  },
  customInventory: {
    anchor: "custom inventory management software development",
    href: "/software-development/enterprise-software-development",
  },
} satisfies Record<string, LinkSpec>;

const dir = "/products/inventory";

export const inventoryImages = {
  dashboard: {
    src: `${dir}/inventory-management-software-dashboard.svg`,
    width: 1440,
    height: 900,
    alt: "Inventory management software dashboard showing stock value, low-stock items, open purchase orders and pending transfers",
  },
  stock: {
    src: `${dir}/real-time-stock-tracking-overview.svg`,
    width: 1440,
    height: 900,
    alt: "Real-time stock tracking table showing on-hand, committed, available and incoming quantities by SKU",
  },
  warehouse: {
    src: `${dir}/warehouse-inventory-management-dashboard.svg`,
    width: 1440,
    height: 900,
    alt: "Warehouse inventory dashboard with stock by location, receiving queue and transfers in transit",
  },
  barcode: {
    src: `${dir}/barcode-scanning-inventory-workflow.svg`,
    width: 1440,
    height: 900,
    alt: "Barcode scanning workflow on a mobile device confirming item and quantity during stock receiving",
  },
  multiWarehouse: {
    src: `${dir}/multi-warehouse-inventory-view.svg`,
    width: 1440,
    height: 900,
    alt: "Multi-warehouse inventory view comparing stock levels across locations with suggested transfers",
  },
  purchaseOrders: {
    src: `${dir}/purchase-order-management-interface.svg`,
    width: 1440,
    height: 900,
    alt: "Purchase order management screen with reorder suggestions, supplier lead times and partial receipts",
  },
  analytics: {
    src: `${dir}/inventory-analytics-reporting-dashboard.svg`,
    width: 1440,
    height: 900,
    alt: "Inventory analytics dashboard showing turnover, stock aging, ABC classification and stockout trends",
  },
  mobile: {
    src: `${dir}/mobile-inventory-management-app.svg`,
    width: 1440,
    height: 900,
    alt: "Mobile inventory management app for stock lookup, cycle counts and transfer receipts with offline sync",
  },
  og: {
    src: `${dir}/inventory-management-software-og.png`,
    width: 1200,
    height: 750,
    alt: "Illustrative concept of an inventory management software dashboard",
  },
};

export const howItWorks = [
  ["Items are defined", "SKUs, descriptions, variants, units of measure, barcodes, costs, suppliers, and tracking rules (batch, serial or expiry)."],
  ["Stock is received", "Goods arrive against a purchase order or transfer, are checked and are added to a location."],
  ["Stock moves", "Sales, production use, transfers between locations, returns and adjustments each create a dated, attributed transaction."],
  ["Quantities update", "On-hand, committed (reserved for orders), available and on-order figures recalculate with each transaction. That’s what “real-time inventory” means in practice."],
  ["Controls trigger", "When available stock falls below a reorder point, the system raises an alert or a suggested purchase order."],
  ["Counts verify", "Cycle counts or physical counts compare system quantities with the shelf, and approved adjustments correct the record."],
  ["Reports inform decisions", "Stock value, turnover, aging, stockouts and supplier performance guide purchasing and planning."],
] as const;

export const problemRows = [
  ["Overstocking and understocking", "Cash tied up in slow stock while best sellers run out", "Reorder points, safety stock and sales-velocity reports guide purchasing"],
  ["Inaccurate stock records", "Systems disagree with shelves", "Transaction-based records, barcode scanning and cycle counts"],
  ["Spreadsheet dependency", "Version conflicts, formula errors, no history", "One shared database with an audit trail"],
  ["Poor warehouse visibility", "Staff can’t find stock that “exists”", "Location-level (and, with WMS, bin-level) quantities"],
  ["Stock discrepancies", "Unexplained losses", "Adjustment reason codes and approval workflows"],
  ["Delayed replenishment", "Orders placed after stock runs out", "Low-stock alerts and suggested purchase orders"],
  ["Lost sales", "Customers leave when items show as unavailable", "Accurate available-to-sell figures shared with sales channels"],
  ["Holding costs", "Storage, obsolescence and spoilage", "Aging, dead-stock and expiry reports"],
  ["Multiple locations", "Each site runs its own records", "Central view with transfers between sites"],
  ["Limited reporting", "Decisions made without data", "Dashboards on value, turnover and stock health"],
  ["Disconnected sales and purchasing", "Re-keying between POS, e-commerce and purchasing", "Integrations and APIs"],
  ["Poor supplier coordination", "Late or partial deliveries go unnoticed", "PO tracking, expected dates and supplier performance"],
];

export type InventoryFeature = { title: string; icon: string; text: string; scenario?: string };

export const features: InventoryFeature[] = [
  { title: "Centralized Inventory Dashboard", icon: "LayoutDashboard", text: "A single view of stock value, low-stock items, open purchase orders, pending transfers and recent adjustments, filtered by location, category or supplier.", scenario: "An operations manager starts the day with five SKUs below reorder point and two late supplier deliveries already highlighted." },
  { title: "Real-Time Stock Tracking", icon: "Activity", text: "Quantities update with each receipt, sale, transfer and adjustment, showing on-hand, committed, available and incoming stock separately.", scenario: "A web order reserves stock immediately, so the store doesn’t sell the same last unit." },
  { title: "Stock In and Stock Out Management", icon: "ArrowLeftRight", text: "Every receipt, issue, return and write-off is recorded with date, user, reason and reference document.", scenario: "A damaged delivery is received partially, and the shortfall stays visible against the purchase order." },
  { title: "Product and SKU Management", icon: "Tags", text: "A structured item master covering variants (size, color), units of measure and conversions (case vs. each), barcodes, costs, categories, preferred suppliers and tracking rules.", scenario: "A distributor buys by the case and sells by the unit, and the system converts quantities automatically." },
  { title: "Barcode and QR Code Scanning", icon: "ScanBarcode", text: "Handheld scanners, mobile devices or fixed scanners capture item and location codes during receiving, picking, transfers and counts. This requires compatible hardware or mobile apps.", scenario: "A cycle count of 300 bins is scanned instead of typed, and differences are flagged for review." },
  { title: "Low-Stock Alerts and Reorder Level Management", icon: "BellRing", text: "Reorder points, safety stock and reorder quantities per item and location, with alerts or suggested purchase orders when thresholds are reached.", scenario: "Seasonal items get higher reorder points in peak months." },
  { title: "Stock Transfers Between Locations", icon: "Truck", text: "Transfer requests, approvals, dispatch and receipt, with in-transit stock tracked separately.", scenario: "Stock moves from an overstocked store to one that’s selling out, with both records updated on receipt." },
  { title: "Batch, Serial Number and Expiry Date Tracking", icon: "CalendarClock", text: "Lot and batch numbers, unique serial numbers and expiry dates are recorded at receipt and carried through every movement. This supports FEFO (first-expired, first-out) and traceability.", scenario: "A supplier recalls a batch, and the business identifies affected stock and where it went." },
  { title: "Inventory Valuation", icon: "Calculator", text: "Stock is valued using the costing method your accounting policy specifies, such as FIFO or weighted average, with optional landed costs. The method should be agreed with your accountant.", scenario: "Finance sees inventory value by location at month-end without a separate spreadsheet." },
  { title: "Stock Adjustment Management", icon: "SlidersHorizontal", text: "Adjustments for damage, shrinkage, count variances and write-offs, with reason codes, approval thresholds and an audit trail." },
  { title: "Sales and Purchase Tracking", icon: "Receipt", text: "Inbound (purchases) and outbound (sales and consumption) quantities are linked to their documents, so movement history explains every change." },
  { title: "User Roles, Permissions and Audit Logs", icon: "ShieldCheck", text: "Role-based access (for example, store staff can receive, managers approve adjustments, finance sees cost) and a complete activity history." },
  { title: "Mobile Inventory Access", icon: "Smartphone", text: "Mobile or tablet apps for receiving, counting, transfers and lookups on the floor, optionally with offline capability for weak-signal areas." },
  { title: "API and System Integrations", icon: "Plug", text: "Connections to ERP, POS, e-commerce, accounting and shipping systems, so stock and orders stay consistent across channels." },
];

export const moduleRows = [
  ["Product and SKU", "Item master, variants, units of measure, barcodes, costs, categories, tracking rules"],
  ["Stock control", "Receipts, issues, adjustments, counts, transfers, reservations, reorder rules"],
  ["Warehouse", "Locations, zones and, if required, bins. Advanced execution is often handled by a WMS."],
  ["Purchase management", "Purchase requests, purchase orders, receiving against POs, back-orders"],
  ["Supplier management", "Supplier records, lead times, price lists, performance"],
  ["Reporting and analytics", "Valuation, turnover, aging, stockouts, fill rates, dashboards"],
  ["Users and permissions", "Roles, approvals, audit logs, location-based access"],
];

export const stockHabits = [
  ["Every movement is a transaction", "No silent edits. Quantities change only through receipts, issues, transfers or approved adjustments."],
  ["Counting is continuous", "Cycle counting by ABC class (count high-value or fast-moving items more often) finds errors early, without shutting down for a full physical count."],
  ["Availability isn’t the same as on-hand", "Committed and allocated stock is separated, so sales channels only promise what can be shipped."],
] as const;

export const scanningSteps = [
  ["Receiving", "Scan items against the purchase order and flag over- or under-deliveries"],
  ["Transfers", "Scan on dispatch and on receipt to confirm what arrived"],
  ["Picking and issuing", "Confirm the right item and quantity leave the shelf"],
  ["Counting", "Scan locations and items during cycle counts"],
  ["Labeling", "Generate barcode or QR labels for items, cases or locations"],
] as const;

export const purchasingPoints = [
  "Reorder alerts become suggested purchase orders grouped by supplier",
  "Purchase orders carry expected delivery dates, so incoming stock is visible",
  "Receipts are recorded against the PO, with partial deliveries and back-orders tracked",
  "Supplier lead times, prices and on-time performance feed reorder settings",
];

export const reportRows = [
  ["Stock on hand and valuation", "What do we hold, where, and what is it worth?"],
  ["Low stock and reorder", "What needs to be ordered now?"],
  ["Inventory turnover and days of inventory", "How fast is stock moving?"],
  ["Aging and dead stock", "What isn’t selling, and for how long?"],
  ["Stockout and fill rate", "Where are we missing demand?"],
  ["ABC analysis", "Which items drive most of the value?"],
  ["Movement history", "What happened to this SKU?"],
  ["Adjustment and shrinkage", "Where are discrepancies occurring?"],
  ["Supplier performance", "Who delivers on time and in full?"],
  ["Expiry and batch", "What expires soon, and where is each batch?"],
];

export const benefits = [
  "One trusted stock record across locations and channels",
  "Better purchasing decisions from reorder points and sales-velocity data",
  "Fewer stockouts and less excess stock, with healthier cash flow as a result",
  "Faster, more accurate receiving and counting with scanning",
  "Visibility of discrepancies through reason codes and audit trails",
  "Less re-keying between sales, purchasing and accounting",
  "Traceability of batches, serials and expiry dates",
  "Reporting on value, turnover and stock health",
  "Scalability to new SKUs, channels and locations",
];

export const industryRows = [
  ["Retail", "Store-level stock, transfers between stores, sales-driven replenishment, POS sync, seasonal ranges"],
  ["E-commerce", "Accurate available-to-sell across storefronts and marketplaces, reservations, returns, 3PL sync"],
  ["Wholesale distribution", "Case and unit conversions, volume purchasing, landed cost, multi-warehouse, customer back-orders"],
  ["Manufacturing", "Raw materials and finished goods, BOM consumption, work-in-progress, lot tracking"],
  ["Warehouses and fulfillment centers", "Multi-client stock, high-volume scanning, integration with WMS and shipping"],
  ["Grocery and supermarkets", "Fast movers, perishables, expiry and FEFO, items sold by weight"],
  ["Automotive parts", "Large SKU catalogs, part numbers and supersessions, serial tracking, cores and returns"],
  ["Pharmaceutical operations", "Lot and expiry tracking, recall traceability, controlled storage conditions. Any regulatory requirements are defined with compliance advisors."],
  ["Electronics", "Serial numbers, warranty tracking, high-value items, returns and refurbishment"],
  ["Fashion and apparel", "Size and color variants, seasonal collections, markdowns, multi-channel returns"],
  ["Logistics and supply chain", "In-transit stock, cross-docking, partner and 3PL visibility"],
];

export const integrationRows = [
  ["ERP", "Items, purchase orders, receipts, valuation and journal entries, sales orders"],
  ["CRM", "Customer-specific availability and back-order status for sales teams"],
  ["POS", "Sales decrement stock; returns add it back; store availability"],
  ["E-commerce platforms and marketplaces", "Available-to-sell quantities out; orders and reservations in"],
  ["Accounting software", "Inventory value, cost of goods sold, adjustments"],
  ["Shipping and logistics tools, 3PLs", "Shipments, tracking, stock held at third parties"],
  ["Third-party APIs", "Supplier catalogs, EDI or API purchase orders, BI tools"],
];

export const systemRows = [
  ["Inventory management software", "Stock visibility, quantities, movements, replenishment, valuation and control"],
  ["Warehouse management system", "Warehouse execution: receiving, putaway, bins, picking, packing, dispatch"],
  ["ERP", "Connects finance, procurement, HR, operations and inventory in one business-wide system"],
  ["POS software", "Sales transactions and checkout, with stock updates as part of the sale"],
];

export const cloudVsOnPremRows = [
  ["Access", "Browser and mobile from any store, warehouse or office", "Usually on-site or over VPN"],
  ["Multi-location", "Natural fit", "Requires networking between sites"],
  ["Upfront cost", "Lower infrastructure outlay", "Servers and setup up front"],
  ["Maintenance", "Managed cloud operations", "Internal IT"],
  ["Scalability", "Scales with SKUs, users and transactions", "Requires capacity planning"],
  ["Offline operation", "Needs offline-capable apps for weak-signal areas", "Works on the local network"],
  ["Best fit", "Multi-location, e-commerce and growing businesses", "Isolated sites or strict hosting policies"],
];

export const customVsReadyRows = [
  ["Time to start", "Fast for standard workflows", "Phased build"],
  ["Fit", "Your process adapts to the product", "Built around your items, units, locations and approvals"],
  ["Integrations", "Vendor’s catalog", "Designed for your ERP, POS, e-commerce, WMS and legacy systems"],
  ["Cost model", "Subscription per user, location or order volume", "Development investment plus hosting and support"],
  ["Ownership", "Vendor roadmap", "Your code and roadmap"],
  ["Best fit", "Standard retail or small-business stock", "Complex units, traceability, multi-entity or integration-heavy operations"],
];

export const processSteps = [
  ["Discovery", "Map items, locations, stock flows, purchasing, counting, reports and integrations, and agree on phase-one scope."],
  ["Architecture and design", "Data model, transaction rules, permissions, integration design and UI prototypes for desktop and mobile."],
  ["Development", "Short iterations (Clickmasters works in two-week sprints) with regular demos."],
  ["Data migration", "Clean the item master, load opening balances, and reconcile them against a physical count."],
  ["Testing", "Functional, integration, scanning, performance and user acceptance testing."],
  ["Pilot and rollout", "Start with one location or category, then expand."],
  ["Support and optimization", "Monitoring, enhancements and new integrations."],
] as const;

export const security = [
  "Role- and location-based permissions, including cost visibility only for authorized roles",
  "Approval thresholds for adjustments, write-offs and transfers",
  "Complete audit logs of transactions and master-data changes",
  "Encryption in transit and at rest, SSO and multi-factor authentication for administrators",
  "Data governance: one owner for item master data, duplicate prevention and naming standards",
  "Backups, environment separation and secure development and testing practices",
];

export const challengeRows = [
  ["Dirty item master data", "Clean and standardize SKUs before go-live, and appoint a data owner"],
  ["Opening balances don’t match", "Run a physical count at cutover"],
  ["Staff bypass the system", "Make scanning faster than paper, and make transactions mandatory"],
  ["Integration timing gaps", "Event-driven sync with monitoring and alerts"],
  ["Too many custom rules", "Standardize common flows. Customize only what’s genuinely different."],
  ["Count disruption", "Cycle counting by ABC class instead of full shutdowns"],
];

export const selectionQuestions = [
  ["Item complexity", "Variants, units of measure, batches, serials, expiry?"],
  ["Locations", "How many stores and warehouses, and do you need bins (which means WMS)?"],
  ["Channels", "POS, e-commerce, marketplaces, B2B?"],
  ["Integrations", "ERP, accounting, shipping, 3PL, and who owns which data?"],
  ["Scanning and mobile", "Which devices, and is offline needed?"],
  ["Reporting", "Can buyers, managers and finance get the answers they need?"],
  ["Controls", "Approvals, permissions, audit trails?"],
  ["Scalability", "SKU count, transaction volume and new locations?"],
  ["Total cost of ownership", "Subscription or development, hardware, integration and support over five years?"],
] as const;

export const costFactors = [
  ["Modules", "Stock control only, or purchasing, multi-location and analytics too"],
  ["Item complexity", "Variants, units, batch, serial and expiry tracking, valuation methods"],
  ["Locations", "Number of locations and whether bin-level warehouse functionality is needed"],
  ["Integrations", "ERP, POS, e-commerce, accounting, shipping, 3PL, EDI"],
  ["Mobile and scanning apps", "Offline support and hardware integration"],
  ["Reporting", "Reporting and dashboard requirements"],
  ["Data migration", "Volume and quality"],
  ["Operations", "Security, hosting, support and maintenance"],
] as const;

export const whyClickmasters = [
  ["Product understanding across the operations stack", "Inventory, warehouse, supply chain, ERP, POS and order management are all part of Clickmasters’ product catalog, so integration boundaries are designed deliberately."],
  ["Integration experience", "Published e-commerce work includes bidirectional inventory and order sync with NetSuite, SAP and Microsoft Dynamics."],
  ["Mobile capability", "Offline-first cross-platform apps suited to scanning and counting on the floor."],
  ["Structured delivery", "Discovery, architecture, two-week sprints, QA and phased rollout."],
  ["Transparent scoping", "Scope, timeline and quote are agreed before development starts."],
] as const;

export const inventoryFaqs = [
  { question: "What is inventory management software?", answer: "It’s software that records and controls stock: what you have, where it is, what’s reserved and what’s on order. It updates with every receipt, sale, transfer and adjustment." },
  { question: "How does an inventory management system work?", answer: "Items are defined once, then every stock movement is recorded as a transaction. The system recalculates on-hand, committed and available quantities by location, triggers reorder alerts and reports on stock health." },
  { question: "What are the main features of inventory management software?", answer: "SKU management, real-time stock tracking, receipts and issues, transfers, reorder alerts, purchase orders, barcode scanning, batch, serial and expiry tracking, valuation, reporting, permissions and integrations." },
  { question: "Is inventory management software suitable for small businesses?", answer: "Yes. Small businesses benefit from accurate counts, reorder alerts, simple purchase orders and POS or online-store sync, and can add modules as they grow." },
  { question: "Can inventory software manage multiple warehouses?", answer: "Yes. It tracks stock per warehouse or store, supports transfers with in-transit visibility, and consolidates quantities across the network." },
  { question: "Does inventory management software support barcode scanning?", answer: "It can, using handheld scanners, mobile camera scanning or fixed scanners for receiving, transfers, picking and counts. It requires labeled items and compatible devices." },
  { question: "Can inventory management software integrate with ERP systems?", answer: "Yes. Typical integrations exchange items, purchase orders, receipts, sales orders and inventory valuation with ERP, through APIs or scheduled sync." },
  { question: "What is the difference between inventory management and warehouse management?", answer: "Inventory management tracks how much stock you have and where. Warehouse management runs the work inside a warehouse: receiving, putaway, bins, picking, packing and dispatch." },
  { question: "How does real-time inventory tracking work?", answer: "Each transaction, whether a sale, receipt, transfer or scan, updates quantities as it happens. Real-time accuracy depends on connected systems sending transactions promptly." },
  { question: "Can inventory management software manage purchase orders?", answer: "Yes. It can create purchase orders from reorder suggestions, track expected deliveries and record receipts against each PO, including partial deliveries." },
  { question: "What is the difference between cloud-based and on-premise inventory software?", answer: "Cloud software is hosted and accessed via browser or app from any location. On-premise runs on your own servers. Cloud suits multi-location businesses, and on-premise suits strict hosting requirements." },
  { question: "How much does custom inventory management software development cost?", answer: "It depends on modules, item complexity, locations, integrations, mobile scanning, reporting and data migration. A quote follows scoping." },
  { question: "How long does it take to develop an inventory management system?", answer: "It depends on scope. A focused first release is shorter, while multi-location, integration-heavy systems take longer and are usually delivered in phases. Timelines are set after discovery." },
  { question: "Can inventory software integrate with POS and e-commerce platforms?", answer: "Yes. POS sales and online orders reduce stock, returns add it back, and available quantities are published to storefronts and marketplaces." },
  { question: "Why choose custom inventory management software?", answer: "When your units, traceability, locations, approvals or integrations don’t fit standard products, or when subscription costs and workarounds grow faster than the value, a custom system built around your operation can be the better long-term fit." },
];
