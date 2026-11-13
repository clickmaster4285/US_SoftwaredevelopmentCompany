import type { Metadata } from "next";
import HomePage from "./home-client";
import { pageUrl } from "@/lib/site";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/components/seo/JsonLd";
import { homeFaqs } from "@/data/home-faqs";
import { withEditedPageSeo } from "@/lib/cms/erp-edits";

export const dynamic = "force-static";
// Re-check ERP page edits (SEO) about once a minute.
export const revalidate = 60;

const homeUrl = pageUrl("/");

const baseMetadata: Metadata = {
  alternates: {
    canonical: homeUrl,
  },
  openGraph: {
    url: homeUrl,
  },
};

export function generateMetadata(): Promise<Metadata> {
  return withEditedPageSeo("/", baseMetadata);
}

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", path: "/" }])}
      />
      <JsonLd data={faqSchema(homeFaqs)} />
      <HomePage />
    </>
  );
}
