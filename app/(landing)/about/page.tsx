import AboutPage from "./AboutPage";

export const metadata = {
  title: "About Clickmasters | Software, Design & AI Studio",
  description:
    "Learn about Clickmasters, a digital product studio for software development, UI/UX design, automation, AI, cloud, and support.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Clickmasters | Software, Design & AI Studio",
    description:
      "Learn about Clickmasters, a digital product studio for software development, UI/UX design, automation, AI, cloud, and support.",
    url: "/about",
  },
};

export default function Page() {
  return <AboutPage />;
}
