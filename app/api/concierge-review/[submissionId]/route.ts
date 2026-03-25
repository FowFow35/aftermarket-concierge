import { NextRequest, NextResponse } from "next/server";
import {
  getConciergeDashboardStats,
  updateConciergeSubmissionStatus,
} from "@/lib/concierge-submissions";

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ submissionId: string }> },
) {
  try {
    const { submissionId } = await context.params;
    const body = (await request.json()) as { status?: "Pending" | "Approved" | "Declined" };

    if (!body.status || !["Pending", "Approved", "Declined"].includes(body.status)) {
      return NextResponse.json(
        {
          ok: false,
          message: "A valid submission status is required.",
        },
        { status: 400 },
      );
    }

    const submission = updateConciergeSubmissionStatus(submissionId, body.status);

    if (!submission) {
      return NextResponse.json(
        {
          ok: false,
          message: "Submission not found.",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      ok: true,
      submission,
      stats: getConciergeDashboardStats(),
    });
  } catch (error) {
    console.error("Unable to update concierge submission status:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "Unable to update the submission right now.",
      },
      { status: 500 },
    );
  }
}
