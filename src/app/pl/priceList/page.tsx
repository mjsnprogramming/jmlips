import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

import 'tailwindcss/tailwind.css';

export default function PriceList() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleDetails = (section: string) => {
    setActiveSection(prev => (prev === section ? null : section));
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>Cennik – Julia Majewska</title>
        <meta name="description" content="Sprawdź cennik zabiegów u Julii Majewskiej." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Dancing+Script:wght@600&family=Amatic+SC&display=swap" rel="stylesheet" />
      </Head>

      <header className="bg-white shadow-md px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src="/images/logo.jpg" alt="logo" width={100} height={100} />
          </Link>

          <nav>
            <ul className="flex gap-4 font-medium">
              <li><Link href="/about">O MNIE</Link></li>
              <li><Link href="/offer">OFERTA</Link></li>
              <li><Link href="/priceList">CENNIK</Link></li>
              <li><Link href="/sale">PROMOCJA</Link></li>
              <li><Link href="/contact">KONTAKT</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="px-4 md:px-20 py-10">
        <div className="mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/">Strona główna</Link>
            <span>{'>'}</span>
            <span>Cennik</span>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center mb-10">CENNIK ZABIEGÓW</h1>

        <section className="space-y-6">
          <div className="border p-4 rounded shadow-md cursor-pointer" onClick={() => toggleDetails('lips')}>
            <h2 className="font-black text-xl mb-2">POWIĘKSZANIE/MODELOWANIE UST</h2>
            {activeSection === 'lips' && (
              <div className="space-y-2">
                <p>Revolax/Stylage - 1ml <span className="float-right">600 zł</span></p>
                <p>Juvederm Ultra 2 - 0.55ml <span className="float-right">450 zł</span></p>
                <p>Nawilżenie ust bez powiększenia <span className="float-right">500 zł</span></p>
                <p>Hialuronidaza <span className="float-right">500 zł</span></p>
              </div>
            )}
          </div>

          <div className="border p-4 rounded shadow-md cursor-pointer" onClick={() => toggleDetails('makeup')}>
            <h2 className="font-black text-xl mb-2">MAKIJAŻ PERMANENTNY</h2>
            {activeSection === 'makeup' && (
              <div className="space-y-2">
                <p>Brwi <span className="float-right">500 zł</span></p>
                <p>Konsultacja + rysunek <span className="float-right">50 zł</span></p>
                <p>Korekta do 10 tygodni <span className="float-right">150 zł</span></p>
                <p>Dopigmentowanie do 1,5 roku <span className="float-right">400 zł</span></p>
              </div>
            )}
          </div>

          <div className="border p-4 rounded shadow-md cursor-pointer" onClick={() => toggleDetails('meso')}>
            <h2 className="font-black text-xl mb-2">MEZOTERAPIA IGŁOWA</h2>
            {activeSection === 'meso' && (
              <div className="space-y-2">
                <p>Twarz <span className="float-right">130 zł</span></p>
                <p>Twarz + szyja <span className="float-right">300 zł</span></p>
                <p>Twarz + szyja + dekolt <span className="float-right">350 zł</span></p>
                <p>Skóra głowy <span className="float-right">450 zł</span></p>
              </div>
            )}
          </div>

          <div className="border p-4 rounded shadow-md">
            <h2 className="font-black text-xl">BIOREPEEL</h2>
            <p className="text-sm mt-2">Zapytaj o szczegóły podczas konsultacji.</p>
          </div>
        </section>
      </main>

      <FooterComponent />
    </>
  );
}
