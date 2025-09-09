import Image from "next/image";
import { Dancing_Script } from "next/font/google";

const signature = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });

export default function About() {
  return (
    <main className="bg-[#f7f5f0]">
      <section className="w-full px-6 md:px-20 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0 md:w-1/2 flex justify-center">
          <Image
            src="/images/about.jpg"
            alt="Julia Majewska"
            width={450}
            height={500}
            className="rounded-2xl object-cover shadow-md w-full h-auto max-w-md"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left relative -top-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Specialist in <br /> Natural Effects
          </h1>
          <p className="mt-6 text-gray-700 text-lg md:text-xl leading-relaxed">
            Specialist in enhancing natural facial features <br className="hidden md:block" />
            and lip contouring results. As an experienced practitioner, <br className="hidden md:block" />
            I make sure every result is subtle and harmonious.
          </p>
          <p
            className={`${signature.className} mt-6 text-3xl md:text-4xl text-[#a67c52] -rotate-1`}
          >
            Julia Majewska
            <span className="block mt-3 h-[2px] w-40 bg-gradient-to-r from-[#a67c52] to-transparent rounded-full" />
          </p>
        </div>
      </section>

      <section className="px-6 md:px-20 pb-20 grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow p-6 text-center h-[300px] flex flex-col items-center justify-center">
          <div className="text-2xl text-[#a67c52] mb-3">♡</div>
          <h3 className="font-semibold text-lg">Individual Approach</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Every treatment is tailored to the patient’s needs and expectations.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 text-center h-[300px] flex flex-col items-center justify-center">
          <div className="text-2xl text-[#a67c52] mb-3">★</div>
          <h3 className="font-semibold text-lg">Professional Care</h3>
          <p className="mt-2 text-gray-600 text-sm">
            I only use proven and certified methods.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 text-center h-[300px] flex flex-col items-center justify-center">
          <div className="text-2xl text-[#a67c52] mb-3">✎</div>
          <h3 className="font-semibold text-lg">Proven Results</h3>
          <p className="mt-2 text-gray-600 text-sm">
            The results of my work are confirmed by patient feedback and certifications.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-[34px] md:text-[38px] font-serif font-semibold">
              Let’s Get to Know Each Other
            </h2>
            <p className="mt-5 text-[#5a4c3a]">
              Over <strong>3 years</strong> of experience, hundreds of satisfied clients, and
              a passion for subtle, harmonious results. During the consultation, we will
              calmly discuss your needs and plan the best treatment – without rush, with
              full respect for your beauty.
            </p>
            <p className="mt-4 text-[#5a4c3a]">
              I care about a comfortable environment and transparent communication. I pay
              attention to details – from aseptic conditions, through technique, to
              post-treatment care recommendations.
            </p>
          </div>

          
          <div className="relative">
            <div className="absolute -inset-3 rounded-[3rem] bg-gradient-to-b from-[#a67c52]/20 to-transparent blur-xl pointer-events-none" />
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "2.5rem",
                border: "1px solid #e7dfd6",
              }}
            >
              <Image
                src="/images/about.jpg"
                alt="Julia in the studio"
                width={900}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
