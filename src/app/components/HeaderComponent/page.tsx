'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { BOOKSY_URL } from '@/lib/links'

type Language = 'pl' | 'en'

const NAV = [
  { href: '/about', labelPl: 'O MNIE', labelEn: 'ABOUT' },
  { href: '/offer', labelPl: 'ZABIEGI', labelEn: 'TREATMENTS' },
  { href: '/pricelist', labelPl: 'CENNIK', labelEn: 'PRICES' },
  { href: '/portfolio', labelPl: 'PORTFOLIO', labelEn: 'PORTFOLIO' },
  { href: '/contact', labelPl: 'KONTAKT', labelEn: 'CONTACT' },
]

// Podstrony, które mają wersję angielską. Z pozostałych (np. polityka prywatności)
// przełącznik języka prowadzi na angielską stronę główną zamiast na 404.
const EN_PAGES = NAV.map((item) => item.href)

const COPY = {
  pl: { nav: 'Główna nawigacja', open: 'Otwórz menu', close: 'Zamknij menu', book: 'Umów wizytę' },
  en: { nav: 'Main navigation', open: 'Open menu', close: 'Close menu', book: 'Book now' },
} as const

const LANGUAGES = [
  { code: 'pl', label: 'PL', name: 'Polski', flag: '/images/pl_flag.png' },
  { code: 'en', label: 'EN', name: 'English', flag: '/images/uk_flag.png' },
] as const

export default function HeaderComponent() {
  const pathname = usePathname()
  const router = useRouter()
  const headerRef = useRef<HTMLElement | null>(null)

  // Język zawsze wynika z adresu, więc zgadza się też po cofnięciu w przeglądarce.
  const language: Language = pathname.startsWith('/en') ? 'en' : 'pl'
  const copy = COPY[language]
  const cleanPath = pathname.replace(/^\/(pl|en)/, '') || '/'

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Menu mobilne zamyka się po zmianie strony, klawiszem Esc i kliknięciem poza nagłówkiem.
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isMenuOpen) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    function onPointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setIsMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [isMenuOpen])

  const changeLanguage = (lang: Language) => {
    setIsMenuOpen(false)
    if (lang === language) return

    if (cleanPath === '/') {
      router.push(lang === 'pl' ? '/' : '/en')
      return
    }

    if (lang === 'en' && !EN_PAGES.some((page) => cleanPath.startsWith(page))) {
      router.push('/en')
      return
    }

    router.push(`/${lang}${cleanPath}`)
  }

  const isActive = (href: string) => cleanPath === href || cleanPath.startsWith(`${href}/`)

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b border-white/50 bg-[#f7f5f0]/75 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[var(--header-h)] w-full items-center justify-between px-5 md:px-10">
        <Link
          href={language === 'pl' ? '/' : '/en'}
          className="rounded-md text-2xl font-light tracking-tight text-gray-900 transition hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6a43] md:text-3xl"
        >
          JM <span className="font-semibold text-[#a67c52]">Studio</span>
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full border border-white bg-white/90 px-2 py-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.08)] ring-1 ring-black/5 backdrop-blur-xl md:flex"
          aria-label={copy.nav}
        >
          {NAV.map((item) => {
            const active = isActive(item.href)

            return (
              <Link
                key={item.href}
                href={`/${language}${item.href}`}
                aria-current={active ? 'page' : undefined}
                className={[
                  'relative rounded-full px-4 py-2 text-sm tracking-[0.08em] transition-all duration-300',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6a43]',
                  active
                    ? 'bg-[#f7efe6] text-[#8f6a43]'
                    : 'text-gray-800 hover:bg-[#f7efe6] hover:text-[#8f6a43]',
                ].join(' ')}
              >
                {language === 'pl' ? item.labelPl : item.labelEn}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* Desktop */}
          <div
            role="group"
            aria-label="Język / Language"
            className="hidden items-center overflow-hidden rounded-full border border-[#d7b995] bg-white/75 shadow-[0_8px_25px_rgba(0,0,0,0.05)] backdrop-blur-xl md:inline-flex"
          >
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => changeLanguage(lang.code)}
                aria-pressed={language === lang.code}
                aria-label={`${lang.label} – ${lang.name}`}
                lang={lang.code}
                className={[
                  'flex items-center gap-2 px-3 py-1.5 text-sm transition-all duration-300',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8f6a43]',
                  language === lang.code
                    ? 'bg-[#8f6a43] text-white'
                    : 'text-gray-800 hover:bg-[#f1ebe4]',
                ].join(' ')}
              >
                <Image src={lang.flag} alt="" width={20} height={15} />
                {lang.label}
              </button>
            ))}
          </div>

          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-[#8f6a43] px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-md transition hover:bg-[#7a5a38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6a43] focus-visible:ring-offset-2 xl:inline-flex"
          >
            {copy.book}
            <span className="sr-only">{language === 'pl' ? ' (Booksy, nowa karta)' : ' (Booksy, new tab)'}</span>
          </a>

          {/* Mobile */}
          <div role="group" aria-label="Język / Language" className="flex items-center gap-2 text-sm tracking-[0.12em] md:hidden">
            {LANGUAGES.map((lang, index) => (
              <span key={lang.code} className="flex items-center gap-2">
                {index > 0 && (
                  <span aria-hidden="true" className="text-gray-300">
                    |
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => changeLanguage(lang.code)}
                  aria-pressed={language === lang.code}
                  aria-label={`${lang.label} – ${lang.name}`}
                  lang={lang.code}
                  className={[
                    'rounded px-1 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6a43]',
                    language === lang.code ? 'font-medium text-[#8f6a43]' : 'text-gray-600',
                  ].join(' ')}
                >
                  {lang.label}
                </button>
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? copy.close : copy.open}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d7b995] bg-white/80 shadow-[0_8px_25px_rgba(0,0,0,0.06)] backdrop-blur-xl transition hover:bg-[#f7efe6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6a43] md:hidden"
          >
            <span className="relative h-5 w-6">
              <span
                className={[
                  'absolute left-0 top-[6px] h-[1.5px] w-6 bg-[#a67c52] transition-all duration-300',
                  isMenuOpen ? 'translate-y-[4px] rotate-45' : '',
                ].join(' ')}
              />
              <span
                className={[
                  'absolute right-0 top-[14px] h-[1.5px] w-4 bg-[#a67c52] transition-all duration-300',
                  isMenuOpen ? 'w-6 -translate-y-[4px] -rotate-45' : '',
                ].join(' ')}
              />
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label={copy.nav}
          className="border-t border-[#eadfd4] bg-[#f7f5f0]/95 px-5 py-5 shadow-[0_18px_35px_rgba(0,0,0,0.08)] backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-3">
            {NAV.map((item) => {
              const active = isActive(item.href)

              return (
                <Link
                  key={item.href}
                  href={`/${language}${item.href}`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={[
                    'rounded-full border px-5 py-4 text-sm tracking-[0.14em] shadow-sm transition-all duration-300',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6a43]',
                    active
                      ? 'border-[#d7b995] bg-[#f7efe6] text-[#8f6a43]'
                      : 'border-white bg-white/80 text-gray-800 hover:bg-[#f7efe6] hover:text-[#8f6a43]',
                  ].join(' ')}
                >
                  {language === 'pl' ? item.labelPl : item.labelEn}
                </Link>
              )
            })}

            <a
              href={BOOKSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-[#8f6a43] px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-md transition hover:bg-[#7a5a38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f6a43] focus-visible:ring-offset-2"
            >
              {copy.book}
              <span className="sr-only">{language === 'pl' ? ' (Booksy, nowa karta)' : ' (Booksy, new tab)'}</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
