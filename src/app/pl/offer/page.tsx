import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"]});

type Treatment = {
  slug: string;
  title: string;
  desc: string;
  image: string;
  tint?: string;
};

const TREATMENTS: Treatment[] = [
  {
    slug: "modelowanie-ust",
    title: "Modelowanie ust kwasem hialuronowym",
    desc:
      "Subtelne podkreślenie kształtu i objętości z zachowaniem naturalnych proporcji. Miękki, nawilżony efekt bez przerysowania.",
    image: "/images/treatments/lipsHialuronic.jpeg",
    tint: "#f8f4ef",
  },
  {
    slug: "rewitalizacja-ust-stymulator",
    title: "Rewitalizacja ust stymulatorem tkankowym",
    desc:
      "Odświeżenie czerwieni wargowej, poprawa nawilżenia i gładkości ust. Naturalny połysk i komfort.",
    image: "/images/treatments/revitalLips.jpg",
    tint: "#faf7f2",
  },

  {
    slug: "hialuronidaza",
    title: "Usuwanie kwasu hialuronowego (Hialuronidaza)",
    desc:
      "Bezpieczne rozpuszczanie niepożądanego lub przeterminowanego wypełniacza. Przywrócenie naturalnych rysów.",
    image: "/images/treatments/hyaluronidase.jpg",
    tint: "#f6f2ed",
  },

  {
    slug: "nucleofill-eyes",
    title: "Stymulator tkankowy – okolica oka (Nucleofill Eyes)",
    desc:
      "Delikatne zagęszczenie i nawilżenie cienkiej skóry pod oczami. Rozświetlenie i poprawa jakości skóry.",
    image: "/images/treatments/eyes-nucleofill.jpg",
    tint: "#fbf8f3",
  },
  {
    slug: "electri",
    title: "Stymulator tkankowy – okolica oka (Electri)",
    desc:
      "Biorewitalizacja okolicy oka: jędrność, elastyczność i lepsza tekstura skóry bez efektu sztuczności.",
    image: "/images/treatments/eyes-electri.jpg",
    tint: "#f8f5f0",
  },
  {
    slug: "xela-rederm",
    title: "Stymulator tkankowy – okolica oka (Xela Rederm 1.1%)",
    desc:
      "Wsparcie jakości skóry i delikatne wygładzenie. Naturalny, świeży wygląd spojrzenia.",
    image: "/images/treatments/eyes-xela.jpg",
    tint: "#faf6f1",
  },

  {
    slug: "karisma",
    title: "Stymulator tkankowy (Karisma)",
    desc:
      "Poprawa gęstości i elastyczności skóry twarzy, szyi i dekoltu. Subtelne ujędrnienie bez dodawania objętości.",
    image: "/images/treatments/karisma.jpg",
    tint: "#f7f3ee",
  },
  {
    slug: "profhilo",
    title: "Stymulator tkankowy (Profhilo)",
    desc:
      "Bioremodeling – intensywne nawilżenie i zagęszczenie skóry, efekt „glass skin” z zachowaniem naturalności.",
    image: "/images/treatments/profhilo.jpg",
    tint: "#f9f6f1",
  },
  {
    slug: "ejal40",
    title: "Stymulator tkankowy (Ejal 40)",
    desc:
      "Wsparcie macierzy pozakomórkowej i poprawa sprężystości. Widoczne odświeżenie konturów.",
    image: "/images/treatments/ejal40.jpg",
    tint: "#f7f4ef",
  },
  {
    slug: "neauvia-hydro-deluxe",
    title: "Stymulator tkankowy (Neauvia Hydro Deluxe)",
    desc:
      "Silne nawilżenie i odżywienie z efektem wygładzenia. Komfortowy zabieg i świeży wygląd skóry.",
    image: "/images/treatments/neauvia-hydro-deluxe.jpg",
    tint: "#f8f4ef",
  },
  {
    slug: "dr-cyj-hair-filler",
    title: "Stymulator – skóra głowy (Dr.Cyj Hair Filler)",
    desc:
      "Wspomaganie kondycji skóry głowy i włosów. Skoncentrowane składniki peptydowe dla zdrowszych cebulek.",
    image: "/images/treatments/dr-cyj.jpg",
    tint: "#fbf7f2",
  },

  {
    slug: "mezoterapia-iglowa",
    title: "Mezoterapia igłowa – twarz / szyja / dekolt",
    desc:
      "Nawilżenie, odżywienie i poprawa jakości skóry. Dobór koktajlu do potrzeb: twarz, szyja, dekolt.",
    image: "/images/treatments/meso-face-neck.jpg",
    tint: "#f6f2ed",
  },
];


export default function OfferPage() {
  return (
    <main className="bg-[#f7f5f0] text-[#2a241c]">
      
      <section className="relative w-full h-[46vh] md:h-[54vh]">
        <Image
          src="/images/treatments/treatments.jpg"
          alt="Poznaj nasze zabiegi"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <h1 className={`${serif.className} text-white text-5xl md:text-6xl leading-[1.05]`}>
                Poznaj nasze zabiegi
              </h1>
              <p className="mt-4 text-white/90 text-lg md:text-xl">
                Krótkie opisy i szybkie przejście do szczegółów każdego zabiegu.
              </p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="w-full py-20">
        <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TREATMENTS.map((t) => (
              <article
                key={t.slug}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow"
              >
                
                <div className="relative h-72 w-full">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>

                
                <div className="p-8 flex flex-col flex-grow">
                  <h2 className={`${serif.className} text-2xl md:text-3xl font-semibold`}>
                    {t.title}
                  </h2>
                  <p className="mt-3 text-[#5a4c3a] leading-relaxed flex-grow">
                    {t.desc}
                  </p>

                  <div className="mt-6">
                    <Link
                      href={`/pl/offer/${t.slug}`}
                      className="group inline-flex items-center gap-3 text-[#a67c52] text-lg font-medium"
                    >
                      <span>Zobacz szczegóły</span>
                      <svg
                        className="w-7 h-7 rounded-full border border-[#d8cbb7] p-1.5 transition-transform group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      
      <section className="w-full bg-[#f2ede6]">
        <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 py-16 text-center">
          <h3 className={`${serif.className} text-2xl md:text-3xl font-semibold`}>
            Nie wiesz, który zabieg wybrać?
          </h3>
          <p className="mt-3 text-[#5a4c3a]">
            Umów konsultację — doradzę i dobierzemy najlepszą metodę pod Twoje potrzeby.
          </p>
          <Link
            href="/pl/contact"
            className="mt-6 inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#a67c52] text-white text-lg hover:bg-[#8c6844] transition shadow-md"
          >
            Skontaktuj się
          </Link>
        </div>
      </section>
    </main>
  );
}
