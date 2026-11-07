'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa6'
import { BOOKSY_URL, FACEBOOK_URL, INSTAGRAM_URL, TIKTOK_URL } from '@/lib/links'

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
    newTab: 'otwiera się w nowej karcie',
    booksy: 'Booksy – rezerwacja online',
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
    // Polityka i regulamin są tylko po polsku – link prowadzi do wersji PL.
    privacy: 'Privacy policy (in Polish)',
    terms: 'Terms and conditions (in Polish)',
    pricelist: 'Price list',
    rights: 'All rights reserved.',
    newTab: 'opens in a new tab',
    booksy: 'Booksy – online booking',
    credit: 'Designed and developed by MJSN.dev',
  },
} as const

const socials = [
  { label: 'Instagram', href: INSTAGRAM_URL, Icon: FaInstagram },
  { label: 'TikTok', href: TIKTOK_URL, Icon: FaTiktok },
  { label: 'Facebook', href: FACEBOOK_URL, Icon: FaFacebookF },
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

  // Polityka prywatności i regulamin istnieją tylko po polsku.
  const information = [
    { href: '/pl/privacy', label: t.privacy, polishOnly: true },
    { href: '/pl/terms', label: t.terms, polishOnly: true },
    { href: `${base}/pricelist`, label: t.pricelist, polishOnly: false },
  ]

  const makeHref = (path: string) => `${base}${path}`

  return (
    <footer className="border-t border-[#e7dfd6] bg-[#f9f5f0] text-[#5a4c3a]">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <section className="mb-12 rounded-[2rem] border border-[#e7dfd6] bg-white/60 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.05)] backdrop-blur-xl md:mb-14 md:flex md:items-center md:justify-between md:p-8">
          <div className="md:pr-8">
            <p className="text-sm uppercase tracking-[0.3em] text-brand">
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
            className="mt-6 inline-flex shrink-0 items-center justify-center rounded-full bg-brand px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 motion-reduce:transition-none md:mt-0"
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
                  aria-label={`${label} (${t.newTab})`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e7dfd6] bg-white/70 text-[#5a4c3a] transition-colors duration-200 hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                >
                  <Icon aria-hidden="true" className="h-5 w-5" />
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
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                Instagram
                <span className="sr-only"> ({t.newTab})</span>
              </a>
              <a
                href={BOOKSY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                {t.booksy}
                <span className="sr-only"> ({t.newTab})</span>
              </a>
              <span>Lublin • Zamość</span>
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
                    className="transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
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
              {information.map(({ href, label, polishOnly }) => (
                <li key={href}>
                  <Link
                    href={href}
                    hrefLang={polishOnly ? 'pl' : undefined}
                    className="transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
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