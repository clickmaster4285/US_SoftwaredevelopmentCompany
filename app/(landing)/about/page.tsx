import AboutPage from "./AboutPage";
import { breadcrumbSchema, JsonLd } from "@/components/seo/JsonLd";
import { fitDescription, fitTitle } from "@/lib/seo";
import { services } from "../[main_service]/[sub_service]/service-data";
import { withEditedPageSeo } from "@/lib/cms/erp-edits";
import type { Metadata } from "next";

const capabilities = Object.values(services)
  .slice(0, 6)
  .map((service) => ({
    slug: service.slug,
    title: service.title,
    description: service.description,
    icon: service.icon,
  }));

export const dynamic = "force-static";
// Re-check ERP page edits (SEO) about once a minute.
export const revalidate = 60;

const title = fitTitle("About");
const description = fitDescription(
  "Learn about Clickmasters, a remote-first studio for software development, UI/UX design, automation, AI, cloud, and support.",
  "About Clickmasters",
);

const baseMetadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title,
    description,
    url: "/about",
  },
};

export function generateMetadata(): Promise<Metadata> {
  return withEditedPageSeo("/about", baseMetadata);
}

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <AboutPage capabilities={capabilities} />
    </>
  );
}
