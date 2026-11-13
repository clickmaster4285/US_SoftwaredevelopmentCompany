// components/cms/CmsSectionShell.tsx
// Applies a CMS section's layout settings with the site's own tokens:
//   width      narrow | default | wide | superWide | full
//   paddingY   [top, bottom] px (scaled down on small screens)
//   background default | light | muted | primary | dark
//   motion     see CmsReveal
// Dark / primary backgrounds re-map the theme tokens locally, so every child
// component (headings, cards, buttons) switches to light-on-dark by itself.
import type { CSSProperties } from "react";
import CmsReveal from "./CmsReveal";
import { cx } from "./sections/ui";

// Must match the variants in CmsReveal (a client module, so not imported here).
const MOTIONS = new Set([
  "fade-up",
  "fade",
  "slide-in",
  "slide-left",
  "slide-right",
  "zoom",
]);
const hasMotion = (m: unknown): m is string =>
  typeof m === "string" && MOTIONS.has(m);

const WIDTHS: Record<string, string> = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
  superWide: "max-w-[96rem]",
  full: "max-w-none",
};

const DARK_TOKENS = {
  "--background": "var(--cms-dark)",
  "--foreground": "#ffffff",
  "--card": "rgb(255 255 255 / 0.06)",
  "--card-foreground": "#ffffff",
  "--muted": "rgb(255 255 255 / 0.08)",
  "--muted-foreground": "rgb(255 255 255 / 0.72)",
  "--border": "rgb(255 255 255 / 0.14)",
  "--primary": "var(--cms-on-dark-primary)",
  "--primary-foreground": "var(--cms-on-dark-primary-foreground)",
} as CSSProperties;

const PRIMARY_TOKENS = {
  "--background": "var(--cms-brand)",
  "--foreground": "var(--cms-brand-foreground)",
  "--card": "rgb(255 255 255 / 0.08)",
  "--card-foreground": "var(--cms-brand-foreground)",
  "--muted": "rgb(255 255 255 / 0.1)",
  "--muted-foreground":
    "color-mix(in oklab, var(--cms-brand-foreground) 78%, transparent)",
  "--border": "rgb(255 255 255 / 0.18)",
  "--primary": "var(--cms-brand-foreground)",
  "--primary-foreground": "var(--cms-brand)",
} as CSSProperties;

function padding(value: unknown): CSSProperties {
  if (!Array.isArray(value)) return {};
  const px = (v: unknown) =>
    typeof v === "number" && Number.isFinite(v)
      ? Math.min(Math.max(v, 0), 400)
      : null;
  const [top, bottom] = [px(value[0]), px(value[1] ?? value[0])];
  // Full value at ≥1440px wide, ~60% on phones.
  const fluid = (v: number) =>
    v === 0
      ? "0px"
      : `clamp(${Math.round(v * 0.6)}px, ${(v / 14.4).toFixed(2)}vw, ${v}px)`;
  return {
    ...(top !== null ? { paddingTop: fluid(top) } : {}),
    ...(bottom !== null ? { paddingBottom: fluid(bottom) } : {}),
  };
}

export type ShellOptions = {
  /** The section draws its own full-bleed background (e.g. hero with image). */
  bleed?: boolean;
  defaultPadding?: [number, number];
};

export default function CmsSectionShell({
  id,
  type,
  settings,
  options = {},
  children,
}: {
  id: string;
  type: string;
  settings: Record<string, unknown>;
  options?: ShellOptions;
  children: React.ReactNode;
}) {
  const background =
    typeof settings.background === "string" ? settings.background : "default";
  const width =
    typeof settings.width === "string" && settings.width in WIDTHS
      ? settings.width
      : "default";
  const anchor =
    typeof settings.anchor === "string" &&
    /^[A-Za-z][\w-]{0,63}$/.test(settings.anchor)
      ? settings.anchor
      : undefined;

  const tokens =
    background === "dark"
      ? DARK_TOKENS
      : background === "primary"
        ? PRIMARY_TOKENS
        : undefined;
  const bg =
    background === "muted"
      ? "bg-muted text-foreground"
      : "bg-background text-foreground";

  const pad = Array.isArray(settings.paddingY)
    ? padding(settings.paddingY)
    : options.bleed
      ? {}
      : padding(options.defaultPadding ?? [80, 112]);

  const inner = options.bleed ? (
    children
  ) : (
    <div className={cx("mx-auto w-full px-5 md:px-10", WIDTHS[width])}>
      {children}
    </div>
  );

  return (
    <section
      id={anchor}
      data-cms-section={type}
      data-cms-section-id={id}
      className={cx("relative", bg)}
      style={{ ...tokens, ...(options.bleed ? {} : pad) }}
    >
      {hasMotion(settings.motion) ? (
        <CmsReveal motion={settings.motion}>{inner}</CmsReveal>
      ) : (
        inner
      )}
    </section>
  );
}

/** Responsive grid classes for settings.columns (static strings for Tailwind). */
export function gridColumns(columns: number): string {
  switch (columns) {
    case 1:
      return "grid-cols-1";
    case 2:
      return "grid-cols-1 md:grid-cols-2";
    case 4:
      return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    case 5:
      return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5";
    case 6:
      return "grid-cols-2 md:grid-cols-3 lg:grid-cols-6";
    default:
      return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  }
}
