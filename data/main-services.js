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
} from "lucide-react";
import { enrichServiceData } from "./service-section-data";

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
        slug: "progressive-web-app-development",
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
  "design-ui-ux": {
    title: "Design UI/UX",
    slug: "design-ui-ux",
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
        slug: "ai-experts",
        description: "Strategic AI advice.",
        icon: "Users",
        heroImage:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "AI Developers",
        slug: "ai-developers",
        description: "Custom AI apps.",
        icon: "Code2",
        heroImage:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "AI Prompt Engineers",
        slug: "ai-prompt-engineers",
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
        slug: "llm-applications-development",
        description: "Production AI tooling.",
        icon: "FileText",
        heroImage:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1332&auto=format&fit=crop",
      },
    ],
  },

  // 6. MACHINE LEARNING
  "machine-learning-ml": {
    title: "Machine Learning (ML)",
    slug: "machine-learning-ml",
    icon: "Cpu",
    tagline: "Intelligent Data-Driven Solutions",
    description: "Harness ML to transform data into actionable insights.",
    heroBadge: "50+ ML Models Deployed",
    heroImage:
      "https://images.unsplash.com/photo-1555949963-aa291f58a2b7?q=80&w=1332&auto=format&fit=crop",
    stats: [
      { value: "50+", label: "ML Models" },
      { value: "95%", label: "Accuracy" },
    ],
    subServices: [
      {
        title: "Machine Learning Solutions",
        slug: "machine-learning-solutions",
        description: "Tailored ML systems.",
        icon: "Brain",
        heroImage:
          "https://images.unsplash.com/photo-1555949963-aa291f58a2b7?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Machine Learning Experts",
        slug: "machine-learning-experts",
        description: "Expert ML practitioners.",
        icon: "Users",
        heroImage:
          "https://images.unsplash.com/photo-1555949963-aa291f58a2b7?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Predictive Analytics",
        slug: "predictive-analytics",
        description: "Outcome forecasting.",
        icon: "BarChart3",
        heroImage:
          "https://images.unsplash.com/photo-1551288049-bbbda53663cf?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Recommendation Systems",
        slug: "recommendation-systems",
        description: "Personalized engagement.",
        icon: "Target",
        heroImage:
          "https://images.unsplash.com/photo-1555949963-aa291f58a2b7?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Model Training & Optimization",
        slug: "model-training-optimization",
        description: "Performance tuning.",
        icon: "Settings",
        heroImage:
          "https://images.unsplash.com/photo-1555949963-aa291f58a2b7?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Deep Learning Solutions",
        slug: "deep-learning-solutions",
        description: "Advanced neural models.",
        icon: "Cpu",
        heroImage:
          "https://images.unsplash.com/photo-1555949963-aa291f58a2b7?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Deep Learning Experts",
        slug: "deep-learning-experts",
        description: "Specialized architectures.",
        icon: "UserCheck",
        heroImage:
          "https://images.unsplash.com/photo-1555949963-aa291f58a2b7?q=80&w=1332&auto=format&fit=crop",
      },
    ],
  },

  // 7. NLP & COMPUTER VISION
  "nlp-computer-vision": {
    title: "NLP & Computer Vision",
    slug: "nlp-computer-vision",
    icon: "Eye",
    tagline: "Advanced Language & Vision Tech",
    description: "Understand human language and images at scale.",
    heroBadge: "Advanced AI Tech",
    heroImage:
      "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=1332&auto=format&fit=crop",
    subServices: [
      {
        title: "Natural Language Processing (NLP)",
        slug: "nlp",
        description: "Text understanding.",
        icon: "MessageCircle",
        heroImage:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Speech Recognition",
        slug: "speech-recognition",
        description: "Voice-to-text.",
        icon: "Microscope",
        heroImage:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Computer Vision",
        slug: "computer-vision",
        description: "Image understanding.",
        icon: "Eye",
        heroImage:
          "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Image Processing",
        slug: "image-processing",
        description: "Enhancement & classification.",
        icon: "Monitor",
        heroImage:
          "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Video Analytics",
        slug: "video-analytics",
        description: "Real-time intelligence.",
        icon: "Monitor",
        heroImage:
          "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=1332&auto=format&fit=crop",
      },
    ],
  },

  // 8. DATA SERVICES
  "data-services": {
    title: "Data Services",
    slug: "data-services",
    icon: "Database",
    tagline: "Comprehensive Data Management",
    description: "Transform raw data into business assets.",
    heroBadge: "100+ Data Projects",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bbbda53663cf?q=80&w=1332&auto=format&fit=crop",
    subServices: [
      {
        title: "Data Science & Analytics",
        slug: "data-science-analytics",
        description: "Data-driven strategy.",
        icon: "BarChart3",
        heroImage:
          "https://images.unsplash.com/photo-1551288049-bbbda53663cf?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Business Intelligence (BI)",
        slug: "business-intelligence",
        description: "Dashboards and reports.",
        icon: "BarChart",
        heroImage:
          "https://images.unsplash.com/photo-1551288049-bbbda53663cf?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Data Engineering",
        slug: "data-engineering",
        description: "Reliable pipelines.",
        icon: "Database",
        heroImage:
          "https://images.unsplash.com/photo-1551288049-bbbda53663cf?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Data Warehousing",
        slug: "data-warehousing",
        description: "Warehouse design.",
        icon: "HardDrive",
        heroImage:
          "https://images.unsplash.com/photo-1551288049-bbbda53663cf?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Big Data Solutions",
        slug: "big-data-solutions",
        description: "Large infrastructure.",
        icon: "Database",
        heroImage:
          "https://images.unsplash.com/photo-1551288049-bbbda53663cf?q=80&w=1332&auto=format&fit=crop",
      },
    ],
  },

  // 9. CLOUD & DEVOPS
  "cloud-and-devops": {
    title: "Cloud & DevOps",
    slug: "cloud-and-devops",
    icon: "Cloud",
    tagline: "Modern Infrastructure Solutions",
    description: "Cloud-native solutions and release automation.",
    heroBadge: "200+ Migrations",
    heroImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1332&auto=format&fit=crop",
    subServices: [
      {
        title: "Cloud Solutions",
        slug: "cloud-solutions",
        description: "Architecture & migration.",
        icon: "Cloud",
        heroImage:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "DevOps Services",
        slug: "devops-services",
        description: "Delivery pipelines.",
        icon: "Workflow",
        heroImage:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "CI/CD Pipeline Setup",
        slug: "cicd-pipeline-setup",
        description: "Automated workflows.",
        icon: "Settings",
        heroImage:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Containerization",
        slug: "containerization",
        description: "Docker & Kubernetes.",
        icon: "Box",
        heroImage:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Infrastructure as Code",
        slug: "infrastructure-as-code",
        description: "Repeatable setup.",
        icon: "FileText",
        heroImage:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1332&auto=format&fit=crop",
      },
    ],
  },

  // 10. CYBERSECURITY
  cybersecurity: {
    title: "Cybersecurity",
    slug: "cybersecurity",
    icon: "ShieldCheck",
    tagline: "Comprehensive Security",
    description: "Safeguard your data and reputation.",
    heroBadge: "100+ Security Audits",
    heroImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1332&auto=format&fit=crop",
    subServices: [
      {
        title: "Cybersecurity Services",
        slug: "cybersecurity-services",
        description: "Security hardening.",
        icon: "ShieldCheck",
        heroImage:
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Security Audits",
        slug: "security-audits",
        description: "Comprehensive audits.",
        icon: "Search",
        heroImage:
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Penetration Testing",
        slug: "penetration-testing",
        description: "Controlled attacks.",
        icon: "Target",
        heroImage:
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Compliance Management",
        slug: "compliance-management",
        description: "GDPR & SOC2.",
        icon: "FileText",
        heroImage:
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1332&auto=format&fit=crop",
      },
    ],
  },

  // 11. TESTING & QA
  "testing-and-qa": {
    title: "Testing & QA",
    icon: "TestTube",
    slug: "testing-and-qa",
    tagline: "Software Excellence",
    description: "Comprehensive QA and testing strategies.",
    heroBadge: "500+ Projects",
    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1332&auto=format&fit=crop",
    subServices: [
      {
        title: "QA & Software Testing",
        slug: "qa-software-testing",
        description: "QA strategies.",
        icon: "TestTube",
        heroImage:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Automated Testing",
        slug: "automated-testing",
        description: "Fast releases.",
        icon: "Bot",
        heroImage:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Performance Testing",
        slug: "performance-testing",
        description: "System limits.",
        icon: "Zap",
        heroImage:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1332&auto=format&fit=crop",
      },
      {
        title: "Bug Fixing",
        slug: "bug-fixing",
        description: "Issue resolution.",
        icon: "Settings",
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
} from "./service-section-data";

export {
  getWhyChooseUsData,
  DEFAULT_WHY_CHOOSE_US_BENEFITS,
} from "./whyChooseUsData";

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
