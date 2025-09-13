"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

type Category = "Wszystkie" | "Usta" | "Twarz" | "Skóra";

type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: Exclude<Category, "Wszystkie">;
  w?: number;
  h?: number;
};

type BeforeAfterItem = {
  id: string;
  before: string;
  after: string;
  alt: string;
};

const CATEGORIES: Category[] = ["Wszystkie", "Usta", "Twarz", "Skóra"];

const GALLERY_ITEMS: GalleryItem[] = [
  { id: "g1", src: "/portfolio/lips_01.jpg", alt: "Delikatne powiększanie ust", category: "Usta", w: 900, h: 1200 },
  { id: "g2", src: "/portfolio/face_01.jpg", alt: "Modelowanie policzków", category: "Twarz", w: 900, h: 1200 },
  { id: "g3", src: "/portfolio/skin_01.jpg", alt: "Rozświetlenie i odmłodzenie skóry", category: "Skóra", w: 900, h: 1200 },
  { id: "g4", src: "/portfolio/lips_02.jpg", alt: "Naturalne modelowanie ust", category: "Usta", w: 900, h: 1200 },
  { id: "g5", src: "/portfolio/face_02.jpg", alt: "Podkreślenie linii żuchwy", category: "Twarz", w: 900, h: 1200 },
  { id: "g6", src: "/portfolio/skin_02.jpg", alt: "Wygładzenie struktury skóry", category: "Skóra", w: 900, h: 1200 },
];

const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: "ba1",
    before: "/portfolio/ba/lips_before.jpg",
    after: "/portfolio/ba/lips_after.jpg",
    alt: "Usta — przed i po",
  },
  {
    id: "ba2",
    before: "/portfolio/ba/skin_before.jpg",
    after: "/portfolio/ba/skin_after.jpg",
    alt: "Skóra — przed i po",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<Category>("Wszystkie");
  const [lightboxId, setLightBoxId] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      active === "Wszystkie"
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter(i => i.category === active),
    [active]
  );

  return (
    <main className="bg-[#f7f5f0] min-h-screen">
      <section className="w-full px-6 md:px-16 lg:px-24 pt-16 pb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Portfolio
        </h1>
        <p className="mt-4 text-[#5a4c3a] max-w-3xl">
          Wybrane realizacje z naciskiem na naturalny, harmonijny efekt. Filtruj według kategorii,
          otwórz zdjęcie, aby powiększyć, a w sekcji niżej sprawdź interaktywne ujęcia&nbsp;Przed/Po.
        </p>
      </section>

   
      <section className="px-6 md:px-16 lg:px-24">
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map(cat => {
            const activeButton = cat === active;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm md:text-base transition
                  ${
                    activeButton
                      ? "bg-[#a67c52] text-white shadow"
                      : "bg-white text-gray-800 border border-[#e7dfd6] hover:bg-[#f0eae2]"
                  }`}
                aria-pressed={activeButton}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

    
      <section className="px-6 md:px-16 lg:px-24 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map(item => (
            <figure
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.w ?? 1200}
                height={item.h ?? 1600}
                className="w-full h-auto object-cover"
                priority={false}
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition">
                <div className="text-sm uppercase tracking-wide">{item.category}</div>
                <div className="text-base">{item.alt}</div>
              </figcaption>
              <button
                aria-label="Otwórz zdjęcie"
                className="absolute inset-0"
                onClick={() => setLightBoxId(item.id)}
              />
            </figure>
          ))}
        </div>
      </section>

      
      <section className="px-6 md:px-16 lg:px-24 py-6">
        <h2 className="text-[28px] md:text-[34px] font-serif font-semibold">Przed / Po</h2>
        <p className="mt-3 text-[#5a4c3a]">
          Przeciągnij suwak, aby porównać efekty zabiegów. Zdjęcia wykonywane w spójnych warunkach oświetleniowych.
        </p>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {BEFORE_AFTER_ITEMS.map(ba => (
            <BeforeAfter key={ba.id} item={ba} />
          ))}
        </div>
      </section>


      <section className="px-6 md:px-16 lg:px-24 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#a67c52]/15 to-transparent border border-[#e7dfd6]">
          <div className="p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Chcesz podobny efekt?
            </h3>
            <p className="mt-3 text-[#5a4c3a] max-w-2xl">
              Umów konsultację — wspólnie zaplanujemy subtelne zmiany dopasowane do Twoich rysów i oczekiwań.
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-block px-6 py-3 rounded-full bg-[#a67c52] text-white hover:opacity-95 transition shadow"
              >
                Umów konsultację
              </a>
            </div>
          </div>
        </div>
      </section>

     
      {lightboxId && (
        <Lightbox
          item={GALLERY_ITEMS.find(i => i.id === lightboxId)!}
          onClose={() => setLightBoxId(null)}
        />
      )}
    </main>
  );
}

function Lightbox({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 md:-top-14 md:-right-2 text-white/80 hover:text-white"
          aria-label="Zamknij"
        >
          ✕
        </button>
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={item.src}
            alt={item.alt}
            width={item.w ?? 1400}
            height={item.h ?? 1800}
            className="w-full h-auto object-contain"
            priority
          />
          <div className="p-4 md:p-6">
            <div className="text-sm uppercase tracking-wide text-[#a67c52]">
              {item.category}
            </div>
            <div className="text-gray-800 mt-1">{item.alt}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BeforeAfter({ item }: { item: BeforeAfterItem }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative bg-white rounded-2xl shadow overflow-hidden">
      <div className="relative w-full h-[460px]">
      
        <Image
          src={item.after}
          alt={`${item.alt} — po`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          priority={false}
        />
      
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={item.before}
            alt={`${item.alt} — przed`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority={false}
          />
        </div>
       
        <div
          className="absolute inset-y-0"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
          aria-hidden="true"
        >
          <div className="h-full w-[2px] bg-white/80 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]" />
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">
            <span className="text-gray-700 text-sm">↔</span>
          </div>
        </div>
       
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={e => setPos(parseInt(e.target.value))}
          aria-label="Porównaj przed i po"
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        />
      </div>
      <div className="p-4 md:p-6">
        <div className="text-gray-800">{item.alt}</div>
      </div>
    </div>
  );
}
