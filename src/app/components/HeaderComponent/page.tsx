'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'

export default function HeaderComponent() {
  const pathname = usePathname()
  const router = useRouter()

  const [language, setLanguage] = useState(
    pathname.startsWith('/en') ? 'en' : 'pl'
  )

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

    const newPath = pathname.replace(/^\/(pl|en)/, '')
    router.push(`/${lang}${newPath === '' ? '/' : newPath}`)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/50 bg-[#f7f5f0]/75 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
      <div className="mx-auto flex h-[92px] w-full items-center justify-between px-6 md:px-10">
        <Link
          href={`/${language}`}
          className="text-2xl md:text-3xl font-light tracking-tight text-gray-900 transition hover:opacity-80"
        >
          JM{' '}
          <span className="font-semibold text-[#a67c52]">
            Studio
          </span>
        </Link>

        <nav
          className="
hidden md:flex items-center gap-1
rounded-full
border border-white
bg-white/90
px-2 py-1.5
shadow-[0_10px_35px_rgba(0,0,0,0.08)]
backdrop-blur-xl
ring-1 ring-black/5
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

        <div className="flex items-center pr-1 md:pr-4">
          <div className="inline-flex items-center overflow-hidden rounded-full border border-[#d7b995] bg-white/75 shadow-[0_8px_25px_rgba(0,0,0,0.05)] backdrop-blur-xl">
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
        </div>
      </div>
    </header>
  )
}