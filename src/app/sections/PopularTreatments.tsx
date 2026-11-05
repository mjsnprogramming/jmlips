import Image from "next/image";
import Link from "next/link";
import type { PopularTreatment } from "@/lib/treatments";

type Props = {
  treatments?: PopularTreatment[] | null;
};

export default function PopularTreatments({ treatments }: Props) {
  const safeTreatments = Array.isArray(treatments) ? treatments : [];

  if (!safeTreatments.length) return null;

  return (
    <section className="bg-white px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-lg font-medium uppercase tracking-[0.35em] text-brand">
            Oferta
          </p>

          <h2 className="font-heading text-4xl font-semibold tracking-tight text-[#2f2924] md:text-6xl">
            Polecane zabiegi
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Poznaj zabiegi często wybierane przez klientów, którzy chcą podkreślić
            swoje naturalne piękno i zadbać o świeży, harmonijny wygląd.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {safeTreatments.map((treatment, index) => (
            <Link
              key={treatment.id}
              href={`/pl/offer?treatment=${encodeURIComponent(treatment.title)}`}
              className={[
                "group relative min-h-[420px] overflow-hidden rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.12)] md:min-h-[520px]",
                "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand focus-visible:ring-offset-4",
                index === 1 ? "lg:translate-y-10" : "",
              ].join(" ")}
            >
              <Image
                src={treatment.image}
                alt=""
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              <span
                aria-hidden="true"
                className="absolute right-8 top-7 text-7xl font-semibold text-white/15"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/70">
                  {treatment.subtitle}
                </p>

                <h3 className="mb-4 text-3xl font-semibold">{treatment.title}</h3>

                <p className="max-w-sm text-base leading-7 text-white/80">
                  {treatment.description}
                </p>

                <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/15 px-5 py-3 text-sm font-medium backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-brand group-focus-visible:bg-white group-focus-visible:text-brand motion-reduce:transition-none">
                  Dowiedz się więcej
                  <span aria-hidden="true">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
