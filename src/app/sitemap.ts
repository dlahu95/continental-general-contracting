import { SITE } from "@/lib/site";

export default function sitemap() {
  return [
    { url: SITE.url, lastModified: new Date() },
    { url: `${SITE.url}/contact`, lastModified: new Date() },
  ];
}
