"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function NavLink({ href, children, className = "" }: Props) {
  const pathname = usePathname();
  const active =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${
        active
          ? "font-semibold text-brand-800"
          : "text-ink-600 hover:text-brand-700"
      } ${className}`}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
