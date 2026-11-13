// components/cms/CmsSectionRenderer.tsx
// Maps ERP/CMS section JSON (A4) onto ClickMasters components. The CMS owns the
// content; the look always comes from this site's design system.
// - Sections are already sorted by `order` (lib/cms/cms.ts).
// - Unknown types are skipped silently.
// - header / footer feed the site's own Navbar / Footer (CmsPageFrame).
// - settings.required: true sections always render (empty content falls back
//   to the page title instead of disappearing).
// - Nothing is injected as raw HTML or executed: every (html) field goes
//   through CmsRichText's allow-list.
import type { ReactNode } from "react";
import type { CmsPage, CmsSection } from "@/lib/cms/cms";
import CmsRichText from "./CmsRichText";
import CmsSectionShell, { type ShellOptions } from "./CmsSectionShell";
import {
  button,
  intSetting,
  items,
  pick,
  safeHref,
  safeImage,
} from "./cmsContent";
import CmsHero from "./sections/Hero";
import {
  CmsAuthor,
  CmsImageBlock,
  CmsImageText,
  CmsRichTextBlock,
  CmsText,
  CmsVideo,
  directVideoUrl,
  videoEmbedUrl,
} from "./sections/Content";
import {
  CmsBenefits,
  CmsBento,
  CmsCardGrid,
  CmsGallery,
  CmsLogos,
  CmsPricing,
  CmsProcess,
  CmsStats,
  CmsTeam,
  CmsTestimonials,
  CmsTimeline,
  type GridItem,
} from "./sections/Grids";
import {
  CmsContact,
  CmsCta,
  CmsFaq,
  CmsNewsletter,
  CmsPosts,
  type CmsPostCard,
} from "./sections/Engage";

/** Rendered by CmsPageFrame through the site's Navbar / Footer. */
export const CHROME_TYPES = new Set(["header", "navbar", "footer"]);

type Rendered = { node: ReactNode; options?: ShellOptions } | null;

function formatDate(iso: string) {
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? ""
    : d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      });
}

function postCards(section: CmsSection, page: CmsPage): CmsPostCard[] {
  const c = section.content;
  const wantedType = pick(c, "pageType");
  const cards: CmsPostCard[] =
    c.mode === "manual"
      ? items(c).map((i) => ({
          title: pick(i, "title"),
          url: safeHref(pick(i, "url")),
          excerpt: pick(i, "description", "excerpt"),
          image: safeImage(pick(i, "image")),
        }))
      : page.posts
          .filter(
            (p) => !wantedType || !p.pageType || p.pageType === wantedType,
          )
          .filter((p) => p.url !== page.slug)
          .map((p) => ({
            title: p.title,
            url: safeHref(p.url),
            excerpt: p.excerpt,
            image: safeImage(p.image),
            date: formatDate(p.publishedAt),
          }));
  const limit = intSetting(c.limit, 1, 24, 3);
  return cards.filter((p) => p.title && p.url).slice(0, limit);
}

function gridItems(c: Record<string, unknown>): GridItem[] {
  return items(c)
    .map((i) => ({
      icon: pick(i, "icon"),
      title: pick(i, "title", "name"),
      description: pick(i, "description"),
      image: safeImage(pick(i, "image")),
      url: safeHref(pick(i, "url", "link")),
      linkLabel: pick(i, "linkLabel", "buttonLabel"),
    }))
    .filter((i) => i.title);
}

function renderSection(section: CmsSection, page: CmsPage): Rendered {
  const c = section.content;
  const s = section.settings;
  const required = s.required === true;
  const heading = pick(c, "heading", "title");
  const description = pick(c, "description", "subtitle");
  const columns = (fallback: number) => intSetting(s.columns, 1, 6, fallback);

  switch (section.type) {
    case "hero": {
      const h = heading || (required ? page.title : "");
      if (!h) return null;
      const padY = Array.isArray(s.paddingY) ? s.paddingY : null;
      const px = (v: unknown) =>
        typeof v === "number" && v >= 0 ? Math.min(v, 400) : null;
      const top = padY ? px(padY[0]) : null;
      const bottom = padY ? px(padY[1] ?? padY[0]) : null;
      return {
        options: { bleed: true },
        node: (
          <CmsHero
            layout={typeof s.layout === "string" ? s.layout : ""}
            style={{
              ...(top !== null
                ? { paddingTop: `max(8rem, ${Math.round(top * 0.8)}px)` }
                : {}),
              ...(bottom !== null
                ? {
                    paddingBottom: `clamp(3rem, ${(bottom / 14.4).toFixed(2)}vw, ${bottom}px)`,
                  }
                : {}),
            }}
            data={{
              eyebrow: pick(c, "eyebrow", "subtitle"),
              heading: h,
              description: pick(c, "description"),
              image:
                safeImage(pick(c, "image", "backgroundImage")) ||
                (required ? safeImage(page.featuredImage) : ""),
              alt: pick(c, "alt"),
              primary: button(c, "primary"),
              secondary: button(c, "secondary"),
              buttonStyle: pick(c, "buttonStyle"),
              meta: pick(c, "meta"),
            }}
          />
        ),
      };
    }

    case "text": {
      const body = pick(c, "body");
      if (!heading && !body && !required) return null;
      return {
        node: (
          <CmsText
            data={{
              eyebrow: pick(c, "eyebrow"),
              heading: heading || page.title,
              body,
            }}
          />
        ),
      };
    }

    case "richText":
    case "customContent": {
      const html = pick(c, "bodyHtml");
      if (!html && !heading) return null;
      return { node: <CmsRichTextBlock data={{ heading, html }} /> };
    }

    case "html": {
      // Raw "code" is never injected: rendered through the same allow-list.
      const html = pick(c, "code", "html");
      if (!html) return null;
      return {
        node: <CmsRichText html={html} className="mx-auto max-w-4xl" />,
      };
    }

    case "image": {
      const image = safeImage(pick(c, "image"));
      if (!image) return null;
      return {
        node: (
          <CmsImageBlock
            data={{ image, alt: pick(c, "alt"), caption: pick(c, "caption") }}
          />
        ),
      };
    }

    case "imageText": {
      const image = safeImage(pick(c, "image"));
      const bodyHtml = pick(c, "bodyHtml");
      if (!image && !bodyHtml && !heading) return null;
      return {
        node: (
          <CmsImageText
            imagePosition={
              typeof s.imagePosition === "string"
                ? s.imagePosition
                : s.layout === "imageLeft"
                  ? "left"
                  : "right"
            }
            data={{
              eyebrow: pick(c, "eyebrow"),
              heading,
              bodyHtml,
              image,
              alt: pick(c, "alt"),
              cta: button(c, "primary"),
            }}
          />
        ),
      };
    }

    case "video": {
      const url = pick(c, "videoUrl", "url");
      const embedUrl = videoEmbedUrl(url);
      const fileUrl = embedUrl ? "" : directVideoUrl(url);
      if (!embedUrl && !fileUrl) return null;
      return {
        node: <CmsVideo data={{ heading, description, embedUrl, fileUrl }} />,
      };
    }

    case "features":
    case "services":
    case "cards": {
      const list = gridItems(c);
      if (!list.length) return null;
      return {
        node: (
          <CmsCardGrid
            variant={section.type}
            columns={columns(list.length === 4 ? 4 : list.length === 2 ? 2 : 3)}
            data={{
              eyebrow: pick(c, "eyebrow"),
              heading,
              description,
              items: list,
            }}
          />
        ),
      };
    }

    case "benefits": {
      const list = items(c)
        .map((i) => ({
          title: pick(i, "title"),
          description: pick(i, "description"),
        }))
        .filter((i) => i.title);
      if (!list.length) return null;
      return {
        node: (
          <CmsBenefits
            columns={columns(2)}
            data={{ heading, description, items: list }}
          />
        ),
      };
    }

    case "process": {
      const list = items(c)
        .map((i) => ({
          title: pick(i, "title"),
          description: pick(i, "description"),
        }))
        .filter((i) => i.title);
      if (!list.length) return null;
      return {
        node: (
          <CmsProcess
            columns={columns(list.length >= 4 ? 4 : 3)}
            data={{ heading, description, items: list }}
          />
        ),
      };
    }

    case "timeline": {
      const list = items(c)
        .map((i) => ({
          date: pick(i, "date"),
          title: pick(i, "title"),
          description: pick(i, "description"),
        }))
        .filter((i) => i.title);
      if (!list.length) return null;
      return {
        node: <CmsTimeline data={{ heading, description, items: list }} />,
      };
    }

    case "testimonials": {
      const list = items(c)
        .map((i) => ({
          quote: pick(i, "quote"),
          name: pick(i, "name"),
          role: pick(i, "role"),
          image: safeImage(pick(i, "image")),
        }))
        .filter((i) => i.quote);
      if (!list.length) return null;
      return {
        node: (
          <CmsTestimonials
            columns={columns(3)}
            data={{ heading, items: list }}
          />
        ),
      };
    }

    case "team": {
      const list = items(c)
        .map((i) => ({
          name: pick(i, "name"),
          role: pick(i, "role"),
          image: safeImage(pick(i, "image")),
          bio: pick(i, "bio"),
        }))
        .filter((i) => i.name);
      if (!list.length) return null;
      return {
        node: (
          <CmsTeam
            columns={columns(4)}
            data={{ heading, description, items: list }}
          />
        ),
      };
    }

    case "pricing": {
      const list = items(c)
        .map((i) => {
          const text = pick(i, "buttonLabel");
          const link = safeHref(pick(i, "buttonUrl"));
          const features = Array.isArray(i.features)
            ? i.features.filter((f): f is string => typeof f === "string")
            : pick(i, "features").split(/\r?\n/);
          return {
            name: pick(i, "name"),
            price: pick(i, "price"),
            period: pick(i, "period"),
            description: pick(i, "description"),
            features: features.map((f) => f.trim()).filter(Boolean),
            cta: text && link ? { text, link } : undefined,
            featured: i.featured === true,
          };
        })
        .filter((i) => i.name);
      if (!list.length) return null;
      return {
        node: (
          <CmsPricing
            columns={columns(Math.min(list.length, 4))}
            data={{ heading, description, items: list }}
          />
        ),
      };
    }

    case "faq": {
      const list = items(c)
        .map((i) => ({
          question: pick(i, "question", "q"),
          answer: pick(i, "answer", "a"),
        }))
        .filter((i) => i.question && i.answer);
      if (!list.length) return null;
      return {
        node: (
          <CmsFaq
            data={{
              heading: heading || "Frequently asked questions",
              description,
              items: list,
            }}
          />
        ),
      };
    }

    case "gallery": {
      const list = items(c)
        .map((i) => ({
          image: safeImage(pick(i, "image")),
          caption: pick(i, "caption"),
        }))
        .filter((i) => i.image);
      if (!list.length) return null;
      return {
        node: (
          <CmsGallery
            columns={columns(3)}
            data={{ heading, description, items: list }}
          />
        ),
      };
    }

    case "stats": {
      const list = items(c)
        .map((i) => ({ value: pick(i, "value"), label: pick(i, "label") }))
        .filter((i) => i.value);
      if (!list.length) return null;
      return {
        node: <CmsStats data={{ heading, description, items: list }} />,
      };
    }

    case "logos": {
      const list = items(c)
        .map((i) => ({
          image: safeImage(pick(i, "image")),
          name: pick(i, "name"),
          url: safeHref(pick(i, "url")),
        }))
        .filter((i) => i.image || i.name);
      if (!list.length) return null;
      return {
        node: <CmsLogos data={{ heading, items: list }} />,
        options: { defaultPadding: [48, 64] },
      };
    }

    case "bento": {
      const list = items(c)
        .map((i) => ({
          title: pick(i, "title"),
          description: pick(i, "description"),
          span: pick(i, "span"),
          image: safeImage(pick(i, "image")),
        }))
        .filter((i) => i.title);
      if (!list.length) return null;
      return { node: <CmsBento data={{ heading, items: list }} /> };
    }

    case "cta": {
      const h = heading || (required ? page.title : "");
      if (!h) return null;
      return {
        node: (
          <CmsCta
            data={{
              heading: h,
              description,
              primary: button(c, "primary"),
              secondary: button(c, "secondary"),
              buttonStyle: pick(c, "buttonStyle"),
            }}
          />
        ),
      };
    }

    case "contact":
      return {
        node: (
          <CmsContact
            data={{
              heading: heading || "Let's talk",
              description,
              image: safeImage(pick(c, "image")),
              email: pick(c, "email").replace(/[^\w.+@-]/g, ""),
              phone: pick(c, "phone"),
              address: pick(c, "address"),
              formAction: safeHref(pick(c, "formAction")),
              buttonLabel: pick(c, "buttonLabel"),
            }}
          />
        ),
      };

    case "newsletter":
      if (!heading && !required) return null;
      return {
        node: (
          <CmsNewsletter
            data={{
              heading,
              description,
              formAction: safeHref(pick(c, "formAction")),
              buttonLabel: pick(c, "buttonLabel"),
            }}
          />
        ),
      };

    case "blogPosts":
    case "relatedPosts": {
      const posts = postCards(section, page);
      if (!posts.length) return null;
      return { node: <CmsPosts data={{ heading, description, posts }} /> };
    }

    case "author": {
      const name = pick(c, "name");
      if (!name) return null;
      return {
        node: (
          <CmsAuthor
            data={{
              label: heading,
              name,
              role: pick(c, "role"),
              image: safeImage(pick(c, "image")),
              bioHtml: pick(c, "bioHtml"),
            }}
          />
        ),
      };
    }

    default:
      return null; // unknown section type → skipped silently
  }
}

export default function CmsSectionRenderer({ page }: { page: CmsPage }) {
  return (
    <>
      {page.sections.map((section) => {
        if (CHROME_TYPES.has(section.type)) return null;
        const rendered = renderSection(section, page);
        if (!rendered) return null;
        return (
          <CmsSectionShell
            key={section.id}
            id={section.id}
            type={section.type}
            settings={section.settings}
            options={rendered.options}
          >
            {rendered.node}
          </CmsSectionShell>
        );
      })}
    </>
  );
}
