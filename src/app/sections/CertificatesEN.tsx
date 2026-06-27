import Image from 'next/image';

type Props = {
  certificate1?: string;
  certificate2?: string;
};

export default function Certificates({
  certificate1,
  certificate2,
}: Props) {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#a67c52]">
              TRAINING & CERTIFICATES
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-[#2f2924] md:text-5xl">
              Continuously Expanding My Knowledge and Skills.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              I regularly participate in certified training courses in modern 
              aesthetic medicine to provide safe treatments, exceptional comfort, 
              and natural-looking results tailored to every client.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Profhilo",
                "Karisma",
                "Nucleofill",
                "Mesotherapy",
                "Skin Boosters",
                "Lip Enhancement",
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
      </div>
    </section>
  );
}