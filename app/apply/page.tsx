"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { SiteHeader } from "@/components/site-header";

const categoryOptions = [
  "Watches",
  "Designer Bags",
  "Sneakers",
  "Golf Equipment",
  "Collectibles",
  "Electronics",
  "Other",
];

const conditionOptions = ["New", "Excellent", "Good", "Fair"];

export default function ApplyPage() {
  const [needsLabel, setNeedsLabel] = useState<"Yes" | "No">("Yes");
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    title: string;
    detail: string;
  }>({
    type: "idle",
    title: "",
    detail: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", title: "", detail: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("needsPrepaidShippingLabel", needsLabel);

    try {
      const response = await fetch("/api/concierge-review", {
        method: "POST",
        body: formData,
      });

      const data = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.message ?? "Unable to submit your item right now.");
      }

      form.reset();
      setNeedsLabel("Yes");
      setStatus({
        type: "success",
        title: "Thank you. Your item has been submitted for concierge review.",
        detail:
          "We will contact you directly within 12 hours. If the item is approved, we will provide next steps, membership details, and intake guidance before intake begins.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        title: "Unable to submit your item right now.",
        detail:
          error instanceof Error
            ? error.message
            : "Unable to submit your item right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,rgba(250,247,241,0.96)_0%,rgba(242,237,228,0.94)_48%,rgba(255,252,247,0.98)_100%)] text-stone-950">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 luxury-marble opacity-90" />
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(201,161,74,0.18),transparent_65%)]" />
        <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(19,19,18,0.1),transparent_68%)] blur-3xl" />
        <div className="absolute right-[-7rem] top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(201,161,74,0.15),transparent_66%)] blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-8 sm:px-8 lg:px-12">
          <SiteHeader subtitle="White Glove Luxury Resale" />

          <div className="grid gap-10 py-16 lg:grid-cols-[0.82fr_1.18fr] lg:py-20">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#9b7630]">
                Private Concierge Review
              </p>
              <h1 className="mt-5 font-[family:var(--font-cormorant)] text-4xl font-semibold leading-[0.95] text-stone-950 sm:text-6xl">
                Submit your item for private concierge review.
              </h1>
              <p className="mt-7 text-base leading-8 text-stone-700 sm:text-lg">
                Share the essential item details and upload supporting photos. We will
                review fit, value range, presentation needs, and shipping preferences
                within 24 hours before any next step is considered.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  "Private first review with no obligation to move forward",
                  "Response within 24 hours for premium-category submissions",
                  "White-glove guidance before shipment or intake",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[28px] border border-white/70 bg-white/55 p-5 shadow-[0_18px_42px_rgba(34,28,20,0.08)] backdrop-blur"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9b7630]">
                      Concierge Detail
                    </p>
                    <p className="mt-3 text-base leading-7 text-stone-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[30px] border border-[#c9a14a]/20 bg-[#fbf7ef]/90 p-6 shadow-[0_18px_42px_rgba(34,28,20,0.06)]">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b6a2d]">
                  What Happens Next
                </p>
                <div className="mt-4 space-y-3">
                  {[
                    "We review the submission privately for fit, value range, and category alignment.",
                    "We contact you directly by text or email within 12 hours.",
                    "If approved, we send membership details and the appropriate invoice.",
                    "Intake begins only after approval and payment are complete.",
                  ].map((line) => (
                    <div key={line} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#c9a14a]" />
                      <p className="text-sm leading-7 text-stone-700">{line}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="luxury-panel rounded-[36px] border border-[#b89345]/20 p-4 shadow-[0_28px_80px_rgba(15,15,15,0.24)] sm:p-6"
            >
              <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,12,12,0.78),rgba(28,25,22,0.95))] p-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-8">
                <div className="flex flex-col gap-4 border-b border-white/10 pb-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#e6c67c]">
                    Client Intake Form
                  </p>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h2 className="font-[family:var(--font-cormorant)] text-3xl font-semibold sm:text-4xl">
                        Private concierge review
                      </h2>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-300">
                        Complete the intake below and our team will review whether the
                        item is a fit for concierge placement. This first step is
                        designed to be private, low-pressure, and easy to explore.
                        If approved, membership details and next-step intake guidance
                        are sent afterward.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["No obligation", "Within 24 hours"].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[#d7b46a]/20 bg-[#f7f0df] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-stone-900"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" name="fullName" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone Number" name="phoneNumber" type="tel" required />
                  <SelectField
                    label="Item Category"
                    name="itemCategory"
                    options={categoryOptions}
                    required
                  />
                  <Field label="Brand" name="brand" required />
                  <Field label="Model or Item Name" name="modelName" required />
                  <Field
                    label="Estimated Value"
                    name="estimatedValue"
                    placeholder="$0.00"
                    required
                  />
                  <SelectField
                    label="Item Condition"
                    name="itemCondition"
                    options={conditionOptions}
                    required
                  />
                </div>

                <div className="mt-5">
                  <Label htmlFor="itemDescription">Item Description</Label>
                  <textarea
                    id="itemDescription"
                    name="itemDescription"
                    required
                    rows={5}
                    className="luxury-input mt-3 min-h-36 w-full rounded-[24px] px-5 py-4 text-base outline-none"
                    placeholder="Describe the item, notable condition details, provenance, and any accessories included."
                  />
                </div>

                <div className="mt-5">
                  <Label htmlFor="photos">Upload Photos</Label>
                  <div className="mt-3 rounded-[26px] border border-dashed border-[#d7b46a]/30 bg-white/[0.04] p-5">
                    <input
                      id="photos"
                      name="photos"
                      type="file"
                      accept="image/*"
                      multiple
                      className="block w-full text-sm text-stone-300 file:mr-4 file:rounded-full file:border-0 file:bg-[#f3e2b4] file:px-5 file:py-3 file:text-xs file:font-semibold file:uppercase file:tracking-[0.22em] file:text-stone-950 hover:file:bg-[#f7e9c2]"
                    />
                    <p className="mt-3 text-sm leading-7 text-stone-400">
                      Upload multiple images that clearly show the item, condition,
                      serial details, and included accessories.
                    </p>
                  </div>
                </div>

                <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#e6c67c]">
                    Shipping Preferences
                  </p>
                  <p className="mt-3 text-sm leading-7 text-stone-300">
                    Do you need a prepaid shipping label?
                  </p>
                  <div className="mt-5 inline-flex w-full rounded-full border border-white/10 bg-black/20 p-1 sm:w-auto">
                    {(["Yes", "No"] as const).map((option) => {
                      const isActive = needsLabel === option;

                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setNeedsLabel(option)}
                          aria-pressed={isActive}
                          className={`flex-1 rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] transition sm:flex-none ${
                            isActive
                              ? "bg-[#f3e2b4] text-stone-950 shadow-[0_14px_28px_rgba(243,226,180,0.18)]"
                              : "text-stone-300 hover:text-white"
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                  <input
                    type="hidden"
                    name="needsPrepaidShippingLabel"
                    value={needsLabel}
                  />
                </div>

                <label className="mt-6 flex items-start gap-4 rounded-[24px] border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-stone-200">
                  <input
                    type="checkbox"
                    name="payoutAcknowledgement"
                    required
                    className="mt-1 h-5 w-5 rounded border border-[#d7b46a]/40 bg-transparent accent-[#d7b46a]"
                  />
                  <span>
                    I understand that marketplace fees (such as eBay fees) may apply
                    and that prepaid shipping label costs may be deducted from the
                    final payout.
                  </span>
                </label>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex min-h-[56px] w-full items-center justify-center rounded-full bg-[#f3e2b4] px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-stone-950 transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(243,226,180,0.14)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                  >
                    {isSubmitting
                      ? "Submitting Review..."
                      : "Submit Item for Concierge Review"}
                  </button>
                  <p className="max-w-md text-sm leading-7 text-stone-400">
                    Submission is for private review only. We&apos;ll respond within 24
                    hours, and there is no obligation to move forward afterward.
                  </p>
                </div>

                {status.title ? (
                  <div
                    className={`mt-6 rounded-[26px] border px-5 py-5 ${
                      status.type === "success"
                        ? "border-[#d7b46a]/25 bg-[linear-gradient(180deg,#fbf7ef,#f3e7c7)] text-stone-900 shadow-[0_18px_42px_rgba(243,226,180,0.12)]"
                        : "border-red-400/30 bg-red-500/10 text-red-100"
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8b6a2d]">
                      {status.type === "success" ? "Submission Received" : "Submission Error"}
                    </p>
                    <p className="mt-3 font-[family:var(--font-cormorant)] text-3xl font-semibold leading-tight">
                      {status.title}
                    </p>
                    <p
                      className={`mt-3 text-sm leading-7 ${
                        status.type === "success" ? "text-stone-700" : "text-red-100"
                      }`}
                    >
                      {status.detail}
                    </p>
                  </div>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}: FieldProps) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="luxury-input mt-3 h-14 w-full rounded-[22px] px-5 text-base outline-none"
      />
    </div>
  );
}

type SelectFieldProps = {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
};

function SelectField({
  label,
  name,
  options,
  required = false,
}: SelectFieldProps) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="luxury-input mt-3 h-14 w-full rounded-[22px] px-5 text-base text-stone-100 outline-none"
      >
        <option value="" disabled className="text-stone-600">
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-stone-950 text-white">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

type LabelProps = {
  children: string;
  htmlFor: string;
};

function Label({ children, htmlFor }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-xs font-semibold uppercase tracking-[0.26em] text-[#e6c67c]"
    >
      {children}
    </label>
  );
}
