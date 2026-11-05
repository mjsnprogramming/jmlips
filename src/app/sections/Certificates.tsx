"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  certificate1?: string | null;
  certificate2?: string | null;
  /** Certyfikaty z WordPressa (typ "certyfikat"); pusta lista = zdjęcia zapasowe. */
  certificates?: string[];
  lang?: "pl" | "en";
};

const FALLBACK_GALLERY = [
  "/images/certificate3.webp",
  "/images/certificate4.webp",
  "/images/certificate5.webp",
  "/images/certificate6.webp",
];

const COPY = {
  pl: {
    eyebrow: "Szkolenia i certyfikaty",
    heading: "Nieustannie poszerzam swoją wiedzę i umiejętności.",
    intro:
      "Rozwój to dla mnie klucz do sukcesu, dlatego regularnie się szkolę. Uwielbiam to robić, bo każde szkolenie jeszcze bardziej napędza mnie do działania i motywuje do dalszego rozwoju.",
    alt: (n: number) => `Certyfikat ${n}`,
    open: "Powiększ",
    close: "Zamknij podgląd certyfikatu",
  },
  en: {
    eyebrow: "Training and certificates",
    heading: "Always expanding my knowledge and skills.",
    intro:
      "Growth is the key to success for me, which is why I train regularly. I love it, because every course gives me even more energy and motivation to keep developing.",
    alt: (n: number) => `Certificate ${n}`,
    open: "Enlarge",
    close: "Close certificate preview",
  },
} as const;

// Zdjęcia z WordPressa mogą pochodzić z dowolnego hosta – bez optymalizacji Next.
const isRemote = (src: string) => /^https?:\/\//.test(src);

export default function Certificates({
  certificate1,
  certificate2,
  certificates,
  lang = "pl",
}: Props) {
  const copy = COPY[lang];
  const featured = [
    certificate1 || "/images/certificate1.webp",
    certificate2 || "/images/certificate2.webp",
  ];
  const gallery = certificates?.filter(Boolean).length
    ? certificates.filter(Boolean)
    : FALLBACK_GALLERY;

  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!preview) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setPreview(null);
      if (event.key === "Tab") {
        event.preventDefault();
        closeRef.current?.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [preview]);

  function openPreview(event: React.MouseEvent<HTMLButtonElement>, src: string, alt: string) {
    triggerRef.current = event.currentTarget;
    setPreview({ src, alt });
  }

  const cardButton =
    "group relative block h-full w-full overflow-hidden cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4";

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-brand-light">
              {copy.eyebrow}
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-[#2f2924] md:text-5xl">
              {copy.heading}
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">{copy.intro}</p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {featured.map((src, index) => {
              const alt = copy.alt(index + 1);

              return (
                <div
                  key={`${src}-${index}`}
                  className={`overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] ${index === 1 ? "mt-10" : ""}`}
                >
                  <button
                    type="button"
                    onClick={(event) => openPreview(event, src, alt)}
                    aria-label={`${copy.open}: ${alt}`}
                    className={`${cardButton} rounded-[2rem]`}
                  >
                    <Image
                      src={src}
                      alt={alt}
                      width={500}
                      height={700}
                      unoptimized={isRemote(src)}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none"
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">
            {gallery.map((src, index) => {
              const alt = copy.alt(index + 3);

              return (
                <div
                  key={`${src}-${index}`}
                  className={`relative h-[340px] overflow-hidden rounded-[1.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] motion-reduce:transition-none ${
                    index % 2 === 1 ? "mt-8" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={(event) => openPreview(event, src, alt)}
                    aria-label={`${copy.open}: ${alt}`}
                    className={`${cardButton} rounded-[1.5rem]`}
                  >
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      sizes="(min-width: 768px) 25vw, 50vw"
                      unoptimized={isRemote(src)}
                      className="object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none"
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {preview && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#211b17]/90 p-3 sm:p-6"
          onClick={() => setPreview(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={preview.alt}
            className="relative h-[88dvh] w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={() => setPreview(null)}
              aria-label={copy.close}
              className="absolute right-2 top-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-[#211b17]/75 text-2xl leading-none text-white hover:bg-[#211b17] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span aria-hidden="true">×</span>
            </button>
            <Image
              src={preview.src}
              alt={preview.alt}
              fill
              sizes="100vw"
              unoptimized={isRemote(preview.src)}
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
