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
  title: {
    rendered: string
  }
  acf: {
    category: string
    area: string
    count: number
    price: string
    description?: string
    order?: number
  }
}

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

function cleanHtml(value: string) {
  return value.replace(/<[^>]*>/g, "")
}

export async function fetchPricelist(): Promise<Category[]> {
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

    const sorted = wpItems.sort((a, b) => {
      return (a.acf.order ?? 999) - (b.acf.order ?? 999)
    })

    const categoriesMap = new Map<string, Category>()

    sorted.forEach((item) => {
      const categoryTitle = item.acf.category
      const categoryId = slugify(categoryTitle)

      if (!categoriesMap.has(categoryTitle)) {
        categoriesMap.set(categoryTitle, {
          id: categoryId,
          title: categoryTitle,
          items: [],
        })
      }

      const category = categoriesMap.get(categoryTitle)!

      category.items.push({
        name: cleanHtml(item.title.rendered),
        rows: [
          {
            area: item.acf.area,
            count: item.acf.count,
            price: item.acf.price,
            desc:
              item.acf.description && item.acf.description !== "-"
                ? item.acf.description
                : undefined,
          },
        ],
      })
    })

    return Array.from(categoriesMap.values())
  } catch (error) {
    console.error("Nie udało się pobrać cennika:", error)
    return []
  }
}