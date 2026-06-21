"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { FAQItem } from "@/lib/faq";

type OfferFAQProps = {
  items: FAQItem[];
};

export default function OfferFAQ({ items }: OfferFAQProps) {
  const [openId, setOpenId] = useState<number | null>(
    items.length > 0 ? items[0].id : null
  );

  if (!items.length) return null;

  return (
    <section className="bg-[#faf7f4] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-sm uppercase tracking-[0.3em] text-[#b8946f]">
            FAQ
          </span>

          <div className="mx-auto mb-8 h-px w-16 bg-[#b8946f]" />

          <h2 className="font-serif text-4xl font-light text-zinc-900 md:text-6xl">
            Najczęściej zadawane pytania
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600 md:text-lg">
            Wszystko, co warto wiedzieć przed wizytą.
            <br />
            Zebraliśmy najważniejsze informacje, aby rozwiać Twoje wątpliwości.
          </p>
        </div>

        <div className="overflow-hidden rounded-sm border border-[#e7ddd2] bg-white/70 shadow-sm backdrop-blur-sm">
          {items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="border-b border-[#e7ddd2] last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-7 text-left md:px-10"
                >
                  <span className="font-serif text-2xl font-light text-zinc-900">
                    {item.question}
                  </span>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b8946f] text-2xl font-light text-[#b8946f]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 text-base leading-8 text-zinc-600 md:px-10 md:text-lg">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}