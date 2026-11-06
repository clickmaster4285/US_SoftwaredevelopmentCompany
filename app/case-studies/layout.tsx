import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { fitDescription, fitTitle } from "@/lib/seo";

export const dynamic = "force-static";

const title = fitTitle("Case studies");
const description = fitDescription(
  "Delivery write-ups from Clickmasters software projects, including scope, testing, and what shipped.",
  "Case studies",
);

export const metadata = {
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
