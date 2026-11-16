import { notFound } from "next/navigation";
import { breadcrumbSchema, JsonLd } from "@/components/seo/JsonLd";
import HospitalManagementPage, {
  HOSPITAL_PATH,
  hospitalManagementSchema,
} from "../../hospital-management-page";
import {
  findProduct,
  industryPath,
  productIndustries,
  productPath,
} from "@/data/products";
import { withEditedPageSeo } from "@/lib/cms/erp-edits";
import { fitDescription, fitTitle } from "@/lib/seo";
import type { Metadata } from "next";
import { ProductDetailPage } from "../../views";

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 60;

type PageProps = {
  params: Promise<{ industry: string; product: string }>;
};

export function generateStaticParams() {
  return productIndustries.flatMap((industry) =>
    industry.products.map((product) => ({
      industry: industry.slug,
      product: product.slug,
    })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry: industrySlug, product: productSlug } = await params;
  const match = findProduct(industrySlug, productSlug);
  if (!match) return {};

  const path = productPath(match.industry.slug, match.product.slug);
  const isHospital = match.product.slug === "hospital-management-system";
  const title = fitTitle(
    isHospital ? "Hospital Management System Software" : match.product.title,
  );
  const description = fitDescription(
    isHospital
      ? "Hospital management system software by ClickMasters: patient records, appointments, billing, pharmacy, lab, IPD/OPD and reporting in one integrated platform."
      : match.product.description,
    isHospital ? "Hospital Management System" : match.product.title,
  );
  return withEditedPageSeo(path, {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
  });
}

export default async function Page({ params }: PageProps) {
  const { industry: industrySlug, product: productSlug } = await params;
  const match = findProduct(industrySlug, productSlug);
  if (!match) notFound();

  if (productPath(match.industry.slug, match.product.slug) === HOSPITAL_PATH) {
    return (
      <>
        <JsonLd data={hospitalManagementSchema()} />
        <HospitalManagementPage />
      </>
    );
  }

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: match.industry.label, path: industryPath(match.industry.slug) },
          {
            name: match.product.title,
            path: productPath(match.industry.slug, match.product.slug),
          },
        ])}
      />
      <ProductDetailPage industry={match.industry} product={match.product} />
    </>
  );
}
