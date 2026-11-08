import { PRICELIST } from "@/content/pricelist"

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

/** Cennik – z src/content/pricelist.ts. */
export async function fetchPricelist(lang: "pl" | "en"): Promise<Category[]> {
  return PRICELIST.map((category) => ({
    id: category.id,
    title: category.title[lang],
    items: category.items.map((item) => ({
      name: item.name[lang],
      rows: item.rows.map((row) => ({
        area: row.area[lang],
        count: row.count,
        price: row.price,
        desc: row.description[lang] || undefined,
      })),
    })),
  }))
}
