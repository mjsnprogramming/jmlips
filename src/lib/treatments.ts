import { FEATURED } from '@/content/featured'

export type PopularTreatment = {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  homepage_order: number
}

/** Polecane zabiegi na stronie głównej – z src/content/featured.ts. */
export async function fetchPopularTreatments(lang: 'pl' | 'en'): Promise<PopularTreatment[]> {
  return FEATURED.filter((item) => item.image)
    .slice(0, 3)
    .map((item, index) => ({
      id: index + 1,
      title: item.title[lang],
      subtitle: item.subtitle[lang],
      description: item.description[lang],
      image: item.image,
      homepage_order: index,
    }))
}
