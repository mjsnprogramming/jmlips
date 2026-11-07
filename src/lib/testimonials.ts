import { fetchCollection, WP_BASE_URL } from './cms'

export type Testimonial = {
  id: number
  image: string
  order: number
}

type WPTestimonial = {
  id: number
  acf: {
    image: string | number
    order?: number
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

export async function fetchTestimonials(): Promise<Testimonial[]> {
  try {
    const data = await fetchCollection<WPTestimonial>('testimonial')
    if (!data) return []

    const mapped = await Promise.all(
      data.map(async (item) => ({
        id: item.id,
        image: await getImageUrl(item.acf.image),
        order: item.acf.order ?? 999,
      }))
    )

    return mapped
      .filter((item) => item.image)
      .sort((a, b) => a.order - b.order)
  } catch (error) {
    console.error('Nie udało się pobrać opinii:', error)
    return []
  }
}

