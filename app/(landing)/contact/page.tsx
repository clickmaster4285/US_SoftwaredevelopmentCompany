import type { Metadata } from "next";
import ContactPage from "./ContactPage";

const CONTACT_URL =
  "https://clickmasterssoftwaredevelopmentcompany.com/contact";
const CONTACT_TITLE = "Contact – Clickmasters Software Development Company";
const CONTACT_DESCRIPTION =
  "Have a software project in mind? Talk to our development experts in the US today. Whether you need a custom app, web platform, or software solution, we're here to help you get started.";

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
  "@type": "ProfessionalService",
  name: "Clickmasters Software Development Company",
  description: CONTACT_DESCRIPTION,
  url: CONTACT_URL,
  email: "sales@Clickmasterssoftwaredevelopmentcompany.com",
  telephone: "+1 325 2024074",
  areaServed: ["United States", "Europe", "Canada", "Australia"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "sales@Clickmasterssoftwaredevelopmentcompany.com",
    telephone: "+1 325 2024074",
    areaServed: ["US", "Europe", "Canada", "Australia"],
    availableLanguage: "English",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactPage />
    </>
  );
}
