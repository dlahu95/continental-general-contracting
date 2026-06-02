import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { PROCESS, SERVICES, SITE } from "@/lib/site";

const stats = [
  ["NY", "Built for New York properties"],
  ["6", "Core contracting service lines"],
  ["1", "Accountable project partner"],
  ["Clean", "Modern jobsite standards"],
];

const projectTypes = ["Apartment turnovers", "Common-area upgrades", "Interior renovations", "Retail & office refreshes", "Building repairs", "Owner punch lists"];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden gradient-hero">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/70 to-transparent" />
        <div className="mx-auto grid min-h-[86vh] max-w-7xl items-center gap-12 px-4 py-20 md:px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-brand/15 bg-white/80 px-4 py-2 font-heading text-xs font-semibold uppercase tracking-[0.22em] text-brand shadow-sm">
              Partner brand of Continental • New York
            </p>
            <h1 className="font-display max-w-4xl text-4xl font-bold leading-tight text-foreground md:text-6xl">
              Modern general contracting with a cleaner, sharper project experience.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Continental General Contracting helps property owners, landlords, managers, and commercial clients move from scope to finished space with organized crews, protected jobsites, and clear communication.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton href="/contact">Request an Estimate</CTAButton>
              <CTAButton href={SITE.phoneHref} variant="outline">Call {SITE.phone}</CTAButton>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map(([value, label]) => (
                <div key={label} className="glass-card rounded-2xl p-4">
                  <p className="font-display text-2xl font-bold text-brand">{value}</p>
                  <p className="mt-1 text-xs leading-snug text-muted">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-brand/10 blur-3xl" />
            <div className="relative rounded-[2.5rem] border border-brand/10 bg-white p-6 shadow-card md:p-8">
              <Image src="/cgc-logo.jpg" alt="Continental General Contracting logo" width={1254} height={1254} className="mx-auto h-auto w-full max-w-[520px] rounded-[2rem] object-contain" priority />
              <div className="mt-6 rounded-3xl bg-brand-tint p-5">
                <p className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-brand">Clean work. Clear scopes. Finished right.</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">A partner contractor for renovations, repairs, build-outs, maintenance, and property improvements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-brand">Services</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-5xl">Contracting services built around the way properties actually operate.</h2>
            <p className="mt-5 text-muted">From make-ready turnover work to larger improvement scopes, CGC brings a clean visual standard and practical construction coordination to every project.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <article key={service.title} className="group rounded-3xl border border-brand/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-tint font-display text-lg font-bold text-brand">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="font-display text-xl font-bold text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-charcoal py-18 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-brand">Project types</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">A better look for spaces that need to perform.</h2>
            <p className="mt-5 text-muted leading-relaxed">Continental GC is positioned for the jobs where owners need the work done cleanly, quickly, and with enough care that the finished space feels intentional.</p>
            <CTAButton href="/contact" variant="outline" className="mt-8">Talk Through a Scope</CTAButton>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {projectTypes.map((type) => (
              <div key={type} className="glass-card rounded-3xl p-6">
                <div className="mb-4 h-1.5 w-16 rounded-full bg-brand" />
                <p className="font-heading text-lg font-semibold text-foreground">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mesh-dark overflow-hidden rounded-[2rem] p-8 text-white md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-white/70">Process</p>
                <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">Straightforward from walkthrough to final punch list.</h2>
                <p className="mt-5 text-white/75">The goal is simple: get the scope clear, protect the property, communicate progress, and finish the details.</p>
              </div>
              <ol className="space-y-4">
                {PROCESS.map((step, index) => (
                  <li key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-white/10 p-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-brand">{index + 1}</span>
                    <span className="pt-1 font-heading font-semibold">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-brand">Start the conversation</p>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">Have a renovation, repair list, or property improvement scope?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted">Send the details and CGC will help organize the next step.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CTAButton href="/contact">Request an Estimate</CTAButton>
            <CTAButton href={`mailto:${SITE.email}`} variant="outline">Email the Team</CTAButton>
          </div>
          <p className="mt-8 text-sm text-muted">Proud partner company of <Link href="https://continentalleadabatement.com" className="font-semibold text-brand hover:underline">Continental Lead Abatement</Link>.</p>
        </div>
      </section>
    </>
  );
}
