import Link from "next/link";
import { NavLink } from "@/components/nav-link";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/approach", label: "Approach" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-ink-950"
        >
          Santa Services LLC
        </Link>
        <div className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-4 sm:gap-6">
          <nav aria-label="Primary">
            <ul className="flex flex-wrap items-center justify-end gap-x-5 gap-y-1 text-sm font-medium sm:gap-x-8">
              {nav.map((item) => (
                <li key={item.href}>
                  <NavLink href={item.href}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
}
