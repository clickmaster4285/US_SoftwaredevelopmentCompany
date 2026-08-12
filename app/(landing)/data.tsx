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
  {
    src: card2,
    x: 18,
    y: 32,
    rot: -10,
    scale: 0.95,
    fromX: -300,
    fromY: -200,
    fromRot: -45,
  },
  {
    src: card1,
    x: 72,
    y: 28,
    rot: 8,
    scale: 1.05,
    fromX: 300,
    fromY: -250,
    fromRot: 40,
  },
  {
    src: card3,
    x: 42,
    y: 50,
    rot: -5,
    scale: 1.15,
    fromX: 0,
    fromY: 300,
    fromRot: -25,
  },
  {
    src: card4,
    x: 14,
    y: 62,
    rot: 10,
    scale: 0.9,
    fromX: -350,
    fromY: 250,
    fromRot: 35,
  },
  {
    src: card5,
    x: 80,
    y: 60,
    rot: -8,
    scale: 0.95,
    fromX: 350,
    fromY: 200,
    fromRot: -30,
  },
  {
    src: card6,
    x: 50,
    y: 68,
    rot: 6,
    scale: 1.0,
    fromX: 0,
    fromY: 350,
    fromRot: 20,
  },
];

export const AWARD_WORD = "awards";

/* ============================================================================
   Services Dive Section
   ============================================================================ */

export const SERVICES = [
  {
    icon: "</>",
    title: "Web Development",
    desc: "Fast, scalable web apps built with modern stacks.",
  },
  {
    icon: "◐",
    title: "UI / UX Design",
    desc: "Interfaces designed for clarity, delight and conversion.",
  },
  {
    icon: "✦",
    title: "Branding & Identity",
    desc: "Memorable brand systems with depth and meaning.",
  },
  {
    icon: "▣",
    title: "Mobile Apps",
    desc: "Native-feeling iOS & Android experiences.",
  },
  {
    icon: "◈",
    title: "3D & Motion",
    desc: "Cinematic motion that elevates your product story.",
  },
  {
    icon: "✺",
    title: "E-commerce",
    desc: "Storefronts that feel editorial and sell hard.",
  },
  {
    icon: "◉",
    title: "SEO & Growth",
    desc: "Technical SEO and growth loops engineered to scale.",
  },
  {
    icon: "✜",
    title: "AI Integration",
    desc: "Smart assistants and AI flows woven into your product.",
  },
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
  {
    ref: refs.c1,
    kicker: "Step 1 Discovery & Strategy",
    title: (
      <>
        Learn, define, <span className="italic font-serif">align</span>
      </>
    ),
    sub: "We start by learning about your business, your users, and your goals. Then we agree on the scope, timeline, and what success looks like.",
  },
  {
    ref: refs.c2,
    kicker: "Step 2 Design & Planning",
    title: (
      <>
        Blueprint for <span className="italic font-serif">excellence</span>
      </>
    ),
    sub: "Our team plans the technical setup, creates UI/UX design prototypes, and maps out the full roadmap so everyone knows what's being built.",
  },
  {
    ref: refs.c3,
    kicker: "Step 3 Development & Testing",
    title: (
      <>
        Build, test, <span className="italic font-serif">perfect</span>
      </>
    ),
    sub: "We build in short sprints and test constantly. Our Testing & QA team checks every feature for speed, safety, and quality.",
  },
  {
    ref: refs.c4,
    kicker: "Step 4 Deployment & Support",
    title: (
      <>
        Launch, monitor, <span className="italic font-serif">grow</span>
      </>
    ),
    sub: "We launch your software using Cloud & DevOps best practices, then keep monitoring, maintaining, and supporting it as your business grows.",
  },
];

export type Star = { x: number; y: number; s: number };

export const STAR_COUNT = { near: 80, mid: 140, far: 200 } as const;
export const RING_COUNT = 14;

/* ============================================================================
   Studio Path Section
   ============================================================================ */

export const CAPS = [
  {
    n: "01",
    title: "Web Development",
    desc: "We build fast, easy-to-use websites and web apps for businesses and SaaS platforms, with SEO and accessibility built in from the start.",
    icon: "◐",
    accent: "oklch(0.55 0.18 250)",
  },
  {
    n: "02",
    title: "Mobile App Development",
    desc: "Our mobile app development covers both iOS and Android, built for speed, smooth performance, and easy connection with your existing systems.",
    icon: "▲",
    accent: "oklch(0.62 0.18 30)",
  },
  {
    n: "03",
    title: "UI/UX Design",
    desc: "Our UI/UX design turns complicated processes into simple, easy-to-use screens through research, wireframes, and prototypes that boost engagement.",
    icon: "✦",
    accent: "oklch(0.65 0.18 160)",
  },
  {
    n: "04",
    title: "Artificial Intelligence (AI)",
    desc: "Our AI software development services help you automate daily tasks, personalize the customer experience, and make smarter decisions using custom Artificial Intelligence (AI) tools.",
    icon: "◇",
    accent: "oklch(0.60 0.16 290)",
  },
  {
    n: "05",
    title: "Machine Learning (ML)",
    desc: "From product recommendations to fraud detection, our Machine Learning (ML) team builds models that keep learning and improving over time.",
    icon: "❋",
    accent: "oklch(0.65 0.18 60)",
  },
  {
    n: "06",
    title: "NLP & Computer Vision",
    desc: "Our NLP & Computer Vision solutions power chatbots, document automation, image recognition, and quality checks making manual work faster and easier.",
    icon: "➔",
    accent: "oklch(0.58 0.20 350)",
  },
  {
    n: "07",
    title: "Data Services",
    desc: "Our Data Services team organizes your data, builds dashboards, and creates simple reports so your leadership can make better decisions faster.",
    icon: "◐",
    accent: "oklch(0.55 0.18 210)",
  },
  {
    n: "08",
    title: "Cloud & DevOps",
    desc: "Our Cloud & DevOps team sets up your systems on AWS, Azure, or Google Cloud, with automated deployments and cost-friendly cloud migration.",
    icon: "▲",
    accent: "oklch(0.62 0.18 200)",
  },
  {
    n: "09",
    title: "Cybersecurity",
    desc: "Our Cybersecurity team keeps your software and data safe with regular testing, secure code checks, and around-the-clock monitoring.",
    icon: "✦",
    accent: "oklch(0.65 0.18 130)",
  },
  {
    n: "10",
    title: "Testing & QA",
    desc: "Our Testing & QA process checks every feature carefully, so your product launches stable, fast, and free of major bugs.",
    icon: "◇",
    accent: "oklch(0.60 0.16 300)",
  },
];
export const STACK_ROW_1 = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "GSAP",
  "Three.js",
  "Framer",
  "Vite",
];
export const STACK_ROW_2 = [
  "Node.js",
  "Python",
  "Go",
  "PostgreSQL",
  "Supabase",
  "Redis",
  "Prisma",
  "GraphQL",
];
export const STACK_ROW_3 = [
  "AWS",
  "Cloudflare",
  "Vercel",
  "Docker",
  "Kubernetes",
  "OpenAI",
  "LangChain",
  "Stripe",
];

export const STEPS = [
  {
    k: "01",
    t: "Discover",
    d: "Workshops, audits and a shared product brief.",
  },
  { k: "02", t: "Design", d: "Flows, wireframes and a clickable prototype." },
  {
    k: "03",
    t: "Build",
    d: "Two-week sprints, continuous deploys, daily Slack.",
  },
  { k: "04", t: "Launch", d: "QA, performance, analytics then we go live." },
  { k: "05", t: "Scale", d: "Iterate on data, add features, grow the team." },
];

/* ============================================================================
   Testimonials 3D Room Section
   ============================================================================ */

export const TESTIMONIALS = [
  {
    name: "★★★★★ Operations Director",
    role: "Logistics Startup Texas",
    quote:
      "Clickmasters Software Development Company rebuilt our dispatch system from scratch. What used to take hours of manual work now runs on its own. Our delivery times dropped by 30% in just three months.",
    accent: "oklch(0.78 0.14 50)",
  },
  {
    name: "★★★★★ Founder",
    role: "HealthTech Platform California",
    quote:
      "We needed a patient portal built fast and built right. The team at Clickmasters Software Development Company delivered a working version in eight weeks and is still our development partner today.",
    accent: "oklch(0.75 0.16 200)",
  },
  {
    name: "★★★★★ CTO",
    role: "Fintech Company New York",
    quote:
      "Clickmasters Software Development Company understood our compliance needs right away. The custom software development services we got were exactly what a fintech product needs.",
    accent: "oklch(0.78 0.15 320)",
  },
  {
    name: "★★★★★ VP Marketing",
    role: "E-commerce Brand Florida",
    quote:
      "Our new online store, built by Clickmasters Software Development Company, increased mobile sales by 24%. The UI/UX design work alone was worth it.",
    accent: "oklch(0.80 0.14 110)",
  },
  {
    name: "★★★★★ Owner",
    role: "Manufacturing Firm Ohio",
    quote:
      "The maintenance dashboard built by Clickmasters Software Development Company has already helped us avoid two major equipment failures.",
    accent: "oklch(0.76 0.15 25)",
  },
  {
    name: "★★★★★ Product Manager",
    role: "EdTech Startup Illinois",
    quote:
      "Clickmasters Software Development Company delivered our learning platform on time. Their Testing & QA process caught issues we never would have found ourselves.",
    accent: "oklch(0.75 0.16 260)",
  },
  {
    name: "★★★★★ CEO",
    role: "PropTech Company Arizona",
    quote:
      "We talked to several software development companies before choosing Clickmasters Software Development Company. Their plan was the clearest, and they delivered exactly what they promised.",
    accent: "oklch(0.78 0.14 160)",
  },
  {
    name: "★★★★★ Director of IT",
    role: "Enterprise Retailer Georgia",
    quote:
      "As an enterprise software development partner, Clickmasters Software Development Company connected with our older systems without a single major issue.",
    accent: "oklch(0.78 0.15 80)",
  },
  {
    name: "★★★★★ Founder",
    role: "AI Startup Washington",
    quote:
      "The AI software development services team at Clickmasters Software Development Company built and launched our recommendation tool in half the time our old vendor promised.",
    accent: "oklch(0.77 0.14 140)",
  },
  {
    name: "★★★★★ Operations Lead",
    role: "Supply Chain Company North Carolina",
    quote:
      "Quick to respond, easy to talk to, and always on top of things. Clickmasters Software Development Company is now our go-to partner for every new project.",
    accent: "oklch(0.79 0.15 60)",
  },
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
