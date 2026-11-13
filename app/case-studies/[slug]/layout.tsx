import { notFound } from "next/navigation";
import { caseStudies } from "@/content/case-studies";
import { breadcrumbSchema, JsonLd } from "@/components/seo/JsonLd";
import { fitDescription, fitTitle } from "@/lib/seo";
import { withEditedPageSeo } from "@/lib/cms/erp-edits";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const dynamicParams = false;
// Re-check ERP page edits (SEO) about once a minute.
export const revalidate = 60;

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: LayoutProps) {
  const { slug } = await params;
  // robots: null so edited SEO of /case-studies (parent layout) never leaks here.
  return withEditedPageSeo(`/case-studies/${slug}`, {
    robots: null,
    ...(await baseMetadata({ params })),
  });
}

async function baseMetadata({
  params,
}: Pick<LayoutProps, "params">): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug as keyof typeof caseStudies];
  if (!study) return { title: "Case study not found | Clickmasters" };

  const seoTitle = String(study.seo.title ?? "");
  const seoDescription = String(study.seo.description ?? "");
  const seoH1 = String(study.seo.h1 ?? "Case study");
  const title = fitTitle(seoTitle);
  const description = fitDescription(seoDescription, seoH1);

  return {
    title,
    description,
    alternates: {
      canonical: `/case-studies/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/case-studies/${slug}`,
      type: "article",
    },
  };
}

export default async function CaseStudyLayout({
  children,
  params,
}: LayoutProps) {
  const { slug } = await params;
  const study = caseStudies[slug as keyof typeof caseStudies];
  if (!study) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case studies", path: "/case-studies" },
          { name: String(study.seo.h1 ?? "Case study"), path: `/case-studies/${slug}` },
        ])}
      />
      {children}
    </>
  );
}
