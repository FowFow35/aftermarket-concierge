import Link from "next/link";

type SiteHeaderProps = {
  subtitle: string;
  navMode?: "default" | "home";
};

const defaultNavItems = [
  { href: "/#top", label: "Home" },
  { href: "/#plans", label: "Membership Plans" },
  { href: "/terms-payouts", label: "Terms & Payouts" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#arrivals", label: "What’s in This Week" },
];

export function SiteHeader({
  subtitle,
  navMode = "default",
}: SiteHeaderProps) {
  const navItems = defaultNavItems;

  return (
    <header className="flex flex-col gap-4 rounded-[32px] border border-[#b89345]/25 bg-white/65 px-4 py-4 shadow-[0_18px_50px_rgba(28,24,18,0.10)] backdrop-blur-xl sm:px-5 lg:flex-row lg:items-center lg:justify-between lg:rounded-full">
      <div className="min-w-0">
        <p className="truncate font-[family:var(--font-cormorant)] text-[1.65rem] font-semibold uppercase tracking-[0.1em] text-stone-950 sm:text-2xl">
          AfterMarket Concierge
        </p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-stone-600 sm:text-[11px] sm:tracking-[0.28em]">
          {subtitle}
        </p>
      </div>
      <nav
        className="flex w-full gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-start sm:gap-3 sm:pb-0 lg:w-auto lg:justify-end"
        aria-label="Primary"
      >
        {navItems.map((item) => (
          item.href.startsWith("/#") ? (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-stone-900/10 bg-white px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-950 shadow-[0_10px_24px_rgba(31,25,18,0.05)] transition hover:-translate-y-0.5 hover:border-[#c9a14a]/45 hover:bg-[#faf5ea] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a14a]/35 sm:px-5 sm:text-xs sm:tracking-[0.24em]"
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-stone-900/10 bg-white px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-950 shadow-[0_10px_24px_rgba(31,25,18,0.05)] transition hover:-translate-y-0.5 hover:border-[#c9a14a]/45 hover:bg-[#faf5ea] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a14a]/35 sm:px-5 sm:text-xs sm:tracking-[0.24em]"
              scroll={navMode === "home" ? false : undefined}
            >
              {item.label}
            </Link>
          )
        ))}
      </nav>
    </header>
  );
}
