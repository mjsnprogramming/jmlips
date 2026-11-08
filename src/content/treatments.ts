// Zabiegi na stronie oferty (w tej kolejności).
// slug = adres zabiegu (?treatment=slug) i powiązanie z FAQ; akapity w details oddziela pusta linia (\n\n).
// Zdjęcia: pliki w public/… – ścieżka zaczyna się od "/images/…".

type Text = { pl: string; en: string };

export type OfferTreatment = {
  slug: string;
  title: Text;
  category: Text;
  description: Text;
  details: Text;
  /** 0–3 zdjęcia: pierwsze duże, dwa kolejne mniejsze. */
  images: string[];
};

export const TREATMENTS: OfferTreatment[] = [
  {
    slug: "modelowanie-ust",
    title: {
      pl: "Modelowanie ust",
      en: "Lip Augmentation"
    },
    category: {
      pl: "",
      en: ""
    },
    description: {
      pl: "Modelowanie ust z wykorzystaniem kwasu hialuronowego to zabieg, którego celem jest poprawa proporcji, konturu i kształtu ust z pozostałymi rysami twarzy.",
      en: "Lip augmentation with hyaluronic acid aims to improve the proportions, contour and shape of the lips in harmony with the rest of the face."
    },
    details: {
      pl: "Modelowanie ust z wykorzystaniem kwasu hialuronowego to zabieg, którego celem jest poprawa proporcji, konturu i kształtu ust z pozostałymi rysami twarzy. Każdy zabieg poprzedzam indywidualną konsultacją, podczas której oceniane są proporcje twarzy, budowa ust oraz oczekiwania klienta. Technika oraz ilość preparatu dobierane są indywidualnie – tak, aby uzyskać estetyczny i możliwie naturalny efekt.",
      en: "Lip augmentation with hyaluronic acid aims to improve the proportions, contour and shape of the lips in harmony with the rest of the face. Every treatment is preceded by an individual consultation, during which facial proportions, lip structure and the client's expectations are assessed. The technique and amount of product are selected individually to achieve an aesthetic and natural-looking result."
    },
    images: [
      "/images/offer/modelowanie-ust-1.jpg",
      "/images/offer/modelowanie-ust-2.jpg",
      "/images/featured/modelowanie-ust.jpg"
    ]
  },
  {
    slug: "stymulatory-tkankowe",
    title: {
      pl: "Stymulatory tkankowe",
      en: "Tissue Stimulators"
    },
    category: {
      pl: "",
      en: ""
    },
    description: {
      pl: "Stymulatory tkankowe to preparaty stosowane w celu poprawy jakości i kondycji skóry. Ich działanie koncentruje się przede wszystkim na pobudzaniu naturalnych procesów regeneracyjnych oraz wspieraniu produkcji kolagenu i elastyny.",
      en: "Biostimulators are products used to improve skin quality and condition. Their action focuses primarily on supporting the skin's natural regenerative processes and the production of collagen and elastin."
    },
    details: {
      pl: "Stymulatory tkankowe to preparaty stosowane w celu poprawy jakości i kondycji skóry. Ich działanie koncentruje się przede wszystkim na pobudzaniu naturalnych procesów regeneracyjnych oraz wspieraniu produkcji kolagenu i elastyny. Zabieg dobierany jest indywidualnie do potrzeb skóry, jej kondycji oraz obszaru poddanego terapii. W zależności od zastosowanego preparatu terapia może przyczynić się do poprawy jędrności, elastyczności, napięcia oraz ogólnego wyglądu skóry. Efekt: zdrowiej wyglądająca, bardziej napięta i pełna blasku skóra, bez efektu przerysowania.",
      en: "Stymulatory tkankowe to preparaty stosowane w celu poprawy jakości i kondycji skóry. Ich działanie koncentruje się przede wszystkim na pobudzaniu naturalnych procesów regeneracyjnych oraz wspieraniu produkcji kolagenu i elastyny. Zabieg dobierany jest indywidualnie do potrzeb skóry, jej kondycji oraz obszaru poddanego terapii. W zależności od zastosowanego preparatu terapia może przyczynić się do poprawy jędrności, elastyczności, napięcia oraz ogólnego wyglądu skóry. Efekt: zdrowiej wyglądająca, bardziej napięta i pełna blasku skóra, bez efektu przerysowania."
    },
    // TODO: małe zdjęcia (2. i 3.) są testowe (z portfolio modelowania ust) – podmienić na zdjęcia tego zabiegu.
    images: [
      "/images/featured/stymulatory-tkankowe.jpg",
      "/images/portfolio/modelowanie-ust/07.jpg",
      "/images/portfolio/modelowanie-ust/08.jpg"
    ]
  },
  {
    slug: "wolumetria-brody",
    title: {
      pl: "Wolumetria brody",
      en: "Chin Augmentation"
    },
    category: {
      pl: "",
      en: ""
    },
    description: {
      pl: "Wolumetria brody ma na celu poprawę proporcji dolnej części twarzy oraz harmonizację jej rysów.",
      en: "Chin contouring aims to improve the proportions of the lower face and create greater harmony between facial features."
    },
    details: {
      pl: "Wolumetria brody ma na celu poprawę proporcji dolnej części twarzy oraz harmonizację jej rysów. Za pomocą odpowiednio dobranej ilości preparatu można delikatnie podkreślić brodę, poprawić jej kształt, zaznaczyć projekcję lub skorygować niewielkie asymetrie. Zabieg zawsze planowany jest z uwzględnieniem całej twarzy, jej proporcji, profilu oraz naturalnej anatomii.",
      en: "Chin contouring aims to improve the proportions of the lower face and create greater harmony between facial features. A carefully selected amount of product can subtly enhance the chin, refine its shape, define its projection or address minor asymmetries. The treatment is always planned with the whole face, its proportions, profile and natural anatomy in mind."
    },
    images: [
      "/images/portfolio/wolumetria-brody/01.jpg",
      "/images/portfolio/wolumetria-brody/05.jpg",
      "/images/portfolio/wolumetria-brody/06.jpg"
    ]
  },
  {
    slug: "wolumetria-policzkow",
    title: {
      pl: "Wolumetria policzków",
      en: "Cheek Augmentation"
    },
    category: {
      pl: "",
      en: ""
    },
    description: {
      pl: "Wolumetria policzków pozwala na przywrócenie lub subtelne uzupełnienie objętości w środkowej części twarzy.",
      en: "Cheek volumization can restore or subtly replenish volume in the midface."
    },
    details: {
      pl: "Wolumetria policzków pozwala na przywrócenie lub subtelne uzupełnienie objętości w środkowej części twarzy. Zabieg może pomóc w podkreśleniu kości policzkowych, poprawie proporcji twarzy oraz uzyskaniu bardziej wyraźnego konturu. Objętość i miejsce podania preparatu dobierane są indywidualnie, z uwzględnieniem budowy twarzy oraz oczekiwanego efektu.",
      en: "Cheek volumization can restore or subtly replenish volume in the midface. The treatment may help define the cheekbones, improve facial proportions and create a more defined contour. The amount and placement of the product are selected individually, taking facial structure and the desired result into account."
    },
    // TODO: zdjęcia testowe (z portfolio modelowania ust) – podmienić na zdjęcia tego zabiegu.
    images: [
      "/images/portfolio/modelowanie-ust/01.jpg",
      "/images/portfolio/modelowanie-ust/02.jpg",
      "/images/portfolio/modelowanie-ust/03.jpg"
    ]
  },
  {
    slug: "wolumetria-katow-zuchwy",
    title: {
      pl: "Wolumetria kątów żuchwy",
      en: "Jawline Contouring"
    },
    category: {
      pl: "",
      en: ""
    },
    description: {
      pl: "Wolumetria kątów żuchwy pozwala na podkreślenie konturu dolnej części twarzy oraz nadanie jej bardziej wyrazistego kształtu.",
      en: "Jawline contouring can define the lower face and give it a more sculpted appearance."
    },
    details: {
      pl: "Wolumetria kątów żuchwy pozwala na podkreślenie konturu dolnej części twarzy oraz nadanie jej bardziej wyrazistego kształtu. Preparat podawany jest w strategicznie dobrane miejsca, aby zaakcentować kąty żuchwy i poprawić proporcje twarzy. Zakres zabiegu oraz ilość preparatu ustalane są indywidualnie podczas konsultacji, ponieważ każda twarz wymaga innego podejścia.",
      en: "Jawline contouring can define the lower face and give it a more sculpted appearance. The product is placed at carefully selected points to accentuate the jaw angles and improve facial proportions. The scope of the treatment and amount of product are determined individually during a consultation, as every face requires a tailored approach."
    },
    // TODO: zdjęcia testowe (z portfolio modelowania ust) – podmienić na zdjęcia tego zabiegu.
    images: [
      "/images/portfolio/modelowanie-ust/04.jpg",
      "/images/portfolio/modelowanie-ust/05.jpg",
      "/images/portfolio/modelowanie-ust/06.jpg"
    ]
  },
  {
    slug: "usuwanie-kwasu-hialuronowego",
    title: {
      pl: "Usuwanie kwasu hialuronowego",
      en: "Hyaluronic Acid Dissolving"
    },
    category: {
      pl: "",
      en: ""
    },
    description: {
      pl: "Hialuronidaza to enzym stosowany w celu rozpuszczania wypełniaczy na bazie kwasu hialuronowego.",
      en: "Hyaluronidase is an enzyme used to dissolve hyaluronic acid-based fillers."
    },
    details: {
      pl: "Hialuronidaza to enzym stosowany w celu rozpuszczania wypełniaczy na bazie kwasu hialuronowego. Zabieg pozwala na usunięcie lub zmniejszenie ilości wcześniej podanego preparatu, a w wybranych przypadkach również na korektę niepożądanego efektu.  Zabieg może być rozważany m.in. w przypadku nadmiernej objętości, nierówności, asymetrii lub nieestetycznego efektu po wcześniejszych wypełniaczach. Możliwość jego wykonania zależy od rodzaju zastosowanego preparatu, czasu, jaki upłynął od zabiegu, oraz indywidualnej sytuacji.  Każdy zabieg poprzedzony jest konsultacją i oceną okolicy poddawanej terapii. Zakres postępowania dobierany jest indywidualnie, z uwzględnieniem oczekiwań klienta oraz bezpieczeństwa zabiegu.",
      en: "Hyaluronidase is an enzyme used to dissolve hyaluronic acid-based fillers. The treatment can help remove or reduce the amount of previously injected product and, in selected cases, correct an undesirable result.  The treatment may be considered in cases of excessive volume, unevenness, asymmetry, or an unsatisfactory aesthetic result following previous filler injections. Whether the treatment is appropriate depends on the type of product used, the time elapsed since the original procedure, and the individual circumstances.  Every treatment is preceded by a consultation and an assessment of the area to be treated. The approach is tailored to the individual, taking into account the client's expectations and the safety of the procedure."
    },
    images: [
      "/images/featured/usuwanie-kwasu-hialuronowego.jpg",
      "/images/portfolio/usuwanie-kwasu-hialuronowego/03.jpg",
      "/images/portfolio/usuwanie-kwasu-hialuronowego/02.jpg"
    ]
  }
];
