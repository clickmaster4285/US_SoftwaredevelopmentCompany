import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { fitDescription, fitTitle } from "@/lib/seo";
import type { Metadata } from "next";
import { withEditedPageSeo } from "@/lib/cms/erp-edits";

export const dynamic = "force-static";
// Re-check ERP page edits (SEO) about once a minute.
export const revalidate = 60;

const title = fitTitle("Case studies");
const description = fitDescription(
  "Delivery write-ups from Clickmasters software projects, including scope, testing, and what shipped.",
  "Case studies",
);

const baseMetadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title,
    description,
    url: "/case-studies",
  },
};

// Edited-page SEO for /case-studies. Child routes override every field this
// can set except robots, which app/case-studies/[slug]/layout.tsx resets.
export function generateMetadata(): Promise<Metadata> {
  return withEditedPageSeo("/case-studies", baseMetadata);
}

export default function CaseStudiesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div data-case-studies-layout>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
