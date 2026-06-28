export type FAQItem = {
  id: number
  question: string
  answer: string
  order: number
}

type WPFAQItem = {
  id: number
  acf: {
    question_pl: string
    question_en: string
    answer_pl: string
    answer_en: string
    order: string | number
  }
}

export async function fetchFAQ(
  lang: "pl" | "en"
): Promise<FAQItem[]> {
  const res = await fetch(
  `${process.env.WORDPRESS_API_URL}/wp-json/wp/v2/question?per_page=100`,
    {
      next: { revalidate: 60 },
    }
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
    }))
    .sort((a, b) => a.order - b.order)
}