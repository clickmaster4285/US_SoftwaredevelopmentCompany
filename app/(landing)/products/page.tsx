import { breadcrumbSchema, JsonLd } from "@/components/seo/JsonLd";
import { withEditedPageSeo } from "@/lib/cms/erp-edits";
import { fitDescription, fitTitle } from "@/lib/seo";
import type { Metadata } from "next";
import { ProductsIndexPage } from "./views";

export const dynamic = "force-static";
export const revalidate = 60;

const title = fitTitle("Software Products");
const description = fitDescription(
  "Software products grouped by industry, including healthcare, business, fitness, education, retail, logistics, and real estate.",
  "Software products",
);

const baseMetadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/products" },
  openGraph: { title, description, url: "/products" },
};

export function generateMetadata(): Promise<Metadata> {
  return withEditedPageSeo("/products", baseMetadata);
}

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ])}
      />
      <ProductsIndexPage />
    </>
  );
}
