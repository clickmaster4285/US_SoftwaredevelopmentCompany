import type { Metadata } from "next";
import ContactPage from "./ContactPage";
import { breadcrumbSchema, JsonLd } from "@/components/seo/JsonLd";
import { fitDescription, fitTitle } from "@/lib/seo";

const CONTACT_URL =
  "https://clickmasterssoftwaredevelopmentcompany.com/contact";
const CONTACT_TITLE = fitTitle("Contact");
const CONTACT_DESCRIPTION = fitDescription(
  "Have a software project in mind? Talk with Clickmasters about a custom app, web platform, or software build. We reply with scope, timeline, and a quote.",
  "Contact Clickmasters",
);

export const metadata: Metadata = {
  title: CONTACT_TITLE,
  description: CONTACT_DESCRIPTION,
  alternates: {
    canonical: CONTACT_URL,
  },
  openGraph: {
    title: CONTACT_TITLE,
    description: CONTACT_DESCRIPTION,
    url: CONTACT_URL,
    siteName: "Clickmasters Software Development Company",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: CONTACT_TITLE,
    description: CONTACT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Clickmasters",
  description: CONTACT_DESCRIPTION,
  url: CONTACT_URL,
  mainEntity: { "@id": "https://clickmasterssoftwaredevelopmentcompany.com/#organization" },
};

export default function Page() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <ContactPage />
    </>
  );
}
