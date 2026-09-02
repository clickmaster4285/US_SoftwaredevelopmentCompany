// main-service-components.js
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Code2,
  Compass,
  Target,
  Building,
  Building2,
  Cloud,
  Rocket,
  Monitor,
  Plug,
  Server,
  Users,
  Brain,
  Globe,
  Smartphone,
  Cpu,
  Truck,
  Coins,
  Puzzle,
  CircuitBoard,
  ShieldCheck,
  Handshake,
  ShoppingBag,
  Heart,
  Layers3,
  MessageSquareText,
  Quote,
  Sparkles,
  Workflow,
  Search,
  TrendingUp,
  Hotel,
  Tv2,
  ShoppingCart,
  Activity,
  Stethoscope,
  GraduationCap,
  CreditCard,
  MessageSquare,
  Bot,
  Users2,
  Database,
  BrainCircuit,
  Network,
  Repeat,
  SlidersHorizontal,
  CloudCog,
  GitBranch,
  GitPullRequest,
  Container,
  FileCode,
  ArrowRightLeft,
  PenTool,
  Component,
  Warehouse,
  PieChart,
  Boxes,
} from "lucide-react";
import { SectionHeading } from "@/app/(landing)/[main_service]/[sub_service]/landing-primitives";

// Shared data for components
const appIdeas = [
  "Customer portals",
  "Internal dashboards",
  "Workflow automation",
  "Data and reporting systems",
];

// IconFor Component - Maps icon names to Lucide React components
export function IconFor({ name }) {
  const iconMap = {
    ArrowRight,
    BarChart3,
    CheckCircle2,
    ChevronRight,
    CircleDollarSign,
    Code2,
    Compass,
    Layers3,
    MessageSquareText,
    Quote,
    Sparkles,
    Workflow,
    Target,
    Building,
    Building2,
    Cloud,
    Rocket,
    Monitor,
    Plug,
    Server,
    Users,
    Brain,
    Globe,
    Smartphone,
    Cpu,
    Truck,
    Coins,
    Puzzle,
    CircuitBoard,
    ShieldCheck,
    Handshake,
    ShoppingBag,
    Heart,
    Search,
    TrendingUp,
    Hotel,
    Tv2,
    ShoppingCart,
    Activity,
    Stethoscope,
    GraduationCap,
    CreditCard,
    MessageSquare,
    Bot,
    Users2,
    Database,
    BrainCircuit,
    Network,
    Repeat,
    SlidersHorizontal,
    CloudCog,
    GitBranch,
    GitPullRequest,
    Container,
    FileCode,
    ArrowRightLeft,
    PenTool,
    Component,
    Warehouse,
    PieChart,
    Boxes,
  };

  const IconComponent = name ? iconMap[name] : undefined;
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in iconMap, using fallback`);
    return <Code2 className="h-5 w-5" />;
  }
  
  return <IconComponent className="h-5 w-5" />;
}

// Hero Component with integrated Breadcrumb
export function MainServiceHero({ service }) {
  return (
    <section className="relative overflow-hidden bg-background px-5 py-10 md:px-10 md:py-16">
      <div className="absolute inset-x-0 top-0 h-px bg-border" />
      <div className="mx-auto max-w-7xl">
      
        <nav className="mb-8 flex items-center gap-2 text-sm font-medium">
          <Link
            href="/"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Home
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="font-semibold text-foreground">{service.title}</span>
        </nav>

        {/* Hero content */}
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              {service.heroBadge || "Main service"}
            </div>
            <h1 className="max-w-5xl text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.1] tracking-tight text-foreground">
              {service.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              {service.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90"
              >
                {service.heroCtas?.primary || "Start a Project"}{" "}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-accent hover:text-accent-foreground"
              >
                {service.heroCtas?.secondary || "Book a Free Consultation"}
              </a>
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-border bg-card">
            {service.heroImage ? (
              <img
                src={service.heroImage}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-80"
              />
            ) : null}
            <div className="absolute inset-0 bg-background/45" />
            <div className="absolute inset-x-6 bottom-6 grid gap-3 sm:grid-cols-2">
              {(service.stats || []).slice(0, 4).map((stat) => (
                <div
                  key={`${stat.value}-${stat.label}`}
                  className="rounded-lg border border-border bg-card/90 p-4 backdrop-blur"
                >
                  <p className="text-2xl font-semibold text-card-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Explore Section Component
export function ExploreSection({ service }) {
  const ourServices = service.ourServices || {};
  const exploreTitle = ourServices.title || service.servicesSection?.title || `Everything inside ${service.title}`;
  const exploreCopy = ourServices.description || service.servicesSection?.description || "Choose the focused service line that best matches your product, platform, or operational goal.";
  const servicesToRender = service.subServices || ourServices.subServices || ourServices.services || [];

  return (
    <section className="bg-background px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Explore"
          title={exploreTitle}
          copy={exploreCopy}
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {servicesToRender.map((item) => (
            <Link
              key={item.slug}
              href={`/${service.slug}/${item.slug}`}
              className="group rounded-lg border border-border bg-card p-6 text-card-foreground transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="mb-7 flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <IconFor name={item.icon} />
              </span>
              <h3 className="text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary">
                Read more
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Trust Section Component - REDESIGNED


export function TrustSection({ service }) {
  const trustData = service.trustSection || {
    title: "Software Development Company You Can Trust",
    description: "",
    points: [],
    closingText: "",
  };

  return (
    <section className="bg-secondary px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <Building className="h-3.5 w-3.5 text-primary" />
              About Us
            </div>
            <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
              {trustData.title}
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p className="text-lg leading-8">
                {trustData.description}
              </p>
              {(trustData.paragraphs || []).map((paragraph, index) => (
                <p key={index} className="text-base leading-7">
                  {paragraph}
                </p>
              ))}
              {(trustData.points || []).map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-base leading-7">{point}</p>
                </div>
              ))}
              {trustData.closingText && (
                <p className="mt-4 text-lg ">
                  {trustData.closingText}
                </p>
              )}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90"
              >
                {trustData.button || "Start a Project"}{" "}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-accent hover:text-accent-foreground"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right Column - Stats Grid with Visual Design */}
          {/* Added pt-48 for 4x the original padding */}
          <div className="space-y-6 pt-48 lg:pt-56">
            {/* Main Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "200+", label: "Projects Delivered", icon: "Code2" },
                { value: "50+", label: "Expert Engineers", icon: "Users" },
                { value: "99.9%", label: "Uptime Guarantee", icon: "ShieldCheck" },
                { value: "24/7", label: "Support", icon: "MessageSquareText" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition hover:shadow-lg hover:border-primary/20"
                >
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/5 transition group-hover:bg-primary/10" />
                  <div className="relative">
                    <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <IconFor name={stat.icon} />
                    </span>
                    <p className="mt-4 text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="rounded-xl border border-border bg-gradient-to-br from-primary/5 to-secondary/5 p-6 text-center">
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <p className="text-sm font-semibold text-foreground">
                  Trusted by startups and enterprises across the USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// Company / Agency Narrative Section — renders a titled narrative block
// (e.g. "Your Cloud DevOps Agency in the USA") with one or more paragraphs.
export function CompanySection({ service }) {
  const data = service.companySection || {};
  if (!data.title) return null;

  const paragraphs =
    Array.isArray(data.paragraphs) && data.paragraphs.length
      ? data.paragraphs
      : data.description
        ? [data.description]
        : [];

  return (
    <section className="bg-background px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Work With Us"
          title={data.title}
        />
        <div className="mx-auto mt-10 max-w-4xl space-y-5 text-center">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg leading-8 text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pain Points Solutions Component
export function PainPointsSolutions({ service }) {
  const painPoints = [
    "Projects that start fast but become hard to maintain",
    "Disconnected tools, data, and customer workflows",
    "Unclear delivery plans that make budgets drift",
  ];
  const solutions = service.features?.length
    ? service.features.slice(0, 3)
    : [
        {
          icon: "Building",
          title: "Clear architecture",
          description:
            "A practical technical plan before production work expands.",
        },
        {
          icon: "Rocket",
          title: "Focused delivery",
          description:
            "Short feedback loops, visible progress, and usable releases.",
        },
        {
          icon: "ShieldCheck",
          title: "Launch support",
          description:
            "Monitoring, documentation, and iteration after go-live.",
        },
      ];

  return (
    <section className="border-y border-border bg-secondary px-5 py-24 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Problems we remove
          </p>
          <div className="mt-8 space-y-4">
            {painPoints.map((item) => (
              <div key={item} className="flex gap-3 text-card-foreground">
                <BarChart3 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="text-lg font-medium leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-border bg-card p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            How we solve them
          </p>
          <div className="mt-8 space-y-5">
            {solutions.map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <IconFor name={item.icon} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Benefits Section Component - NEW
export function BenefitsSection({ service }) {
  const benefits = service.benefits || [];

  if (!benefits.length) return null;

  return (
    <section className="bg-secondary px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Benefits"
          title={
            service.benefitsSection?.title ||
            "Benefits of Our Software Development Services"
          }
          copy={
            service.benefitsSection?.description ||
            "Businesses choose our software development solutions for measurable, practical reasons."
          }
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-card p-6 flex items-start gap-3"
            >
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
              {typeof benefit === "string" ? (
                <p className="text-sm leading-6 text-card-foreground">
                  {benefit}
                </p>
              ) : (
                <div>
                  <h3 className="text-base font-semibold text-card-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Trusted Clients Section Component
export function TrustedClientsSection({ service }) {
  const clients = service.trustedClients || [];

  return (
    <section className="bg-background px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Trusted clients"
          title={
            service.trustedClientsSection?.title ||
            `${service.title} for teams with real stakes`
          }
          copy={
            service.trustedClientsSection?.description ||
            `We partner with organizations that need dependable ${service.title.toLowerCase()} delivery.`
          }
        />
        <div className="mt-14 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {clients.slice(0, 5).map((client) => (
            <div
              key={client.name}
              className="rounded-lg border border-border bg-card p-5"
            >
              <span className="mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <IconFor name={client.icon} />
              </span>
              <h3 className="font-semibold text-card-foreground">
                {client.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {client.industry}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Apps Section Component
export function AppsSection() {
  return (
    <section className="bg-muted px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Applications"
          title="Useful systems, not decorative output."
          copy="Common project shapes we can plan, design, build, and support."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {appIdeas.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-border bg-card p-6"
            >
              <Layers3 className="mb-10 h-6 w-6 text-primary" />
              <p className="text-xl font-semibold text-card-foreground">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Process Section Component - Enhanced
export function ProcessSection({ service }) {
  const steps = service.processSteps || [
    {
      title: "Discovery & Requirement Analysis",
      description: "We start by understanding your business goals, users, and constraints, then translate them into a scoped technical plan and realistic timeline.",
    },
    {
      title: "Architecture & UX/UI Design",
      description: "Our architects choose a stack suited to your scale and compliance needs, while designers map user flows and interfaces before development begins.",
    },
    {
      title: "Agile Development & Quality Assurance",
      description: "Engineers build in two-week sprints with continuous testing, code review, and regular demos, so issues are caught early, and progress stays visible.",
    },
    {
      title: "Deployment, Support & Iteration",
      description: "After launch, we monitor performance, patch security issues, and support ongoing feature development as your business grows.",
    },
  ];

  return (
    <section className="bg-secondary px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Process"
          title={service.processSection?.title || "Our Software Development Process"}
          copy={
            service.processSection
              ? service.processSection.description
              : "A clear, structured approach to delivering high-quality software."
          }
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-lg border border-border bg-card p-6 relative"
            >
              <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Tech Stack Section Component - Enhanced
export function TechStackSection({ service }) {
  const techData = service.techStack || {
    title: "Technology We Use",
    description: "Our software development services are built on modern, well-supported technology chosen for long-term maintainability, not just what is trending.",
    frontend: ["React", "Next.js"],
    backend: ["Node.js", "Python"],
    databases: ["PostgreSQL", "MongoDB"],
    cloudDevOps: ["AWS", "Azure", "Docker"],
    aiAutomation: ["OpenAI", "custom machine learning integrations"],
  };

  // Prefer explicit labelled groups; otherwise collect every array-valued
  // category so services can name their techStack groups freely.
  const groups = Array.isArray(techData.groups) ? techData.groups : null;
  const allTech = groups
    ? []
    : Array.from(
        new Set(
          Object.entries(techData)
            .filter(
              ([key, value]) =>
                Array.isArray(value) &&
                key !== "title" &&
                key !== "description",
            )
            .flatMap(([, value]) => value),
        ),
      );

  return (
    <section className="border-y border-border bg-primary text-white px-5 py-24  md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Tech stack"
          title={techData.title}
          copy={techData.description}
        />
        {groups ? (
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {groups.map((group) => (
              <div key={group.label}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
                  {group.label}
                </h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {(group.items || []).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-3 text-sm font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {allTech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-3 text-sm font-semibold"
              >
                {item}
              </span>
            ))}
          </div>
        )}
        {techData.closingText ? (
          <p className="mx-auto mt-12 max-w-3xl text-center text-base leading-7 text-primary-foreground/80">
            {techData.closingText}
          </p>
        ) : null}
      </div>
    </section>
  );
}

// Featured Insights Component
export function FeaturedInsights() {
  const insights = [
    "How to scope a product build without bloating the first release",
    "When to modernize legacy systems instead of replacing them",
    "What strong discovery produces before development starts",
  ];

  return (
    <section className="bg-background px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Insights"
          title="Planning notes before the build gets expensive."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {insights.map((item) => (
            <article
              key={item}
              className="rounded-lg border border-border bg-card p-6"
            >
              <Compass className="mb-12 h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold leading-tight text-card-foreground">
                {item}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why Choose Us Component - Enhanced
export function WhyChooseUsSection({ service }) {
  const whyData = service.whyChooseUs || {
    title: "Why Choose Clickmasters as Your Software Development Partner",
    description: "There is no shortage of software development companies competing for your project. Here is what separates our software engineering services from a typical vendor:",
    reasons: [],
  };

  if (!whyData.reasons.length) return null;

  return (
    <section className="bg-background px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={whyData.title}
          copy={whyData.description}
        />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {whyData.reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-lg border border-border bg-card p-6"
            >
              <Target className="mb-4 h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold text-card-foreground">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Client Success Stories Component - NEW
export function ClientSuccessStories({ service }) {
  const testimonials = service.testimonials || [];

  if (!testimonials.length) return null;

  return (
    <section className="bg-muted px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title={service.testimonialsSection?.title || "Client Success Stories"}
          copy={
            service.testimonialsSection?.description ||
            "Hear from our clients about their experience working with us."
          }
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-card p-6 flex flex-col"
            >
              <Quote className="mb-4 h-6 w-6 text-primary" />
              <p className="flex-1 text-sm leading-7 text-card-foreground">
                "{testimonial.quote}"
              </p>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-semibold text-card-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.title}, {testimonial.company}
                </p>
                {testimonial.location ? (
                  <p className="text-xs text-muted-foreground">
                    {testimonial.location}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Industries Section Component - Enhanced
export function IndustriesSection({ service }) {
  const industries = service.industries || [];

  if (!industries.length) return null;

  return (
    <section className="bg-background px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Industries"
          title={service.industriesSection?.title || "Industries We Serve"}
          copy={
            service.industriesSection?.description ||
            "Our business software development experience spans regulated and high-growth sectors alike."
          }
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="rounded-lg border border-border bg-card p-6"
            >
              <Building className="mb-4 h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold text-card-foreground">
                {industry.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section Component
export function PricingSection({ plans, service }) {
  if (!plans || !plans.length) return null;

  return (
    <section id="pricing" className="bg-background px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Investment"
          title={service.pricingSection?.title || `${service.title} investment`}
          copy={
            service.pricingSection?.description ||
            `Flexible engagement models for ${service.title.toLowerCase()} scoped to your timeline, team size, and goals.`
          }
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={plan.type}
              className="rounded-lg border border-border bg-card p-6 text-card-foreground"
            >
              <CircleDollarSign className="mb-8 h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">{plan.type}</h3>
              <p className="mt-5 text-4xl font-semibold tracking-tight">
                {plan.investment}
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.16em] text-muted-foreground">
                {plan.timeline}
              </p>
              {plan.bestFor ? (
                <p className="mt-5 text-sm leading-6 text-muted-foreground">
                  {plan.bestFor}
                </p>
              ) : null}
              <div className="mt-7 space-y-3">
                {(plan.features || []).slice(0, 4).map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-3 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90"
              >
                {index === 0
                  ? "Get a quote"
                  : index === 1
                    ? "Start project"
                    : "Contact sales"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ Section Component
export function FaqSection({ service }) {
  const faqs = service.faqs || [];
  if (!faqs.length) return null;

  return (
    <section className="bg-secondary px-5 py-24 md:px-10">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="FAQ"
          title={service.faqsSection?.title || "Frequently Asked Questions"}
          copy={service.faqsSection?.description}
        />
        <div className="mt-14 divide-y divide-border rounded-lg border border-border bg-card">
          {faqs.map((item) => (
            <details key={item.question} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-card-foreground">
                {item.question}
                <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground transition group-open:rotate-90" />
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// Mid-page CTA band. Renders nothing unless the service supplies the label,
// so services without sectionCtas are unchanged.
export function SectionCta({ label }) {
  if (!label) return null;

  return (
    <section className="bg-background px-5 pb-8 md:px-10">
      <div className="mx-auto flex max-w-7xl justify-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground transition hover:opacity-90"
        >
          {label} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

// Final CTA Component
export function FinalCTA({ service }) {
  const cta = service.finalCta || {};

  return (
    <section className="bg-primary px-5 py-24 text-primary-foreground md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <MessageSquareText className="mb-8 h-7 w-7" />
          <h2 className="max-w-4xl text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[0.95] tracking-tight">
            {cta.title ||
              `Ready to shape your ${service.title.toLowerCase()} roadmap?`}
          </h2>
          {cta.description ? (
            <p className="mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/80">
              {cta.description}
            </p>
          ) : null}
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-bold text-primary transition hover:opacity-90"
          >
            {cta.primary || "Book a call"} <ArrowRight className="h-4 w-4" />
          </Link>
          {cta.secondary ? (
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
            >
              {cta.secondary}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}