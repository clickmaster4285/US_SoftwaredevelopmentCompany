// Content for /products/education-management-software/course-management-platform.
// Primary keyword: "course management platform".
// Secondary: online course platform, course selling platform, course marketplace software, sell courses online,
// course catalog management, learner enrollment, drip content, course subscriptions, academy platform,
// white-label course platform.
// FAQ text is reused verbatim by the FAQPage JSON-LD.
import type { ProductPageData } from "./product-seo-types";

const dir = "/products/course-platform";
const img = (file: string, alt: string, width = 1440, height = 900) => ({ src: `${dir}/${file}`, width, height, alt });

const page: ProductPageData = {
  path: "/products/education-management-software/course-management-platform",
  title: "Course Management Platform to Sell & Run Online Courses",
  description:
    "Custom course management platform to publish, sell and run online courses: catalog, checkout, subscriptions, drip content, certificates and analytics.",
  ogTitle: "Custom Course Management Platform: Sell, Deliver and Grow Online Courses",
  ogDescription:
    "Course catalog, landing pages, checkout, subscriptions, coupons, drip content, instructors and revenue share, certificates and sales analytics on a white-label platform you own.",
  productName: "Course Management Platform",
  industrySlug: "education-management-software",
  industryLabel: "Education Management Software",
  theme: { accent: "#db2777", dark: "#2a0a1c", soft: "#fce7f3", border: "#fbcfe8", tint: "#fdf2f8" },
  browserLabel: "academy.example",
  images: {
    dashboard: img("course-management-platform-dashboard.svg", "Course management platform dashboard showing course revenue, new enrollments, active subscribers and completion rates"),
    catalog: img("online-course-catalog-landing-page.svg", "Online course catalog and course landing page with curriculum, instructor, price and enroll button"),
    pricing: img("course-pricing-bundles-coupons.svg", "Course pricing settings with one-time price, subscription plans, bundles and coupon codes"),
    checkout: img("course-checkout-enrollment-flow.svg", "Course checkout and enrollment flow from cart and payment to instant course access and welcome email"),
    drip: img("drip-content-schedule-cohort-course.svg", "Drip content schedule for a cohort-based course with weekly module release dates and live sessions"),
    instructors: img("instructor-revenue-share-payouts.svg", "Instructor management screen with course sales, revenue share percentages and monthly payouts"),
    certificate: img("course-completion-certificate.svg", "Course completion tracking with a branded certificate issued automatically to the learner"),
    analytics: img("course-sales-completion-analytics.svg", "Course analytics with sales by course, conversion funnel, refunds and completion rates"),
    og: img("course-management-platform-og.png", "Illustrative concept of a course management platform dashboard", 1200, 750),
  },
  hero: {
    h1: "Course Management Platform",
    subhead: "Publish, sell and deliver online courses on your own branded platform, from the catalog and checkout to completion and certificates.",
    paragraphs: [
      "A course management platform runs the business side of online learning: the course catalog, landing pages, pricing, checkout, enrollments, drip schedules, instructors, certificates and sales reports. Learners find a course, pay, get instant access and work through it, while your team sees revenue, enrollments and completion in one place.",
      "Clickmasters designs and builds custom, white-label course platforms for US course creators, training companies, associations and academies that have outgrown hosted course tools or need features those tools don't offer.",
    ],
    image: "dashboard",
    caption: "Course revenue, enrollments, subscribers and completion at a glance",
    secondaryCta: { label: "Explore Platform Features", href: "#features" },
  },
  contents: [
    { href: "#what-is-a-course-management-platform", label: "What it is" },
    { href: "#features", label: "Features" },
    { href: "#catalog", label: "Catalog" },
    { href: "#pricing", label: "Pricing & checkout" },
    { href: "#drip-cohorts", label: "Drip & cohorts" },
    { href: "#instructors", label: "Instructors" },
    { href: "#marketing", label: "Marketing" },
    { href: "#analytics", label: "Analytics" },
    { href: "#vs-lms", label: "vs. LMS" },
    { href: "#cost", label: "Cost" },
    { href: "#faq", label: "FAQ" },
  ],
  sections: [
    {
      id: "course-business-problem",
      eyebrow: "The problem",
      title: "When Selling Courses Needs Five Different Tools",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Many course businesses start with a hosted course tool, a separate checkout, an email platform, a community app and a spreadsheet for instructor payouts. It works until it doesn't: learners pay but don't get access, coupons apply to the wrong course, a cohort's next module unlocks a week early, and nobody can say which course earns the most after refunds.",
            "Fees grow with every sale and every learner, branding is limited, and the data about your customers lives in someone else's system. A course management platform built for your business brings catalog, commerce, delivery and reporting together on a platform you own.",
          ],
        },
      ],
    },
    {
      id: "what-is-a-course-management-platform",
      eyebrow: "Definition",
      title: "What Is a Course Management Platform?",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "A **course management platform** is software for publishing, selling, delivering and tracking online courses. It is also called an online course platform, a course selling platform or, when several instructors sell on it, course marketplace software. It manages:",
          ],
        },
        {
          type: "titledList",
          cols: 4,
          items: [
            ["Catalog", "Courses, categories, landing pages, previews and search"],
            ["Commerce", "Prices, subscriptions, bundles, coupons, checkout and refunds"],
            ["Access", "Enrollments, access rules, expiry and drip schedules"],
            ["Delivery", "Lessons, video, downloads, quizzes and assignments"],
            ["Instructors", "Creator profiles, course ownership, revenue share and payouts"],
            ["Community", "Cohorts, discussions, live sessions and announcements"],
            ["Recognition", "Completion tracking, certificates and badges"],
            ["Insight", "Sales, conversion, retention and completion reports"],
          ],
        },
        {
          type: "linkPanel",
          text: "A course platform is one part of the wider family of [education management software](/products/education-management-software). It includes the learning delivery tools of an LMS, plus the storefront and commerce a course business needs.",
        },
      ],
    },
    {
      id: "why-course-platform",
      eyebrow: "Business problems",
      title: "Problems a Course Management Platform Solves",
      blocks: [
        {
          type: "table",
          caption: "Course business challenges, what happens and how a course platform helps",
          headers: ["Challenge", "What happens", "How the platform helps"],
          rows: [
            ["Disconnected tools", "Checkout, course access and email don't talk to each other", "Payment, enrollment and onboarding in one flow"],
            ["Access errors", "Paying learners locked out; refunded learners still inside", "Access granted and revoked automatically"],
            ["Rigid pricing", "No bundles, payment plans or member pricing", "Flexible prices, subscriptions, bundles and coupons"],
            ["Transaction fees", "Platform fees grow with every sale", "Your own platform and payment account"],
            ["Limited branding", "Courses look like the vendor's site", "White-label design on your domain"],
            ["Manual payouts", "Instructor shares calculated in spreadsheets", "Revenue share and payout reports per instructor"],
            ["Cohort timing", "Modules released by hand each week", "Drip schedules tied to start dates"],
            ["Low completion", "Learners buy but never finish", "Progress nudges, reminders and certificates"],
            ["Data ownership", "Customer data locked in a vendor", "Your database and your exports"],
            ["Unclear numbers", "Revenue, refunds and completions in different reports", "One analytics view across sales and learning"],
          ],
        },
      ],
    },
    {
      id: "features",
      eyebrow: "24 capability areas",
      title: "Key Features of a Course Management Platform",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "These are **configurable modules and custom-development options** scoped during discovery, not preinstalled features of a ready-made Clickmasters product. Payment, email and video features depend on the providers you choose.",
          ],
        },
        {
          type: "features",
          items: [
            { title: "Course Catalog Management", icon: "LayoutGrid", text: "Courses organized by category, level, topic and instructor, with search, filters and featured collections.", value: "Learners find the right course quickly." },
            { title: "Course Landing Pages", icon: "Globe", text: "SEO-friendly pages with curriculum, preview lessons, instructor bios, FAQs, reviews and a clear enroll button.", value: "Pages built to convert visitors." },
            { title: "Flexible Pricing", icon: "Ticket", text: "One-time prices, payment plans, free courses, pay-what-you-want and member pricing.", solves: "One price model for every product." },
            { title: "Course Subscriptions and Memberships", icon: "Repeat", text: "Monthly or annual plans that unlock the whole catalog or selected collections.", value: "Recurring revenue from your library." },
            { title: "Bundles and Coupons", icon: "Percent", text: "Course bundles, discount codes, limited-time offers, upsells and order bumps.", value: "Higher order values." },
            { title: "Secure Checkout", icon: "CreditCard", text: "Card, wallet and bank payments through Stripe or another gateway, with tax handling, receipts and invoices.", solves: "Third-party checkout pages." },
            { title: "Automatic Enrollment and Access", icon: "KeyRound", text: "Access granted on payment, revoked on refund or cancellation, with expiry dates where needed.", solves: "Manual access management." },
            { title: "Drip Content", icon: "CalendarClock", text: "Release lessons by date, by days after enrollment or after earlier lessons are complete.", value: "A paced learning experience." },
            { title: "Cohort-Based Courses", icon: "Users", text: "Fixed start dates, cohort groups, live sessions and shared deadlines alongside self-paced content.", value: "Premium programs with higher completion." },
            { title: "Course Player", icon: "MonitorPlay", text: "Video lessons with resume points, downloads, notes, quizzes and a course outline with progress.", value: "A focused learning experience." },
            { title: "Quizzes and Assignments", icon: "ListChecks", text: "Knowledge checks, graded assignments and instructor feedback inside each course.", value: "Proof that learners are learning." },
            { title: "Completion Certificates", icon: "Award", text: "Branded certificates with unique IDs issued automatically when learners finish.", solves: "Certificates created by hand." },
          ],
        },
        { type: "figure", image: "checkout", caption: "From cart and payment to instant course access and a welcome email", variant: "diagram" },
        {
          type: "features",
          start: 12,
          items: [
            { title: "Instructor and Creator Management", icon: "BadgeCheck", text: "Instructor profiles, course ownership, co-authors, approvals and instructor dashboards.", value: "Grow beyond one creator." },
            { title: "Revenue Share and Payouts", icon: "Wallet", text: "Revenue share rules per instructor or course, payout reports and optional automated payouts.", solves: "Payout spreadsheets." },
            { title: "Multi-Instructor Marketplace", icon: "Building2", text: "Instructors apply, publish and sell on your marketplace with moderation and quality review.", value: "A larger catalog without a larger team." },
            { title: "Community and Discussions", icon: "MessageSquare", text: "Course discussions, cohort spaces, Q&A, announcements and member profiles.", value: "Learners stay engaged and come back." },
            { title: "Live Sessions", icon: "Video", text: "Webinars and office hours through Zoom, Teams or Meet, with recordings added to the course.", value: "Live and self-paced in one place." },
            { title: "Email Automation", icon: "Mail", text: "Welcome sequences, abandoned-checkout reminders, progress nudges and renewal notices.", solves: "Learners who buy and never start." },
            { title: "Affiliate and Referral Program", icon: "Network", text: "Affiliate links, commission rules, referral codes and affiliate reporting.", value: "Partners sell for you." },
            { title: "B2B and Team Licenses", icon: "Briefcase", text: "Companies buy seats in bulk, assign courses to employees and see team progress.", value: "Larger contracts from the same courses." },
            { title: "White-Label Branding", icon: "Sparkles", text: "Your design, domain, emails and certificates, with no vendor branding.", value: "A platform that looks like your business." },
            { title: "Mobile App", icon: "Smartphone", text: "Responsive learning experience plus optional iOS and Android apps with offline lessons.", value: "Learners study anywhere." },
            { title: "Reviews and Ratings", icon: "Trophy", text: "Verified learner reviews and ratings shown on course pages, with moderation.", value: "Social proof that sells courses." },
            { title: "Sales and Learning Analytics", icon: "BarChart3", text: "Revenue, refunds, conversion, subscriber churn, enrollments and completion by course.", value: "Decisions based on real numbers." },
          ],
        },
        { type: "cta", label: "Build a Custom Course Management Platform" },
      ],
    },
    {
      id: "how-it-works",
      eyebrow: "Workflow",
      title: "How a Course Management Platform Works",
      blocks: [
        {
          type: "numbered",
          cols: 5,
          items: [
            ["Platform setup", "Brand, domain, payment account, tax and policies."],
            ["Course creation", "Instructors build lessons, quizzes and downloads."],
            ["Publishing", "Landing pages, prices and access rules go live."],
            ["Discovery", "Learners find courses through search, ads, email or affiliates."],
            ["Checkout", "Learners pay once, subscribe or use a coupon."],
            ["Instant access", "Enrollment is created and a welcome email is sent."],
            ["Learning", "Content unlocks on schedule; learners track progress."],
            ["Engagement", "Reminders, community and live sessions keep learners going."],
            ["Completion", "Certificates are issued and reviews requested."],
            ["Reporting", "Revenue, payouts and completion reviewed by course."],
          ],
        },
      ],
    },
    {
      id: "catalog",
      eyebrow: "Storefront",
      title: "Course Catalog Management and Landing Pages",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Your catalog is your storefront. Each course gets a fast, search-friendly landing page with the outcome it promises, the curriculum, preview lessons, the instructor, reviews and a clear price. Collections, categories and filters help learners find the next course after their first one.",
          ],
        },
        {
          type: "titledList",
          cols: 3,
          icon: "LayoutGrid",
          items: [
            ["Categories and tags", "Topics, levels, formats and languages"],
            ["Search and filters", "Find courses by topic, price or length"],
            ["Preview lessons", "Free lessons that show the teaching style"],
            ["Curriculum outline", "Modules and lessons with durations"],
            ["SEO controls", "Titles, descriptions, structured data and clean URLs"],
            ["Collections", "Learning tracks and bundles across courses"],
          ],
        },
        { type: "figure", image: "catalog", caption: "Course catalog and landing page with curriculum, instructor and price" },
      ],
    },
    {
      id: "pricing",
      eyebrow: "Commerce",
      title: "Pricing, Checkout and Course Subscriptions",
      blocks: [
        {
          type: "table",
          caption: "Course pricing models and how they work",
          headers: ["Pricing model", "How it works"],
          rows: [
            ["One-time purchase", "Lifetime or time-limited access to one course"],
            ["Payment plan", "The course price split into installments"],
            ["Subscription", "Monthly or annual access to the catalog or a collection"],
            ["Bundle", "Several courses sold together at one price"],
            ["Coupon or promotion", "Percentage, fixed or limited-time discounts"],
            ["Free and lead-magnet courses", "Free enrollment that captures an email address"],
            ["Team licenses", "Seats bought by a company and assigned to employees"],
          ],
        },
        { type: "figure", image: "pricing", caption: "One-time price, subscription plans, bundles and coupon codes" },
        {
          type: "note",
          text: "Payments run through a payment gateway integration such as Stripe, with tokenized card handling, so card details are not stored on the platform. Clickmasters' integration work includes Stripe subscription management and webhooks for recurring plans.",
        },
      ],
    },
    {
      id: "drip-cohorts",
      eyebrow: "Delivery",
      title: "Drip Content and Cohort-Based Courses",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Not every course should open all at once. Drip content releases modules on a schedule so learners move at a steady pace, and cohort-based courses add a fixed start date, a group of peers, live sessions and shared deadlines. Both can run alongside evergreen, self-paced courses on the same platform.",
          ],
        },
        { type: "figure", image: "drip", caption: "Weekly module releases and live sessions for a cohort-based course" },
        {
          type: "checklist",
          icon: "CalendarClock",
          items: [
            "Release by calendar date or days after enrollment",
            "Unlock after completing earlier lessons",
            "Cohort start dates, enrollment windows and seat limits",
            "Live sessions and office hours on the cohort calendar",
            "Shared deadlines and reminder emails",
            "Evergreen and cohort versions of the same course",
          ],
        },
      ],
    },
    {
      id: "instructors",
      eyebrow: "Creators",
      title: "Instructor Management, Revenue Share and Marketplaces",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "As a course business grows, more people create and sell content. The platform can give every instructor a dashboard for their courses, learners, reviews and earnings, apply revenue share rules automatically, and produce payout reports, or run a full multi-instructor marketplace with applications and quality review.",
          ],
        },
        { type: "figure", image: "instructors", caption: "Course sales, revenue share percentages and monthly instructor payouts" },
        {
          type: "titledList",
          cols: 3,
          icon: "BadgeCheck",
          items: [
            ["Instructor onboarding", "Applications, agreements and approval"],
            ["Course review", "Quality checks before a course goes live"],
            ["Revenue share rules", "Per instructor, per course or per channel"],
            ["Payout reports", "Monthly statements net of refunds and fees"],
            ["Instructor analytics", "Sales, learners, ratings and completion"],
            ["Co-authored courses", "Revenue split between several instructors"],
          ],
        },
      ],
    },
    {
      id: "completion",
      eyebrow: "Outcomes",
      title: "Completion Tracking and Certificates",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Learners who finish a course buy the next one and recommend it. The platform tracks progress through every lesson, nudges learners who stall, and issues a branded certificate with a verification link when they finish.",
          ],
        },
        { type: "figure", image: "certificate", caption: "Completion tracking and an automatically issued certificate", variant: "diagram" },
        {
          type: "linkPanel",
          text: "Need deeper learning features such as SCORM packages, rubric grading or role-based learning paths? See our [learning management system (LMS)](/products/education-management-software/learning-management-system-lms) page.",
        },
      ],
    },
    {
      id: "marketing",
      eyebrow: "Growth",
      title: "Marketing Tools to Sell Courses Online",
      blocks: [
        {
          type: "checklist",
          icon: "Megaphone",
          items: [
            "SEO-friendly course pages and blog",
            "Email sequences and abandoned-checkout recovery",
            "Coupons, flash sales and early-bird pricing",
            "Affiliate and referral programs",
            "Upsells, cross-sells and order bumps",
            "Free preview lessons and lead magnets",
            "Reviews and testimonials on course pages",
            "Analytics and ad-platform conversion tracking",
          ],
        },
        {
          type: "note",
          text: "Email, analytics and ad tracking connect to the providers you choose, configured to respect your privacy policy and consent requirements.",
        },
      ],
    },
    {
      id: "analytics",
      eyebrow: "Insight",
      title: "Course Sales and Completion Analytics",
      blocks: [
        {
          type: "table",
          caption: "Course platform reports and what they show",
          headers: ["Report", "What it shows"],
          rows: [
            ["Revenue", "Gross and net sales by course, plan, coupon and channel"],
            ["Conversion funnel", "Landing page visits, checkouts started and completed"],
            ["Subscriptions", "New, active, cancelled and churned subscribers"],
            ["Refunds", "Refund rate and reasons by course"],
            ["Enrollments", "New learners by course, cohort and source"],
            ["Completion", "Progress, drop-off lessons and certificates issued"],
            ["Instructor earnings", "Revenue share and payouts per instructor"],
            ["Affiliates", "Clicks, sales and commissions per partner"],
          ],
        },
        { type: "figure", image: "analytics", caption: "Sales by course, conversion funnel, refunds and completion rates" },
      ],
    },
    {
      id: "audiences",
      eyebrow: "Who it's for",
      title: "Who Uses a Course Management Platform?",
      blocks: [
        {
          type: "table",
          caption: "Course platform needs by business type",
          headers: ["Business type", "Typical needs"],
          rows: [
            ["Course creators and experts", "Branded storefront, flexible pricing, email automation"],
            ["Training companies", "Large catalogs, team licenses, certificates, B2B sales"],
            ["Professional associations", "Member pricing, continuing education credits, certificates"],
            ["University continuing education", "Non-credit courses, cohorts, payments, transcripts"],
            ["Corporate academies", "Customer and partner education, SSO, team seats"],
            ["Coaching and consulting businesses", "Cohort programs, live calls, communities, payment plans"],
            ["Course marketplaces", "Multi-instructor publishing, reviews, revenue share, payouts"],
            ["Test prep providers", "Subscriptions, practice quizzes, progress tracking"],
          ],
        },
        {
          type: "linkPanel",
          text: "Running classroom batches with fees and attendance rather than online courses? [Coaching institute management software](/products/education-management-software/coaching-institute-management-software) is built for that model.",
        },
      ],
    },
    {
      id: "vs-lms",
      eyebrow: "Compare",
      title: "Course Management Platform vs. LMS",
      blocks: [
        {
          type: "table",
          caption: "Course management platform compared with a learning management system",
          headers: ["", "Course management platform", "Learning management system"],
          rows: [
            ["Main job", "Sell and deliver courses as a business", "Deliver and track assigned learning"],
            ["Learners are", "Customers who pay or subscribe", "Students or employees who are enrolled"],
            ["Key modules", "Catalog, checkout, coupons, drip, affiliates, payouts", "Course builder, gradebook, learning paths, compliance"],
            ["Success measure", "Revenue, conversion and completion", "Completion, scores and compliance"],
            ["Typical owner", "Course business or marketing team", "School, L&D or training team"],
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "Many businesses need both: a storefront that sells to the public and an LMS that trains internal teams or corporate clients. A custom build can share one course library between them.",
          ],
        },
      ],
    },
    {
      id: "security",
      eyebrow: "Security",
      title: "Payments, Data Security and Privacy",
      blocks: [
        {
          type: "checklist",
          icon: "Lock",
          items: [
            "Tokenized payments through your gateway, with no card data stored",
            "Protected video streaming and download controls",
            "Role-based access for admins, instructors, affiliates and learners",
            "Single sign-on for team and corporate customers",
            "Encryption in transit and at rest, plus audit logs",
            "Data export and deletion on request",
          ],
        },
        {
          type: "caution",
          text: "Course businesses must follow consumer-protection, tax, privacy and email-marketing rules that apply to them. Clickmasters builds the consent, data and payment features your policies require; compliance also depends on how you operate the platform.",
        },
      ],
    },
    {
      id: "ready-vs-custom",
      eyebrow: "Build or buy",
      title: "Hosted Course Platforms vs. a Custom Course Platform",
      blocks: [
        {
          type: "table",
          caption: "Hosted course platforms compared with a custom course management platform",
          headers: ["", "Hosted course platform", "Custom platform"],
          rows: [
            ["Fees", "Monthly plan plus transaction or per-learner fees", "Build cost plus hosting and maintenance you control"],
            ["Branding", "Template themes, sometimes vendor branding", "Fully white-label on your domain"],
            ["Pricing models", "The vendor's options", "Any mix of prices, plans, bundles and licenses"],
            ["Marketplace and payouts", "Limited or unavailable", "Revenue share rules built for your model"],
            ["Integrations", "The vendor's app list", "Your CRM, email, accounting and SSO"],
            ["Data ownership", "Customer data in the vendor's system", "Your database and your exports"],
          ],
        },
        {
          type: "linkPanel",
          text: "Planning to offer your platform to other businesses as a product? Our [SaaS product development](/software-development/saas-product-development) team builds multi-tenant platforms with subscription billing.",
        },
      ],
    },
    {
      id: "custom-development",
      eyebrow: "What we deliver",
      title: "Custom Course Platform Development",
      blocks: [
        { type: "prose", paragraphs: ["Clickmasters can deliver:"] },
        {
          type: "checklist",
          items: [
            "Discovery with founders, instructors, marketing and support teams",
            "Storefront, landing page and learner experience design",
            "Course catalog, course player and content management",
            "Checkout, subscriptions, bundles and coupons with Stripe",
            "Drip schedules, cohorts and live session integration",
            "Instructor dashboards, revenue share and payout reports",
            "Email automation, affiliates and analytics integrations",
            "White-label branding and custom domain",
            "iOS and Android learning apps",
            "Migration of courses, learners and purchases from your current platform",
            "Testing, deployment, training and ongoing support",
          ],
        },
        {
          type: "linkPanel",
          text: "The platform is built by our [web application development](/web-development/web-application-development) team, with branded apps through [cross-platform app development](/mobile-app-development/cross-platform-app-development).",
        },
      ],
    },
    {
      id: "benefits",
      eyebrow: "Outcomes",
      title: "Benefits of a Custom Course Management Platform",
      blocks: [
        {
          type: "checklist",
          items: [
            "Catalog, checkout and learning in one system",
            "Your brand and domain on every page and email",
            "Pricing models that match how you sell",
            "Access that updates automatically with payments",
            "Clear instructor earnings and payouts",
            "Ownership of your customer and learner data",
            "Reports that connect sales with completion",
            "Room to add marketplaces, apps and B2B sales later",
          ],
        },
        { type: "note", text: "Results depend on your courses, marketing and adoption. No revenue or growth outcome is guaranteed." },
      ],
    },
    {
      id: "choose",
      eyebrow: "Evaluation checklist",
      title: "How to Choose a Course Management Platform",
      blocks: [
        {
          type: "checkGrid",
          items: [
            "Number of courses and learners",
            "Pricing models you need",
            "Checkout, tax and payment providers",
            "Drip, cohort and live learning",
            "Single or multiple instructors",
            "Revenue share and payouts",
            "Marketing and affiliate tools",
            "B2B and team licenses",
            "White-label branding and domain",
            "Mobile app and offline access",
            "Certificates and completion tracking",
            "Integrations with CRM and email",
            "Data ownership and migration",
            "Total cost as you grow",
          ],
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
            ["Custom web, mobile and AI products", "Built for US organizations by a remote-first team."],
            ["A connected education suite", "Course platform, LMS, school, college and university management, SIS, online exams and coaching software, designed to work together."],
            ["Web application development", "Storefronts, learner portals and admin dashboards on modern stacks."],
            ["Cross-platform mobile apps", "iOS and Android learning apps with push notifications."],
            ["Payment integration", "Stripe subscription management and webhook processing for courses and memberships."],
            ["Transparent scoping", "Scope, timeline and quote are agreed before development starts."],
          ],
        },
        { type: "cta", label: "Talk to Our Software Development Team" },
      ],
    },
    {
      id: "process",
      eyebrow: "Delivery",
      title: "Course Platform Development Process",
      blocks: [
        {
          type: "steps",
          items: [
            ["Discovery", "Courses, pricing, instructors, audiences and current tools."],
            ["Business rules", "Access, drip, refunds, revenue share and tax."],
            ["Architecture", "Data model, payments, video and integrations."],
            ["UI/UX design", "Storefront, learner, instructor and admin experiences."],
            ["Development", "Catalog, checkout, player and dashboards in sprints."],
            ["Integrations", "Stripe, email, video, analytics and CRM."],
            ["Quality assurance", "Checkout, access, payout and load testing."],
            ["Migration", "Courses, learners and purchase history imported."],
            ["Launch", "Go-live support and training for your team."],
            ["Growth", "Maintenance, new features and optimization."],
          ],
        },
      ],
    },
    {
      id: "cost",
      eyebrow: "Budgeting",
      title: "Course Management Platform Cost",
      blocks: [
        {
          type: "cost",
          intro: "The cost of a custom course platform depends on:",
          items: [
            "Number of courses, learners and instructors",
            "Pricing models, subscriptions and tax handling",
            "Drip, cohort and live session features",
            "Marketplace, revenue share and payouts",
            "Marketing, email and affiliate tools",
            "Mobile apps and offline access",
            "Integrations with CRM, analytics and SSO",
            "Video hosting and expected traffic",
            "Migration from your current platform",
          ],
          panel: "There's no fixed price. Clickmasters agrees scope, timeline and quote before development starts, and can launch a focused first version before adding marketplace features.",
        },
      ],
    },
  ],
  faqTitle: "Frequently Asked Questions About Course Management Platforms",
  faqs: [
    { question: "What is a course management platform?", answer: "A course management platform is software for publishing, selling, delivering and tracking online courses. It combines a course catalog and landing pages with checkout, subscriptions, enrollments, drip content, certificates and sales analytics." },
    { question: "What is the difference between a course platform and an LMS?", answer: "A course platform is built to sell courses to customers, with storefronts, checkout, coupons and affiliates. An LMS is built to deliver and track assigned learning for students or employees, with gradebooks, learning paths and compliance records." },
    { question: "How do I sell courses online on my own platform?", answer: "You publish courses with landing pages and prices, connect a payment gateway such as Stripe, and let the platform enroll buyers automatically, send welcome emails and track their progress, all on your own domain." },
    { question: "Can a course platform handle subscriptions and memberships?", answer: "Yes. Monthly or annual plans can unlock the whole catalog or selected collections, with free trials, upgrades, cancellations and failed-payment handling through the payment gateway." },
    { question: "What is drip content?", answer: "Drip content releases lessons on a schedule, such as one module per week or a set number of days after enrollment, so learners progress at a steady pace instead of getting everything at once." },
    { question: "Can I run cohort-based courses?", answer: "Yes. Cohorts can have fixed start dates, enrollment windows, seat limits, live sessions, shared deadlines and their own discussion space, alongside self-paced courses on the same platform." },
    { question: "Can several instructors sell courses on one platform?", answer: "Yes. A multi-instructor marketplace lets instructors apply, publish courses, see their sales and receive payouts based on revenue share rules you set." },
    { question: "How are instructor payouts calculated?", answer: "Revenue share rules can be set per instructor, per course or per sales channel. The platform calculates earnings net of refunds and fees and produces payout reports, with optional automated payouts." },
    { question: "Can the platform issue course certificates?", answer: "Yes. Branded certificates with unique verification IDs can be issued automatically when a learner completes a course or a set of courses." },
    { question: "Is a white-label course platform possible?", answer: "Yes. A custom platform uses your brand, domain, emails and certificates throughout, with no vendor branding visible to learners." },
    { question: "Can companies buy courses for their teams?", answer: "Yes. Team licenses let a company buy seats, assign courses to employees and see team progress, with invoicing and optional single sign-on." },
    { question: "Can learners use a mobile app?", answer: "The learning experience can be fully responsive, and branded iOS and Android apps can add push notifications and offline access to downloaded lessons." },
    { question: "Can I migrate from my current course platform?", answer: "Usually, yes. Courses, videos, learners, enrollments and purchase history can be exported from most hosted platforms and imported, with access preserved for existing customers." },
    { question: "Why build a custom course platform instead of using a hosted one?", answer: "A custom platform makes sense when transaction fees, branding limits, missing pricing models, marketplace needs or data ownership start to hold the business back. Hosted tools are often the right choice when you are just starting." },
    { question: "How much does a custom course management platform cost?", answer: "It depends on courses, learners, pricing models, marketplace and payout features, apps, integrations and migration. Clickmasters agrees scope, timeline and a quote before development starts." },
    { question: "How long does it take to build a course platform?", answer: "A first version with a catalog, checkout, course player and certificates is shorter to build than a full marketplace with apps, affiliates and B2B licensing. The timeline is set during scoping." },
  ],
  finalCta: {
    title: "Build a Course Management Platform You Own",
    paragraphs: [
      "Whether you sell one flagship program, run a training company or want to launch a course marketplace, the right platform starts with your courses, your pricing and your learners.",
      "Tell Clickmasters Software Development Company how you sell and deliver courses today and where your tools fall short. We'll recommend the features and integrations you need and scope the first release of your custom course platform.",
    ],
  },
  primaryCta: "Discuss Your Course Platform Requirements",
  mobileCta: "Discuss Your Course Platform",
  schema: {
    serviceType: "Course management platform development",
    serviceDescription:
      "Design, development and integration of custom course management platforms for course creators, training companies and academies, covering course catalogs and landing pages, checkout, subscriptions, bundles and coupons, drip content, cohorts, instructor revenue share, certificates, white-label branding, mobile apps and sales analytics.",
  },
};

export default page;
