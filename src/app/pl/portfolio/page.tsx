'use client'

import Image from 'next/image'
import { useState } from 'react'

const BEFORE_AFTER_ITEMS = [
  {
    id: 1,
    title: 'Modelowanie ust',
    before: '/images/lips2.jpg',
    after: '/images/lips1.jpg',
  },
  {
    id: 2,
    title: 'Mezoterapia',
    before: '/images/lips1.jpg',
    after: '/images/lips2.jpg',
  },
]

export default function PortfolioPage() {
  return (
    <main className="bg-[#fbf8f4] text-[#2f2924]">
      <section className="relative overflow-hidden px-6 py-28">
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-[#a67c52]/10 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#a67c52]/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-5 inline-flex rounded-full bg-[#a67c52] px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Portfolio
          </p>

          <h1 className="text-5xl font-semibold tracking-tight text-[#111827] md:text-7xl">
            Efekty zabiegów
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-600">
            Przesuń suwak, aby zobaczyć różnicę przed i po zabiegu.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {BEFORE_AFTER_ITEMS.map((item) => (
              <BeforeAfterCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function BeforeAfterCard({
  item,
}: {
  item: {
    id: number
    title: string
    before: string
    after: string
  }
}) {
  const [slider, setSlider] = useState(50)

  return (
    <div className="overflow-hidden rounded-[2.5rem] border border-[#eadbc9] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
      <div className="relative h-[520px] overflow-hidden">
        <Image
          src={item.before}
          alt={`${item.title} before`}
          fill
          className="object-cover"
        />

        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${slider}%` }}
        >
          <Image
            src={item.after}
            alt={`${item.title} after`}
            fill
            className="object-cover"
          />
        </div>

        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${slider}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl">
            ↔
          </div>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={slider}
          onChange={(e) => setSlider(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>

      <div className="flex items-center justify-between p-7">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a67c52]">
            Przed / Po
          </p>

          <p className="mt-2 text-lg font-semibold">
            {item.title}
          </p>
        </div>

        <p className="text-sm text-gray-500">
          przesuń suwak
        </p>
      </div>
    </div>
  )
}