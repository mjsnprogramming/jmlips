import { FAQ } from "@/content/faq"

export type FAQItem = {
  id: number
  question: string
  answer: string
  order: number
  treatmentSlug: string
}

/** Pytania FAQ – z src/content/faq.ts. */
export async function fetchFAQ(lang: "pl" | "en"): Promise<FAQItem[]> {
  return FAQ.map((item, index) => ({
    id: index + 1,
    question: item.question[lang],
    answer: item.answer[lang],
    order: index,
    treatmentSlug: item.treatment,
  })).filter((item) => item.question)
}
