/** Contextual internal links for location and support pages. */

export type InternalLink = {
  href: string;
  label: string;
};

export const LOCATION_PAGES: InternalLink[] = [
  {
    href: "/locations/software-development-company-los-angeles",
    label: "Los Angeles",
  },
  {
    href: "/locations/software-development-company-houston",
    label: "Houston",
  },
  {
    href: "/locations/software-development-company-in-new-york",
    label: "New York",
  },
  {
    href: "/locations/software-development-company-san-francisco",
    label: "San Francisco",
  },
  {
    href: "/locations/software-development-company-chicago",
    label: "Chicago",
  },
  {
    href: "/locations/software-development-company-dallas",
    label: "Dallas",
  },
];

const SERVICE_LINE_LINKS: Record<string, InternalLink[]> = {
  "Custom Software Development": [
    {
      href: "/software-development/custom-software-development",
      label: "Custom Software Development",
    },
  ],
  "Web Development": [
    { href: "/web-development", label: "Web Development" },
  ],
  "Web Application Development": [
    {
      href: "/web-development/web-application-development",
      label: "Web Application Development",
    },
  ],
  "Chicago Custom Web App Development": [
    {
      href: "/web-development/web-application-development",
      label: "Web Application Development",
    },
  ],
  "Mobile App Development": [
    { href: "/mobile-app-development", label: "Mobile App Development" },
  ],
  "Android Mobile App Development Chicago": [
    {
      href: "/mobile-app-development/android-app-development",
      label: "Android App Development",
    },
  ],
  "UI/UX Design": [
    { href: "/ui-ux-design-services", label: "UI/UX Design" },
  ],
  "AI & Machine Learning Development": [
    { href: "/artificial-intelligence-ai", label: "Artificial Intelligence" },
    {
      href: "/machine-learning-development-services",
      label: "Machine Learning",
    },
  ],
  "AI & Machine Learning Solutions": [
    { href: "/artificial-intelligence-ai", label: "Artificial Intelligence" },
    {
      href: "/machine-learning-development-services",
      label: "Machine Learning",
    },
  ],
  "Artificial Intelligence (AI)": [
    { href: "/artificial-intelligence-ai", label: "Artificial Intelligence" },
  ],
  "Machine Learning (ML)": [
    {
      href: "/machine-learning-development-services",
      label: "Machine Learning",
    },
  ],
  "Cloud & DevOps": [
    { href: "/cloud-devops-services", label: "Cloud & DevOps" },
  ],
  "Cloud, DevOps & Ongoing Support": [
    { href: "/cloud-devops-services", label: "Cloud & DevOps" },
    { href: "/support-and-outsourcing", label: "Support & Outsourcing" },
  ],
  "Cybersecurity, Testing & QA": [
    { href: "/cybersecurity-services", label: "Cybersecurity" },
    { href: "/qa-testing-services", label: "Testing & QA" },
  ],
  Cybersecurity: [
    { href: "/cybersecurity-services", label: "Cybersecurity" },
  ],
  "Testing & QA": [
    { href: "/qa-testing-services", label: "Testing & QA" },
  ],
  "SaaS Product Development": [
    {
      href: "/software-development/saas-product-development",
      label: "SaaS Product Development",
    },
  ],
  "Enterprise Software Development": [
    {
      href: "/software-development/enterprise-software-development",
      label: "Enterprise Software Development",
    },
  ],
  "Data Services": [{ href: "/data-services", label: "Data Services" }],
  "Blockchain & Web3": [
    { href: "/blockchain-and-web3", label: "Blockchain & Web3" },
  ],
};

const LOCATION_SERVICE_LINES: Record<string, string[]> = {
  "/locations/software-development-company-los-angeles": [
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "AI & Machine Learning Development",
    "Cloud & DevOps",
    "Cybersecurity, Testing & QA",
  ],
  "/locations/software-development-company-houston": [
    "Custom Software Development",
    "Web Application Development",
    "Mobile App Development",
    "SaaS Product Development",
    "AI & Machine Learning Solutions",
    "Enterprise Software Development",
    "Cloud, DevOps & Ongoing Support",
  ],
  "/locations/software-development-company-in-new-york": [
    "Custom Software Development",
    "Web Application Development",
    "Mobile App Development",
    "SaaS Product Development",
    "AI & Machine Learning Solutions",
    "Enterprise Software Development",
    "Cloud, DevOps & Ongoing Support",
  ],
  "/locations/software-development-company-san-francisco": [
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Artificial Intelligence (AI)",
    "Machine Learning (ML)",
    "NLP & Computer Vision",
    "Data Services",
    "Cloud & DevOps",
    "Cybersecurity",
    "Testing & QA",
  ],
  "/locations/software-development-company-chicago": [
    "Custom Software Development",
    "Chicago Custom Web App Development",
    "Android Mobile App Development Chicago",
    "UI/UX Design",
    "AI & Machine Learning Development",
    "Cloud & DevOps",
    "Cybersecurity",
    "Testing & QA",
    "Data Services",
  ],
  "/locations/software-development-company-dallas": [
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Machine Learning (ML)",
    "Artificial Intelligence (AI)",
    "NLP & Computer Vision",
    "Data Services",
    "Cloud & DevOps",
    "Cybersecurity",
    "Blockchain & Web3",
    "Testing & QA",
  ],
};

export const SUPPORT_PAGES: InternalLink[] = [
  { href: "/support-and-outsourcing", label: "Support & Outsourcing" },
  {
    href: "/support-and-outsourcing/maintenance-support",
    label: "Maintenance & Support",
  },
  {
    href: "/support-and-outsourcing/dedicated-development-teams",
    label: "Dedicated Development Teams",
  },
  {
    href: "/support-and-outsourcing/staff-augmentation",
    label: "Staff Augmentation",
  },
  {
    href: "/support-and-outsourcing/technical-support",
    label: "Technical Support",
  },
];

const OUTSOURCING: InternalLink = {
  href: "/software-development/software-development-outsourcing",
  label: "Software Development Outsourcing",
};

const ALL_LOCATION_PATHS = new Set([
  "/software-development",
  "/support-and-outsourcing",
  "/support-and-outsourcing/maintenance-support",
]);

export function linksForServiceLine(title: string): InternalLink[] {
  return SERVICE_LINE_LINKS[title] ?? [];
}

export function otherLocationLinks(currentPath: string): InternalLink[] {
  return LOCATION_PAGES.filter((page) => page.href !== currentPath);
}

export function locationLinksForPath(path: string): InternalLink[] {
  if (ALL_LOCATION_PATHS.has(path)) return LOCATION_PAGES;

  return LOCATION_PAGES.filter((page) => {
    const titles = LOCATION_SERVICE_LINES[page.href] ?? [];
    return titles.some((title) =>
      (SERVICE_LINE_LINKS[title] ?? []).some((link) => link.href === path),
    );
  });
}

export function extraLinksForPath(path: string): InternalLink[] {
  if (path === "/software-development") return [SUPPORT_PAGES[0]];

  if (path === "/support-and-outsourcing") return [OUTSOURCING];

  if (path === OUTSOURCING.href) return SUPPORT_PAGES;

  if (path.startsWith("/support-and-outsourcing/")) {
    return [
      ...SUPPORT_PAGES.filter((link) => link.href !== path),
      OUTSOURCING,
    ];
  }

  return [];
}
