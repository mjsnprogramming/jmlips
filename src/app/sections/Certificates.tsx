import Image from "next/image";

type Props = {
  certificate1?: string;
  certificate2?: string;
  certificates?: string[];
};

export default function Certificates({
  certificate1,
  certificate2,
  certificates,
}: Props) {
  const gallery =
    certificates ?? [
      "/images/certificate3.webp",
      "/images/certificate4.webp",
      "/images/certificate5.webp",
      "/images/certificate6.webp"
    ];

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#a67c52]">
              SZKOLENIA I CERTYFIKATY
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-[#2f2924] md:text-5xl">
              Nieustannie poszerzam swoją wiedzę i umiejętności.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Rozwój to dla mnie klucz do sukcesu, dlatego nieustannie się
              szkolę. Uwielbiam to robić, bo każde szkolenie jeszcze bardziej
              napędza mnie do działania i motywuje do dalszego rozwoju.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Profhilo",
                "Karisma",
                "Nucleofill",
                "Mezoterapia",
                "Stymulatory tkankowe",
                "Modelowanie ust",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-[#eadbc9] bg-[#fbf8f4] px-5 py-3 text-sm text-[#2f2924]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <Image
                src={certificate1 || "/images/certificate1.webp"}
                alt="Certyfikat"
                width={500}
                height={700}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="mt-10 overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <Image
                src={certificate2 || "/images/certificate2.webp"}
                alt="Certyfikat"
                width={500}
                height={700}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Dodatkowe certyfikaty */}

        <div className="mt-20">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">
            {gallery.map((image, index) => (
              <div
  className={`relative h-[340px] overflow-hidden rounded-[1.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] ${
    index % 2 === 1 ? "mt-8" : ""
  }`}
>
  <Image
    src={image}
    alt={`Certyfikat ${index + 3}`}
    fill
    className="object-cover transition duration-500 hover:scale-105"
  />
</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}