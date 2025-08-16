
'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

export default function HeaderComponent() {
  const pathname = usePathname();
  const router = useRouter();
  const [language, setLanguage] = useState(pathname.startsWith('/en') ? 'en' : 'pl');

  const changeLanguage = (lang: 'pl' | 'en') => {
    setLanguage(lang);
    const newPath = pathname.replace(/^\/(pl|en)/, '');
    router.push(`/${lang}${newPath === '' ? '/' : newPath}`);
  };
  
    const cleanPath = useMemo(() => pathname.replace(/^\/(pl|en)/, '') || '/', [pathname])

    const nav = useMemo( () => [
      { href: '/about', labelPl: 'O MNIE', labelEn: 'ABOUT' },
      { href: '/offer', labelPl: 'ZABIEGI', labelEn: 'TREATMENTS' },
      { href: '/pricelist', labelPl: 'CENNIK', labelEn: 'PRICELIST'},
      { href: '/portfolio', labelPl: 'PORTFOLIO', labelEn: 'PORTFOLIO' },
      { href: '/contact', labelPl: 'KONTAKT', labelEn: 'CONTACT' },
    ],
    []
  )

  return (
      <header className = " w-full bg-[#f7f5f0]/80 backdrop-blur-md border-b border-[#e7dfd6]">
        <div className = "md:px-10 mx-auto w-full px-6 h-[102px] px-4 md:px-6 flex items-center justify-between">
          <Link href = {`/${language}/`} className = "text-2xl md:text-3xl font-light text-gray-900">
          JM <span className = "font-semibold text-[#a67c52]">Studio</span>
          </Link>

          <nav className = "hidden md:flex items-center gap-1 px-2 py-1 rounded-full border border-[#e7dfd6] bg-white/60 shadow-sm" aria-label = "Główna nawigacja">
            {nav.map((item) => {
              const href = `/${language}${item.href}`
              const isActive = cleanPath === item.href || (item.href !== '/' && cleanPath.startsWith(item.href))

              return (
                <Link key = {item.href} href = {href} aria-current = {isActive ? 'page' : undefined}
                className = {[
                  'relative px-4 py-2 text-sm tracking-wide transition-colors',
                  'focus:outline-none focus:visible:ring-2 focus-visible:ring-[#a67c52]/40 focus-visible:rounded-full',
                  isActive ? 'text-[#a67c52]' : 'text-gray-800 hover:text-[#a67c52]',
                ].join(' ')}>
                  <span className = "relative z-10">
                    {language === 'pl' ? item.labelPl : item.labelEn}
                  </span>

                  <span className = {[
                    'pointer-events-none absolute left-3 right-3 -bottom-[6px] h-[2px] origin-left rounded',
                     isActive ? 'bg-[#a67c52] scale-x-100' : 'bg-[#a67c52]/80 scale-x-0 group-hover:scale-x-100',
                     'transition-transform duration-300 ease-out', 
                  ].join(' ')}
                />
                </Link>
              )
            })}
          </nav>

          <div className = "flex items-center">
            <div className = "inline-flex items-center rounded-full border border-[#a67c52] bg-white/70 shadow-sm overflow-hidden">
              <button onClick = {() => changeLanguage('pl')}
              className = {[
                'flex items-center gap-2 px-3 py-1.5 text-sm transition',
                language === 'pl' ? 'bg-[#a67c52] text-white' : 'text-gray-800 hover:bg-[#f1ebe4]',
              ].join(' ')}
              >
                <Image src = "/images/pl_flag.png" alt = "PL" width = {20} height = {15} />
                PL
              </button>
              <button
              onClick={() => changeLanguage('en')}
              className={[
                'flex items-center gap-2 px-3 py-1.5 text-sm transition',
                language === 'en' ? 'bg-[#a67c52] text-white' : 'text-gray-800 hover:bg-[#f1ebe4]',
              ].join(' ')}
            >
              <Image src="/images/uk_flag.png" alt="EN" width={20} height={15} />
              EN
            </button>
            </div>
          </div>
        </div>
      </header>
  );
 
}
