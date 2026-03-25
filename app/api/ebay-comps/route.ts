import { NextRequest, NextResponse } from "next/server";
import { getEbayPriceSummary } from "@/lib/ebay-server";

export async function GET(request: NextRequest) {
  const title = request.nextUrl.searchParams.get("title")?.trim() ?? "";

  if (!title) {
    return NextResponse.json(
      {
        ok: false,
        message: "A cleaned item title is required.",
      },
      { status: 400 },
    );
  }

  try {
    const summary = await getEbayPriceSummary(title);

    if (summary.resultCount === 0) {
      return NextResponse.json({
        ok: false,
        message: "No matching eBay price results were found for this item.",
      });
    }

    return NextResponse.json({
      ok: true,
      ...summary,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to load eBay comparison data right now.";

    return NextResponse.json({
      ok: false,
      message,
    });
  }
}
