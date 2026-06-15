import { Playfair_Display } from "next/font/google"

const serif = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] })

const terms = [
  {
    title: "1. Postanowienia ogólne",
    text: "Właścicielem strony jest Julia Majewska Studio z siedzibą w Lublinie. Korzystanie ze strony oznacza akceptację niniejszego regulaminu.",
  },
  {
    title: "2. Zakres usług",
    text: "Studio świadczy usługi z zakresu medycyny estetycznej. Szczegółowy opis usług znajduje się w zakładkach „Zabiegi” oraz „Cennik”.",
  },
  {
    title: "3. Rezerwacje",
    text: "Rezerwacji można dokonać telefonicznie, mailowo lub online. Odwołanie wizyty należy zgłosić nie później niż 24 godziny przed planowanym terminem.",
  },
  {
    title: "4. Płatności",
    text: "Ceny usług określone są w zakładce „Cennik”. Płatności dokonywane są na miejscu w Studio lub w formie przedpłaty, jeśli zostało to ustalone.",
  },
  {
    title: "5. Odpowiedzialność",
    text: "Klient zobowiązany jest do przekazania prawdziwych informacji dotyczących swojego stanu zdrowia, przeciwwskazań oraz wcześniejszych zabiegów.",
  },
  {
    title: "6. Postanowienia końcowe",
    text: "Studio zastrzega sobie prawo do zmiany regulaminu. Aktualna wersja regulaminu jest zawsze dostępna na stronie internetowej.",
  },
]

export default function TermsConditions() {
  return (
    <main className="bg-[#fbf8f4] text-[#2f2924]">
      <section className="relative overflow-hidden px-6 py-28">
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-[#a67c52]/10 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#a67c52]/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-5 inline-flex rounded-full bg-[#a67c52] px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Dokumenty
          </p>

          <h1 className={`${serif.className} text-5xl font-semibold md:text-7xl`}>
            Regulamin
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-600">
            Zasady korzystania ze strony, rezerwacji usług oraz najważniejsze
            informacje organizacyjne.
          </p>

          <p className="mt-5 text-sm text-gray-500">
            Ostatnia aktualizacja: 2026
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl space-y-5">
          {terms.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-[#eadbc9] bg-white/75 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
            >
              <h2 className={`${serif.className} text-2xl font-semibold text-[#2f2924]`}>
                {item.title}
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}