// app/api/cms-page-status/route.ts
// Live updates for pages created in the ERP.
//   GET /api/cms-page-status?path=/a/b&rendered=<signature in the browser's DOM>
//   → { signature, refreshed }
// When the ERP's current page differs from the server's cached copy or from
// what the browser rendered, the data cache and the page's ISR entry are
// purged, so the browser's router.refresh() renders the new version without a
// full reload.
import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { getCmsPageStatus, toCmsSlug } from "@/lib/cms/cms";

export const dynamic = "force-dynamic";

const headers = { "Cache-Control": "no-store" };
const none = () =>
  NextResponse.json({ signature: null, refreshed: false }, { headers });

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const path = params.get("path") ?? "";
  const rendered = (params.get("rendered") ?? "").slice(0, 64);
  if (!path || path.length > 2048) return none();
  const slug = toCmsSlug(path);
  if (!slug) return none();

  const status = await getCmsPageStatus(slug);
  if (!status || !status.fresh) return none();

  const refreshed =
    status.fresh !== status.cached ||
    (rendered !== "" && status.fresh !== rendered);
  if (refreshed) {
    revalidateTag("cms-page", { expire: 0 });
    revalidatePath(slug);
  }
  return NextResponse.json({ signature: status.fresh, refreshed }, { headers });
}
