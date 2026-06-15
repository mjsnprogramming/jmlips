import Image from 'next/image'
export default function PopularTreatments() {
    return (
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
    )}