// Content for /products/fitness-sports-management/fitness-booking-and-scheduling-software.
// FAQ text is reused verbatim by the FAQPage JSON-LD, so edit both together.
// Primary keyword: "fitness booking and scheduling software".
// Secondary: fitness booking software, fitness scheduling software, fitness class scheduling software,
// fitness center scheduling software, fitness studio booking software, gym booking system,
// personal training scheduling software, class booking software, online fitness class booking.

export const FB_PATH = "/products/fitness-sports-management/fitness-booking-and-scheduling-software";

export const fbTitle = "Fitness Booking and Scheduling Software for Gyms & Studios";

export const fbDescription =
  "Custom fitness booking and scheduling software for gyms and studios: online class booking, trainer appointments, room capacity, waitlists and reminders.";

export const fbOgTitle = "Fitness Booking & Scheduling Software for Gyms, Studios & Trainers";
export const fbOgDescription =
  "Online class booking, personal training appointments, room and capacity control, waitlists, cancellations and reminders on one calendar, built around your facility.";

export const PRODUCT_NAME = "Fitness Booking & Scheduling Software";
export const INDUSTRY_SLUG = "fitness-sports-management";
export const INDUSTRY_LABEL = "Fitness & Sports Management";

export type LinkSpec = { anchor: string; href: string };

/** The in-body contextual links on the page (navigation, breadcrumb and related products are separate). */
export const fbLinks = {
  pillar: { anchor: "fitness & sports management software", href: "/products/fitness-sports-management" },
  gym: {
    anchor: "gym management software",
    href: "/products/fitness-sports-management/gym-management-software",
  },
  yoga: {
    anchor: "yoga studio management software",
    href: "/products/fitness-sports-management/yoga-studio-management-software",
  },
  trainer: {
    anchor: "personal trainer management software",
    href: "/products/fitness-sports-management/personal-trainer-management-software",
  },
  webApp: {
    anchor: "web application development",
    href: "/web-development/web-application-development",
  },
  caseStudy: {
    anchor: "pre-launch QA for a SaaS booking platform",
    href: "/case-studies/pre-launch-qa-for-a-saas-booking-platform",
  },
} satisfies Record<string, LinkSpec>;

const dir = "/products/fitness-booking";
const img = (file: string, alt: string, width = 1440, height = 900) => ({ src: `${dir}/${file}`, width, height, alt });

export const fbImages = {
  dashboard: img(
    "fitness-booking-scheduling-software-dashboard.svg",
    "Fitness booking and scheduling software dashboard showing today's bookings, class fill rates, waitlists and open slots",
  ),
  calendar: img(
    "fitness-class-scheduling-calendar.svg",
    "Weekly fitness class scheduling calendar with classes by room, instructor and remaining capacity",
  ),
  app: img(
    "online-fitness-class-booking-app.svg",
    "Online fitness class booking app showing the class list, spot selection and booking confirmation on a phone",
  ),
  trainer: img(
    "personal-training-appointment-scheduling.svg",
    "Personal training appointment scheduling view with trainer availability, booked sessions and open slots",
  ),
  rooms: img(
    "fitness-center-room-capacity-scheduling.svg",
    "Fitness center scheduling timeline for studios, courts and pools with room utilization and capacity",
  ),
  waitlist: img(
    "fitness-class-waitlist-cancellation-management.svg",
    "Waitlist and cancellation workflow where a cancelled spot is offered to the next waitlisted member automatically",
  ),
  rules: img(
    "fitness-booking-rules-policy-settings.svg",
    "Booking rules settings with booking window, cancellation cutoff, late-cancel fee and credit rules",
  ),
  checkin: img(
    "fitness-class-check-in-attendance.svg",
    "Class check-in screen with booked members, attendance status and no-show flags",
  ),
  reminders: img(
    "fitness-booking-reminders-notifications.svg",
    "Automated booking confirmation, reminder and waitlist notification flow by email, SMS and push",
  ),
  analytics: img(
    "fitness-booking-analytics-reporting.svg",
    "Fitness booking analytics with fill rate by class, peak booking hours and no-show trends",
  ),
  og: img(
    "fitness-booking-scheduling-software-og.png",
    "Illustrative concept of a fitness booking and scheduling software dashboard",
    1200,
    750,
  ),
};

export const whatItManages = [
  ["Classes", "Group classes with times, rooms, instructors, levels and capacity"],
  ["Appointments", "Personal training, assessments, consultations and private sessions"],
  ["Resources", "Studios, courts, pools, lanes, equipment and treatment rooms"],
  ["Staff", "Instructor and trainer availability, assignments and substitutes"],
  ["Bookings", "Reservations, waitlists, cancellations, late cancels and no-shows"],
  ["Entitlements", "Memberships, class credits, packs and drop-in payments used to book"],
  ["Communication", "Confirmations, reminders, waitlist offers and schedule changes"],
  ["Insight", "Fill rates, peak times, attendance, no-shows and utilization"],
] as const;

export const challengeRows = [
  ["Phone and DM bookings", "Staff spend hours confirming spots by hand", "24/7 online self-booking from web or app"],
  ["Double bookings", "Two members booked into one bike or one trainer", "Real-time capacity and conflict checks"],
  ["Overfull classes", "More people than the room or equipment allows", "Capacity set per class, room and resource"],
  ["Empty spots after cancellations", "Late cancels leave paid spots unused", "Waitlists that promote the next member automatically"],
  ["No-shows", "Booked members never arrive", "Reminders, no-show tracking and policy fees"],
  ["Trainer availability", "Back-and-forth messages to find a time", "Live availability and bookable time slots"],
  ["Room conflicts", "Two classes scheduled into one studio", "Room-aware scheduling across the center"],
  ["Schedule changes", "Members miss cancellations and substitutions", "Automatic notifications to everyone booked"],
  ["Credit tracking", "Class packs miscounted or used after expiry", "Credits deducted and checked at booking"],
  ["Reporting", "No clear view of which classes and times fill", "Fill-rate, peak-time and attendance reports"],
];

export type FbFeature = { title: string; icon: string; text: string; value?: string; solves?: string };

export const features: FbFeature[] = [
  { title: "Online Class Booking", icon: "CalendarCheck", text: "Members book group fitness classes from the website, a member portal or a mobile app, any time of day.", value: "Fewer phone calls and DMs to the front desk." },
  { title: "Fitness Class Scheduling", icon: "CalendarDays", text: "Build the timetable by class type, level, room, instructor, duration and capacity.", value: "One accurate schedule for staff and members." },
  { title: "Recurring Class Templates", icon: "Repeat", text: "Weekly recurring classes with exceptions for holidays, special events and seasonal timetables.", solves: "Rebuilding the schedule every week." },
  { title: "Personal Training Appointment Scheduling", icon: "UserRound", text: "Clients book one-to-one or small-group sessions into each trainer's real availability.", solves: "Back-and-forth messages to find a time." },
  { title: "Trainer and Instructor Availability", icon: "CalendarClock", text: "Working hours, time off, breaks, buffers between sessions and the services each person can deliver.", value: "Bookings only land where staff can actually work." },
  { title: "Room and Resource Scheduling", icon: "Building2", text: "Studios, courts, pools, lanes and equipment are bookable resources with their own calendars and limits.", solves: "Two classes in one room." },
  { title: "Capacity Management", icon: "LayoutGrid", text: "Capacity per class, room and resource, with optional spot or equipment selection such as bike or rower numbers.", solves: "Overcrowded classes." },
  { title: "Waitlist Management", icon: "ListOrdered", text: "Full classes take a waitlist; when someone cancels, the next member is promoted or offered the spot automatically.", value: "Fuller classes from the same schedule." },
  { title: "Cancellation and Late-Cancel Policies", icon: "XCircle", text: "Cancellation cutoffs, late-cancel windows, credit returns and optional fees applied consistently.", solves: "Policy decided case by case at the desk." },
  { title: "No-Show Tracking", icon: "UserX", text: "Booked members who don't check in are flagged, counted and handled according to your policy.", value: "Fewer wasted spots over time." },
  { title: "Booking Windows and Rules", icon: "SlidersHorizontal", text: "How far ahead each plan can book, booking cutoffs before class, weekly booking limits and priority booking.", value: "Fair access to popular classes." },
  { title: "Memberships, Credits and Packs at Booking", icon: "Ticket", text: "The system checks membership status, class credits or a drop-in payment before confirming a booking.", solves: "Members booking on expired plans." },
  { title: "Drop-In and Guest Booking", icon: "DoorOpen", text: "Non-members pay for a single class or a trial session while booking.", value: "An easy first visit for new customers." },
  { title: "Automated Confirmations and Reminders", icon: "BellRing", text: "Email, SMS or push confirmations, reminders before class and alerts for schedule changes.", solves: "Forgotten bookings and no-shows." },
  { title: "Check-In and Attendance", icon: "QrCode", text: "Check-in by QR code, tablet kiosk or instructor roster, linked to each booking.", value: "Attendance recorded without paper sign-in sheets." },
  { title: "Class Rosters for Instructors", icon: "ClipboardCheck", text: "Instructors see who is booked, who is new, who is on the waitlist and any notes before class starts.", value: "Better-prepared sessions." },
  { title: "Substitute Instructor Workflow", icon: "RefreshCw", text: "Request, approve and publish substitutes, with booked members notified of the change.", solves: "Last-minute substitute searches." },
  { title: "Virtual and Hybrid Class Booking", icon: "Video", text: "Online and livestream classes listed alongside in-person sessions, with access links sent to booked members.", value: "One booking flow for every format." },
  { title: "Embeddable Booking Widget", icon: "Globe", text: "The live schedule and booking flow embedded on your existing website.", value: "Members book without leaving your site." },
  { title: "Member Portal and Mobile Booking", icon: "Smartphone", text: "Members manage bookings, waitlists, credits and their profile from a phone.", value: "Self-service instead of front-desk tasks." },
  { title: "Payments at Booking", icon: "Wallet", text: "Card payments for drop-ins, packs, appointments and events through your chosen payment gateway.", value: "Paid bookings without a separate tool." },
  { title: "Calendar Sync", icon: "CalendarPlus", text: "Bookings added to members' and trainers' personal calendars, where the integration is scoped.", solves: "Missed sessions from calendar clashes." },
  { title: "Multi-Location Scheduling", icon: "MapPin", text: "Each location keeps its own rooms, staff and timetable, with shared memberships and combined reporting.", value: "Growth without separate systems." },
  { title: "Booking Analytics and Reports", icon: "BarChart3", text: "Fill rates, peak times, waitlist demand, cancellations, no-shows and trainer utilization.", value: "Schedule decisions based on data." },
];

export const howItWorks = [
  ["Facility setup", "Locations, rooms, resources, opening hours and booking policies."],
  ["Staff setup", "Instructors and trainers, the services they deliver and their availability."],
  ["Schedule creation", "Recurring classes and bookable appointment slots with capacity."],
  ["Member access", "Members sign in; their plan, credits or payment decide what they can book."],
  ["Online booking", "The member picks a class or slot and books, or joins the waitlist when it is full."],
  ["Confirmation", "Instant confirmation, plus a calendar invite and a reminder before the session."],
  ["Changes and cancellations", "Cancellations follow your cutoff rules and freed spots go to the waitlist."],
  ["Check-in", "The member checks in and attendance is recorded against the booking."],
  ["No-shows and fees", "Missed bookings are flagged and handled by your policy."],
  ["Reporting", "Managers review fill rates, peak times and utilization to adjust the schedule."],
] as const;

export const classSchedulingPoints = [
  ["Class types and levels", "HIIT, cycling, strength, Pilates, yoga, aqua, boxing and more"],
  ["Recurring timetables", "Weekly templates with holiday and seasonal exceptions"],
  ["Room assignment", "Each class tied to a room, studio or pool lane"],
  ["Instructor assignment", "With availability checks and substitute handling"],
  ["Capacity limits", "Per class, room or equipment count"],
  ["Spot selection", "Optional bike, rower, reformer or mat numbers"],
  ["Booking windows", "Open dates and cutoffs per plan or class"],
  ["Published schedule", "Website, portal and app always show the live timetable"],
] as const;

export const trainerPoints = [
  ["Bookable services", "PT sessions, assessments, nutrition consults, small groups"],
  ["Session lengths", "30, 45, 60 minutes or custom, with buffers between bookings"],
  ["Trainer availability", "Working hours, breaks and time off per trainer"],
  ["Location and room", "Sessions tied to a gym floor area, studio or online"],
  ["Session packages", "Credits deducted when a session is booked or completed"],
  ["Rescheduling rules", "How late a client can move or cancel a session"],
] as const;

export const resourcePoints = [
  ["Studios and rooms", "Group exercise, cycle, mind-body and functional rooms"],
  ["Courts and lanes", "Tennis, padel, squash, basketball courts and pool lanes"],
  ["Equipment", "Reformers, bikes, racks or other limited equipment"],
  ["Shared spaces", "Recovery rooms, saunas or treatment rooms"],
  ["Conflict checks", "No double use of a room, resource or staff member"],
  ["Utilization", "How full each room is by hour and by day"],
] as const;

export const policyRows = [
  ["Booking window", "How far in advance members can book, for example 7 days, or 14 days for premium plans"],
  ["Booking cutoff", "When booking closes before a class starts"],
  ["Cancellation cutoff", "The latest time a member can cancel and get the credit back"],
  ["Late-cancel rule", "Credit lost or fee charged after the cutoff, if your terms allow it"],
  ["No-show rule", "What happens when a booked member does not check in"],
  ["Waitlist promotion", "Automatic booking or a time-limited offer to the next person"],
  ["Booking limits", "Maximum active bookings or classes per week by plan"],
  ["Eligibility", "Which memberships, packs or drop-ins can book each class or service"],
];

export const notificationPoints = [
  "Booking confirmations by email, SMS or push",
  "Reminders before each class or appointment",
  "Waitlist promotion and spot-offer alerts",
  "Cancellation and class-change notices",
  "Substitute instructor announcements",
  "Low credit and pack expiry reminders",
  "Instructor roster updates",
  "Follow-ups after a first class or trial session",
];

export const reportRows = [
  ["Class fill rate", "Bookings vs. capacity per class, time and instructor"],
  ["Peak booking times", "Which days and hours sell out first"],
  ["Waitlist demand", "Classes that regularly need more capacity"],
  ["Cancellations and no-shows", "Rates by class, member and plan"],
  ["Attendance", "Check-ins over time per member, class and location"],
  ["Trainer utilization", "Booked hours vs. available hours per trainer"],
  ["Room utilization", "How each room, court or resource is used across the week"],
  ["Booking revenue", "Drop-ins, appointments, packs and events"],
];

export const businessRows = [
  ["Gyms and health clubs", "Class booking, PT appointments, room capacity, member check-in"],
  ["Boutique fitness studios", "Spot selection, strict capacity, late-cancel fees, waitlists"],
  ["Cycling, rowing and HIIT studios", "Bike or rower booking by number, high-demand class windows"],
  ["Pilates and reformer studios", "Equipment-based capacity, small classes, private sessions"],
  ["Yoga studios", "Recurring classes, class packs, workshops, waitlists"],
  ["Personal trainers and PT studios", "Appointment slots, packages, rescheduling rules"],
  ["CrossFit and functional boxes", "Class caps, coach schedules, open-gym bookings"],
  ["Swim schools and leisure centers", "Pool lanes, lessons, courts and multi-activity scheduling"],
  ["Martial arts and dance schools", "Classes by belt or level, term schedules, trial classes"],
  ["Multi-location fitness brands", "Location timetables, shared plans, consolidated reporting"],
];

export const compareRows = [
  ["Main job", "Book classes, appointments and resources", "Run the whole facility"],
  ["Core records", "Schedule, bookings, waitlists, attendance", "Members, access, billing, staff, inventory"],
  ["Best for", "Studios and gyms whose bottleneck is scheduling", "Facilities that need one system for everything"],
  ["Connects to", "Membership, billing and access systems", "Includes booking as one module"],
];

export const readyVsCustomRows = [
  ["Booking rules", "The vendor's options", "Your exact windows, cutoffs, fees and priorities"],
  ["Class and appointment types", "Standard templates", "Any mix of classes, PT, courts, pools and events"],
  ["Member experience", "Vendor-branded app or widget", "Your brand on web and mobile"],
  ["Integrations", "The vendor's list", "Your payment, access control, CRM, calendar and accounting tools"],
  ["Pricing model", "Per-location or per-member subscription", "Build cost plus hosting and maintenance you control"],
  ["Data ownership", "Stored in the vendor's platform", "Your database and your exports"],
];

export const deliverables = [
  "Discovery workshops with owners, managers, trainers and front-desk staff",
  "Booking workflow analysis: classes, appointments, resources, waitlists and policies",
  "UI/UX design for members, instructors, trainers and administrators",
  "Booking engine with real-time capacity, conflict checks and waitlists",
  "Class timetable and appointment scheduling modules",
  "Member portal and embeddable booking widget for your website",
  "iOS and Android booking apps from one codebase",
  "Payment gateway integration for drop-ins, packs and appointments",
  "Email, SMS and push notification workflows",
  "Integrations with membership, access control, calendar, CRM and accounting tools",
  "Testing for booking conflicts, concurrency, waitlist promotion and payment flows",
  "Data migration from your current booking tool, deployment and staff training",
  "Ongoing maintenance and feature enhancements",
];

export const benefits = [
  "Members can book classes and sessions any time, on any device",
  "Less time spent on phone, email and DM bookings",
  "Fewer double bookings and overfull classes",
  "Cancelled spots refilled from the waitlist",
  "Clear trainer and room availability for staff",
  "Consistent cancellation and no-show policies",
  "Better data on which classes and times perform",
  "A schedule that scales to new rooms, staff and locations",
];

export const chooseChecklist = [
  "Class booking and appointment scheduling in one calendar",
  "Room, court and equipment capacity rules",
  "Waitlists with automatic promotion",
  "Cancellation, late-cancel and no-show policies",
  "Booking windows and limits by membership plan",
  "Member portal, booking widget and mobile app",
  "Payments for drop-ins, packs and sessions",
  "Email, SMS and push reminders",
  "Check-in and attendance tracking",
  "Multi-location support",
  "Integrations with your existing tools",
  "Reporting on fill rate, peaks and no-shows",
  "Performance under peak booking load",
  "Data ownership, security and support",
];

export const whyClickmasters = [
  ["Custom web, mobile and AI products", "Built for US businesses by a remote-first team."],
  ["A connected fitness product suite", "Booking and scheduling, gym, fitness club, membership, personal trainer, yoga studio and sports club software, designed to work together."],
  ["Booking-platform QA experience", "A published case study covering end-to-end QA of a multi-tenant booking SaaS: regression, load and payment-flow testing."],
  ["Web application development", "Member portals, booking engines and admin dashboards on modern stacks."],
  ["Cross-platform mobile apps", "iOS and Android booking apps with push notifications."],
  ["Subscription billing integration", "Stripe subscription management and webhook processing."],
  ["Transparent scoping", "Scope, timeline and quote are agreed before development starts."],
] as const;

export const processSteps = [
  ["Discovery", "Classes, appointments, rooms, staff, locations and policies."],
  ["Workflow mapping", "Booking, waitlist, cancellation, check-in and payment flows."],
  ["Architecture", "Data model, booking engine, concurrency and integrations."],
  ["UI/UX design", "Member, instructor, trainer and admin experiences."],
  ["Development", "Booking engine, portal, widget and apps in iterative sprints."],
  ["Integrations", "Payments, notifications, calendars, access and accounting."],
  ["Quality assurance", "Conflict, load, waitlist, payment and acceptance testing."],
  ["Launch", "Data migration, schedule import and go-live support."],
  ["Training", "For managers, front desk, instructors and trainers."],
  ["Maintenance", "Monitoring, updates and new features."],
] as const;

export const costFactors = [
  "Number of locations, rooms and bookable resources",
  "Class booking, appointment scheduling or both",
  "Waitlist, policy and booking-rule complexity",
  "Member portal, booking widget and mobile apps",
  "Payment and membership integrations",
  "Notification channels: email, SMS, push",
  "Access control, calendar and accounting integrations",
  "Expected peak booking volume",
  "Data migration from your current system",
  "Hosting, support and maintenance",
];

export const fbFaqs = [
  { question: "What is fitness booking and scheduling software?", answer: "Fitness booking and scheduling software lets members book classes, personal training sessions and facility resources online, while staff manage the timetable, trainer availability, room capacity, waitlists, cancellations and check-in from one calendar." },
  { question: "How does fitness booking software work?", answer: "The facility sets up rooms, staff, classes and booking rules. Members sign in from the website, portal or app, book a class or appointment that their plan or credits allow, receive a confirmation and reminder, then check in so attendance is recorded." },
  { question: "What is fitness class scheduling software?", answer: "Fitness class scheduling software builds and publishes the group class timetable: the class, the instructor, the room, the time and the capacity. It handles recurring classes, substitutions and changes, and keeps the live schedule in sync with bookings." },
  { question: "What does fitness center scheduling software cover?", answer: "Fitness center scheduling software covers rooms, courts, pools, equipment and staff across the whole center, so classes, personal training and resource bookings never conflict and managers can see utilization by space and by hour." },
  { question: "Is fitness studio booking software different from gym software?", answer: "Fitness studio booking software focuses on class capacity, spot selection, waitlists and late-cancel rules for boutique studios. Gym management software covers the whole facility, including access control, membership billing and staff. Many businesses use both, connected." },
  { question: "Can members book classes online from a phone?", answer: "Yes. Members can book through a mobile-friendly portal, an embedded widget on your website or a branded iOS and Android app, and manage bookings, waitlists and credits themselves." },
  { question: "Can the software schedule personal training appointments?", answer: "Yes. Trainers set their availability and the services they offer, and clients book open time slots. Session packages, buffers between sessions and rescheduling rules can all be applied." },
  { question: "How do waitlists work in fitness booking software?", answer: "When a class is full, members can join a waitlist. If someone cancels, the next person is either booked automatically or offered the spot for a limited time, and both are notified." },
  { question: "Can the system enforce cancellation and no-show policies?", answer: "Yes. Cancellation cutoffs, late-cancel windows, credit returns, no-show flags and optional fees can be configured and applied the same way for every member, in line with your membership terms." },
  { question: "Can it manage rooms, courts and equipment capacity?", answer: "Yes. Rooms, courts, pool lanes and limited equipment such as bikes or reformers can be bookable resources with their own capacity, so the system blocks double bookings and overfilled classes." },
  { question: "Does fitness scheduling software send reminders?", answer: "It can send booking confirmations, reminders before each session, waitlist offers and schedule-change alerts by email, SMS or push notification, depending on the providers chosen during scoping." },
  { question: "Can it integrate with our membership, payment and access systems?", answer: "Yes. A custom system can connect to your membership platform, payment gateway, door access control, calendars, CRM and accounting tools through their APIs, so booking eligibility and payments stay in sync." },
  { question: "Can fitness booking software handle multiple locations?", answer: "Yes. Each location can have its own rooms, staff and timetable, members can book across locations if their plan allows, and owners get consolidated reporting." },
  { question: "Should we buy ready-made booking software or build a custom system?", answer: "Ready-made tools suit standard workflows and fast setup. A custom system suits businesses with specific booking rules, multiple service types, their own brand and app, or integrations a vendor cannot support, and you own the platform and data." },
  { question: "How much does custom fitness booking and scheduling software cost?", answer: "Cost depends on locations, resources, booking rules, apps, integrations, notification channels, peak booking volume and data migration. Clickmasters agrees scope, timeline and a quote before development starts." },
  { question: "How long does it take to build fitness booking software?", answer: "Timelines depend on scope. A focused first release covering class booking, waitlists and reminders is shorter than a multi-location platform with apps and integrations. The timeline is set during scoping." },
];
