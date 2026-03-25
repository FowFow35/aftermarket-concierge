import { NextRequest, NextResponse } from "next/server";
import {
  addConciergeSubmission,
  getConciergeDashboardStats,
  getConciergeSubmissions,
} from "@/lib/concierge-submissions";

export function GET() {
  return NextResponse.json({
    ok: true,
    submissions: getConciergeSubmissions(),
    stats: getConciergeDashboardStats(),
  });
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const photos = formData
      .getAll("photos")
      .filter((entry): entry is File => entry instanceof File && entry.size > 0);

    const photoPayload = await Promise.all(
      photos.map(async (photo) => {
        const bytes = await photo.arrayBuffer();
        const base64 = Buffer.from(bytes).toString("base64");

        return {
          name: photo.name,
          type: photo.type,
          size: photo.size,
          previewUrl: `data:${photo.type || "image/jpeg"};base64,${base64}`,
        };
      }),
    );

    const submission = addConciergeSubmission({
      clientName: String(formData.get("fullName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phoneNumber: String(formData.get("phoneNumber") ?? ""),
      itemCategory: String(formData.get("itemCategory") ?? ""),
      brand: String(formData.get("brand") ?? ""),
      modelName: String(formData.get("modelName") ?? ""),
      estimatedValue: String(formData.get("estimatedValue") ?? ""),
      condition: String(formData.get("itemCondition") ?? ""),
      itemDescription: String(formData.get("itemDescription") ?? ""),
      shippingLabelRequested:
        formData.get("needsPrepaidShippingLabel") === "No" ? "No" : "Yes",
      payoutAcknowledgement: formData.get("payoutAcknowledgement") === "on",
      photos: photoPayload,
    });

    console.log("AfterMarket Concierge review submission:", submission);

    return NextResponse.json({
      ok: true,
      message: "Submission received.",
      submission,
    });
  } catch (error) {
    console.error("Unable to process concierge review submission:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "Unable to process the submission right now.",
      },
      { status: 500 },
    );
  }
}
