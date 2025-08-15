
'use client'

import Link from 'next/link';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';

export default function HomePage() {
  return (
    <main>
    <section className = "relative w-full h-screen overflow-hidden bg-[#f9f5f0]">
      
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/homebg.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-bg.jpg"
      />

      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 h-full">
        <h1 className="text-5xl md:text-6xl font-light text-gray-900 drop-shadow-md">
          Witamy w <span className="font-semibold text-[#a67c52]">JM Studio</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-[#5a4c3a] max-w-xl">
          Profesjonalne zabiegi medycyny estetycznej, które wydobywają Twoje naturalne piękno.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link href="/contact">
            <button className="px-6 py-3 bg-[#a67c52] text-white rounded hover:bg-[#8c6844] transition">
              Umów się
            </button>
          </Link>

          <Link href="/offer">
            <button className="px-6 py-3 border border-[#a67c52] text-[#a67c52] rounded hover:bg-[#a67c52] hover:text-white transition">
              Zobacz ofertę
            </button>
          </Link>
        </div>
      </div>
    </section>

    <section className = "max-w-6xl mx-auto py-16 px-4">
      <h2 className = "text-3xl md:text-4xl font-semibold text-center text-[#a67c52] mb-12">
        Nasze najpopularniejsze zabiegi
      </h2>

      <div className = "grid grid-cols-1 md:grid-cols-3 gap-8">
        <article className = "bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-100">
          <Image src = "" alt = "Mezoterapia" className = "w-full h-48 object-cover"></Image>
          <div className = "p-6">
            <h3 className = "text-xl font-semibold mb-2 text-gray-900">Mezoterapia</h3>
            <p className = "text-gray-600 mb-4">
              Odmładzanie o odżywienie skóry - widoczne wygładzanie i blask.
            </p>
            <a href = "/offer#mezoterapia" className = "text-[#a67c52] font-medium hover:underline">
            Dowiedz się więcej 
            </a>
          </div>
        </article>

        <article className = "bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-100">
          <Image src = "" alt = "Toksyna botulinowa" className = "w-full h-48 object-cover" />
          <div className = "p-6">
            <h3 className = "text-xl font-semibold mb-2 text-gray-900">Toksyna botulinowa</h3>
            <p className = "text-gray-600 mb-4">
              Redukcja zmarszczek mimicznych z zachowaniem naturalnej ekspresji.
            </p>
            <a href = "/offer#botoks" className = "text-[#a67c52] font-medium hover:underline">
            Dowiedz się więcej
            </a>
          </div>
        </article>

        <article className = "bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-100">
          <Image src = "" alt = "Kwas hialuronowy" className = "w-full h-48 object-cover"/>
          <div className = "p-6">
            <h3 className = "text-xl font-semibold mb-2 text-gray-900">Kwas hialuronowy</h3>
            <p className = "text-gray-600 mb-4">
              Modelowanie i wypełnienia - subtelny efekt "fresh & natural".
            </p>
            <a href = "/offer#kwas-hialuronowy" className = "text-[#a67c52] font-medium hover:underline">
            Dowiedz się więcej
            </a>
          </div>
        </article>
      </div>
    </section>

    <section className = "bg-[#f9f5f0] py-16 px-4">
      <h2 className = "text-3xl md:text-4xl font-semibold text-center text-[#a67c52] mb-12">
        Opinie klientek
      </h2>

      <div className = "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: 'Anna K. ',
            text: 'Jestem zachwycona! Efekty przerosły moje oczekiwania, a obsługa była na najwyśzym poziomie.',
            img: '/images/client1.jpg',
          },
          {
            name: 'Magda P.',
            text: 'Profesjonalizm i przemiła atmosfera. Na pewno wrócę na kolejne zabiegi.',
            img: '/images/client2.jpg',
          },
          {
            name: 'Kasia W.',
            text: 'Po zabiegu czuję się pięknie i pewnie siebie. Polecam każdej kobiecie!',
            img: '/images/client3.jpg',
          },
        ].map((opinion, idx) => (
          <div key = {idx} className = "bg-white rounded-2xl shadow-lg p-6 text-center border border-neutral-100">
            <div className = "mx-auto w-20 h-20 relative mb-4">
              <Image src = {opinion.img} alt = {opinion.name} fill className = "rounded-full object-cover"/>
            </div>
            <p className = "text-gray-700 italic mb-4">"{opinion.text}"</p>
            <p className="text-[#a67c52] font-semibold">{opinion.name}</p>
        <div className="flex justify-center mt-2 text-yellow-500">
          {'★★★★★'}
        </div>
        </div>
        ))}
      </div>
    </section>
  
  </main>
  )
}




