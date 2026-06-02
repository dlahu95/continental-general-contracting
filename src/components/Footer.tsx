import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/site";
import { CTAButton } from "./CTAButton";

export function Footer() {
  return (
    <footer className="border-t border-brand/10 bg-charcoal">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src="/cgc-logo.jpg" alt="Continental General Contracting" width={1254} height={1254} className="mb-5 h-24 w-24 rounded-3xl object-contain bg-white shadow-card" />
            <p className="text-sm leading-relaxed text-muted">Modern, clean general contracting for New York property owners, managers, and commercial spaces.</p>
          </div>
          <div>
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-brand">Navigation</h2>
            <ul className="mt-4 space-y-2">{NAV_LINKS.map((l) => <li key={l.href}><Link href={l.href} className="text-sm text-muted hover:text-brand">{l.label}</Link></li>)}</ul>
          </div>
          <div>
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-brand">Services</h2>
            <ul className="mt-4 space-y-2">{SERVICES.slice(0,5).map((s) => <li key={s.title} className="text-sm text-muted">{s.title}</li>)}</ul>
          </div>
          <div>
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-brand">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>{SITE.serviceArea}</li>
              <li><a href={SITE.emailMailto} className="hover:text-brand">{SITE.email}</a></li>
              <li><a href={SITE.phoneHref} className="hover:text-brand">{SITE.phone}</a></li>
            </ul>
            <CTAButton href="/contact" variant="outline" className="mt-6">Start a Project</CTAButton>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-muted">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
