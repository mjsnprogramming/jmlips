
'use client';
import InstagramTestimonials from './components/InstagramTestimonials';
import Link from 'next/link';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';

export default function HomePage() {
  return (
    <main>
    <section className="relative min-h-[calc(100vh-92px)] overflow-hidden bg-[#f9f5f0]">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 h-full w-full object-cover"
  >
    <source src="/videos/homebg.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-gradient-to-b from-white/45 via-white/35 to-[#f9f5f0]/55 backdrop-blur-[1px]" />

  <div className="relative z-10 mx-auto flex min-h-[calc(100vh-92px)] max-w-7xl flex-col items-center justify-center px-6 text-center">
    <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-[#a67c52]">
      Medycyna estetyczna • Lublin
    </p>

    <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-[#2f2924] drop-shadow-sm md:text-7xl">
      Piękno zaczyna się od subtelnych detali
    </h1>

    <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-700 md:text-xl">
      Profesjonalne zabiegi beauty tworzone z dbałością o naturalny efekt,
      komfort i Twoje indywidualne potrzeby.
    </p>

    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <a
        href="/pl/offer"
        className="rounded-full bg-[#a67c52] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#956f49] hover:shadow-xl"
      >
        Zobacz zabiegi
      </a>

      <a
        href="/pl/contact"
        className="rounded-full border border-[#a67c52]/40 bg-white/75 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#a67c52] shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
      >
        Umów wizytę
      </a>
    </div>
  </div>
</section>

   <section className="bg-white py-24 px-4">
  <div className="mx-auto max-w-7xl">
    <div className="mb-14 text-center">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-[#a67c52]">
        Oferta
      </p>

      <h2 className="text-4xl font-semibold tracking-tight text-[#2f2924] md:text-6xl">
        Najpopularniejsze zabiegi
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
        Subtelne efekty, naturalne piękno i indywidualne podejście do każdej klientki.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
      <a
        href="/offer#mezoterapia"
        className="group relative min-h-[520px] overflow-hidden rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
      >
        <Image
          src="/images/mainLeftTreatment.jpeg"
          alt="Mezoterapia"
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        <span className="absolute right-8 top-7 text-7xl font-semibold text-white/15">
          01
        </span>

        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/70">
            Skin glow
          </p>

          <h3 className="mb-4 text-3xl font-semibold">
            Mezoterapia
          </h3>

          <p className="max-w-sm text-base leading-7 text-white/80">
            Odżywienie skóry, wygładzenie i świeży blask bez przesadzonego efektu.
          </p>

          <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-[#a67c52]">
            Dowiedz się więcej
            <span>→</span>
          </div>
        </div>
      </a>

      <a
        href="/offer#botoks"
        className="group relative min-h-[520px] overflow-hidden rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.12)] lg:translate-y-10"
      >
        <Image
          src="/images/mainMiddleTreatment.jpeg"
          alt="Toksyna botulinowa"
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        <span className="absolute right-8 top-7 text-7xl font-semibold text-white/15">
          02
        </span>

        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/70">
            Anti-aging
          </p>

          <h3 className="mb-4 text-3xl font-semibold">
            Toksyna botulinowa
          </h3>

          <p className="max-w-sm text-base leading-7 text-white/80">
            Redukcja zmarszczek mimicznych z zachowaniem naturalnej ekspresji.
          </p>

          <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-[#a67c52]">
            Dowiedz się więcej
            <span>→</span>
          </div>
        </div>
      </a>

      <a
        href="/offer#kwas-hialuronowy"
        className="group relative min-h-[520px] overflow-hidden rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
      >
        <Image
          src="/images/mainRightTreatment.jpeg"
          alt="Kwas hialuronowy"
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        <span className="absolute right-8 top-7 text-7xl font-semibold text-white/15">
          03
        </span>

        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/70">
            Fresh & natural
          </p>

          <h3 className="mb-4 text-3xl font-semibold">
            Kwas hialuronowy
          </h3>

          <p className="max-w-sm text-base leading-7 text-white/80">
            Modelowanie i wypełnienie z naciskiem na subtelny, harmonijny efekt.
          </p>

          <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-[#a67c52]">
            Dowiedz się więcej
            <span>→</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>
    

    <InstagramTestimonials/>

    <section className="relative overflow-hidden bg-[#f9f5f0] px-4 py-28">
  <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#a67c52]/10 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#a67c52]/10 blur-3xl" />

  <div className="relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
    <div className="relative">
      <div className="absolute -left-6 -top-6 h-full w-full rounded-[2.5rem] border border-[#d7b995]/50" />

      <Image
        src="/images/mainReady.webp"
        alt="JM Studio"
        width={700}
        height={520}
        className="relative h-[520px] w-full rounded-[2.5rem] object-cover shadow-[0_25px_70px_rgba(0,0,0,0.14)]"
      />
    </div>

    <div className="max-w-xl">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-[#a67c52]">
        Konsultacja
      </p>

      <h2 className="text-4xl font-semibold tracking-tight text-[#2f2924] md:text-6xl">
        Gotowa na subtelną metamorfozę?
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        Umów konsultację i dobierz zabieg dopasowany do Twoich potrzeb,
        rysów twarzy oraz oczekiwanego efektu.
      </p>

      <div className="mt-8 flex flex-col gap-3 text-gray-700">
        <p>✓ Indywidualna analiza potrzeb</p>
        <p>✓ Naturalne efekty bez przesady</p>
        <p>✓ Przyjazna, spokojna atmosfera</p>
      </div>

      <a
        href="/pl/contact"
        className="mt-10 inline-flex rounded-full bg-[#a67c52] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#956f49] hover:shadow-xl"
      >
        Skontaktuj się
      </a>
    </div>
  </div>
</section>
  
  </main>
  )
}




