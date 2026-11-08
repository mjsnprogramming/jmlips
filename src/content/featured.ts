// Polecane zabiegi na stronie głównej (w tej kolejności, maksymalnie 3).
// Zmiana treści: edytuj tekst i zrób push.
// Zdjęcia: pliki w public/… – ścieżka zaczyna się od "/images/…".

type Text = { pl: string; en: string };

export type FeaturedTreatment = { title: Text; subtitle: Text; description: Text; image: string };

export const FEATURED: FeaturedTreatment[] = [
  {
    title: {
      pl: "Usuwanie kwasu hialuronowego",
      en: "Hyaluronic Acid Dissolving"
    },
    subtitle: {
      pl: "A Fresh Start",
      en: "A Fresh Start"
    },
    description: {
      pl: "Rozpuszczanie wypełniacza na bazie kwasu hialuronowego, gdy potrzebna jest korekta lub zmiana dotychczasowego efektu.",
      en: "Dissolving hyaluronic acid filler when correction or a change to a previous result is needed."
    },
    image: "/images/featured/usuwanie-kwasu-hialuronowego.jpg"
  },
  {
    title: {
      pl: "Stymulatory tkankowe",
      en: "Tissue Stimulators"
    },
    subtitle: {
      pl: "Regeneracja Skóry",
      en: "Skin Regeneration"
    },
    description: {
      pl: "Wsparcie naturalnych procesów regeneracji skóry, poprawa jej jakości i przywrócenie promiennego wyglądu.",
      en: "Supporting the skin’s natural regenerative processes to improve skin quality and restore a radiant appearance."
    },
    image: "/images/featured/stymulatory-tkankowe.jpg"
  },
  {
    title: {
      pl: "Modelowanie ust",
      en: "Lip Augmentation"
    },
    subtitle: {
      pl: "Fresh & Natural",
      en: "Fresh & Natural"
    },
    description: {
      pl: "Subtelne podkreślenie kształtu i objętości ust, z zachowaniem naturalnych proporcji i harmonii twarzy.",
      en: "Enhancing the shape and volume of the lips while preserving natural proportions and facial harmony."
    },
    image: "/images/featured/modelowanie-ust.jpg"
  }
];
