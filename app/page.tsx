import type { Metadata } from "next";
import HomePage from "./home-client";
import { pageUrl } from "@/lib/site";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/components/seo/JsonLd";
import { homeFaqs } from "@/data/home-faqs";

export const dynamic = "force-static";

const homeUrl = pageUrl("/");

export const metadata: Metadata = {
  alternates: {
    canonical: homeUrl,
  },
  openGraph: {
    url: homeUrl,
  },
};

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
