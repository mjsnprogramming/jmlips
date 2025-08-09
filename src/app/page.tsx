
'use client'

import Image from 'next/image';
import Link from 'next/link';
import 'tailwindcss/tailwind.css'

export default function HomePage() {
  return (
    <section className = "relative w-full h-screen overflow-hidden bg-[#f9f5f0]">
      
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/homebg.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-bg.jpg"  // fallback zanim załaduje się video
      />

      {/* lekki veil + blur na całej sekcji, żeby tekst był czytelny */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />

      {/* TREŚĆ */}
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
  
  )
}




