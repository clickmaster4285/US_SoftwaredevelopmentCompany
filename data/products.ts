export type ProductItem = {
  slug: string;
  title: string;
  description: string;
  points: string[];
};

export type ProductIndustry = {
  slug: string;
  label: string;
  description: string;
  lead: string;
  audiences: string[];
  icon: string;
  products: ProductItem[];
};

export const productIndustries: ProductIndustry[] = [
  {
    slug: "healthcare-medical-software",
    label: "Healthcare & Medical Software",
    description:
      "Software for hospitals, clinics, pharmacies, and labs that need patient records, visits, and billing in one place.",
    lead:
      "A patient moves from registration to the visit, the test, the medicine, and the bill. These products keep that record in one system for the hospital, the clinic, the pharmacy, and the lab: hospital management system software, clinic management software, medical practice management software, electronic health records (EHR) and electronic medical records (EMR) software, a pharmacy management system, a laboratory information management system, medical billing software, patient management software and telemedicine software.",
    audiences: ["Hospitals", "Clinics and practices", "Pharmacies", "Diagnostic labs"],
    icon: "Stethoscope",
    products: [
      {
        slug: "hospital-management-system",
        title: "Hospital Management System",
        description:
          "Run admissions, wards, billing, and clinical workflows from one hospital system built for daily operations.",
        points: [
          "Admissions, wards, and bed status",
          "Clinical notes tied to each stay",
          "Billing linked to the patient visit",
          "Hospital queue and visitor management",
          "Custom hospital management system software",
        ],
      },
      {
        slug: "clinic-management-software",
        title: "Clinic Management Software",
        description:
          "Schedule visits, keep patient charts, and handle clinic billing without jumping between separate tools.",
        points: [
          "Appointment calendar for providers",
          "Visit notes and patient history",
          "Clinic billing and receipts",
          "Clinic management software with a staff app",
        ],
      },
      {
        slug: "medical-practice-management-software",
        title: "Medical Practice Management Software",
        description:
          "Coordinate appointments, claims, and the day-to-day work of a medical practice in one system.",
        points: [
          "Provider schedules and rooms",
          "Claims and payment tracking",
          "Front-desk and clinical handoff",
          "Practice management software for dental, therapy and mental health practices",
        ],
      },
      {
        slug: "electronic-health-records-ehr-software",
        title: "Electronic Health Records (EHR) Software",
        description:
          "Keep a shared health record that follows the patient across visits, teams, and care settings.",
        points: [
          "Longitudinal patient chart",
          "Shared access for the care team",
          "History of diagnoses and results",
          "Electronic health record system software for care teams",
        ],
      },
      {
        slug: "electronic-medical-records-emr-software",
        title: "Electronic Medical Records (EMR) Software",
        description:
          "Store encounter notes, charts, and clinical history for a single practice in a searchable record.",
        points: [
          "Encounter notes and charts",
          "Problem, medication, and allergy lists",
          "Search across the practice record",
          "Electronic medical records EMR software for practices",
        ],
      },
      {
        slug: "pharmacy-management-system",
        title: "Pharmacy Management System",
        description:
          "Track prescriptions, stock, and dispensing from the counter through to the shelf and supplier.",
        points: [
          "Prescription intake and dispensing",
          "Stock levels and expiries",
          "Supplier and purchase records",
          "Cloud based pharmacy management system",
        ],
      },
      {
        slug: "laboratory-information-management-system-lims",
        title: "Laboratory Information Management System (LIMS)",
        description:
          "Manage samples, tests, and results with a clear path from collection to the finished report.",
        points: [
          "Sample intake and barcodes",
          "Test status through the lab",
          "Result review and reporting",
          "Laboratory sample and workflow management software",
        ],
      },
      {
        slug: "medical-billing-software",
        title: "Medical Billing Software",
        description:
          "Prepare claims, post payments, and see what is still outstanding without a separate spreadsheet.",
        points: [
          "Claims prepared from visits",
          "Payments, denials, and balances",
          "Billing reports for the practice",
          "Medical billing and coding software with clearinghouse integration",
        ],
      },
      {
        slug: "patient-management-software",
        title: "Patient Management Software",
        description:
          "Keep registrations, visits, and follow-ups organized so the care team can find a patient quickly.",
        points: [
          "Registration and demographics",
          "Visit history and follow-ups",
          "Searchable patient list",
          "Patient management solutions for clinics and hospitals",
        ],
      },
      {
        slug: "telemedicine-software",
        title: "Telemedicine Software",
        description:
          "Book and run virtual visits with scheduling, a video consult, and notes saved to the patient record.",
        points: [
          "Online booking for virtual visits",
          "Video consult for patient and clinician",
          "Visit notes stored with the chart",
          "Telemedicine software with EHR and EMR integration",
        ],
      },
    ],
  },
  {
    slug: "business-enterprise-management",
    label: "Business & Enterprise Management",
    description:
      "Systems for finance, people, customers, inventory, and the processes that keep a company running.",
    lead:
      "A company runs on people, customers, stock, documents, and the steps between them. Each product here covers one of those jobs, so a department can start with the system it actually needs: enterprise resource planning (ERP) software, customer relationship management (CRM) software, a human resource management system (HRMS), payroll management software, an employee attendance management system, inventory management software, supply chain management software, a document management system, business process management software and asset management software.",
    audiences: ["Operations teams", "Finance and HR", "Sales teams", "Warehouse and procurement"],
    icon: "Building2",
    products: [
      {
        slug: "enterprise-resource-planning-erp-software",
        title: "Enterprise Resource Planning (ERP) Software",
        description:
          "Connect finance, inventory, and operations so the company works from one shared set of records.",
        points: [
          "Finance and operational records together",
          "Inventory tied to orders and purchasing",
          "Shared reports across departments",
          "Enterprise resource planning ERP software solution",
        ],
      },
      {
        slug: "customer-relationship-management-crm-software",
        title: "Customer Relationship Management (CRM) Software",
        description:
          "Track leads, accounts, and follow-ups so the sales team works from one pipeline.",
        points: [
          "Leads, accounts, and contacts",
          "Pipeline stages and follow-ups",
          "Activity history on every deal",
          "Customer relationship management CRM software system",
        ],
      },
      {
        slug: "human-resource-management-system-hrms",
        title: "Human Resource Management System (HRMS)",
        description:
          "Manage hiring, employee records, leave, and the HR work that sits around a growing team.",
        points: [
          "Employee records in one place",
          "Leave requests and approvals",
          "Hiring steps through to joining",
          "Human resource management system HRMS for growing teams",
        ],
      },
      {
        slug: "payroll-management-software",
        title: "Payroll Management Software",
        description:
          "Calculate pay, deductions, and pay runs with a record of what was paid and why.",
        points: [
          "Pay runs and salary components",
          "Deductions and adjustments",
          "Payslips and payroll history",
          "Payroll management solutions for small business",
        ],
      },
      {
        slug: "employee-attendance-management-system",
        title: "Employee Attendance Management System",
        description:
          "Record shifts, check-ins, and attendance exceptions without rebuilding the sheet each month.",
        points: [
          "Check-in and shift records",
          "Late arrivals and absences",
          "Attendance ready for payroll",
          "Employee time attendance software with a tracker app",
        ],
      },
      {
        slug: "inventory-management-software",
        title: "Inventory Management Software",
        description:
          "Track stock levels, movements, and reorder points so the warehouse matches what the books say.",
        points: [
          "On-hand stock by location",
          "Receipts, issues, and transfers",
          "Reorder points and low-stock alerts",
          "Cloud inventory management software with barcode scanning",
        ],
      },
      {
        slug: "supply-chain-management-software",
        title: "Supply Chain Management Software",
        description:
          "Coordinate suppliers, purchase orders, and fulfillment from request through to delivery.",
        points: [
          "Suppliers and purchase orders",
          "Order status across the chain",
          "Receipt against what was ordered",
          "Supply chain management SCM software with risk management",
        ],
      },
      {
        slug: "document-management-system",
        title: "Document Management System",
        description:
          "Store, find, and control business documents with permissions and a history of changes.",
        points: [
          "Central library for files",
          "Permissions by team or role",
          "Version history on each document",
          "Cloud based document management system software",
        ],
      },
      {
        slug: "business-process-management-software",
        title: "Business Process Management Software",
        description:
          "Map the steps a process should follow, run them, and see where work is waiting.",
        points: [
          "Process steps and owners",
          "Requests moving through approval",
          "Visibility into stalled work",
          "Business process management BPM software and automation",
        ],
      },
      {
        slug: "asset-management-software",
        title: "Asset Management Software",
        description:
          "Track equipment, ownership, and maintenance from purchase through to retirement.",
        points: [
          "Asset register and ownership",
          "Maintenance and service history",
          "Status from purchase to retirement",
          "Asset management software for IT, utilities and facilities",
        ],
      },
    ],
  },
  {
    slug: "fitness-sports-management",
    label: "Fitness & Sports Management",
    description:
      "Membership, class, and booking software for gyms, studios, trainers, and sports clubs.",
    lead:
      "A gym or club sells a membership, fills a class, and checks someone in at the door. These products cover the front desk, the timetable, the trainer, and the booking.",
    audiences: ["Gyms", "Fitness clubs", "Yoga studios", "Sports clubs and trainers"],
    icon: "Dumbbell",
    products: [
      {
        slug: "gym-management-software",
        title: "Gym Management Software",
        description:
          "Run memberships, check-ins, and day-to-day gym operations from one front desk system.",
        points: [
          "Member profiles and plans",
          "Door check-in and attendance",
          "Front-desk billing and freezes",
        ],
      },
      {
        slug: "fitness-club-management-system",
        title: "Fitness Club Management System",
        description:
          "Manage classes, memberships, and club staff so the schedule and the front desk stay in sync.",
        points: [
          "Class timetable and capacity",
          "Memberships and access rules",
          "Staff rosters beside the schedule",
        ],
      },
      {
        slug: "personal-trainer-management-software",
        title: "Personal Trainer Management Software",
        description:
          "Schedule clients, sessions, and training packages without a separate calendar and invoice list.",
        points: [
          "Client sessions and packages",
          "Trainer calendars",
          "Session history for each client",
        ],
      },
      {
        slug: "sports-club-management-software",
        title: "Sports Club Management Software",
        description:
          "Keep members, teams, fixtures, and club admin together for a season of club operations.",
        points: [
          "Members, teams, and roles",
          "Fixtures and club calendar",
          "Fees and club communications",
        ],
      },
      {
        slug: "membership-management-software",
        title: "Membership Management Software",
        description:
          "Sell, renew, and track memberships so access and payments stay attached to the right person.",
        points: [
          "Plans, renewals, and freezes",
          "Who has access right now",
          "Payment status on each member",
        ],
      },
      {
        slug: "yoga-studio-management-software",
        title: "Yoga Studio Management Software",
        description:
          "Book classes, assign instructors, and manage studio memberships from one schedule.",
        points: [
          "Class bookings and waitlists",
          "Instructor schedules",
          "Studio memberships and passes",
        ],
      },
      {
        slug: "fitness-booking-and-scheduling-software",
        title: "Fitness Booking & Scheduling Software",
        description:
          "Fitness booking software lets clients book sessions and keeps trainers, rooms, and class capacity on one calendar. Fitness schedule software is that calendar: who is teaching, which room is free, and how many spots are left.",
        points: [
          "Client self-booking",
          "Rooms, trainers, and capacity",
          "Cancellations and open slots",
          "Fitness class scheduling software sets the class, the instructor, the room, and the capacity.",
          "Fitness center scheduling software covers rooms and trainers across the center.",
          "Fitness studio booking software keeps studio classes, instructors, and open spots on the same calendar.",
        ],
      },
    ],
  },
  {
    slug: "education-management-software",
    label: "Education Management Software",
    description:
      "Systems for schools, colleges, universities, and course businesses that manage students and learning.",
    lead:
      "A school or institute has to admit a student, put them in a class, run the exam, and collect the fee. These products follow that path for schools, colleges, universities, and coaching centers.",
    audiences: ["Schools", "Colleges and universities", "Coaching institutes", "Course teams"],
    icon: "GraduationCap",
    products: [
      {
        slug: "school-management-system",
        title: "School Management System",
        description:
          "Handle admissions, attendance, fees, and daily school administration in one system.",
        points: [
          "Admissions and student records",
          "Attendance and class lists",
          "Fees and school notices",
        ],
      },
      {
        slug: "college-management-software",
        title: "College Management Software",
        description:
          "Organize departments, academic records, and the operational work of running a college.",
        points: [
          "Departments and programs",
          "Student academic records",
          "College operations in one place",
        ],
      },
      {
        slug: "university-management-system",
        title: "University Management System",
        description:
          "Coordinate faculties, programs, students, and campus administration across a university.",
        points: [
          "Faculties, programs, and courses",
          "Student records across campus",
          "Administration shared by offices",
        ],
      },
      {
        slug: "learning-management-system-lms",
        title: "Learning Management System (LMS)",
        description:
          "Deliver lessons, assignments, and learner progress for courses taught online or on campus.",
        points: [
          "Courses, lessons, and materials",
          "Assignments and submissions",
          "Progress for each learner",
        ],
      },
      {
        slug: "student-information-system-sis",
        title: "Student Information System (SIS)",
        description:
          "Maintain enrollment, grades, and the official student record from admission onward.",
        points: [
          "Enrollment and student status",
          "Grades and academic history",
          "The official student record",
        ],
      },
      {
        slug: "online-examination-software",
        title: "Online Examination Software",
        description:
          "Create, deliver, and grade exams online with a clear record of attempts and scores.",
        points: [
          "Question papers and schedules",
          "Timed online attempts",
          "Scores and result records",
        ],
      },
      {
        slug: "coaching-institute-management-software",
        title: "Coaching Institute Management Software",
        description:
          "Run batches, fees, and student follow-up for a coaching institute with several courses.",
        points: [
          "Batches and course enrollment",
          "Fee collection by student",
          "Follow-up on attendance and dues",
        ],
      },
      {
        slug: "course-management-platform",
        title: "Course Management Platform",
        description:
          "Publish courses, enroll learners, and track who has completed each part of the catalog.",
        points: [
          "Course catalog and publishing",
          "Enrollment and access",
          "Completion tracking",
        ],
      },
    ],
  },
  {
    slug: "retail-ecommerce-software",
    label: "Retail & E-commerce Software",
    description:
      "Checkout, catalog, warehouse, and order software for stores, restaurants, and online sellers.",
    lead:
      "A store takes the order, keeps the stock, and knows what has shipped. These products cover the counter, the catalog, the marketplace, and the warehouse behind them.",
    audiences: ["Retail stores", "Online shops", "Marketplaces", "Restaurants and grocery"],
    icon: "Store",
    products: [
      {
        slug: "retail-pos-software",
        title: "Retail POS Software",
        description:
          "Take in-store payments, apply prices, and keep the sale tied to the product that left the shelf.",
        points: [
          "Checkout and payment methods",
          "Prices, discounts, and tax",
          "Sales linked to stock",
        ],
      },
      {
        slug: "ecommerce-management-platform",
        title: "E-commerce Management Platform",
        description:
          "Manage the catalog, orders, and storefront operations for an online shop from one desk.",
        points: [
          "Product catalog and pricing",
          "Orders from the storefront",
          "Stock status on each listing",
        ],
      },
      {
        slug: "multi-vendor-marketplace-software",
        title: "Multi-Vendor Marketplace Software",
        description:
          "Let multiple sellers list products, take orders, and track what they are owed.",
        points: [
          "Seller accounts and storefronts",
          "Orders split by vendor",
          "Payouts and commission records",
        ],
      },
      {
        slug: "warehouse-management-system-wms",
        title: "Warehouse Management System (WMS)",
        description:
          "Control receiving, storage, picking, and the stock that moves through a warehouse.",
        points: [
          "Receiving and putaway",
          "Bin locations and picking",
          "Stock accuracy by location",
        ],
      },
      {
        slug: "order-management-system",
        title: "Order Management System",
        description:
          "Capture orders from every channel, route them, and follow each one through to fulfillment.",
        points: [
          "Orders from store and online",
          "Routing to the right location",
          "Status through to fulfillment",
        ],
      },
      {
        slug: "restaurant-pos-software",
        title: "Restaurant POS Software",
        description:
          "Take table orders, send them to the kitchen, and close the check from the floor.",
        points: [
          "Tables, orders, and modifiers",
          "Tickets for the kitchen",
          "Bills, splits, and payments",
        ],
      },
      {
        slug: "grocery-store-management-software",
        title: "Grocery Store Management Software",
        description:
          "Run grocery pricing, inventory, and checkout, including items sold by weight or pack.",
        points: [
          "Checkout for pack and weight",
          "Pricing and shelf inventory",
          "Replenishment for fast movers",
        ],
      },
      {
        slug: "retail-inventory-management-system",
        title: "Retail Inventory Management System",
        description:
          "Track stock across stores, move it between locations, and see what needs replenishment.",
        points: [
          "Stock by store",
          "Transfers between locations",
          "Replenishment from sales",
        ],
      },
    ],
  },
  {
    slug: "logistics-transportation-software",
    label: "Logistics & Transportation Software",
    description:
      "Fleet, dispatch, delivery, and route software for carriers, couriers, and transport teams.",
    lead:
      "A transport business lives on vehicles, routes, and the status of each shipment. These products cover the fleet, the dispatch board, maintenance, and the last mile.",
    audiences: ["Fleets", "Carriers", "Dispatch desks", "Courier companies"],
    icon: "Truck",
    products: [
      {
        slug: "fleet-management-software",
        title: "Fleet Management Software",
        description:
          "See vehicles, drivers, and how the fleet is being used without chasing updates by phone.",
        points: [
          "Vehicle and driver records",
          "Assignments and utilization",
          "Status of the active fleet",
        ],
      },
      {
        slug: "transportation-management-system-tms",
        title: "Transportation Management System (TMS)",
        description:
          "Plan, execute, and track movements so each load has an owner and a status.",
        points: [
          "Loads planned and assigned",
          "Execution status on the move",
          "Delivery confirmation",
        ],
      },
      {
        slug: "truck-dispatch-management-software",
        title: "Truck Dispatch Management Software",
        description:
          "Assign loads, drivers, and truck schedules from a dispatch board the team can share.",
        points: [
          "Dispatch board for open loads",
          "Driver and truck assignment",
          "Schedule changes in one place",
        ],
      },
      {
        slug: "delivery-management-software",
        title: "Delivery Management Software",
        description:
          "Dispatch deliveries and follow each stop from pickup through to the door.",
        points: [
          "Delivery jobs and stops",
          "Driver assignment",
          "Proof of delivery",
        ],
      },
      {
        slug: "vehicle-maintenance-management-software",
        title: "Vehicle Maintenance Management Software",
        description:
          "Schedule service, record work orders, and see which vehicles are off the road.",
        points: [
          "Service schedules by vehicle",
          "Work orders and parts",
          "Downtime and return-to-service",
        ],
      },
      {
        slug: "route-optimization-software",
        title: "Route Optimization Software",
        description:
          "Build practical routes for the day’s stops so drivers spend less time backtracking.",
        points: [
          "Stops grouped into routes",
          "Order of stops for each driver",
          "Shorter runs for the same jobs",
        ],
      },
      {
        slug: "courier-management-system",
        title: "Courier Management System",
        description:
          "Book shipments, move them through hubs, and track last-mile courier deliveries.",
        points: [
          "Booking and shipment records",
          "Hub scans and handoffs",
          "Last-mile tracking",
        ],
      },
    ],
  },
  {
    slug: "real-estate-property-management",
    label: "Real Estate & Property Management",
    description:
      "Software for property owners, agents, and builders who manage rentals, listings, and job sites.",
    lead:
      "Property work is the listing, the tenant, the rent, and the job that puts the building up. These products keep those records for agencies, landlords, and construction teams.",
    audiences: ["Property managers", "Agencies", "Landlords", "Construction teams"],
    icon: "House",
    products: [
      {
        slug: "property-management-software",
        title: "Property Management Software",
        description:
          "Manage leases, tenants, maintenance, and property income without a folder per building.",
        points: [
          "Units, leases, and tenants",
          "Maintenance requests",
          "Rent and property income",
        ],
      },
      {
        slug: "real-estate-crm-software",
        title: "Real Estate CRM Software",
        description:
          "Keep leads, listings, and agent follow-ups together so inquiries do not go cold.",
        points: [
          "Buyer and seller leads",
          "Listings tied to inquiries",
          "Follow-ups for each agent",
        ],
      },
      {
        slug: "rental-management-system",
        title: "Rental Management System",
        description:
          "Track vacancies, tenant records, and rent collection for a portfolio of rental units.",
        points: [
          "Vacant and occupied units",
          "Tenant records and leases",
          "Rent due and rent received",
        ],
      },
      {
        slug: "real-estate-listing-platform",
        title: "Real Estate Listing Platform",
        description:
          "Publish property listings and let people search them by location, type, and price.",
        points: [
          "Listing pages with details",
          "Search by location and price",
          "Inquiries sent to the agent",
        ],
      },
      {
        slug: "construction-project-management-software",
        title: "Construction Project Management Software",
        description:
          "Follow schedules, budgets, and site progress so a construction job stays visible to the team.",
        points: [
          "Schedule and site milestones",
          "Budget against actual cost",
          "Progress updates from the job",
        ],
      },
    ],
  },
];

export function findIndustry(slug: string) {
  return productIndustries.find((industry) => industry.slug === slug) ?? null;
}

export function findProduct(industrySlug: string, productSlug: string) {
  const industry = findIndustry(industrySlug);
  if (!industry) return null;
  const product = industry.products.find((item) => item.slug === productSlug);
  if (!product) return null;
  return { industry, product };
}

export function industryPath(slug: string) {
  return `/products/${slug}`;
}

export function productPath(industrySlug: string, productSlug: string) {
  return `/products/${industrySlug}/${productSlug}`;
}
