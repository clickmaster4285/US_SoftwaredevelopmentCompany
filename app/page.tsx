import type { Metadata } from "next";
import HomePage from "./home-client";
import { pageUrl } from "@/lib/site";

const homeUrl = pageUrl("/");

export const metadata: Metadata = {
  alternates: {
    canonical: homeUrl,
  },
  openGraph: {
    url: homeUrl,
  },
};

export default function Page() {
  return <HomePage />;
}
