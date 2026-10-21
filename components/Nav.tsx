import Link from "next/link";
import type { SanitySiteSettings } from "@/lib/sanity";

const links = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav({ settings }: { settings: SanitySiteSettings }) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[var(--background)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-extrabold text-[var(--color-primary-dark)]">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary)] text-white">F</span>
          {settings.productName}
        </Link>
        <nav className="hidden gap-8 text-sm font-semibold text-zinc-700 sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[var(--color-primary)]">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#waitlist"
          className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-[var(--color-primary-dark)]"
        >
          {settings.ctaLabel}
        </a>
      </div>
    </header>
  );
}
