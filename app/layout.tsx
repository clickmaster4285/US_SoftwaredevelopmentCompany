import "./globals.css";
import Providers from "./providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development Company – Custom Web & App Experts",
  description:
    "A trusted software development company offering custom web design, mobile app development & AI solutions for startups. Start your project today!",
  openGraph: {
    title: "Software Development Company – Custom Web & App Experts",
    description:
      "A trusted software development company offering custom web design, mobile app development & AI solutions for startups. Start your project today!",
    type: "website",
    url: "https://clickmasterssoftwaredevelopmentcompany.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company – Custom Web & App Experts",
    description:
      "A trusted software development company offering custom web design, mobile app development & AI solutions for startups. Start your project today!",
  },
  verification: {
    google: "-tXrCr3W7GaCtu7v9t18TqvsR4ClJjeh2HdQwtV9jUc",
  },
  alternates: {
    canonical: "https://clickmasterssoftwaredevelopmentcompany.com/",
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}