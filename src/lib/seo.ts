import type { Metadata } from "next";
import {
  ADDRESS,
  BOOKSY_URL,
  INSTAGRAM_URL,
  MAPS_DIRECTIONS_URL,
  PHONE_DISPLAY,
} from "./links";

// TODO: tymczasowa domena – podmienić na właściwą (albo ustawić zmienną NEXT_PUBLIC_SITE_URL).
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://jm-studio.example").replace(
  /\/+$/,
  "",
);

export const SITE_NAME = "JM Studio";

type Lang = "pl" | "en";
type PageCopy = { path: string; title: string; description: string };
type PageKey = "home" | "about" | "offer" | "pricelist" | "portfolio" | "contact" | "privacy" | "terms";

/** Tytuły i opisy stron dla Google. Bez obietnic efektów (reklama usług medycznych). */
export const PAGES: Record<PageKey, Partial<Record<Lang, PageCopy>>> = {
  home: {
    pl: {
      path: "/",
      title: "JM Studio – medycyna estetyczna Lublin i Zamość",
      description:
        "Gabinet medycyny estetycznej JM Studio w Lublinie (Vital Skin, ul. Szafirowa 7A) oraz wizyty w Zamościu. Modelowanie ust, wolumetria twarzy, stymulatory tkankowe. Rezerwacja przez Booksy.",
    },
    en: {
      path: "/en",
      title: "JM Studio – aesthetic medicine in Lublin and Zamość",
      description:
        "JM Studio aesthetic medicine in Lublin (Vital Skin, Szafirowa 7A) with visits in Zamość. Lip augmentation, facial volumisation, tissue stimulators. Book online via Booksy.",
    },
  },
  about: {
    pl: {
      path: "/pl/about",
      title: "O mnie – Julia Majewska",
      description:
        "Poznaj Julię Majewską i JM Studio w Lublinie: indywidualne konsultacje, ponad 20 szkoleń z kosmetologii i medycyny estetycznej, opieka na każdym etapie zabiegu.",
    },
    en: {
      path: "/en/about",
      title: "About me – Julia Majewska",
      description:
        "Meet Julia Majewska of JM Studio in Lublin: individual consultations, more than 20 courses in cosmetology and aesthetic medicine, and care at every stage of your treatment.",
    },
  },
  offer: {
    pl: {
      path: "/pl/offer",
      title: "Zabiegi – modelowanie ust, wolumetria, stymulatory tkankowe",
      description:
        "Zabiegi medycyny estetycznej w JM Studio w Lublinie: modelowanie ust, wolumetria brody, policzków i kątów żuchwy, stymulatory tkankowe oraz usuwanie kwasu hialuronowego.",
    },
    en: {
      path: "/en/offer",
      title: "Treatments – lips, facial volumisation, tissue stimulators",
      description:
        "Aesthetic medicine treatments at JM Studio in Lublin: lip augmentation, chin, cheek and jawline volumisation, tissue stimulators and hyaluronic acid dissolving.",
    },
  },
  pricelist: {
    pl: {
      path: "/pl/pricelist",
      title: "Cennik zabiegów",
      description:
        "Cennik zabiegów medycyny estetycznej w JM Studio – Lublin i Zamość. Sprawdź ceny modelowania ust, wolumetrii twarzy i stymulatorów tkankowych.",
    },
    en: {
      path: "/en/pricelist",
      title: "Prices",
      description:
        "Price list for aesthetic medicine treatments at JM Studio in Lublin and Zamość: lip augmentation, facial volumisation and tissue stimulators.",
    },
  },
  portfolio: {
    pl: {
      path: "/pl/portfolio",
      title: "Portfolio – zdjęcia z zabiegów",
      description:
        "Zdjęcia z zabiegów wykonanych w JM Studio w Lublinie: modelowanie ust, wolumetria twarzy, stymulatory tkankowe.",
    },
    en: {
      path: "/en/portfolio",
      title: "Portfolio – treatment photos",
      description:
        "Photos of treatments performed at JM Studio in Lublin: lip augmentation, facial volumisation and tissue stimulators.",
    },
  },
  contact: {
    pl: {
      path: "/pl/contact",
      title: "Kontakt i dojazd – Lublin, ul. Szafirowa 7A",
      description: `Umów wizytę w JM Studio przez Booksy, Instagram lub telefonicznie (${PHONE_DISPLAY}). Gabinet w ${ADDRESS.place}, ${ADDRESS.street}, ${ADDRESS.city}.`,
    },
    en: {
      path: "/en/contact",
      title: "Contact and directions – Lublin, Szafirowa 7A",
      description: `Book your visit at JM Studio via Booksy, Instagram or by phone (${PHONE_DISPLAY}). Treatment room at ${ADDRESS.place}, ${ADDRESS.street}, ${ADDRESS.city}.`,
    },
  },
  privacy: {
    pl: {
      path: "/pl/privacy",
      title: "Polityka prywatności",
      description: "Polityka prywatności i informacje o przetwarzaniu danych osobowych w JM Studio.",
    },
  },
  terms: {
    pl: {
      path: "/pl/terms",
      title: "Regulamin",
      description: "Regulamin korzystania ze strony i usług JM Studio.",
    },
  },
};

/** Metadane strony: tytuł, opis, adres kanoniczny, wersje językowe i podgląd linku. */
export function pageMetadata(key: PageKey, lang: Lang): Metadata {
  const page = PAGES[key];
  const current = page[lang] ?? page.pl!;

  const languages: Record<string, string> = {};
  if (page.pl) languages.pl = page.pl.path;
  if (page.en) languages.en = page.en.path;
  if (page.pl) languages["x-default"] = page.pl.path;

  return {
    // Strona główna ma pełny tytuł; pozostałe dostają dopisek z layoutu ("… | JM Studio").
    title: key === "home" ? { absolute: current.title } : current.title,
    description: current.description,
    alternates: { canonical: current.path, languages },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: lang === "pl" ? "pl_PL" : "en_GB",
      url: current.path,
      title: current.title,
      description: current.description,
      images: [{ url: "/images/hero-poster.jpg", alt: "JM Studio" }],
    },
  };
}

/** Dane firmy dla Google (schema.org, JSON-LD). */
export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "JM Studio – Julia Majewska",
    url: SITE_URL,
    image: `${SITE_URL}/images/hero-poster.jpg`,
    logo: `${SITE_URL}/images/logo.jpg`,
    telephone: PHONE_DISPLAY.replace(/\s/g, ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${ADDRESS.street} (${ADDRESS.place})`,
      postalCode: ADDRESS.city.split(" ")[0],
      addressLocality: "Lublin",
      addressCountry: "PL",
    },
    hasMap: MAPS_DIRECTIONS_URL,
    areaServed: [
      { "@type": "City", name: "Lublin" },
      { "@type": "City", name: "Zamość" },
    ],
    sameAs: [INSTAGRAM_URL, BOOKSY_URL],
  };
}
