import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/site";
import { CTAButton } from "./CTAButton";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand/10 bg-white/92 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label={`${SITE.name} home`}>
          <Image src="/cgc-logo.jpg" alt="Continental General Contracting logo" width={1254} height={1254} className="h-14 w-14 rounded-2xl object-contain shadow-sm md:h-16 md:w-16" priority />
          <div className="hidden leading-tight sm:block">
            <p className="font-display text-base font-bold text-brand md:text-lg">Continental</p>
            <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">General Contracting</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground/80 transition hover:text-brand">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={SITE.phoneHref} className="hidden rounded-full border border-brand/15 px-4 py-2 text-sm font-semibold text-brand transition hover:bg-brand-tint md:inline-flex">
            {SITE.phone}
          </a>
          <CTAButton href="/contact">Request Estimate</CTAButton>
        </div>
      </div>
    </header>
  );
}
