/** Contextual internal links for location and support pages. */
import { productIndustries, productPath } from "@/data/products";

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

/* ── Product catalogue links ──────────────────────────────────────────────
 * Before this map, no page outside /products linked to any product page (the
 * Products nav item only renders its links after hover, client-side). Each
 * service page below links to the products that are genuinely built with
 * that kind of work. Kept short (2–4 per page) and varied on purpose. */

type ProductRef = readonly [industry: string, product: string];

const HC = "healthcare-medical-software";
const BIZ = "business-enterprise-management";
const FIT = "fitness-sports-management";
const EDU = "education-management-software";
const RET = "retail-ecommerce-software";
const LOG = "logistics-transportation-software";
const RE = "real-estate-property-management";

const PRODUCTS_FOR_PATH: Record<string, ProductRef[]> = {
  "/software-development": [
    [HC, "hospital-management-system"],
    [BIZ, "enterprise-resource-planning-erp-software"],
    [EDU, "school-management-system"],
  ],
  "/software-development/custom-software-development": [
    [BIZ, "enterprise-resource-planning-erp-software"],
    [HC, "clinic-management-software"],
    [LOG, "fleet-management-software"],
  ],
  "/software-development/enterprise-software-development": [
    [BIZ, "enterprise-resource-planning-erp-software"],
    [BIZ, "human-resource-management-system-hrms"],
    [BIZ, "supply-chain-management-software"],
    [BIZ, "document-management-system"],
  ],
  "/software-development/saas-product-development": [
    [FIT, "gym-management-software"],
    [EDU, "learning-management-system-lms"],
    [RE, "property-management-software"],
  ],
  "/software-development/desktop-application-development": [
    [RET, "retail-pos-software"],
    [HC, "pharmacy-management-system"],
  ],
  "/software-development/api-development-integration": [
    [HC, "electronic-health-records-ehr-software"],
    [HC, "medical-billing-software"],
    [RET, "order-management-system"],
  ],
  "/software-development/microservices-architecture": [
    [RET, "multi-vendor-marketplace-software"],
    [LOG, "transportation-management-system-tms"],
  ],
  "/software-development/mvp-development": [
    [HC, "telemedicine-software"],
    [FIT, "personal-trainer-management-software"],
  ],
  "/web-development/web-application-development": [
    [BIZ, "customer-relationship-management-crm-software"],
    [HC, "patient-management-software"],
    [EDU, "student-information-system-sis"],
  ],
  "/web-development/ecommerce-development": [
    [RET, "ecommerce-management-platform"],
    [RET, "multi-vendor-marketplace-software"],
    [RET, "order-management-system"],
  ],
  "/web-development/headless-ecommerce": [
    [RET, "ecommerce-management-platform"],
    [RET, "retail-inventory-management-system"],
  ],
  "/web-development/shopify-development": [
    [RET, "order-management-system"],
    [BIZ, "inventory-management-software"],
  ],
  "/web-development/woocommerce-development": [
    [RET, "ecommerce-management-platform"],
    [RET, "grocery-store-management-software"],
  ],
  "/web-development/custom-web-development": [
    [RE, "real-estate-listing-platform"],
    [FIT, "fitness-booking-and-scheduling-software"],
  ],
  "/mobile-app-development": [
    [HC, "telemedicine-software"],
    [LOG, "delivery-management-software"],
    [FIT, "fitness-club-management-system"],
  ],
  "/mobile-app-development/custom-mobile-app-development": [
    [LOG, "courier-management-system"],
    [FIT, "yoga-studio-management-software"],
  ],
  "/mobile-app-development/cross-platform-app-development": [
    [FIT, "membership-management-software"],
    [HC, "patient-management-software"],
  ],
  "/mobile-app-development/android-app-development": [
    [LOG, "truck-dispatch-management-software"],
    [BIZ, "employee-attendance-management-system"],
  ],
  "/mobile-app-development/ios-app-development": [
    [FIT, "personal-trainer-management-software"],
    [HC, "telemedicine-software"],
  ],
  "/mobile-app-development/flutter-app-development": [
    [FIT, "sports-club-management-software"],
    [EDU, "online-examination-software"],
  ],
  "/mobile-app-development/react-native-development": [
    [LOG, "delivery-management-software"],
    [EDU, "coaching-institute-management-software"],
  ],
  "/artificial-intelligence-ai/ai-automation-systems": [
    [BIZ, "business-process-management-software"],
    [BIZ, "document-management-system"],
  ],
  "/artificial-intelligence-ai/ai-chatbot-development": [
    [BIZ, "customer-relationship-management-crm-software"],
    [HC, "patient-management-software"],
  ],
  "/machine-learning-development-services/predictive-analytics": [
    [BIZ, "inventory-management-software"],
    [LOG, "vehicle-maintenance-management-software"],
  ],
  "/machine-learning-development-services/recommendation-systems": [
    [RET, "ecommerce-management-platform"],
    [EDU, "course-management-platform"],
  ],
  "/data-services/business-intelligence": [
    [BIZ, "enterprise-resource-planning-erp-software"],
    [BIZ, "payroll-management-software"],
  ],
  "/data-services/data-migration-services": [
    [HC, "electronic-medical-records-emr-software"],
    [HC, "laboratory-information-management-system-lims"],
  ],
  "/data-services/data-integration-services": [
    [HC, "medical-practice-management-software"],
    [RET, "warehouse-management-system-wms"],
  ],
  "/cybersecurity-services/data-security": [
    [HC, "electronic-health-records-ehr-software"],
    [BIZ, "document-management-system"],
  ],
  "/cybersecurity-services/security-audits-compliance": [
    [HC, "electronic-medical-records-emr-software"],
    [BIZ, "payroll-management-software"],
  ],
  "/cloud-devops-services/cloud-migration-modernization": [
    [BIZ, "enterprise-resource-planning-erp-software"],
    [EDU, "university-management-system"],
  ],
  "/ui-ux-design-services/product-design": [
    [FIT, "fitness-booking-and-scheduling-software"],
    [RE, "rental-management-system"],
  ],
  "/ui-ux-design-services/mobile-app-design": [
    [FIT, "gym-management-software"],
    [RET, "restaurant-pos-software"],
  ],
  "/support-and-outsourcing/maintenance-support": [
    [HC, "hospital-management-system"],
    [BIZ, "asset-management-software"],
  ],
  "/support-and-outsourcing/dedicated-development-teams": [
    [RE, "construction-project-management-software"],
    [LOG, "route-optimization-software"],
  ],
  "/support-and-outsourcing/staff-augmentation": [
    [EDU, "college-management-software"],
    [RE, "real-estate-crm-software"],
  ],
};

/** Product pages relevant to a service path, labelled with product titles. */
export function productLinksForPath(path: string): InternalLink[] {
  const refs = PRODUCTS_FOR_PATH[path] ?? [];
  const links: InternalLink[] = [];
  for (const [industrySlug, productSlug] of refs) {
    const industry = productIndustries.find((i) => i.slug === industrySlug);
    const product = industry?.products.find((p) => p.slug === productSlug);
    if (!industry || !product) continue;
    links.push({
      href: productPath(industry.slug, product.slug),
      label: product.title,
    });
  }
  return links;
}
