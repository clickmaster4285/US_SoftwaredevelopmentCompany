// app/api/erp-edits/route.ts
// Same-origin proxy the browser uses to load ERP page edits (keeps the site's
// CSP connect-src at 'self' and the ERP address server-side).
//   GET /api/erp-edits             → { paths: string[] }     (B1)
//   GET /api/erp-edits?path=/a/b   → { edits: ErpEdit[], version }  (B2, list checked first)
// The list answers 200 with [] on errors. The per-path read answers 503 when
// the ERP can't be read, so the browser keeps the edits it already applied
// instead of reverting them.
import { NextResponse, type NextRequest } from "next/server";
import { getEditedPageLive, getEditedPaths } from "@/lib/cms/erp-edits";
import { cmsWarn } from "@/lib/cms/config";

export const dynamic = "force-dynamic";

const headers = { "Cache-Control": "no-store" };

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path");
  if (path === null) {
    return NextResponse.json(
      { paths: await getEditedPaths({ fresh: true }) },
      { headers },
    );
  }
  if (path.length > 2048)
    return NextResponse.json({ edits: [], version: 0 }, { headers });
  try {
    const page = await getEditedPageLive(path);
    return NextResponse.json(
      { edits: page?.edits ?? [], version: page?.version ?? 0 },
      { headers },
    );
  } catch (error) {
    cmsWarn(`live edits unavailable for ${path}:`, error);
    return NextResponse.json(
      { error: "unavailable" },
      { status: 503, headers },
    );
  }
}
