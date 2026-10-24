export type Treatment = {
  id: number
  slug: string
  title: string
  category: string
  description: string
  details: string
  duration: string
  effect: string
  image: string | null
  order: number
  image2: string | null
  image3: string | null
}

type WPImageValue = string | number | false | null

type WPAllTreatment = {
  id: number
  slug: string
  acf?: {
    title_pl?: string | null
    title_en?: string | null
    category_pl?: string | null
    category_en?: string | null
    description_pl?: string | null
    description_en?: string | null
    details_pl?: string | null
    details_en?: string | null
    duration_pl?: string | null
    duration_en?: string | null
    effect_pl?: string | null
    effect_en?: string | null
    image?: WPImageValue
    image2?: WPImageValue
    image3?: WPImageValue
    order?: string | number | null
  }
}

type PolishTreatmentCopy = {
  slug: string
  title: string
  description: string
  details: string
  order: number
}

const POLISH_TREATMENT_COPY: PolishTreatmentCopy[] = [
  {
    slug: "modelowanie-ust",
    title: "Modelowanie ust",
    description:
      "Modelowanie ust z wykorzystaniem kwasu hialuronowego to zabieg, którego celem jest poprawa proporcji, konturu i kształtu ust z pozostałymi rysami twarzy.",
    details: [
      "Modelowanie ust z wykorzystaniem kwasu hialuronowego to zabieg, którego celem jest poprawa proporcji, konturu i kształtu ust z pozostałymi rysami twarzy.",
      "Każdy zabieg poprzedzamy indywidualną konsultacją, podczas której oceniane są proporcje twarzy, budowa ust oraz oczekiwania klientki. Technika oraz ilość preparatu dobierane są indywidualnie – tak, aby uzyskać estetyczny i możliwie naturalny efekt.",
    ].join("\n\n"),
    order: 1,
  },
  {
    slug: "stymulatory-tkankowe",
    title: "Stymulatory tkankowe",
    description:
      "Stymulatory tkankowe to preparaty stosowane w celu poprawy jakości i kondycji skóry. Ich działanie koncentruje się przede wszystkim na pobudzaniu naturalnych procesów regeneracyjnych oraz wspieraniu produkcji kolagenu i elastyny.",
    details: [
      "Stymulatory tkankowe to preparaty stosowane w celu poprawy jakości i kondycji skóry. Ich działanie koncentruje się przede wszystkim na pobudzaniu naturalnych procesów regeneracyjnych oraz wspieraniu produkcji kolagenu i elastyny.",
      "Zabieg dobierany jest indywidualnie do potrzeb skóry, jej kondycji oraz obszaru poddanego terapii.",
      "W zależności od zastosowanego preparatu terapia może przyczynić się do poprawy jędrności, elastyczności, napięcia oraz ogólnego wyglądu skóry.",
      "Efekt: zdrowiej wyglądająca, bardziej napięta i pełna blasku skóra, bez efektu przerysowania.",
    ].join("\n\n"),
    order: 2,
  },
  {
    slug: "wolumetria-brody",
    title: "Wolumetria brody",
    description:
      "Wolumetria brody ma na celu poprawę proporcji dolnej części twarzy oraz harmonizację jej rysów.",
    details: [
      "Wolumetria brody ma na celu poprawę proporcji dolnej części twarzy oraz harmonizację jej rysów.",
      "Za pomocą odpowiednio dobranej ilości preparatu można delikatnie podkreślić brodę, poprawić jej kształt, zaznaczyć projekcję lub skorygować niewielkie asymetrie.",
      "Zabieg zawsze planowany jest z uwzględnieniem całej twarzy, jej proporcji, profilu oraz naturalnej anatomii.",
    ].join("\n\n"),
    order: 3,
  },
  {
    slug: "wolumetria-policzkow",
    title: "Wolumetria policzków",
    description:
      "Wolumetria policzków pozwala na przywrócenie lub subtelne uzupełnienie objętości w środkowej części twarzy.",
    details: [
      "Wolumetria policzków pozwala na przywrócenie lub subtelne uzupełnienie objętości w środkowej części twarzy.",
      "Zabieg może pomóc w podkreśleniu kości policzkowych, poprawie proporcji twarzy oraz uzyskaniu bardziej wyraźnego konturu.",
      "Objętość i miejsce podania preparatu dobierane są indywidualnie, z uwzględnieniem budowy twarzy oraz oczekiwanego efektu.",
    ].join("\n\n"),
    order: 4,
  },
  {
    slug: "wolumetria-katow-zuchwy",
    title: "Wolumetria kątów żuchwy",
    description:
      "Wolumetria kątów żuchwy pozwala na podkreślenie konturu dolnej części twarzy oraz nadanie jej bardziej wyrazistego kształtu.",
    details: [
      "Wolumetria kątów żuchwy pozwala na podkreślenie konturu dolnej części twarzy oraz nadanie jej bardziej wyrazistego kształtu.",
      "Preparat podawany jest w strategicznie dobrane miejsca, aby zaakcentować kąty żuchwy i poprawić proporcje twarzy.",
      "Zakres zabiegu oraz ilość preparatu ustalane są indywidualnie podczas konsultacji, ponieważ każda twarz wymaga innego podejścia.",
    ].join("\n\n"),
    order: 5,
  },
]

const env = (globalThis as any).process?.env as
  | Record<string, string | undefined>
  | undefined

const WP_BASE_URL = env?.WORDPRESS_API_URL?.trim().replace(/\/+$/, "")

const WP_API_URL = WP_BASE_URL
  ? `${WP_BASE_URL}/wp-json/wp/v2/alltreatments?per_page=100`
  : null

function normalizeText(value: string | null | undefined): string {
  return typeof value === "string" ? value.trim() : ""
}

async function getImageUrl(
  image: WPImageValue | undefined,
): Promise<string | null> {
  if (typeof image === "string") {
    return image.trim() || null
  }

  if (typeof image !== "number" || !WP_BASE_URL) {
    return null
  }

  try {
    const res = await fetch(
      `${WP_BASE_URL}/wp-json/wp/v2/media/${image}`,
      {
        next: { revalidate: 60 },
      },
    )

    if (!res.ok) return null

    const media = (await res.json()) as {
      source_url?: string | null
    }

    return normalizeText(media.source_url) || null
  } catch (error) {
    console.error(`Nie udało się pobrać zdjęcia o ID ${image}:`, error)
    return null
  }
}

function normalizeOrder(
  value: string | number | null | undefined,
  fallback = 0,
): number {
  if (value === null || value === undefined || String(value).trim() === "") {
    return fallback
  }

  const order = Number(value)
  return Number.isFinite(order) ? order : fallback
}

function createPolishFallbacks(): Treatment[] {
  return POLISH_TREATMENT_COPY.map((copy) => ({
    id: copy.order,
    slug: copy.slug,
    title: copy.title,
    category: "",
    description: copy.description,
    details: copy.details,
    duration: "",
    effect: "",
    image: null,
    image2: null,
    image3: null,
    order: copy.order,
  }))
}

async function mapWPTreatment(
  item: WPAllTreatment,
  lang: "pl" | "en",
): Promise<Treatment> {
  const acf = item.acf

  const polishCopy =
    lang === "pl"
      ? POLISH_TREATMENT_COPY.find((copy) => copy.slug === item.slug)
      : undefined

  const [image, image2, image3] = await Promise.all([
    getImageUrl(acf?.image),
    getImageUrl(acf?.image2),
    getImageUrl(acf?.image3),
  ])

  return {
    id: item.id,
    slug: item.slug,
    title:
      normalizeText(lang === "pl" ? acf?.title_pl : acf?.title_en) ||
      polishCopy?.title ||
      "",
    category: normalizeText(
      lang === "pl" ? acf?.category_pl : acf?.category_en,
    ),
    description:
      normalizeText(lang === "pl" ? acf?.description_pl : acf?.description_en) ||
      polishCopy?.description ||
      "",
    details:
      normalizeText(lang === "pl" ? acf?.details_pl : acf?.details_en) ||
      polishCopy?.details ||
      "",
    duration: normalizeText(lang === "pl" ? acf?.duration_pl : acf?.duration_en),
    effect: normalizeText(lang === "pl" ? acf?.effect_pl : acf?.effect_en),
    image,
    image2,
    image3,
    order: normalizeOrder(acf?.order, polishCopy?.order ?? 0),
  }
}

export async function fetchTreatments(
  lang: "pl" | "en",
): Promise<Treatment[]> {
  const polishFallbacks = createPolishFallbacks()

  if (!WP_API_URL) {
    return lang === "pl" ? polishFallbacks : []
  }

  try {
    const res = await fetch(WP_API_URL, {
      next: { revalidate: 60 },
    })

    if (!res.ok) {
      return lang === "pl" ? polishFallbacks : []
    }

    const data = (await res.json()) as WPAllTreatment[]
    if (!Array.isArray(data)) {
      return lang === "pl" ? polishFallbacks : []
    }

    const treatments = await Promise.all(
      data.map((item) => mapWPTreatment(item, lang)),
    )

    return treatments
      .filter((treatment) => treatment.title.length > 0)
      .sort((a, b) => a.order - b.order)
  } catch (error) {
    console.error("Nie udało się pobrać zabiegów:", error)
    return lang === "pl" ? polishFallbacks : []
  }
}