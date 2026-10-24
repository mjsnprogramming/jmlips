export type FAQItem = {
  id: number
  question: string
  answer: string
  order: number
  treatmentSlug: string
}

type WPFAQItem = {
  id: number
  acf: {
    category_pl: string
    category_en: string
    question_pl: string
    question_en: string
    answer_pl: string
    answer_en: string
    order: string | number
  }
}

function toSlug(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/ł/g, "l")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

export async function fetchFAQ(
  lang: "pl" | "en",
): Promise<FAQItem[]> {
  const res = await fetch(
    `${process.env.WORDPRESS_API_URL}/wp-json/wp/v2/question?per_page=100`,
    {
      next: { revalidate: 60 },
    },
  )

  if (!res.ok) {
    return []
  }

  const data: WPFAQItem[] = await res.json()

  return data
    .map((item) => ({
      id: item.id,
      question:
        lang === "pl"
          ? item.acf.question_pl
          : item.acf.question_en,
      answer:
        lang === "pl"
          ? item.acf.answer_pl
          : item.acf.answer_en,
      order: Number(item.acf.order),
      treatmentSlug: toSlug(item.acf.category_pl),
    }))
    .sort((a, b) => a.order - b.order)
}