import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

const payoutItems = [
  "AfterMarket Concierge does not take a consignment commission.",
  "Clients pay a flat monthly membership for service access.",
  "Items may be listed on marketplaces such as eBay, where platform fees still apply.",
  "Clients receive the remaining marketplace payout after applicable marketplace fees and approved deductions.",
  "If a prepaid inbound shipping label is provided, that label cost may be deducted from the final payout.",
  "If other client-approved costs apply, those costs may also be deducted.",
];

const sectionCards = [
  {
    eyebrow: "Section 01",
    title: "Item Approval Policy",
    intro:
      "Every item begins with review before shipment so intake decisions remain selective, consistent, and presentation-focused.",
    tone: "light",
    points: [
      "All items must be reviewed and approved before being sent in.",
      "AfterMarket Concierge may decline items based on condition, category, authenticity concerns, market demand, or other business reasons.",
      "Approval to ship an item does not guarantee it will be listed.",
      "If an item arrives materially different from the submitted photos or description, it may be declined.",
    ],
  },
  {
    eyebrow: "Section 02",
    title: "Authentication & Item Information",
    intro:
      "Authentication review supports responsible intake, but it depends on the information available at the time of review.",
    tone: "dark",
    points: [
      "AfterMarket Concierge may perform research and authentication review.",
      "Authentication review is based on available information, photographs, seller-provided details, and market knowledge.",
      "The client is responsible for providing accurate and truthful information about the item.",
      "Counterfeit, stolen, illegal, recalled, or prohibited goods are not accepted.",
      "AfterMarket Concierge reserves the right to refuse service for any item that raises authenticity or compliance concerns.",
    ],
  },
  {
    eyebrow: "Section 03",
    title: "Shipping & Intake",
    intro:
      "Shipping support may be available, but careful packaging and pre-intake documentation remain important client responsibilities.",
    tone: "light",
    points: [
      "Clients may be offered a prepaid inbound shipping label.",
      "Premium clients may be offered a shipping kit when available.",
      "Clients are responsible for packaging the item securely unless otherwise agreed.",
      "AfterMarket Concierge is not responsible for carrier delays or shipping damage caused before the item is received.",
      "Clients should retain shipment tracking and documentation until intake is confirmed.",
    ],
  },
  {
    eyebrow: "Section 04",
    title: "Listing & Sale Process",
    intro:
      "Listing presentation is handled by the concierge team, while marketplace outcomes remain dependent on live buyer demand.",
    tone: "dark",
    points: [
      "AfterMarket Concierge controls listing presentation, photography, copywriting, and marketplace strategy.",
      "Suggested pricing may be discussed, but marketplace results are not guaranteed.",
      "Timing of sale is not guaranteed.",
      "AfterMarket Concierge may adjust listing presentation to improve sell-through while preserving agreed business rules.",
    ],
  },
  {
    eyebrow: "Section 05",
    title: "Unsold Items / Returns",
    intro:
      "If a piece does not sell, next steps can be reviewed thoughtfully rather than treated as an automated outcome.",
    tone: "light",
    points: [
      "If an item does not sell, the client may be offered options such as continued listing, price adjustment, or return shipment.",
      "Return shipping costs may be the client’s responsibility unless otherwise stated.",
      "AfterMarket Concierge may set timelines for inactive or unsold inventory.",
    ],
  },
  {
    eyebrow: "Section 06",
    title: "Important Limitations",
    intro:
      "Luxury resale markets can move unpredictably, so expectations should remain clear around timing, pricing, and payout release.",
    tone: "dark",
    points: [
      "Sale prices are not guaranteed.",
      "Timing of sale is not guaranteed.",
      "Marketplace performance is outside of AfterMarket Concierge’s control.",
      "Payout timing may depend on marketplace payment release and order completion.",
    ],
  },
];

export default function TermsPayoutsPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,rgba(250,247,241,0.96)_0%,rgba(242,237,228,0.94)_48%,rgba(255,252,247,0.98)_100%)] text-stone-950">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 luxury-marble opacity-90" />
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(201,161,74,0.18),transparent_65%)]" />
        <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(19,19,18,0.1),transparent_68%)] blur-3xl" />
        <div className="absolute right-[-7rem] top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(201,161,74,0.15),transparent_66%)] blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-8 sm:px-8 lg:px-12">
          <SiteHeader subtitle="Service Terms & Payout Transparency" />

          <div className="grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
            <div className="max-w-3xl self-end">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#9b7630]">
                Terms & Payouts
              </p>
              <h1 className="mt-5 font-[family:var(--font-cormorant)] text-4xl font-semibold leading-[0.95] text-stone-950 sm:text-6xl">
                Terms &amp; Payouts
              </h1>
              <p className="mt-6 text-lg leading-8 text-stone-700">
                Clear service terms for a luxury resale experience.
              </p>
              <p className="mt-5 text-sm uppercase tracking-[0.22em] text-stone-500">
                Last Updated: March 22, 2026
              </p>
              <div className="mt-8 h-px w-28 bg-[linear-gradient(90deg,#c9a14a,rgba(201,161,74,0.12))]" />
              <p className="mt-8 max-w-2xl text-base leading-8 text-stone-700">
                This page is designed to explain the practical terms behind payouts,
                shipping, approvals, and resale operations in a way that is clear,
                premium, and easy to review before intake.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                ["No consignment commission", "Service is membership-based rather than commission-based."],
                ["Marketplace fees still apply", "Platform deductions remain separate from membership pricing."],
                ["Approval before shipment", "Items are reviewed before intake and may still be declined."],
                ["Conservative expectations", "Sale price, timing, and payout release are never guaranteed."],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="luxury-panel rounded-[32px] border border-[#b89345]/18 p-4 shadow-[0_22px_60px_rgba(15,15,15,0.16)]"
                >
                  <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,12,12,0.78),rgba(28,25,22,0.95))] p-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e6c67c]">
                      Key Point
                    </p>
                    <h2 className="mt-4 font-[family:var(--font-cormorant)] text-3xl font-semibold leading-tight">
                      {title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-stone-300">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="rounded-[38px] border border-[#b89345]/20 bg-[linear-gradient(180deg,rgba(12,12,12,0.84),rgba(28,25,22,0.96))] px-7 py-8 text-white shadow-[0_28px_80px_rgba(15,15,15,0.24)] sm:px-9 sm:py-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#e6c67c]">
                How Payouts Work
              </p>
              <h2 className="mt-4 font-[family:var(--font-cormorant)] text-4xl font-semibold sm:text-5xl">
                Clear economics, presented in full view.
              </h2>
              <p className="mt-5 text-base leading-8 text-stone-300">
                The service is designed to keep compensation and deductions understandable.
                Clients retain the marketplace payout after applicable platform fees and
                any approved deductions connected to the transaction.
              </p>
              <div className="mt-8 h-px w-28 bg-[linear-gradient(90deg,#d7b46a,rgba(215,180,106,0.12))]" />
              <div className="mt-8 space-y-4">
                {payoutItems.map((item) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-[22px] border border-white/10 bg-white/[0.04] p-4"
                  >
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#d7b46a] shadow-[0_0_14px_rgba(215,180,106,0.5)]" />
                    <p className="text-base leading-8 text-stone-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[34px] border border-[#d8b66a]/20 bg-[linear-gradient(180deg,rgba(251,247,239,0.96),rgba(243,233,211,0.96))] p-8 text-stone-950 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#8b6a2d]">
                Premium Payout Example
              </p>
              <h3 className="mt-4 font-[family:var(--font-cormorant)] text-4xl font-semibold">
                Sample transaction breakdown
              </h3>
              <div className="mt-8 space-y-4">
                {[
                  ["Sale price", "$3,200"],
                  ["Marketplace fee", "-$416"],
                  ["Prepaid inbound label", "-$32"],
                  ["Client-approved service cost", "-$18"],
                  ["Final client payout", "$2,734"],
                ].map(([label, amount], index) => (
                  <div
                    key={label}
                    className={`flex items-center justify-between rounded-[22px] px-5 py-4 ${
                      index === 4 ? "bg-stone-950 text-[#f3e2b4]" : "bg-white/70"
                    }`}
                  >
                    <span className="text-sm uppercase tracking-[0.16em]">{label}</span>
                    <span className="font-[family:var(--font-cormorant)] text-3xl font-semibold">
                      {amount}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-stone-700">
                This example is illustrative only. Actual marketplace fees, payout timing,
                and approved deductions may vary by platform and transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
        <div className="space-y-8">
          {sectionCards.map((section) => (
            <article
              key={section.title}
              className={`rounded-[36px] border p-8 shadow-[0_24px_60px_rgba(31,25,18,0.08)] sm:p-10 ${
                section.tone === "dark"
                  ? "border-[#b89345]/18 bg-[linear-gradient(180deg,rgba(12,12,12,0.82),rgba(28,25,22,0.96))] text-white"
                  : "border-stone-200/80 bg-white/85 text-stone-950"
              }`}
            >
              <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
                <div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.32em] ${
                      section.tone === "dark" ? "text-[#e6c67c]" : "text-[#9b7630]"
                    }`}
                  >
                    {section.eyebrow}
                  </p>
                  <h2 className="mt-4 font-[family:var(--font-cormorant)] text-4xl font-semibold sm:text-[2.6rem]">
                    {section.title}
                  </h2>
                  <div
                    className={`mt-6 h-px w-24 ${
                      section.tone === "dark"
                        ? "bg-[linear-gradient(90deg,#d7b46a,rgba(215,180,106,0.08))]"
                        : "bg-[linear-gradient(90deg,#c9a14a,rgba(201,161,74,0.08))]"
                    }`}
                  />
                  <p
                    className={`mt-6 max-w-md text-base leading-8 ${
                      section.tone === "dark" ? "text-stone-300" : "text-stone-700"
                    }`}
                  >
                    {section.intro}
                  </p>
                </div>

                <div className="grid gap-4">
                  {section.points.map((point) => (
                    <div
                      key={point}
                      className={`flex gap-4 rounded-[24px] border p-5 ${
                        section.tone === "dark"
                          ? "border-white/10 bg-white/[0.04]"
                          : "border-stone-200/80 bg-[#fbf7ef]"
                      }`}
                    >
                      <div
                        className={`mt-1 h-2.5 w-2.5 rounded-full ${
                          section.tone === "dark" ? "bg-[#d7b46a]" : "bg-[#c9a14a]"
                        }`}
                      />
                      <p
                        className={`text-base leading-8 ${
                          section.tone === "dark" ? "text-stone-200" : "text-stone-700"
                        }`}
                      >
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="rounded-[38px] border border-[#b89345]/25 bg-[linear-gradient(135deg,#161616_0%,#221d15_52%,#111111_100%)] px-8 py-10 text-white shadow-[0_28px_70px_rgba(16,16,16,0.22)] sm:px-10 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#e6c67c]">
            Contact & Questions
          </p>
          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-[family:var(--font-cormorant)] text-4xl font-semibold sm:text-5xl">
                Questions about intake, payouts, or service terms can be reviewed
                directly with our concierge team.
              </h2>
              <p className="mt-4 text-base leading-8 text-stone-300">
                For clarification before submitting an item, contact us and we will
                guide you through the applicable service details.
              </p>
            </div>
            <div className="space-y-3 text-sm leading-7 text-stone-200">
              <p>concierge@aftermarketconcierge.com</p>
              <p>(800) 555-0148</p>
              <Link
                href="/apply"
                className="inline-flex items-center justify-center rounded-full bg-[#f3e2b4] px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-stone-950 transition hover:-translate-y-0.5"
              >
                Start Concierge Intake
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200/80 bg-white/70 px-6 py-10 backdrop-blur sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-[family:var(--font-cormorant)] text-2xl font-semibold text-stone-950">
              AfterMarket Concierge
            </p>
            <p className="mt-1 text-sm uppercase tracking-[0.22em] text-stone-500">
              Luxury resale concierge membership
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm leading-7 text-stone-600 sm:items-end">
            <Link href="/reviews" className="font-medium text-stone-900">
              Client Reviews
            </Link>
            <Link href="/terms-payouts" className="font-medium text-stone-900">
              Terms &amp; Payouts
            </Link>
            <p>No consignment commission. Marketplace fees may still apply.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
