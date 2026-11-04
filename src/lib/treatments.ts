export type PopularTreatment = {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  homepage_order: number
}

type WPTreatment = {
  id: number
  acf: {
    title_pl: string
    title_en: string
    subtitle_pl: string
    subtitle_en: string
    description_pl: string
    description_en: string
    image: string | number
    show_on_homepage: boolean
    homepage_order?: number
  }
}

const env = (globalThis as any).process?.env as
  | Record<string, string | undefined>
  | undefined

const WP_API_URL = env?.WORDPRESS_API_URL
  ? `${env.WORDPRESS_API_URL}/wp-json/wp/v2/treatment?per_page=100`
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

export async function fetchPopularTreatments(
  lang: 'pl' | 'en'
): Promise<PopularTreatment[]> {
  if (!WP_API_URL) return []

  try {
    const res = await fetch(WP_API_URL, {
      next: { revalidate: 60 },
    })

    if (!res.ok) return []

    const data = (await res.json()) as WPTreatment[]

    const mapped = await Promise.all(
      data
        .filter((item) => item.acf.show_on_homepage)
        .map(async (item) => ({
          id: item.id,
          title: lang === 'pl' ? item.acf.title_pl : item.acf.title_en,
          subtitle:
            lang === 'pl' ? item.acf.subtitle_pl : item.acf.subtitle_en,
          description:
            lang === 'pl'
              ? item.acf.description_pl
              : item.acf.description_en,
          image: await getImageUrl(item.acf.image),
          homepage_order: item.acf.homepage_order ?? 999,
        }))
    )

    return mapped
      .filter((item) => item.image)
      .sort((a, b) => a.homepage_order - b.homepage_order)
      .slice(0, 3)
  } catch (error) {
    console.error('Nie udało się pobrać popularnych zabiegów:', error)
    return []
  }
}