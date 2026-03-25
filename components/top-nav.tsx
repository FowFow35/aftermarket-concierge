import Link from "next/link";

type TopNavProps = {
  currentPath: "/" | "/results" | "/alerts";
};

const navItems: Array<{ href: TopNavProps["currentPath"]; label: string }> = [
  { href: "/", label: "Deal Scanner" },
  { href: "/results", label: "Deal Results" },
  { href: "/alerts", label: "Saved Alerts" },
];

export function TopNav({ currentPath }: TopNavProps) {
  return (
    <header className="top-nav">
      <Link href="/" className="brand-mark">
        <span className="brand-ring" />
        <div>
          <p className="brand-title">WatchWire</p>
          <p className="brand-subtitle">Luxury watch deal intelligence</p>
        </div>
      </Link>

      <nav className="nav-links" aria-label="Primary">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={item.href === currentPath ? "nav-link active" : "nav-link"}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
