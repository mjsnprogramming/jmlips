"use client";

import { useMemo, useState } from "react";
import { Playfair_Display } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });


const GOLD = "#c8b08a";
const PAPER = "#f8f6f1";

type Row = {
  area: string;
  count: number;
  price: string;
  desc?: string;
};

type Category = {
  id: string;
  title: string;
  items: {
    name: string;
    rows: Row[];
  }[];
};


const DATA: Category[] = [
  {
    id: "ust",
    title: "Modelowanie ust",
    items: [
      {
        name: "Modelowanie ust kwasem hialuronowym – Revolax / Stylage",
        rows: [{ area: "Usta", count: 1, price: "750 zł", desc: "1 ml" }],
      },
      {
        name: "Modelowanie ust kwasem hialuronowym – Juvederm 3",
        rows: [{ area: "Usta", count: 1, price: "900 zł", desc: "1 ml" }],
      },
      {
        name: "Rewitalizacja ust stymulatorem tkankowym",
        rows: [{ area: "Usta", count: 1, price: "650 zł" }],
      },
    ],
  },
  {
    id: "hialuronidaza",
    title: "Usuwanie kwasu hialuronowego",
    items: [
      {
        name: "Hialuronidaza",
        rows: [{ area: "Twarz", count: 1, price: "600–900 zł" }],
      },
    ],
  },
  {
    id: "oko",
    title: "Stymulator tkankowy – okolica oka",
    items: [
      {
        name: "Nucleofill Eyes",
        rows: [{ area: "Oczy", count: 1, price: "600 zł" }],
      },
      {
        name: "Electri",
        rows: [{ area: "Oczy", count: 1, price: "550 zł" }],
      },
      {
        name: "Xela Rederm 1.1%",
        rows: [{ area: "Oczy", count: 1, price: "550 zł" }],
      },
    ],
  },
  {
    id: "stymulatory",
    title: "Stymulator tkankowy (twarz, szyja, dekolt, skóra głowy)",
    items: [
      {
        name: "Karisma",
        rows: [{ area: "Twarz/szyja/dekolt/skóra głowy", count: 1, price: "800 zł" }],
      },
      {
        name: "Profhilo",
        rows: [{ area: "Twarz/szyja/dekolt/skóra głowy", count: 1, price: "700 zł" }],
      },
      {
        name: "Ejal40",
        rows: [{ area: "Twarz/szyja/dekolt/skóra głowy", count: 1, price: "600 zł" }],
      },
      {
        name: "Neauvia Hydro Deluxe",
        rows: [{ area: "Twarz/szyja/dekolt/skóra głowy", count: 1, price: "550 zł" }],
      },
      {
        name: "Dr.Cyj Hair Filler",
        rows: [{ area: "Skóra głowy", count: 1, price: "550 zł" }],
      },
    ],
  },
  {
    id: "mezoterapia",
    title: "Mezoterapia igłowa",
    items: [
      {
        name: "Twarz",
        rows: [{ area: "Twarz", count: 1, price: "350 zł" }],
      },
      {
        name: "Twarz + szyja",
        rows: [{ area: "Twarz + szyja", count: 1, price: "400 zł" }],
      },
      {
        name: "Twarz + szyja + dekolt",
        rows: [{ area: "Twarz + szyja + dekolt", count: 1, price: "500 zł" }],
      },
    ],
  },
];

export default function PriceList() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<String[]>([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return DATA;

    return DATA.map((cat) => {
      const titleHit = cat.title.toLowerCase().includes(q);
      const items = cat.items.filter((it) => it.name.toLowerCase().includes(q));
      
      if (titleHit && items.length === 0) return { ...cat };
      if (items.length) return { ...cat, items };
      return { ...cat, items: [] };
    }).filter((cat) => cat.items.length > 0 || cat.title.toLowerCase().includes(q));
  }, [query]);

  const effectiveOpen = useMemo(() => {
    if (!query) return open;
    return Array.from(new Set([...open, ...filtered.map((c) => c.id)]));
  }, [open, query, filtered]);

  const toggleCat = (id: string) =>
    setOpen((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  return (
    <main
      className="bg-[var(--paper)] text-[#2a241c]"
      style={{ ["--paper" as any]: PAPER }}
    >
      
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 pt-10 md:pt-12">
        <div className="flex justify-center">
          <div className="relative w-full max-w-[880px]">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Wyszukaj zabieg"
              className="w-full h-14 md:h-[60px] rounded-none border border-[#cfc7ba] bg-white/60 px-5 pr-14 tracking-wide placeholder-[#8c806e] focus:outline-none focus:ring-0"
            />
            <button
              aria-label="Szukaj"
              className="absolute right-0 top-0 h-full aspect-square grid place-items-center border-l border-[#cfc7ba]"
              onClick={() => null}
            >
              <Magnifier className="h-6 w-6" stroke={GOLD} />
            </button>
          </div>
        </div>
      </div>

      
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 pb-24">
        <div className="h-8" />

        {filtered.map((cat) => {
          const isOpen = effectiveOpen.includes(cat.id);
          return (
            <section key={cat.id} className="border-t border-[#e7e1d6]">
              <button
                onClick={() => toggleCat(cat.id)}
                className="w-full flex items-center justify-between py-6 md:py-7"
              >
                <h2
                  className={`${serif.className} text-[22px] md:text-[26px] italic font-semibold tracking-wide`}
                >
                  {cat.title.toUpperCase()}
                </h2>
                <span
  className="flex items-center justify-center rounded-full border font-semibold"
  style={{
    borderColor: GOLD,
    color: GOLD,
    width: 40,
    height: 40,
    fontSize: 22,
  }}
>
  {isOpen ? "–" : "+"}
</span>

              </button>

              {isOpen && (
                <div className="pb-10 md:pb-12">
                  {cat.items.map((it, idx) => (
                    <div key={idx} className="mb-6 md:mb-8">
                      <h3 className="text-[15px] md:text-base font-semibold tracking-wide text-[#6d5f4c] mb-3">
                        {it.name.toUpperCase()}
                      </h3>

                      <div className="overflow-x-auto bg-white ring-1 ring-[#eee7dc]">
                        <div
                          className="grid grid-cols-12 text-[13px] md:text-sm font-medium uppercase tracking-wide"
                          style={{ backgroundColor: GOLD, color: "#3c321f" }}
                        >
                          <div className="col-span-3 py-3 pl-4">Obszar</div>
                          <div className="col-span-3 py-3 pl-4">Ilość zabiegów</div>
                          <div className="col-span-3 py-3 pl-4">Cena</div>
                          <div className="col-span-3 py-3 pl-4">Opis</div>
                        </div>

                        {it.rows.map((row, rIdx) => (
                          <div
                            key={rIdx}
                            className={`grid grid-cols-12 text-[15px] md:text-base ${
                              rIdx % 2 === 0 ? "bg-[#fbfaf7]" : "bg-white"
                            }`}
                          >
                            <div className="col-span-3 py-4 pl-4 font-semibold">
                              {row.area}
                            </div>
                            <div className="col-span-3 py-4 pl-4">{row.count}</div>
                            <div className="col-span-3 py-4 pl-4 font-semibold">
                              {row.price}
                            </div>
                            <div className="col-span-3 py-4 pl-4 text-[#6b5d4a]">
                              {row.desc || "—"}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </main>
  );
}

function Magnifier({
  className,
  stroke = "#c8b08a",
}: {
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke={stroke}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}