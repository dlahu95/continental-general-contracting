import { SEO_KEYWORDS, SERVICE_AREAS, SERVICES, SITE } from "@/lib/site";

export const seoKeywords = SEO_KEYWORDS;

const serviceNames = SERVICES.map((service) => service.title);
const areaNames = SERVICE_AREAS.map((area) => `${area.place}, ${area.county}`);

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "GeneralContractor", "HomeAndConstructionBusiness"],
        "@id": `${SITE.url}/#business`,
        name: SITE.name,
        alternateName: SITE.shortName,
        url: SITE.url,
        telephone: SITE.phone,
        email: SITE.email,
        image: `${SITE.url}/cgc-logo.jpg`,
        logo: `${SITE.url}/cgc-logo.jpg`,
        priceRange: "$$",
        founder: {
          "@type": "Person",
          name: SITE.contactName,
        },
        areaServed: SERVICE_AREAS.map((area) => ({
          "@type": "AdministrativeArea",
          name: area.place,
          containedInPlace: area.county,
        })),
        knowsAbout: [...serviceNames, ...seoKeywords],
        makesOffer: SERVICES.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.text,
            areaServed: areaNames,
            serviceType: service.keywords,
            provider: { "@id": `${SITE.url}/#business` },
          },
        })),
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: SITE.phone,
          email: SITE.email,
          areaServed: "US-NY, US-NJ",
          availableLanguage: ["English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        name: SITE.name,
        url: SITE.url,
        publisher: { "@id": `${SITE.url}/#business` },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "ContactAction",
          target: `${SITE.url}/contact`,
          name: "Request a general contracting estimate",
        },
      },
    ],
  };
}

export function buildHomePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE.url}/#homepage`,
    url: SITE.url,
    name: "NYC General Contractor for Renovations, Build-Outs, Repairs & Property Turnovers",
    description: SITE.seoDescription,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: SERVICES.map((service) => service.title),
    primaryImageOfPage: `${SITE.url}/cgc-logo.jpg`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "#services h2", "#service-areas h2"],
    },
  };
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
