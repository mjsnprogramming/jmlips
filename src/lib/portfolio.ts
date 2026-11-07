import { fetchCollection, WP_BASE_URL } from "./cms"
import { CODE_PORTFOLIO_IMAGES } from "./portfolio.generated"

/**
 * Kategorie portfolio. `id` = nazwa folderu w public/images/portfolio/
 * i jednocześnie wartość pola "category" we wpisie portfolio w WordPressie.
 */
export const PORTFOLIO_CATEGORIES = [
  { id: "modelowanie-ust", label: { pl: "Modelowanie ust", en: "Lip Augmentation" } },
  { id: "stymulatory-tkankowe", label: { pl: "Stymulatory tkankowe", en: "Tissue Stimulators" } },
  {
    id: "usuwanie-kwasu-hialuronowego",
    label: { pl: "Usuwanie kwasu hialuronowego", en: "Hyaluronic Acid Dissolving" },
  },
  { id: "wolumetria-brody", label: { pl: "Wolumetria brody", en: "Chin Augmentation" } },
  {
    id: "wolumetria-katow-zuchwy",
    label: { pl: "Wolumetria kątów żuchwy", en: "Jawline Contouring" },
  },
  { id: "wolumetria-policzkow", label: { pl: "Wolumetria policzków", en: "Cheek Augmentation" } },
] as const

export type PortfolioCategoryId = (typeof PORTFOLIO_CATEGORIES)[number]["id"]

export type PortfolioImage = {
  id: string
  src: string
  /** "wordpress" – zdjęcie z panelu, "code" – plik z public/images/portfolio. */
  source: "wordpress" | "code"
}

export type PortfolioImagesByCategory = Record<PortfolioCategoryId, PortfolioImage[]>

type WPPortfolioItem = {
  id: number
  acf?: {
    category?: string | null
    image?: string | number | false | null
    order?: string | number | null
  }
}


async function getImageUrl(image: string | number | false | null | undefined) {
  if (typeof image === "string") return image.trim() || null
  if (typeof image !== "number" || !WP_BASE_URL) return null

  try {
    const res = await fetch(`${WP_BASE_URL}/wp-json/wp/v2/media/${image}`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return null
    const media = (await res.json()) as { source_url?: string | null }
    return media.source_url?.trim() || null
  } catch {
    return null
  }
}

/** Zdjęcia dodane w WordPressie (typ wpisu "portfolio_item"). Brak typu lub błąd = pusta lista. */
async function fetchWordPressImages(): Promise<Partial<PortfolioImagesByCategory>> {
  try {
    const data = await fetchCollection<WPPortfolioItem>("portfolio_item")
    if (!data) return {}

    const items = await Promise.all(
      data.map(async (item) => ({
        id: `wp-${item.id}`,
        category: String(item.acf?.category ?? "").trim(),
        order: Number(item.acf?.order ?? 999) || 999,
        src: await getImageUrl(item.acf?.image),
      })),
    )

    const result: Partial<PortfolioImagesByCategory> = {}

    for (const item of items.sort((a, b) => a.order - b.order)) {
      const category = PORTFOLIO_CATEGORIES.find((c) => c.id === item.category)
      if (!category || !item.src) continue
      ;(result[category.id] ??= []).push({ id: item.id, src: item.src, source: "wordpress" })
    }

    return result
  } catch (error) {
    console.error("Nie udało się pobrać portfolio z WordPressa:", error)
    return {}
  }
}

/** Zdjęcia z WordPressa (najpierw) + zdjęcia z kodu (za nimi), osobno dla każdej kategorii. */
export async function fetchPortfolio(): Promise<PortfolioImagesByCategory> {
  const wordpress = await fetchWordPressImages()

  return Object.fromEntries(
    PORTFOLIO_CATEGORIES.map(({ id }) => [
      id,
      [
        ...(wordpress[id] ?? []),
        ...(CODE_PORTFOLIO_IMAGES[id] ?? []).map((src) => ({
          id: `code-${src}`,
          src,
          source: "code" as const,
        })),
      ],
    ]),
  ) as PortfolioImagesByCategory
}
