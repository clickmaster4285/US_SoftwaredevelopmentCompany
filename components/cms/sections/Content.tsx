// components/cms/sections/Content.tsx
// Text-led CMS sections: text, richText, customContent, html, image,
// imageText, video, author. All HTML goes through CmsRichText's allow-list.
import CmsRichText from "../CmsRichText";
import type { CmsButton } from "../cmsContent";
import { CmsButtonLink, CmsImg, Eyebrow, SectionHeading, cx } from "./ui";

export function CmsText({
  data,
}: {
  data: { eyebrow: string; heading: string; body: string };
}) {
  return (
    <div className="mx-auto max-w-3xl">
      {data.eyebrow ? <Eyebrow className="mb-4">{data.eyebrow}</Eyebrow> : null}
      {data.heading ? (
        <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
          {data.heading}
        </h2>
      ) : null}
      {data.body
        ? data.body
            .split(/\n{2,}/)
            .map((p) => p.trim())
            .filter(Boolean)
            .map((p, i) => (
              <p
                key={i}
                className="mt-5 whitespace-pre-line text-base leading-8 text-muted-foreground md:text-lg"
              >
                {p}
              </p>
            ))
        : null}
    </div>
  );
}

export function CmsRichTextBlock({
  data,
}: {
  data: { heading: string; html: string };
}) {
  return (
    <div className="mx-auto max-w-3xl">
      {data.heading ? (
        <h2 className="mb-8 text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
          {data.heading}
        </h2>
      ) : null}
      <CmsRichText html={data.html} />
    </div>
  );
}

export function CmsImageBlock({
  data,
}: {
  data: { image: string; alt: string; caption: string };
}) {
  return (
    <figure>
      <div className="overflow-hidden rounded-[2rem] border border-border bg-muted">
        <CmsImg
          src={data.image}
          alt={data.alt}
          className="h-auto w-full object-cover"
        />
      </div>
      {data.caption ? (
        <figcaption className="mt-4 text-center text-sm text-muted-foreground">
          {data.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function CmsImageText({
  data,
  imagePosition,
}: {
  data: {
    eyebrow: string;
    heading: string;
    bodyHtml: string;
    image: string;
    alt: string;
    cta?: CmsButton;
  };
  imagePosition: string;
}) {
  const imageFirst = imagePosition === "left";
  return (
    <div className="grid items-center gap-10 md:gap-16 lg:grid-cols-2">
      <div className={cx(imageFirst && "lg:order-2")}>
        {data.eyebrow ? (
          <Eyebrow className="mb-4">{data.eyebrow}</Eyebrow>
        ) : null}
        {data.heading ? (
          <h2 className="text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[1.04] tracking-tight text-foreground">
            {data.heading}
          </h2>
        ) : null}
        {data.bodyHtml ? (
          <CmsRichText html={data.bodyHtml} className="mt-6" />
        ) : null}
        <CmsButtonLink button={data.cta} className="mt-8" />
      </div>
      {data.image ? (
        <div
          className={cx(
            "overflow-hidden rounded-[2rem] border border-border bg-muted shadow-xl shadow-black/5",
            imageFirst && "lg:order-1",
          )}
        >
          <CmsImg
            src={data.image}
            alt={data.alt}
            className="aspect-[4/3] h-full w-full object-cover"
          />
        </div>
      ) : null}
    </div>
  );
}

/**
 * YouTube/Vimeo link → embed URL built from the parsed id only, so a CMS value
 * can never point the iframe at an arbitrary site.
 */
export function videoEmbedUrl(url: string): string {
  let u: URL;
  try {
    u = new URL(url);
  } catch {
    return "";
  }
  if (u.protocol !== "https:" && u.protocol !== "http:") return "";
  const host = u.hostname.replace(/^www\./, "");
  let id = "";
  if (host === "youtu.be") id = u.pathname.slice(1);
  else if (
    host === "youtube.com" ||
    host === "m.youtube.com" ||
    host === "youtube-nocookie.com"
  ) {
    id =
      u.searchParams.get("v") ??
      u.pathname.match(/^\/(?:embed|shorts|live)\/([^/]+)/)?.[1] ??
      "";
  }
  if (/^[\w-]{6,20}$/.test(id))
    return `https://www.youtube-nocookie.com/embed/${id}`;
  if (host === "vimeo.com" || host === "player.vimeo.com") {
    const vimeoId = u.pathname.match(/(\d{5,12})/)?.[1];
    if (vimeoId) return `https://player.vimeo.com/video/${vimeoId}`;
  }
  return "";
}

/** Direct video files (mp4/webm/ogg) play in a native <video>. */
export function directVideoUrl(url: string): string {
  return /^(https:\/\/|\/(?!\/))[^\s"'<>]+\.(mp4|webm|ogg)(\?[^\s"'<>]*)?$/i.test(
    url,
  )
    ? url
    : "";
}

export function CmsVideo({
  data,
}: {
  data: {
    heading: string;
    description: string;
    embedUrl: string;
    fileUrl: string;
  };
}) {
  return (
    <div>
      <SectionHeading heading={data.heading} description={data.description} />
      <div className="relative mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-black shadow-xl shadow-black/10">
        {data.embedUrl ? (
          <iframe
            src={data.embedUrl}
            title={data.heading || "Video"}
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <video
            src={data.fileUrl}
            controls
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </div>
    </div>
  );
}

export function CmsAuthor({
  data,
}: {
  data: {
    label: string;
    name: string;
    role: string;
    image: string;
    bioHtml: string;
  };
}) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 rounded-3xl border border-border bg-card p-8 shadow-sm sm:flex-row sm:items-start md:p-10">
      {data.image ? (
        <CmsImg
          src={data.image}
          alt={data.name}
          className="h-20 w-20 shrink-0 rounded-full object-cover ring-4 ring-muted"
        />
      ) : (
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-semibold text-primary-foreground">
          {data.name.charAt(0).toUpperCase()}
        </div>
      )}
      <div>
        {data.label ? <Eyebrow className="mb-2">{data.label}</Eyebrow> : null}
        <p className="text-xl font-semibold text-foreground">{data.name}</p>
        {data.role ? (
          <p className="mt-1 text-sm text-muted-foreground">{data.role}</p>
        ) : null}
        {data.bioHtml ? (
          <CmsRichText html={data.bioHtml} className="mt-4" />
        ) : null}
      </div>
    </div>
  );
}
