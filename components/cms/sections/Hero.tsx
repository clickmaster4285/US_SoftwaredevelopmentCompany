// components/cms/sections/Hero.tsx
// CMS "hero" in the ClickMasters service-page style.
//   layout "background" (default with an image): full-bleed image + overlay
//   layout "split": text left, image right
//   layout "centered" / no image: centred text on the section background
import { BadgeCheck } from "lucide-react";
import type { CmsButton } from "../cmsContent";
import { ButtonRow, CmsImg, cx } from "./ui";

export type HeroData = {
  eyebrow: string;
  heading: string;
  description: string;
  image: string;
  alt: string;
  primary?: CmsButton;
  secondary?: CmsButton;
  buttonStyle: string;
  meta: string;
};

function HeroEyebrow({
  children,
  onImage,
}: {
  children: React.ReactNode;
  onImage?: boolean;
}) {
  return (
    <div
      className={cx(
        "mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] shadow-sm backdrop-blur",
        onImage
          ? "bg-white/10 text-white ring-1 ring-white/20"
          : "border border-border bg-card/80 text-muted-foreground",
      )}
    >
      {children}
    </div>
  );
}

export default function CmsHero({
  data,
  layout,
  style,
}: {
  data: HeroData;
  layout: string;
  style?: React.CSSProperties;
}) {
  const mode =
    layout === "split" && data.image
      ? "split"
      : data.image && layout !== "centered"
        ? "background"
        : "centered";

  if (mode === "background") {
    return (
      <div
        className="relative min-h-[88vh] overflow-hidden px-5 pb-16 pt-32 md:px-10 md:pt-40"
        style={style}
      >
        <CmsImg
          src={data.image}
          alt={data.alt}
          eager
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/30" />
        <div className="relative z-10 mx-auto flex min-h-[64vh] max-w-7xl items-end">
          <div className="max-w-5xl text-white">
            {data.eyebrow ? (
              <HeroEyebrow onImage>{data.eyebrow}</HeroEyebrow>
            ) : null}
            <h1 className="text-[clamp(2.8rem,7vw,7.5rem)] font-semibold leading-[1.05] tracking-tight">
              {data.heading}
            </h1>
            {data.description ? (
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
                {data.description}
              </p>
            ) : null}
            <ButtonRow
              primary={data.primary}
              secondary={data.secondary}
              buttonStyle={data.buttonStyle}
              onImage
              className="mt-9"
            />
          </div>
        </div>
        {data.meta ? (
          <div className="relative z-10 mx-auto mt-8 max-w-7xl">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur">
              <BadgeCheck className="h-4 w-4" aria-hidden="true" />
              {data.meta}
            </div>
          </div>
        ) : null}
      </div>
    );
  }

  if (mode === "split") {
    return (
      <div
        className="px-5 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40"
        style={style}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            {data.eyebrow ? <HeroEyebrow>{data.eyebrow}</HeroEyebrow> : null}
            <h1 className="text-[clamp(2.6rem,5.6vw,5.6rem)] font-semibold leading-[1.04] tracking-tight text-foreground">
              {data.heading}
            </h1>
            {data.description ? (
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                {data.description}
              </p>
            ) : null}
            {data.meta ? (
              <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
                {data.meta}
              </p>
            ) : null}
            <ButtonRow
              primary={data.primary}
              secondary={data.secondary}
              buttonStyle={data.buttonStyle}
              className="mt-9"
            />
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-border bg-muted shadow-xl shadow-black/5">
            <CmsImg
              src={data.image}
              alt={data.alt}
              eager
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-5 pb-16 pt-36 md:px-10 md:pb-24 md:pt-44" style={style}>
      <div className="mx-auto max-w-4xl text-center">
        {data.eyebrow ? <HeroEyebrow>{data.eyebrow}</HeroEyebrow> : null}
        <h1 className="text-[clamp(2.6rem,6vw,6rem)] font-semibold leading-[1.04] tracking-tight text-foreground">
          {data.heading}
        </h1>
        {data.description ? (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {data.description}
          </p>
        ) : null}
        <ButtonRow
          primary={data.primary}
          secondary={data.secondary}
          buttonStyle={data.buttonStyle}
          className="mt-9 justify-center"
        />
        {data.meta ? (
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {data.meta}
          </p>
        ) : null}
      </div>
    </div>
  );
}
