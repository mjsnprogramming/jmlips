import { TREATMENTS } from "@/content/treatments"

export type Treatment = {
  id: number
  slug: string
  title: string
  category: string
  description: string
  details: string
  image: string | null
  image2: string | null
  image3: string | null
  order: number
}

/** Zabiegi na stronie oferty – z src/content/treatments.ts. */
export async function fetchTreatments(lang: "pl" | "en"): Promise<Treatment[]> {
  return TREATMENTS.filter((item) => item.title[lang]).map((item, index) => ({
    id: index + 1,
    slug: item.slug,
    title: item.title[lang],
    category: item.category[lang],
    description: item.description[lang],
    details: item.details[lang],
    image: item.images[0] || null,
    image2: item.images[1] || null,
    image3: item.images[2] || null,
    order: index,
  }))
}
