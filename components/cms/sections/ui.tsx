// components/cms/sections/ui.tsx
// ClickMasters design primitives for CMS-created pages (same look as the
// landing / service pages: uppercase eyebrows, tight display headings,
// rounded-full buttons, rounded-3xl cards). Colours come from theme tokens,
// so section backgrounds (dark / primary / muted) restyle them automatically.
import Link from "next/link";
import { ArrowRight, Sparkles, type LucideIcon } from "lucide-react";
import { iconMap } from "@/data/main-services";
import { linkTarget } from "@/lib/cms/safe";
import type { CmsButton } from "../cmsContent";

export function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cx(
        "text-xs font-semibold uppercase tracking-[0.22em] text-primary",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "center",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  heading?: string;
  description?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
}) {
  if (!eyebrow && !heading && !description) return null;
  return (
    <div
      className={cx(
        "mb-12 md:mb-16",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      {heading ? (
        <Tag
          className={cx(
            "text-[clamp(2rem,4.6vw,4rem)] font-semibold leading-[1.02] tracking-tight text-foreground",
            eyebrow && "mt-4",
          )}
        >
          {heading}
        </Tag>
      ) : null}
      {description ? (
        <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function CmsLink({
  href,
  newTab,
  className,
  children,
}: {
  href: string;
  newTab?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const target = linkTarget(href, newTab);
  if (href.startsWith("/") && !target.target) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} {...target}>
      {children}
    </a>
  );
}

const BUTTON = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-md shadow-black/10 transition hover:-translate-y-0.5 hover:opacity-90",
  secondary:
    "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-muted",
  onImage:
    "inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10",
};

export function CmsButtonLink({
  button,
  variant = "primary",
  className,
}: {
  button?: CmsButton;
  variant?: keyof typeof BUTTON;
  className?: string;
}) {
  if (!button) return null;
  return (
    <CmsLink
      href={button.link}
      newTab={button.newTab}
      className={cx(BUTTON[variant], className)}
    >
      {button.text}
      {variant === "primary" ? (
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      ) : null}
    </CmsLink>
  );
}

/** buttonStyle from the CMS: "pill" (default), "outline", "text". */
export function ButtonRow({
  primary,
  secondary,
  onImage,
  buttonStyle,
  className,
}: {
  primary?: CmsButton;
  secondary?: CmsButton;
  onImage?: boolean;
  buttonStyle?: string;
  className?: string;
}) {
  if (!primary && !secondary) return null;
  const primaryVariant =
    buttonStyle === "outline" ? (onImage ? "onImage" : "secondary") : "primary";
  return (
    <div className={cx("flex flex-col gap-4 sm:flex-row", className)}>
      <CmsButtonLink button={primary} variant={primaryVariant} />
      <CmsButtonLink
        button={secondary}
        variant={onImage ? "onImage" : "secondary"}
      />
    </div>
  );
}

/**
 * Plain <img>: CMS images live on arbitrary hosts, and next/image only allows
 * the domains configured in next.config.mjs. Sources are pre-validated.
 */
export function CmsImg({
  src,
  alt = "",
  className,
  eager,
}: {
  src: string;
  alt?: string;
  className?: string;
  eager?: boolean;
}) {
  if (!src) return null;
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      referrerPolicy="no-referrer"
    />
  );
}

const ICONS = iconMap as Record<string, LucideIcon>;

/** Lucide icon by name (the site's icon map), an emoji, or the default sparkle. */
export function CmsIcon({
  name,
  className = "h-5 w-5",
}: {
  name?: string;
  className?: string;
}) {
  const Icon = name ? ICONS[name] : undefined;
  if (Icon) return <Icon className={className} aria-hidden="true" />;
  if (name && name.length <= 4 && !/^[\w-]+$/.test(name)) {
    return (
      <span className="text-xl leading-none" aria-hidden="true">
        {name}
      </span>
    );
  }
  return <Sparkles className={className} aria-hidden="true" />;
}
