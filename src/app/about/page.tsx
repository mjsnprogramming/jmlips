import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import HeaderComponent from '../components/HeaderComponent/page';
import FooterComponent from '../components/FooterComponent/page';
import 'tailwindcss/tailwind.css';

export default function About() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>O mnie – Julia Majewska</title>
        <meta name="description" content="Poznaj Julię Majewską – specjalistkę od modelowania ust i zabiegów estetycznych." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Dancing+Script:wght@600&family=Amatic+SC&display=swap"
          rel="stylesheet"
        />
      </Head>

      <HeaderComponent />

      <main className="px-4 md:px-20">
        <div className="my-8">
          <div className="flex items-center space-x-2">
            <li><Link href="/">Strona główna</Link></li>
            <span>{'>'}</span>
            <span>O mnie</span>
          </div>

          <div className="my-8 flex justify-center">
            <Image src="/images/about.jpg" alt="about" width={500} height={500} loading="lazy" />
          </div>

          <section className="text-center">
            <h1 className="text-2xl font-bold">Specjalistka od naturalnych efektów</h1>
            <p className="mt-4 max-w-4xl mx-auto">
              Witaj na mojej stronie, jestem Julia Majewska, i cieszę się, że możesz poznać mnie i moją pasję do
              modelowania ust oraz zabiegów na twarz. Jako specjalista w dziedzinie estetyki twarzy, moim celem jest
              pomóc Ci osiągnąć naturalny i wyjątkowy wygląd, który podkreśli Twoje piękno w sposób subtelny i harmonijny.
            </p>
          </section>

          <section className="text-center mt-16">
            <h1 className="text-2xl font-bold">Pasja do estetyki twarzy</h1>
            <p className="mt-4 max-w-5xl mx-auto">
              Od dawna fascynuje mnie sztuka modelowania twarzy i podkreślanie indywidualnego piękna każdej osoby.
              Dzięki zaawansowanym technikom i najnowszym osiągnięciom w dziedzinie estetyki twarzy, mogę pomóc Ci
              osiągnąć wymarzony wygląd, jednocześnie dbając o zachowanie naturalności i równowagi.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <Image src="/images/lips1.jpg" alt="lips" width={300} height={300} loading="lazy" />
              <Image src="/images/lips3.jpg" alt="lips" width={300} height={300} className="mt-5" loading="lazy" />
              <Image src="/images/lips2.jpg" alt="lips" width={300} height={300} className="mb-5" loading="lazy" />
            </div>
          </section>

          <section className="text-center mt-16">
            <h1 className="text-2xl font-bold">Doświadczenie i Profesjonalizm</h1>
            <p className="mt-4 max-w-4xl mx-auto">
              Z 3 latami doświadczenia w branży, jestem pewna, że razem możemy osiągnąć najlepsze wyniki. Moja praktyka
              opiera się na najwyższych standardach opieki medycznej, a moje umiejętności stale się rozwijają dzięki
              uczestnictwu w kursach i szkoleniach. Bezpieczeństwo i zadowolenie pacjenta zawsze są dla mnie priorytetem.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <Image src="/images/certificate1.jpg" alt="certificate" width={700} height={500} loading="lazy" />
              <Image src="/images/certificate2.jpg" alt="certificate" width={450} height={700} loading="lazy" />
            </div>
          </section>

          <section className="text-center mt-16">
            <h1 className="text-2xl font-bold">Studio</h1>
            <p className="mt-4 max-w-3xl mx-auto">
              Chętnie odpowiem na Twoje pytania i umówię Cię na konsultację.<br />
              Razem możemy odkryć potencjał Twojej urody i stworzyć wyjątkowy wygląd, który będzie Cię zachwycać.<br />
              Dziękuję, że odwiedziłeś moją stronę internetową, i czekam na możliwość współpracy z Tobą.
            </p>
          </section>
        </div>

        <FooterComponent />
      </main>
    </>
  );
}
