import Link from "next/link";
import { BOOKSY_URL } from "@/lib/links";

const POSTER_SRC = "/images/hero-poster.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh_-_var(--header-h))] overflow-hidden bg-[#f9f5f0] supports-[height:100dvh]:min-h-[calc(100dvh_-_var(--header-h))]">
      {/* Statyczne tło: widoczne zanim wideo się załaduje i zawsze przy "ogranicz ruch". */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${POSTER_SRC})` }}
      />

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={POSTER_SRC}
        aria-hidden="true"
        tabIndex={-1}
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
      >
        <source src="/videos/homebg.webm" type="video/webm" />
        <source src="/videos/homebg.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh_-_var(--header-h))] max-w-7xl flex-col items-center justify-center px-6 py-16 text-center supports-[height:100dvh]:min-h-[calc(100dvh_-_var(--header-h))]">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#8f6a43] [text-shadow:0_0_12px_rgba(255,255,255,0.95),0_0_4px_rgba(255,255,255,0.9)]">
          JM Studio • Lublin • Zamość
        </p>

        <h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-[#2f2924] drop-shadow-sm sm:text-5xl md:text-7xl">
          Medycyna estetyczna i zabiegi upiększające
        </h1>

        {/* TODO: tekst tymczasowy – podmienić na aktualny opis salonu i zdanie o zabiegach od właściciela. */}
        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-700 md:text-xl">
          Profesjonalne zabiegi beauty tworzone z dbałością o naturalny efekt,
          komfort i Twoje indywidualne potrzeby.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#8f6a43] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#7a5a38] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6a43] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f9f5f0] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            Umów wizytę
            <span className="sr-only"> (Booksy, otwiera się w nowej karcie)</span>
          </a>

          <Link
            href="/pl/offer"
            className="rounded-full border border-[#8f6a43]/40 bg-white/90 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#8f6a43] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6a43] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f9f5f0] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            Zobacz zabiegi
          </Link>
        </div>
      </div>
    </section>
  );
}
