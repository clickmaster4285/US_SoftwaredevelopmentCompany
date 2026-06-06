import Link from "next/link";
import { ArrowRight, BadgeCheck, Sparkles } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { iconMap, type IconName, type Stat } from "./service-data";

const defaultStats = [
  { value: "10+", label: "Years shipping digital products" },
  { value: "200+", label: "Projects launched" },
  { value: "24/7", label: "Support coverage" },
];

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground shadow-sm backdrop-blur">
      <Sparkles className="h-3.5 w-3.5 text-primary" />
      {children}
    </div>
  );
}

export function SectionHeading({
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
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-[clamp(2rem,5vw,4.6rem)] font-semibold leading-[0.98] tracking-tight text-foreground">
        {title}
      </h2>
      {copy ? (
        <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">{copy}</p>
      ) : null}
    </div>
  );
}

export function Hero({
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
        <div className="absolute inset-0 bg-secondary" />
      )}
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 mx-auto flex min-h-[68vh] max-w-7xl items-end">
        <div className="max-w-5xl text-background">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-[clamp(3.2rem,8vw,8.8rem)] font-semibold leading-[1.1] tracking-tight">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-background/80 md:text-xl">
            {copy}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:opacity-90"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-background/30 px-6 py-3 text-sm font-semibold text-background backdrop-blur transition hover:bg-background/10"
            >
              Book a call
            </Link>
          </div>
        </div>
      </div>
      {badge ? (
        <div className="relative z-10 mx-auto mt-8 max-w-7xl">
          <div className="inline-flex items-center gap-3 rounded-full bg-background/10 px-5 py-3 text-sm font-semibold text-background ring-1 ring-background/20 backdrop-blur">
            <BadgeCheck className="h-4 w-4 text-background" />
            {badge}
          </div>
        </div>
      ) : null}
    </section>
  );
}

export function StatsBand({ stats = defaultStats }: { stats?: Stat[] }) {
  const display = stats.length >= 3 ? stats : defaultStats;

  return (
    <section className="border-y border-border bg-primary px-5 py-10 text-primary-foreground md:px-10">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {display.slice(0, 3).map((stat) => (
          <div key={`${stat.value}-${stat.label}`}>
            <p className="text-4xl font-semibold tracking-tight md:text-6xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.16em] text-primary-foreground/60">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function IconFor({ name }: { name?: IconName }) {
  const Icon = name ? iconMap[name] : Sparkles;
  return <Icon className="h-5 w-5" />;
}
