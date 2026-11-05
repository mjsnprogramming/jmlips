"use client";

import { useState } from "react";
import { ADDRESS, MAP_EMBED_URL, MAPS_DIRECTIONS_URL } from "@/lib/links";

const COPY = {
  pl: {
    eyebrow: "Lokalizacja",
    heading: "Znajdziesz mnie przy",
    headingAccent: "ul. Szafirowej.",
    intro: `Gabinet JM Studio znajduje się w ${ADDRESS.place} przy ${ADDRESS.street}, ${ADDRESS.city}. Wizytę możesz wygodnie zarezerwować online przez Booksy lub skontaktować się przez Instagram.`,
    points: [
      `Gabinet w ${ADDRESS.place}`,
      `${ADDRESS.street.replace("ul. ", "")}, ${ADDRESS.city}`,
      "Zamość – wizyty wyjazdowe w wybrane dni",
    ],
    openMaps: "Otwórz w Google Maps",
    route: "Otwórz trasę",
    newTab: "(otwiera się w nowej karcie)",
    showMap: "Pokaż mapę",
    mapNote: "Mapa Google wczyta się dopiero po kliknięciu – razem z plikami cookie Google.",
    mapTitle: `Mapa dojazdu do JM Studio w ${ADDRESS.place}, ${ADDRESS.street}, ${ADDRESS.city}`,
  },
  en: {
    eyebrow: "Location",
    heading: "You will find me on",
    headingAccent: "Szafirowa Street.",
    intro: `JM Studio is located at ${ADDRESS.place}, ${ADDRESS.street}, ${ADDRESS.city}. You can book your visit online via Booksy or get in touch on Instagram.`,
    points: [
      `Treatment room at ${ADDRESS.place}`,
      `${ADDRESS.street.replace("ul. ", "")}, ${ADDRESS.city}`,
      "Zamość – visits on selected days",
    ],
    openMaps: "Open in Google Maps",
    route: "Get directions",
    newTab: "(opens in a new tab)",
    showMap: "Show map",
    mapNote: "Google Maps loads only after you click – together with Google cookies.",
    mapTitle: `Map to JM Studio at ${ADDRESS.place}, ${ADDRESS.street}, ${ADDRESS.city}`,
  },
} as const;

export default function ContactMap({ lang = "pl" }: { lang?: "pl" | "en" }) {
  const copy = COPY[lang];
  // Mapa Google (i jej ciasteczka) ładuje się dopiero po świadomym kliknięciu.
  const [showMap, setShowMap] = useState(false);

  return (
    <section className="bg-[#f7f3ed] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <div>
          <p className="mb-5 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.28em] text-brand sm:text-sm">
            {copy.eyebrow} <span className="h-px w-12 bg-[#c8a987]" aria-hidden="true" />
          </p>

          <h2 className="max-w-xl font-heading text-[2.65rem] font-normal leading-[1.08] tracking-[-0.045em] text-[#171513] sm:text-5xl">
            {copy.heading} <span className="text-brand-light">{copy.headingAccent}</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#625d58] sm:text-[1.02rem] sm:leading-8">
            {copy.intro}
          </p>

          <ul className="mt-7 space-y-3.5 text-sm text-[#625d58] sm:text-[0.95rem]">
            {copy.points.map((item) => (
              <li key={item} className="flex items-center gap-4">
                <span className="h-px w-8 shrink-0 bg-brand-light" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href={MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full bg-brand px-7 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand motion-reduce:transition-none sm:mt-9 sm:min-w-[245px]"
          >
            {copy.openMaps} <span aria-hidden="true">→</span>
            <span className="sr-only">{copy.newTab}</span>
          </a>
        </div>

        <div className="relative overflow-hidden rounded-[1.75rem] border border-[#e6d8c8] bg-white p-2.5 shadow-[0_18px_48px_rgba(75,54,35,0.11)] sm:rounded-[2rem] sm:p-3">
          <div className="relative h-[350px] overflow-hidden rounded-[1.35rem] bg-[#efe6db] sm:h-[400px] sm:rounded-[1.55rem] lg:h-[420px]">
            {showMap ? (
              <iframe
                title={copy.mapTitle}
                src={MAP_EMBED_URL}
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-full w-full"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-4 px-6 pb-24 text-center sm:pb-6">
                <svg viewBox="0 0 24 24" className="h-10 w-10 text-brand-soft" fill="none" aria-hidden="true">
                  <path
                    d="M19 10.2c0 5-7 11-7 11s-7-6-7-11a7 7 0 1 1 14 0Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <button
                  type="button"
                  onClick={() => setShowMap(true)}
                  className="rounded-full border border-brand-soft bg-white/80 px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand motion-reduce:transition-none"
                >
                  {copy.showMap}
                </button>
                <p className="max-w-xs text-xs leading-5 text-[#706963]">{copy.mapNote}</p>
              </div>
            )}

            <div className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] rounded-2xl bg-[#fcfaf7]/95 p-4 shadow-[0_12px_32px_rgba(75,54,35,0.14)] backdrop-blur-sm sm:bottom-4 sm:left-4 sm:w-[215px] sm:p-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-brand">
                JM Studio · {ADDRESS.place}
              </p>
              <p className="mt-2 text-sm font-medium text-[#201d1a]">{ADDRESS.street}</p>
              <p className="text-xs text-[#706963]">{ADDRESS.city}</p>
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-xs text-brand underline decoration-[#c9ad8e] underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                {copy.route} <span aria-hidden="true">→</span>
                <span className="sr-only">{copy.newTab}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
