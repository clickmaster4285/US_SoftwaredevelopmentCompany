import { CONTACT_EMAIL, pageUrl, SITE_URL } from "@/lib/site";

const isFaqNode = (node: unknown) =>
  !!node &&
  typeof node === "object" &&
  ([] as unknown[])
    .concat((node as Record<string, unknown>)["@type"])
    .includes("FAQPage");

/**
 * FAQPage markup is not emitted. Since 2023 Google shows FAQ rich results
 * only for well-known government and health authority sites, so this site is
 * not eligible, and the markup repeated every FAQ answer twice more per page
 * (JSON-LD + its hydration copy): up to ~25 KB on the largest product pages.
 * The FAQs stay visible on the pages; only the structured-data copy is dropped.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  if (isFaqNode(data)) return null;
  const graph = data["@graph"];
  const output = Array.isArray(graph)
    ? { ...data, "@graph": graph.filter((node) => !isFaqNode(node)) }
    : data;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(output) }}
    />
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Clickmasters",
    url: SITE_URL,
    logo: `${SITE_URL}/cm-logos/logo.webp`,
    email: CONTACT_EMAIL,
    telephone: "+1-325-202-4074",
    description:
      "Remote-first software development company building custom web, mobile, and AI products for businesses in the United States and abroad.",
    areaServed: ["United States", "Europe", "Canada", "Australia"],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Clickmasters",
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: pageUrl(path),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "United States",
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
