import "./globals.css";
import Providers from "./providers";
import type { Metadata } from "next";
import Script from "next/script";
import { SITE_URL } from "@/lib/site";
import ErpPageEdits from "@/components/cms/ErpPageEdits";
import {
  JsonLd,
  organizationSchema,
  websiteSchema,
} from "@/components/seo/JsonLd";

const GTM_ID = "GTM-WT6MM33D";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Software Development Company – Custom Web & App Experts",
  description:
    "A trusted software development company offering custom web design, mobile app development & AI solutions for startups. Start your project today!",
  openGraph: {
    title: "Software Development Company – Custom Web & App Experts",
    description:
      "A trusted software development company offering custom web design, mobile app development & AI solutions for startups. Start your project today!",
    type: "website",
    siteName: "Clickmasters Software Development Company",
    locale: "en_US",
  },
  // Card type only: Next fills twitter:title/description from each page's own
  // openGraph. Setting them here pinned the homepage text on every page.
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "-tXrCr3W7GaCtu7v9t18TqvsR4ClJjeh2HdQwtV9jUc",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        {/* ERP page edits — first in <body> so its cleanup runs before React
            touches the page DOM on navigation. Renders nothing. */}
        <ErpPageEdits />
        {/* Google Tag Manager */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script id="gtm-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});`}
        </Script>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
        />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
