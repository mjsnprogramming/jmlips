"use client";

/* eslint-disable @next/next/no-img-element -- ACF supplies runtime image URLs; the production host is not available in this copy. */

import OfferFAQ from "@/app/components/offer/OfferFAQ";
import type { FAQItem } from "@/lib/faq";
import type { Treatment } from "@/lib/allTreatments";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type OfferClientProps = {
  faqItems: FAQItem[];
  lang?: "pl" | "en";
  treatments: Treatment[];
  /** Wartość parametru ?treatment= z adresu (tytuł lub slug zabiegu). */
  initialTreatment?: string;
};

const interfaceCopy = {
  pl: {
    offer: "Oferta",
    heading: "Zabiegi dobrane do Twoich potrzeb.",
    introduction:
      "Poznaj możliwości i wybierz zabieg, o którym chcesz dowiedzieć się więcej.",
    list: "Lista zabiegów",
    position: (current: number, total: number) => `Zabieg ${current} z ${total}`,
    previous: "Poprzedni zabieg",
    next: "Następny zabieg",
    empty: "Aktualnie nie ma dostępnych zabiegów.",
  },
  en: {
    offer: "Treatments",
    heading: "Treatments tailored to your needs.",
    introduction: "Explore the options and learn more about each treatment.",
    list: "Treatment list",
    position: (current: number, total: number) => `Treatment ${current} of ${total}`,
    previous: "Previous treatment",
    next: "Next treatment",
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

const treatmentTitleAliases: Record<"pl" | "en", Record<string, string[]>> = {
  pl: {
    // Stare i nowe nazwy tego samego zabiegu – linki działają niezależnie od tytułu w WordPressie.
    hialuronidaza: ["usuwanie kwasu hialuronowego"],
    "usuwanie kwasu hialuronowego": ["hialuronidaza"],
  },
  en: {
    "tissue stimulators": ["biostimulators"],
    hyaluronidase: [
      "hyaluronic acid removal",
      "hyaluronic acid dissolving",
    ],
    "hyaluronic acid dissolving": ["hyaluronidase", "hyaluronic acid removal"],
  },
};

function renderAccentedText(text: string, title: string) {
  const accent = treatmentAccents[title];
  const index = accent ? text.indexOf(accent) : -1;

  if (!accent || index < 0) return text;

  return (
    <>
      {text.slice(0, index)}
      <span className="font-medium text-brand">{accent}</span>
      {text.slice(index + accent.length)}
    </>
  );
}

function TreatmentImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <div className="ml-auto aspect-[4/3] w-full max-w-[34rem] overflow-hidden rounded-[1.75rem] bg-[#f1e9df] shadow-[0_24px_60px_-32px_rgba(47,41,36,0.42)] ring-1 ring-[#eadbc9]/80">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

function findTreatmentIndex(
  treatments: Treatment[],
  selector: string,
  lang: "pl" | "en",
) {
  const normalizedSelector = selector.trim().toLocaleLowerCase(lang);
  if (!normalizedSelector) return -1;

  const candidateTitles = new Set([
    normalizedSelector,
    ...(treatmentTitleAliases[lang][normalizedSelector] ?? []),
  ]);

  return treatments.findIndex(
    (treatment) =>
      treatment.slug === selector ||
      candidateTitles.has(treatment.title.trim().toLocaleLowerCase(lang)),
  );
}

export default function OfferClient({
  faqItems,
  lang = "pl",
  treatments,
  initialTreatment,
}: OfferClientProps) {
  const [activeIndex, setActiveIndex] = useState(() => {
    const index = initialTreatment
      ? findTreatmentIndex(treatments, initialTreatment, lang)
      : -1;
    return index >= 0 ? index : 0;
  });

  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = Boolean(prefersReducedMotion);
  const sliderRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const copy = interfaceCopy[lang];
  const treatmentCount = treatments.length;
  const safeIndex = treatmentCount > 0 ? activeIndex % treatmentCount : 0;
  const currentTreatment = treatments[safeIndex] ?? null;
  const transitionDuration = reduceMotion ? 0 : 0.42;

  /** Zmiana zabiegu przez użytkownika: zapisuje wybór w adresie (?treatment=slug). */
  function selectTreatment(index: number) {
    const treatment = treatments[index];
    if (!treatment) return;

    setActiveIndex(index);

    const url = new URL(window.location.href);
    url.searchParams.set("treatment", treatment.slug);
    window.history.replaceState(window.history.state, "", url);
  }

  function goToTreatment(direction: -1 | 1) {
    if (treatmentCount < 2) return;
    selectTreatment((safeIndex + direction + treatmentCount) % treatmentCount);
  }

  // Wejście z linku (np. z polecanych zabiegów) – także przy przejściu bez przeładowania strony.
  useEffect(() => {
    if (!initialTreatment) return;

    const index = findTreatmentIndex(treatments, initialTreatment, lang);
    if (index >= 0) setActiveIndex(index);
  }, [initialTreatment, lang, treatments]);

  // Na telefonie lista zabiegów przewija się poziomo – aktywny zabieg ma być widoczny.
  useEffect(() => {
    const active = listRef.current?.querySelector<HTMLElement>('[aria-current="true"]');
    active?.scrollIntoView({
      block: "nearest",
      inline: "center",
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [safeIndex, reduceMotion]);

  useEffect(() => {
    function handleSliderKeyDown(event: KeyboardEvent) {
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
  });

  // FAQ tylko dla zabiegów, które mają pytania.
  const faqGroups = treatments
    .map((treatment) => ({
      slug: treatment.slug,
      title: treatment.title,
      items: faqItems.filter((item) => item.treatmentSlug === treatment.slug),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="bg-[#fbf8f4] font-sans text-[#2f2924]">
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 max-w-4xl sm:mb-14">
            <h1 className="max-w-3xl font-heading text-5xl font-medium leading-[1.04] tracking-[-0.035em] text-[#332a23] sm:text-6xl">
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
              className="outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-8 focus-visible:ring-offset-[#fbf8f4]"
            >
              {treatmentCount > 1 && (
                <nav aria-label={copy.list} className="mb-12 sm:mb-16">
                  <div
                    ref={listRef}
                    className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
                  >
                    {treatments.map((treatment, index) => {
                      const isActive = index === safeIndex;

                      return (
                        <button
                          key={treatment.slug}
                          type="button"
                          onClick={() => selectTreatment(index)}
                          aria-current={isActive ? "true" : undefined}
                          className={[
                            "shrink-0 whitespace-nowrap rounded-full border px-5 py-2.5 text-sm transition-colors motion-reduce:transition-none",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbf8f4]",
                            isActive
                              ? "border-brand bg-brand text-white"
                              : "border-[#e2d5c6] bg-white/70 text-[#5c4939] hover:border-brand-soft hover:bg-white",
                          ].join(" ")}
                        >
                          {treatment.title}
                        </button>
                      );
                    })}
                  </div>
                </nav>
              )}

              {/* Krótki komunikat dla czytnika ekranu zamiast czytania całego opisu. */}
              <p aria-live="polite" className="sr-only">
                {`${copy.position(safeIndex + 1, treatmentCount)}: ${currentTreatment.title}`}
              </p>

              <AnimatePresence mode="wait" initial={false}>
                <motion.article
                  key={currentTreatment.slug}
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
                      <p className="mb-5 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                        {currentTreatment.category}
                      </p>
                    )}

                    <h2 className="max-w-xl font-heading text-5xl font-medium leading-[1.02] tracking-[-0.04em] text-[#332a23] sm:text-6xl lg:text-7xl">
                      {currentTreatment.title}
                    </h2>
                  </div>

                  <div className="lg:col-span-5 lg:col-start-8">
                    {currentTreatment.image ? (
                      <TreatmentImage
                        key={`${currentTreatment.slug}-${currentTreatment.image}`}
                        src={currentTreatment.image}
                        alt={currentTreatment.title}
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className="ml-auto aspect-[4/3] w-full max-w-[34rem] rounded-[1.75rem] bg-[#f1e9df] ring-1 ring-[#eadbc9]/80"
                      />
                    )}
                  </div>

                  <div className="lg:col-span-6 lg:col-start-2 lg:row-start-2">
                    <div className="relative mx-auto min-h-[22rem] w-full max-w-[30rem] sm:min-h-[27rem] lg:min-h-[30rem]">
                      <div className="absolute left-0 top-0 z-0 aspect-[0.88/1] w-[72%] overflow-hidden rounded-[1.6rem] bg-[#efe5d9] shadow-[0_24px_54px_-34px_rgba(47,41,36,0.5)] ring-1 ring-white/70">
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

                      <div className="absolute right-0 top-1/2 z-10 aspect-[4/3] w-[48%] -translate-y-1/2 overflow-hidden rounded-[1.35rem] bg-[#e7dbcf] shadow-[0_20px_45px_-28px_rgba(47,41,36,0.55)] ring-1 ring-white/80">
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
                      <p className="mb-5 font-heading text-[0.68rem] font-semibold uppercase tracking-[0.19em] text-brand">
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

              <div className="mt-12 flex items-center justify-end gap-5 border-t border-[#e7dbcf] pt-5 sm:mt-16">
                {treatmentCount > 1 && (
                  <p aria-hidden="true" className="text-sm tabular-nums tracking-[0.12em] text-[#6b625b]">
                    {safeIndex + 1} / {treatmentCount}
                  </p>
                )}

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => goToTreatment(-1)}
                    disabled={treatmentCount < 2}
                    aria-label={copy.previous}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d9cbbb] text-xl text-[#5c4939] transition-colors hover:bg-[#efe5d9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transition-none"
                  >
                    <span aria-hidden="true">←</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => goToTreatment(1)}
                    disabled={treatmentCount < 2}
                    aria-label={copy.next}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d9cbbb] text-xl text-[#5c4939] transition-colors hover:bg-[#efe5d9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transition-none"
                  >
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </section>
          ) : (
            <p className="py-16 text-center font-heading text-2xl text-[#6b625b]">
              {copy.empty}
            </p>
          )}
        </div>
      </section>

      <OfferFAQ lang={lang} groups={faqGroups} />
    </div>
  );
}
