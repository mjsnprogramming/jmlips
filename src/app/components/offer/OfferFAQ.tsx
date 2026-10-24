"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { FAQItem } from "@/lib/faq";

type FAQGroup = {
  slug: string;
  title: string;
  items: FAQItem[];
};

type OfferFAQProps = {
  groups: FAQGroup[];
  lang?: "pl" | "en";
};

const copy = {
  pl: {
    label: "FAQ",
    heading: "Najczęściej zadawane pytania",
    introduction: (
      <>
        Wszystko, co warto wiedzieć przed wizytą.
        <br />
        Zebraliśmy najważniejsze informacje, aby rozwiać Twoje wątpliwości.
      </>
    ),
    empty: "Brak pytań dotyczących tego zabiegu.",
  },
  en: {
    label: "FAQ",
    heading: "Frequently asked questions",
    introduction: (
      <>
        Everything you need to know before your visit.
        <br />
        We have gathered the key information to answer your questions.
      </>
    ),
    empty: "There are no questions for this treatment yet.",
  },
} as const;

export default function OfferFAQ({
  groups,
  lang = "pl",
}: OfferFAQProps) {
  const [openGroupSlug, setOpenGroupSlug] = useState<string | null>(null);
  const [openQuestionId, setOpenQuestionId] = useState<number | null>(null);
  const text = copy[lang];

  if (!groups.length) return null;

  function toggleGroup(slug: string) {
    setOpenGroupSlug((current) => {
      const next = current === slug ? null : slug;

      if (next !== current) {
        setOpenQuestionId(null);
      }

      return next;
    });
  }

  return (
    <section className="bg-[#faf7f4] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-sm uppercase tracking-[0.3em] text-[#b8946f]">
            {text.label}
          </span>

          <div className="mx-auto mb-8 h-px w-16 bg-[#b8946f]" />

          <h2 className="font-serif text-4xl font-light text-zinc-900 md:text-6xl">
            {text.heading}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-600 md:text-lg">
            {text.introduction}
          </p>
        </div>

        <div className="overflow-hidden rounded-sm border border-[#e7ddd2] bg-white/70 shadow-sm backdrop-blur-sm">
          {groups.map((group) => {
            const isGroupOpen = openGroupSlug === group.slug;
            const groupPanelId = `faq-group-${group.slug}`;

            return (
              <div
                key={group.slug}
                className={`border-b border-[#e7ddd2] last:border-b-0 ${
                  isGroupOpen
                    ? "border-l-4 border-l-[#b8946f] bg-[#f5efe8]"
                    : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleGroup(group.slug)}
                  aria-expanded={isGroupOpen}
                  aria-controls={groupPanelId}
                  className={`flex w-full items-center justify-between gap-6 px-6 py-7 text-left transition-colors md:px-10 ${
                    isGroupOpen ? "bg-[#f5efe8]" : "hover:bg-[#faf7f4]"
                  }`}
                >
                  <span
                    className={`font-serif text-2xl font-light ${
                      isGroupOpen ? "text-[#805a3a]" : "text-zinc-900"
                    }`}
                  >
                    {group.title}
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b8946f] text-2xl font-light text-[#b8946f]"
                  >
                    {isGroupOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isGroupOpen && (
                    <motion.div
                      id={groupPanelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      {group.items.length > 0 ? (
                        <div className="border-t border-[#e7ddd2] bg-white/80">
                          {group.items.map((item) => {
                            const isQuestionOpen =
                              openQuestionId === item.id;
                            const answerId = `faq-answer-${group.slug}-${item.id}`;

                            return (
                              <div
                                key={item.id}
                                className="border-b border-[#e7ddd2] last:border-b-0"
                              >
                                <button
                                  type="button"
                                  onClick={() =>
                                    setOpenQuestionId(
                                      isQuestionOpen ? null : item.id,
                                    )
                                  }
                                  aria-expanded={isQuestionOpen}
                                  aria-controls={answerId}
                                  className="flex w-full items-center justify-between gap-6 px-6 py-7 text-left md:px-10"
                                >
                                  <span className="font-serif text-2xl font-light text-zinc-900">
                                    {item.question}
                                  </span>

                                  <span
                                    aria-hidden="true"
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#b8946f] text-2xl font-light text-[#b8946f]"
                                  >
                                    {isQuestionOpen ? "−" : "+"}
                                  </span>
                                </button>

                                <AnimatePresence initial={false}>
                                  {isQuestionOpen && (
                                    <motion.div
                                      id={answerId}
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{
                                        height: "auto",
                                        opacity: 1,
                                      }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{
                                        duration: 0.35,
                                        ease: "easeInOut",
                                      }}
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
                      ) : (
                        <div className="border-t border-[#e7ddd2] bg-white/80 px-6 py-7 text-base leading-8 text-zinc-600 md:px-10 md:text-lg">
                          {text.empty}
                        </div>
                      )}
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