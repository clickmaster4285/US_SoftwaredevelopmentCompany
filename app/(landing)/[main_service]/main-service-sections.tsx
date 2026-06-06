import Link from "next/link";
import {
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
} from "lucide-react";
import { IconFor, SectionHeading } from "./[sub_service]/landing-primitives";
import type { MainService, ServicePricingTier } from "./[sub_service]/service-data";

const appIdeas = [
  "Customer portals",
  "Internal dashboards",
  "Workflow automation",
  "Data and reporting systems",
];

const industries = [
  "SaaS",
  "Healthcare",
  "Finance",
  "Retail",
  "Education",
  "Logistics",
];

const techStack = [
  "Next.js",
  "React",
  "Node.js",
  "Python",
  "PostgreSQL",
  "AWS",
  "Azure",
  "Docker",
];

const insights = [
  "How to scope a product build without bloating the first release",
  "When to modernize legacy systems instead of replacing them",
  "What strong discovery produces before development starts",
];

export function MainServiceBreadcrumb({ service }: { service: MainService }) {
  return (
    <div className="relative z-20 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 py-4 md:px-10">
        <nav className="flex items-center gap-2 text-sm font-medium">
          <Link
            href="/"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Home
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="font-semibold text-foreground">{service.title}</span>
        </nav>
      </div>
    </div>
  );
}

export function MainServiceHero({ service }: { service: MainService }) {
  return (
    <section className="relative overflow-hidden bg-background px-5 py-24 md:px-10 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-border" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            {service.heroBadge || "Main service"}
          </div>
          <h1 className="max-w-5xl text-[clamp(3rem,8vw,8rem)] font-semibold leading-[0.95] tracking-tight text-foreground">
            {service.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            {service.tagline}. {service.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-accent hover:text-accent-foreground"
            >
              View investment
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
              <div key={`${stat.value}-${stat.label}`} className="rounded-lg border border-border bg-card/90 p-4 backdrop-blur">
                <p className="text-2xl font-semibold text-card-foreground">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExploreSection({ service }: { service: MainService }) {
  return (
    <section className="bg-background px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Explore"
          title={`Everything inside ${service.title}`}
          copy="Choose the focused service line that best matches your product, platform, or operational goal."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {(service.subServices || []).map((item) => (
            <Link
              key={item.slug}
              href={`/${service.slug}/${item.slug}`}
              className="group rounded-lg border border-border bg-card p-6 text-card-foreground transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="mb-7 flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <IconFor name={item.icon} />
              </span>
              <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
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

export function PainPointsSolutions({ service }: { service: MainService }) {
  const painPoints = [
    "Projects that start fast but become hard to maintain",
    "Disconnected tools, data, and customer workflows",
    "Unclear delivery plans that make budgets drift",
  ];
  const solutions = service.features?.length
    ? service.features
    : [
      {
        title: "Clear architecture",
        description: "A practical technical plan before production work expands.",
      },
      {
        title: "Focused delivery",
        description: "Short feedback loops, visible progress, and usable releases.",
      },
      {
        title: "Launch support",
        description: "Monitoring, documentation, and iteration after go-live.",
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
            {solutions.slice(0, 3).map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <IconFor name={item.icon} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground">{item.title}</h3>
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

export function TrustedClientsSection({ service }: { service: MainService }) {
  const clients = service.trustedClients || [];

  return (
    <section className="bg-background px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Trusted clients"
          title={`${service.title} for teams with real stakes`}
          copy={`We partner with organizations that need dependable ${service.title.toLowerCase()} delivery.`}
        />
        <div className="mt-14 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {clients.slice(0, 5).map((client) => (
            <div key={client.name} className="rounded-lg border border-border bg-card p-5">
              <span className="mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <IconFor name={client.icon} />
              </span>
              <h3 className="font-semibold text-card-foreground">{client.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{client.industry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
            <div key={item} className="rounded-lg border border-border bg-card p-6">
              <Layers3 className="mb-10 h-6 w-6 text-primary" />
              <p className="text-xl font-semibold text-card-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessPage({ service }: { service: MainService }) {
  const steps = [
    "Discovery",
    "Architecture",
    "Design and build",
    "QA and launch",
    "Support",
  ];

  return (
    <section className="bg-background px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Process"
          title={`${service.title} with a clear delivery path`}
          copy="A practical sequence from first workshop to production release."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step} className="rounded-lg border border-border bg-card p-6">
              <p className="text-sm font-semibold text-primary">0{index + 1}</p>
              <Workflow className="mt-10 h-5 w-5 text-muted-foreground" />
              <p className="mt-5 text-lg font-semibold text-card-foreground">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechStackSection() {
  return (
    <section className="border-y border-border bg-primary px-5 py-24 text-primary-foreground md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Tech stack"
          title="Modern tools with boring reliability."
          copy="We choose stacks for maintainability, hiring reality, and production constraints."
        />
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {techStack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-3 text-sm font-semibold"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedInsights() {
  return (
    <section className="bg-background px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Insights"
          title="Planning notes before the build gets expensive."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {insights.map((item) => (
            <article key={item} className="rounded-lg border border-border bg-card p-6">
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

export function WhyChooseUs({ service }: { service: MainService }) {
  const points = [
    `Specialists across ${service.title.toLowerCase()}`,
    "Reusable patterns instead of one-off delivery",
    "Clear communication, demos, and handover",
  ];

  return (
    <section className="bg-secondary px-5 py-24 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Why choose us
          </p>
          <h2 className="mt-4 text-[clamp(2.2rem,5vw,5rem)] font-semibold leading-[0.98] tracking-tight text-foreground">
            Built for teams that need momentum and control.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {points.map((point) => (
            <div key={point} className="rounded-lg border border-border bg-card p-6">
              <CheckCircle2 className="mb-8 h-5 w-5 text-primary" />
              <p className="text-lg font-semibold leading-tight text-card-foreground">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PricingSection({
  plans,
  service,
}: {
  plans: ServicePricingTier[];
  service: MainService;
}) {
  if (!plans.length) return null;

  return (
    <section id="pricing" className="bg-background px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Investment"
          title={`${service.title} investment`}
          copy={`Flexible engagement models for ${service.title.toLowerCase()} scoped to your timeline, team size, and goals.`}
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
                  <div key={feature} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90"
              >
                {index === 0 ? "Get a quote" : index === 1 ? "Start project" : "Contact sales"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustriesSection() {
  return (
    <section className="bg-muted px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Industries"
          title="Adapted to your operating reality."
        />
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-lg border border-border bg-card p-5 text-center font-semibold text-card-foreground"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection({ service }: { service: MainService }) {
  return (
    <section className="bg-background px-5 py-24 md:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <Quote className="mx-auto h-8 w-8 text-primary" />
        <p className="mt-8 text-[clamp(1.8rem,4vw,3.5rem)] font-semibold leading-tight text-foreground">
          The team gave us the clarity, delivery rhythm, and technical depth we
          needed to move {service.title.toLowerCase()} from plan to production.
        </p>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Product leadership team
        </p>
      </div>
    </section>
  );
}

export function FaqSection({ service }: { service: MainService }) {
  const faqs = service.faqs || [];
  if (!faqs.length) return null;

  return (
    <section className="bg-secondary px-5 py-24 md:px-10">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="FAQ"
          title={`Common questions about ${service.title.toLowerCase()}`}
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

export function FinalCTA({ service }: { service: MainService }) {
  return (
    <section className="bg-primary px-5 py-24 text-primary-foreground md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <MessageSquareText className="mb-8 h-7 w-7" />
          <h2 className="max-w-4xl text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[0.95] tracking-tight">
            Ready to shape your {service.title.toLowerCase()} roadmap?
          </h2>
        </div>
        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-bold text-primary transition hover:opacity-90"
        >
          Book a call <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
