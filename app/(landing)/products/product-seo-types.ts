// Shared, data-driven schema for long-form product SEO pages (education suite and later products).
// Rich text strings support **bold** and [anchor](/internal-href) or [anchor](#section-id).

export type RichText = string;

export type PageImage = { src: string; alt: string; width: number; height: number };

export type Theme = {
  /** Main accent, e.g. "#0369a1". */
  accent: string;
  /** Dark panel colour used for the final CTA and cost panel. */
  dark: string;
  /** Soft accent fill for icon tiles. */
  soft: string;
  /** Border colour for link panels. */
  border: string;
  /** Background tint for link panels and image backgrounds. */
  tint: string;
};

export type Feature = { title: string; icon: string; text: string; value?: string; solves?: string };

export type Block =
  | { type: "prose"; paragraphs: RichText[] }
  | { type: "titledList"; items: readonly (readonly [string, string])[]; icon?: string; cols?: 2 | 3 | 4 }
  | { type: "checklist"; items: readonly string[]; icon?: string; cols?: 1 | 2 | 3 }
  | { type: "table"; caption: string; headers: string[]; rows: string[][] }
  | { type: "features"; items: Feature[]; start?: number }
  | { type: "numbered"; items: readonly (readonly [string, string])[]; cols?: 2 | 3 | 4 | 5 }
  | { type: "steps"; items: readonly (readonly [string, string])[] }
  | { type: "figure"; image: string; caption: string; variant?: "app" | "diagram" }
  | { type: "linkPanel"; text: RichText }
  | { type: "note"; text: RichText }
  | { type: "caution"; text: RichText }
  | { type: "cta"; label?: string }
  | { type: "checkGrid"; items: readonly string[] }
  | { type: "cost"; intro: RichText; items: readonly string[]; panel: RichText; ctaLabel?: string };

export type PageSection = { id: string; eyebrow: string; title: string; blocks: Block[] };

export type ProductPageData = {
  path: string;
  /** <title>, max 60 characters, primary keyword first. */
  title: string;
  /** Meta description, 120-158 characters, includes the primary keyword. */
  description: string;
  ogTitle: string;
  ogDescription: string;
  productName: string;
  industrySlug: string;
  industryLabel: string;
  theme: Theme;
  /** Hostname shown in the fake browser bar of app screenshots, e.g. "school.example". */
  browserLabel: string;
  images: Record<string, PageImage> & { og: PageImage };
  hero: {
    h1: string;
    subhead: string;
    paragraphs: RichText[];
    image: string;
    caption: string;
    secondaryCta: { label: string; href: string };
  };
  /** Short "On this page" chips. Every href must match a section id. */
  contents: { href: string; label: string }[];
  sections: PageSection[];
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  finalCta: { title: string; paragraphs: string[] };
  primaryCta: string;
  mobileCta: string;
  schema: { serviceType: string; serviceDescription: string };
};
