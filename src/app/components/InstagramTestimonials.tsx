"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";


const opinionsImages = [
  "/images/opinion1.webp",
  "/images/opinion2.webp",
  "/images/opinion3.webp",
  "/images/opinion4.webp",
  "/images/opinion5.webp",
  "/images/opinion6.webp",
  "/images/opinion7.webp",
  "/images/opinion8.webp",
  "/images/opinion9.webp",
];


function updateSlideTransforms(swiper: SwiperType) {
  if (!swiper || swiper.destroyed || !swiper.slides?.length) return;

  const slides = Array.from(swiper.slides) as HTMLElement[];
  const activeIndex = swiper.activeIndex;

  const getSlide = (index: number) => {
    const length = slides.length;
    return slides[(index + length) % length];
  };

  const visibleSlides = new Map<HTMLElement, keyof typeof styles>();

  const styles = {
    center: { x: 0, rotate: 0, scale: 1.12, z: 50, opacity: 1 },
    "left-near": { x: 66, rotate: -5, scale: 0.98, z: 40, opacity: 1 },
    "left-far": { x: 142, rotate: -8, scale: 0.9, z: 30, opacity: 1 },
    "right-near": { x: -66, rotate: 5, scale: 0.98, z: 40, opacity: 1 },
    "right-far": { x: -142, rotate: 8, scale: 0.9, z: 30, opacity: 1 },
  } as const;

  visibleSlides.set(getSlide(activeIndex), "center");
  visibleSlides.set(getSlide(activeIndex - 1), "left-near");
  visibleSlides.set(getSlide(activeIndex - 2), "left-far");
  visibleSlides.set(getSlide(activeIndex + 1), "right-near");
  visibleSlides.set(getSlide(activeIndex + 2), "right-far");

  slides.forEach((slide) => {
    const card = slide.querySelector<HTMLElement>(".opinion-card");
    if (!card) return;

    const position = visibleSlides.get(slide);
    const style = position ? styles[position] : null;

    slide.style.zIndex = style ? String(style.z) : "0";
    slide.style.pointerEvents = style ? "auto" : "none";

    if (!style) {
      slide.style.opacity = "0";
      card.style.opacity = "0";
      card.style.transform = "scale(0.85)";
      return;
    }

    slide.style.opacity = "1";
    card.style.opacity = String(style.opacity);
    card.style.zIndex = String(style.z);
    card.style.transform = `
      translateX(${style.x}px)
      rotate(${style.rotate}deg)
      scale(${style.scale})
    `;
  });
}
function scheduleSlideTransforms(swiper: SwiperType) {
  requestAnimationFrame(() => updateSlideTransforms(swiper));
}

export default function InstagramTestimonials() {
    const [isReady, setIsReady] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeDot, setActiveDot] = useState(0);

    function updateActiveDot(swiper: SwiperType) {
        const realIndex = swiper.realIndex ?? 0;
        setActiveDot(realIndex % 5);
    }

  function initSlider(swiper: SwiperType) {
    swiperRef.current = swiper;

    requestAnimationFrame(() => {
      updateSlideTransforms(swiper);
      updateActiveDot(swiper);
      setIsReady(true);
    });    
  }
  return (
    <section className="bg-[#f9f5f0] py-24 overflow-x-hidden overflow-y-visible relative">
      <div className="max-w-[1500px] mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-script text-[#b98b5c] text-3xl mb-2">
  Wasze opinie
</p>

<h2 className="font-heading text-5xl md:text-6xl font-semibold text-[#a67c52] mb-5 tracking-tight">
  Opinie klientek
</h2>

<p className="font-sans text-gray-500 text-lg">
  Prawdziwe opinie moich klientek z Instagrama
</p>
        </div>

        <div className="relative w-full overflow-x-clip overflow-y-visible">
          <Swiper
            modules={[Navigation]}
            loop
            centeredSlides
            slidesPerView="auto"
            spaceBetween={0}
            speed={650}
            navigation={{
              nextEl: ".opinions-next",
              prevEl: ".opinions-prev",
            }}
            onSwiper={initSlider}
onInit={initSlider}
onSetTranslate={scheduleSlideTransforms}
onResize={scheduleSlideTransforms}
onSlideChangeTransitionStart={scheduleSlideTransforms}
onSlideChangeTransitionEnd={scheduleSlideTransforms}
onActiveIndexChange={(swiper) => {
  scheduleSlideTransforms(swiper);
  updateActiveDot(swiper);
}}
onSetTransition={(swiper, duration) => {
  if (!swiper?.slides?.length) return;

  swiper.slides.forEach((slide) => {
    const card = slide.querySelector<HTMLElement>(".opinion-card");

    if (card) {
      card.style.transitionDuration = `${duration}ms`;
    }
  });
}}
            className={`
  w-full
  max-w-[1420px]
  mx-auto
  !overflow-visible
  py-16
  transition-opacity
  duration-300
  [&_.swiper-wrapper]:!overflow-visible
  [&_.swiper-slide]:!overflow-visible
  ${isReady ? "opacity-100" : "opacity-0"}
`}>
            {opinionsImages.map((img) => (
              <SwiperSlide
                key={img}
                className="
                  relative  
                  !w-[210px]
                  sm:!w-[230px]
                  md:!w-[250px]
                  xl:!w-[280px]
                  !flex
                  justify-center
                  !overflow-visible
                "
              >
                <div
                  className="
                    opinion-card
                    relative
                    origin-bottom
                    transition-[transform,opacity]
                    ease-out
                    will-change-transform
                  "
                >
                  <img
                    src={img}
                    alt="Opinia klientki"
                    loading="eager"
                    decoding="async"
                    className="
                      h-[380px]
                      sm:h-[400px]
                      xl:h-[420px]
                      w-full
                      object-cover
                      rounded-[2.5rem]
                      shadow-2xl
                    "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-3 flex justify-center gap-4" aria-hidden="true">
  {Array.from({ length: 5 }).map((_, index) => (
    <span
      key={index}
      className={`
        h-2.5
        w-2.5
        rounded-full
        transition-all
        duration-300
        ${
          activeDot === index
            ? "scale-125 bg-[#b98b5c]"
            : "bg-[#ded6ce]"
        }
      `}
    />
  ))}
</div>
          <div className="mt-10 flex justify-center">
  <a
    href="https://www.instagram.com/juliamajewska_studio_/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group
      flex
      w-full
      max-w-[760px]
      items-center
      justify-between
      gap-5
      rounded-[1.75rem]
      border
      border-[#e5d8ca]
      bg-white/70
      px-6
      py-5
      shadow-sm
      backdrop-blur
      transition
      hover:border-[#b98b5c]
      hover:bg-white
      sm:px-8
    "
  >
    <div className="flex items-center gap-5">
      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-2xl
          text-[#a67c52]
        "
      >
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

      <span className="text-base text-gray-500 sm:text-lg">
        Zobacz więcej opinii na naszym Instagramie
      </span>
    </div>

    <div
      className="
        flex
        shrink-0
        items-center
        gap-5
        rounded-2xl
        border
        border-[#d5b895]
        px-5
        py-3
        font-semibold
        text-[#a67c52]
        transition
        group-hover:bg-[#a67c52]
        group-hover:text-white
        sm:min-w-[210px]
        sm:justify-center
      "
    >
      <span className="hidden sm:inline">@jm.studio_</span>
      <span className="text-xl leading-none">→</span>
    </div>
  </a>
</div>

          <button
  type="button"
  aria-label="Poprzednia opinia"
  className="
    opinions-prev
    absolute
    left-20
    top-1/2
    z-[80]
    flex
    h-14
    w-14
    -translate-x-1/2
    -translate-y-1/2
    items-center
    justify-center
    rounded-full
    bg-white
    text-[#b98b5c]
    shadow-[0_14px_35px_rgba(90,64,43,0.14)]
    transition
    hover:scale-105
    hover:bg-[#fffaf5]
    active:scale-95
  "
>
  <span className="text-2xl leading-none">‹</span>
</button>

<button
  type="button"
  aria-label="Następna opinia"
  className="
    opinions-next
    absolute
    right-20
    top-1/2
    z-[80]
    flex
    h-14
    w-14
    translate-x-1/2
    -translate-y-1/2
    items-center
    justify-center
    rounded-full
    bg-white
    text-[#b98b5c]
    shadow-[0_14px_35px_rgba(90,64,43,0.14)]
    transition
    hover:scale-105
    hover:bg-[#fffaf5]
    active:scale-95
  "
>
  <span className="text-2xl leading-none">›</span>
</button>
        </div>
      </div>
    </section>
  );
}