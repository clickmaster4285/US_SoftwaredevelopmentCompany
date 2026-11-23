// Content for /products/education-management-software/online-examination-software.
// Primary keyword: "online examination software".
// Secondary: online exam software, online exam system, online assessment platform, computer-based testing (CBT),
// question bank management, remote proctoring, auto-grading, exam scheduling, result management, entrance exam software.
// FAQ text is reused verbatim by the FAQPage JSON-LD.
import type { ProductPageData } from "./product-seo-types";

const dir = "/products/online-examination";
const img = (file: string, alt: string, width = 1440, height = 900) => ({ src: `${dir}/${file}`, width, height, alt });

const page: ProductPageData = {
  path: "/products/education-management-software/online-examination-software",
  title: "Online Examination Software for Secure Online Exams",
  description:
    "Custom online examination software with question banks, timed exams, remote proctoring, auto-grading, results and analytics for schools and testers.",
  ogTitle: "Online Examination Software | Question Banks, Proctoring & Auto-Grading",
  ogDescription:
    "Create question banks, schedule timed online exams, add proctoring and accommodations, grade automatically or with rubrics, and publish results with item analysis.",
  productName: "Online Examination Software",
  industrySlug: "education-management-software",
  industryLabel: "Education Management Software",
  theme: { accent: "#4f46e5", dark: "#14123a", soft: "#e0e7ff", border: "#c7d2fe", tint: "#eef2ff" },
  browserLabel: "exams.example",
  images: {
    dashboard: img("online-examination-software-dashboard.svg", "Online examination software dashboard showing live exams, candidates in progress, submissions, flagged sessions and grading queue"),
    questionBank: img("question-bank-management.svg", "Question bank management screen with questions tagged by topic, difficulty, type and usage statistics"),
    builder: img("online-exam-builder-randomization.svg", "Online exam builder with sections, question pools, randomization rules, time limits and paper sets"),
    candidate: img("candidate-online-exam-interface.svg", "Candidate online exam interface with timer, question navigator, autosave status and flag-for-review"),
    proctoring: img("remote-proctoring-review-dashboard.svg", "Remote proctoring review dashboard with flagged events, webcam snapshots and browser activity for reviewer decisions"),
    grading: img("auto-grading-rubric-marking.svg", "Grading screen with auto-graded objective questions and rubric-based marking for essay answers"),
    workflow: img("online-exam-lifecycle-workflow.svg", "Online exam lifecycle workflow from question bank and scheduling to secure delivery, grading, moderation and results"),
    analytics: img("exam-results-item-analysis.svg", "Exam results and item analysis with score distribution, question difficulty and discrimination index"),
    og: img("online-examination-software-og.png", "Illustrative concept of an online examination software dashboard", 1200, 750),
  },
  hero: {
    h1: "Online Examination Software",
    subhead: "Build question banks, run secure timed exams and publish accurate results, from classroom quizzes to high-stakes entrance tests.",
    paragraphs: [
      "Online examination software moves the whole exam process online: writing and reviewing questions, assembling papers, registering candidates, delivering timed exams in a browser, monitoring integrity, grading answers and publishing results. Paper logistics, manual marking and spreadsheet result sheets are replaced by one connected online exam system.",
      "Clickmasters designs and builds custom online exam software for US schools, universities, certification and licensing bodies, training providers and employers, shaped around your question types, your integrity rules and the scale of your exam days.",
    ],
    image: "dashboard",
    caption: "Live exams, candidates in progress, flagged sessions and grading queue",
    secondaryCta: { label: "Explore Online Exam Features", href: "#features" },
  },
  contents: [
    { href: "#what-is-online-examination-software", label: "What it is" },
    { href: "#features", label: "Features" },
    { href: "#question-bank", label: "Question bank" },
    { href: "#exam-delivery", label: "Exam delivery" },
    { href: "#proctoring", label: "Proctoring" },
    { href: "#grading", label: "Grading" },
    { href: "#results-analytics", label: "Results & analytics" },
    { href: "#reliability", label: "Exam-day reliability" },
    { href: "#data-privacy", label: "Data privacy" },
    { href: "#cost", label: "Cost" },
    { href: "#faq", label: "FAQ" },
  ],
  sections: [
    {
      id: "exam-logistics",
      eyebrow: "The problem",
      title: "The Hidden Workload of Running Exams",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "A single exam involves a surprising amount of work. Someone writes and reviews questions, builds the paper, prints and secures copies, books rooms and invigilators, checks candidates in, collects scripts, marks hundreds of answers, moderates borderline grades, enters marks into a spreadsheet and finally publishes results. Every step is a chance for delays, leaks or transcription errors.",
            "Remote and hybrid learning added new questions: how do you run a fair exam when candidates are not in the same room, how do you support extra-time accommodations without separate papers, and how do you keep a platform stable when thousands of candidates start at 9:00 AM? An online assessment platform built for your context answers those questions in software rather than with extra staff.",
          ],
        },
      ],
    },
    {
      id: "what-is-online-examination-software",
      eyebrow: "Definition",
      title: "What Is Online Examination Software?",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "**Online examination software** (also called an online exam system, online assessment platform or computer-based testing software) is a web-based platform for creating, delivering, grading and reporting on exams. It typically manages:",
          ],
        },
        {
          type: "titledList",
          cols: 4,
          items: [
            ["Question bank", "Questions tagged by subject, topic, difficulty, outcome and type"],
            ["Exam assembly", "Sections, question pools, randomization and paper sets"],
            ["Scheduling", "Exam windows, time limits, sittings and time zones"],
            ["Candidates", "Registration, eligibility, admit cards and accommodations"],
            ["Delivery", "Timed exams in a browser or secure app, with autosave"],
            ["Integrity", "Lockdown settings and optional proctoring integrations"],
            ["Grading", "Auto-grading, rubric marking, moderation and re-grading"],
            ["Results", "Publishing, certificates, item analysis and reports"],
          ],
        },
        {
          type: "linkPanel",
          text: "Online exam software is one part of the wider family of [education management software](/products/education-management-software). It can run on its own for testing organizations or connect to the systems schools and universities already use.",
        },
      ],
    },
    {
      id: "why-online-exams",
      eyebrow: "Business problems",
      title: "Why Institutions Move to Online Exam Software",
      blocks: [
        {
          type: "table",
          caption: "Exam administration challenges, what happens and how online exam software helps",
          headers: ["Challenge", "What happens", "How software helps"],
          rows: [
            ["Printing and logistics", "Papers printed, stored, shipped and collected", "Exams delivered on screen to any approved device"],
            ["Question leaks", "One paper shared across all candidates", "Randomized questions, options and paper sets"],
            ["Manual marking", "Teachers mark objective questions by hand", "Instant auto-grading for objective items"],
            ["Inconsistent marking", "Essays scored differently by each marker", "Shared rubrics, double marking and moderation"],
            ["Remote candidates", "No way to supervise outside the exam hall", "Lockdown settings and optional proctoring"],
            ["Accommodations", "Separate papers and rooms for extra time", "Per-candidate time and access settings"],
            ["Lost work", "Connection drops mean lost answers", "Autosave and resume within the exam window"],
            ["Slow results", "Weeks between exam and results", "Results published as soon as grading is approved"],
            ["Weak questions", "No data on which questions work", "Item analysis on difficulty and discrimination"],
            ["Exam-day spikes", "Systems slow down when everyone starts together", "Load-tested architecture for peak concurrency"],
          ],
        },
      ],
    },
    {
      id: "features",
      eyebrow: "24 capability areas",
      title: "Key Features of Online Examination Software",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "These are **configurable modules and custom-development options** scoped during discovery, not preinstalled features of a ready-made Clickmasters product. Proctoring, identity verification and messaging depend on the providers you choose.",
          ],
        },
        {
          type: "features",
          items: [
            { title: "Question Bank Management", icon: "Database", text: "A central library of questions tagged by subject, topic, difficulty, learning outcome and author, with version history.", value: "Reusable, well-organized assessment content." },
            { title: "Multiple Question Types", icon: "ListChecks", text: "Multiple choice, multi-select, true/false, numeric, fill-in, matching, ordering, essay, file upload and coding questions.", value: "Assess more than recall." },
            { title: "Question Review Workflow", icon: "FileCheck", text: "Draft, peer review, approval and retirement states, with reviewer comments.", solves: "Errors found only on exam day." },
            { title: "Bulk Question Import", icon: "Upload", text: "Import questions from spreadsheets or standard formats, with media and equations.", solves: "Re-typing existing question banks." },
            { title: "Exam Builder", icon: "Layers", text: "Sections, instructions, marks per question, negative marking and pass marks.", value: "Papers assembled in minutes." },
            { title: "Randomization and Paper Sets", icon: "Shuffle", text: "Random questions from pools by topic and difficulty, shuffled options and multiple paper versions.", solves: "Answer sharing between candidates." },
            { title: "Exam Scheduling and Time Windows", icon: "CalendarClock", text: "Fixed-start or flexible windows, time limits, sittings and time-zone handling.", value: "Clear rules for every sitting." },
            { title: "Candidate Registration and Admit Cards", icon: "Ticket", text: "Registration, eligibility checks, fees where needed and downloadable admit cards.", value: "Organized entrance and certification exams." },
            { title: "Accommodations and Accessibility", icon: "UserCheck", text: "Extra time, rest breaks, larger text and screen-reader-friendly layouts set per candidate.", value: "Fair access without separate papers." },
            { title: "Secure Exam Browser Settings", icon: "Lock", text: "Full-screen mode, copy and paste limits, tab-switch detection and integration with lockdown browsers.", solves: "Easy access to other resources during the exam." },
            { title: "Remote Proctoring Options", icon: "Camera", text: "Integrations for webcam recording, AI-flagged events and live proctors, configured per exam.", value: "Integrity options matched to the stakes." },
            { title: "Identity Verification", icon: "Fingerprint", text: "Photo ID capture and face match through verification providers before the exam starts.", solves: "Uncertainty about who sat the exam." },
          ],
        },
        { type: "figure", image: "candidate", caption: "Candidate view: timer, question navigator, autosave and flag-for-review" },
        {
          type: "features",
          start: 12,
          items: [
            { title: "Autosave and Resume", icon: "RefreshCw", text: "Answers saved continuously; candidates resume after a dropped connection within the allowed window.", solves: "Lost work from network problems." },
            { title: "Auto-Grading", icon: "CheckSquare", text: "Objective questions scored instantly, including partial credit and negative marking rules.", value: "Results without manual marking." },
            { title: "Rubric-Based Manual Grading", icon: "PenLine", text: "Essay and file answers marked against shared rubrics, with anonymous marking.", value: "Consistent subjective scoring." },
            { title: "Double Marking and Moderation", icon: "Users", text: "Second markers, discrepancy alerts and moderator sign-off before results release.", solves: "Marker bias and unchecked outliers." },
            { title: "Result Management and Publishing", icon: "Megaphone", text: "Approve, publish or withhold results by exam, group or candidate, with score reports.", value: "Controlled, timely results." },
            { title: "Re-evaluation Requests", icon: "Repeat", text: "Candidates request reviews; reviewers re-mark with a full history of changes.", value: "A fair, documented appeals process." },
            { title: "Certificates", icon: "Award", text: "Branded certificates issued automatically to candidates who pass, with verification links.", solves: "Manual certificate production." },
            { title: "Item Analysis", icon: "BarChart3", text: "Difficulty, discrimination and distractor statistics for every question.", value: "Better questions in the next exam." },
            { title: "Performance Analytics", icon: "TrendingUp", text: "Scores by topic, outcome, group and cohort, with exports.", value: "Insight for teaching and program decisions." },
            { title: "Practice Tests and Mock Exams", icon: "MonitorPlay", text: "Unproctored practice exams with instant feedback and explanations.", value: "Candidates familiar with the format before exam day." },
            { title: "Notifications and Reminders", icon: "BellRing", text: "Email, SMS or app messages for registration, schedules, start reminders and results.", solves: "Candidates missing their exam window." },
            { title: "Integrations and SSO", icon: "Plug", text: "Connections to your SIS, LMS, payment gateway and single sign-on.", solves: "Candidate lists and grades re-typed between systems." },
          ],
        },
        { type: "cta", label: "Build Custom Online Exam Software" },
      ],
    },
    {
      id: "how-it-works",
      eyebrow: "Workflow",
      title: "How Online Examination Software Works",
      blocks: [
        {
          type: "numbered",
          cols: 5,
          items: [
            ["Author questions", "Questions are written, tagged and reviewed in the bank."],
            ["Build the exam", "Sections, pools, randomization and marks are configured."],
            ["Schedule", "Windows, time limits and integrity settings are set."],
            ["Register candidates", "Candidates are enrolled or register and receive admit cards."],
            ["Pre-exam checks", "System, webcam and identity checks run before the start."],
            ["Deliver", "Candidates take the timed exam with autosave."],
            ["Monitor", "Live dashboards and proctoring flags are reviewed."],
            ["Grade", "Objective items auto-grade; subjective items are marked."],
            ["Moderate and publish", "Results are checked, approved and released."],
            ["Analyze", "Item and cohort analysis improves future exams."],
          ],
        },
        { type: "figure", image: "workflow", caption: "The exam lifecycle from question bank to published results", variant: "diagram" },
      ],
    },
    {
      id: "question-bank",
      eyebrow: "Content",
      title: "Question Bank Management and Exam Building",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Question bank management is where exam quality starts. Well-tagged questions let you assemble balanced papers automatically, rotate content between sittings and see which questions perform well.",
          ],
        },
        {
          type: "titledList",
          cols: 3,
          icon: "Database",
          items: [
            ["Tagging", "Subject, topic, sub-topic, outcome, difficulty and author"],
            ["Media", "Images, audio, video, equations and code snippets"],
            ["Versioning", "Edits tracked; past exams keep the version used"],
            ["Review states", "Draft, in review, approved and retired"],
            ["Usage history", "Where and when each question was used"],
            ["Exposure control", "Limits on how often a question appears"],
          ],
        },
        { type: "figure", image: "questionBank", caption: "Questions tagged by topic, difficulty and type, with usage statistics" },
        { type: "figure", image: "builder", caption: "Exam builder with sections, pools, randomization and paper sets" },
      ],
    },
    {
      id: "exam-delivery",
      eyebrow: "Computer-based testing",
      title: "Secure Online Exam Delivery and Candidate Experience",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "For candidates, the exam screen should be calm and predictable: a visible timer, a question navigator, a flag-for-review option and clear autosave status. For administrators, delivery settings control when the exam opens, how long it lasts and what candidates can do while it is running.",
          ],
        },
        {
          type: "checklist",
          icon: "Laptop",
          items: [
            "Fixed-start or flexible exam windows",
            "Per-candidate extra time and breaks",
            "Question navigator and flag-for-review",
            "Continuous autosave and resume rules",
            "Full-screen mode and tab-switch detection",
            "Copy, paste and right-click limits",
            "Calculator, formula sheet or reference tools if allowed",
            "Low-bandwidth mode for lighter pages",
          ],
        },
        {
          type: "linkPanel",
          text: "Teachers who also run quizzes inside courses can connect exams to a [learning management system (LMS)](/products/education-management-software/learning-management-system-lms), so course enrollments and grades stay in sync.",
        },
      ],
    },
    {
      id: "proctoring",
      eyebrow: "Integrity",
      title: "Remote Proctoring and Exam Integrity Options",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Integrity measures should match the stakes of the exam. A weekly class quiz may need nothing more than randomization and a time limit; a licensing exam may need identity verification and a live proctor. A custom online exam system lets you choose per exam.",
          ],
        },
        {
          type: "table",
          caption: "Exam integrity options and what each one does",
          headers: ["Option", "What it does", "Good for"],
          rows: [
            ["Randomization", "Different questions and option orders per candidate", "All exams"],
            ["Browser restrictions", "Full screen, tab-switch alerts, copy limits", "Low- to medium-stakes exams"],
            ["Lockdown browser", "Restricts the device to the exam during the attempt", "Medium- to high-stakes exams"],
            ["Recorded proctoring", "Webcam and screen recording reviewed afterwards", "Remote exams with review capacity"],
            ["AI-flagged proctoring", "Software flags events such as a second face for human review", "Large remote cohorts"],
            ["Live proctoring", "A person monitors candidates in real time", "High-stakes certification and entrance exams"],
          ],
        },
        { type: "figure", image: "proctoring", caption: "Flagged events, webcam snapshots and browser activity for reviewer decisions" },
        {
          type: "caution",
          text: "Proctoring tools flag possible issues; they do not prove misconduct. Flags should always be reviewed by a person, candidates should be told what is recorded, and recording must follow applicable privacy and biometric laws. Proctoring and identity verification are provided through third-party integrations chosen during scoping.",
        },
      ],
    },
    {
      id: "grading",
      eyebrow: "Marking",
      title: "Auto-Grading, Rubric Marking and Moderation",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Objective questions are graded the moment a candidate submits. Essays, file uploads and coding answers go to markers, who score them against shared rubrics, often anonymously. Moderation workflows compare markers, highlight large differences and require sign-off before results are released.",
          ],
        },
        { type: "figure", image: "grading", caption: "Auto-graded objective items and rubric marking for essay answers" },
      ],
    },
    {
      id: "results-analytics",
      eyebrow: "Insight",
      title: "Result Management and Exam Analytics",
      blocks: [
        {
          type: "table",
          caption: "Online exam reports and what they show",
          headers: ["Report", "What it shows"],
          rows: [
            ["Score distribution", "How scores spread across the cohort, with pass rate"],
            ["Item difficulty", "The share of candidates who answered each question correctly"],
            ["Discrimination index", "How well a question separates stronger and weaker candidates"],
            ["Distractor analysis", "Which wrong options attract candidates"],
            ["Topic performance", "Scores by topic, outcome or competency"],
            ["Group comparison", "Results by class, center, cohort or sitting"],
            ["Integrity summary", "Flags raised, reviewed and upheld"],
          ],
        },
        { type: "figure", image: "analytics", caption: "Score distribution, question difficulty and discrimination" },
      ],
    },
    {
      id: "reliability",
      eyebrow: "Performance",
      title: "Exam-Day Reliability and Load Testing",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Exam platforms face a unique load pattern: almost nothing for weeks, then thousands of candidates logging in and submitting within minutes. Architecture, caching, autosave design and capacity planning have to be built for that peak, and tested before it happens.",
            "Clickmasters' QA team has published a case study on [pre-launch QA for a SaaS booking platform](/case-studies/pre-launch-qa-for-a-saas-booking-platform), covering regression, load and payment-flow testing on a multi-tenant product. The same discipline applies to exam-day load tests.",
          ],
        },
        {
          type: "checklist",
          icon: "Cloud",
          items: [
            "Load tests at expected peak concurrency",
            "Staggered start options for very large cohorts",
            "Autosave designed for unreliable connections",
            "Monitoring and alerting during live exams",
            "Incident playbooks and time extensions",
            "Backups and recovery for answer data",
          ],
        },
      ],
    },
    {
      id: "use-cases",
      eyebrow: "Who it's for",
      title: "Online Exam Software for Every Kind of Assessment",
      blocks: [
        {
          type: "table",
          caption: "Online exam needs by organization type",
          headers: ["Organization", "Typical needs"],
          rows: [
            ["K-12 schools", "Unit tests, term exams, accommodations, results to the SIS"],
            ["Colleges and universities", "Midterms and finals, large cohorts, rubric marking, moderation"],
            ["Entrance exams", "Registration, fees, admit cards, randomized papers, ranked results"],
            ["Certification and licensing bodies", "Identity checks, proctoring, secure item banks, certificates"],
            ["Coaching institutes", "Mock tests, practice series, rank lists, performance analytics"],
            ["Corporate training", "Compliance assessments, completion records, certificates"],
            ["Recruitment testing", "Aptitude and skills tests, coding questions, candidate shortlists"],
          ],
        },
        {
          type: "linkPanel",
          text: "Test-prep businesses running batches and mock series can combine exams with [coaching institute management software](/products/education-management-software/coaching-institute-management-software).",
        },
      ],
    },
    {
      id: "vs-lms",
      eyebrow: "Compare",
      title: "Online Examination Software vs. LMS Quizzes",
      blocks: [
        {
          type: "table",
          caption: "Online examination software compared with quizzes inside a learning management system",
          headers: ["", "Online examination software", "LMS quizzes"],
          rows: [
            ["Main job", "Run formal exams end to end", "Check learning inside a course"],
            ["Stakes", "Low to high stakes", "Mostly low stakes"],
            ["Question bank", "Institution-wide, tagged and reviewed", "Course-level"],
            ["Candidates", "Students and external candidates", "Enrolled course students"],
            ["Integrity", "Lockdown, proctoring, identity checks", "Basic time limits and shuffling"],
            ["Grading", "Rubrics, double marking, moderation, appeals", "Simple grading"],
            ["Analytics", "Item analysis and cohort reports", "Course scores"],
          ],
        },
      ],
    },
    {
      id: "data-privacy",
      eyebrow: "Security",
      title: "Exam Security and Candidate Data Privacy",
      blocks: [
        {
          type: "prose",
          paragraphs: ["Exam content and candidate data both need protection. A custom online exam platform can include:"],
        },
        {
          type: "checklist",
          icon: "ShieldCheck",
          items: [
            "Role-based access for authors, reviewers, markers and administrators",
            "Encrypted question banks and answer data",
            "Questions released to candidates only during the exam window",
            "Audit logs for question edits, grade changes and result releases",
            "Single sign-on and multi-factor authentication for staff",
            "Retention rules for recordings and identity images",
          ],
        },
        {
          type: "caution",
          text: "Exam records of students are education records under FERPA, and webcam or biometric data may fall under state privacy and biometric laws. Clickmasters builds the controls your policies require; compliance also depends on your organization's policies, notices and operations.",
        },
      ],
    },
    {
      id: "ready-vs-custom",
      eyebrow: "Build or buy",
      title: "Ready-Made vs. Custom Online Exam Software",
      blocks: [
        {
          type: "table",
          caption: "Ready-made compared with custom online exam software",
          headers: ["", "Ready-made", "Custom"],
          rows: [
            ["Question types", "The vendor's set", "Any type you need, including coding or domain-specific items"],
            ["Scoring rules", "Standard options", "Your negative marking, partial credit and scaling rules"],
            ["Integrity", "Vendor's bundled proctoring", "The proctoring and identity providers you choose"],
            ["Branding", "Vendor-branded candidate portal", "Your brand end to end"],
            ["Integrations", "The vendor's list", "Your SIS, LMS, payments and SSO"],
            ["Pricing", "Per candidate or per exam", "Build cost plus hosting and maintenance you control"],
            ["Data ownership", "Stored in the vendor's platform", "Your database, your question bank"],
          ],
        },
      ],
    },
    {
      id: "custom-development",
      eyebrow: "What we deliver",
      title: "Custom Online Examination Software Development",
      blocks: [
        { type: "prose", paragraphs: ["Clickmasters can deliver:"] },
        {
          type: "checklist",
          items: [
            "Discovery with exam boards, faculty, IT and candidate support teams",
            "Question bank, exam builder and review workflow",
            "Candidate registration, admit cards and payment integration",
            "Secure exam delivery with autosave and accommodations",
            "Proctoring and identity verification integrations",
            "Auto-grading, rubric marking and moderation tools",
            "Results publishing, certificates and analytics",
            "SIS, LMS and SSO integrations",
            "Load testing and exam-day monitoring",
            "Deployment, training and ongoing support",
          ],
        },
        {
          type: "linkPanel",
          text: "The candidate portal and admin console are built by our [web application development](/web-development/web-application-development) team, with integrations delivered through [API development and integration](/software-development/api-development-integration).",
        },
      ],
    },
    {
      id: "benefits",
      eyebrow: "Outcomes",
      title: "Benefits of Online Examination Software",
      blocks: [
        {
          type: "checklist",
          items: [
            "No printing, shipping or collecting papers",
            "Faster results through auto-grading",
            "More consistent marking with shared rubrics",
            "Reduced answer sharing through randomization",
            "Fair accommodations without separate papers",
            "Exams for remote and on-site candidates",
            "Better questions through item analysis",
            "A reusable, growing question bank",
          ],
        },
        { type: "note", text: "Results depend on setup, exam design and adoption. No specific outcome is guaranteed, and no online system eliminates misconduct entirely." },
      ],
    },
    {
      id: "choose",
      eyebrow: "Evaluation checklist",
      title: "How to Choose an Online Exam System",
      blocks: [
        {
          type: "checkGrid",
          items: [
            "Exam types and stakes",
            "Question types you need",
            "Question bank size and review process",
            "Randomization and paper sets",
            "Scheduling and time-zone rules",
            "Accommodations and accessibility",
            "Lockdown and proctoring options",
            "Grading, moderation and appeals",
            "Results, certificates and analytics",
            "Peak concurrent candidates",
            "SIS, LMS and SSO integrations",
            "Candidate data privacy",
            "Support during live exams",
            "Total cost of ownership",
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
            ["A connected education suite", "School, college and university management, SIS, LMS, online exams, coaching and course platforms, designed to work together."],
            ["Booking-platform QA experience", "A published case study covering regression, load and payment-flow testing of a multi-tenant SaaS."],
            ["Web application development", "Candidate portals, admin consoles and dashboards on modern stacks."],
            ["Payment integration", "Stripe payments and webhook processing for exam and registration fees."],
            ["Transparent scoping", "Scope, timeline and quote are agreed before development starts."],
          ],
        },
        { type: "cta", label: "Talk to Our Software Development Team" },
      ],
    },
    {
      id: "process",
      eyebrow: "Delivery",
      title: "Online Exam Software Development Process",
      blocks: [
        {
          type: "steps",
          items: [
            ["Discovery", "Exam types, stakes, candidates, policies and current tools."],
            ["Assessment design", "Question types, scoring, integrity and accommodations."],
            ["Architecture", "Peak-load design, security, integrations and hosting."],
            ["UI/UX design", "Author, marker, admin and candidate experiences."],
            ["Development", "Question bank, builder, delivery and grading in sprints."],
            ["Integrations", "Proctoring, identity, SIS, LMS, payments and SSO."],
            ["Quality assurance", "Scoring, accessibility, security and load testing."],
            ["Pilot exam", "A low-stakes live run before high-stakes use."],
            ["Training", "For authors, markers, administrators and support staff."],
            ["Support", "Exam-day monitoring, updates and new features."],
          ],
        },
      ],
    },
    {
      id: "cost",
      eyebrow: "Budgeting",
      title: "Online Examination Software Cost",
      blocks: [
        {
          type: "cost",
          intro: "The cost of custom online examination software depends on:",
          items: [
            "Number of candidates and peak concurrency",
            "Question types, including coding or media items",
            "Exam builder and randomization complexity",
            "Proctoring and identity verification integrations",
            "Grading, moderation and appeals workflows",
            "Registration, payments and admit cards",
            "SIS, LMS and SSO integrations",
            "Hosting, monitoring and exam-day support",
          ],
          panel: "There's no fixed price. Clickmasters agrees scope, timeline and quote before development starts, and can plan a pilot before your first high-stakes exam.",
        },
      ],
    },
  ],
  faqTitle: "Frequently Asked Questions About Online Examination Software",
  faqs: [
    { question: "What is online examination software?", answer: "Online examination software is a web-based platform for creating question banks, building and scheduling exams, delivering timed tests online, grading answers automatically or with rubrics, and publishing results and analytics." },
    { question: "How does an online exam system work?", answer: "Administrators build an exam from a question bank, schedule it and register candidates. Candidates sign in during the exam window, answer questions with autosave, and submit. Objective answers are graded automatically, subjective answers are marked, and results are published after approval." },
    { question: "What question types can online exam software support?", answer: "Common types include multiple choice, multi-select, true or false, numeric, fill-in-the-blank, matching, ordering, essay, file upload and coding questions. A custom system can add domain-specific types." },
    { question: "How do online exams prevent cheating?", answer: "Through randomized questions and options, multiple paper sets, time limits, browser restrictions, lockdown browsers, identity verification and recorded, AI-flagged or live proctoring. No method removes misconduct entirely, so flags should be reviewed by people." },
    { question: "What is remote proctoring?", answer: "Remote proctoring monitors candidates during an online exam using webcam, microphone and screen recording, AI-flagged events or a live human proctor. It is usually provided through a specialist integration and configured per exam." },
    { question: "Can online exam software grade essays?", answer: "Essays are usually marked by people using shared rubrics, with anonymous and double marking and moderation. The software organizes the marking, totals the scores and records every change." },
    { question: "Can candidates with accommodations get extra time?", answer: "Yes. Extra time, rest breaks, larger text and other access settings can be applied to individual candidates without creating a separate exam." },
    { question: "What happens if a candidate's internet connection drops?", answer: "Answers are autosaved continuously, and candidates can resume within the allowed exam window. Administrators can grant extra time or reopen attempts according to your rules." },
    { question: "Can online examination software handle thousands of candidates at once?", answer: "It can when it is architected and load-tested for that peak. Capacity planning, staggered starts, efficient autosave and live monitoring are part of building an exam platform for large cohorts." },
    { question: "Is online exam software suitable for entrance exams?", answer: "Yes. Entrance exam software adds registration, eligibility checks, fee payment, admit cards, randomized papers, ranked results and score cards to the core exam features." },
    { question: "What is item analysis in online exams?", answer: "Item analysis measures how each question performed: its difficulty, how well it separates stronger and weaker candidates, and which wrong options attracted answers. It helps improve the question bank." },
    { question: "Can online exam software integrate with our LMS or SIS?", answer: "Yes. A custom system can import candidates and classes from an SIS or LMS, use single sign-on, and send grades back after results are approved." },
    { question: "Can it issue certificates automatically?", answer: "Yes. Certificates can be generated for candidates who meet the pass criteria, with your branding and a verification link or code." },
    { question: "Is candidate data secure in an online exam platform?", answer: "Security comes from role-based access, encryption, controlled release of questions, audit logs and retention rules for recordings. Organizations must also follow FERPA and applicable privacy and biometric laws in how they configure and operate it." },
    { question: "How much does custom online examination software cost?", answer: "It depends on candidate numbers and peak concurrency, question types, proctoring and identity integrations, grading workflows, registration and payments, integrations and support. Clickmasters agrees scope, timeline and a quote before development starts." },
    { question: "How long does it take to build an online exam platform?", answer: "A focused first release with a question bank, timed delivery, auto-grading and results is shorter than a high-stakes platform with proctoring, registration and payments. Many organizations run a low-stakes pilot first." },
  ],
  finalCta: {
    title: "Build Online Examination Software Around Your Exams",
    paragraphs: [
      "Whether you run classroom tests, university finals, entrance exams or professional certifications, the right online exam platform starts with your questions, your integrity rules and your busiest exam day.",
      "Tell Clickmasters Software Development Company how your exams run today and where they break. We'll recommend the modules and integrations you need and scope the first release of your custom online exam software.",
    ],
  },
  primaryCta: "Discuss Your Online Exam Requirements",
  mobileCta: "Discuss Your Exam Platform",
  schema: {
    serviceType: "Online examination software development",
    serviceDescription:
      "Design, development and integration of custom online examination software with question bank management, exam building and randomization, scheduling, candidate registration, secure delivery, proctoring integrations, auto-grading, rubric marking, results publishing and item analysis.",
  },
};

export default page;
