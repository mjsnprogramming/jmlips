import { CODE_PORTFOLIO_IMAGES } from "./portfolio.generated"

/**
 * Kategorie portfolio. `id` = nazwa folderu w public/images/portfolio/
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
  source: "code"
}

export type PortfolioImagesByCategory = Record<PortfolioCategoryId, PortfolioImage[]>

/** Zdjęcia portfolio z public/images/portfolio/<kategoria>/ (lista w portfolio.generated.ts). */
export async function fetchPortfolio(): Promise<PortfolioImagesByCategory> {
  return Object.fromEntries(
    PORTFOLIO_CATEGORIES.map(({ id }) => [
      id,
      (CODE_PORTFOLIO_IMAGES[id] ?? []).map((src) => ({
        id: `code-${src}`,
        src,
        source: "code" as const,
      })),
    ]),
  ) as PortfolioImagesByCategory
}
