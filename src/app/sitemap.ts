import type { MetadataRoute } from "next";
import { PAGES, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(PAGES).flatMap((page) =>
    (["pl", "en"] as const)
      .filter((lang) => page[lang])
      .map((lang) => ({
        url: `${SITE_URL}${page[lang]!.path === "/" ? "" : page[lang]!.path}`,
        changeFrequency: "monthly" as const,
        priority: page[lang]!.path === "/" ? 1 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            (["pl", "en"] as const)
              .filter((l) => page[l])
              .map((l) => [l, `${SITE_URL}${page[l]!.path === "/" ? "" : page[l]!.path}`]),
          ),
        },
      })),
  );
}
