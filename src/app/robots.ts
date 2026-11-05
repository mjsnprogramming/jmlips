import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    // /components/… to header i stopka, które Next udostępnia też jako osobne adresy.
    rules: { userAgent: "*", allow: "/", disallow: ["/components/"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
