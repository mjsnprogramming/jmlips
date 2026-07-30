import Image from "next/image";
import type { AboutData } from "@/lib/about";

type Props = {
  aboutImage?: AboutData["about_me_image"];
};

export default function AboutIntro({ aboutImage }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#fbf8f4] px-6 pt-12 pb-20 lg:pt-16 lg:pb-24">
      <div className="absolute -left-32 top-16 h-[24rem] w-[24rem] rounded-full bg-[#a67c52]/10 blur-[130px]" />
      <div className="absolute -right-28 bottom-8 h-[24rem] w-[24rem] rounded-full bg-[#a67c52]/10 blur-[130px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] xl:gap-16">
        <div>
          <div className="mb-6 flex items-center gap-3">

            <p className="mb-6 inline-flex rounded-full bg-[#a67c52] px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-sm"> O mnie </p>
          </div>

          <h1 className="max-w-3xl text-3xl font-semibold leading-[0.95] tracking-[-0.03em] text-[#111827] md:text-5xl">
            Naturalne efekty zaczynają się od zaufania.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-9 text-gray-600">
            Wierzę, że medycyna estetyczna powinna podkreślać naturalne piękno,
            a nie je zmieniać. Dlatego każdy zabieg planuję indywidualnie,
            dbając o harmonię rysów twarzy, bezpieczeństwo oraz Twój komfort
            na każdym etapie wizyty.
          </p>

          <div className="mt-10 h-px w-24 bg-gradient-to-r from-[#d7b995] to-transparent" />

          <div className="mt-8 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ["01", "Naturalny efekt"],
              ["02", "Indywidualne podejście"],
              ["03", "Spokojna atmosfera"],
            ].map(([number, title]) => (
              <div
                key={number}
                className="
                  group
                  rounded-2xl
                  border
                  border-[#eadbc9]
                  bg-white/80
                  p-5
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#a67c52]
                  hover:bg-white
                  hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]
                "
              >
                <div className="mb-4 h-1 w-10 rounded-full bg-[#a67c52]" />

                <p className="text-3xl font-semibold tracking-tight text-[#a67c52] transition-colors duration-300 group-hover:text-[#8b623d]">
                  {number}
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>

                <div className="relative">
          <div className="absolute -right-20 top-8 h-[420px] w-[420px] rounded-full bg-[#d7b995]/15 blur-[110px]" />

          <div className="absolute -left-6 -top-6 h-full w-full rounded-[2.5rem] border border-[#d7b995]/50" />

          <div className="absolute left-4 top-4 h-full w-full rounded-[2.5rem] border border-white/40" />

          <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.18)]">
            <Image
              src={aboutImage || "/images/about.png"}
              alt="Julia Majewska podczas zabiegu"
              width={760}
              height={620}
              priority
              className="h-[560px] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-5 -right-5 z-20 rounded-[30px] border border-white/60 bg-white/75 px-7 py-5 shadow-[0_30px_80px_rgba(0,0,0,0.14)] backdrop-blur-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#a67c52]">
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