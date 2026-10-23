import Link from "next/link";
import Image from 'next/image';

export default function ContactIntro () {
return (
<section className="relative overflow-hidden px-6 py-28">
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-[#a67c52]/10 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#a67c52]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-6 inline-flex rounded-full bg-[#a67c52] px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Kontakt
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-[#111827] md:text-5xl">
              Zadbaj o naturalny efekt. Zacznij od konsultacji.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-600">
              Nie wiesz, który zabieg będzie najlepszy? Podczas konsultacji
              omówimy Twoje oczekiwania i dobierzemy rozwiązanie dopasowane do
              Twoich potrzeb.
            </p>

            <div className="mt-8 space-y-3 text-[15px] text-[#4b5563]">
  <div className="flex items-center gap-3">
    <span className="text-[#a67c52]">✓</span>
    Indywidualna konsultacja przed zabiegiem
  </div>

  <div className="flex items-center gap-3">
    <span className="text-[#a67c52]">✓</span>
    Dobór terapii dopasowany do Twoich potrzeb
  </div>

  <div className="flex items-center gap-3">
    <span className="text-[#a67c52]">✓</span>
    Wygodna rezerwacja online przez Booksy
  </div>
</div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#"
                className="inline-flex rounded-full bg-[#a67c52] px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#956f49] hover:shadow-xl"
                >
                  Umów w Booksy
              </Link>

              <Link
                href="#"
                className="inline-flex rounded-full border border-[#d7b995] bg-white/75 px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#a67c52] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                  >
                 Napisz na Instagramie
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-full w-full rounded-[2.5rem] border border-[#d7b995]/60" />

            <Image
              src="/images/contact.jpg"
              alt="JM Studio"
              width={760}
              height={620}
              className="relative h-[560px] w-full rounded-[2.5rem] object-cover shadow-[0_30px_80px_rgba(0,0,0,0.16)]"
              priority
            />

            <div className="absolute -bottom-8 -right-4 z-20 rounded-3xl bg-white/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl md:-right-8">
  <p className="text-sm uppercase tracking-[0.25em] text-[#a67c52]">
    JM Studio
  </p>

  <p className="mt-2 text-lg font-semibold text-[#2f2924]">
    Lublin, Wieniawska 8
  </p>

  <p className="mt-1 text-sm text-gray-500">
    Rezerwacja online • Booksy
  </p>
</div>
          </div>
        </div>
      </section>
)}