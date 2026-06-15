export default function HeroSection() {
    return (
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
    )
}