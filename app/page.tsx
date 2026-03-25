import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

const valueItems = [
  {
    title: "Professional luxury photography",
    detail:
      "Studio-grade imagery built to elevate premium goods and strengthen buyer trust.",
  },
  {
    title: "Authentication research",
    detail:
      "Item details, photography, market knowledge, and trusted third-party expertise when needed.",
  },
  {
    title: "White glove intake",
    detail:
      "Careful receiving, handling, and preparation designed for valuable inventory.",
  },
  {
    title: "Listing creation and presentation",
    detail:
      "Premium copy, positioning, and marketplace-ready presentation handled for you.",
  },
  {
    title: "Transparent payouts",
    detail:
      "A clear payout structure that keeps fees, deductions, and client proceeds easy to understand.",
  },
];

const processSteps = [
  "Submit your item for concierge review",
  "Our team reviews the submission for fit, condition, and resale potential",
  "We contact you directly by text or email with next steps",
  "If approved, we send an invoice for the appropriate membership plan",
  "Once payment is made, we provide intake instructions, shipping details, or a prepaid label if needed",
  "Your item enters intake and concierge handling begins",
  "Photography, listing preparation, buyer communication, and sale execution move forward from there",
];

const membershipPlans = [
  {
    name: "Concierge Basic",
    price: "$49/month",
    detail: "Up to 5 listings",
  },
  {
    name: "Concierge Pro",
    price: "$99/month",
    detail: "Up to 20 listings",
    featured: true,
  },
  {
    name: "Concierge Elite",
    price: "$199/month",
    detail: "Unlimited listings",
  },
];

const paidBenefitGroups = [
  {
    title: "Professional luxury photography",
    detail:
      "Editorial product imagery created to present premium inventory at its best.",
  },
  {
    title: "Authentication research",
    detail:
      "Reviewed using available item details, photography, market knowledge, and trusted third-party expertise when needed.",
    featured: true,
  },
  {
    title: "Listing creation and presentation",
    detail:
      "Refined copywriting and polished listing presentation prepared for live marketplaces.",
  },
  {
    title: "Buyer communication and negotiation",
    detail:
      "Client-facing conversations, offer handling, and buyer follow-through managed for you.",
  },
  {
    title: "Shipping handling",
    detail:
      "Coordinated post-sale shipment and handoff so fulfillment remains seamless.",
  },
  {
    title: "Transparent payouts",
    detail:
      "Marketplace fees and approved deductions are presented clearly before payout is released.",
  },
  {
    title: "White-glove intake",
    detail:
      "Approval, receiving, and item handling structured for premium goods from the outset.",
  },
];

const whiteGloveProcessItems = [
  {
    title: "Authentication Review",
    detail:
      "Each item is reviewed using photography, serial details, seller-provided information, market knowledge, and trusted third-party expertise when needed.",
  },
  {
    title: "Item Cleaning & Preparation",
    detail:
      "Premium goods are prepared carefully so presentation feels polished, intentional, and listing-ready.",
  },
  {
    title: "Professional Photography",
    detail:
      "Professional camera work, luxury backgrounds, and clean visual styling help position each piece properly.",
  },
  {
    title: "Premium Listing Creation",
    detail:
      "Copywriting, positioning, and presentation are crafted for premium resale rather than generic marketplace listings.",
  },
  {
    title: "Buyer Communication & Negotiation",
    detail:
      "Questions, offers, and buyer conversations are handled directly so clients stay out of the back-and-forth.",
  },
  {
    title: "Careful Packaging & Shipping",
    detail:
      "Sold items are packed and shipped with caution, care, and presentation standards suited to valuable inventory.",
  },
  {
    title: "Marketplace Exposure",
    detail:
      "Listings are positioned for broader online visibility rather than relying on a single local resale channel.",
  },
  {
    title: "Trusted Buyer Relationships",
    detail:
      "Strong presentation and consistent handling help build confidence with serious buyers over time.",
  },
];

const recentlySoldItems = [
  {
    itemName: "Datejust",
    brand: "Rolex",
    category: "Watches",
    soldPrice: "$6,200",
    dateSold: "March 2026",
  },
  {
    itemName: "Seamaster",
    brand: "Omega",
    category: "Watches",
    soldPrice: "$3,100",
    dateSold: "March 2026",
  },
  {
    itemName: "Neverfull",
    brand: "Louis Vuitton",
    category: "Designer Bags",
    soldPrice: "$1,450",
    dateSold: "February 2026",
  },
  {
    itemName: "Jordan 1 Chicago",
    brand: "Jordan",
    category: "Sneakers",
    soldPrice: "$850",
    dateSold: "February 2026",
  },
  {
    itemName: "Putter",
    brand: "Scotty Cameron",
    category: "Golf Equipment",
    soldPrice: "$720",
    dateSold: "February 2026",
  },
  {
    itemName: "Saint Louis Tote",
    brand: "Goyard",
    category: "Designer Bags",
    soldPrice: "$1,600",
    dateSold: "January 2026",
  },
];

const arrivedThisWeekItems = [
  {
    itemName: "Rolex Daytona",
    category: "Watches",
    description:
      "Chronograph sports model received for concierge review and presentation planning.",
    status: "In Review",
  },
  {
    itemName: "Omega Seamaster",
    category: "Watches",
    description:
      "Fresh intake awaiting photography preparation and pricing research.",
    status: "Preparing for Photography",
  },
  {
    itemName: "Louis Vuitton Neverfull",
    category: "Designer Bags",
    description:
      "Premium tote intake moving through authentication review and listing preparation.",
    status: "Ready for Listing",
  },
  {
    itemName: "Scotty Cameron Putter",
    category: "Golf Equipment",
    description:
      "Collector-grade putter received with accessories and premium presentation notes.",
    status: "Recently Listed",
  },
  {
    itemName: "Jordan 1 Chicago",
    category: "Sneakers",
    description:
      "High-demand pair moving through imaging and condition review before launch.",
    status: "Preparing for Photography",
  },
  {
    itemName: "Cartier Tank",
    category: "Watches",
    description:
      "Classic luxury watch intake being reviewed for fit, positioning, and next steps.",
    status: "In Review",
  },
];

const featuredCategories = [
  {
    title: "Watches",
    description:
      "Luxury timepieces, sports models, vintage Swiss pieces, and collector references.",
    examples: ["Rolex", "Omega", "Tudor", "Cartier"],
  },
  {
    title: "Designer Bags",
    description:
      "High-demand bags and premium leather goods with strong resale interest.",
    examples: ["Louis Vuitton", "Goyard", "Chanel", "Gucci"],
  },
  {
    title: "Sneakers",
    description:
      "Coveted pairs, deadstock releases, collaborations, and collectible footwear.",
    examples: ["Jordan 1", "Nike SB", "Yeezy", "Travis Scott"],
  },
  {
    title: "Golf Equipment",
    description:
      "Premium clubs, putters, limited editions, and collector-grade gear.",
    examples: ["Scotty Cameron", "Titleist", "TaylorMade", "Ping"],
  },
  {
    title: "Collectibles",
    description:
      "Rare, niche, and enthusiast-driven items with clear secondary market appeal.",
    examples: [
      "sports memorabilia",
      "toys",
      "trading cards",
      "rare accessories",
    ],
  },
  {
    title: "Electronics",
    description:
      "Select premium electronics and desirable tech products with healthy resale demand.",
    examples: ["cameras", "audio gear", "gaming systems", "specialty devices"],
  },
  {
    title: "Vintage Pieces",
    description:
      "Interesting and valuable vintage goods with strong presentation and resale potential.",
    examples: ["vintage watches", "decor", "fashion", "accessories"],
  },
  {
    title: "Luxury Accessories",
    description:
      "Premium smaller-format goods that benefit from polished presentation and trusted handling.",
    examples: ["wallets", "belts", "sunglasses", "jewelry"],
  },
];

const comparisonRows = [
  {
    label: "Fee Structure",
    traditional: "Often built around a percentage of the final sale price.",
    concierge:
      "No consignment commission. Clients pay a flat monthly membership for service access.",
  },
  {
    label: "Presentation",
    traditional:
      "Listing quality and merchandising can vary significantly by shop or staff availability.",
    concierge:
      "Professional photography and premium listing presentation are handled as part of the concierge process.",
  },
  {
    label: "Authentication Research",
    traditional:
      "Authentication review may be limited or inconsistently communicated depending on the consignment environment.",
    concierge:
      "Authentication research is built into the process using item details, photography, market knowledge, and trusted third-party expertise when needed.",
  },
  {
    label: "Exposure",
    traditional:
      "Sales may depend heavily on a single local storefront or limited in-person traffic.",
    concierge:
      "Modern marketplace exposure broadens visibility across active online buyers.",
  },
  {
    label: "Payout Clarity",
    traditional:
      "Seller expectations can feel unclear when commissions, timing, and deductions are not presented cleanly.",
    concierge:
      "Transparent payout structure helps clients understand marketplace fees and any approved deductions upfront.",
  },
  {
    label: "Intake Experience",
    traditional:
      "Drop-off and intake can feel transactional rather than tailored to premium inventory.",
    concierge:
      "A white-glove process guides the item from approval and intake through shipment and sale completion.",
  },
  {
    label: "Specialization",
    traditional:
      "General consignment environments may not always be designed for luxury-minded clients or premium goods.",
    concierge:
      "Built specifically for premium inventory, trusted handling, and clients who expect a refined resale experience.",
  },
];

const faqs = [
  {
    question: "Do you take a commission?",
    answer:
      "No consignment commission. Clients keep the marketplace payout after platform fees and any applicable inbound label cost.",
  },
  {
    question: "Who pays for shipping to send the item in?",
    answer:
      "Clients may ship on their own, or we can provide a prepaid inbound label. If we provide that label, the label cost may be deducted from the final payout.",
  },
  {
    question: "What if I do not have a box or packing supplies?",
    answer:
      "We can arrange a premium shipping kit so your item arrives properly protected and presentation-ready.",
  },
  {
    question: "What kinds of items do you accept?",
    answer:
      "We focus on premium resale categories including luxury fashion, accessories, watches, jewelry, and other high-value items that benefit from professional presentation.",
  },
];

export default function HomePage() {
  return (
    <main
      id="top"
      className="min-h-screen bg-[linear-gradient(180deg,rgba(250,247,241,0.96)_0%,rgba(242,237,228,0.94)_48%,rgba(255,252,247,0.98)_100%)] text-stone-950"
    >
      <section className="section-anchor section-breathing relative overflow-hidden">
        <div className="absolute inset-0 luxury-marble opacity-90" />
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(201,161,74,0.18),transparent_65%)]" />
        <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(19,19,18,0.1),transparent_68%)] blur-3xl" />
        <div className="absolute right-[-7rem] top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(201,161,74,0.15),transparent_66%)] blur-3xl" />

        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-8 sm:px-8 lg:px-12">
          <SiteHeader subtitle="White Glove Luxury Resale" navMode="home" />

          <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-[#9b7630]">
                Luxury Resale Concierge Membership
              </p>
              <h1 className="max-w-4xl font-[family:var(--font-cormorant)] text-4xl font-semibold leading-[0.94] text-stone-950 sm:text-6xl lg:text-8xl">
                Luxury resale without lifting a finger.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-stone-700 sm:text-lg">
                AfterMarket Concierge handles the full resale process with discretion
                and precision: professional photography, authentication research,
                premium listing presentation, buyer negotiation, and shipping once sold.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/apply"
                  className="hero-cta-primary inline-flex min-h-[56px] w-full items-center justify-center rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] sm:w-auto"
                >
                  Start Concierge Intake
                </Link>
                <a
                  href="#plans"
                  className="hero-cta-secondary inline-flex min-h-[56px] w-full items-center justify-center rounded-full border px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] sm:w-auto"
                >
                  View Membership Plans
                </a>
              </div>
              <div className="mt-7 rounded-[28px] border border-[#c9a14a]/20 bg-white/65 p-5 shadow-[0_18px_42px_rgba(34,28,20,0.06)] backdrop-blur">
                <p className="text-sm uppercase tracking-[0.24em] text-[#8b6a2d]">
                  Private Concierge Review
                </p>
                <p className="mt-3 max-w-2xl text-base leading-8 text-stone-700">
                  Submit your item for a private concierge review. We&apos;ll review
                  fit, value range, and next steps within 24 hours before any
                  membership invoice or intake begins.
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {[
                    "No obligation",
                    "Response within 24 hours",
                    "Premium categories only",
                    "White-glove guidance",
                  ].map((benefit) => (
                    <span
                      key={benefit}
                      className="rounded-full border border-[#c9a14a]/20 bg-[#fbf7ef] px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-stone-700"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {[
                  [
                    "Authentication review",
                    "Research-driven review using item details, photography, and market knowledge",
                  ],
                  [
                    "Luxury presentation",
                    "Professional photography and premium listing creation",
                  ],
                  [
                    "Transparent structure",
                    "White-glove intake and clear client payout expectations",
                  ],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-[28px] border border-white/70 bg-white/55 p-5 shadow-[0_18px_42px_rgba(34,28,20,0.08)] backdrop-blur"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9b7630]">
                      {title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-stone-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-6 top-12 hidden h-24 w-24 rounded-full border border-[#c9a14a]/30 lg:block" />
              <div className="absolute -left-6 bottom-10 hidden h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(201,161,74,0.18),transparent_70%)] blur-2xl lg:block" />
              <div className="luxury-panel rounded-[36px] border border-[#b89345]/20 p-7 shadow-[0_28px_80px_rgba(15,15,15,0.24)] sm:p-9">
                <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,12,12,0.78),rgba(28,25,22,0.95))] p-7 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#e6c67c]">
                    Included In Membership
                  </p>
                  <h2 className="mt-4 max-w-md font-[family:var(--font-cormorant)] text-4xl font-semibold leading-tight">
                    The high-value services clients are paying for.
                  </h2>
                  <div className="mt-8 grid gap-4">
                    {paidBenefitGroups.map((item) => (
                      <div
                        key={item.title}
                        className={`rounded-[24px] border p-4 ${
                          item.featured
                            ? "border-[#d7b46a]/20 bg-[linear-gradient(180deg,rgba(247,240,223,0.12),rgba(255,255,255,0.04))]"
                            : "border-white/8 bg-white/5"
                        }`}
                      >
                        <div className="flex gap-4">
                          <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#d7b46a] shadow-[0_0_18px_rgba(215,180,106,0.75)]" />
                          <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f3e2b4]">
                              {item.title}
                            </p>
                            <p className="mt-2 text-sm leading-7 text-stone-200">
                              {item.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 rounded-[24px] border border-[#d7b46a]/20 bg-[#f7f0df] p-5 text-stone-900">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8b6a2d]">
                      Authentication Research
                    </p>
                    <p className="mt-3 text-sm leading-7 text-stone-700">
                      Included as part of the concierge service: items are reviewed
                      using available item details, photography, market knowledge, and
                      trusted third-party expertise when needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-anchor section-breathing mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#9b7630]">
              The White-Glove Resale Process
            </p>
            <h2 className="mt-4 font-[family:var(--font-cormorant)] text-4xl font-semibold leading-tight text-stone-950 sm:text-5xl">
              The White-Glove Resale Process
            </h2>
            <div className="section-divider" />
            <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
              The service is designed to feel like a true luxury resale concierge
              from review through final shipment, with presentation, handling, and
              buyer communication managed to a premium standard.
            </p>
          </div>
          <div className="rounded-full border border-[#b89345]/25 bg-[#f7f0df] px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#8b6a2d]">
            Premium paid benefits
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {whiteGloveProcessItems.map((item, index) => (
            <article
              key={item.title}
              className="group rounded-[32px] border border-stone-200/80 bg-white/85 p-6 shadow-[0_24px_60px_rgba(31,25,18,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_72px_rgba(31,25,18,0.12)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#c9a14a]/30 bg-[linear-gradient(180deg,#f8efdc,#f3e0b3)] font-[family:var(--font-cormorant)] text-2xl font-semibold text-[#8b6a2d] shadow-[0_14px_26px_rgba(201,161,74,0.18)]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="h-px flex-1 self-center bg-[linear-gradient(90deg,rgba(201,161,74,0.45),rgba(201,161,74,0.04))]" />
              </div>
              <h3 className="mt-7 font-[family:var(--font-cormorant)] text-3xl font-semibold text-stone-950">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-stone-700">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-anchor section-breathing mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#9b7630]">
              Value Proposition
            </p>
            <h2 className="font-[family:var(--font-cormorant)] text-4xl font-semibold leading-tight text-stone-950 sm:text-5xl">
              A private-client approach to premium resale.
            </h2>
            <div className="section-divider" />
            <p className="max-w-xl text-base leading-8 text-stone-700">
              Every detail is designed to protect presentation, preserve time, and
              keep payouts transparent from approval through sale.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {valueItems.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-stone-200/80 bg-white/80 p-6 shadow-[0_20px_45px_rgba(23,20,15,0.06)] backdrop-blur"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#c9a14a]/35 bg-[#f6edd8] font-[family:var(--font-cormorant)] text-xl font-semibold text-[#8b6a2d]">
                  AM
                </span>
                <p className="mt-5 font-[family:var(--font-cormorant)] text-2xl font-semibold text-stone-950">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-stone-700">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="reviews"
        className="section-anchor mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#9b7630]">
              Recently Sold
            </p>
            <h2 className="mt-4 font-[family:var(--font-cormorant)] text-4xl font-semibold leading-tight text-stone-950 sm:text-5xl">
              Recently Sold
            </h2>
            <div className="section-divider" />
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-700">
              A curated look at premium pieces successfully placed through our
              concierge process.
            </p>
          </div>
          <div className="rounded-full border border-[#b89345]/25 bg-[#f7f0df] px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#8b6a2d]">
            Trusted luxury placements
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {recentlySoldItems.map((item, index) => (
            <article
              key={`${item.brand}-${item.itemName}`}
              className="luxury-card overflow-hidden rounded-[32px] border border-stone-200/80 bg-white/85 backdrop-blur"
            >
              <div className="relative h-64 overflow-hidden border-b border-stone-200/70 bg-[linear-gradient(135deg,rgba(18,18,18,0.96),rgba(36,31,24,0.92))]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,180,106,0.28),transparent_48%)]" />
                <div className="absolute left-6 top-6 rounded-full border border-[#d7b46a]/25 bg-white/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f3e2b4] backdrop-blur">
                  {item.category}
                </div>
                <div className="absolute inset-x-6 bottom-6 rounded-[24px] border border-white/10 bg-white/[0.06] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e6c67c]">
                    Concierge Placement
                  </p>
                  <p className="mt-3 font-[family:var(--font-cormorant)] text-3xl font-semibold text-white">
                    {item.brand}
                  </p>
                  <p className="mt-1 text-sm leading-7 text-stone-300">
                    Archive #{String(index + 1).padStart(2, "0")}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9b7630]">
                  {item.brand}
                </p>
                <h3 className="mt-3 font-[family:var(--font-cormorant)] text-3xl font-semibold text-stone-950">
                  {item.itemName}
                </h3>
                <div className="mt-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                      Sold Price
                    </p>
                    <p className="mt-2 font-[family:var(--font-cormorant)] text-4xl font-semibold text-stone-950">
                      {item.soldPrice}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                      Date Sold
                    </p>
                    <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-stone-700">
                      {item.dateSold}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="arrivals"
        className="section-anchor section-breathing mx-auto max-w-7xl px-6 sm:px-8 lg:px-12"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#9b7630]">
              What Arrived This Week
            </p>
            <h2 className="mt-4 font-[family:var(--font-cormorant)] text-4xl font-semibold leading-tight text-stone-950 sm:text-5xl">
              What Arrived This Week
            </h2>
            <div className="section-divider" />
            <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
              A private look at recent premium inventory moving through the concierge
              process.
            </p>
          </div>
          <div className="rounded-full border border-[#b89345]/25 bg-[#f7f0df] px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#8b6a2d]">
            Behind the scenes
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {arrivedThisWeekItems.map((item, index) => (
            <article
              key={item.itemName}
              className="luxury-card overflow-hidden rounded-[32px] border border-stone-200/80 bg-white/85 backdrop-blur"
            >
              <div className="relative h-56 overflow-hidden border-b border-stone-200/70 bg-[linear-gradient(135deg,rgba(18,18,18,0.96),rgba(36,31,24,0.92))]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(215,180,106,0.28),transparent_48%)]" />
                <div className="absolute left-6 top-6 rounded-full border border-[#d7b46a]/25 bg-white/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f3e2b4] backdrop-blur">
                  {item.category}
                </div>
                <div className="absolute inset-x-6 bottom-6 rounded-[24px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e6c67c]">
                    Intake Log #{String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 font-[family:var(--font-cormorant)] text-3xl font-semibold text-white">
                    {item.itemName}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9b7630]">
                    {item.category}
                  </p>
                  <span className="rounded-full border border-[#c9a14a]/20 bg-[#fbf7ef] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8b6a2d]">
                    {item.status}
                  </span>
                </div>
                <p className="mt-4 text-base leading-8 text-stone-700">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-anchor section-breathing mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#9b7630]">
              Featured Categories We Handle
            </p>
            <h2 className="mt-4 font-[family:var(--font-cormorant)] text-4xl font-semibold leading-tight text-stone-950 sm:text-5xl">
              Featured Categories We Handle
            </h2>
            <div className="section-divider" />
            <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
              From fine watches to designer pieces and sought-after collectibles, our
              concierge process is built for premium inventory.
            </p>
          </div>
          <div className="rounded-full border border-[#b89345]/25 bg-[#f7f0df] px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#8b6a2d]">
            Curated premium categories
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredCategories.map((category, index) => (
            <article
              key={category.title}
              className="luxury-card group overflow-hidden rounded-[32px] border border-stone-200/80 bg-white/85 p-6 backdrop-blur"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#c9a14a]/30 bg-[linear-gradient(180deg,#f8efdc,#f3e0b3)] font-[family:var(--font-cormorant)] text-2xl font-semibold text-[#8b6a2d] shadow-[0_14px_26px_rgba(201,161,74,0.18)]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="h-px flex-1 self-center bg-[linear-gradient(90deg,rgba(201,161,74,0.45),rgba(201,161,74,0.04))]" />
              </div>

              <h3 className="mt-7 font-[family:var(--font-cormorant)] text-3xl font-semibold text-stone-950">
                {category.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-stone-700">
                {category.description}
              </p>

              <div className="mt-7 rounded-[24px] border border-stone-200/80 bg-[#fbf7ef] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9b7630]">
                  Example Items
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {category.examples.map((example) => (
                    <span
                      key={example}
                      className="rounded-full border border-[#c9a14a]/20 bg-white/80 px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-stone-700"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-anchor section-breathing mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#9b7630]">
              Why Clients Choose Us Over Traditional Consignment
            </p>
            <h2 className="mt-4 font-[family:var(--font-cormorant)] text-4xl font-semibold leading-tight text-stone-950 sm:text-5xl">
              Why Clients Choose Us Over Traditional Consignment
            </h2>
            <div className="section-divider" />
            <p className="mt-5 max-w-3xl text-base leading-8 text-stone-700">
              A more refined resale experience for premium inventory.
            </p>
          </div>
          <div className="rounded-full border border-[#b89345]/25 bg-[#f7f0df] px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#8b6a2d]">
            Modern luxury resale
          </div>
        </div>

        <div className="mt-12 rounded-[38px] border border-[#b89345]/18 bg-[linear-gradient(180deg,rgba(12,12,12,0.84),rgba(28,25,22,0.96))] p-6 text-white shadow-[0_28px_80px_rgba(15,15,15,0.24)] sm:p-8">
          <div className="grid gap-6 border-b border-white/10 pb-8 lg:grid-cols-[0.35fr_0.325fr_0.325fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#e6c67c]">
                Comparison
              </p>
              <h3 className="mt-4 font-[family:var(--font-cormorant)] text-4xl font-semibold">
                A concierge model built for premium resale.
              </h3>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-stone-400">
                Traditional Consignment
              </p>
              <p className="mt-3 text-sm leading-7 text-stone-300">
                Familiar, but often tied to percentage-based economics and more
                limited presentation or exposure.
              </p>
            </div>
            <div className="rounded-[28px] border border-[#d7b46a]/20 bg-[linear-gradient(180deg,rgba(247,240,223,0.12),rgba(255,255,255,0.04))] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#e6c67c]">
                AfterMarket Concierge
              </p>
              <p className="mt-3 text-sm leading-7 text-stone-200">
                A modern, white-glove alternative designed around transparency,
                presentation, and premium inventory.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5">
            {comparisonRows.map((row) => (
              <article
                key={row.label}
                className="grid gap-4 rounded-[30px] border border-white/10 bg-white/[0.03] p-5 lg:grid-cols-[0.35fr_0.325fr_0.325fr] lg:p-6"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e6c67c]">
                    {row.label}
                  </p>
                  <div className="mt-4 h-px w-20 bg-[linear-gradient(90deg,#d7b46a,rgba(215,180,106,0.08))]" />
                </div>
                <div className="rounded-[24px] border border-white/8 bg-black/20 p-5">
                  <p className="text-base leading-8 text-stone-300">
                    {row.traditional}
                  </p>
                </div>
                <div className="rounded-[24px] border border-[#d7b46a]/18 bg-[linear-gradient(180deg,rgba(247,240,223,0.12),rgba(255,255,255,0.04))] p-5">
                  <p className="text-base leading-8 text-white/90">
                    {row.concierge}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-anchor bg-[#111111] px-6 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8b66a]">
              How It Works
            </p>
            <h2 className="mt-4 font-[family:var(--font-cormorant)] text-4xl font-semibold leading-tight sm:text-5xl">
              Review first, approval next, intake only after membership is in place.
            </h2>
            <div className="section-divider" />
            <p className="mt-6 max-w-2xl text-base leading-8 text-stone-300">
              Every submission begins with review. If the item is approved, we
              contact the client directly, send the appropriate membership invoice,
              and begin intake only after approval and payment are complete.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <article
                key={step}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.24)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d8b66a]">
                  Step {index + 1}
                </p>
                <p className="mt-4 text-lg leading-8 text-stone-200">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="plans"
        className="section-anchor section-breathing mx-auto max-w-7xl px-6 sm:px-8 lg:px-12"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#9b7630]">
              Membership Pricing
            </p>
            <h2 className="mt-4 font-[family:var(--font-cormorant)] text-4xl font-semibold text-stone-950 sm:text-5xl">
              Membership plans for hands-off luxury resale.
            </h2>
            <div className="section-divider" />
          </div>
          <p className="rounded-full border border-[#b89345]/30 bg-[#f7f0df] px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#8b6a2d]">
            No consignment commission.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {membershipPlans.map((plan) => (
            <article
              key={plan.name}
              className={`luxury-card group rounded-[32px] border p-8 transition duration-300 hover:bg-[#111111] hover:text-white ${
                plan.featured
                  ? "border-[#b89345]/40 bg-[#111111] text-white"
                  : "border-stone-200/80 bg-white/85 text-stone-950"
              }`}
            >
              <p
                className={`text-xs font-semibold uppercase tracking-[0.32em] transition ${
                  plan.featured
                    ? "text-[#e5c57c]"
                    : "text-[#9b7630] group-hover:text-[#e5c57c]"
                }`}
              >
                {plan.name}
              </p>
              <p className="mt-6 font-[family:var(--font-cormorant)] text-5xl font-semibold">
                {plan.price}
              </p>
              <p
                className={`mt-4 text-base leading-8 ${
                  plan.featured
                    ? "text-stone-300"
                    : "text-stone-700 group-hover:text-stone-200"
                }`}
              >
                {plan.detail}
              </p>
              <div
                className={`mt-8 rounded-[22px] border p-5 ${
                  plan.featured
                    ? "border-white/10 bg-white/[0.04] text-white"
                    : "border-[#b89345]/20 bg-[#fbf7ef] text-stone-950 group-hover:border-white/10 group-hover:bg-white/[0.04] group-hover:text-white"
                }`}
              >
                <p
                  className={`text-sm uppercase tracking-[0.24em] ${
                    plan.featured
                      ? "text-[#e5c57c]"
                      : "text-[#8b6a2d] group-hover:text-[#e5c57c]"
                  }`}
                >
                  Included
                </p>
                <p
                  className={`mt-3 text-sm leading-7 ${
                    plan.featured
                      ? "text-stone-300"
                      : "text-stone-700 group-hover:text-stone-200"
                  }`}
                >
                  Luxury photography, authentication research, listing presentation,
                  buyer communication, shipping handling, and transparent payouts.
                </p>
              </div>

              {plan.featured ? (
                <p className="mt-6 text-sm font-medium leading-7 text-white/90">
                  No consignment commission.
                </p>
              ) : (
                <p className="mt-6 text-sm font-medium leading-7 text-stone-700 transition group-hover:text-white">
                  No consignment commission.
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section-anchor bg-[#111111] px-6 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8b66a]">
              Transparent Payouts
            </p>
            <h2 className="mt-4 font-[family:var(--font-cormorant)] text-4xl font-semibold sm:text-5xl">
              Premium service, fully transparent economics.
            </h2>
            <div className="section-divider" />
            <p className="mt-6 max-w-xl text-base leading-8 text-stone-300">
              When an item sells, the marketplace deducts its standard fee first. If
              we issued a prepaid inbound shipping label, that label cost may also be
              deducted. The remaining payout goes directly to the client.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "eBay deducts its standard marketplace fee",
                "If an inbound shipping label was provided, that cost may be deducted",
                "The remaining payout goes to the client",
              ].map((line, index) => (
                <div key={line} className="flex items-start gap-4">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d8b66a]/40 text-sm text-[#e6c67c]">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-base leading-7 text-stone-200">{line}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-[#d8b66a]/20 bg-[linear-gradient(180deg,rgba(251,247,239,0.96),rgba(243,233,211,0.96))] p-8 text-stone-950 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#8b6a2d]">
              Example Payout Breakdown
            </p>
            <div className="mt-8 space-y-4">
              {[
                ["Sale price", "$2,500"],
                ["eBay marketplace fee", "-$325"],
                ["Prepaid inbound label", "-$35"],
                ["Client payout", "$2,140"],
              ].map(([label, amount], index) => (
                <div
                  key={label}
                  className={`flex items-center justify-between rounded-[22px] px-5 py-4 ${
                    index === 3 ? "bg-stone-950 text-[#f3e2b4]" : "bg-white/70"
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
              No consignment commission is taken by AfterMarket Concierge. Marketplace
              fees from platforms like eBay still apply.
            </p>
          </div>
        </div>
      </section>

      <section className="section-anchor mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#9b7630]">
              FAQ
            </p>
            <h2 className="mt-4 font-[family:var(--font-cormorant)] text-4xl font-semibold text-stone-950 sm:text-5xl">
              Clear answers, handled with discretion.
            </h2>
            <div className="section-divider" />
          </div>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[28px] border border-stone-200/80 bg-white/85 p-6 shadow-[0_16px_40px_rgba(30,24,18,0.06)]"
              >
                <h3 className="font-[family:var(--font-cormorant)] text-2xl font-semibold text-stone-950">
                  {faq.question}
                </h3>
                <p className="mt-3 text-base leading-8 text-stone-700">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="intake" className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">
        <div className="rounded-[38px] border border-[#b89345]/25 bg-[linear-gradient(135deg,#161616_0%,#221d15_52%,#111111_100%)] px-8 py-10 text-white shadow-[0_28px_70px_rgba(16,16,16,0.22)] sm:px-10 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#e6c67c]">
            Begin Your Intake
          </p>
          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-[family:var(--font-cormorant)] text-4xl font-semibold sm:text-5xl">
                Submit your item for a private concierge review and let the process
                move quietly from there.
              </h2>
              <p className="mt-4 text-base leading-8 text-stone-300">
                We&apos;ll review fit, value range, and next steps within 24 hours. If
                approved, we&apos;ll contact you directly with membership details,
                invoice guidance, and intake instructions before anything moves
                forward.
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {[
                  "No obligation",
                  "Response within 24 hours",
                  "Premium categories only",
                  "White-glove guidance",
                ].map((benefit) => (
                  <span
                    key={benefit}
                    className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-stone-200"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/apply"
              className="inline-flex min-h-[56px] w-full items-center justify-center rounded-full bg-[#f3e2b4] px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-stone-950 transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(243,226,180,0.14)] sm:w-auto"
            >
              Start Concierge Intake
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200/80 bg-white/70 px-6 py-10 backdrop-blur sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-[family:var(--font-cormorant)] text-2xl font-semibold text-stone-950">
              AfterMarket Concierge
            </p>
            <p className="mt-1 text-sm uppercase tracking-[0.22em] text-stone-500">
              Luxury resale concierge membership
            </p>
          </div>
          <div className="flex max-w-xl flex-col gap-2 text-sm leading-7 text-stone-600 sm:items-end">
            <Link href="/reviews" className="font-medium text-stone-900">
              Client Reviews
            </Link>
            <Link href="/terms-payouts" className="font-medium text-stone-900">
              Terms &amp; Payouts
            </Link>
            <p>
              No consignment commission. Marketplace fees from platforms like eBay
              still apply.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
