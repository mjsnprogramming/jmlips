
'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HeaderComponent() {
  const pathname = usePathname();
  const router = useRouter();
  const [language, setLanguage] = useState(pathname.startsWith('/en') ? 'en' : 'pl');

  const changeLanguage = (lang: 'pl' | 'en') => {
    setLanguage(lang);
    const newPath = pathname.replace(/^\/(pl|en)/, '');
    router.push(`/${lang}${newPath === '' ? '/' : newPath}`);
  };
  
  return (
    <header className = "w-full h-[102px] px-6 shadow-sm bg-[#f7f5f0] flex items-center justify-between">
      <div className = "flex items-center">
        <Link href="/" className="text-2xl md:text-3xl font-light text-gray-900">
          JM <span className="font-semibold text-[#a67c52]">Studio</span>
        </Link>
      </div>

      <nav className = "flex items-center space-x-8 text-black text-sm font-medium">
        <Link href = {`/${language}/about`} className = "hover:underline"> O MNIE</Link>
        <Link href = {`/${language}/offer`} className = "hover:underline">ZABIEGI</Link>
        <Link href = {`/${language}/portfolio`} className = "hover:underline">PORTFOLIO</Link>
        <Link href = {`/${language}/contact`} className = "hover:underline">KONTAKT</Link>
      </nav>

      <div className = 'flex items-center space-x-2'>
        <button onClick = {() => changeLanguage('pl')} className = {`flex items-center px-2 py-1 rounded text-sm border ${language === 'pl' ? 'bg-white' : 'bg-transparent'} boredr-gray-300`}>
          <Image src = "/images/pl_flag.png" alt = "PL" width = {20} height = {15} className = "mr-1"/>
          PL 
        </button>

        <button onClick = {() => changeLanguage('en')} className = {`flex items-center px-2 py-1 rounded text-sm border ${language === 'en' ? 'bg-white' : 'bg-transparent'} border-gray-300`}>
          <Image src = "/images/uk_flag.png" alt = "EN" width = {20} height = {15} className = "mr-1"/>
          EN
        </button>
      </div>
    </header>
  );
}
