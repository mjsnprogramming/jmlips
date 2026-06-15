export type FAQItem = {
  id: number;
  question: string;
  answer: string;
  order: number;
};

type WPFAQItem = {
  id: number;
  acf: {
    question: string;
    answer: string;
    order?: number;
  };
};

export async function fetchFAQ(): Promise<FAQItem[]> {
  const res = await fetch(`${process.env.WORDPRESS_API_URL}/wp-json/wp/v2/faq`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return [];
  }

  const data: WPFAQItem[] = await res.json();

  return data
    .map((item) => ({
      id: item.id,
      question: item.acf.question,
      answer: item.acf.answer,
      order: item.acf.order ?? 0,
    }))
    .sort((a, b) => a.order - b.order);
}