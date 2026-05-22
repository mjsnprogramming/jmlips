'use client'

import Image from 'next/image'
import { useState } from 'react'

type Treatment = {
  slug: string
  title: string
  category: string
  desc: string
  details: string
  duration: string
  effect: string
  image: string
}

const TREATMENTS: Treatment[] = [
  {
    slug: "modelowanie-ust",
    title: "Modelowanie ust kwasem hialuronowym",
    category: "Lips",
    desc:
      "Subtelne podkreślenie kształtu i objętości z zachowaniem naturalnych proporcji.",
    details:
      "Miękki, nawilżony efekt bez przerysowania. Zabieg wykonywany z naciskiem na harmonię rysów twarzy i naturalny rezultat.",
    duration: "45–60 min",
    effect: "Natural volume",
    image: "/images/treatments/lipsHialuronic.jpeg",
  },

  {
    slug: "rewitalizacja-ust-stymulator",
    title: "Rewitalizacja ust stymulatorem tkankowym",
    category: "Regeneration",
    desc:
      "Odświeżenie czerwieni wargowej, poprawa nawilżenia i gładkości ust.",
    details:
      "Naturalny połysk, komfort oraz poprawa jakości ust bez zwiększania objętości.",
    duration: "30–45 min",
    effect: "Fresh lips",
    image: "/images/treatments/revitalLips.jpg",
  },

  {
    slug: "hialuronidaza",
    title: "Usuwanie kwasu hialuronowego",
    category: "Correction",
    desc:
      "Bezpieczne rozpuszczanie niepożądanego lub przeterminowanego wypełniacza.",
    details:
      "Przywrócenie naturalnych rysów oraz możliwość przygotowania do ponownego modelowania.",
    duration: "30 min",
    effect: "Natural correction",
    image: "/images/treatments/hyaluronidase.jpg",
  },

  {
    slug: "nucleofill-eyes",
    title: "Nucleofill Eyes",
    category: "Eye area",
    desc:
      "Delikatne zagęszczenie i nawilżenie cienkiej skóry pod oczami.",
    details:
      "Rozświetlenie spojrzenia oraz poprawa jakości skóry bez sztucznego efektu.",
    duration: "30–45 min",
    effect: "Fresh look",
    image: "/images/treatments/eyes-nucleofill.jpg",
  },

  {
    slug: "electri",
    title: "Electri",
    category: "Eye area",
    desc:
      "Biorewitalizacja okolicy oka i poprawa elastyczności skóry.",
    details:
      "Naturalne odświeżenie spojrzenia i poprawa tekstury delikatnej skóry.",
    duration: "30–45 min",
    effect: "Skin quality",
    image: "/images/treatments/eyes-electri.jpg",
  },

  {
    slug: "xela-rederm",
    title: "Xela Rederm 1.1%",
    category: "Eye area",
    desc:
      "Wsparcie jakości skóry oraz subtelne wygładzenie okolicy oka.",
    details:
      "Świeży, wypoczęty wygląd oraz poprawa nawilżenia skóry.",
    duration: "30–45 min",
    effect: "Smooth skin",
    image: "/images/treatments/eyes-xela.jpg",
  },

  {
    slug: "karisma",
    title: "Karisma",
    category: "Skin booster",
    desc:
      "Poprawa gęstości i elastyczności skóry twarzy, szyi i dekoltu.",
    details:
      "Subtelne ujędrnienie i regeneracja bez dodawania objętości.",
    duration: "45 min",
    effect: "Firmness",
    image: "/images/treatments/karisma.jpg",
  },

  {
    slug: "profhilo",
    title: "Profhilo",
    category: "Bioremodeling",
    desc:
      "Intensywne nawilżenie i zagęszczenie skóry z efektem glow.",
    details:
      "Naturalny efekt „glass skin” i poprawa jakości skóry.",
    duration: "45 min",
    effect: "Glass skin",
    image: "/images/treatments/profhilo.jpg",
  },

  {
    slug: "ejal40",
    title: "Ejal 40",
    category: "Skin regeneration",
    desc:
      "Wsparcie sprężystości skóry i poprawa konturów twarzy.",
    details:
      "Widoczne odświeżenie oraz poprawa napięcia skóry.",
    duration: "45 min",
    effect: "Elasticity",
    image: "/images/treatments/ejal40.jpg",
  },

  {
    slug: "neauvia-hydro-deluxe",
    title: "Neauvia Hydro Deluxe",
    category: "Hydration",
    desc:
      "Silne nawilżenie i wygładzenie skóry z efektem świeżości.",
    details:
      "Komfortowy zabieg poprawiający kondycję oraz wygląd skóry.",
    duration: "45 min",
    effect: "Deep hydration",
    image: "/images/treatments/neauvia-hydro-deluxe.jpg",
  },

  {
    slug: "dr-cyj-hair-filler",
    title: "Dr.Cyj Hair Filler",
    category: "Hair",
    desc:
      "Wspomaganie kondycji skóry głowy i włosów.",
    details:
      "Peptydowa terapia wspierająca zdrowie cebulek i jakość włosów.",
    duration: "45 min",
    effect: "Hair support",
    image: "/images/treatments/dr-cyj.jpg",
  },

  {
    slug: "mezoterapia-iglowa",
    title: "Mezoterapia igłowa",
    category: "Skin glow",
    desc:
      "Nawilżenie, odżywienie i poprawa jakości skóry.",
    details:
      "Dobór terapii indywidualnie do potrzeb skóry twarzy, szyi i dekoltu.",
    duration: "45–60 min",
    effect: "Glow effect",
    image: "/images/treatments/meso-face-neck.jpg",
  },
]

export default function OfferPage() {
  const [openSlug, setOpenSlug] = useState<string | null>(null)

  return (
    <main className="bg-[#fbf8f4] text-[#2f2924]">
      <section className="relative overflow-hidden px-6 py-28">
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-[#a67c52]/10 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#a67c52]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <p className="mb-5 inline-flex rounded-full bg-[#a67c52] px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Oferta
            </p>

            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
              Zabiegi dobrane do Twoich potrzeb.
            </h1>

            <p className="mt-7 text-lg leading-8 text-gray-600">
              Poznaj najważniejsze informacje o zabiegach bez przechodzenia
              przez dziesiątki podstron. Kliknij kafelek, aby rozwinąć szczegóły.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {TREATMENTS.map((t, index) => {
              const isOpen = openSlug === t.slug

              return (
                <article
                  key={t.slug}
                  className="group overflow-hidden rounded-[2.5rem] border border-[#eadbc9] bg-white/75 shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
                >
                  <div className="relative h-[340px] overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                    <span className="absolute right-6 top-6 text-6xl font-semibold text-white/20">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-white/70">
                        {t.category}
                      </p>

                      <h2 className="text-2xl font-semibold leading-tight">
                        {t.title}
                      </h2>
                    </div>
                  </div>

                  <div className="p-7">
                    <p className="leading-7 text-gray-600">
                      {t.desc}
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-[#f9f5f0] p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#a67c52]">
                          Czas
                        </p>
                        <p className="mt-2 font-semibold">
                          {t.duration}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-[#f9f5f0] p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#a67c52]">
                          Efekt
                        </p>
                        <p className="mt-2 font-semibold">
                          {t.effect}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`grid transition-all duration-500 ${
                        isOpen
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-6 border-t border-[#eadbc9] pt-6 leading-8 text-gray-600">
                          {t.details}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setOpenSlug(isOpen ? null : t.slug)}
                      className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#d7b995] bg-[#f9f5f0] px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#a67c52] transition-all duration-300 hover:bg-[#a67c52] hover:text-white"
                      aria-expanded={isOpen}
                    >
                      {isOpen ? 'Zwiń opis' : 'Czytaj więcej'}
                      <span>{isOpen ? '↑' : '↓'}</span>
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}