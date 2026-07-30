export type Row = {
  area: string
  count: number
  price: string
  desc?: string
}

export type Category = {
  id: string
  title: string
  items: {
    name: string
    rows: Row[]
  }[]
}

type WPPriceItem = {
  id: number
  acf: {
    title_pl: string
    title_en: string

    category_pl: string
    category_en: string

    area_pl: string
    area_en: string

    count: number
    price: string

    description_pl?: string
    description_en?: string

    order?: number
  }
}

const CATEGORY_LABELS = {
  modelowanie_ust: {
    pl: "Modelowanie ust",
    en: "Lip Augmentation",
  },
  usuwanie_kwasu: {
    pl: "Usuwanie kwasu hialuronowego",
    en: "Hyaluronic Acid Dissolving",
  },
  wolumetria_twarzy: {
    pl: "Wolumetria twarzy",
    en: "Facial Volumization",
  },
  stymulatory_tkankowe: {
    pl: "Stymulatory tkankowe",
    en: "Tissue Stimulators",
  },
  pakiety_zabiegowe: {
    pl: "Pakiety zabiegowe",
    en: "Treatment Packages",
  },
} as const;

const env = (globalThis as any).process?.env as
  | Record<string, string | undefined>
  | undefined

const WP_API_URL = env?.WORDPRESS_API_URL
  ? `${env.WORDPRESS_API_URL}/wp-json/wp/v2/price_item?per_page=100`
  : null

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replaceAll("ą", "a")
    .replaceAll("ć", "c")
    .replaceAll("ę", "e")
    .replaceAll("ł", "l")
    .replaceAll("ń", "n")
    .replaceAll("ó", "o")
    .replaceAll("ś", "s")
    .replaceAll("ż", "z")
    .replaceAll("ź", "z")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export async function fetchPricelist(
  lang: "pl" | "en"
): Promise<Category[]> {
  if (!WP_API_URL) {
    return []
  }

  try {
    const res = await fetch(WP_API_URL, {
      next: {
        revalidate: 60,
      },
    })

    if (!res.ok) {
      return []
    }

    const wpItems = (await res.json()) as WPPriceItem[]

    const sorted = wpItems.sort(
      (a, b) => (a.acf.order ?? 999) - (b.acf.order ?? 999)
    )

    const categoriesMap = new Map<string, Category>()

    sorted.forEach((item) => {
      const categorySlug =
  lang === "pl"
    ? item.acf.category_pl
    : item.acf.category_en
    console.log("CATEGORY:", categorySlug)

const categoryId = categorySlug

      if (!categoriesMap.has(categorySlug)) {
        categoriesMap.set(categorySlug, {
          id: categoryId,
          title:
  CATEGORY_LABELS[
    categorySlug as keyof typeof CATEGORY_LABELS
  ][lang],
          items: [],
        })
      }

      const category = categoriesMap.get(categorySlug)!

      const treatmentName =
        lang === "pl"
          ? item.acf.title_pl
          : item.acf.title_en

      let treatment = category.items.find(
        (t) => t.name === treatmentName
      )

      if (!treatment) {
        treatment = {
          name: treatmentName,
          rows: [],
        }

        category.items.push(treatment)
      }

      treatment.rows.push({
        area:
          lang === "pl"
            ? item.acf.area_pl
            : item.acf.area_en,

        count: item.acf.count,

        price: item.acf.price,

        desc:
          (
            lang === "pl"
              ? item.acf.description_pl
              : item.acf.description_en
          ) || undefined,
      })
    })

    return Array.from(categoriesMap.values())
  } catch (error) {
    console.error("Nie udało się pobrać cennika:", error)
    return []
  }
}