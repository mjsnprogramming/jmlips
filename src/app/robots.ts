import type { MetadataRoute } from "next";
import { SITE_URL, SITE_URL_CONFIGURED } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  // Wersja testowa (bez NEXT_PUBLIC_SITE_URL): roboty mają nie indeksować strony.
  if (!SITE_URL_CONFIGURED) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    // /components/… to header i stopka, które Next udostępnia też jako osobne adresy.
    rules: { userAgent: "*", allow: "/", disallow: ["/components/"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
