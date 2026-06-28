'use client'

import OfferFAQ from "@/app/components/offer/OfferFAQ";
import Image from 'next/image'
import { FAQItem } from "@/lib/faq";
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import type { Treatment } from "@/lib/allTreatments";

type OfferClientProps = {
  faqItems: FAQItem[];
  treatments: Treatment[];
}



export default function OfferClient({ faqItems, treatments }: OfferClientProps) {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null)

  return (
    <main className="bg-[#fbf8f4] text-[#2f2924]">
      <section className="relative overflow-hidden px-6 py-28">
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-[#a67c52]/10 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#a67c52]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <p className="mb-5 inline-flex rounded-full bg-[#a67c52] px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Treatments
            </p>

            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
              Treatments Tailored to Your Needs.
            </h1>

            <p className="mt-7 text-lg leading-8 text-gray-600">
              Click on a treatment to view the most important information without leaving the page.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {treatments.map((treatment, index) => {
              const isSelected = selectedTreatment?.slug === treatment.slug

              if (isSelected) {
                return (
                  <div 
                  key={treatment.slug}
                  className = "min-h-[560px] rounded-[2.5rem]"
                  />
                )
              }
              return (
              <motion.article
                key={treatment.slug}
                layoutId={`treatment-${treatment.slug}`}
                onClick={() => setSelectedTreatment(treatment)}
                className="group cursor-pointer overflow-hidden rounded-[2.5rem] border border-[#eadbc9] bg-white/75 shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
              >
                <div className="relative h-[340px] overflow-hidden">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                  <span className="absolute right-6 top-6 text-6xl font-semibold text-white/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/70">
                      {treatment.category}
                    </p>

                    <h2 className="text-2xl font-semibold leading-tight">
                      {treatment.title}
                    </h2>
                  </div>
                </div>

                <div className="p-7">
                  <p className="leading-7 text-gray-600">{treatment.description}</p>

                  <button
                    type="button"
                    className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#d7b995] bg-[#f9f5f0] px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#a67c52] transition-all duration-300 group-hover:bg-[#a67c52] group-hover:text-white"
                  >
                    Learn More
                    <span>→</span>
                  </button>
                </div>
              </motion.article>
            )})}
          </div>

          <AnimatePresence>
            {selectedTreatment && (
              <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-4 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedTreatment(null)}
              >
                <motion.article
                  layoutId={`treatment-${selectedTreatment.slug}`}
                  onClick={(e) => e.stopPropagation()}
                  className="relative grid max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[2.5rem] bg-white shadow-[0_40px_120px_rgba(0,0,0,0.35)] md:grid-cols-[0.95fr_1.05fr]"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedTreatment(null)}
                    className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-xl text-[#2f2924] shadow-lg backdrop-blur-md transition hover:scale-110"
                    aria-label="Zamknij"
                  >
                    ×
                  </button>

                  <div className="relative min-h-[320px] md:min-h-[620px]">
                    <Image
                      src={selectedTreatment.image}
                      alt={selectedTreatment.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="overflow-y-auto p-8 md:p-12">
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#a67c52]">
                      {selectedTreatment.category}
                    </p>

                    <h2 className="text-4xl font-semibold tracking-tight text-[#2f2924] md:text-5xl">
                      {selectedTreatment.title}
                    </h2>

                    <p className="mt-6 text-lg leading-9 text-gray-600">
                      {selectedTreatment.description}
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-[#f9f5f0] p-5">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#a67c52]">
                          Czas
                        </p>
                        <p className="mt-2 font-semibold text-[#2f2924]">
                          {selectedTreatment.duration}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-[#f9f5f0] p-5">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#a67c52]">
                          Result
                        </p>
                        <p className="mt-2 font-semibold text-[#2f2924]">
                          {selectedTreatment.effect}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 border-t border-[#eadbc9] pt-8">
                      <h3 className="text-xl font-semibold text-[#2f2924]">
                        Treatment Details
                      </h3>

                      <p className="mt-4 leading-8 text-gray-600">
                        {selectedTreatment.details}
                      </p>
                    </div>
                  </div>
                </motion.article>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      <OfferFAQ items={faqItems}/>
    </main>
  )
}