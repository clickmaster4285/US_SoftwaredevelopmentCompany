// Pages created in the ERP at depth ≥ 3 (e.g. /blog/2026/my-post).
// Depth 1 and 2 are served by the [main_service] / [sub_service] routes,
// which own their code-defined slugs and fall back to the CMS for the rest.
import CmsRoute, {
  cmsPath,
  cmsRouteMetadataWithEdits,
} from "@/components/cms/CmsRoute";

type PageProps = {
  params: Promise<{
    main_service: string;
    sub_service: string;
    rest: string[];
  }>;
};

export const dynamic = "force-static";
export const dynamicParams = true;
export const revalidate = 60;

// Nothing is pre-rendered: created pages render on first request, then cache.
export function generateStaticParams() {
  return [];
}

async function pathFrom(params: PageProps["params"]) {
  const { main_service, sub_service, rest } = await params;
  return cmsPath([main_service, sub_service, ...rest]);
}

export async function generateMetadata({ params }: PageProps) {
  return cmsRouteMetadataWithEdits(await pathFrom(params));
}

export default async function Page({ params }: PageProps) {
  return <CmsRoute path={await pathFrom(params)} />;
}
