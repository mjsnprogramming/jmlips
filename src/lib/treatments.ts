export type Benefit = { icon: string; title: string; text: string };
export type BeforeAfter = { before: string; after: string; alt: string };

export type Treatment = {
    slug: string;
    title: string;
    excerpt: string;
    description: string;
    heroImage: string;
    gallery?: string[];
    beforeAfter?: BeforeAfter[];
    benefits: Benefit[];
    booksyUrl?: string;
    category?: string;
};

export const TREATMENTS: Treatment[] = [
    {
        slug: "modelowanie-ust",
    title: "Modelowanie ust",
    excerpt: "Delikatne powiększanie i nawilżenie ust z naturalnym efektem.",
    description:
      "Subtelne podkreślenie kształtu, wyrównanie asymetrii i nawilżenie. Dobieram technikę oraz preparat tak, by efekt był harmonijny i zgodny z rysami twarzy.",
    heroImage: "/portfolio/lips_01.jpg",
    benefits: [
      { icon: "💋", title: "Naturalny efekt", text: "Miękki kontur, bez przerysowania." },
      { icon: "🛡️", title: "Bezpieczeństwo", text: "Sprawdzone, certyfikowane preparaty." },
      { icon: "⚡", title: "Szybka regeneracja", text: "Zwykle powrót do aktywności następnego dnia." },
    ],
    beforeAfter: [
      { before: "/portfolio/ba/lips_before.jpg", after: "/portfolio/ba/lips_after.jpg", alt: "Usta — przed i po" },
    ],
    gallery: ["/portfolio/lips_02.jpg"],
    booksyUrl: "https://booksy.com/twoj-profil", 
    category: "Usta",
    }
];

export function getTreatmentBySlug(slug: string) {
  return TREATMENTS.find(t => t.slug === slug) ?? null;
}

export function getAllSlugs() {
    return TREATMENTS.map(t => ({ slug: t.slug }));
}