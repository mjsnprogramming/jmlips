"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/links";
import {
  PORTFOLIO_CATEGORIES,
  type PortfolioCategoryId,
  type PortfolioImage,
  type PortfolioImagesByCategory,
} from "@/lib/portfolio";

type Language = "pl" | "en";

type GalleryImage = PortfolioImage & { alt: string };

const copy = {
  pl: {
    eyebrow: "PORTFOLIO",
    heading: "Efekty zabiegów",
    introduction:
      "Zobacz realne efekty mojej pracy i przekonaj się, jak subtelne zmiany potrafią podkreślić naturalne piękno.",
    galleryLabel: "REALNE EFEKTY • NATURALNY WYGLĄD",
    empty: "Zdjęcia z tego zabiegu znajdziesz na moim Instagramie.",
    instagram: "Więcej zdjęć z zabiegów na moim Instagramie",
    newTab: "otwiera się w nowej karcie",
    previous: "Poprzednia strona galerii",
    next: "Następna strona galerii",
    openImage: "Otwórz zdjęcie",
    closeImage: "Zamknij podgląd zdjęcia",
    page: "Strona",
    of: "z",
  },
  en: {
    eyebrow: "PORTFOLIO",
    heading: "Treatment Results",
    introduction:
      "See the real results of my work and discover how subtle changes can highlight your natural beauty.",
    galleryLabel: "REAL RESULTS • NATURAL LOOK",
    empty: "You will find photos of this treatment on my Instagram.",
    instagram: "More treatment photos on my Instagram",
    newTab: "opens in a new tab",
    previous: "Previous gallery page",
    next: "Next gallery page",
    openImage: "Open photo",
    closeImage: "Close photo preview",
    page: "Page",
    of: "of",
  },
} satisfies Record<Language, Record<string, string>>;

const PAGE_SIZE = 6;

export default function PortfolioClient({
  lang,
  imagesByCategory,
}: {
  lang: Language;
  imagesByCategory: PortfolioImagesByCategory;
}) {
  const text = copy[lang];
  const [activeCategoryId, setActiveCategoryId] = useState<PortfolioCategoryId>(
    PORTFOLIO_CATEGORIES[0].id,
  );
  const [pageByCategory, setPageByCategory] = useState<
    Partial<Record<PortfolioCategoryId, number>>
  >({});
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const imageTriggerRef = useRef<HTMLButtonElement | null>(null);

  const activeCategory =
    PORTFOLIO_CATEGORIES.find((category) => category.id === activeCategoryId) ??
    PORTFOLIO_CATEGORIES[0];
  const label = activeCategory.label[lang];
  const images: GalleryImage[] = (imagesByCategory[activeCategory.id] ?? []).map(
    (image, index) => ({
      ...image,
      alt:
        lang === "pl"
          ? `${label} — zdjęcie ${index + 1}`
          : `${label} — photo ${index + 1}`,
    }),
  );
  const pageCount = Math.ceil(images.length / PAGE_SIZE);
  const currentPage = Math.min(pageByCategory[activeCategory.id] ?? 1, Math.max(pageCount, 1));
  const visibleImages = images.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  function selectCategory(categoryId: PortfolioCategoryId) {
    setActiveCategoryId(categoryId);
    setPageByCategory((pages) => ({ ...pages, [categoryId]: 1 }));
  }

  function goToPage(page: number) {
    setPageByCategory((pages) => ({ ...pages, [activeCategory.id]: page }));
  }

  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedImage(null);
      } else if (event.key === "Tab") {
        // The close button is the only focusable control in the lightbox.
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      window.cancelAnimationFrame(focusFrame);
      window.requestAnimationFrame(() => imageTriggerRef.current?.focus());
    };
  }, [selectedImage]);

  return (
    <div className="bg-[#fbf8f4] text-[#2f2924]">
      <section className="px-5 pb-12 pt-20 sm:px-8 sm:pb-16 sm:pt-28">
        <header className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-light sm:text-sm">
            {text.eyebrow}
          </p>
          <h1 className="mt-5 font-heading text-5xl font-medium leading-[1.04] tracking-[-0.04em] text-[#2f2924] sm:text-6xl md:text-7xl">
            {text.heading}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#6b625b] sm:mt-7 sm:text-lg sm:leading-8">
            {text.introduction}
          </p>
        </header>

        <nav
          aria-label={lang === "pl" ? "Kategorie zabiegów" : "Treatment categories"}
          className="mx-auto mt-10 max-w-7xl overflow-x-auto pb-2 sm:mt-14"
        >
          <div className="flex min-w-max justify-center gap-2.5 px-1 sm:min-w-0 sm:flex-wrap sm:gap-3">
            {PORTFOLIO_CATEGORIES.map((category) => {
              const isActive = category.id === activeCategoryId;

              return (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => selectCategory(category.id)}
                  className={`rounded-full border px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:ring-offset-2 motion-reduce:transition-none sm:px-6 ${
                    isActive
                      ? "border-brand bg-brand text-white"
                      : "border-[#e6d8c8] bg-[#fffdfa] text-[#5f5145] hover:border-[#c9ad8e] hover:bg-[#f5eee6]"
                  }`}
                >
                  {category.label[lang]}
                </button>
              );
            })}
          </div>
        </nav>
      </section>

      <section
        aria-labelledby="portfolio-gallery-heading"
        className="px-5 pb-20 pt-8 sm:px-8 sm:pb-28 sm:pt-10"
      >
        <div className="mx-auto max-w-7xl">
          <header className="mb-8 flex flex-col gap-3 border-b border-[#e6d8c8] pb-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <h2
              id="portfolio-gallery-heading"
              className="font-heading text-3xl font-medium tracking-[-0.03em] text-[#2f2924] sm:text-4xl"
              aria-live="polite"
            >
              {activeCategory.label[lang]}
            </h2>
            <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brand-light sm:text-xs">
              {text.galleryLabel}
            </p>
          </header>

          {visibleImages.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
              {visibleImages.map((image) => (
                <figure key={image.id} className="group min-w-0">
                  <button
                    ref={(node) => {
                      if (selectedImage?.id === image.id) {
                        imageTriggerRef.current = node;
                      }
                    }}
                    type="button"
                    onClick={(event) => {
                      imageTriggerRef.current = event.currentTarget;
                      setSelectedImage(image);
                    }}
                    aria-label={`${text.openImage}: ${image.alt}`}
                    className="relative block w-full overflow-hidden rounded-[1.4rem] border border-[#eadbc9] bg-[#f4eee7] shadow-[0_12px_34px_rgba(47,41,36,0.07)] outline-none transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(47,41,36,0.12)] focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:ring-offset-4 motion-reduce:transform-none motion-reduce:transition-none sm:rounded-[1.65rem]"
                  >
                    <span className="relative block aspect-[4/5] w-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.015] motion-reduce:transition-none"
                      />
                    </span>
                  </button>
                </figure>
              ))}
            </div>
          ) : (
            <p className="py-16 text-center font-heading text-xl leading-8 text-[#786b5e] sm:py-20 sm:text-2xl">
              {text.empty}
            </p>
          )}

          {pageCount > 1 && (
            <nav
              aria-label={lang === "pl" ? "Strony galerii" : "Gallery pages"}
              className="mt-10 flex items-center justify-center gap-5 sm:mt-14"
            >
              <button
                type="button"
                onClick={() => goToPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                aria-label={text.previous}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9cbbb] text-lg text-[#5c4939] transition-colors hover:bg-[#efe5d9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transition-none"
              >
                <span aria-hidden="true">←</span>
              </button>
              <p
                aria-live="polite"
                className="min-w-20 text-center text-sm font-medium tabular-nums text-[#6b625b]"
              >
                <span className="sr-only">{text.page} </span>
                {currentPage} / {pageCount}
              </p>
              <button
                type="button"
                onClick={() => goToPage(Math.min(pageCount, currentPage + 1))}
                disabled={currentPage === pageCount}
                aria-label={text.next}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9cbbb] text-lg text-[#5c4939] transition-colors hover:bg-[#efe5d9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transition-none"
              >
                <span aria-hidden="true">→</span>
              </button>
            </nav>
          )}

          <div className="mt-12 flex justify-center sm:mt-16">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full max-w-[760px] items-center justify-between gap-5 rounded-[1.75rem] border border-[#e5d8ca] bg-white/80 px-6 py-5 shadow-sm transition hover:border-brand-soft hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand motion-reduce:transition-none sm:px-8"
            >
              <div className="flex items-center gap-5">
                <FaInstagram aria-hidden="true" className="h-8 w-8 shrink-0 text-brand" />
                <span className="text-base text-gray-600 sm:text-lg">{text.instagram}</span>
              </div>
              <span className="flex shrink-0 items-center gap-5 rounded-2xl border border-[#d5b895] px-5 py-3 font-semibold text-brand transition group-hover:bg-brand group-hover:text-white motion-reduce:transition-none sm:min-w-[210px] sm:justify-center">
                <span className="hidden sm:inline">{INSTAGRAM_HANDLE}</span>
                <span aria-hidden="true" className="text-xl leading-none">→</span>
                <span className="sr-only">({text.newTab})</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#211b17]/90 p-3 backdrop-blur-sm sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.alt}
            className="relative w-full max-w-6xl rounded-[1.25rem] border border-white/15 bg-[#211b17] p-2 shadow-2xl sm:rounded-[1.75rem] sm:p-3"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label={text.closeImage}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-[#211b17]/75 text-2xl leading-none text-white transition-colors hover:bg-[#211b17] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white motion-reduce:transition-none sm:right-6 sm:top-6"
            >
              <span aria-hidden="true">×</span>
            </button>

            <div className="relative h-[76dvh] max-h-[52rem] min-h-[16rem] w-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
