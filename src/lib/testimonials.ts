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

const env = (globalThis as any).process?.env as
  | Record<string, string | undefined>
  | undefined

const WP_API_URL = env?.WORDPRESS_API_URL
  ? `${env.WORDPRESS_API_URL}/wp-json/wp/v2/testimonial?per_page=100`
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

export async function fetchTestimonials(): Promise<Testimonial[]> {
  if (!WP_API_URL) return []

  try {
    const res = await fetch(WP_API_URL, {
      next: { revalidate: 60 },
    })

    if (!res.ok) return []

    const data = (await res.json()) as WPTestimonial[]

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

console.log('WP_API_URL TESTIMONIAL:', WP_API_URL)