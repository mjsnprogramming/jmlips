'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons'
import 'tailwindcss/tailwind.css'
import { useMemo } from 'react'
import { usePathname } from 'next/navigation'

export default function FooterComponent() {
  const pathname = usePathname()
  const language: 'pl' | 'en' = pathname.startsWith('/en') ? 'en' : 'pl'
  const base = `/${language}`


  const legalNav = useMemo(
    () => [
      {
        href: '/privacy',
        labelPl: 'Polityka prywatności',
        labelEn: 'Privacy Policy',
      },
      {
        href: '/termsConditions',
        labelPl: 'Regulamin',
        labelEn: 'Terms & Conditions',
      },
    ],
    []
  )

  const makeHref = (path: string) => {
    
    return `${base}${path}`
  }

  return (
    <footer className="border-t border-[#e7dfd6] bg-[#f9f5f0] text-[#5a4c3a]">
  <div className="mx-auto max-w-7xl px-6 py-16">

    <div className="mb-14 rounded-[2rem] border border-[#e7dfd6] bg-white/60 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)] backdrop-blur-xl md:flex md:items-center md:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-[#a67c52]">
          JM Studio
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2f2924] md:text-4xl">
          Gotowa na pierwszy krok?
        </h2>

        <p className="mt-4 max-w-xl text-gray-600 leading-7">
          Umów konsultację i dobierz zabieg dopasowany do Twoich potrzeb,
          oczekiwań i naturalnych rysów twarzy.
        </p>
      </div>

      <Link
        href={makeHref('/contact')}
        className="mt-6 inline-flex rounded-full bg-[#a67c52] px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#956f49] hover:shadow-xl md:mt-0"
      >
        Umów konsultację
      </Link>
    </div>

    <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">

      <div>
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo.jpg"
            alt="JM Studio"
            width={64}
            height={64}
            className="rounded-full shadow-md"
          />

          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-[#2f2924]">
              JM Studio
            </h3>

            <p className="text-sm text-gray-500">
              Medycyna estetyczna
            </p>
          </div>
        </div>

        <p className="mt-6 max-w-sm leading-8 text-gray-600">
          Delikatne, naturalne efekty oraz indywidualne podejście do każdej
          klientki w spokojnej i profesjonalnej atmosferze.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e7dfd6] bg-white/70 text-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#a67c52] hover:text-[#a67c52]"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a
            href="https://tiktok.com"
            target="_blank"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e7dfd6] bg-white/70 text-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#a67c52] hover:text-[#a67c52]"
          >
            <i className="fa-brands fa-tiktok"></i>
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e7dfd6] bg-white/70 text-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#a67c52] hover:text-[#a67c52]"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-[#2f2924]">
          Kontakt
        </h4>

        <div className="mt-6 space-y-4 text-gray-600">
          <p>+48 657 391 939</p>
          <p>juliamajewska@gmail.com</p>
          <p>Lublin, ul. Wieniawska 8</p>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-[#2f2924]">
          Nawigacja
        </h4>

        <div className="mt-6 flex flex-col gap-4 text-gray-600">
          <Link href={makeHref('/about')} className="transition hover:text-[#a67c52]">
            O mnie
          </Link>

          <Link href={makeHref('/offer')} className="transition hover:text-[#a67c52]">
            Zabiegi
          </Link>

          <Link href={makeHref('/portfolio')} className="transition hover:text-[#a67c52]">
            Portfolio
          </Link>

          <Link href={makeHref('/contact')} className="transition hover:text-[#a67c52]">
            Kontakt
          </Link>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-[#2f2924]">
          Informacje
        </h4>

        <div className="mt-6 flex flex-col gap-4 text-gray-600">
          <Link href={makeHref('/privacy-policy')} className="transition hover:text-[#a67c52]">
            Polityka prywatności
          </Link>

          <Link href={makeHref('/terms')} className="transition hover:text-[#a67c52]">
            Regulamin
          </Link>

          <Link href={makeHref('/pricelist')} className="transition hover:text-[#a67c52]">
            Cennik
          </Link>
        </div>
      </div>

    </div>

    <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#e7dfd6] pt-8 text-sm text-gray-500 md:flex-row">
      <p>
        © 2026 JM Studio. Wszystkie prawa zastrzeżone.
      </p>

      <p>
        Designed & developed by MJSN.dev
      </p>
    </div>

  </div>
</footer>
  )
}
