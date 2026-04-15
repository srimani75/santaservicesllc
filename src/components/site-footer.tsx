import Link from "next/link";
import { CONTACT_EMAIL } from "@/config/site";

const footerNav = {
  Services: [
    { href: "/services", label: "All services" },
    { href: "/services#genai", label: "GenAI / ML" },
    { href: "/services#data", label: "Data" },
    { href: "/services#cloud", label: "Cloud" },
    { href: "/services#security", label: "Security" },
  ],
  Company: [
    { href: "/case-studies", label: "Case studies" },
    { href: "/approach", label: "Approach" },
    { href: "/contact", label: "Contact" },
  ],
};

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-200 bg-ink-950 text-ink-200">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <p className="font-display text-lg font-semibold text-white">
              Santa Services LLC
            </p>
            <p className="mt-2 max-w-md text-sm text-ink-400">
              Professional consulting across cloud, data, AI, and security. Add your
              registered address and regulatory disclosures as needed.
            </p>
            <p className="mt-4 text-sm">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-brand-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
          {Object.entries(footerNav).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                {title}
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-ink-300 transition hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 border-t border-ink-800 pt-8 text-sm text-ink-500">
          © {year} Santa Services LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
