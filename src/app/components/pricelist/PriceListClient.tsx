"use client"

import { useId, useMemo, useState } from "react"
import type { Category } from "@/lib/pricelist"

type Lang = "pl" | "en"

const COPY = {
  pl: {
    heading: "Cennik",
    searchLabel: "Wyszukaj zabieg w cenniku",
    searchPlaceholder: "Wyszukaj zabieg",
    columns: ["Obszar", "Liczba zabiegów", "Cena", "Opis"],
    empty: "Cennik jest chwilowo niedostępny. O ceny zapytaj telefonicznie lub na Instagramie.",
    noResults: (query: string) => `Nie znaleziono zabiegu „${query}”.`,
  },
  en: {
    heading: "Prices",
    searchLabel: "Search the price list",
    searchPlaceholder: "Search treatments",
    columns: ["Area", "Number of sessions", "Price", "Description"],
    empty: "The price list is temporarily unavailable. Please ask about prices by phone or on Instagram.",
    noResults: (query: string) => `No treatments found for “${query}”.`,
  },
} as const

/** Małe litery bez polskich znaków – "policzkow" znajdzie "policzków". */
function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/ł/g, "l")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim()
}

export default function PriceListClient({
  initialData,
  lang = "pl",
}: {
  initialData: Category[]
  lang?: Lang
}) {
  const copy = COPY[lang]
  const searchId = useId()
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState<string[]>([])

  const filtered = useMemo(() => {
    const q = normalize(query)
    if (!q) return initialData

    return initialData
      .map((cat) => {
        if (normalize(cat.title).includes(q)) return cat

        const items = cat.items.filter(
          (it) =>
            normalize(it.name).includes(q) ||
            it.rows.some((row) =>
              normalize([row.area, row.price, row.desc ?? "", String(row.count)].join(" ")).includes(q),
            ),
        )

        return { ...cat, items }
      })
      .filter((cat) => cat.items.length > 0)
  }, [query, initialData])

  // Podczas wyszukiwania wszystkie pasujące kategorie są rozwinięte.
  const effectiveOpen = useMemo(() => {
    if (!query.trim()) return open
    return Array.from(new Set([...open, ...filtered.map((c) => c.id)]))
  }, [open, query, filtered])

  const toggleCat = (id: string) =>
    setOpen((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

  return (
    <div className="bg-[#f8f6f1] text-[#2a241c]">
      <div className="mx-auto w-full max-w-[1200px] px-4 pt-14 md:px-6 md:pt-20">
        <h1 className="text-center font-heading text-5xl font-medium tracking-[-0.035em] text-[#332a23] sm:text-6xl">
          {copy.heading}
        </h1>

        {initialData.length > 0 && (
          <div className="mt-10 flex justify-center md:mt-12">
            <div className="relative w-full max-w-[880px]">
              <label htmlFor={searchId} className="sr-only">
                {copy.searchLabel}
              </label>
              <input
                id={searchId}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={copy.searchPlaceholder}
                className="h-14 w-full rounded-none border border-[#cfc7ba] bg-white/60 px-5 pr-16 tracking-wide placeholder-[#8c806e] focus:border-brand focus:outline-none md:h-[60px]"
              />

              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 grid aspect-square h-full place-items-center border-l border-[#cfc7ba]"
              >
                <Magnifier className="h-6 w-6" />
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="mx-auto w-full max-w-[1200px] px-4 pb-24 md:px-6">
        <div className="h-8" />

        {initialData.length === 0 && (
          <p className="mx-auto max-w-xl py-10 text-center text-lg leading-8 text-[#6b625b]">
            {copy.empty}
          </p>
        )}

        {initialData.length > 0 && filtered.length === 0 && (
          <p role="status" className="py-10 text-center text-lg text-[#6b625b]">
            {copy.noResults(query.trim())}
          </p>
        )}

        {filtered.map((cat) => {
          const isOpen = effectiveOpen.includes(cat.id)
          const panelId = `price-cat-${cat.id}`

          return (
            <section key={cat.id} className="border-t border-[#e7e1d6]">
              <h2>
                <button
                  type="button"
                  onClick={() => toggleCat(cat.id)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand md:py-7"
                >
                  <span className="font-heading text-[22px] font-semibold uppercase tracking-wide md:text-[26px]">
                    {cat.title}
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#c8b08a] text-[22px] font-semibold text-[#c8b08a]"
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
              </h2>

              {isOpen && (
                <div id={panelId} className="pb-10 md:pb-12">
                  {cat.items.map((it) => (
                    <div key={it.name} className="mb-6 md:mb-8">
                      <h3 className="mb-3 font-heading text-[15px] font-semibold uppercase tracking-wide text-[#6d5f4c] md:text-base">
                        {it.name}
                      </h3>

                      <div className="overflow-x-auto bg-white ring-1 ring-[#eee7dc]">
                        <table className="w-full table-fixed border-collapse text-left">
                          <caption className="sr-only">{it.name}</caption>
                          <thead>
                            <tr className="bg-[#c8b08a] text-[13px] font-medium uppercase tracking-wide text-[#3c321f] md:text-sm">
                              {copy.columns.map((column) => (
                                <th key={column} scope="col" className="py-3 pl-4 pr-2 align-top font-medium">
                                  {column}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {it.rows.map((row, rIdx) => (
                              <tr
                                key={rIdx}
                                className={`text-[15px] md:text-base ${rIdx % 2 === 0 ? "bg-[#fbfaf7]" : "bg-white"}`}
                              >
                                <th scope="row" className="py-4 pl-4 pr-2 align-top font-semibold">
                                  {row.area}
                                </th>
                                <td className="py-4 pl-4 pr-2 align-top">{row.count}</td>
                                <td className="py-4 pl-4 pr-2 align-top font-semibold">{row.price}</td>
                                <td className="py-4 pl-4 pr-2 align-top text-[#6b5d4a]">
                                  {row.desc || "—"}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )
        })}
      </div>
    </div>
  )
}

function Magnifier({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="#c8b08a"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}
