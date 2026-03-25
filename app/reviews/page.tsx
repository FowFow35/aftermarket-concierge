import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

const testimonials = [
  {
    client: "Olivia M.",
    item: "Rolex Datejust",
    highlight: "White-Glove Service",
    quote:
      "The process felt polished from the first review through payout. I never had to manage buyer messages, and the presentation was excellent.",
  },
  {
    client: "James R.",
    item: "Designer Bags",
    highlight: "Premium Presentation",
    quote:
      "The photography and listing quality were far beyond what I would have done on my own. It felt like a luxury service, not just a resale listing.",
  },
  {
    client: "Ava T.",
    item: "Omega Seamaster",
    highlight: "Excellent Communication",
    quote:
      "Every step was explained clearly, and I appreciated how easy the communication was without feeling pressured to move too quickly.",
  },
  {
    client: "Daniel S.",
    item: "Scotty Cameron Putter",
    highlight: "Trusted Handling",
    quote:
      "I cared a lot about how the item would be handled and shipped. The process felt careful, professional, and appropriately premium.",
  },
  {
    client: "Grace L.",
    item: "Jordan 1 Chicago",
    highlight: "Smooth Payout",
    quote:
      "The transparency around fees and payout made the whole experience feel more trustworthy. I always knew what to expect.",
  },
  {
    client: "Ethan B.",
    item: "Luxury Accessories",
    highlight: "Concierge Communication",
    quote:
      "It was a relief not to manage offers, questions, and follow-up myself. The service felt private, efficient, and very well handled.",
  },
];

const trustPoints = [
  {
    title: "Premium handling",
    detail:
      "Careful intake, preparation, and shipping support built for valuable inventory.",
  },
  {
    title: "Transparent payouts",
    detail:
      "Clear payout expectations with marketplace fees and approved deductions explained.",
  },
  {
    title: "Concierge communication",
    detail:
      "Buyer-facing communication managed professionally so clients stay out of the friction.",
  },
  {
    title: "Luxury presentation",
    detail:
      "Professional photography and thoughtful listing quality help pieces feel properly represented.",
  },
];

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,rgba(250,247,241,0.96)_0%,rgba(242,237,228,0.94)_48%,rgba(255,252,247,0.98)_100%)] text-stone-950">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 luxury-marble opacity-90" />
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(201,161,74,0.18),transparent_65%)]" />
        <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(19,19,18,0.1),transparent_68%)] blur-3xl" />
        <div className="absolute right-[-7rem] top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(201,161,74,0.15),transparent_66%)] blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-8 sm:px-8 lg:px-12">
          <SiteHeader subtitle="Client Reviews" />

          <div className="grid gap-10 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#9b7630]">
                Client Reviews
              </p>
              <h1 className="mt-5 font-[family:var(--font-cormorant)] text-5xl font-semibold leading-[0.95] text-stone-950 sm:text-6xl">
                Client Reviews
              </h1>
              <p className="mt-6 text-lg leading-8 text-stone-700">
                A refined resale experience, remembered well.
              </p>
            </div>
            <div className="luxury-panel rounded-[36px] border border-[#b89345]/20 p-4 shadow-[0_28px_80px_rgba(15,15,15,0.24)] sm:p-6">
              <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,12,12,0.78),rgba(28,25,22,0.95))] p-7 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#e6c67c]">
                  Trust Signals
                </p>
                <h2 className="mt-4 font-[family:var(--font-cormorant)] text-4xl font-semibold">
                  The service is designed to be felt, not just described.
                </h2>
                <p className="mt-4 text-base leading-8 text-stone-300">
                  Clients consistently respond to the same qualities: premium
                  handling, clear communication, thoughtful presentation, and a
                  process that removes friction without sacrificing trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={`${testimonial.client}-${testimonial.item}`}
              className="rounded-[32px] border border-stone-200/80 bg-white/85 p-6 shadow-[0_24px_60px_rgba(31,25,18,0.08)] backdrop-blur"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9b7630]">
                  {testimonial.item}
                </p>
                <span className="rounded-full border border-[#c9a14a]/20 bg-[#fbf7ef] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8b6a2d]">
                  {testimonial.highlight}
                </span>
              </div>
              <p className="mt-6 font-[family:var(--font-cormorant)] text-3xl font-semibold leading-tight text-stone-950">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="mt-6 text-sm uppercase tracking-[0.16em] text-stone-600">
                {testimonial.client}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">
        <div className="rounded-[38px] border border-[#b89345]/18 bg-[linear-gradient(180deg,rgba(12,12,12,0.84),rgba(28,25,22,0.96))] p-6 text-white shadow-[0_28px_80px_rgba(15,15,15,0.24)] sm:p-8">
          <div className="flex flex-col gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#e6c67c]">
                Client Trust
              </p>
              <h2 className="mt-4 font-[family:var(--font-cormorant)] text-4xl font-semibold">
                The service standard clients remember.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-stone-300">
              The strongest praise tends to come back to the same fundamentals:
              premium handling, transparent economics, thoughtful communication, and
              listing presentation that feels worthy of the item.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {trustPoints.map((point) => (
              <article
                key={point.title}
                className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#e6c67c]">
                  {point.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-stone-300">
                  {point.detail}
                </p>
              </article>
            ))}
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
