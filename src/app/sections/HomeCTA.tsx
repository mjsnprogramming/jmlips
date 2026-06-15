import Image from 'next/image';
export default function HomeCTA() {
    return (
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
    )}