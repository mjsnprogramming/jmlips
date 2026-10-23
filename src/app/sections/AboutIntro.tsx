import Image from "next/image";
import Link from "next/link";
import type { AboutData } from "@/lib/about";

type Props = {
  aboutImage?: AboutData["about_me_image"];
  aboutImageAlt?: string;
  contactHref?: string;
};

const trustPoints = [
  { number: "01", title: "Rozmowa o oczekiwaniach" },
  { number: "02", title: "Indywidualny plan" },
  { number: "03", title: "Opieka na każdym etapie" },
] as const;

export default function AboutIntro({
  aboutImage,
  aboutImageAlt = "Julia Majewska",
  contactHref = "/contact",
}: Props) {
  const imageSrc = aboutImage ?? "/images/about.png";

  return (
    <section className="relative overflow-hidden bg-[#fbf8f4] px-6 py-14 md:py-20 lg:pt-16 lg:pb-24">
      <div
        aria-hidden="true"
        className="absolute -left-32 top-16 h-[24rem] w-[24rem] rounded-full bg-[#a67c52]/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-28 bottom-8 h-[24rem] w-[24rem] rounded-full bg-[#a67c52]/10 blur-[130px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] xl:gap-16">
        <div>
          <p className="mb-6 inline-flex rounded-full bg-[#a67c52] px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-sm">
            O mnie
          </p>

          <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#111827] md:text-5xl">
            Naturalne efekty zaczynają się od zaufania.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Podczas konsultacji wspólnie omawiamy Twoje oczekiwania i możliwe
            rozwiązania. Plan zabiegowy dobieram indywidualnie, dbając o
            harmonię rysów twarzy oraz Twój komfort.
          </p>

          <div
            aria-hidden="true"
            className="mt-8 h-px w-24 bg-gradient-to-r from-[#d7b995] to-transparent"
          />

          <div className="mt-8 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {trustPoints.map(({ number, title }) => (
              <div
                key={number}
                className="group rounded-2xl border border-[#eadbc9] bg-white/80 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#a67c52] hover:bg-white hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] motion-reduce:transition-none"
              >
                <div
                  aria-hidden="true"
                  className="mb-4 h-1 w-10 rounded-full bg-[#a67c52]"
                />

                <p className="text-3xl font-semibold tracking-tight text-[#a67c52] transition-colors duration-300 group-hover:text-[#8b623d] motion-reduce:transition-none">
                  {number}
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-600">{title}</p>
              </div>
            ))}
          </div>

          <Link
            href={contactHref}
            className="mt-8 inline-flex rounded-full bg-[#805a3a] px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-md transition-colors hover:bg-[#704b2e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805a3a] focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            Umów konsultację
          </Link>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -right-20 top-8 h-[420px] w-[420px] rounded-full bg-[#d7b995]/15 blur-[110px]"
          />

          <div
            aria-hidden="true"
            className="absolute -left-6 -top-6 h-full w-full rounded-[2.5rem] border border-[#d7b995]/50"
          />
          <div
            aria-hidden="true"
            className="absolute left-4 top-4 h-full w-full rounded-[2.5rem] border border-white/40"
          />

          <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.18)]">
            <Image
              src={imageSrc}
              alt={aboutImageAlt}
              width={760}
              height={620}
              priority
              sizes="(min-width: 1280px) 600px, (min-width: 1024px) 45vw, 100vw"
              className="h-[420px] w-full object-cover sm:h-[500px] lg:h-[560px]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"
            />
          </div>

          <div className="absolute -bottom-4 right-2 z-20 max-w-[calc(100%-1rem)] rounded-[24px] border border-white/60 bg-white/80 px-5 py-4 shadow-[0_30px_80px_rgba(0,0,0,0.14)] backdrop-blur-3xl sm:-right-5 sm:bottom-5 sm:px-7 sm:py-5">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#8b6543] sm:tracking-[0.35em]">
              Julia Majewska Studio
            </p>

            <p className="mt-2 text-lg font-semibold text-[#2f2924]">
              Naturalne piękno
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}