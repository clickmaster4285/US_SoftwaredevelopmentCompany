import {
  Code2,
  Compass,
  Globe,
  Smartphone,
  Palette,
  Brain,
  Cpu,
  Eye,
  Database,
  BarChart3,
  Bot,
  Workflow,
  Cloud,
  DatabaseZap,
  ShieldCheck,
  TestTube,
  Headphones,
  Link2,
  CpuIcon,
  Glasses,
  Target,
  Building,
  Rocket,
  Monitor,
  Plug,
  Puzzle,
  Server,
  Zap,
  ShoppingCart,
  Package,
  Store,
  ShoppingBag,
  MessageCircle,
  Microscope,
  FileText,
  Search,
  Edit3,
  LayoutDashboard,
  BarChart,
  HardDrive,
  Globe2,
  Webhook,
  Users2,
  UserCheck,
  Headset,
  Coins,
  CreditCard,
  Gamepad2,
  Box,
  Factory,
  Sparkles,
  BotMessageSquare,
  FileSpreadsheet,
  Settings,
  Bug,
  Users,
  Cog,
  Clock,
  Stethoscope,
  Truck,
  Tv2,
  Landmark,
  Leaf,
  Hotel,
  Activity,
  CircuitBoard,
  Layers3,
  Layers,
  Blocks,
  FlaskConical,
  Settings2,
  Shield,
  TrendingUp,
  MessageSquare,
  GraduationCap,
  Building2,
  BrainCircuit,
  Network,
  Repeat,
  SlidersHorizontal,
  CloudCog,
  GitBranch,
  GitPullRequest,
  Container,
  FileCode,
  ArrowRightLeft,
  PenTool,
  Component,
  Warehouse,
  PieChart,
  Boxes,
  Heart,
  Crosshair,
  ClipboardCheck,
  Laptop,
  Radar,
  Wrench,
  CheckCircle,
  RefreshCw,
  PlayCircle,
} from "lucide-react";
import { enrichServiceData } from "./service-section-data.js";

/**
 * ICON MAPPING
 * This mapping allows us to use string identifiers in our data objects
 * while still being able to render the actual Lucide components.
 */
export const iconMap = {
  Code2,
  Compass,
  Globe,
  Smartphone,
  Palette,
  Brain,
  Cpu,
  Eye,
  Database,
  BarChart3,
  Bot,
  Workflow,
  Cloud,
  DatabaseZap,
  ShieldCheck,
  TestTube,
  Headphones,
  Link2,
  CpuIcon,
  Glasses,
  Target,
  Building,
  Rocket,
  Monitor,
  Plug,
  Puzzle,
  Server,
  Zap,
  ShoppingCart,
  Package,
  Store,
  ShoppingBag,
  MessageCircle,
  Microscope,
  FileText,
  Search,
  Edit3,
  LayoutDashboard,
  BarChart,
  HardDrive,
  Globe2,
  Webhook,
  Users2,
  UserCheck,
  Headset,
  Coins,
  CreditCard,
  Gamepad2,
  Box,
  Factory,
  Sparkles,
  BotMessageSquare,
  FileSpreadsheet,
  Settings,
  Bug,
  Users,
  Cog,
  Clock,
  Stethoscope,
  Truck,
  Tv2,
  Landmark,
  Leaf,
  Hotel,
  Activity,
  CircuitBoard,
  Layers3,
  Layers,
  Blocks,
  FlaskConical,
  Settings2,
  Shield,
  TrendingUp,
  MessageSquare,
  GraduationCap,
  Building2,
  BrainCircuit,
  Network,
  Repeat,
  SlidersHorizontal,
  CloudCog,
  GitBranch,
  GitPullRequest,
  Container,
  FileCode,
  ArrowRightLeft,
  PenTool,
  Component,
  Warehouse,
  PieChart,
  Boxes,
  Heart,
  Crosshair,
  ClipboardCheck,
  Laptop,
  Radar,
  Wrench,
  CheckCircle,
  RefreshCw,
  PlayCircle,
};

/**
 * UNIFIED SERVICE DATA CONFIGURATION
 * Single source of truth for all service categories, sub-services, and detailed content.
 * NOTE: Icons are stored as strings to ensure compatibility with Next.js Client Components.
 */

export function slugify(value) {
  if (!value) return "";
  return value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const mainServicesData = {
  // 1. SOFTWARE DEVELOPMENT
 "software-development": {
  title: "Software Development",
  slug: "software-development",
  icon: "Code2",
  tagline: "Build Scalable, Robust Enterprise Solutions",
  description:
    "We craft custom software solutions that streamline operations, enhance productivity, and drive business growth.",
  heroBadge: "10+ Enterprise Solutions Delivered",
  heroImage:
    "https://images.unsplash.com/photo-1675627451054-99b6c760b6d2?q=80&w=1332&auto=format&fit=crop",
  stats: [
    { value: "200+", label: "Projects Delivered" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "50+", label: "Expert Engineers" },
    { value: "24/7", label: "Support & Monitoring" },
  ],
  features: [
    {
      icon: "Building",
      title: "Custom Architecture",
      description: "Tailored solutions built around how your business actually operates, using an architecture chosen for your specific scale and compliance needs.",
    },
    {
      icon: "Rocket",
      title: "Agile Development",
      description: "Rapid iterations with two-week delivery sprints, continuous testing, code review, and regular demos for visible progress.",
    },
    {
      icon: "ShieldCheck",
      title: "Quality Assurance",
      description: "Comprehensive testing, peer-reviewed code, and thorough QA to ensure reliable performance and bug-free delivery.",
    },
    {
      icon: "Cloud",
      title: "Full Stack Development",
      description: "A single accountable team across frontend, backend, and infrastructure, reducing handoff delays and keeping architecture consistent.",
    },
    {
      icon: "Brain",
      title: "AI & Automation",
      description: "Practical AI features automation, predictive analytics, intelligent search, and AI-assisted workflows without over-engineering the solution.",
    },
    {
      icon: "Compass",
      title: "Software Consulting",
      description: "Scope a roadmap, choose a tech stack, audit legacy systems, and plan a realistic budget before a single line of code is written.",
    },
  ],
  trustedClients: [
    { name: "TechCorp", industry: "Manufacturing", icon: "Cpu" },
    { name: "LogiFlow", industry: "Logistics", icon: "Truck" },
    { name: "FinTrust", industry: "Finance", icon: "Coins" },
    { name: "Vertex Solutions", industry: "Consulting", icon: "BarChart3" },
    { name: "Quantum Dynamics", industry: "Technology", icon: "CircuitBoard" },
  ],
  subServices: [
    {
      title: "Custom Software Development",
      slug: "custom-software-development",
      description: "Tailored software for specific business goals built around your workflows, not generic templates.",
      icon: "Target",
      heroImage:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1332&auto=format&fit=crop",
      metaTitle: "Custom Software Development Company | ClickMasters",
      metaDescription:
        "ClickMasters builds custom software solutions - web apps, SaaS platforms, and enterprise systems.",
      lead: "Build software that scales your revenue - not just your codebase. ClickMasters delivers end-to-end custom software development for B2B companies.",
      highlights: [
        "MVP to enterprise delivery",
        "Architecture-first approach",
        "Post-launch support",
        "Security hardening",
        "Full source-code ownership",
      ],
      pricing: [
        { type: "MVP Build", investment: "$8,000+", timeline: "6-12 weeks" },
        { type: "Custom App", investment: "$25,000+", timeline: "3-6 months" },
        { type: "Enterprise", investment: "$60,000+", timeline: "6-18 months" },
      ],
    },
    {
      title: "Enterprise Software Development",
      slug: "enterprise-software-development",
      description: "Scalable enterprise platforms and workflows for multi-department systems.",
      icon: "Building",
      heroImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1332&auto=format&fit=crop",
      metaTitle: "Enterprise Software Development Company | Custom ERP & B2B Systems",
      lead: "Enterprise software built for operational complexity - not around it.",
      highlights: [
        "ERP & CRM systems",
        "Legacy modernization",
        "Enterprise integrations",
        "Compliance-grade security",
        "Role-based access control",
      ],
    },
    {
      title: "SaaS Product Development",
      slug: "saas-product-development",
      description: "Cloud-based SaaS products with recurring value and subscription billing.",
      icon: "Cloud",
      heroImage:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1332&auto=format&fit=crop",
      lead: "From idea to revenue-generating SaaS platform in one engagement.",
      highlights: [
        "Multi-tenant architecture",
        "Stripe/Chargebee billing",
        "SSO & RBAC",
        "API-first design",
        "Usage metering",
      ],
    },
    {
      title: "MVP Development",
      slug: "mvp-development",
      description: "Fast MVP releases to validate ideas and product-market fit.",
      icon: "Rocket",
      heroImage:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1332&auto=format&fit=crop",
      highlights: [
        "6-12 weeks to launch",
        "Core workflows only",
        "Staging deployment",
        "2-week sprints",
      ],
    },
    {
      title: "Web Application Development",
      slug: "web-application-development",
      description: "Modern web applications built on React, Next.js, and Node.js.",
      icon: "Globe",
      heroImage:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1332&auto=format&fit=crop",
      highlights: [
        "React & Next.js",
        "Node.js backend",
        "Responsive design",
        "API integrations",
      ],
    },
    {
      title: "Mobile App Development",
      slug: "mobile-app-development",
      description: "Native and cross-platform mobile apps for iOS and Android.",
      icon: "Smartphone",
      heroImage:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1332&auto=format&fit=crop",
      highlights: [
        "iOS & Android",
        "Cross-platform options",
        "Backend integration",
        "Consistent data across devices",
      ],
    },
    {
      title: "AI Software Development",
      slug: "ai-software-development",
      description: "Practical AI features automation, predictive analytics, intelligent search, and AI-assisted workflows.",
      icon: "Brain",
      heroImage:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1332&auto=format&fit=crop",
      highlights: [
        "OpenAI integrations",
        "Predictive analytics",
        "Intelligent search",
        "AI-assisted workflows",
      ],
    },
    {
      title: "Desktop Application Development",
      slug: "desktop-application-development",
      description: "Reliable desktop apps for business operations and internal workflows.",
      icon: "Monitor",
      heroImage:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1332&auto=format&fit=crop",
      highlights: [
        "Cross-platform desktop",
        "Native performance",
        "Legacy system integration",
        "Offline capabilities",
      ],
    },
    {
      title: "API Development & Integration",
      slug: "api-development-integration",
      description: "Robust APIs and third-party integrations with CRMs, ERPs, and payment processors.",
      icon: "Plug",
      heroImage:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1332&auto=format&fit=crop",
      highlights: [
        "REST & GraphQL APIs",
        "Payment processor integration",
        "CRM & ERP integration",
        "Internal system connectivity",
      ],
    },
    {
      title: "Microservices Architecture",
      slug: "microservices-architecture",
      description: "Distributed systems built for scale and independent deployability.",
      icon: "Puzzle",
      heroImage:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1332&auto=format&fit=crop",
      highlights: [
        "Service independence",
        "Container orchestration",
        "API gateways",
        "Event-driven architecture",
      ],
    },
    {
      title: "Backend Development",
      slug: "backend-development",
      description: "Secure, high-performance backend services with Node.js and Python.",
      icon: "Server",
      heroImage:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1332&auto=format&fit=crop",
      highlights: [
        "Node.js & Python",
        "PostgreSQL & MongoDB",
        "Secure APIs",
        "Performance optimization",
      ],
    },
    {
      title: "Frontend Development",
      slug: "frontend-development",
      description: "Responsive, accessible frontend experiences with React and Next.js.",
      icon: "Code2",
      heroImage:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1332&auto=format&fit=crop",
      highlights: [
        "React & Next.js",
        "Responsive design",
        "Accessibility (WCAG)",
        "Performance optimization",
      ],
    },
    {
      title: "Full Stack Development",
      slug: "full-stack-development",
      description: "End-to-end product development with a single accountable team.",
      icon: "Workflow",
      heroImage:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1332&auto=format&fit=crop",
      highlights: [
        "Frontend & backend",
        "Cloud infrastructure",
        "CI/CD pipelines",
        "Complete ownership",
      ],
    },
    {
      title: "Software Consulting",
      slug: "software-consulting",
      description: "Scope a roadmap, choose a tech stack, audit legacy systems, and plan a realistic budget.",
      icon: "Compass",
      heroImage:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1332&auto=format&fit=crop",
      highlights: [
        "Roadmap planning",
        "Tech stack selection",
        "Legacy system audit",
        "Budget forecasting",
      ],
    },
    {
      title: "Software Development Outsourcing",
      slug: "software-development-outsourcing",
      description: "Dedicated developers who work inside your existing sprint process and tools.",
      icon: "Users",
      heroImage:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1332&auto=format&fit=crop",
      highlights: [
        "Dedicated engineering teams",
        "Existing process integration",
        "Sprint cadence alignment",
        "Engineering capacity extension",
      ],
    },
  ],
  pricing: [
    {
      type: "MVP Build",
      investment: "$8,000+",
      timeline: "6-12 weeks",
      bestFor: "Startups validating product-market fit",
      features: [
        "Core workflows",
        "Auth & admin",
        "Staging deployment",
        "2-week sprints",
        "Full source-code ownership",
      ],
    },
    {
      type: "Custom Application",
      investment: "$25,000+",
      timeline: "3-6 months",
      bestFor: "Growing B2B teams scaling operations",
      features: [
        "Full product build",
        "API integrations",
        "QA & security review",
        "Documentation handover",
        "Full source-code ownership",
      ],
    },
    {
      type: "Enterprise Platform",
      investment: "$60,000+",
      timeline: "6-18 months",
      bestFor: "Complex orgs with compliance needs",
      features: [
        "Multi-module systems",
        "SSO & RBAC",
        "Dedicated team",
        "SLA & 24/7 support",
        "Security-first architecture",
      ],
    },
  ],
  faqs: [
    {
      question: "How much does custom software development cost?",
      answer: "MVP builds start around $8,000 and take 6-12 weeks. Full applications range from $25,000-$60,000+ over 3-6 months. Enterprise platforms can exceed $150,000 depending on scope, integrations, and compliance.",
    },
    {
      question: "How long does a software development project take?",
      answer: "Most MVPs ship in 6-12 weeks, standard business applications take 3-6 months, and enterprise software programs run 6-18 months with phased releases roughly every two weeks.",
    },
    {
      question: "Do I own the source code after the project is complete?",
      answer: "Yes. Clients receive full intellectual property ownership, repository access, and deployment documentation at project completion.",
    },
    {
      question: "What is the difference between custom software and off-the-shelf software?",
      answer: "Off-the-shelf software is a fixed, one-size-fits-all product, while custom software development builds an application around your specific workflows, data, and integrations. Custom software costs more upfront but avoids paying for unused features and licensing limits as you scale.",
    },
    {
      question: "What happens after launch?",
      answer: "We offer maintenance plans covering security patches, monitoring, performance tuning, and feature iterations. We also provide ongoing support and documentation.",
    },
    {
      question: "Do you offer offshore or outsourced software development?",
      answer: "Yes. Alongside project-based delivery, we offer software development outsourcing and dedicated teams that work inside your existing tools and sprint cadence for ongoing engineering capacity.",
    },
  ],
},

  // 2. WEB DEVELOPMENT
  "web-development": {
    title: "Web Development",
    slug: "web-development",
    icon: "Globe",
    tagline: "Create Stunning, High-Performance Websites",
    description:
      "We build modern, responsive websites and web applications that captivate audiences.",
    heroBadge: "500+ Websites Launched",
    heroImage:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1332&auto=format&fit=crop",
    stats: [
      { value: "500+", label: "Websites Built" },
      { value: "98%", label: "Satisfaction" },
    ],
    trustedClients: [
      { name: "RetailHub", industry: "Retail", icon: "ShoppingBag" },
      { name: "Skyline Hotels", industry: "Hospitality", icon: "Hotel" },
      { name: "MediaWave", industry: "Media", icon: "Tv2" },
    ],
    subServices: [
      {
        title: "Custom Web Development Services",
        slug: "custom-web-development",
        description: "Custom-coded web solutions built around your brand and workflows.",
        icon: "Building",
        heroImage:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Web Application Development",
        slug: "web-application-development",
        description: "Modern web apps and business portals.",
        icon: "Globe",
        heroImage:
          "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1332&auto=format&fit=crop",
        metaTitle:
          "Web Application Development Company | Custom Web Apps for B2B",
        lead: "Custom web applications built for performance, scale, and business outcomes.",
        highlights: [
          "React and Next.js apps",
          "REST and GraphQL APIs",
          "Core Web Vitals optimization",
        ],
      },
      {
        title: "Website Development",
        slug: "website-development",
        description: "SEO-friendly websites that convert.",
        icon: "Globe2",
        heroImage:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Progressive Web App Development",
        slug: "pwa-development",
        description: "Installable web apps with offline support.",
        icon: "Zap",
        heroImage:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Headless CMS Development",
        slug: "headless-cms-development",
        description: "Flexible content systems.",
        icon: "Database",
        heroImage:
          "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "JAMstack Development",
        slug: "jamstack-development",
        description: "Fast static-first web architectures.",
        icon: "Zap",
        heroImage:
          "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "E-commerce Development",
        slug: "ecommerce-development",
        description: "Scalable online stores.",
        icon: "ShoppingCart",
        heroImage:
          "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Headless E-commerce",
        slug: "headless-ecommerce",
        description: "Composable commerce for modern stores.",
        icon: "Package",
        heroImage:
          "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Shopify Development",
        slug: "shopify-development",
        description: "Custom Shopify stores.",
        icon: "Store",
        heroImage:
          "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "WooCommerce Development",
        slug: "woocommerce-development",
        description: "WordPress commerce support.",
        icon: "ShoppingBag",
        heroImage:
          "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1332&auto=format&fit=crop",
      },
    ],
  },

  // 3. MOBILE APP DEVELOPMENT
  "mobile-app-development": {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    icon: "Smartphone",
    tagline: "Native & Cross-Platform Mobile Apps",
    description:
      "Transform your ideas into powerful mobile applications for iOS and Android.",
    heroBadge: "100+ Apps Published",
    heroImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1332&auto=format&fit=crop",
    stats: [
      { value: "100+", label: "Apps Published" },
      { value: "4.8★", label: "Avg Rating" },
    ],
    trustedClients: [
      { name: "Pulse Fitness", industry: "Health", icon: "Activity" },
      { name: "HealthPlus", industry: "Healthcare", icon: "Stethoscope" },
    ],
    subServices: [
      {
        title: "Custom Mobile App Development",
        slug: "custom-mobile-app-development",
        description: "Apps designed around how your business actually operates.",
        icon: "Building",
        heroImage:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Android App Development",
        slug: "android-app-development",
        description: "Native Android apps.",
        icon: "Bot",
        heroImage:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "iOS App Development",
        slug: "ios-app-development",
        description: "Native iOS apps.",
        icon: "Target",
        heroImage:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Cross-Platform App Development",
        slug: "cross-platform-app-development",
        description: "Shared-code apps.",
        icon: "Layers3",
        heroImage:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Flutter App Development",
        slug: "flutter-app-development",
        description: "Flutter apps with consistent UI.",
        icon: "Sparkles",
        heroImage:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "React Native Development",
        slug: "react-native-development",
        description: "React Native apps.",
        icon: "Code2",
        heroImage:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1332&auto=format&fit=crop",
      },
    ],
  },

  // 4. DESIGN UI/UX
  "ui-ux-design-services": {
    title: "Design UI/UX",
    slug: "ui-ux-design-services",
    icon: "Palette",
    tagline: "Beautiful, User-Centered Design Solutions",
    description:
      "Our design team creates intuitive, engaging experiences that users love.",
    heroBadge: "Award-Winning Design Team",
    heroImage:
      "https://images.unsplash.com/photo-1586717791821-3f44a563deaf?q=80&w=1332&auto=format&fit=crop",
    stats: [
      { value: "300+", label: "Design Projects" },
      { value: "95%", label: "User Satisfaction" },
    ],
    trustedClients: [
      { name: "MediaWave", industry: "Media", icon: "Tv2" },
      { name: "EduSmart", industry: "Education", icon: "GraduationCap" },
    ],
    subServices: [
      {
        title: "UI/UX Design",
        slug: "ui-ux-design",
        description: "User-first interfaces.",
        icon: "Palette",
        heroImage:
          "https://images.unsplash.com/photo-1586717791821-3f44a563deaf?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Product Design",
        slug: "product-design",
        description: "End-to-end product thinking.",
        icon: "Package",
        heroImage:
          "https://images.unsplash.com/photo-1586717791821-3f44a563deaf?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Web Design",
        slug: "web-design",
        description: "Modern web layouts.",
        icon: "Globe",
        heroImage:
          "https://images.unsplash.com/photo-1586717791821-3f44a563deaf?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Mobile App Design",
        slug: "mobile-app-design",
        description: "Mobile-first design systems.",
        icon: "Smartphone",
        heroImage:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "UX Research",
        slug: "ux-research",
        description: "Research-backed decisions.",
        icon: "Search",
        heroImage:
          "https://images.unsplash.com/photo-1586717791821-3f44a563deaf?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Wireframing & Prototyping",
        slug: "wireframing-prototyping",
        description: "Rapid prototypes.",
        icon: "Edit3",
        heroImage:
          "https://images.unsplash.com/photo-1586717791821-3f44a563deaf?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Design Systems",
        slug: "design-systems",
        description: "Reusable language.",
        icon: "LayoutDashboard",
        heroImage:
          "https://images.unsplash.com/photo-1586717791821-3f44a563deaf?q=80&w=1332&auto=format&fit=crop",
      },
    ],
  },

  // 5. ARTIFICIAL INTELLIGENCE
  "artificial-intelligence-ai": {
    title: "Artificial Intelligence (AI)",
    slug: "artificial-intelligence-ai",
    icon: "Brain",
    tagline: "Intelligent Solutions for Modern Businesses",
    description:
      "Leverage AI to automate processes, gain insights, and innovate.",
    heroBadge: "Leading AI Innovators",
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1332&auto=format&fit=crop",
    stats: [
      { value: "50+", label: "AI Projects" },
      { value: "97%", label: "Accuracy" },
    ],
    trustedClients: [
      { name: "Quantum Dynamics", industry: "Tech", icon: "CircuitBoard" },
      { name: "HealthPlus", industry: "Healthcare", icon: "Stethoscope" },
    ],
    subServices: [
      {
        title: "Generative AI Solutions",
        slug: "generative-ai-solutions",
        description: "LLM-powered automation.",
        icon: "Brain",
        heroImage:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Generative AI Solutions Company | Custom AI for B2B",
        lead: "Generative AI that ships to production - not just proof of concept.",
        highlights: [
          "LLM apps",
          "AI chatbots",
          "Vector databases",
          "Enterprise governance",
        ],
      },
      {
        title: "AI Experts",
        slug: "ai-consulting",
        description: "Strategic AI advice.",
        icon: "Users",
        heroImage:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "AI Developers",
        slug: "custom-ai-app-development",
        description: "Custom AI apps.",
        icon: "Code2",
        heroImage:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "AI Prompt Engineers",
        slug: "ai-prompt-engineering",
        description: "High-quality model tuning.",
        icon: "Edit3",
        heroImage:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "AI Chatbot Development",
        slug: "ai-chatbot-development",
        description: "Conversational assistants.",
        icon: "BotMessageSquare",
        heroImage:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "AI Agents Development",
        slug: "ai-agents-development",
        description: "Autonomous agents.",
        icon: "Bot",
        heroImage:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "AI Automation Systems",
        slug: "ai-automation-systems",
        description: "Intelligent automation.",
        icon: "Workflow",
        heroImage:
          "https://images.unsplash.com/photo-1555949963-aa291f58a2b7?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "AI Integration Services",
        slug: "ai-integration-services",
        description: "Integrate AI everywhere.",
        icon: "Plug",
        heroImage:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "AI Model Development",
        slug: "ai-model-development",
        description: "Custom model training.",
        icon: "Cpu",
        heroImage:
          "https://images.unsplash.com/photo-1555949963-aa291f58a2b7?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "LLM Applications Development",
        slug: "llm-application-development",
        description: "Production AI tooling.",
        icon: "FileText",
        heroImage:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1332&auto=format&fit=crop",
      },
    ],
  },

  // 6. MACHINE LEARNING
  // "machine-learning-ml": {
  //   title: "Machine Learning (ML)",
  //   slug: "machine-learning-ml",
  //   icon: "Cpu",
  //   tagline: "Intelligent Data-Driven Solutions",
  //   description: "Harness ML to transform data into actionable insights.",
  //   heroBadge: "50+ ML Models Deployed",
  //   heroImage:
  //     "https://images.unsplash.com/photo-1555949963-aa291f58a2b7?q=80&w=1332&auto=format&fit=crop",
  //   stats: [
  //     { value: "50+", label: "ML Models" },
  //     { value: "95%", label: "Accuracy" },
  //   ],
  //   subServices: [
  //     {
  //       title: "Machine Learning Solutions",
  //       slug: "machine-learning-solutions",
  //       description: "Tailored ML systems.",
  //       icon: "Brain",
  //       heroImage:
  //         "https://images.unsplash.com/photo-1555949963-aa291f58a2b7?q=80&w=1332&auto=format&fit=crop",
  //     },
  //     {
  //       title: "Machine Learning Experts",
  //       slug: "machine-learning-experts",
  //       description: "Expert ML practitioners.",
  //       icon: "Users",
  //       heroImage:
  //         "https://images.unsplash.com/photo-1555949963-aa291f58a2b7?q=80&w=1332&auto=format&fit=crop",
  //     },
  //     {
  //       title: "Predictive Analytics",
  //       slug: "predictive-analytics",
  //       description: "Outcome forecasting.",
  //       icon: "BarChart3",
  //       heroImage:
  //         "https://images.unsplash.com/photo-1551288049-bbbda53663cf?q=80&w=1332&auto=format&fit=crop",
  //     },
  //     {
  //       title: "Recommendation Systems",
  //       slug: "recommendation-systems",
  //       description: "Personalized engagement.",
  //       icon: "Target",
  //       heroImage:
  //         "https://images.unsplash.com/photo-1555949963-aa291f58a2b7?q=80&w=1332&auto=format&fit=crop",
  //     },
  //     {
  //       title: "Model Training & Optimization",
  //       slug: "model-training-optimization",
  //       description: "Performance tuning.",
  //       icon: "Settings",
  //       heroImage:
  //         "https://images.unsplash.com/photo-1555949963-aa291f58a2b7?q=80&w=1332&auto=format&fit=crop",
  //     },
  //     {
  //       title: "Deep Learning Solutions",
  //       slug: "deep-learning-solutions",
  //       description: "Advanced neural models.",
  //       icon: "Cpu",
  //       heroImage:
  //         "https://images.unsplash.com/photo-1555949963-aa291f58a2b7?q=80&w=1332&auto=format&fit=crop",
  //     },
  //     {
  //       title: "Deep Learning Experts",
  //       slug: "deep-learning-experts",
  //       description: "Specialized architectures.",
  //       icon: "UserCheck",
  //       heroImage:
  //         "https://images.unsplash.com/photo-1555949963-aa291f58a2b7?q=80&w=1332&auto=format&fit=crop",
  //     },
  //   ],
  // },

  // 6.5 MACHINE LEARNING DEVELOPMENT SERVICES
  // Routing/menu/sitemap source for the rich entry in main-services-data.js
  // (mainServiceData.machineLearningDevelopmentServices). Keep sub-service
  // slugs in sync with that file or the Explore cards 404.
  "machine-learning-development-services": {
    title: "Machine Learning Development",
    slug: "machine-learning-development-services",
    icon: "BrainCircuit",
    tagline: "Machine Learning Services",
    description:
      "Custom ML models, predictive analytics, and deep learning built for production.",
    heroBadge: "40+ ML models deployed to production",
    heroImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1332&auto=format&fit=crop",
    stats: [
      { value: "40+", label: "ML Models Deployed" },
      { value: "95%+", label: "Average Accuracy" },
    ],
    subServices: [
      {
        title: "Machine Learning Solutions",
        slug: "machine-learning-solutions",
        description: "Custom ML built around your business data.",
        icon: "BrainCircuit",
        heroImage:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Machine Learning Experts",
        slug: "machine-learning-experts",
        description: "Dedicated ML engineers and data scientists.",
        icon: "Users2",
        heroImage:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Predictive Analytics",
        slug: "predictive-analytics",
        description: "Forecast demand, risk, and trends.",
        icon: "TrendingUp",
        heroImage:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Recommendation Systems",
        slug: "recommendation-systems",
        description: "Personalization that lifts revenue.",
        icon: "Target",
        heroImage:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Model Training & Optimization",
        slug: "model-training-optimization",
        description: "Accuracy up, inference costs down.",
        icon: "SlidersHorizontal",
        heroImage:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Deep Learning Solutions",
        slug: "deep-learning-solutions",
        description: "Neural models for complex problems.",
        icon: "Layers3",
        heroImage:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Deep Learning Experts",
        slug: "deep-learning-experts",
        description: "Neural architectures for your data.",
        icon: "Network",
        heroImage:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Custom ML Model Development",
        slug: "custom-ml-model-development",
        description: "Models built on your proprietary data.",
        icon: "Database",
        heroImage:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "ML Model Development Services",
        slug: "ml-model-development-services",
        description: "Full-cycle model development.",
        icon: "Repeat",
        heroImage:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Machine Learning Solutions Development",
        slug: "machine-learning-solutions-development",
        description: "End-to-end ML with MLOps at scale.",
        icon: "Workflow",
        heroImage:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1332&auto=format&fit=crop",
      },
    ],
  },

  // // 7. NLP & COMPUTER VISION
  // "nlp-computer-vision": {
  //   title: "NLP & Computer Vision",
  //   slug: "nlp-computer-vision",
  //   icon: "Eye",
  //   tagline: "Advanced Language & Vision Tech",
  //   description: "Understand human language and images at scale.",
  //   heroBadge: "Advanced AI Tech",
  //   heroImage:
  //     "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=1332&auto=format&fit=crop",
  //   subServices: [
  //     {
  //       title: "Natural Language Processing (NLP)",
  //       slug: "nlp",
  //       description: "Text understanding.",
  //       icon: "MessageCircle",
  //       heroImage:
  //         "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1332&auto=format&fit=crop",
  //     },
  //     {
  //       title: "Speech Recognition",
  //       slug: "speech-recognition",
  //       description: "Voice-to-text.",
  //       icon: "Microscope",
  //       heroImage:
  //         "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1332&auto=format&fit=crop",
  //     },
  //     {
  //       title: "Computer Vision",
  //       slug: "computer-vision",
  //       description: "Image understanding.",
  //       icon: "Eye",
  //       heroImage:
  //         "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=1332&auto=format&fit=crop",
  //     },
  //     {
  //       title: "Image Processing",
  //       slug: "image-processing",
  //       description: "Enhancement & classification.",
  //       icon: "Monitor",
  //       heroImage:
  //         "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=1332&auto=format&fit=crop",
  //     },
  //     {
  //       title: "Video Analytics",
  //       slug: "video-analytics",
  //       description: "Real-time intelligence.",
  //       icon: "Monitor",
  //       heroImage:
  //         "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=1332&auto=format&fit=crop",
  //     },
  //   ],
  // },

  // 8. DATA SERVICES
  "data-services": {
    title: "Data Services",
    slug: "data-services",
    icon: "Database",
    tagline: "Comprehensive Data Management",
    description: "Transform raw data into business assets.",
    heroBadge: "200+ data projects delivered",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1332&auto=format&fit=crop",
    stats: [
      { value: "200+", label: "Data Projects Delivered" },
      { value: "3", label: "Cloud Certifications (AWS, Azure, GCP)" },
      { value: "SOC 2", label: "Aligned & HIPAA-Ready Practices" },
      { value: "2-3 wks", label: "Typical First Dashboard Turnaround" },
    ],
    trustedClients: [
      { name: "Meridian Retail Group", industry: "Retail", icon: "ShoppingBag" },
      { name: "Lakeshore Health Partners", industry: "Healthcare", icon: "Heart" },
      { name: "Northbridge SaaS Solutions", industry: "SaaS", icon: "Cloud" },
      { name: "Regional Bank", industry: "Finance", icon: "Coins" },
      { name: "Logistics Company", industry: "Logistics", icon: "Truck" },
    ],
    subServices: [
      {
        title: "Data Science & Analytics",
        slug: "data-science-analytics",
        description:
          "Our data analytics services turn your numbers into a clear story, using statistics, machine learning, and clean data models to answer real business questions.",
        icon: "BarChart3",
        heroImage:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Data Analytics Services Company | ClickMasters",
        metaDescription:
          "Data analytics services that turn your numbers into a clear story — move from guessing to knowing with ClickMasters.",
        lead: "From guessing to knowing.",
        highlights: [
          "Customer churn prediction",
          "Product forecasting",
          "Machine learning models",
          "Clean data models",
        ],
      },
      {
        title: "Business Intelligence (BI)",
        slug: "business-intelligence",
        description:
          "Our BI experts build live dashboards and reports so your team can see sales, costs, and performance in one place, updated in real time.",
        icon: "LayoutDashboard",
        heroImage:
          "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Business Intelligence Services | ClickMasters",
        metaDescription:
          "Live BI dashboards and reports so your team sees sales, costs, and performance in one place, in real time.",
        lead: "One place for all your numbers, in real time.",
        highlights: [
          "Live dashboards",
          "Real-time reporting",
          "Sales & cost visibility",
          "No manual spreadsheets",
        ],
      },
      {
        title: "Data Engineering",
        slug: "data-engineering",
        description:
          "Our data engineering services build the pipes that move your data safely from one system to another, with pipelines designed to scale.",
        icon: "Database",
        heroImage:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Data Engineering Services Company | ClickMasters",
        metaDescription:
          "Data engineering services that build safe, scalable pipelines moving your data from system to system.",
        lead: "Strong pipelines behind every good report.",
        highlights: [
          "Data pipelines",
          "Scalable architecture",
          "Safe data movement",
          "Enterprise-grade quality",
        ],
      },
      {
        title: "Data Warehousing",
        slug: "data-warehousing",
        description:
          "We build cloud data warehouses that store all your business data in one safe, organized place, so every team works from the same numbers.",
        icon: "Warehouse",
        heroImage:
          "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Cloud Data Warehousing Services | ClickMasters",
        metaDescription:
          "Cloud data warehouses that store all your business data in one safe, organized place — one version of the truth.",
        lead: "One safe place for all your business data.",
        highlights: [
          "Cloud warehouses",
          "Single source of truth",
          "Organized storage",
          "Cross-team alignment",
        ],
      },
      {
        title: "Big Data Solutions",
        slug: "big-data-solutions",
        description:
          "As a big data services company, we use tools like Apache Spark, Hadoop, and Kafka to process huge amounts of data fast, so you spot trends before your competitors do.",
        icon: "Boxes",
        heroImage:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Big Data Solutions Company | ClickMasters",
        metaDescription:
          "Big data services using Apache Spark, Hadoop, and Kafka to process huge data volumes fast and spot trends first.",
        lead: "Millions of rows, processed fast.",
        highlights: [
          "Apache Spark",
          "Hadoop",
          "Kafka streaming",
          "Trend detection",
        ],
      },
      {
        title: "Data Integration Services",
        slug: "data-integration",
        description:
          "Our data integration services connect all your tools — CRM, accounting, marketing, support — so information flows automatically instead of being copied by hand.",
        icon: "Plug",
        heroImage:
          "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Data Integration Services | ClickMasters",
        metaDescription:
          "Connect your CRM, accounting, marketing, and support tools so information flows automatically across your business.",
        lead: "All your tools, talking to each other.",
        highlights: [
          "CRM integration",
          "Accounting integration",
          "Marketing & support tools",
          "Automatic data flow",
        ],
      },
      {
        title: "Data Migration Services",
        slug: "data-migration",
        description:
          "Our data migration services move your data safely from old systems to new ones, with zero data loss and almost no downtime.",
        icon: "ArrowRightLeft",
        heroImage:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Data Migration Services | ClickMasters",
        metaDescription:
          "Safe data migration from old systems to new — zero data loss, almost no downtime.",
        lead: "Move systems without losing data.",
        highlights: [
          "Zero data loss",
          "Minimal downtime",
          "Old-to-new system moves",
          "Safe handling",
        ],
      },
      {
        title: "Data Management & Governance",
        slug: "data-management-governance",
        description:
          "Our data management services set clear rules for who can see, use, and update your data, keeping it accurate and compliant with U.S. privacy laws.",
        icon: "ShieldCheck",
        heroImage:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Data Management & Governance Services | ClickMasters",
        metaDescription:
          "Data management services with clear access rules, keeping your data accurate and compliant with U.S. privacy laws.",
        lead: "Clean, safe, organized data — by design.",
        highlights: [
          "Access rules",
          "Data accuracy",
          "U.S. privacy compliance",
          "Organized governance",
        ],
      },
      {
        title: "Data Visualization Services",
        slug: "data-visualization",
        description:
          "Our data visualization services turn raw numbers into simple charts, maps, and graphs that anyone on your team can understand in seconds, not hours.",
        icon: "PieChart",
        heroImage:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Data Visualization Services | ClickMasters",
        metaDescription:
          "Turn raw numbers into simple charts, maps, and graphs anyone on your team can understand in seconds.",
        lead: "Numbers anyone can read in seconds.",
        highlights: [
          "Charts & graphs",
          "Maps",
          "Simple reporting",
          "Team-friendly visuals",
        ],
      },
    ],
  },

  // 9. CLOUD & DEVOPS
  "cloud-and-devops": {
    title: "Cloud & DevOps",
    slug: "cloud-and-devops",
    icon: "CloudCog",
    tagline: "Modern Infrastructure Solutions",
    description: "Cloud-native solutions and release automation.",
    heroBadge: "200+ Migrations",
    heroImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1332&auto=format&fit=crop",
    stats: [
      { value: "3", label: "Major Cloud Platforms (AWS, Azure, GCP)" },
      { value: "24/7", label: "Monitoring & Issue Response" },
      { value: "1-2 wks", label: "Typical CI/CD Pipeline Setup" },
      { value: "3+", label: "Regions Served (USA, UK, UAE)" },
    ],
    trustedClients: [
      { name: "SaaS Company", industry: "SaaS", icon: "Cloud" },
      { name: "E-commerce Business", industry: "Retail", icon: "ShoppingBag" },
      { name: "FinTech Startup", industry: "Finance", icon: "Coins" },
      { name: "Healthcare Company", industry: "Healthcare", icon: "Heart" },
      { name: "Manufacturing Firm", industry: "Manufacturing", icon: "Factory" },
    ],
    subServices: [
      {
        title: "Cloud Solutions",
        slug: "cloud-solutions",
        description: "Architecture & migration.",
        icon: "Cloud",
        heroImage:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Cloud Solutions for Your Business | Clickmasters",
        metaDescription:
          "Choose the right cloud setup on AWS, Azure, or Google Cloud with infrastructure and workflows working together from day one.",
        lead: "The right cloud setup, from day one.",
        highlights: [
          "AWS, Azure & GCP",
          "Cloud architecture",
          "DevOps-aligned builds",
          "Day-one readiness",
        ],
      },
      {
        title: "DevOps Services",
        slug: "devops-services",
        description: "Delivery pipelines.",
        icon: "GitBranch",
        heroImage:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "DevOps Development Services | Clickmasters",
        metaDescription:
          "Connect development and operations so code moves from idea to production without delays — tools and workflows included.",
        lead: "From idea to production, without delays.",
        highlights: [
          "Dev & ops alignment",
          "Tool setup",
          "Workflow design",
          "Fewer mistakes",
        ],
      },
      {
        title: "DevOps Consulting",
        slug: "devops-consulting",
        description: "Strategic roadmaps and assessments.",
        icon: "Compass",
        heroImage:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "DevOps Consulting Services | Clickmasters",
        metaDescription:
          "Expert DevOps consulting that reviews your setup and delivers a clear roadmap from planning to full rollout.",
        lead: "A clear roadmap for where to start.",
        highlights: [
          "Setup review",
          "Clear roadmap",
          "Planning to rollout",
          "Expert guidance",
        ],
      },
      {
        title: "CI/CD Pipeline Setup",
        slug: "ci-cd-pipeline-setup",
        description: "Automated workflows.",
        icon: "GitPullRequest",
        heroImage:
          "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "CI/CD Pipeline Setup Services | Clickmasters",
        metaDescription:
          "Automated CI/CD pipelines that test and release code automatically — faster releases, fewer bugs.",
        lead: "Releases that test and ship themselves.",
        highlights: [
          "Automated testing",
          "Automated releases",
          "Fewer manual steps",
          "Fewer customer-facing bugs",
        ],
      },
      {
        title: "Containerization (Docker & Kubernetes)",
        slug: "containerization-docker-kubernetes",
        description: "Docker & Kubernetes.",
        icon: "Container",
        heroImage:
          "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Docker & Kubernetes Containerization | Clickmasters",
        metaDescription:
          "Package applications with Docker and manage them with Kubernetes — consistent runs and traffic-based scaling.",
        lead: "Runs the same everywhere, scales on demand.",
        highlights: [
          "Docker packaging",
          "Kubernetes management",
          "Environment consistency",
          "Auto-scaling",
        ],
      },
      {
        title: "Infrastructure as Code",
        slug: "infrastructure-as-code",
        description: "Repeatable setup.",
        icon: "FileCode",
        heroImage:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Infrastructure as Code (Terraform) Services | Clickmasters",
        metaDescription:
          "Turn your cloud setup into code with Terraform — repeatable, trackable, and easy to roll back.",
        lead: "Your cloud setup, as code.",
        highlights: [
          "Terraform",
          "Repeatable setups",
          "Version tracking",
          "Simple rollbacks",
        ],
      },
      {
        title: "Cloud Migration & Modernization",
        slug: "cloud-migration-modernization",
        description: "Zero-downtime migration.",
        icon: "ArrowRightLeft",
        heroImage:
          "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Cloud Migration & Modernization Services | Clickmasters",
        metaDescription:
          "Careful, planned cloud migration with little to no downtime — modernize systems while your business keeps running.",
        lead: "Move to the cloud without stopping your business.",
        highlights: [
          "Careful planning",
          "Little to no downtime",
          "System modernization",
          "Business continuity",
        ],
      },
      {
        title: "Cloud Monitoring & Observability",
        slug: "cloud-monitoring-observability",
        description: "24/7 observability and alerts.",
        icon: "Activity",
        heroImage:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Cloud Monitoring & Observability Services | Clickmasters",
        metaDescription:
          "24/7 dashboards and alerts that watch your systems — know about problems before your customers do.",
        lead: "Know before your customers do.",
        highlights: [
          "Live dashboards",
          "Smart alerts",
          "24/7 watching",
          "Early problem detection",
        ],
      },
      {
        title: "Managed DevOps Services",
        slug: "managed-devops-services",
        description: "DevOps as a service.",
        icon: "Settings",
        heroImage:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Managed DevOps Services (DevOps as a Service) | Clickmasters",
        metaDescription:
          "A full DevOps team on demand — we handle daily operations and infrastructure management while you focus on your product.",
        lead: "A full DevOps team, on demand.",
        highlights: [
          "DevOps as a service",
          "Daily operations handled",
          "Full infrastructure management",
          "No in-house hire needed",
        ],
      },
    ],
  },

  // 10. CYBERSECURITY
  "cybersecurity-services": {
    title: "Cybersecurity Services",
    slug: "cybersecurity-services",
    icon: "Shield",
    tagline: "Comprehensive Security Solutions",
    description:
      "Clickmasters offers cybersecurity services that protect your business from hackers, data leaks, and downtime — before they happen, not after. As a trusted cybersecurity services company in the USA, we help businesses of every size find weak spots, stop attacks, and stay compliant, so you can focus on running your business instead of worrying about the next threat.",
    heroBadge: "24/7 threat monitoring & response",
    heroImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3a58f?q=80&w=1332&auto=format&fit=crop",
    stats: [
      { value: "24/7", label: "Threat Monitoring & Response" },
      { value: "100+", label: "Security Audits Completed" },
      { value: "99.9%", label: "Threat Detection Rate" },
      { value: "<15 min", label: "Average Response Time" },
    ],
    trustedClients: [
      { name: "Financial Services Firm", industry: "Finance", icon: "Coins" },
      { name: "Healthcare Provider", industry: "Healthcare", icon: "Heart" },
      { name: "E-commerce Platform", industry: "Retail", icon: "ShoppingBag" },
      { name: "SaaS Company", industry: "SaaS", icon: "Cloud" },
      { name: "Manufacturing Company", industry: "Manufacturing", icon: "Factory" },
    ],
    subServices: [
      {
        title: "Cybersecurity Risk Assessment Services",
        slug: "cybersecurity-risk-assessment",
        description:
          "We review your entire IT environment to find weak points before attackers do. Our cybersecurity risk assessment services give you a clear, ranked list of risks and a simple plan to fix them.",
        icon: "Search",
        heroImage:
          "https://images.unsplash.com/photo-1550751827-4bd374c3a58f?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Cybersecurity Risk Assessment Services | Clickmasters",
        metaDescription:
          "Cybersecurity risk assessment services that find weak points before attackers do — get a clear plan to fix them.",
        lead: "Find weak points before attackers do.",
        highlights: ["Full IT review", "Ranked risk list", "Remediation plan", "Security baseline"],
      },
      {
        title: "Penetration Testing",
        slug: "penetration-testing",
        description:
          "Our ethical hackers try to break into your systems the same way a real attacker would. This penetration testing shows you exactly where your defenses fail, so you can fix it before it becomes a real breach.",
        icon: "Crosshair",
        heroImage:
          "https://images.unsplash.com/photo-1550751827-4bd374c3a58f?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Penetration Testing Services | Clickmasters",
        metaDescription:
          "Ethical hacking and penetration testing services that show where your defenses fail — fix gaps before real breaches.",
        lead: "Ethical hacking that finds gaps before attackers do.",
        highlights: ["Real-world attack simulation", "Vulnerability discovery", "Remediation guidance", "Security validation"],
      },
      {
        title: "Security Audits & Compliance Management",
        slug: "security-audits-compliance",
        description:
          "We check your systems and policies against industry standards and run full security audits. Our compliance management service keeps you aligned with HIPAA, PCI-DSS, SOC 2, and other rules your business must follow.",
        icon: "ClipboardCheck",
        heroImage:
          "https://images.unsplash.com/photo-1550751827-4bd374c3a58f?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Security Audits & Compliance Management | Clickmasters",
        metaDescription:
          "Security audits and compliance management for HIPAA, PCI-DSS, SOC 2, and other standards — stay audit-ready.",
        lead: "Stay aligned with HIPAA, PCI-DSS, SOC 2, and more.",
        highlights: ["Industry-standard audits", "Policy review", "Compliance alignment", "Audit preparation"],
      },
      {
        title: "Network Security Services",
        slug: "network-security",
        description:
          "We protect your business network from unauthorized access, malware, and outside attacks using firewalls, intrusion detection, and constant traffic monitoring as part of our network security services.",
        icon: "Network",
        heroImage:
          "https://images.unsplash.com/photo-1550751827-4bd374c3a58f?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Network Security Services | Clickmasters",
        metaDescription:
          "Network security services with firewalls, intrusion detection, and constant monitoring — protect your business network.",
        lead: "Firewalls, intrusion detection, and constant monitoring.",
        highlights: ["Firewall management", "Intrusion detection", "Traffic monitoring", "Malware protection"],
      },
      {
        title: "Cloud Security Services",
        slug: "cloud-security",
        description:
          "As more businesses move to the cloud, our cloud security services protect your AWS, Azure, or Google Cloud environment from misconfigurations, data leaks, and unauthorized access.",
        icon: "Cloud",
        heroImage:
          "https://images.unsplash.com/photo-1550751827-4bd374c3a58f?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Cloud Security Services | Clickmasters",
        metaDescription:
          "Cloud security services for AWS, Azure, and Google Cloud — protect against misconfigurations, data leaks, and unauthorized access.",
        lead: "Protect your AWS, Azure, or Google Cloud environment.",
        highlights: ["Misconfiguration detection", "Data leak prevention", "Access control", "Multi-cloud support"],
      },
      {
        title: "Data Security Services",
        slug: "data-security",
        description:
          "Your data is your business. Our data security services use encryption, access controls, and backup strategies to keep sensitive customer and company data safe from theft or loss.",
        icon: "Database",
        heroImage:
          "https://images.unsplash.com/photo-1550751827-4bd374c3a58f?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Data Security Services | Clickmasters",
        metaDescription:
          "Data security services with encryption, access controls, and backup strategies — keep sensitive data safe.",
        lead: "Encryption, access controls, and safe backups.",
        highlights: ["Data encryption", "Access controls", "Backup strategies", "Theft & loss prevention"],
      },
      {
        title: "Application Security Services",
        slug: "application-security",
        description:
          "We test and secure your web and mobile applications from the inside out. Our application security services catch coding flaws and vulnerabilities before an attacker finds them first.",
        icon: "Code2",
        heroImage:
          "https://images.unsplash.com/photo-1550751827-4bd374c3a58f?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Application Security Services | Clickmasters",
        metaDescription:
          "Application security services that catch coding flaws and vulnerabilities — secure web and mobile apps.",
        lead: "Catch flaws before attackers find them.",
        highlights: ["Code review", "Vulnerability scanning", "Secure development", "Web & mobile apps"],
      },
      {
        title: "Endpoint Security Services",
        slug: "endpoint-security",
        description:
          "Every laptop, phone, and device connected to your network is a possible entry point for attackers. Our endpoint security services protect every device your team uses to work.",
        icon: "Laptop",
        heroImage:
          "https://images.unsplash.com/photo-1550751827-4bd374c3a58f?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Endpoint Security Services | Clickmasters",
        metaDescription:
          "Endpoint security services that protect laptops, phones, and devices — secure every entry point.",
        lead: "Protect every device your team uses.",
        highlights: ["Device protection", "Laptop & mobile security", "Network access control", "Threat prevention"],
      },
      {
        title: "Managed Cybersecurity Services & SOC",
        slug: "managed-cybersecurity-soc",
        description:
          "Not every business needs a full internal security team. Our managed cybersecurity services give you 24/7 protection through a dedicated security operations center that watches your systems day and night.",
        icon: "Settings",
        heroImage:
          "https://images.unsplash.com/photo-1550751827-4bd374c3a58f?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Managed Cybersecurity Services & SOC | Clickmasters",
        metaDescription:
          "Managed cybersecurity services with 24/7 SOC protection — we watch your systems so you don't have to.",
        lead: "24/7 protection through a dedicated SOC.",
        highlights: ["24/7 monitoring", "Dedicated SOC team", "Threat response", "Ongoing management"],
      },
      {
        title: "Cyber Threat Detection & Management Services",
        slug: "cyber-threat-detection",
        description:
          "We use real-time monitoring tools to catch threats early. Our cyber threat detection and management services help you respond to attacks in minutes, not days.",
        icon: "Radar",
        heroImage:
          "https://images.unsplash.com/photo-1550751827-4bd374c3a58f?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Cyber Threat Detection & Management Services | Clickmasters",
        metaDescription:
          "Real-time threat detection and management services — catch threats early and respond in minutes, not days.",
        lead: "Real-time monitoring that catches threats early.",
        highlights: ["Real-time monitoring", "Early threat detection", "Rapid response", "Threat management"],
      },
      {
        title: "Cybersecurity Consulting Services",
        slug: "cybersecurity-consulting",
        description:
          "Need a strategy before you need a tool? Our cybersecurity consulting services help you build a full security roadmap based on your business size, industry, and budget.",
        icon: "Compass",
        heroImage:
          "https://images.unsplash.com/photo-1550751827-4bd374c3a58f?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Cybersecurity Consulting Services | Clickmasters",
        metaDescription:
          "Cybersecurity consulting services that build a full security roadmap tailored to your business size, industry, and budget.",
        lead: "A security roadmap tailored to your business.",
        highlights: ["Security strategy", "Business-aligned planning", "Budget-conscious solutions", "Roadmap development"],
      },
      {
        title: "Custom Cybersecurity Software Development & Automation",
        slug: "custom-cybersecurity-software",
        description:
          "Sometimes off-the-shelf tools aren't enough. Our cybersecurity software development team builds custom cybersecurity solutions, along with automation and integration services, so your security tools work together instead of creating more manual work.",
        icon: "Wrench",
        heroImage:
          "https://images.unsplash.com/photo-1550751827-4bd374c3a58f?q=80&w=1332&auto=format&fit=crop",
        metaTitle: "Custom Cybersecurity Software Development | Clickmasters",
        metaDescription:
          "Custom cybersecurity software development and automation — build solutions that work together instead of creating manual work.",
        lead: "Custom security solutions that work together.",
        highlights: ["Custom development", "Security automation", "Tool integration", "Workflow optimization"],
      },
    ],
  },

  // QA TESTING SERVICES
  "qa-testing-services": {
    title: "QA Testing Services",
    slug: "qa-testing-services",
    icon: "TestTube",
    tagline: "QA Testing Services",
    description:
      "ClickMasters delivers QA testing services that help US businesses launch software with confidence, not crossed fingers.",
    heroBadge: "500+ Projects Tested",
    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1332&auto=format&fit=crop",
    subServices: [
      {
        title: "Manual QA Testing Services",
        slug: "manual-qa-testing",
        description: "Human testers catch what scripts can't.",
        icon: "Search",
        heroImage:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Automated QA Testing & Test Automation Services",
        slug: "automated-qa-testing",
        description: "Reusable test scripts for frequent releases.",
        icon: "Bot",
        heroImage:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Web Application Testing Services",
        slug: "web-application-testing",
        description: "Cross-browser, cross-device testing.",
        icon: "Globe",
        heroImage:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Mobile App Testing Services",
        slug: "mobile-app-testing",
        description: "Real device testing for iOS and Android.",
        icon: "Smartphone",
        heroImage:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "API Testing Services",
        slug: "api-testing",
        description: "Validate every endpoint and response.",
        icon: "Workflow",
        heroImage:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Performance Testing Services",
        slug: "performance-testing",
        description: "Find bottlenecks before users do.",
        icon: "Zap",
        heroImage:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Security Testing Services",
        slug: "security-testing",
        description: "Find vulnerabilities before attackers do.",
        icon: "Shield",
        heroImage:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Functional Testing Services",
        slug: "functional-testing",
        description: "Verify every feature works as intended.",
        icon: "CheckCircle",
        heroImage:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Regression Testing Services",
        slug: "regression-testing",
        description: "Protect existing features from breaking.",
        icon: "RefreshCw",
        heroImage:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "End-to-End Testing Services",
        slug: "end-to-end-testing",
        description: "Test complete workflows, not just features.",
        icon: "PlayCircle",
        heroImage:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "QA Consulting Services",
        slug: "qa-consulting",
        description: "A practical roadmap to better QA.",
        icon: "Compass",
        heroImage:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Enterprise QA Testing Services",
        slug: "enterprise-qa-testing",
        description: "Dedicated QA teams for complex systems.",
        icon: "Building2",
        heroImage:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1332&auto=format&fit=crop",
      },
    ],
  },

  // 12. BLOCKCHAIN & WEB3
  "blockchain-and-web3": {
    title: "Blockchain & Web3",
    slug: "blockchain-and-web3",
    icon: "Link2",
    tagline: "Decentralized Future Solutions",
    description: "DApps and blockchain infrastructure.",
    heroBadge: "50+ Web3 Projects",
    heroImage:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1332&auto=format&fit=crop",
    subServices: [
      {
        title: "Blockchain Development",
        slug: "blockchain-development",
        description: "Blockchain platforms.",
        icon: "Link2",
        heroImage:
          "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Smart Contract Development",
        slug: "smart-contract-development",
        description: "Secure code.",
        icon: "FileText",
        heroImage:
          "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "DApp Development",
        slug: "dapp-development",
        description: "Decentralized apps.",
        icon: "Globe2",
        heroImage:
          "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Crypto Wallets",
        slug: "crypto-wallet-development",
        description: "Asset handling.",
        icon: "CreditCard",
        heroImage:
          "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "NFT Marketplaces",
        slug: "nft-marketplace-development",
        description: "NFT tooling.",
        icon: "Package",
        heroImage:
          "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1332&auto=format&fit=crop",
      },
    ],
  },

  // 13. SUPPORT & OUTSOURCING
  "support-and-outsourcing": {
    title: "Support & Outsourcing",
    slug: "support-and-outsourcing",
    icon: "Headphones",
    tagline: "Dedicated Support Solutions",
    description: "Expert technical support on-demand.",
    heroBadge: "200+ Support Contracts",
    heroImage:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1332&auto=format&fit=crop",
    subServices: [
      {
        title: "Maintenance & Support",
        slug: "maintenance-support",
        description: "Ongoing product support.",
        icon: "Settings",
        heroImage:
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Dedicated Dev Teams",
        slug: "dedicated-development-teams",
        description: "Engineering continuity.",
        icon: "Users2",
        heroImage:
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Staff Augmentation",
        slug: "staff-augmentation",
        description: "Scale your team.",
        icon: "UserCheck",
        heroImage:
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Technical Support",
        slug: "technical-support",
        description: "Reliable support.",
        icon: "Headset",
        heroImage:
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1332&auto=format&fit=crop",
      },
    ],
  },
};

// HELPER FUNCTIONS

/**
 * Get full data for a main service by its slug.
 */
export const getServiceData = (slug) => {
  const service = mainServicesData[slug];
  if (!service) return null;
  return enrichServiceData(slug, service);
};

export {
  enrichServiceData,
  SERVICE_SECTION_DATA,
} from "./service-section-data.js";

export {
  getWhyChooseUsData,
  DEFAULT_WHY_CHOOSE_US_BENEFITS,
} from "./whyChooseUsData.js";

/**
 * Get all slugs for main service categories.
 */
export const getAllServiceSlugs = () => {
  return Object.keys(mainServicesData);
};

/**
 * Get data for a sub-service by its slug.
 */
export const getSubServiceData = (slug) => {
  for (const main of Object.values(mainServicesData)) {
    const sub = main.subServices.find((s) => s.slug === slug);
    if (sub)
      return { ...sub, categorySlug: main.slug, categoryTitle: main.title };
  }
  return null;
};

/**
 * Flatten all sub-services for static generation.
 */
export const getAllSubServicePages = () => {
  const subServices = [];
  Object.values(mainServicesData).forEach((main) => {
    if (main.subServices) {
      main.subServices.forEach((sub) => {
        subServices.push({
          ...sub,
          categorySlug: main.slug,
          categoryTitle: main.title,
        });
      });
    }
  });
  return subServices;
};

/**
 * Organized menu structure for Navbar and MegaMenu.
 */
export const serviceMenuSections = Object.values(mainServicesData).map(
  (main) => ({
    label: main.title,
    icon: main.icon,
    slug: main.slug,
    items: main.subServices
      ? main.subServices.map((sub) => ({
          title: sub.title,
          slug: sub.slug,
          icon: sub.icon,
          description: sub.description,
        }))
      : [],
  }),
);
