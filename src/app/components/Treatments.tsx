"use client"

import Image from "next/image";
import { useState } from "react";
import { Treatment } from "@/lib/treatments";

export default function Treatments({ data }: { data: Treatment }) {
    return ( 
        <main className="bg-[#f7f5f0] min-h-screen">
      
      <section className="relative h-[420px]">
        <Image src={data.heroImage} alt={data.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold tracking-tight">{data.title}</h1>
        </div>
      </section>

      
      <section className="px-6 md:px-16 lg:px-24 py-12 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-[28px] md:text-[34px] font-serif font-semibold">Opis zabiegu</h2>
          <p className="mt-4 text-[#5a4c3a] leading-relaxed">{data.description}</p>
        </div>
        {data.gallery?.[0] && (
          <div className="relative overflow-hidden rounded-3xl border border-[#e7dfd6]">
            <Image src={data.gallery[0]} alt={`${data.title} — zdjęcie`} width={900} height={700} className="w-full h-auto object-cover" />
          </div>
        )}
      </section>

      
      <section className="px-6 md:px-16 lg:px-24 pb-12 grid md:grid-cols-3 gap-8">
        {data.benefits.map((b, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6 text-center">
            <div className="text-2xl text-[#a67c52] mb-3">{b.icon}</div>
            <h3 className="font-semibold text-lg">{b.title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{b.text}</p>
          </div>
        ))}
      </section>

     
      {data.beforeAfter && data.beforeAfter.length > 0 && (
        <section className="px-6 md:px-16 lg:px-24 pb-12">
          <h2 className="text-[28px] md:text-[34px] font-serif font-semibold">Przed / Po</h2>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {data.beforeAfter.map((ba, idx) => <BeforeAfter key={idx} item={ba} />)}
          </div>
        </section>
      )}

      
      <section className="px-6 md:px-16 lg:px-24 pb-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#a67c52]/15 to-transparent border border-[#e7dfd6]">
          <div className="p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Chcesz podobny efekt?</h3>
            <p className="mt-3 text-[#5a4c3a] max-w-2xl">
              Umów konsultację — wspólnie zaplanujemy subtelne zmiany dopasowane do Twoich rysów i oczekiwań.
            </p>
            <div className="mt-6">
              <a
                href={data.booksyUrl ?? "/contact"}
                className="inline-block px-6 py-3 rounded-full bg-[#a67c52] text-white hover:opacity-95 transition shadow"
              >
                Umów przez Booksy
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


function BeforeAfter({ item }: { item: { before: string; after: string; alt: string } }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative bg-white rounded-2xl shadow overflow-hidden">
      <div className="relative w-full h-[460px]">
        <Image src={item.after} alt={`${item.alt} — po`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={item.before} alt={`${item.alt} — przed`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="absolute inset-y-0" style={{ left: `${pos}%`, transform: "translateX(-50%)" }} aria-hidden="true">
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
      <div className="p-4 md:p-6"><div className="text-gray-800">{item.alt}</div></div>
    </div>
    )
}