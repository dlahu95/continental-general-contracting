import type { Metadata } from "next";
import { DM_Sans, Outfit, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-source-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Continental General Contracting | Modern Contracting in New York",
    template: "%s | Continental General Contracting",
  },
  description: "Continental General Contracting provides clean, coordinated renovations, build-outs, repairs, turnovers, and property improvements across New York.",
  alternates: { canonical: SITE.url },
  openGraph: {
    title: "Continental General Contracting",
    description: "Clean, coordinated general contracting for New York property owners and managers.",
    url: SITE.url,
    siteName: SITE.name,
    images: [{ url: "/cgc-logo.jpg", width: 1254, height: 1254, alt: "Continental General Contracting logo" }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    areaServed: SITE.serviceArea,
    logo: `${SITE.url}/cgc-logo.jpg`,
  };

  return (
    <html lang="en">
      <body className={`${outfit.variable} ${dmSans.variable} ${sourceSans.variable} font-body antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
