"use client";

import { useState, useTransition } from "react";
import type { ConciergeSubmission, SubmissionStatus } from "@/lib/concierge-submissions";

type AdminDashboardProps = {
  initialSubmissions: ConciergeSubmission[];
  initialStats: {
    pendingReviews: number;
    approvedToday: number;
    declinedToday: number;
  };
};

export function AdminDashboard({
  initialSubmissions,
  initialStats,
}: AdminDashboardProps) {
  const [submissions, setSubmissions] = useState(initialSubmissions);
  const [stats, setStats] = useState(initialStats);
  const [activeId, startTransition] = useTransition();
  const [pendingSubmissionId, setPendingSubmissionId] = useState<string | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  function updateSubmissionStatus(id: string, status: SubmissionStatus) {
    setPendingSubmissionId(id);

    startTransition(async () => {
      try {
        const response = await fetch(`/api/concierge-review/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        });

        const data = (await response.json()) as {
          ok?: boolean;
          submission?: ConciergeSubmission;
          stats?: AdminDashboardProps["initialStats"];
          message?: string;
        };

        if (!response.ok || !data.ok || !data.submission || !data.stats) {
          throw new Error(data.message ?? "Unable to update the submission status.");
        }

        setSubmissions((currentSubmissions) =>
          currentSubmissions.map((submission) =>
            submission.id === id ? data.submission! : submission,
          ),
        );
        setStats(data.stats);
      } catch (error) {
        console.error(error);
      } finally {
        setPendingSubmissionId(null);
      }
    });
  }

  return (
    <>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        <StatCard
          label="Pending Reviews"
          value={String(stats.pendingReviews)}
          detail="Awaiting concierge approval"
        />
        <StatCard
          label="Approved Today"
          value={String(stats.approvedToday)}
          detail="Moved into intake fulfillment"
        />
        <StatCard
          label="Declined Today"
          value={String(stats.declinedToday)}
          detail="Not currently a fit for placement"
        />
      </div>

      <section className="px-6 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[38px] border border-[#b89345]/20 bg-[linear-gradient(180deg,rgba(12,12,12,0.84),rgba(28,25,22,0.96))] p-6 text-white shadow-[0_28px_80px_rgba(15,15,15,0.24)] sm:p-8">
            <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#e6c67c]">
                  Concierge Review Queue
                </p>
                <h2 className="mt-3 font-[family:var(--font-cormorant)] text-4xl font-semibold">
                  Intake review queue
                </h2>
              </div>
              <p className="text-sm leading-7 text-stone-300">
                Live local development submissions with approval and decline status.
              </p>
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-2">
              {submissions.map((submission) => {
                const isUpdating =
                  pendingSubmissionId === submission.id && Boolean(activeId);

                return (
                  <article
                    key={submission.id}
                    className={`rounded-[30px] border p-6 shadow-[0_20px_50px_rgba(0,0,0,0.22)] transition ${
                      submission.status === "Approved"
                        ? "border-[#d7b46a]/30 bg-[linear-gradient(180deg,rgba(247,240,223,0.14),rgba(255,255,255,0.04))]"
                        : submission.status === "Declined"
                          ? "border-white/10 bg-[linear-gradient(180deg,rgba(84,28,28,0.16),rgba(255,255,255,0.04))]"
                          : "border-white/10 bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e6c67c]">
                          {submission.itemCategory}
                        </p>
                        <h3 className="mt-3 font-[family:var(--font-cormorant)] text-3xl font-semibold text-white">
                          {submission.clientName}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-stone-300">
                          Submitted {formatSubmissionDate(submission.submittedAt)}
                        </p>
                      </div>
                      <StatusBadge status={submission.status} />
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <Detail label="Full Name" value={submission.clientName} />
                      <ContactDetail
                        label="Email"
                        value={submission.email}
                        href={`mailto:${submission.email}`}
                      />
                      <ContactDetail
                        label="Phone Number"
                        value={submission.phoneNumber}
                        href={`tel:${submission.phoneNumber.replace(/[^\d+]/g, "")}`}
                      />
                      <Detail label="Item Category" value={submission.itemCategory} />
                      <Detail label="Brand" value={submission.brand} />
                      <Detail label="Model or Item Name" value={submission.modelName} />
                      <Detail label="Estimated Value" value={submission.estimatedValue} />
                      <Detail label="Item Condition" value={submission.condition} />
                      <Detail
                        label="Shipping Label Requested"
                        value={submission.shippingLabelRequested}
                      />
                      <Detail
                        label="Submitted Date"
                        value={formatSubmissionDate(submission.submittedAt)}
                      />
                      <Detail label="Submission Status" value={submission.status} />
                    </div>

                    <div className="mt-4 rounded-[22px] border border-white/8 bg-black/20 px-5 py-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e6c67c]">
                        Item Description
                      </p>
                      <p className="mt-3 text-base leading-7 text-white/90">
                        {submission.itemDescription}
                      </p>
                    </div>

                    <div className="mt-4 rounded-[22px] border border-white/8 bg-black/20 px-5 py-4">
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e6c67c]">
                          Uploaded Photos
                        </p>
                        <p className="text-xs uppercase tracking-[0.18em] text-stone-400">
                          {submission.photos.length} file{submission.photos.length === 1 ? "" : "s"}
                        </p>
                      </div>

                      {submission.photos.length > 0 ? (
                        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                          {submission.photos.map((photo, index) => (
                            <button
                              key={`${submission.id}-${photo.name}-${index}`}
                              type="button"
                              onClick={() =>
                                setSelectedPhoto({
                                  src: photo.previewUrl,
                                  alt: `${submission.modelName} photo ${index + 1}`,
                                })
                              }
                              className="group overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.05] text-left transition hover:-translate-y-0.5 hover:border-[#d7b46a]/28"
                            >
                              <div className="aspect-[4/3] overflow-hidden bg-[linear-gradient(135deg,rgba(22,22,22,0.95),rgba(42,34,24,0.9))]">
                                <img
                                  src={photo.previewUrl}
                                  alt={`${submission.modelName} thumbnail ${index + 1}`}
                                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                                />
                              </div>
                              <div className="px-3 py-2">
                                <p className="truncate text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-300">
                                  {photo.name}
                                </p>
                              </div>
                            </button>
                          ))}
                        </div>
                      ) : (
                        <p className="mt-3 text-sm leading-7 text-stone-400">
                          No uploaded images were included with this submission.
                        </p>
                      )}
                    </div>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <ActionButton
                        label={isUpdating ? "Updating..." : "Approve"}
                        onClick={() => updateSubmissionStatus(submission.id, "Approved")}
                        disabled={isUpdating}
                        tone="approve"
                      />
                      <ActionButton
                        label={isUpdating ? "Updating..." : "Decline"}
                        onClick={() => updateSubmissionStatus(submission.id, "Declined")}
                        disabled={isUpdating}
                        tone="decline"
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {selectedPhoto ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 py-10 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[32px] border border-[#d7b46a]/22 bg-[linear-gradient(180deg,rgba(12,12,12,0.94),rgba(28,25,22,0.98))] p-4 shadow-[0_28px_80px_rgba(0,0,0,0.34)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between gap-4 px-2 pt-1">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#e6c67c]">
                Submission Photo Preview
              </p>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/[0.08]"
              >
                Close
              </button>
            </div>
            <div className="overflow-hidden rounded-[24px] border border-white/8 bg-black/30">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-h-[76vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function formatSubmissionDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

function StatCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <article className="rounded-[30px] border border-stone-200/80 bg-white/80 p-6 shadow-[0_22px_48px_rgba(23,20,15,0.07)] backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9b7630]">
        {label}
      </p>
      <p className="mt-4 font-[family:var(--font-cormorant)] text-5xl font-semibold text-stone-950">
        {value}
      </p>
      <p className="mt-3 text-sm leading-7 text-stone-600">{detail}</p>
    </article>
  );
}

function StatusBadge({ status }: { status: SubmissionStatus }) {
  const styles =
    status === "Approved"
      ? "border-[#d7b46a]/20 bg-[#f7f0df] text-stone-900"
      : status === "Declined"
        ? "border-red-300/25 bg-red-500/10 text-red-100"
        : "border-[#d7b46a]/20 bg-[#f7f0df] text-stone-900";

  return (
    <span
      className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] ${styles}`}
    >
      {status}
    </span>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[22px] border border-white/8 bg-black/20 px-5 py-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e6c67c]">
        {label}
      </p>
      <p className="mt-3 text-base leading-7 text-white/90">{value}</p>
    </div>
  );
}

function ContactDetail({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div className="rounded-[22px] border border-white/8 bg-black/20 px-5 py-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e6c67c]">
        {label}
      </p>
      <a
        href={href}
        className="mt-3 block break-all text-base leading-7 text-white transition hover:text-[#f3e2b4]"
      >
        {value}
      </a>
    </div>
  );
}

function ActionButton({
  label,
  onClick,
  disabled,
  tone,
}: {
  label: string;
  onClick: () => void;
  disabled: boolean;
  tone: "approve" | "decline";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] transition disabled:cursor-not-allowed disabled:opacity-70 ${
        tone === "approve"
          ? "bg-[#f3e2b4] text-stone-950 hover:-translate-y-0.5"
          : "border border-white/15 bg-white/[0.05] text-white hover:-translate-y-0.5 hover:bg-white/[0.08]"
      }`}
    >
      {label}
    </button>
  );
}
