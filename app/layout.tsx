import "./globals.css";
import Providers from "./providers";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import ErpPageEdits from "@/components/cms/ErpPageEdits";
import {
  JsonLd,
  organizationSchema,
  websiteSchema,
} from "@/components/seo/JsonLd";

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
      <head>
        {/* Google tag (GTM-N4W55GFS) — first in <head>, loaded once for every page. */}
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-N4W55GFS"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`,
          }}
        />
      </head>
      <body className="bg-background text-foreground">
        {/* ERP page edits — first in <body> so its cleanup runs before React
            touches the page DOM on navigation. Renders nothing. */}
        <ErpPageEdits />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
