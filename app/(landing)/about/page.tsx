import AboutPage from "./AboutPage";
import { breadcrumbSchema, JsonLd } from "@/components/seo/JsonLd";
import { fitDescription, fitTitle } from "@/lib/seo";

const title = fitTitle("About");
const description = fitDescription(
  "Learn about Clickmasters, a remote-first studio for software development, UI/UX design, automation, AI, cloud, and support.",
  "About Clickmasters",
);

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title,
    description,
    url: "/about",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <AboutPage />
    </>
  );
}
