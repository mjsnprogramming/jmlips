"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { AnimatePresence, motion } from "framer-motion";

import "swiper/css";
import type { Testimonial } from "@/lib/testimonials";

type Props = {
  testimonials: Testimonial[];
};

const INSTAGRAM_URL = "https://www.instagram.com/juliamajewska_studio_/";
const SLIDE_SPEED = 650;

// Wygląd karty zależy od jej odległości od środka (0 = środek, 1 = obok, 2 = skraj).
const FAN = [
  { x: 0, rotate: 0, scale: 1.12, z: 50 },
  { x: 66, rotate: 5, scale: 0.98, z: 40 },
  { x: 142, rotate: 8, scale: 0.9, z: 30 },
] as const;

/** Odległość slajdu od aktywnego z uwzględnieniem pętli: wynik od -n/2 do n/2. */
function loopOffset(index: number, active: number, length: number) {
  let offset = (((index - active) % length) + length) % length;
  if (offset > length / 2) offset -= length;
  return offset;
}

function getFanStyles(offset: number): { slide: CSSProperties; card: CSSProperties } {
  const distance = Math.abs(offset);
  const fan = FAN[distance as 0 | 1 | 2];

  if (!fan) {
    return {
      slide: { zIndex: 0, opacity: 0, pointerEvents: "none" },
      card: { opacity: 0, transform: "scale(0.85)" },
    };
  }

  const side = Math.sign(offset);

  return {
    slide: { zIndex: fan.z, opacity: 1 },
    card: {
      opacity: 1,
      // Karty z boku są przysuwane do środka i lekko obrócone na zewnątrz.
      transform: `translateX(${-side * fan.x}px) rotate(${side * fan.rotate}deg) scale(${fan.scale})`,
    },
  };
}

export default function InstagramTestimonials({ testimonials }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);

  const [isReady, setIsReady] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedReview, setSelectedReview] = useState<string | null>(null);

  const items = testimonials.filter((item) => Boolean(item.image));
  const count = items.length;
  // Pętla Swipera potrzebuje co najmniej 3 slajdów; przy 1 opinii nawigacja nie ma sensu.
  const canLoop = count >= 3;
  const hasNavigation = count > 1;

  const closeModal = useCallback(() => {
    setSelectedReview(null);
  }, []);

  // Modal: Esc zamyka, blokada scrolla strony, fokus na "Zamknij" i powrót fokusu po zamknięciu.
  useEffect(() => {
    if (!selectedReview) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeModal();
      // Jedyny element do fokusu w okienku to "Zamknij" - Tab nie wychodzi na stronę pod spodem.
      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      lastTriggerRef.current?.focus();
    };
  }, [selectedReview, closeModal]);

  if (!count) return null;

  return (
    <section className="relative overflow-x-hidden overflow-y-visible bg-[#f9f5f0] py-24">
      <div className="mx-auto max-w-[1500px] px-4">
        <div className="mb-16 text-center">
          <p className="mb-2 font-script text-3xl text-[#b98b5c]">Wasze opinie</p>

          <h2 className="mb-5 font-heading text-5xl font-semibold tracking-tight text-[#a67c52] md:text-6xl">
            Co mówią klienci
          </h2>

          <p className="font-sans text-lg text-gray-500">
            Prawdziwe opinie z Instagrama
          </p>
        </div>

        <div className="relative w-full overflow-x-clip overflow-y-visible">
          <Swiper
            loop={canLoop}
            centeredSlides
            slidesPerView="auto"
            spaceBetween={0}
            speed={SLIDE_SPEED}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setActiveIndex(swiper.realIndex ?? 0);
              setIsReady(true);
            }}
            onRealIndexChange={(swiper) => setActiveIndex(swiper.realIndex ?? 0)}
            className={[
              "mx-auto w-full max-w-[1420px] !overflow-visible py-16 transition-opacity duration-300",
              "[&_.swiper-slide]:!overflow-visible [&_.swiper-wrapper]:!overflow-visible",
              isReady ? "opacity-100" : "opacity-0",
            ].join(" ")}
          >
            {items.map((item, index) => {
              const offset = canLoop ? loopOffset(index, activeIndex, count) : index - activeIndex;
              const isActive = offset === 0;
              const fan = getFanStyles(offset);

              return (
                <SwiperSlide
                  key={item.id}
                  style={fan.slide}
                  className="relative !flex !w-[210px] justify-center !overflow-visible sm:!w-[230px] md:!w-[250px] xl:!w-[280px]"
                >
                  <div
                    style={{ ...fan.card, transitionDuration: `${SLIDE_SPEED}ms` }}
                    className="relative origin-bottom transition-[transform,opacity] ease-out will-change-transform motion-reduce:transition-none"
                  >
                    <button
                      type="button"
                      tabIndex={Math.abs(offset) <= 2 ? 0 : -1}
                      onClick={(event) => {
                        if (isActive) {
                          lastTriggerRef.current = event.currentTarget;
                          setSelectedReview(item.image);
                        } else {
                          swiperRef.current?.slideToLoop(index);
                        }
                      }}
                      className={[
                        "block rounded-[2.5rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6a43]",
                        isActive ? "cursor-zoom-in" : "cursor-pointer",
                      ].join(" ")}
                      aria-label={
                        isActive
                          ? `Powiększ opinię klienta ${index + 1} z ${count}`
                          : `Pokaż opinię klienta ${index + 1} z ${count}`
                      }
                    >
                      <img
                        src={item.image}
                        alt=""
                        loading={Math.abs(offset) <= 2 ? "eager" : "lazy"}
                        decoding="async"
                        draggable={false}
                        className={[
                          "h-[380px] w-full rounded-[2.5rem] object-cover shadow-2xl transition duration-500 motion-reduce:transition-none sm:h-[400px] xl:h-[420px]",
                          isActive ? "hover:scale-[1.02] motion-reduce:hover:scale-100" : "",
                        ].join(" ")}
                      />
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {hasNavigation && (
            <div className="mt-3 flex flex-wrap justify-center gap-4">
              {items.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => swiperRef.current?.slideToLoop(index)}
                  aria-label={`Przejdź do opinii ${index + 1} z ${count}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className={[
                    "h-2.5 w-2.5 rounded-full transition-all duration-300 motion-reduce:transition-none",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6a43] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f9f5f0]",
                    activeIndex === index ? "scale-125 bg-[#b98b5c]" : "bg-[#ded6ce]",
                  ].join(" ")}
                />
              ))}
            </div>
          )}

          <div className="mt-10 flex justify-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full max-w-[760px] items-center justify-between gap-5 rounded-[1.75rem] border border-[#e5d8ca] bg-white/80 px-6 py-5 shadow-sm transition hover:border-[#b98b5c] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6a43] sm:px-8"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-[#8f6a43]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-9 w-9"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                  </svg>
                </div>

                <span className="text-base text-gray-600 sm:text-lg">
                  Zobacz więcej opinii na moim Instagramie
                </span>
              </div>

              <div className="flex shrink-0 items-center gap-5 rounded-2xl border border-[#d5b895] px-5 py-3 font-semibold text-[#8f6a43] transition group-hover:bg-[#8f6a43] group-hover:text-white sm:min-w-[210px] sm:justify-center">
                <span className="hidden sm:inline">@jm.studio_</span>
                <span className="text-xl leading-none" aria-hidden="true">
                  →
                </span>
              </div>
            </a>
          </div>

          {hasNavigation && (
            <>
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Poprzednia opinia"
                className="absolute left-8 top-1/2 sm:left-20 z-[80] flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#b98b5c] shadow-[0_14px_35px_rgba(90,64,43,0.14)] transition hover:scale-105 hover:bg-[#fffaf5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6a43] active:scale-95"
              >
                <span className="text-2xl leading-none" aria-hidden="true">
                  ‹
                </span>
              </button>

              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Następna opinia"
                className="absolute right-8 top-1/2 sm:right-20 z-[80] flex h-14 w-14 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-white text-[#b98b5c] shadow-[0_14px_35px_rgba(90,64,43,0.14)] transition hover:scale-105 hover:bg-[#fffaf5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6a43] active:scale-95"
              >
                <span className="text-2xl leading-none" aria-hidden="true">
                  ›
                </span>
              </button>
            </>
          )}
        </div>
      </div>

      <AnimatePresence>
        {selectedReview && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Opinia klienta"
              className="relative w-full max-w-[430px]"
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeModal}
                className="absolute -right-3 -top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl text-[#8f6a43] shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6a43]"
                aria-label="Zamknij opinię"
              >
                <span aria-hidden="true">×</span>
              </button>

              <img
                src={selectedReview}
                alt="Powiększona opinia klienta z Instagrama"
                className="max-h-[88vh] w-full rounded-[2rem] object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
