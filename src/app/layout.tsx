import type { Metadata } from "next";
import { DM_Sans, Outfit, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO_KEYWORDS, SITE } from "@/lib/site";
import { buildOrganizationJsonLd } from "@/lib/seo";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-source-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Continental General Contracting | NYC Renovations, Repairs & Build-Outs",
    template: "%s | Continental General Contracting",
  },
  description: SITE.seoDescription,
  keywords: SEO_KEYWORDS,
  applicationName: SITE.name,
  authors: [{ name: SITE.contactName }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "General contracting, renovations, commercial build-outs, property maintenance",
  alternates: { canonical: SITE.url },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Continental General Contracting | NYC Renovations, Repairs & Build-Outs",
    description: SITE.seoDescription,
    url: SITE.url,
    siteName: SITE.name,
    images: [{ url: "/cgc-logo.jpg", width: 1254, height: 1254, alt: "Continental General Contracting logo" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Continental General Contracting | NYC General Contractor",
    description: SITE.seoDescription,
    images: ["/cgc-logo.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = buildOrganizationJsonLd();

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
