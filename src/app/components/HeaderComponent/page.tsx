'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'

export default function HeaderComponent() {
  const pathname = usePathname()
  const router = useRouter()

  const [language, setLanguage] = useState<'pl' | 'en'>(
    pathname.startsWith('/en') ? 'en' : 'pl'
  )

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const cleanPath = useMemo(
    () => pathname.replace(/^\/(pl|en)/, '') || '/',
    [pathname]
  )

  const nav = useMemo(
    () => [
      { href: '/about', labelPl: 'O MNIE', labelEn: 'ABOUT' },
      { href: '/offer', labelPl: 'ZABIEGI', labelEn: 'TREATMENTS' },
      { href: '/pricelist', labelPl: 'CENNIK', labelEn: 'PRICELIST' },
      { href: '/portfolio', labelPl: 'PORTFOLIO', labelEn: 'PORTFOLIO' },
      { href: '/contact', labelPl: 'KONTAKT', labelEn: 'CONTACT' },
    ],
    []
  )

  const changeLanguage = (lang: 'pl' | 'en') => {
  setLanguage(lang)
  setIsMenuOpen(false)

  const newPath = pathname.replace(/^\/(pl|en)/, '')

  if (lang === 'pl') {
    router.push(newPath === '' || newPath === '/' ? '/' : `/pl${newPath}`)
    return
  }

  router.push(newPath === '' || newPath === '/' ? '/en' : `/en${newPath}`)
}

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/50 bg-[#f7f5f0]/75 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] w-full items-center justify-between px-5 md:h-[92px] md:px-10">
        <Link
          href={language === 'pl' ? '/' : '/en'}
          onClick={() => setIsMenuOpen(false)}
          className="text-2xl font-light tracking-tight text-gray-900 transition hover:opacity-80 md:text-3xl"
        >
          JM <span className="font-semibold text-[#a67c52]">Studio</span>
        </Link>

        <nav
          className="
            hidden items-center gap-1 rounded-full border border-white
            bg-white/90 px-2 py-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.08)]
            ring-1 ring-black/5 backdrop-blur-xl md:flex
          "
          aria-label="Główna nawigacja"
        >
          {nav.map((item) => {
            const href = `/${language}${item.href}`
            const isActive =
              cleanPath === item.href ||
              (item.href !== '/' && cleanPath.startsWith(item.href))

            return (
              <Link
                key={item.href}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={[
                  'group relative rounded-full px-4 py-2 text-sm tracking-[0.08em] transition-all duration-300',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a67c52]/40',
                  isActive
                    ? 'bg-[#f7efe6] text-[#a67c52]'
                    : 'text-gray-800 hover:bg-[#f7efe6] hover:text-[#a67c52]',
                ].join(' ')}
              >
                {language === 'pl' ? item.labelPl : item.labelEn}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
  {/* Desktop */}
  <div className="hidden md:inline-flex items-center overflow-hidden rounded-full border border-[#d7b995] bg-white/75 shadow-[0_8px_25px_rgba(0,0,0,0.05)] backdrop-blur-xl">
    <button
      onClick={() => changeLanguage('pl')}
      className={[
        'flex items-center gap-2 px-3 py-1.5 text-sm transition-all duration-300',
        language === 'pl'
          ? 'bg-[#a67c52] text-white'
          : 'text-gray-800 hover:bg-[#f1ebe4]',
      ].join(' ')}
    >
      <Image src="/images/pl_flag.png" alt="PL" width={20} height={15} />
      PL
    </button>

    <button
      onClick={() => changeLanguage('en')}
      className={[
        'flex items-center gap-2 px-3 py-1.5 text-sm transition-all duration-300',
        language === 'en'
          ? 'bg-[#a67c52] text-white'
          : 'text-gray-800 hover:bg-[#f1ebe4]',
      ].join(' ')}
    >
      <Image src="/images/uk_flag.png" alt="EN" width={20} height={15} />
      EN
    </button>
  </div>

  {/* Mobile */}
  <div className="flex items-center gap-2 text-sm tracking-[0.12em] md:hidden">
    <button
      onClick={() => changeLanguage('pl')}
      className={
        language === 'pl'
          ? 'font-medium text-[#a67c52]'
          : 'text-gray-500'
      }
    >
      PL
    </button>

    <span className="text-gray-300">|</span>

    <button
      onClick={() => changeLanguage('en')}
      className={
        language === 'en'
          ? 'font-medium text-[#a67c52]'
          : 'text-gray-500'
      }
    >
      EN
    </button>
  </div>


          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={isMenuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d7b995] bg-white/80 shadow-[0_8px_25px_rgba(0,0,0,0.06)] backdrop-blur-xl transition hover:bg-[#f7efe6] md:hidden"
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
        <nav className="border-t border-[#eadfd4] bg-[#f7f5f0]/95 px-5 py-5 shadow-[0_18px_35px_rgba(0,0,0,0.08)] backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((item) => {
              const href = `/${language}${item.href}`
              const isActive =
                cleanPath === item.href ||
                (item.href !== '/' && cleanPath.startsWith(item.href))

              return (
                <Link
                  key={item.href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                  className={[
                    'rounded-full border px-5 py-4 text-sm tracking-[0.14em] shadow-sm transition-all duration-300',
                    isActive
                      ? 'border-[#d7b995] bg-[#f7efe6] text-[#a67c52]'
                      : 'border-white bg-white/80 text-gray-800 hover:bg-[#f7efe6] hover:text-[#a67c52]',
                  ].join(' ')}
                >
                  {language === 'pl' ? item.labelPl : item.labelEn}
                </Link>
              )
            })}
          </div>
        </nav>
      )}
    </header>
  )
}