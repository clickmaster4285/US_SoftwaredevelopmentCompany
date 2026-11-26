import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema, JsonLd } from "@/components/seo/JsonLd";
import { fitDescription, fitTitle } from "@/lib/seo";
import { withEditedPageSeo } from "@/lib/cms/erp-edits";
import { CONTACT_EMAIL } from "@/lib/site";
import { PageFrame } from "../[main_service]/[sub_service]/landing-primitives";

// Describes only what the site actually does (contact form -> CRM, Google Tag
// Manager / GA4, server logs). Update this page whenever a form, tracker or
// processor is added or removed. Legal review required before changes ship.

export const dynamic = "force-static";
// Re-check ERP page edits (SEO) about once a minute.
export const revalidate = 60;

const LAST_UPDATED = "November 26, 2026";

const title = fitTitle("Privacy Policy");
const description = fitDescription(
  "How Clickmasters collects, uses and protects the information you share through this website, including the contact form and analytics.",
  "Clickmasters Privacy Policy",
);

const baseMetadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { title, description, url: "/privacy" },
};

export function generateMetadata(): Promise<Metadata> {
  return withEditedPageSeo("/privacy", baseMetadata);
}

const h2 = "mt-12 text-2xl font-semibold tracking-tight text-foreground";
const p = "mt-4 leading-7 text-foreground/80";
const ul = "mt-4 list-disc space-y-2 pl-6 leading-7 text-foreground/80";
const a = "font-medium text-foreground underline underline-offset-4";

export default function Page() {
  return (
    <PageFrame main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <article className="mx-auto max-w-3xl px-5 pt-32 pb-24 md:px-10 md:pt-40">
        <p className="cm-eyebrow">Legal</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-foreground/70">
          Last updated: {LAST_UPDATED}
        </p>

        <p className={p}>
          This policy explains what information Clickmasters (&quot;we&quot;,
          &quot;us&quot;) collects when you use this website, why we collect
          it, and the choices you have. It covers this website only, not
          software we build for clients, which is governed by each client
          agreement.
        </p>

        <h2 className={h2}>Information you give us</h2>
        <p className={p}>
          When you send an inquiry through our{" "}
          <Link href="/contact" className={a}>
            contact form
          </Link>
          , we collect the details you enter:
        </p>
        <ul className={ul}>
          <li>your name and email address;</li>
          <li>your company name and project budget, if you provide them;</li>
          <li>your message.</li>
        </ul>
        <p className={p}>
          With the inquiry we also record the page you sent it from, the
          referring page, and any campaign tags in the link you followed
          (UTM parameters), so we know how you found us. If you email or call
          us directly, we keep that correspondence.
        </p>

        <h2 className={h2}>Information collected automatically</h2>
        <ul className={ul}>
          <li>
            <strong>Analytics.</strong> We use Google Tag Manager and Google
            Analytics to understand how visitors use the site (pages viewed,
            approximate location, device and browser type, how you arrived).
            These tools set cookies or similar identifiers. Google processes
            this data under its own{" "}
            <a
              href="https://policies.google.com/privacy"
              className={a}
              rel="noopener noreferrer"
              target="_blank"
            >
              privacy policy
            </a>
            .
          </li>
          <li>
            <strong>Server logs.</strong> Our web server records standard
            request information such as IP address, browser user agent, the
            page requested and the time of the request, for security and
            troubleshooting.
          </li>
          <li>
            <strong>Embedded media.</strong> Some pages may embed videos from
            YouTube (privacy-enhanced mode) or Vimeo, which may collect data
            when you play them.
          </li>
        </ul>

        <h2 className={h2}>How we use information</h2>
        <ul className={ul}>
          <li>to reply to your inquiry and discuss a possible project;</li>
          <li>to keep a record of our business communications;</li>
          <li>to understand and improve how the website is used;</li>
          <li>to keep the website secure and working.</li>
        </ul>
        <p className={p}>
          We do not sell your personal information, and we do not use the
          contact form to add you to marketing lists without your consent.
        </p>

        <h2 className={h2}>Who we share it with</h2>
        <p className={p}>
          Contact-form inquiries are stored in our customer relationship
          management (CRM) system so our team can respond. We use service
          providers for website hosting and analytics (Google). They process
          data on our behalf. We may also disclose information if required by
          law.
        </p>

        <h2 className={h2}>How long we keep it</h2>
        <p className={p}>
          We keep inquiry details for as long as needed to respond and to
          maintain business records, and then delete them. Analytics data is
          kept according to the retention settings of our Google Analytics
          account.
        </p>

        <h2 className={h2}>Your choices and rights</h2>
        <ul className={ul}>
          <li>
            You can block or delete cookies in your browser settings, or use
            Google&apos;s{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              className={a}
              rel="noopener noreferrer"
              target="_blank"
            >
              Analytics opt-out add-on
            </a>
            .
          </li>
          <li>
            Depending on where you live, you may have the right to access,
            correct or delete the personal information we hold about you, or
            to object to how we use it. To make a request, email us at the
            address below.
          </li>
        </ul>

        <h2 className={h2}>Security</h2>
        <p className={p}>
          The website is served over HTTPS and we limit access to inquiry
          data to the people who need it. No method of transmission or
          storage is completely secure, so we cannot guarantee absolute
          security.
        </p>

        <h2 className={h2}>Children</h2>
        <p className={p}>
          This website is intended for businesses and is not directed at
          children. We do not knowingly collect information from children.
        </p>

        <h2 className={h2}>Changes to this policy</h2>
        <p className={p}>
          We may update this policy when our website or practices change. The
          date at the top shows when it was last revised.
        </p>

        <h2 className={h2}>Contact</h2>
        <p className={p}>
          Questions or requests about your information:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className={a}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </article>
    </PageFrame>
  );
}
