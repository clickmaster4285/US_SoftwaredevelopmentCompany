// components/cms/sections/Grids.tsx
// Card / list CMS sections in the ClickMasters style: features, services,
// cards, benefits, process, timeline, stats, logos, gallery, team,
// testimonials, pricing, bento.
import { ArrowRight, Check, Quote } from "lucide-react";
import { gridColumns } from "../CmsSectionShell";
import type { CmsButton } from "../cmsContent";
import { CmsIcon, CmsImg, CmsLink, SectionHeading, cx } from "./ui";

type Heading = { eyebrow?: string; heading: string; description: string };

/* ------------------------- features / services / cards ------------------------- */

export type GridItem = {
  icon: string;
  title: string;
  description: string;
  image: string;
  url: string;
  linkLabel: string;
};

export function CmsCardGrid({
  data,
  variant,
  columns,
}: {
  data: Heading & { items: GridItem[] };
  variant: "features" | "services" | "cards";
  columns: number;
}) {
  return (
    <div>
      <SectionHeading
        eyebrow={data.eyebrow}
        heading={data.heading}
        description={data.description}
      />
      <div className={cx("grid gap-5", gridColumns(columns))}>
        {data.items.map((item, i) => {
          const body = (
            <>
              {item.image && variant !== "services" ? (
                <div className="-mx-7 -mt-7 mb-6 overflow-hidden rounded-t-3xl bg-muted">
                  <CmsImg
                    src={item.image}
                    alt={item.title}
                    className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              ) : variant !== "cards" ? (
                <span className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <CmsIcon name={item.icon} />
                </span>
              ) : null}
              <h3 className="text-xl font-semibold tracking-tight text-card-foreground">
                {item.title}
              </h3>
              {item.description ? (
                <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
                  {item.description}
                </p>
              ) : null}
              {item.url ? (
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  {item.linkLabel || "Learn more"}
                  <ArrowRight
                    className="h-4 w-4 transition group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              ) : null}
            </>
          );
          const className =
            "group flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5";
          return item.url ? (
            <CmsLink key={i} href={item.url} className={className}>
              {body}
            </CmsLink>
          ) : (
            <div key={i} className={className}>
              {body}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------ benefits ------------------------------ */

export function CmsBenefits({
  data,
  columns,
}: {
  data: Heading & { items: { title: string; description: string }[] };
  columns: number;
}) {
  return (
    <div>
      <SectionHeading heading={data.heading} description={data.description} />
      <div className={cx("grid gap-x-10 gap-y-8", gridColumns(columns))}>
        {data.items.map((item, i) => (
          <div key={i} className="flex gap-4">
            <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Check className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              {item.description ? (
                <p className="mt-2 leading-7 text-muted-foreground">
                  {item.description}
                </p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ process ------------------------------ */

export function CmsProcess({
  data,
  columns,
}: {
  data: Heading & { items: { title: string; description: string }[] };
  columns: number;
}) {
  return (
    <div>
      <SectionHeading heading={data.heading} description={data.description} />
      <ol className={cx("grid gap-5", gridColumns(columns))}>
        {data.items.map((item, i) => (
          <li
            key={i}
            className="relative rounded-3xl border border-border bg-card p-7 shadow-sm"
          >
            <span className="text-5xl font-semibold tracking-tight text-primary/25">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-xl font-semibold tracking-tight text-card-foreground">
              {item.title}
            </h3>
            {item.description ? (
              <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
                {item.description}
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ------------------------------ timeline ------------------------------ */

export function CmsTimeline({
  data,
}: {
  data: Heading & {
    items: { date: string; title: string; description: string }[];
  };
}) {
  return (
    <div>
      <SectionHeading heading={data.heading} description={data.description} />
      <ol className="relative mx-auto max-w-3xl border-l border-border pl-8">
        {data.items.map((item, i) => (
          <li key={i} className="relative pb-10 last:pb-0">
            <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-background bg-primary" />
            {item.date ? (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {item.date}
              </p>
            ) : null}
            <h3 className="mt-2 text-xl font-semibold text-foreground">
              {item.title}
            </h3>
            {item.description ? (
              <p className="mt-2 leading-7 text-muted-foreground">
                {item.description}
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ------------------------------ stats ------------------------------ */

export function CmsStats({
  data,
}: {
  data: Heading & { items: { value: string; label: string }[] };
}) {
  const cols =
    data.items.length >= 4
      ? "md:grid-cols-4"
      : data.items.length === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-3";
  return (
    <div>
      <SectionHeading heading={data.heading} description={data.description} />
      <div className={cx("grid grid-cols-2 gap-8", cols)}>
        {data.items.map((stat, i) => (
          <div key={i} className="border-t border-border pt-6">
            <p className="text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              {stat.value}
            </p>
            {stat.label ? (
              <p className="mt-2 text-sm uppercase tracking-[0.16em] text-muted-foreground">
                {stat.label}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ logos ------------------------------ */

export function CmsLogos({
  data,
}: {
  data: {
    heading: string;
    items: { image: string; name: string; url: string }[];
  };
}) {
  return (
    <div>
      {data.heading ? (
        <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          {data.heading}
        </p>
      ) : null}
      <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
        {data.items.map((logo, i) => {
          const mark = logo.image ? (
            <CmsImg
              src={logo.image}
              alt={logo.name}
              className="h-9 w-auto max-w-[160px] object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            />
          ) : (
            <span className="text-lg font-semibold tracking-tight text-muted-foreground">
              {logo.name}
            </span>
          );
          return (
            <li key={i}>
              {logo.url ? (
                <CmsLink href={logo.url} className="block">
                  {mark}
                </CmsLink>
              ) : (
                mark
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ------------------------------ gallery ------------------------------ */

export function CmsGallery({
  data,
  columns,
}: {
  data: Heading & { items: { image: string; caption: string }[] };
  columns: number;
}) {
  return (
    <div>
      <SectionHeading heading={data.heading} description={data.description} />
      <div className={cx("grid gap-5", gridColumns(columns))}>
        {data.items.map((item, i) => (
          <figure
            key={i}
            className="group overflow-hidden rounded-3xl border border-border bg-card"
          >
            <div className="overflow-hidden bg-muted">
              <CmsImg
                src={item.image}
                alt={item.caption}
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              />
            </div>
            {item.caption ? (
              <figcaption className="px-5 py-4 text-sm text-muted-foreground">
                {item.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ team ------------------------------ */

export function CmsTeam({
  data,
  columns,
}: {
  data: Heading & {
    items: { name: string; role: string; image: string; bio: string }[];
  };
  columns: number;
}) {
  return (
    <div>
      <SectionHeading heading={data.heading} description={data.description} />
      <div className={cx("grid gap-5", gridColumns(columns))}>
        {data.items.map((m, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
          >
            {m.image ? (
              <CmsImg
                src={m.image}
                alt={m.name}
                className="aspect-[4/5] w-full object-cover"
              />
            ) : (
              <div className="flex aspect-[4/5] w-full items-center justify-center bg-muted text-5xl font-semibold text-muted-foreground">
                {m.name.charAt(0).toUpperCase()}
              </div>
            )}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-card-foreground">
                {m.name}
              </h3>
              {m.role ? (
                <p className="mt-1 text-sm text-primary">{m.role}</p>
              ) : null}
              {m.bio ? (
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {m.bio}
                </p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------- testimonials --------------------------- */

export function CmsTestimonials({
  data,
  columns,
}: {
  data: {
    heading: string;
    items: { quote: string; name: string; role: string; image: string }[];
  };
  columns: number;
}) {
  return (
    <div>
      <SectionHeading heading={data.heading} />
      <div className={cx("grid gap-5", gridColumns(columns))}>
        {data.items.map((t, i) => (
          <figure
            key={i}
            className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm"
          >
            <Quote className="h-8 w-8 text-primary/40" aria-hidden="true" />
            <blockquote className="mt-5 flex-1 text-base leading-8 text-card-foreground md:text-lg">
              “{t.quote}”
            </blockquote>
            {t.name ? (
              <figcaption className="mt-7 flex items-center gap-3 border-t border-border pt-5">
                {t.image ? (
                  <CmsImg
                    src={t.image}
                    alt={t.name}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                ) : null}
                <span>
                  <span className="block font-semibold text-card-foreground">
                    {t.name}
                  </span>
                  {t.role ? (
                    <span className="block text-sm text-muted-foreground">
                      {t.role}
                    </span>
                  ) : null}
                </span>
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ pricing ------------------------------ */

export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta?: CmsButton;
  featured: boolean;
};

export function CmsPricing({
  data,
  columns,
}: {
  data: Heading & { items: PricingPlan[] };
  columns: number;
}) {
  return (
    <div>
      <SectionHeading heading={data.heading} description={data.description} />
      <div className={cx("grid items-stretch gap-5", gridColumns(columns))}>
        {data.items.map((plan, i) => (
          <div
            key={i}
            className={cx(
              "relative flex flex-col rounded-3xl border p-8 shadow-sm",
              plan.featured
                ? "border-primary bg-primary text-primary-foreground shadow-xl shadow-black/10 [--muted-foreground:color-mix(in_oklab,var(--primary-foreground)_75%,transparent)]"
                : "border-border bg-card text-card-foreground",
            )}
          >
            {plan.featured ? (
              <span className="absolute right-6 top-6 rounded-full bg-primary-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Popular
              </span>
            ) : null}
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            {plan.description ? (
              <p className="mt-2 text-sm text-muted-foreground">
                {plan.description}
              </p>
            ) : null}
            <p className="mt-6 flex items-baseline gap-1">
              <span className="text-5xl font-semibold tracking-tight">
                {plan.price}
              </span>
              {plan.period ? (
                <span className="text-sm text-muted-foreground">
                  {plan.period}
                </span>
              ) : null}
            </p>
            {plan.features.length ? (
              <ul className="mt-8 flex-1 space-y-3 text-sm">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex gap-3">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0"
                      aria-hidden="true"
                    />
                    {f}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex-1" />
            )}
            {plan.cta ? (
              <CmsLink
                href={plan.cta.link}
                className={cx(
                  "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition hover:opacity-90",
                  plan.featured
                    ? "bg-primary-foreground text-primary"
                    : "bg-primary text-primary-foreground",
                )}
              >
                {plan.cta.text}
              </CmsLink>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ bento ------------------------------ */

const SPANS: Record<string, string> = {
  "1x1": "",
  "2x1": "md:col-span-2",
  "1x2": "md:row-span-2",
  "2x2": "md:col-span-2 md:row-span-2",
};

export function CmsBento({
  data,
}: {
  data: {
    heading: string;
    items: {
      title: string;
      description: string;
      span: string;
      image: string;
    }[];
  };
}) {
  return (
    <div>
      <SectionHeading heading={data.heading} />
      <div className="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-5 md:grid-cols-4">
        {data.items.map((item, i) => (
          <div
            key={i}
            className={cx(
              "relative flex flex-col justify-end overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm",
              SPANS[item.span] ?? "",
            )}
          >
            {item.image ? (
              <>
                <CmsImg
                  src={item.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-black/10" />
              </>
            ) : null}
            <div className={cx("relative", item.image && "text-white")}>
              <h3 className="text-xl font-semibold tracking-tight">
                {item.title}
              </h3>
              {item.description ? (
                <p
                  className={cx(
                    "mt-2 text-sm leading-6",
                    item.image ? "text-white/80" : "text-muted-foreground",
                  )}
                >
                  {item.description}
                </p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
