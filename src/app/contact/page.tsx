import type { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";
import { SEO_KEYWORDS, SERVICES, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a General Contracting Estimate in NYC",
  description:
    "Request an estimate from Continental General Contracting for renovations, repairs, apartment turnovers, commercial build-outs, maintenance, and property improvements across NYC and surrounding counties.",
  keywords: SEO_KEYWORDS,
  alternates: { canonical: `${SITE.url}/contact` },
  openGraph: {
    title: "Request an Estimate | Continental General Contracting",
    description:
      "Get a clean, coordinated GC estimate for NYC renovations, repairs, turnovers, build-outs, and property improvement scopes.",
    url: `${SITE.url}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <section className="gradient-hero py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-brand">Request an estimate</p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight md:text-6xl">Tell us what you want built, repaired, or improved.</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">Share the property type, location, rough timeline, and the work you have in mind. Continental GC can help turn it into a clear next step.</p>
          <div className="mt-8 rounded-3xl bg-white p-6 shadow-card">
            <h2 className="font-display text-2xl font-bold">Speak with the team</h2>
            <ul className="mt-5 space-y-4 text-muted">
              <li><span className="block text-xs uppercase tracking-[0.18em] text-brand">Contact</span><span className="font-semibold text-foreground">{SITE.contactName}</span></li>
              <li><span className="block text-xs uppercase tracking-[0.18em] text-brand">Phone</span><a href={SITE.phoneHref} className="font-semibold text-foreground hover:text-brand">{SITE.phone}</a></li>
              <li><span className="block text-xs uppercase tracking-[0.18em] text-brand">Email</span><a href={SITE.emailMailto} className="font-semibold text-foreground hover:text-brand">{SITE.email}</a></li>
              <li><span className="block text-xs uppercase tracking-[0.18em] text-brand">Service Area</span><span className="font-semibold text-foreground">{SITE.serviceArea}</span></li>
            </ul>
          </div>
        </div>
        <div className="rounded-[2rem] border border-brand/10 bg-white p-6 shadow-card md:p-8">
          <form action={SITE.emailMailto} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-foreground" htmlFor="name">Name</label>
              <input id="name" name="name" className="w-full rounded-2xl border border-brand/15 px-4 py-3 outline-none focus:border-brand" placeholder="Your name" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-foreground" htmlFor="phone">Phone</label>
                <input id="phone" name="phone" className="w-full rounded-2xl border border-brand/15 px-4 py-3 outline-none focus:border-brand" placeholder="Best phone number" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-foreground" htmlFor="email">Email</label>
                <input id="email" name="email" type="email" className="w-full rounded-2xl border border-brand/15 px-4 py-3 outline-none focus:border-brand" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-foreground" htmlFor="service">Project type</label>
              <select id="service" name="service" className="w-full rounded-2xl border border-brand/15 px-4 py-3 outline-none focus:border-brand">
                {SERVICES.map((service) => <option key={service.title}>{service.title}</option>)}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-foreground" htmlFor="message">Project details</label>
              <textarea id="message" name="body" rows={7} className="w-full rounded-2xl border border-brand/15 px-4 py-3 outline-none focus:border-brand" placeholder="Property location, project goals, timeline, and any details you already know." />
            </div>
            <div className="flex flex-wrap gap-3">
              <CTAButton href={SITE.emailMailto}>Send Estimate Request</CTAButton>
              <CTAButton href={SITE.phoneHref} variant="outline">Call {SITE.phone}</CTAButton>
            </div>
            <p className="text-xs leading-relaxed text-muted">Note: the button opens your email app so you can review and send the request directly to CGC.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
