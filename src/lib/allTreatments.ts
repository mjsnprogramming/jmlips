export type Treatment = {
  id: number
  slug: string
  title: string
  category: string
  description: string
  details: string
  duration: string
  effect: string
  image: string
  order: number
}

type WPAllTreatment = {
  id: number
  slug: string
  acf: {
    title_pl: string
    title_en: string
    category_pl: string
    category_en: string
    description_pl: string
    description_en: string
    details_pl: string
    details_en: string
    duration_pl: string
    duration_en: string
    effect_pl: string
    effect_en: string
    image: string | number
    order: string
  }
}

const env = (globalThis as any).process?.env as
  | Record<string, string | undefined>
  | undefined

const WP_API_URL = env?.WORDPRESS_API_URL
  ? `${env.WORDPRESS_API_URL}/wp-json/wp/v2/alltreatments?per_page=100`
  : null

async function getImageUrl(image: string | number): Promise<string> {
  if (typeof image === 'string') return image

  if (!env?.WORDPRESS_API_URL) return ''

  const res = await fetch(
    `${env.WORDPRESS_API_URL}/wp-json/wp/v2/media/${image}`,
    {
      next: { revalidate: 60 },
    }
  )

  if (!res.ok) return ''

  const data = await res.json()

  return data.source_url ?? ''
}

export async function fetchTreatments(
  lang: 'pl' | 'en'
): Promise<Treatment[]> {
  if (!WP_API_URL) return []

  try {
    const res = await fetch(WP_API_URL, {
      next: { revalidate: 60 },
    })

    if (!res.ok) return []

    const data = (await res.json()) as WPAllTreatment[]

    const mapped = data.map(async (item) => ({
      id: item.id,
      slug: item.slug,
      title: lang === 'pl' ? item.acf.title_pl : item.acf.title_en,
      category: lang === 'pl'
        ? item.acf.category_pl
        : item.acf.category_en,
      description: lang === 'pl'
        ? item.acf.description_pl
        : item.acf.description_en,
      details: lang === 'pl'
        ? item.acf.details_pl
        : item.acf.details_en,
      duration: lang === 'pl'
        ? item.acf.duration_pl
        : item.acf.duration_en,
      effect: lang === 'pl'
        ? item.acf.effect_pl
        : item.acf.effect_en,
      image: await getImageUrl(item.acf.image),
      order: Number(item.acf.order),
    }))

    const treatments = await Promise.all(mapped)

    return treatments.sort((a, b) => a.order - b.order)
  } catch (error) {
    console.error('Nie udało się pobrać zabiegów:', error)
    return []
  }
}