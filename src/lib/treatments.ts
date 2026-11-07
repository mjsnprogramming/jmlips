import { fetchCollection, WP_BASE_URL } from './cms'

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


async function getImageUrl(image: string | number): Promise<string> {
  if (typeof image === 'string') return image

  if (!WP_BASE_URL) return ''

  const res = await fetch(
    `${WP_BASE_URL}/wp-json/wp/v2/media/${image}`,
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
  try {
    const data = await fetchCollection<WPTreatment>('treatment')
    if (!data) return []

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