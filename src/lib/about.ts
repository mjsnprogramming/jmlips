export type AboutData = {
  about_me_image: string
  certificate_1: string
  certificate_2: string
  certificates: string[]
}

type WPAbout = {
  acf?: {
    about_me_image?: string | number | null
    certificate_1?: string | number | null
    certificate_2?: string | number | null
  }
}

type WPCertificate = {
  acf?: {
    zdjecie?: string | number | null
  }
}

const env = (globalThis as any).process?.env as
  | Record<string, string | undefined>
  | undefined

const WP_BASE_URL = env?.WORDPRESS_API_URL?.trim().replace(/\/+$/, "")

/** Adres zdjęcia z WordPressa (URL albo ID z biblioteki mediów); błąd = "". */
async function getImageUrl(image: string | number | null | undefined): Promise<string> {
  if (typeof image === "string") return image.trim()
  if (typeof image !== "number" || !WP_BASE_URL) return ""

  try {
    const res = await fetch(`${WP_BASE_URL}/wp-json/wp/v2/media/${image}`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return ""
    const data = (await res.json()) as { source_url?: string | null }
    return data.source_url?.trim() ?? ""
  } catch {
    return ""
  }
}

async function getCertificates(): Promise<string[]> {
  if (!WP_BASE_URL) return []

  try {
    const res = await fetch(
      `${WP_BASE_URL}/wp-json/wp/v2/certyfikat?per_page=100&orderby=id&order=asc`,
      { next: { revalidate: 60 } },
    )
    if (!res.ok) return []

    const data = (await res.json()) as WPCertificate[]
    if (!Array.isArray(data)) return []

    const urls = await Promise.all(data.map((item) => getImageUrl(item.acf?.zdjecie)))
    return urls.filter(Boolean)
  } catch (error) {
    console.error("Nie udało się pobrać certyfikatów:", error)
    return []
  }
}

/**
 * Dane strony "O mnie" z WordPressa. Każdy błąd daje null / puste pola,
 * a komponenty pokazują wtedy zdjęcia zapasowe – strona nigdy się nie wywraca.
 */
export async function fetchAboutData(): Promise<AboutData | null> {
  if (!WP_BASE_URL) return null

  try {
    const [res, certificates] = await Promise.all([
      fetch(`${WP_BASE_URL}/wp-json/wp/v2/about?per_page=1`, {
        next: { revalidate: 60 },
      }),
      getCertificates(),
    ])

    const data = res.ok ? ((await res.json()) as WPAbout[]) : []
    const about = Array.isArray(data) ? data[0] : undefined

    return {
      about_me_image: await getImageUrl(about?.acf?.about_me_image),
      certificate_1: await getImageUrl(about?.acf?.certificate_1),
      certificate_2: await getImageUrl(about?.acf?.certificate_2),
      certificates,
    }
  } catch (error) {
    console.error("Nie udało się pobrać sekcji About:", error)
    return null
  }
}
