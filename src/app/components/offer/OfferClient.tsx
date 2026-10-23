"use client";

/* eslint-disable @next/next/no-img-element -- ACF supplies runtime image URLs; the production host is not available in this copy. */

import OfferFAQ from "@/app/components/offer/OfferFAQ";
import type { FAQItem } from "@/lib/faq";
import type { Treatment } from "@/lib/allTreatments";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

type OfferClientProps = {
  faqItems: FAQItem[];
  lang?: "pl" | "en";
  treatments: Treatment[];
};

const interfaceCopy = {
  pl: {
    offer: "Oferta",
    heading: "Zabiegi dobrane do Twoich potrzeb.",
    introduction:
      "Poznaj możliwości i wybierz zabieg, o którym chcesz dowiedzieć się więcej.",
    readMore: "Czytaj więcej",
    duration: "Czas",
    effect: "Efekt",
    close: "Zamknij szczegóły zabiegu",
  },
  en: {
    offer: "Treatments",
    heading: "Treatments tailored to your needs.",
    introduction: "Explore the options and learn more about each treatment.",
    readMore: "Read more",
    duration: "Duration",
    effect: "Effect",
    close: "Close treatment details",
  },
} as const;

const cardLayout = [
  "xl:col-span-7",
  "xl:col-span-5",
  "xl:col-span-4",
  "xl:col-span-4",
  "xl:col-span-4",
];

const treatmentAccents: Record<string, string> = {
  "Modelowanie ust": "konturu i kształtu ust",
  "Stymulatory tkankowe": "kolagenu i elastyny",
  "Wolumetria brody": "harmonizację jej rysów",
  "Wolumetria policzków": "uzupełnienie objętości",
  "Wolumetria kątów żuchwy": "bardziej wyrazistego kształtu",
};

function renderAccentedText(text: string, title: string) {
  const accent = treatmentAccents[title];
  const index = accent ? text.indexOf(accent) : -1;

  if (!accent || index < 0) return text;

  return (
    <>
      {text.slice(0, index)}
      <span className="font-medium text-[#9b7655]">{accent}</span>
      {text.slice(index + accent.length)}
    </>
  );
}

function TreatmentImage({
  src,
  alt,
  variant,
}: {
  src: string | null;
  alt: string;
  variant: "card" | "modal";
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) return null;

  const image = (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="h-full w-full object-cover"
      onError={() => setFailed(true)}
    />
  );

  if (variant === "card") {
    return (
      <span className="mb-6 block aspect-[16/10] overflow-hidden rounded-[1.15rem] bg-[#f8f3ed]">
        {image}
      </span>
    );
  }

  return (
    <div className="mb-8 aspect-[16/9] max-h-[20rem] overflow-hidden rounded-[1.2rem] bg-[#f8f3ed]">
      {image}
    </div>
  );
}

export default function OfferClient({
  faqItems,
  lang = "pl",
  treatments,
}: OfferClientProps) {
  const [selectedTreatment, setSelectedTreatment] =
    useState<Treatment | null>(null);

  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = Boolean(prefersReducedMotion);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const triggerSlugRef = useRef<string | null>(null);

  useEffect(() => {
    if (!selectedTreatment) return;

    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedTreatment(null);
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements =
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex="0"]',
        );

      if (!focusableElements?.length) {
        event.preventDefault();
        closeButtonRef.current?.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      window.cancelAnimationFrame(focusFrame);

      window.requestAnimationFrame(() => {
        const trigger = Array.from(
          document.querySelectorAll<HTMLButtonElement>(
            "[data-treatment-trigger]",
          ),
        ).find(
          (button) =>
            button.dataset.treatmentTrigger === triggerSlugRef.current,
        );

        trigger?.focus();
      });
    };
  }, [selectedTreatment]);

  function openTreatment(
    treatment: Treatment,
    trigger: HTMLButtonElement,
  ) {
    triggerSlugRef.current = trigger.dataset.treatmentTrigger ?? null;
    setSelectedTreatment(treatment);
  }

  const cardDuration = reduceMotion ? 0 : 0.38;
  const modalDuration = reduceMotion ? 0.01 : 0.22;
  const copy = interfaceCopy[lang];
  const detailParagraphs = selectedTreatment
    ? selectedTreatment.details.split(/\n\s*\n/).filter(Boolean)
    : [];
  const hasEffectParagraph = detailParagraphs.some((paragraph) =>
    /^(?:Efekt|Effect):\s*/i.test(paragraph.trim()),
  );
  const modalFacts = selectedTreatment
    ? [
        ...(selectedTreatment.duration?.trim()
          ? [{ label: copy.duration, value: selectedTreatment.duration.trim() }]
          : []),
        ...(selectedTreatment.effect?.trim() && !hasEffectParagraph
          ? [{ label: copy.effect, value: selectedTreatment.effect.trim() }]
          : []),
      ]
    : [];

  return (
    <div className="bg-[#fbf8f4] font-[var(--font-inter)] text-[#2f2924]">
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 max-w-4xl sm:mb-14">
            <p className="mb-5 font-[var(--font-quicksand)] text-xs font-semibold uppercase tracking-[0.2em] text-[#8b6543]">
              {copy.offer}
            </p>
            <h1 className="max-w-3xl font-serif text-5xl font-medium leading-[1.04] tracking-[-0.035em] text-[#332a23] sm:text-6xl">
              {copy.heading}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#6b625b] sm:text-lg sm:leading-8">
              {copy.introduction}
            </p>
          </header>

          <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 xl:grid-cols-12 xl:gap-5">
            {treatments.map((treatment, index) => (
              <motion.button
                key={treatment.slug}
                type="button"
                data-treatment-trigger={treatment.slug}
                aria-haspopup="dialog"
                aria-expanded={selectedTreatment?.slug === treatment.slug}
                aria-hidden={
                  selectedTreatment?.slug === treatment.slug || undefined
                }
                tabIndex={
                  selectedTreatment?.slug === treatment.slug ? -1 : 0
                }
                initial={
                  reduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 12 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -2, transition: { duration: 0.16 } }
                }
                whileTap={reduceMotion ? undefined : { scale: 0.995 }}
                transition={{
                  duration: cardDuration,
                  delay: reduceMotion ? 0 : Math.min(index * 0.045, 0.18),
                }}
                onClick={(event) =>
                  openTreatment(treatment, event.currentTarget)
                }
                className={`group w-full rounded-[1.65rem] border border-[#e7dbcf] bg-[#fffdfa] text-left transition-colors duration-200 hover:border-[#cdb79f] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b6543] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fbf8f4] motion-reduce:transition-none ${cardLayout[index] ?? "xl:col-span-4"} ${
                  selectedTreatment?.slug === treatment.slug
                    ? "pointer-events-none opacity-0"
                    : ""
                }`}
              >
                <span className="flex h-full min-h-[290px] flex-col p-6 sm:min-h-[310px] sm:p-8">
                  {treatment.image && (
                    <TreatmentImage
                      key={`card-${treatment.slug}-${treatment.image}`}
                      src={treatment.image}
                      alt={treatment.title}
                      variant="card"
                    />
                  )}
                  <span className="flex items-start justify-between gap-5">
                    {treatment.category?.trim() ? (
                      <span className="pt-1 font-[var(--font-quicksand)] text-[0.68rem] font-semibold uppercase tracking-[0.19em] text-[#8b6543]">
                        {treatment.category}
                      </span>
                    ) : (
                      <span />
                    )}
                    <span
                      aria-hidden="true"
                      className="-mt-2 font-serif text-5xl font-light leading-none tracking-[-0.06em] text-[#e6d9cc] sm:text-6xl"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>

                  <h2 className="mt-7 max-w-xl font-serif text-[1.75rem] font-medium leading-[1.12] tracking-[-0.025em] text-[#332a23] sm:text-3xl">
                    {treatment.title}
                  </h2>

                  <p className="mt-4 max-w-prose text-sm leading-6 text-[#6b625b] sm:text-[0.95rem] sm:leading-7">
                    {renderAccentedText(treatment.description, treatment.title)}
                  </p>

                  <span className="mt-auto inline-flex items-center justify-between gap-4 border-t border-[#eee5dc] pt-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#805a3a] transition-colors duration-200 group-hover:text-[#4f3928] motion-reduce:transition-none">
                    {copy.readMore}
                    <span
                      aria-hidden="true"
                      className="text-base transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                    >
                      →
                    </span>
                  </span>
                </span>
              </motion.button>
            ))}
          </div>

          <AnimatePresence>
            {selectedTreatment && (
              <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-[#211b17]/50 p-4 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: modalDuration }}
                onClick={() => setSelectedTreatment(null)}
              >
                <motion.article
                  ref={dialogRef}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="treatment-dialog-title"
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 12,
                    scale: reduceMotion ? 1 : 0.99,
                  }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 8,
                    scale: reduceMotion ? 1 : 0.99,
                  }}
                  transition={{
                    duration: modalDuration,
                    ...(reduceMotion
                      ? {}
                      : { type: "spring", stiffness: 320, damping: 30 }),
                  }}
                  onClick={(event) => event.stopPropagation()}
                  className="relative max-h-[88dvh] w-full max-w-3xl overflow-hidden rounded-[1.75rem] border border-[#e7dbcf] bg-[#fffdfa]"
                >
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={() => setSelectedTreatment(null)}
                    className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#e7dbcf] bg-[#fbf8f4] text-2xl leading-none text-[#332a23] transition-colors hover:bg-[#eee5dc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805a3a] focus-visible:ring-offset-2 motion-reduce:transition-none sm:right-6 sm:top-6"
                    aria-label={copy.close}
                  >
                    <span aria-hidden="true">×</span>
                  </button>

                  <div
                    tabIndex={0}
                    className="max-h-[88dvh] overflow-y-auto overscroll-contain px-6 pb-8 pt-20 sm:px-10 sm:pb-10 sm:pt-20 md:px-14 md:pb-12"
                  >
                    {selectedTreatment.image && (
                      <TreatmentImage
                        key={`modal-${selectedTreatment.slug}-${selectedTreatment.image}`}
                        src={selectedTreatment.image}
                        alt={selectedTreatment.title}
                        variant="modal"
                      />
                    )}
                    {selectedTreatment.category?.trim() && (
                      <p className="mb-4 font-[var(--font-quicksand)] text-xs font-semibold uppercase tracking-[0.2em] text-[#8b6543]">
                        {selectedTreatment.category}
                      </p>
                    )}

                    <h2
                      id="treatment-dialog-title"
                      className="max-w-2xl font-serif text-4xl font-medium leading-[1.08] tracking-[-0.03em] text-[#332a23] sm:text-5xl"
                    >
                      {selectedTreatment.title}
                    </h2>

                    {modalFacts.length > 0 && (
                      <dl className="mt-7 border-y border-[#e7dbcf]">
                        {modalFacts.map((fact, index) => (
                          <div
                            key={fact.label}
                            className={`grid grid-cols-[5.5rem_1fr] gap-4 py-4 sm:grid-cols-[7rem_1fr] ${
                              index > 0 ? "border-t border-[#eee5dc]" : ""
                            }`}
                          >
                            <dt className="pt-0.5 font-[var(--font-quicksand)] text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#8b6543]">
                              {fact.label}
                            </dt>
                            <dd className="text-sm leading-6 text-[#403830] sm:text-base">
                              {fact.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    )}

                    <div className={`${modalFacts.length > 0 ? "mt-8" : "mt-7"} space-y-5`}>
                      {detailParagraphs.map((paragraph, index) => {
                        const isEffect = /^(?:Efekt|Effect):\s*/i.test(
                          paragraph.trim(),
                        );

                        return isEffect ? (
                          <p
                            key={index}
                            className="border-l-2 border-[#b89775] bg-[#f8f3ed] px-5 py-4 text-[0.95rem] leading-7 text-[#51463d] sm:text-base sm:leading-8"
                          >
                            {renderAccentedText(paragraph, selectedTreatment.title)}
                          </p>
                        ) : (
                          <p
                            key={index}
                            className="text-[0.95rem] leading-7 text-[#5e554d] sm:text-base sm:leading-8"
                          >
                            {renderAccentedText(paragraph, selectedTreatment.title)}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </motion.article>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <OfferFAQ items={faqItems} />
    </div>
  );
}






