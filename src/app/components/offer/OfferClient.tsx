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
    duration: "Czas",
    effect: "Efekt",
    close: "Zamknij szczegóły zabiegu",
    previous: "Poprzedni zabieg",
    next: "Następny zabieg",
    position: "Pozycja",
    empty: "Aktualnie nie ma dostępnych zabiegów.",
  },
  en: {
    offer: "Treatments",
    heading: "Treatments tailored to your needs.",
    introduction: "Explore the options and learn more about each treatment.",
    duration: "Duration",
    effect: "Effect",
    close: "Close treatment details",
    previous: "Previous treatment",
    next: "Next treatment",
    position: "Position",
    empty: "There are no treatments available right now.",
  },
} as const;

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
  variant: "editorial" | "modal";
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

  if (variant === "editorial") {
    return (
      <div className="ml-auto aspect-[4/3] w-full max-w-[34rem] overflow-hidden bg-[#f1e9df]">
        {image}
      </div>
    );
  }

  return (
    <div className="mb-8 aspect-[16/9] max-h-[20rem] overflow-hidden bg-[#f8f3ed]">
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
  const [activeIndex, setActiveIndex] = useState(0);

  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = Boolean(prefersReducedMotion);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const triggerSlugRef = useRef<string | null>(null);
  const sliderRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);

  const copy = interfaceCopy[lang];
  const treatmentCount = treatments.length;
  const safeIndex = treatmentCount > 0 ? activeIndex % treatmentCount : 0;
  const currentTreatment = treatments[safeIndex] ?? null;
  const transitionDuration = reduceMotion ? 0 : 0.42;
  const modalDuration = reduceMotion ? 0.01 : 0.22;

  function goToTreatment(direction: -1 | 1) {
    if (treatmentCount < 2) return;

    setActiveIndex(
      (index) => (index + direction + treatmentCount) % treatmentCount,
    );
  }

  useEffect(() => {
    if (treatmentCount === 0) {
      setActiveIndex(0);
      return;
    }

    setActiveIndex((index) => index % treatmentCount);
  }, [treatmentCount]);

  useEffect(() => {
    function handleSliderKeyDown(event: KeyboardEvent) {
      if (selectedTreatment) return;
      if (!sliderRef.current?.contains(document.activeElement)) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToTreatment(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        goToTreatment(1);
      }
    }

    window.addEventListener("keydown", handleSliderKeyDown);
    return () => window.removeEventListener("keydown", handleSliderKeyDown);
  }, [selectedTreatment, treatmentCount]);

  useEffect(() => {
    if (!selectedTreatment) return;

    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    function handleDialogKeyDown(event: KeyboardEvent) {
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

    window.addEventListener("keydown", handleDialogKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      window.removeEventListener("keydown", handleDialogKeyDown);
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
          <header className="mb-14 max-w-4xl sm:mb-20">
            <h1 className="max-w-3xl font-serif text-5xl font-medium leading-[1.04] tracking-[-0.035em] text-[#332a23] sm:text-6xl">
              {copy.heading}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#6b625b] sm:text-lg sm:leading-8">
              {copy.introduction}
            </p>
          </header>

          {currentTreatment ? (
            <section
              ref={sliderRef}
              aria-label={copy.offer}
              aria-roledescription="carousel"
              onTouchStart={(event) => {
                touchStartX.current = event.touches[0]?.clientX ?? null;
              }}
              onTouchEnd={(event) => {
                if (touchStartX.current === null) return;

                const endX =
                  event.changedTouches[0]?.clientX ?? touchStartX.current;
                const delta = endX - touchStartX.current;
                touchStartX.current = null;

                if (Math.abs(delta) < 48) return;
                goToTreatment(delta < 0 ? 1 : -1);
              }}
              className="outline-none focus-visible:ring-2 focus-visible:ring-[#8b6543] focus-visible:ring-offset-8 focus-visible:ring-offset-[#fbf8f4]"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.article
                  key={currentTreatment.slug}
                  aria-live="polite"
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 14,
                  }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: reduceMotion ? 0 : -10,
                  }}
                  transition={{ duration: transitionDuration }}
                  className="grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-12 lg:gap-x-14"
                >
                  <div className="flex flex-col justify-center lg:col-span-5">
                    {currentTreatment.category?.trim() && (
                      <p className="mb-5 font-[var(--font-quicksand)] text-xs font-semibold uppercase tracking-[0.2em] text-[#8b6543]">
                        {currentTreatment.category}
                      </p>
                    )}

                    <p className="mb-5 font-[var(--font-quicksand)] text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#a28b76]">
                      {copy.position} {String(safeIndex + 1).padStart(2, "0")} /{" "}
                      {String(treatmentCount).padStart(2, "0")}
                    </p>

                    <h2 className="max-w-xl font-serif text-5xl font-medium leading-[1.02] tracking-[-0.04em] text-[#332a23] sm:text-6xl lg:text-7xl">
                      {currentTreatment.title}
                    </h2>
                  </div>

                  <div className="lg:col-span-5 lg:col-start-8">
                    {currentTreatment.image ? (
                      <TreatmentImage
                        key={`${currentTreatment.slug}-${currentTreatment.image}`}
                        src={currentTreatment.image}
                        alt={currentTreatment.title}
                        variant="editorial"
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className="ml-auto aspect-[4/3] w-full max-w-[34rem] bg-[#f1e9df]"
                      />
                    )}
                  </div>

                  <div className="lg:col-span-6 lg:col-start-2 lg:row-start-2">
                    <div className="relative mx-auto min-h-[22rem] w-full max-w-[30rem] sm:min-h-[27rem] lg:min-h-[30rem]">
                      <div className="absolute left-0 top-0 z-0 aspect-[0.88/1] w-[72%] overflow-hidden bg-[#efe5d9]">
                        {currentTreatment.image2 && (
                          <img
                            src={currentTreatment.image2}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover"
                          />
                        )}
                      </div>

                      <div className="absolute right-0 top-1/2 z-10 aspect-[4/3] w-[48%] -translate-y-1/2 overflow-hidden bg-[#e7dbcf]">
                        {currentTreatment.image3 && (
                          <img
                            src={currentTreatment.image3}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover"
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 lg:col-start-8 lg:row-start-2 lg:pt-8">
                    {currentTreatment.category?.trim() && (
                      <p className="mb-5 font-[var(--font-quicksand)] text-[0.68rem] font-semibold uppercase tracking-[0.19em] text-[#8b6543]">
                        {currentTreatment.category}
                      </p>
                    )}

                    <div className="max-w-xl space-y-4 text-base leading-7 text-[#6b625b] sm:text-lg sm:leading-8">
                      {currentTreatment.details
                        .split(/\n\s*\n/)
                        .filter(Boolean)
                        .map((paragraph, index) => (
                          <p key={index}>
                            {renderAccentedText(
                              paragraph,
                              currentTreatment.title,
                            )}
                          </p>
                        ))}
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>

              <div className="mt-12 flex items-center justify-between border-t border-[#e7dbcf] pt-5 sm:mt-16">
                <p className="font-[var(--font-quicksand)] text-xs font-semibold uppercase tracking-[0.16em] text-[#8b6543]">
                  {String(safeIndex + 1).padStart(2, "0")}
                  <span className="mx-2 text-[#c5b5a4]">/</span>
                  {String(treatmentCount).padStart(2, "0")}
                </p>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => goToTreatment(-1)}
                    disabled={treatmentCount < 2}
                    aria-label={copy.previous}
                    className="flex h-12 w-12 items-center justify-center border border-[#d9cbbb] text-xl text-[#5c4939] transition-colors hover:bg-[#efe5d9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b6543] disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transition-none"
                  >
                    <span aria-hidden="true">←</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => goToTreatment(1)}
                    disabled={treatmentCount < 2}
                    aria-label={copy.next}
                    className="flex h-12 w-12 items-center justify-center border border-[#d9cbbb] text-xl text-[#5c4939] transition-colors hover:bg-[#efe5d9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b6543] disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transition-none"
                  >
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </section>
          ) : (
            <p className="py-16 text-center font-serif text-2xl text-[#6b625b]">
              {copy.empty}
            </p>
          )}

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
                  className="relative max-h-[88dvh] w-full max-w-3xl overflow-hidden border border-[#e7dbcf] bg-[#fffdfa]"
                >
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={() => setSelectedTreatment(null)}
                    className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center border border-[#e7dbcf] bg-[#fbf8f4] text-2xl leading-none text-[#332a23] transition-colors hover:bg-[#eee5dc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805a3a] focus-visible:ring-offset-2 motion-reduce:transition-none sm:right-6 sm:top-6"
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

                    <div
                      className={`${
                        modalFacts.length > 0 ? "mt-8" : "mt-7"
                      } space-y-5`}
                    >
                      {detailParagraphs.map((paragraph, index) => {
                        const isEffect = /^(?:Efekt|Effect):\s*/i.test(
                          paragraph.trim(),
                        );

                        return isEffect ? (
                          <p
                            key={index}
                            className="border-l-2 border-[#b89775] bg-[#f8f3ed] px-5 py-4 text-[0.95rem] leading-7 text-[#51463d] sm:text-base sm:leading-8"
                          >
                            {renderAccentedText(
                              paragraph,
                              selectedTreatment.title,
                            )}
                          </p>
                        ) : (
                          <p
                            key={index}
                            className="text-[0.95rem] leading-7 text-[#5e554d] sm:text-base sm:leading-8"
                          >
                            {renderAccentedText(
                              paragraph,
                              selectedTreatment.title,
                            )}
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

      <OfferFAQ
  lang={lang}
  groups={treatments.map((treatment) => ({
    slug: treatment.slug,
    title: treatment.title,
    items: faqItems.filter(
      (item) => item.treatmentSlug === treatment.slug,
    ),
  }))}
/>
    </div>
  );
}