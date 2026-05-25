import Image from "next/image";
import React from "react";


export default function AboutSection() {
  return (
    <main className="bg-[#fbf8f4]">
    <section className="relative overflow-hidden bg-[#fbf8f4] px-6 py-28">
  <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#a67c52]/10 blur-3xl" />
  <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#a67c52]/10 blur-3xl" />

  <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
    <div>
      <p className="mb-6 inline-flex rounded-full bg-[#a67c52] px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white">
        O mnie
      </p>

      <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-[#111827] md:text-7xl">
        Naturalne efekty zaczynają się od zaufania.
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-600">
        Nazywam się Julia Majewska i tworzę miejsce, w którym medycyna estetyczna
        łączy profesjonalizm, spokój i indywidualne podejście. Pomagam podkreślić
        urodę tak, aby efekt był subtelny, świeży i zgodny z Tobą.
      </p>

      <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-[#eadbc9] bg-white/70 p-5 shadow-sm">
          <p className="text-2xl font-semibold text-[#a67c52]">01</p>
          <p className="mt-2 text-sm text-gray-600">Naturalny efekt</p>
        </div>

        <div className="rounded-2xl border border-[#eadbc9] bg-white/70 p-5 shadow-sm">
          <p className="text-2xl font-semibold text-[#a67c52]">02</p>
          <p className="mt-2 text-sm text-gray-600">Indywidualne podejście</p>
        </div>

        <div className="rounded-2xl border border-[#eadbc9] bg-white/70 p-5 shadow-sm">
          <p className="text-2xl font-semibold text-[#a67c52]">03</p>
          <p className="mt-2 text-sm text-gray-600">Spokojna atmosfera</p>
        </div>
      </div>
    </div>

    <div className="relative">
      <div className="absolute -left-6 -top-6 h-full w-full rounded-[2.5rem] border border-[#d7b995]/60" />
      <div className="absolute -bottom-8 -right-8 z-20 rounded-3xl bg-white/85 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.25em] text-[#a67c52]">
          JM Studio
        </p>
        <p className="mt-2 text-lg font-semibold text-[#2f2924]">
          Beauty with intention
        </p>
      </div>

      <Image
        src="/images/about.jpg"
        alt="Julia Majewska podczas zabiegu"
        width={760}
        height={620}
        className="relative h-[560px] w-full rounded-[2.5rem] object-cover shadow-[0_30px_80px_rgba(0,0,0,0.16)]"
        priority
      />
    </div>
  </div>
</section>

<section className="bg-white px-6 py-24">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-8 md:grid-cols-3">
      <div className="rounded-[2rem] border border-[#eadbc9] bg-[#fbf8f4] p-8 shadow-sm">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#a67c52]">
          Filozofia
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-[#2f2924]">
          Mniej znaczy piękniej.
        </h2>
      </div>

      <div className="md:col-span-2 rounded-[2rem] border border-[#eadbc9] bg-[#fbf8f4] p-8 shadow-sm">
        <p className="text-lg leading-9 text-gray-600">
          W mojej pracy najważniejszy jest naturalny efekt — taki, który nie zmienia
          rysów twarzy, tylko subtelnie podkreśla to, co już w Tobie wyjątkowe.
          Każdy zabieg poprzedzony jest rozmową, analizą potrzeb i spokojnym
          omówieniem możliwych rezultatów.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="bg-[#fbf8f4] px-6 py-24">
  <div className="mx-auto max-w-7xl">
    <div className="mb-14 max-w-3xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#a67c52]">
        Zaufanie
      </p>

      <h2 className="text-4xl font-semibold tracking-tight text-[#2f2924] md:text-6xl">
        Bezpieczeństwo, estetyka i ciągły rozwój.
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        Regularnie rozwijam swoje umiejętności, pracując na sprawdzonych preparatach
        i technikach, które pozwalają osiągać subtelne, harmonijne efekty.
      </p>
    </div>

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {[
        "Certyfikowane szkolenia",
        "Sprawdzone preparaty",
        "Indywidualna konsultacja",
        "Naturalna estetyka",
      ].map((item, index) => (
        <div
          key={item}
          className="rounded-[2rem] border border-[#eadbc9] bg-white/75 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
        >
          <p className="text-3xl font-semibold text-[#a67c52]">
            {String(index + 1).padStart(2, "0")}
          </p>

          <p className="mt-5 text-lg font-medium text-[#2f2924]">
            {item}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="bg-white px-6 py-24">
  <div className="mx-auto max-w-7xl">
    <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#a67c52]">
          Rozwój i estetyka
        </p>

        <h2 className="text-4xl font-semibold tracking-tight text-[#2f2924] md:text-5xl">
          Regularnie rozwijam swoje umiejętności.
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
          Uczestniczę w certyfikowanych szkoleniach z zakresu nowoczesnej
          medycyny estetycznej, aby zapewnić bezpieczeństwo, komfort
          oraz naturalne efekty dopasowane do każdej klientki.
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
            src="/images/certificate1.webp"
            alt="Certyfikat"
            width={500}
            height={700}
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <Image
            src="/images/certificate2.webp"
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
</main>
  );
}
