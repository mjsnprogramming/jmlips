import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import FooterComponent from '../components/FooterComponent/page';
import HeaderComponent from '../components/HeaderComponent/page';
import 'tailwindcss/tailwind.css';

export default function Treatments() {
  return (
    <>
      <Head>
        <title>Zabiegi – Julia Majewska</title>
        <meta name="description" content="Poznaj szczegóły zabiegów oferowanych w naszym salonie kosmetycznym." />
      </Head>

      <HeaderComponent />

      <main className="px-6 md:px-20 py-10">
        <div className="text-sm mb-4 text-gray-600">
          <Link href="/">Strona główna</Link> <span className="mx-2">{'>'}</span> <span>Zabiegi</span>
        </div>

        <h1 className="text-3xl font-bold text-center mb-10 text-pink-600">Zabiegi kosmetyczne</h1>

        <section className="space-y-16">
          {/* ZABIEG 1 */}
          <article className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/2">
              <Image src="/images/lips1.jpg" alt="Modelowanie ust" width={600} height={400} className="rounded-lg" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-pink-600 mb-2">Modelowanie ust</h2>
              <p className="text-gray-700 mb-2">
                Zabieg polega na delikatnym wypełnieniu i ujędrnieniu ust kwasem hialuronowym. Efekt? Naturalne i harmonijne usta dopasowane do rysów twarzy.
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Czas zabiegu: ok. 40 minut</li>
                <li>Efekty widoczne od razu, utrzymują się do 9 miesięcy</li>
                <li>Bezpieczeństwo potwierdzone certyfikatami</li>
              </ul>
            </div>
          </article>

          {/* ZABIEG 2 */}
          <article className="flex flex-col-reverse md:flex-row gap-8 items-start">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-pink-600 mb-2">Mezoterapia igłowa</h2>
              <p className="text-gray-700 mb-2">
                Terapia regenerująca, polegająca na śródskórnym podaniu koktajli witaminowych. Idealna na zmęczoną, odwodnioną lub starzejącą się skórę.
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Stymuluje produkcję kolagenu i elastyny</li>
                <li>Minimalny czas rekonwalescencji</li>
                <li>Zalecane serie: 3–4 zabiegi co 2 tygodnie</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <Image src="/images/meso.jpg" alt="Mezoterapia" width={600} height={400} className="rounded-lg" />
            </div>
          </article>

          {/* ZABIEG 3 */}
          <article className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/2">
              <Image src="/images/biorepeel.jpg" alt="Biorepeel" width={600} height={400} className="rounded-lg" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold text-pink-600 mb-2">Biorepeel</h2>
              <p className="text-gray-700 mb-2">
                Peeling medyczny nowej generacji — działa dwufazowo: oczyszcza, złuszcza i odnawia skórę. Idealny dla osób z trądzikiem, przebarwieniami i szarą cerą.
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Bezpieczny przez cały rok</li>
                <li>Efekt glow i wygładzenie</li>
                <li>Nie wymaga złuszczania mechanicznego</li>
              </ul>
            </div>
          </article>
        </section>
      </main>

      <FooterComponent />
    </>
  );
}
