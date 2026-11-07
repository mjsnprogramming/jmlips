import Link from "next/link";
import type { ReactNode } from "react";
import Fill from "@/app/components/legal/Fill";
import { LEGAL } from "@/lib/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("terms", "pl");

const linkClass = "text-brand underline decoration-[#c9ad8e] underline-offset-4 hover:text-brand-dark";

const terms: { title: string; content: ReactNode }[] = [
  {
    title: "1. Postanowienia ogólne",
    content: (
      <>
        <p>
          Właścicielem strony internetowej JM Studio jest{" "}
          <strong>
            <Fill value={LEGAL.adminName} label="imię i nazwisko / nazwa firmy" />
          </strong>
          , NIP: <Fill value={LEGAL.nip} label="NIP" />, adres: {LEGAL.address}, e-mail:{" "}
          <a href={`mailto:${LEGAL.email}`} className={linkClass}>
            {LEGAL.email}
          </a>
 („Studio”).
        </p>
        <p>
          Regulamin określa zasady korzystania ze strony oraz najważniejsze zasady umawiania i
          odbywania wizyt w Studio. Jest to jednocześnie regulamin świadczenia usług drogą
          elektroniczną w rozumieniu ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą
          elektroniczną.
        </p>
      </>
    ),
  },
  {
    title: "2. Korzystanie ze strony",
    content: (
      <>
        <p>
          Strona udostępnia bezpłatnie informacje o Studio, zabiegach, cenach i sposobach kontaktu.
          Korzystanie z niej nie wymaga rejestracji ani podawania danych.
        </p>
        <p>
          Do korzystania ze strony wystarczy urządzenie z dostępem do internetu i aktualna
          przeglądarka internetowa. Zabronione jest podejmowanie działań zakłócających działanie
          strony.
        </p>
      </>
    ),
  },
  {
    title: "3. Charakter informacji na stronie",
    content: (
      <>
        <p>
          Informacje na stronie, w tym opisy zabiegów i ceny, mają charakter informacyjny i nie
          stanowią oferty w rozumieniu Kodeksu cywilnego. Zakres zabiegu i jego koszt ustalane są
          indywidualnie podczas konsultacji.
        </p>
        <p>
          Treści na stronie nie są poradą medyczną. O kwalifikacji do zabiegu decyduje konsultacja
          w Studio.
        </p>
      </>
    ),
  },
  {
    title: "4. Rezerwacje i odwołanie wizyt",
    content: (
      <>
        <p>
          Wizytę można umówić przez serwis Booksy lub przez Instagram.
          Rezerwacje w Booksy podlegają także regulaminowi tego serwisu.
        </p>
        <p>
          Odwołanie lub zmianę terminu wizyty należy zgłosić nie później niż 24 godziny przed
          planowanym terminem.
        </p>
      </>
    ),
  },
  {
    title: "5. Płatności",
    content: (
      <p>
        Ceny usług podane są w zakładce{" "}
        <Link href="/pl/pricelist" className={linkClass}>
          „Cennik”
        </Link>
        . Płatności dokonywane są na miejscu w Studio lub w formie przedpłaty, jeśli zostało to
        wcześniej ustalone.
      </p>
    ),
  },
  {
    title: "6. Bezpieczeństwo zabiegów",
    content: (
      <>
        <p>
          Klient jest zobowiązany przekazać prawdziwe informacje o swoim stanie zdrowia,
          przeciwwskazaniach, przyjmowanych lekach oraz wcześniejszych zabiegach.
        </p>
        <p>
          Zabieg może nie zostać wykonany, jeśli podczas konsultacji zostaną stwierdzone
          przeciwwskazania.
        </p>
      </>
    ),
  },
  {
    title: "7. Prawa autorskie",
    content: (
      <p>
        Teksty, zdjęcia i inne materiały na stronie są chronione prawem autorskim. Ich kopiowanie
        i wykorzystywanie bez zgody Studio jest zabronione.
      </p>
    ),
  },
  {
    title: "8. Reklamacje dotyczące strony",
    content: (
      <p>
        Uwagi i reklamacje dotyczące działania strony można zgłaszać na adres{" "}
        <a href={`mailto:${LEGAL.email}`} className={linkClass}>
          {LEGAL.email}
        </a>
        . Odpowiemy w ciągu 14 dni od otrzymania zgłoszenia.
      </p>
    ),
  },
  {
    title: "9. Dane osobowe",
    content: (
      <p>
        Zasady przetwarzania danych osobowych opisuje{" "}
        <Link href="/pl/privacy" className={linkClass}>
          Polityka prywatności
        </Link>
        .
      </p>
    ),
  },
  {
    title: "10. Postanowienia końcowe",
    content: (
      <>
        <p>
          W sprawach nieuregulowanych regulaminem stosuje się przepisy prawa polskiego. Regulamin
          nie ogranicza praw przysługujących konsumentom na podstawie przepisów prawa.
        </p>
        <p>
          Studio może zmienić regulamin, np. w razie zmiany przepisów lub sposobu działania strony.
          Aktualna wersja jest zawsze dostępna na tej stronie.
        </p>
      </>
    ),
  },
];

export default function TermsConditions() {
  return (
    <div className="bg-[#fbf8f4] text-[#2f2924]">
      <section className="relative overflow-hidden px-6 py-28">
        <div aria-hidden="true" className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-brand-light/10 blur-3xl" />
        <div aria-hidden="true" className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-brand-light/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-5 inline-flex rounded-full bg-brand px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Dokumenty
          </p>

          <h1 className="font-heading text-5xl font-semibold md:text-7xl">Regulamin</h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-600">
            Zasady korzystania ze strony, rezerwacji wizyt oraz najważniejsze informacje
            organizacyjne.
          </p>

          <p className="mt-5 text-sm text-gray-500">Ostatnia aktualizacja: {LEGAL.lastUpdated}</p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl space-y-5">
          {terms.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-[#eadbc9] bg-white/75 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
            >
              <h2 className="font-heading text-2xl font-semibold text-[#2f2924]">{item.title}</h2>
              <div className="mt-4 space-y-3 text-lg leading-8 text-gray-600">{item.content}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
