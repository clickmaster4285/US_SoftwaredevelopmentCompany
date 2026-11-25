// Content for /products/fitness-sports-management/yoga-studio-management-software.
// Source: Yoga-Studio-Management-Software-SEO-Content.md (19 Nov 2026).
// FAQ text is reused verbatim by the FAQPage JSON-LD, so edit both together.
// The page body must keep exactly 5 internal links (see ysLinks).

export const YS_PATH = "/products/fitness-sports-management/yoga-studio-management-software";

export const ysTitle = "Yoga Studio Management Software for Classes & Passes";

export const ysDescription =
  "Yoga studio management software for class scheduling, online booking, waitlists, instructors, memberships, class packs and workshops.";

export const ysOgTitle = "Yoga Studio Management Software for Classes & Passes";
export const ysOgDescription =
  "Schedule classes, take bookings, manage waitlists, instructors, memberships and workshops in one system, built around your studio.";

export const PRODUCT_NAME = "Yoga Studio Management Software";
export const INDUSTRY_SLUG = "fitness-sports-management";
export const INDUSTRY_LABEL = "Fitness & Sports Management";

export type LinkSpec = { anchor: string; href: string };

/** The only five in-body links on the page. */
export const ysLinks = {
  pillar: { anchor: "fitness & sports management software", href: "/products/fitness-sports-management" },
  booking: {
    anchor: "fitness booking and scheduling software",
    href: "/products/fitness-sports-management/fitness-booking-and-scheduling-software",
  },
  membership: {
    anchor: "membership management software",
    href: "/products/fitness-sports-management/membership-management-software",
  },
  crossPlatform: {
    anchor: "cross-platform app development",
    href: "/mobile-app-development/cross-platform-app-development",
  },
  gym: {
    anchor: "gym management software",
    href: "/products/fitness-sports-management/gym-management-software",
  },
} satisfies Record<string, LinkSpec>;

const dir = "/products/yoga-studio";
const img = (file: string, alt: string, width = 1440, height = 900) => ({ src: `${dir}/${file}`, width, height, alt });

export const ysImages = {
  dashboard: img("yoga-studio-management-dashboard.svg", "Yoga studio management dashboard showing today's classes, bookings, waitlists and expiring class packs"),
  calendar: img("yoga-class-scheduling-calendar.svg", "Weekly yoga class calendar by room with styles, instructors and capacity"),
  profile: img("yoga-student-registration-profile.svg", "Yoga student profile with plan, class credits, waiver status and attendance history"),
  plans: img("yoga-membership-class-package-interface.svg", "Yoga membership settings showing unlimited plans, 10-class packs, drop-ins and intro offers"),
  instructors: img("yoga-instructor-management-dashboard.svg", "Instructor dashboard with class assignments, availability and substitute requests"),
  booking: img("online-yoga-class-booking.svg", "Online yoga class booking screen with available spots, a waitlist option and booking confirmation"),
  attendance: img("yoga-attendance-waitlist-dashboard.svg", "Class roster with check-ins, waitlisted students and late-cancel flags"),
  retreat: img("yoga-workshop-retreat-registration.svg", "Yoga retreat registration page with dates, deposit option and remaining spots"),
  billing: img("yoga-studio-billing-payments.svg", "Yoga studio billing dashboard with membership renewals, pack sales and outstanding balances"),
  analytics: img("yoga-studio-analytics-reporting.svg", "Yoga studio analytics with class fill rates, attendance trends and revenue by plan"),
  og: img("yoga-studio-management-software-og.png", "Illustrative concept of a yoga studio management software dashboard", 1200, 750),
};

export const whatItManages = [
  ["Classes", "Recurring schedules, rooms, styles, levels and capacity"],
  ["Students", "Profiles, waivers, bookings, attendance and history"],
  ["Instructors", "Profiles, assignments, availability and substitutes"],
  ["Plans", "Memberships, class packs, drop-ins, intro offers and renewals"],
  ["Programs", "Workshops, retreats, teacher training and private sessions"],
  ["Money", "Payments, credits, invoices and balances"],
  ["Communication", "Confirmations, reminders, waitlist alerts and announcements"],
  ["Insight", "Attendance, class fill rates, plan activity and revenue"],
] as const;

export const challengeRows = [
  ["Manual registration", "Paper waivers and missing details", "Online registration with digital waivers"],
  ["Scheduling conflicts", "Two classes in one room", "Room-aware class calendar"],
  ["Double bookings", "More students than mats", "Real-time capacity enforcement"],
  ["Capacity limits", "Popular classes turn people away", "Waitlists with automatic promotion"],
  ["Waitlist admin", "Manual messages when spots open", "Automatic notifications and booking"],
  ["Instructor availability", "Last-minute substitute searches", "Availability and substitute workflows"],
  ["Membership renewals", "Lapsed members still booking", "Expiry tracking and renewal reminders"],
  ["Class pack tracking", "Credits miscounted or expired unnoticed", "Automatic credit deduction and expiry alerts"],
  ["Payments", "Drop-in cash and app payments scattered", "Unified payment records"],
  ["Attendance", "No record of who practiced", "Check-in linked to bookings"],
  ["Communication", "Students miss schedule changes", "Targeted notifications"],
  ["Reporting", "Owners guess which classes work", "Fill rates, attendance and revenue reports"],
];

export type YsFeature = { title: string; icon: string; text: string; value?: string; solves?: string };

export const features: YsFeature[] = [
  { title: "Yoga Student and Member Management", icon: "Users", text: "One record per student, with plans, credits, bookings, attendance and notes.", value: "Every instructor sees who's in the room." },
  { title: "Online Student Registration", icon: "UserPlus", text: "Sign-up with contact details, emergency contact, digital waiver and optional health disclosure.", solves: "Paper forms at the front desk." },
  { title: "Student Profile Management", icon: "UserRound", text: "Preferences, experience level, injuries or modifications noted by the student (with consent), and practice history.", value: "More personal instruction." },
  { title: "Yoga Class Scheduling", icon: "CalendarDays", text: "Classes by style, level, room, instructor, duration and capacity.", value: "A clear, accurate timetable." },
  { title: "Recurring Class Calendar", icon: "Repeat", text: "Weekly recurring classes with exceptions for holidays and special events.", solves: "Rebuilding the schedule every week." },
  { title: "Online Class Booking", icon: "CalendarCheck", text: "Students reserve spots online within booking windows.", value: "Convenience for students and fewer phone calls." },
  { title: "Class Capacity Management", icon: "LayoutGrid", text: "Capacity per class or room, with spot limits and optional mat-spot selection.", solves: "Overcrowding." },
  { title: "Waitlist Management", icon: "ListOrdered", text: "Waitlists that promote students automatically when spots open and notify them.", value: "Fuller classes and happier students." },
  { title: "Instructor Profile Management", icon: "BadgeCheck", text: "Bios, styles taught, certifications and photos.", value: "Students choose classes with confidence." },
  { title: "Instructor Availability and Scheduling", icon: "CalendarClock", text: "Availability, time off and class assignments.", solves: "Scheduling around instructors manually." },
  { title: "Yoga Membership Plans", icon: "Layers", text: "Monthly, annual and unlimited memberships with booking rules.", value: "Predictable recurring revenue." },
  { title: "Class Packs and Session Credits", icon: "Ticket", text: "5-, 10- and 20-class packs with credit tracking and expiry dates.", solves: "Miscounted punch cards." },
  { title: "Drop-In Class Management", icon: "DoorOpen", text: "Single-class purchases online or at the desk.", value: "Easy entry for new and casual students." },
  { title: "Membership Renewal Management", icon: "RefreshCw", text: "Expiry tracking, renewal reminders and auto-renewals where agreed.", solves: "Silent lapses." },
  { title: "Yoga Class Attendance Tracking", icon: "ClipboardCheck", text: "Attendance per class and per student.", value: "Insight into practice habits and class popularity." },
  { title: "Student Check-In", icon: "QrCode", text: "Check-in by name, QR code or app at the front desk or on a tablet.", value: "Fast arrivals before class." },
  { title: "Workshop and Retreat Registration", icon: "Mountain", text: "Paid registrations with limits, deposits and schedules.", value: "Special programs run alongside regular classes." },
  { title: "Private Yoga Session Scheduling", icon: "HeartHandshake", text: "One-to-one or small-group private bookings with instructor availability.", value: "Private teaching without a separate calendar." },
  { title: "Online and Virtual Yoga Classes", icon: "Video", text: "Virtual or hybrid class listings, with access links or on-demand content through integrated video platforms.", value: "Reach students beyond the studio." },
  { title: "Student Communication and Notifications", icon: "BellRing", text: "Confirmations, reminders, waitlist alerts and schedule changes.", solves: "No-shows and missed updates." },
  { title: "Payment and Billing Management", icon: "Wallet", text: "Memberships, packs, drop-ins, workshops and private sessions, through a payment gateway.", value: "One place for studio revenue." },
  { title: "Student Portal and Self-Service", icon: "LayoutDashboard", text: "Students manage bookings, plans, credits and profiles.", value: "Fewer front-desk tasks." },
  { title: "Mobile-Friendly Booking", icon: "Smartphone", text: "Booking on phones through a responsive web app or a native app.", value: "Students book wherever they are." },
  { title: "Studio Reporting and Analytics", icon: "BarChart3", text: "Attendance, fill rates, plan activity, revenue and instructor schedules.", value: "Data-informed scheduling and pricing." },
  { title: "Multi-Room and Multi-Location Management", icon: "Building2", text: "Rooms and locations with their own schedules, plus shared or location-specific plans.", value: "Growth without separate systems." },
  { title: "Third-Party Integrations", icon: "Plug", text: "Payments, video platforms, email marketing, calendars and accounting.", value: "Fewer disconnected tools." },
];

export const howItWorks = [
  ["Studio setup", "Rooms, class styles, levels, policies and locations."],
  ["Instructor registration", "Profiles, styles and availability."],
  ["Student registration", "Online sign-up with waivers."],
  ["Class calendar creation", "Recurring schedules with capacity."],
  ["Plan selection", "The student buys a membership, a class pack or a drop-in."],
  ["Online class booking", "The student reserves a spot or joins the waitlist."],
  ["Booking confirmation", "Automatic confirmation and reminder."],
  ["Attendance and check-in", "The student checks in and a credit is used."],
  ["Payment management", "Recurring and one-off payments are recorded."],
  ["Class completion", "Attendance is finalized and late cancels and no-shows follow your policy."],
  ["Student communication", "Follow-ups, renewal reminders, workshop announcements."],
  ["Reporting and review", "The owner reviews fill rates, revenue and trends."],
] as const;

export const schedulingPoints = [
  ["Recurring schedules", "For weekly classes"],
  ["Weekly calendars", "By room and instructor"],
  ["Instructor availability", "Built into scheduling"],
  ["Class capacity", "Per room and per class"],
  ["Room availability", "Across multiple rooms"],
  ["Booking windows", "How far ahead students can book, and cutoffs before class"],
  ["Cancellations", "Late-cancel windows and credit rules"],
  ["Waitlists", "With automatic promotion"],
  ["Private sessions", "Booked into instructor availability"],
] as const;

export const planRows = [
  ["Monthly membership", "Recurring billing and booking limits (unlimited or capped)"],
  ["Annual membership", "Upfront or monthly, with renewal handling"],
  ["Unlimited plans", "No class limit, with fair-use booking rules"],
  ["Limited class packages", "A set number of classes per month"],
  ["Multi-class passes", "5-, 10- or 20-class packs with expiry"],
  ["Drop-in sessions", "A single class"],
  ["Introductory offers", "New-student specials with eligibility rules"],
  ["Renewal tracking", "Reminders and auto-renewal where agreed"],
  ["Expiration dates", "Credits and passes that expire on schedule"],
];

export const instructorPoints = [
  ["Instructor profiles", "Styles, certifications, bios"],
  ["Class assignments", "By style and level"],
  ["Availability", "And time off"],
  ["Substitute instructors", "Requests, approvals and student notifications"],
  ["Training schedules", "For teacher-training programs"],
  ["Instructor coordination", "Schedule views and messages"],
  ["Access permissions", "Instructors see their own classes and rosters"],
] as const;

export const attendancePoints = [
  ["Attendance records", "Per student and class"],
  ["Class participation", "Trends"],
  ["Check-in workflows", "Desk, tablet kiosk or QR code"],
  ["Class package usage", "Credits deducted at check-in or booking"],
  ["Student history", "Classes taken, favorite styles and instructors"],
  ["Attendance reporting", "For owners and instructors"],
] as const;

export const workshopPoints = [
  ["Workshop registrations", "With limits and pricing"],
  ["Special events", "Community classes, holiday sessions"],
  ["Yoga retreats", "Deposits, installment payments, room choices"],
  ["Teacher training programs", "Multi-week schedules, attendance requirements, materials"],
  ["Registration limits", "And waitlists"],
  ["Event schedules", "Published alongside regular classes"],
  ["Payments", "For one-off programs"],
  ["Participant communication", "Pre-event information and follow-ups"],
] as const;

export const onlinePoints = [
  ["In-person classes", "With room capacity"],
  ["Virtual classes", "With secure access for booked students"],
  ["Livestream sessions", "Through integrated video platforms"],
  ["Recorded content access", "For members, where offered"],
  ["Online bookings", "Across formats"],
  ["Hybrid schedules", "That show in-studio and online options together"],
  ["Digital student experiences", "One account for every format"],
] as const;

export const billingPoints = [
  "Membership payments, recurring or upfront",
  "Class package purchases",
  "Drop-in payments, online or at the desk",
  "Private session charges",
  "Workshop and retreat payments, including deposits",
  "Invoices and receipts",
  "Payment records per student",
  "Renewal billing",
  "Outstanding balances and reminders",
];

export const portalPoints = [
  "Student login with secure authentication",
  "Class booking and waitlists",
  "Membership status and renewal date",
  "Class package balance",
  "Booking history",
  "Profile management and waiver status",
  "Notifications for bookings, waitlists and changes",
  "Mobile-friendly access through the web or an app",
];

export const reportRows = [
  ["Class attendance", "Students per class over time"],
  ["Class utilization", "Fill rate vs. capacity, waitlist demand"],
  ["Membership activity", "Active, new, lapsed and frozen plans"],
  ["Student retention", "Return rate of new students, visit frequency"],
  ["Revenue summaries", "By plan type, workshops and private sessions"],
  ["Instructor schedules", "Classes taught and substitutions"],
  ["Booking trends", "Peak times, popular styles"],
  ["Workshop participation", "Registrations and attendance"],
];

export const businessRows = [
  ["Independent yoga teachers", "Simple schedule, bookings, packs, private sessions, payments"],
  ["Small yoga studios", "Recurring classes, memberships, waitlists, check-in"],
  ["Boutique yoga studios", "Premium experience, capacity limits, mat selection, branded app"],
  ["Multi-instructor studios", "Instructor schedules, substitutes, permissions"],
  ["Yoga academies", "Teacher-training programs, cohorts, attendance requirements"],
  ["Yoga and meditation centers", "Mixed classes, workshops, donation-based sessions"],
  ["Wellness centers", "Yoga plus other services and appointments"],
  ["Yoga retreat businesses", "Retreat registration, deposits, accommodation choices"],
  ["Online yoga businesses", "Virtual classes, on-demand content, subscriptions"],
  ["Hybrid yoga studios", "Combined in-person and online schedules and plans"],
  ["Multi-location yoga businesses", "Location schedules, shared plans, consolidated reports"],
];

export const gymRows = [
  ["Center of operations", "Class schedule and bookings", "Open-access facility and front desk"],
  ["Key constraints", "Class capacity, waitlists, instructors", "Door access, equipment, opening hours"],
  ["Plans", "Memberships, class packs, drop-ins, workshops", "Membership dues and freezes"],
  ["Special programs", "Workshops, retreats, teacher training", "Personal training, amenities"],
];

export const cloudRows = [
  ["Accessibility", "Students book anywhere; staff manage anywhere", "Mainly in the studio"],
  ["Hosting", "Managed hosting", "Studio-owned servers"],
  ["Infrastructure", "Internet access only", "Servers, backups, IT support"],
  ["Data management", "Central across rooms and locations", "Local"],
  ["Maintenance", "Managed updates", "Studio responsibility"],
  ["Scalability", "Add classes, students and locations easily", "Hardware-bound"],
  ["Online classes", "Natural fit", "Difficult"],
];

export const readyVsCustomRows = [
  ["Capabilities", "Standard booking and plans", "Exactly your workflows"],
  ["Booking rules", "Vendor's options", "Yoga-specific rules: windows, late cancels, spot selection"],
  ["Membership models", "Common types", "Any combination of plans and offers"],
  ["Instructor management", "Basic", "Substitutes, training cohorts, permissions"],
  ["Dashboards", "Standard", "Built for owners and instructors"],
  ["Student portal and app", "Vendor-branded", "Your brand"],
  ["Integrations", "Vendor's list", "Your payment, video, email and accounting tools"],
];

export const deliverables = [
  "Requirement discovery with owners and instructors",
  "Studio workflow analysis: booking, plans, check-in, workshops",
  "UI/UX design for owner, instructor and student experiences",
  "Custom web applications for studio administration and booking",
  "Database architecture for students, classes, rooms, plans and credits",
  "Booking and scheduling modules with capacity and waitlists",
  "Membership workflows for plans, packs and renewals",
  "Student portals with self-service",
  "Mobile app development (cross-platform)",
  "API integrations with payments, video, email and accounting",
  "Testing: booking-conflict, waitlist, payment-flow and user acceptance testing",
  "Deployment and data migration",
  "Maintenance and enhancements",
];

export const benefits = [
  "More organized studio operations",
  "Centralized student records",
  "Better class scheduling visibility",
  "More convenient booking for students",
  "Easier membership and pack administration",
  "More structured instructor coordination",
  "Better payment visibility",
  "More accessible reporting",
  "Less manual admin, so more time for teaching",
];

export const chooseChecklist = [
  "Studio size, number of rooms and locations",
  "Number of students and instructors",
  "Class scheduling and recurring classes",
  "Waitlists and class capacity rules",
  "Membership plans and class packages",
  "Payments, including workshops and retreats",
  "Student portal and self-service",
  "Online and hybrid classes",
  "Reporting you'll actually use",
  "Integrations: payments, video, email, accounting",
  "Mobile usability for students and staff",
  "Data security and waiver records",
  "Scalability and customization",
  "Support and maintenance",
];

export const whyClickmasters = [
  ["Custom web, mobile and AI products", "For US businesses, from a remote-first team."],
  ["A fitness product suite", "Yoga studio, booking and scheduling, membership, gym, fitness club, personal trainer and sports club software, so connected needs are designed together."],
  ["Web application development", "For customer portals and booking systems."],
  ["Cross-platform mobile apps", "For iOS and Android, with push notifications."],
  ["Subscription billing integration", "Stripe subscription management and webhook processing."],
  ["Booking-platform QA experience", "A published case study of end-to-end QA on a multi-tenant booking SaaS, covering regression, load and payment-flow testing."],
  ["Transparent scoping", "Scope, timeline and quote are agreed before development starts."],
] as const;

export const processSteps = [
  ["Requirement discovery", "Classes, plans, instructors, programs, locations."],
  ["Workflow analysis", "Booking, waitlists, check-in, payments, workshops."],
  ["Solution architecture", "Data model, integrations, hosting."],
  ["UI/UX design", "Owner, instructor and student experiences."],
  ["Software development", "Platform, portal and app in iterative sprints."],
  ["Integrations", "Payments, video, email, accounting."],
  ["Quality assurance", "Booking, waitlist, payment-flow and user acceptance testing."],
  ["Deployment", "Migration of students, plans and credits."],
  ["Training", "For owners and instructors."],
  ["Ongoing maintenance", "And enhancements."],
] as const;

export const costFactors = [
  "Number of students",
  "Number of instructors",
  "Number of studio locations and rooms",
  "Booking complexity: waitlists, spot selection, policies",
  "Membership modules: plans, packs, intro offers, renewals",
  "Online class requirements",
  "Mobile applications",
  "Integrations",
  "Hosting and maintenance",
];

export const ysFaqs = [
  { question: "What is yoga studio management software?", answer: "It's a business system for yoga studios that manages class schedules, student bookings, capacity and waitlists, instructors, memberships and class packs, check-in, workshops, payments and reporting." },
  { question: "How does yoga studio management software work?", answer: "The studio sets up rooms, classes and plans. Students register, buy a plan and book classes online, check in on arrival so credits are used automatically, and the owner reviews attendance and revenue reports." },
  { question: "What features should yoga studio software include?", answer: "Recurring class scheduling, online booking, capacity and waitlists, instructor management, memberships, class packs and drop-ins, check-in, workshops and retreats, payments, a student portal and reporting." },
  { question: "Can yoga studios manage class schedules online?", answer: "Yes. Recurring weekly schedules, holiday exceptions and substitutions can be managed online and published to the website or app automatically." },
  { question: "Can students book yoga classes online?", answer: "Yes. Students can reserve spots within booking windows, cancel within your policy and join waitlists from a portal or phone." },
  { question: "Can yoga software manage memberships and class packages?", answer: "Yes. Monthly and annual memberships, unlimited plans, class packs, intro offers and drop-ins can be configured, with automatic credit tracking and expiry." },
  { question: "Can yoga studio software manage instructors?", answer: "Yes. Instructor profiles, availability, class assignments, substitute requests and permissions can all be managed in the system." },
  { question: "Does yoga software support waitlists?", answer: "It can. Waitlists can promote students automatically when spots open, notify them and update class rosters." },
  { question: "Can yoga studios track student attendance?", answer: "Yes. Check-ins are linked to bookings, so attendance history and class participation are recorded for every student." },
  { question: "Can the software manage workshops and retreats?", answer: "Yes. Workshops, retreats and teacher-training programs can have their own registration limits, schedules, deposits and payments." },
  { question: "Can yoga studio software support online classes?", answer: "Yes, through integration with video platforms. The studio system manages bookings, access and plans for virtual and hybrid classes." },
  { question: "Is yoga studio software suitable for small studios?", answer: "Yes. Small studios can start with scheduling, booking, packs and payments, then add waitlists, workshops and apps as they grow." },
  { question: "Can independent yoga instructors use studio management software?", answer: "Yes. Independent teachers can use a simplified setup for their classes, private sessions, packs and payments." },
  { question: "What is the difference between yoga studio and gym management software?", answer: "Yoga studio software centers on class schedules, capacity, waitlists, instructors and class packs. Gym software centers on facility access, check-in and membership dues." },
  { question: "Can yoga studio software manage multiple locations?", answer: "Yes. Each location can have its own rooms, schedule and instructors, with shared or location-specific plans and consolidated reporting." },
  { question: "How much does custom yoga studio software cost?", answer: "It depends on students, instructors, locations, booking complexity, membership modules, online classes, mobile apps, integrations, hosting and maintenance. A quote follows a scoping phase." },
  { question: "Can yoga studio management software include a mobile app?", answer: "Yes. A branded iOS and Android app, or a mobile-friendly web app, can handle bookings, waitlists, plans and notifications." },
  { question: "Can a yoga studio build custom management software?", answer: "Yes. Studios with specific booking rules, programs, branding or integrations often commission a custom system they own and can extend over time." },
];
