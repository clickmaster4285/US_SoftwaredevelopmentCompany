import { notFound } from "next/navigation";
import { breadcrumbSchema, JsonLd } from "@/components/seo/JsonLd";
import { findIndustry, industryPath, productIndustries } from "@/data/products";
import { withEditedPageSeo } from "@/lib/cms/erp-edits";
import { fitDescription, fitTitle } from "@/lib/seo";
import type { Metadata } from "next";
import { IndustryProductsPage } from "../views";
import FitnessSportsPillarPage, {
  FS_SLUG,
  fsDescription,
  fsImages,
  fsSchema,
  fsTitle,
} from "../fitness-sports-pillar-page";

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
  if (industry.slug === FS_SLUG) {
    return withEditedPageSeo(path, {
      title: { absolute: fsTitle },
      description: fsDescription,
      alternates: { canonical: path },
      openGraph: {
        title: fsTitle,
        description: fsDescription,
        url: path,
        images: [
          {
            url: fsImages.og.src,
            width: fsImages.og.width,
            height: fsImages.og.height,
            alt: fsImages.og.alt,
          },
        ],
      },
    });
  }
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

  if (industry.slug === FS_SLUG) {
    return (
      <>
        <JsonLd data={fsSchema(industry)} />
        <FitnessSportsPillarPage industry={industry} />
      </>
    );
  }

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
