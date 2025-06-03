import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import HeaderComponent from '../components/HeaderComponent/page';
import FooterComponent from '../components/FooterComponent/page';
import 'tailwindcss/tailwind.css';

export default function About() {
  return (
    <>
      <Head>
        <title>O mnie</title>
        <meta name="description" content="Poznaj szczegóły zabiegów oferowanych w naszym salonie kosmetycznym." />
      </Head>

      <HeaderComponent />

      <main className="px-4 md:px-20">
        <div className="my-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <li className="list-none"><Link href="/">Strona główna</Link></li>
            <span>{'>'}</span>
            <span>O mnie</span>
          </div>

          <div className="my-8 flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <Image src="/images/about.jpg" alt="about" width={500} height={500} className="rounded-lg" />
            </div>
            <div className="md:w-1/2 text-pink-700">
              <h1 className="text-3xl font-bold font-dancing-script mb-4">Specjalistka od naturalnych efektów</h1>
              <p className="text-gray-700 text-lg font-playfair">
                Witaj na mojej stronie, jestem Julia Majewska, i cieszę się, że możesz poznać mnie i moją pasję do modelowania ust oraz zabiegów na twarz.
                Jako specjalista w dziedzinie estetyki twarzy, moim celem jest pomóc Ci osiągnąć naturalny i wyjątkowy wygląd, który podkreśli Twoje piękno
                w sposób subtelny i harmonijny.
              </p>
            </div>
          </div>

          <section className="text-center mt-20">
            <h2 className="text-3xl font-bold text-pink-700 font-dancing-script">Pasja do estetyki twarzy</h2>
            <p className="mt-6 max-w-5xl mx-auto text-gray-700 font-playfair text-lg">
              Od dawna fascynuje mnie sztuka modelowania twarzy i podkreślanie indywidualnego piękna każdej osoby.
              Dzięki zaawansowanym technikom i najnowszym osiągnięciom w dziedzinie estetyki twarzy, mogę pomóc Ci osiągnąć wymarzony wygląd,
              jednocześnie dbając o zachowanie naturalności i równowagi.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <Image src="/images/lips1.jpg" alt="lips" width={300} height={300} className="rounded-lg" />
              <Image src="/images/lips3.jpg" alt="lips" width={300} height={300} className="rounded-lg" />
              <Image src="/images/lips2.jpg" alt="lips" width={300} height={300} className="rounded-lg" />
            </div>
          </section>

          <section className="text-center mt-20">
            <h2 className="text-3xl font-bold text-pink-700 font-dancing-script">Doświadczenie i Profesjonalizm</h2>
            <p className="mt-6 max-w-5xl mx-auto text-gray-700 font-playfair text-lg">
              Z 3 latami doświadczenia w branży, jestem pewna, że razem możemy osiągnąć najlepsze wyniki.
              Moja praktyka opiera się na najwyższych standardach opieki medycznej, a moje umiejętności stale się rozwijają dzięki uczestnictwu
              w kursach i szkoleniach. Bezpieczeństwo i zadowolenie pacjenta zawsze są dla mnie priorytetem.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <Image src="/images/certificate1.jpg" alt="certificate" width={700} height={500} className="rounded-lg" />
              <Image src="/images/certificate2.jpg" alt="certificate" width={450} height={700} className="rounded-lg" />
            </div>
          </section>

          <section className="text-center mt-20">
            <h2 className="text-3xl font-bold text-pink-700 font-dancing-script">Studio</h2>
            <p className="mt-6 max-w-3xl mx-auto text-gray-700 font-playfair text-lg">
              Chętnie odpowiem na Twoje pytania i umówię Cię na konsultację.<br />
              Razem możemy odkryć potencjał Twojej urody i stworzyć wyjątkowy wygląd, który będzie Cię zachwycać.<br />
              Dziękuję, że odwiedziłeś moją stronę internetową, i czekam na możliwość współpracy z Tobą.
            </p>
          </section>
        </div>
      </main>

      <FooterComponent />
    </>
  );
}
