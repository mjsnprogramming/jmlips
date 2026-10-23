'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa6'

const content = {
  pl: {
    ctaTitle: 'Zrób pierwszy krok',
    ctaDescription:
      'Umów konsultację i dobierz zabieg dopasowany do Twoich potrzeb, oczekiwań i naturalnych rysów twarzy.',
    ctaButton: 'Umów konsultację',
    specialty: 'Medycyna estetyczna',
    description:
      'Naturalne efekty i indywidualne podejście do każdej osoby, w spokojnej i profesjonalnej atmosferze.',
    contact: 'Kontakt',
    navigation: 'Nawigacja',
    information: 'Informacje',
    about: 'O mnie',
    treatments: 'Zabiegi',
    portfolio: 'Portfolio',
    privacy: 'Polityka prywatności',
    terms: 'Regulamin',
    pricelist: 'Cennik',
    rights: 'Wszystkie prawa zastrzeżone.',
    credit: 'Projekt i realizacja: MJSN.dev',
  },
  en: {
    ctaTitle: 'Take the first step',
    ctaDescription:
      'Book a consultation and choose a treatment tailored to your needs, expectations, and natural features.',
    ctaButton: 'Book a consultation',
    specialty: 'Aesthetic medicine',
    description:
      'Natural-looking results and an individual approach in a calm, professional atmosphere.',
    contact: 'Contact',
    navigation: 'Navigation',
    information: 'Information',
    about: 'About me',
    treatments: 'Treatments',
    portfolio: 'Portfolio',
    privacy: 'Privacy policy',
    terms: 'Terms and conditions',
    pricelist: 'Price list',
    rights: 'All rights reserved.',
    credit: 'Designed and developed by MJSN.dev',
  },
} as const

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    Icon: FaInstagram,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/',
    Icon: FaTiktok,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    Icon: FaFacebookF,
  },
]

export default function FooterComponent() {
  const pathname = usePathname()
  const language = pathname?.startsWith('/en') ? 'en' : 'pl'
  const t = content[language]
  const base = `/${language}`
  const year = new Date().getFullYear()

  const navigation = [
    { href: '/about', label: t.about },
    { href: '/offer', label: t.treatments },
    { href: '/portfolio', label: t.portfolio },
    { href: '/contact', label: t.contact },
  ]

  const information = [
    { href: '/privacy', label: t.privacy },
    { href: '/terms', label: t.terms },
    { href: '/pricelist', label: t.pricelist },
  ]

  const makeHref = (path: string) => `${base}${path}`

  return (
    <footer className="border-t border-[#e7dfd6] bg-[#f9f5f0] text-[#5a4c3a]">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <section className="mb-12 rounded-[2rem] border border-[#e7dfd6] bg-white/60 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.05)] backdrop-blur-xl md:mb-14 md:flex md:items-center md:justify-between md:p-8">
          <div className="md:pr-8">
            <p className="text-sm uppercase tracking-[0.3em] text-[#8b6543]">
              JM Studio
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2f2924] md:text-4xl">
              {t.ctaTitle}
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-gray-600">
              {t.ctaDescription}
            </p>
          </div>

          <Link
            href={makeHref('/contact')}
            className="mt-6 inline-flex shrink-0 items-center justify-center rounded-full bg-[#805a3a] px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#704b2e] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805a3a] focus-visible:ring-offset-2 motion-reduce:transition-none md:mt-0"
          >
            {t.ctaButton}
          </Link>
        </section>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
          <div className="min-w-0">
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo.jpg"
                alt=""
                aria-hidden="true"
                width={64}
                height={64}
                className="rounded-full shadow-md"
              />

              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-[#2f2924]">
                  JM Studio
                </h3>
                <p className="text-sm text-gray-500">{t.specialty}</p>
              </div>
            </div>

            <p className="mt-6 max-w-sm leading-7 text-gray-600">
              {t.description}
            </p>

            <div className="mt-8 flex items-center gap-4">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e7dfd6] bg-white/70 text-[#5a4c3a] transition-colors duration-200 hover:border-[#8b6543] hover:text-[#8b6543] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805a3a] focus-visible:ring-offset-2 motion-reduce:transition-none"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-[#2f2924]">
              {t.contact}
            </h3>

            <address className="mt-6 flex flex-col gap-4 not-italic text-gray-600">
              <a
                href="tel:+48791967007"
                className="transition-colors hover:text-[#8b6543] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805a3a]"
              >
                +48 791 967 007
              </a>
              <a
                href="mailto:juliamajewska@gmail.com"
                className="break-words transition-colors hover:text-[#8b6543] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805a3a]"
              >
                juliamajewska@gmail.com
              </a>
              <span>Lublin</span>
            </address>
          </div>

          <nav aria-label={t.navigation} className="min-w-0">
            <h3 className="text-lg font-semibold text-[#2f2924]">
              {t.navigation}
            </h3>

            <ul className="mt-6 flex flex-col gap-4 text-gray-600">
              {navigation.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={makeHref(href)}
                    className="transition-colors hover:text-[#8b6543] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805a3a]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t.information} className="min-w-0">
            <h3 className="text-lg font-semibold text-[#2f2924]">
              {t.information}
            </h3>

            <ul className="mt-6 flex flex-col gap-4 text-gray-600">
              {information.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={makeHref(href)}
                    className="transition-colors hover:text-[#8b6543] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#805a3a]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#e7dfd6] pt-8 text-center text-sm text-gray-500 md:mt-16 md:flex-row md:text-left">
          <p>
            © {year} JM Studio. {t.rights}
          </p>
          <p>{t.credit}</p>
        </div>
      </div>
    </footer>
  )
}