export type AboutData = {
  about_me_image: string
  certificate_1: string
  certificate_2: string
}

type WPAbout = {
  acf: {
    about_me_image: string | number
    certificate_1: string | number
    certificate_2: string | number
  }
}

const env = (globalThis as any).process?.env as
  | Record<string, string | undefined>
  | undefined

const WP_API_URL = env?.WORDPRESS_API_URL
  ? `${env.WORDPRESS_API_URL}/wp-json/wp/v2/about?per_page=1`
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

export async function fetchAboutData(): Promise<AboutData | null> {
  if (!WP_API_URL) return null

  try {
    const res = await fetch(WP_API_URL, {
      next: { revalidate: 60 },
    })

    if (!res.ok) return null

    const data = (await res.json()) as WPAbout[]

    if (!data.length) return null

    const about = data[0]

    return {
      about_me_image: await getImageUrl(about.acf.about_me_image),
      certificate_1: await getImageUrl(about.acf.certificate_1),
      certificate_2: await getImageUrl(about.acf.certificate_2),
    }
  } catch (error) {
    console.error('Nie udało się pobrać sekcji About:', error)
    return null
  }
}