import Image from "next/image";

// Podmień na właściwy adres Booksy, gdy będzie dostępny.
const BOOKSY_URL = "#";
const INSTAGRAM_URL = "https://www.instagram.com/julia_majewska_studio/";

export default function ContactIntro() {
  return (
    <section className="overflow-hidden bg-[#f8f5f0] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="max-w-2xl">
          <p className="mb-6 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.28em] text-[#a77b50] sm:text-sm">
            Kontakt <span className="h-px w-12 bg-[#c8a987]" aria-hidden="true" />
          </p>

          <h1 className="font-serif text-[2.8rem] font-normal leading-[1.06] tracking-[-0.045em] text-[#171513] sm:text-6xl lg:text-[3.65rem] xl:text-[4rem]">
            Zadbaj o naturalny efekt.{" "}
            <span className="italic text-[#a77b50]">Zacznij od konsultacji.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-[#625d58] sm:text-[1.05rem] sm:leading-8">
            Nie wiesz, który zabieg będzie najlepszy? Podczas konsultacji omówimy
            Twoje oczekiwania i dobierzemy rozwiązanie dopasowane do Twoich potrzeb.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-[#625d58] sm:text-[0.95rem]">
            {[
              "Indywidualna konsultacja przed zabiegiem",
              "Dobór terapii dopasowany do Twoich potrzeb",
              "Wygodna rezerwacja online przez Booksy",
            ].map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#b18a61] text-white">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                    <path
                      d="m3.5 8 3 3 6-6"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={BOOKSY_URL}
              className="inline-flex min-h-12 items-center justify-center gap-4 rounded-full bg-[#a77b50] px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#916b45] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a77b50] motion-reduce:transition-none sm:min-w-[205px]"
            >
              Umów w Booksy <span aria-hidden="true">→</span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-4 rounded-full border border-[#d9c6b1] px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#8e633b] transition-colors hover:bg-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a77b50] motion-reduce:transition-none sm:min-w-[240px]"
            >
              Napisz na Instagramie <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[620px] pb-7 sm:pb-8 lg:pb-6">
          <div
            className="absolute -left-5 top-5 h-[82%] w-[92%] rounded-tl-[2rem] rounded-tr-[2rem] border border-[#c7a47e] sm:-left-6 sm:top-6"
            aria-hidden="true"
          />
          <Image
            src="/images/contact.jpg"
            alt="Wnętrze JM Studio"
            width={760}
            height={620}
            priority
            className="relative ml-5 h-[390px] w-[calc(100%-1.25rem)] rounded-[1.75rem] object-cover object-center shadow-[0_22px_55px_rgba(75,54,35,0.16)] sm:ml-6 sm:h-[500px] sm:w-[calc(100%-1.5rem)] lg:h-[520px]"
          />

          <div className="absolute -bottom-1 right-0 z-10 w-[min(17rem,88%)] rounded-2xl bg-[#fcfaf7]/95 p-5 shadow-[0_14px_38px_rgba(75,54,35,0.12)] backdrop-blur-sm sm:-right-2 sm:w-[17rem] sm:p-6">
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#a77b50]">
              JM Studio
            </p>
            <p className="mt-2 text-base font-medium text-[#201d1a]">
              Lublin, Wieniawska 8
            </p>
            <p className="mt-1 text-sm text-[#706963]">
              Rezerwacja online · Booksy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}