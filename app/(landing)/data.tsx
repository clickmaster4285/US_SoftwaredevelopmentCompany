import type { ReactNode, RefObject } from "react";
import type { StaticImageData } from "next/image";

/* ============================================================================
   Awards Section
   ============================================================================ */

import card1 from "@/public/assets/award-card-1.jpg";
import card2 from "@/public/assets/award-card-2.jpg";
import card3 from "@/public/assets/award-card-3.jpg";
import card4 from "@/public/assets/award-card-4.jpg";
import card5 from "@/public/assets/award-card-5.jpg";
import card6 from "@/public/assets/award-card-6.jpg";

export type AwardCardCfg = {
  src: string | StaticImageData;
  x: number;
  y: number;
  rot: number;
  scale: number;
  fromX: number;
  fromY: number;
  fromRot: number;
};

export const AWARD_CARDS: AwardCardCfg[] = [
  { src: card2, x: 18, y: 32, rot: -10, scale: 0.95, fromX: -300, fromY: -200, fromRot: -45 },
  { src: card1, x: 72, y: 28, rot: 8, scale: 1.05, fromX: 300, fromY: -250, fromRot: 40 },
  { src: card3, x: 42, y: 50, rot: -5, scale: 1.15, fromX: 0, fromY: 300, fromRot: -25 },
  { src: card4, x: 14, y: 62, rot: 10, scale: 0.9, fromX: -350, fromY: 250, fromRot: 35 },
  { src: card5, x: 80, y: 60, rot: -8, scale: 0.95, fromX: 350, fromY: 200, fromRot: -30 },
  { src: card6, x: 50, y: 68, rot: 6, scale: 1.0, fromX: 0, fromY: 350, fromRot: 20 },
];

export const AWARD_WORD = "awards";

/* ============================================================================
   Services Dive Section
   ============================================================================ */

export const SERVICES = [
  { icon: "</>", title: "Web Development", desc: "Fast, scalable web apps built with modern stacks." },
  { icon: "◐", title: "UI / UX Design", desc: "Interfaces designed for clarity, delight and conversion." },
  { icon: "✦", title: "Branding & Identity", desc: "Memorable brand systems with depth and meaning." },
  { icon: "▣", title: "Mobile Apps", desc: "Native-feeling iOS & Android experiences." },
  { icon: "◈", title: "3D & Motion", desc: "Cinematic motion that elevates your product story." },
  { icon: "✺", title: "E-commerce", desc: "Storefronts that feel editorial and sell hard." },
  { icon: "◉", title: "SEO & Growth", desc: "Technical SEO and growth loops engineered to scale." },
  { icon: "✜", title: "AI Integration", desc: "Smart assistants and AI flows woven into your product." },
];

export const BUBBLES = Array.from({ length: 18 }, (_, i) => ({
  left: (i * 53) % 100,
  size: 6 + ((i * 7) % 18),
  delay: (i * 0.4) % 6,
  duration: 6 + ((i * 1.3) % 6),
}));

export const RAYS = Array.from({ length: 6 }, (_, i) => ({
  left: 8 + i * 16,
  rotate: -8 + ((i * 5) % 12),
}));

/* ============================================================================
   Space Journey Section
   ============================================================================ */

export type Chapter = {
  ref: RefObject<HTMLDivElement | null>;
  kicker: string;
  title: ReactNode;
  sub: string;
};

export const buildChapters = (refs: {
  c1: RefObject<HTMLDivElement | null>;
  c2: RefObject<HTMLDivElement | null>;
  c3: RefObject<HTMLDivElement | null>;
  c4: RefObject<HTMLDivElement | null>;
}): Chapter[] => [
  { ref: refs.c1, kicker: "01 — Discovery", title: <>Ideas, <span className="italic font-serif">engineered</span></>, sub: "We turn ambitious product ideas into clear, buildable roadmaps." },
  { ref: refs.c2, kicker: "02 — Design", title: <>Interfaces that <span className="italic font-serif">feel right</span></>, sub: "Pixel-precise UI/UX crafted around real users, not assumptions." },
  { ref: refs.c3, kicker: "03 — Engineering", title: <>Code built to <span className="italic font-serif">scale</span></>, sub: "Web, mobile and cloud systems shipped clean, fast and tested." },
  { ref: refs.c4, kicker: "04 — Launch", title: <>From beta to <span className="italic font-serif">millions</span></>, sub: "We deploy, monitor and iterate so your product keeps growing." },
];

export type Star = { x: number; y: number; s: number };

export const STAR_COUNT = { near: 80, mid: 140, far: 200 } as const;
export const RING_COUNT = 14;

/* ============================================================================
   Studio Path Section
   ============================================================================ */

export const CAPS = [
  { n: "01", title: "Web Platforms", desc: "Marketing sites, SaaS dashboards and content systems engineered for speed and SEO.", icon: "◐", accent: "oklch(0.55 0.18 250)" },
  { n: "02", title: "Mobile Apps", desc: "iOS, Android and cross-platform apps built with React Native and native modules.", icon: "▲", accent: "oklch(0.62 0.18 30)" },
  { n: "03", title: "AI Integrations", desc: "LLM features, RAG pipelines and intelligent automations wired into your product.", icon: "✦", accent: "oklch(0.65 0.18 160)" },
  { n: "04", title: "Cloud & DevOps", desc: "Scalable infrastructure on AWS, GCP and edge runtimes with CI/CD baked in.", icon: "◇", accent: "oklch(0.60 0.16 290)" },
  { n: "05", title: "Product Design", desc: "Research-led UI/UX, design systems and prototypes that ship straight to dev.", icon: "❋", accent: "oklch(0.65 0.18 60)" },
  { n: "06", title: "MVP Sprints", desc: "Go from idea to a working, investor-ready product in four to six weeks.", icon: "➔", accent: "oklch(0.58 0.20 350)" },
];

export const STACK_ROW_1 = ["React", "Next.js", "TypeScript", "Tailwind", "GSAP", "Three.js", "Framer", "Vite"];
export const STACK_ROW_2 = ["Node.js", "Python", "Go", "PostgreSQL", "Supabase", "Redis", "Prisma", "GraphQL"];
export const STACK_ROW_3 = ["AWS", "Cloudflare", "Vercel", "Docker", "Kubernetes", "OpenAI", "LangChain", "Stripe"];

export const STEPS = [
  { k: "01", t: "Discover", d: "Workshops, audits and a shared product brief." },
  { k: "02", t: "Design", d: "Flows, wireframes and a clickable prototype." },
  { k: "03", t: "Build", d: "Two-week sprints, continuous deploys, daily Slack." },
  { k: "04", t: "Launch", d: "QA, performance, analytics — then we go live." },
  { k: "05", t: "Scale", d: "Iterate on data, add features, grow the team." },
];

/* ============================================================================
   Testimonials 3D Room Section
   ============================================================================ */

export const TESTIMONIALS = [
  { name: "Sarah Chen", role: "Founder, Lumen", quote: "Transformed our brand entirely. The team operates with a rare blend of taste and rigor.", accent: "oklch(0.78 0.14 50)" },
  { name: "Daniel Park", role: "CTO, Northwind", quote: "Best design partner we've worked with. Shipped a production-grade product in six weeks.", accent: "oklch(0.75 0.16 200)" },
  { name: "Maya Iyer", role: "Head of Design, Atelier", quote: "Pixel-perfect, every single detail. They treat craft like a non-negotiable.", accent: "oklch(0.78 0.15 320)" },
  { name: "Alex Romero", role: "CMO, Norton", quote: "Doubled our conversion overnight. The redesign paid for itself in the first month.", accent: "oklch(0.80 0.14 110)" },
  { name: "Priya Shah", role: "Founder, Kove", quote: "They understood our vision faster than our internal team did. Genuinely rare.", accent: "oklch(0.76 0.15 25)" },
  { name: "Marcus Hall", role: "VP Product, Helio", quote: "Their motion work elevated the entire product. Customers notice immediately.", accent: "oklch(0.75 0.16 260)" },
  { name: "Yuki Tanaka", role: "Creative Director, Forma", quote: "An effortless collaboration. They challenge us in the best way every single round.", accent: "oklch(0.78 0.14 160)" },
  { name: "Elena Voss", role: "CEO, Stratus", quote: "Brand, product, story — they unified everything. We finally feel like one company.", accent: "oklch(0.78 0.15 80)" },
];

export const SPACING_Z = 1350;
export const WALL_X = 430;
export const CARD_ROT_Y = 26;
export const BASE_DEPTH = 1100;

/* ============================================================================
   Logo Marquee Section
   ============================================================================ */

export const LOGOS_ROW_1 = [
  "masters' union",
  "airtel",
  "kotak",
  "NOISE",
  "Coca-Cola",
  "boAt",
  "DAT",
  "SWVL",
];

export const LOGOS_ROW_2 = [
  "NUEGO",
  "ROYAL ENFIELD",
  "HBK",
  "ITC Limited",
  "RBL BANK",
  "GreyOrange",
  "Apollo 24|7",
  "DECATHLON",
];

export const LOGOS_ROW_3 = [
  "TVS",
  "Qubo",
  "HT Media",
  "HEALTHKART",
  "HDFC securities",
  "DAT",
  "SWVL",
  "THERMAX",
];
