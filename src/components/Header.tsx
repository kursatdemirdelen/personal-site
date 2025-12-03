"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/hobbies", label: "Hobbies" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[--color-background]/90 backdrop-blur border-b border-[--color-border]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight hover:text-[--color-accent] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-accent] rounded-[--radius-sm] px-[--space-2]"
        >
          KD
        </Link>
        <div className="flex gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={
                pathname === link.href
                  ? "text-[--color-accent]"
                  : "hover:text-[--color-accent] transition-colors"
              }
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
