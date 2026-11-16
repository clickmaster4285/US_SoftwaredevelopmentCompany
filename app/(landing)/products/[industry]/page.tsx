import { notFound } from "next/navigation";
import { breadcrumbSchema, JsonLd } from "@/components/seo/JsonLd";
import { findIndustry, industryPath, productIndustries } from "@/data/products";
import { withEditedPageSeo } from "@/lib/cms/erp-edits";
import { fitDescription, fitTitle } from "@/lib/seo";
import type { Metadata } from "next";
import { IndustryProductsPage } from "../views";

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 60;

type PageProps = {
  params: Promise<{ industry: string }>;
};

export function generateStaticParams() {
  return productIndustries.map((industry) => ({ industry: industry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry: slug } = await params;
  const industry = findIndustry(slug);
  if (!industry) return {};

  const path = industryPath(industry.slug);
  const title = fitTitle(industry.label);
  const description = fitDescription(industry.description, industry.label);
  return withEditedPageSeo(path, {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
  });
}

export default async function Page({ params }: PageProps) {
  const { industry: slug } = await params;
  const industry = findIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: industry.label, path: industryPath(industry.slug) },
        ])}
      />
      <IndustryProductsPage industry={industry} />
    </>
  );
}
