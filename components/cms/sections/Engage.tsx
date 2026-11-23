// components/cms/sections/Engage.tsx
// Conversion-oriented CMS sections: faq, cta, contact, newsletter, blogPosts /
// relatedPosts — in the ClickMasters style.
import { ArrowRight, Mail, MapPin, Phone, Plus } from "lucide-react";
import type { CmsButton } from "../cmsContent";
import { ButtonRow, CmsImg, CmsLink, SectionHeading, cx } from "./ui";

/* -------------------------------- faq -------------------------------- */

export function CmsFaq({
  data,
}: {
  data: {
    heading: string;
    description: string;
    items: { question: string; answer: string }[];
  };
}) {
  return (
    <div className="mx-auto max-w-4xl">
      <SectionHeading heading={data.heading} description={data.description} />
      <div className="divide-y divide-border rounded-3xl border border-border bg-card shadow-sm">
        {data.items.map((item, i) => (
          <details
            key={i}
            className="group px-6 md:px-8 [&_summary::-webkit-details-marker]:hidden"
            open={i === 0}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-base font-semibold text-card-foreground md:text-lg">
              {item.question}
              <Plus
                className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-45"
                aria-hidden="true"
              />
            </summary>
            <p className="-mt-2 whitespace-pre-line pb-6 leading-7 text-muted-foreground">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------- cta -------------------------------- */

export function CmsCta({
  data,
}: {
  data: {
    heading: string;
    description: string;
    primary?: CmsButton;
    secondary?: CmsButton;
    buttonStyle: string;
  };
}) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-[var(--cms-dark)] px-6 py-14 text-center text-white shadow-2xl shadow-black/10 md:px-16 md:py-20 [--background:var(--cms-dark)] [--border:rgb(255_255_255/0.2)] [--card:rgb(255_255_255/0.06)] [--foreground:#fff] [--muted:rgb(255_255_255/0.1)] [--primary-foreground:var(--cms-on-dark-primary-foreground)] [--primary:var(--cms-on-dark-primary)]">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-2xl" />
      <h2 className="relative mx-auto max-w-3xl text-[clamp(2rem,4.4vw,3.8rem)] font-semibold leading-[1.04] tracking-tight">
        {data.heading}
      </h2>
      {data.description ? (
        <p className="relative mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
          {data.description}
        </p>
      ) : null}
      <ButtonRow
        primary={data.primary}
        secondary={data.secondary}
        buttonStyle={data.buttonStyle}
        onImage
        className="relative mt-9 justify-center"
      />
    </div>
  );
}

/* ------------------------------ contact ------------------------------ */

const field =
  "w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20";

export function CmsContact({
  data,
}: {
  data: {
    heading: string;
    description: string;
    image: string;
    email: string;
    phone: string;
    address: string;
    formAction: string;
    buttonLabel: string;
  };
}) {
  const details = [
    data.email && {
      Icon: Mail,
      label: data.email,
      href: `mailto:${data.email}`,
    },
    data.phone && {
      Icon: Phone,
      label: data.phone,
      href: `tel:${data.phone.replace(/[^\d+]/g, "")}`,
    },
    data.address && { Icon: MapPin, label: data.address, href: "" },
  ].filter(Boolean) as { Icon: typeof Mail; label: string; href: string }[];

  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <div>
        <SectionHeading
          heading={data.heading}
          description={data.description}
          align="left"
        />
        <ul className="-mt-4 space-y-4">
          {details.map(({ Icon, label, href }) => (
            <li key={label} className="flex items-center gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              {href ? (
                <a
                  href={href}
                  className="font-medium text-foreground transition hover:opacity-70"
                >
                  {label}
                </a>
              ) : (
                <span className="font-medium text-foreground">{label}</span>
              )}
            </li>
          ))}
        </ul>
        {data.image ? (
          <div className="mt-10 overflow-hidden rounded-3xl border border-border">
            <CmsImg
              src={data.image}
              alt=""
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        ) : null}
      </div>

      {data.formAction ? (
        <form
          action={data.formAction}
          method="post"
          className="grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm md:grid-cols-2 md:p-8"
        >
          <input
            name="name"
            required
            placeholder="Your name"
            aria-label="Your name"
            className={field}
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email address"
            aria-label="Email address"
            className={field}
          />
          <input
            name="phone"
            placeholder="Phone (optional)"
            aria-label="Phone"
            className={cx(field, "md:col-span-2")}
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project"
            aria-label="Message"
            className={cx(field, "md:col-span-2")}
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:opacity-90 md:col-span-2 md:justify-self-start"
          >
            {data.buttonLabel || "Send message"}{" "}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      ) : (
        <div className="flex flex-col justify-center rounded-3xl border border-border bg-card p-8 shadow-sm md:p-12">
          <p className="text-2xl font-semibold tracking-tight text-card-foreground">
            Tell us about your project.
          </p>
          <p className="mt-3 leading-7 text-muted-foreground">
            We reply with scope, timeline, and a quote.
          </p>
          <CmsLink
            href="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 self-start rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:opacity-90"
          >
            {data.buttonLabel || "Start a project"}{" "}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </CmsLink>
        </div>
      )}
    </div>
  );
}

/* ----------------------------- newsletter ----------------------------- */

export function CmsNewsletter({
  data,
}: {
  data: {
    heading: string;
    description: string;
    formAction: string;
    buttonLabel: string;
  };
}) {
  return (
    <div className="mx-auto max-w-3xl rounded-[2rem] border border-border bg-card px-6 py-12 text-center shadow-sm md:px-12">
      {data.heading ? (
        <h2 className="text-[clamp(1.8rem,3.6vw,3rem)] font-semibold leading-[1.05] tracking-tight text-card-foreground">
          {data.heading}
        </h2>
      ) : null}
      {data.description ? (
        <p className="mx-auto mt-4 max-w-xl leading-7 text-muted-foreground">
          {data.description}
        </p>
      ) : null}
      {data.formAction ? (
        <form
          action={data.formAction}
          method="post"
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            aria-label="Email address"
            className={cx(field, "rounded-full")}
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90"
          >
            {data.buttonLabel || "Subscribe"}
          </button>
        </form>
      ) : (
        <CmsLink
          href="/contact"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90"
        >
          {data.buttonLabel || "Get in touch"}
        </CmsLink>
      )}
    </div>
  );
}

/* ------------------------- blogPosts / relatedPosts ------------------------- */

export type CmsPostCard = {
  title: string;
  url: string;
  excerpt: string;
  image: string;
  date?: string;
};

export function CmsPosts({
  data,
}: {
  data: { heading: string; description: string; posts: CmsPostCard[] };
}) {
  return (
    <div>
      <SectionHeading heading={data.heading} description={data.description} />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data.posts.map((post, i) => (
          <CmsLink
            key={`${post.url}-${i}`}
            href={post.url}
            className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
          >
            <div className="overflow-hidden bg-muted">
              {post.image ? (
                <CmsImg
                  src={post.image}
                  alt=""
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="aspect-[16/10] w-full bg-gradient-to-br from-muted to-border" />
              )}
            </div>
            <div className="flex flex-1 flex-col p-6">
              {post.date ? (
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {post.date}
                </p>
              ) : null}
              <h3 className="mt-2 text-lg font-semibold leading-snug text-card-foreground">
                {post.title}
              </h3>
              {post.excerpt ? (
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {post.excerpt}
                </p>
              ) : null}
              <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-primary">
                Read more{" "}
                <ArrowRight
                  className="h-4 w-4 transition group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </div>
          </CmsLink>
        ))}
      </div>
    </div>
  );
}
