import AboutPage from "./AboutPage";
import { breadcrumbSchema, JsonLd } from "@/components/seo/JsonLd";
import { fitDescription, fitTitle } from "@/lib/seo";
import { services } from "../[main_service]/[sub_service]/service-data";

const capabilities = Object.values(services)
  .slice(0, 6)
  .map((service) => ({
    slug: service.slug,
    title: service.title,
    description: service.description,
    icon: service.icon,
  }));

export const dynamic = "force-static";

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
      <AboutPage capabilities={capabilities} />
    </>
  );
}
