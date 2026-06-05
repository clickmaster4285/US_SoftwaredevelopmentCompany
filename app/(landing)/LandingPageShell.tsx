import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { iconMap, mainServicesData } from "@/data/main-services";

type IconName = keyof typeof iconMap;

type Stat = {
  value: string;
  label: string;
};

type SubService = {
  title: string;
  slug: string;
  description: string;
  icon?: IconName;
  heroImage?: string;
  lead?: string;
  highlights?: string[];
  pricing?: Array<{
    type: string;
    investment: string;
    timeline: string;
  }>;
};

type MainService = {
  title: string;
  slug: string;
  icon?: IconName;
  tagline: string;
  description: string;
  heroBadge?: string;
  heroImage?: string;
  stats?: Stat[];
  subServices?: SubService[];
};

export const services = mainServicesData as Record<string, MainService>;

const defaultStats = [
  { value: "10+", label: "Years shipping digital products" },
  { value: "200+", label: "Projects launched" },
  { value: "24/7", label: "Support coverage" },
];

const processSteps = [
  "Discovery and technical mapping",
  "Experience design and architecture",
  "Sprint delivery with weekly demos",
  "Launch, monitoring, and optimization",
];

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f7f2ea] text-[#171717]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black/60 shadow-sm shadow-black/[0.03] backdrop-blur">
      <Sparkles className="h-3.5 w-3.5 text-[#e05b35]" />
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e05b35]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-[clamp(2rem,5vw,4.6rem)] font-semibold leading-[0.98] tracking-tight">
        {title}
      </h2>
      {copy ? (
        <p className="mt-5 text-base leading-7 text-black/62 md:text-lg">{copy}</p>
      ) : null}
    </div>
  );
}

function Hero({
  eyebrow,
  title,
  copy,
  image,
  badge,
  ctaHref = "/contact",
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image?: string;
  badge?: string;
  ctaHref?: string;
}) {
  return (
    <section className="relative min-h-[92vh] overflow-hidden px-5 pb-16 pt-32 md:px-10 md:pt-40">
      {image ? (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#f6c85f_0,transparent_28%),radial-gradient(circle_at_82%_18%,#6bc4b8_0,transparent_26%),linear-gradient(135deg,#191919,#4e3429_48%,#e8d5bb)]" />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.74),rgba(0,0,0,.44)_45%,rgba(0,0,0,.15))]" />
      <div className="relative z-10 mx-auto flex min-h-[68vh] max-w-7xl items-end">
        <div className="max-w-4xl text-white">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-[clamp(3.2rem,8vw,8.8rem)] font-semibold leading-[0.88] tracking-tight">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
            {copy}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f6c85f] px-6 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-white"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Book a call
            </Link>
          </div>
        </div>
      </div>
      {badge ? (
        <div className="relative z-10 mx-auto mt-8 max-w-7xl">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/12 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur">
            <BadgeCheck className="h-4 w-4 text-[#f6c85f]" />
            {badge}
          </div>
        </div>
      ) : null}
    </section>
  );
}

function StatsBand({ stats = defaultStats }: { stats?: Stat[] }) {
  const display = stats.length >= 3 ? stats : defaultStats;

  return (
    <section className="border-y border-black/10 bg-[#171717] px-5 py-10 text-white md:px-10">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {display.slice(0, 3).map((stat) => (
          <div key={`${stat.value}-${stat.label}`}>
            <p className="text-4xl font-semibold tracking-tight md:text-6xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.16em] text-white/52">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function IconFor({ name }: { name?: IconName }) {
  const Icon = name ? iconMap[name] : Sparkles;
  return <Icon className="h-5 w-5" />;
}

export function AboutPage() {
  const values = [
    "Architecture before acceleration",
    "Transparent delivery rhythms",
    "Design that respects real users",
    "Post-launch ownership",
  ];

  return (
    <PageFrame>
      <Hero
        eyebrow="About Clickmasters"
        title="Digital products with studio craft and engineering depth."
        copy="We are a software and design team building websites, apps, automation systems, and AI-enabled products for companies that need reliable execution without losing the spark."
        badge="Strategy, design, engineering, and support under one roof"
      />
      <StatsBand />
      <section className="px-5 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <SectionHeading
            eyebrow="How we work"
            title="Senior thinking at every turn."
            copy="Our work starts with the business constraint, then moves into product structure, interface quality, and clean implementation."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-[8px] border border-black/10 bg-white p-6 shadow-sm"
              >
                <CheckCircle2 className="mb-5 h-5 w-5 text-[#e05b35]" />
                <p className="text-xl font-semibold leading-tight">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#fffaf1] px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Capabilities"
            title="One team for the full build."
            copy="From product strategy to cloud delivery, the pages below are powered by the service catalog used in the navigation."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {Object.values(services)
              .slice(0, 6)
              .map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
                  className="group rounded-[8px] border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="mb-7 flex h-11 w-11 items-center justify-center rounded-full bg-[#171717] text-white">
                    <IconFor name={service.icon} />
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-black/58">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#e05b35]">
                    View service <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}

export function ContactPage() {
  return (
    <PageFrame>
      <Hero
        eyebrow="Contact"
        title="Bring the messy brief. We will shape the build."
        copy="Tell us what you are trying to launch, repair, automate, or scale. We will come back with the cleanest route to production."
        badge="Response within one business day"
      />
      <section className="px-5 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Start here"
              title="A direct line to the team."
              copy="Send a short note with your goals, timeline, and current stack if you have one."
            />
            <div className="mt-10 space-y-4">
              {[
                {
                  icon: Mail,
                  label: "sales@Clickmasterssoftwaredevelopmentcompany.com",
                },
                { icon: Phone, label: "+1 325 2024074" },
                { icon: MapPin, label: "Remote-first delivery across US, Europe, Canada, and Australia" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-[8px] bg-white p-5 shadow-sm ring-1 ring-black/10"
                >
                  <item.icon className="mt-0.5 h-5 w-5 text-[#e05b35]" />
                  <p className="font-medium leading-6">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <form className="rounded-[8px] bg-[#171717] p-6 text-white shadow-2xl md:p-10">
            <div className="grid gap-5 md:grid-cols-2">
              {["Name", "Email", "Company", "Budget"].map((label) => (
                <label key={label} className="grid gap-2 text-sm font-semibold">
                  {label}
                  <input
                    className="h-12 rounded-[8px] border border-white/12 bg-white/8 px-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#f6c85f]"
                    placeholder={label}
                  />
                </label>
              ))}
            </div>
            <label className="mt-5 grid gap-2 text-sm font-semibold">
              Project notes
              <textarea
                className="min-h-40 rounded-[8px] border border-white/12 bg-white/8 p-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#f6c85f]"
                placeholder="What are you building?"
              />
            </label>
            <button
              type="button"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#f6c85f] px-6 py-3 text-sm font-bold text-black transition hover:bg-white"
            >
              Send inquiry <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </PageFrame>
  );
}

export function MainServicePage({ service }: { service: MainService }) {
  return (
    <PageFrame>
      <Hero
        eyebrow="Main service"
        title={service.title}
        copy={`${service.tagline}. ${service.description}`}
        image={service.heroImage}
        badge={service.heroBadge}
      />
      <StatsBand stats={service.stats} />
      <section className="px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Sub services"
            title={`Explore ${service.title}`}
            copy="Choose the focused service line that best matches your product, platform, or operational goal."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {(service.subServices || []).map((item) => (
              <Link
                key={item.slug}
                href={`/${service.slug}/${item.slug}`}
                className="group rounded-[8px] border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="mb-7 flex h-11 w-11 items-center justify-center rounded-full bg-[#fff0d0] text-[#e05b35]">
                  <IconFor name={item.icon} />
                </span>
                <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/58">
                  {item.description}
                </p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#e05b35]">
                  Read more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ProcessSection />
    </PageFrame>
  );
}

export function SubServicePage({
  service,
  subService,
}: {
  service: MainService;
  subService: SubService;
}) {
  const highlights = subService.highlights || [
    "Clear product and technical roadmap",
    "Scalable implementation standards",
    "Launch support and measurable outcomes",
  ];

  return (
    <PageFrame>
      <Hero
        eyebrow={service.title}
        title={subService.title}
        copy={subService.lead || subService.description}
        image={subService.heroImage || service.heroImage}
        badge={subService.description}
      />
      <section className="px-5 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e05b35]">
              Delivery focus
            </p>
            <h2 className="mt-4 text-[clamp(2.2rem,5vw,5rem)] font-semibold leading-[0.95] tracking-tight">
              Built to move from idea to production.
            </h2>
            <p className="mt-6 text-lg leading-8 text-black/62">
              We combine planning, design, engineering, QA, and support so this
              work lands as a usable product, not a loose set of assets.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-[8px] border border-black/10 bg-white p-6 shadow-sm"
              >
                <CheckCircle2 className="mb-6 h-5 w-5 text-[#e05b35]" />
                <p className="text-xl font-semibold leading-tight">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {subService.pricing ? (
        <section className="bg-[#fffaf1] px-5 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Engagements"
              title="Typical project shapes"
              copy="Use these as planning anchors. Final scope depends on product complexity and integrations."
            />
            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {subService.pricing.map((tier) => (
                <div key={tier.type} className="rounded-[8px] bg-white p-6 ring-1 ring-black/10">
                  <Clock3 className="mb-8 h-5 w-5 text-[#e05b35]" />
                  <h3 className="text-2xl font-semibold">{tier.type}</h3>
                  <p className="mt-5 text-4xl font-semibold tracking-tight">
                    {tier.investment}
                  </p>
                  <p className="mt-3 text-sm uppercase tracking-[0.16em] text-black/45">
                    {tier.timeline}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <ProcessSection />
    </PageFrame>
  );
}

function ProcessSection() {
  return (
    <section className="bg-[#171717] px-5 py-24 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Process"
          title="Structured enough to stay predictable."
          copy="Every engagement has a clear path from first call to production handoff."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step} className="rounded-[8px] border border-white/10 bg-white/8 p-6">
              <p className="text-sm font-semibold text-[#f6c85f]">
                0{index + 1}
              </p>
              <p className="mt-12 text-xl font-semibold leading-tight">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
