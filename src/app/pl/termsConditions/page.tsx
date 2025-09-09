import { Playfair_Display } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });

export default function TermsConditions() {
  return (
    <main className="bg-[#f7f5f0] text-[#2a241c]">
      {/* HERO */}
      <section className="relative w-full h-[28vh] md:h-[34vh] overflow-hidden">
        <div className="absolute inset-0 bg-[#2a241c]/70" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1
            className={`${serif.className} text-white text-4xl md:text-6xl leading-[1.1]`}
          >
            Regulamin
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="w-full py-16">
        <div className="w-full max-w-[1000px] mx-auto px-6 lg:px-12 space-y-10 leading-relaxed text-lg">
          <p>
            Niniejszy regulamin określa zasady korzystania ze strony internetowej{" "}
            <strong>Julia Majewska Studio</strong>, w tym warunki rezerwacji
            usług, zasady odpowiedzialności oraz prawa i obowiązki użytkowników.
          </p>

          <div>
            <h2 className={`${serif.className} text-2xl font-semibold mb-3`}>
              1. Postanowienia ogólne
            </h2>
            <p>
              Właścicielem strony jest Julia Majewska Studio z siedzibą w
              Lublinie. Korzystanie ze strony oznacza akceptację niniejszego
              regulaminu.
            </p>
          </div>

          <div>
            <h2 className={`${serif.className} text-2xl font-semibold mb-3`}>
              2. Zakres usług
            </h2>
            <p>
              Studio świadczy usługi w zakresie medycyny estetycznej. Szczegółowy
              opis usług znajduje się w zakładkach „Oferta” oraz „Cennik”.
            </p>
          </div>

          <div>
            <h2 className={`${serif.className} text-2xl font-semibold mb-3`}>
              3. Rezerwacje
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Rezerwacji można dokonać telefonicznie, mailowo lub online.</li>
              <li>
                Studio zastrzega sobie prawo do potwierdzenia rezerwacji i
                kontaktu z klientem w celu ustalenia szczegółów.
              </li>
              <li>
                Odwołanie wizyty należy zgłosić nie później niż 24h przed
                planowanym terminem.
              </li>
            </ul>
          </div>

          <div>
            <h2 className={`${serif.className} text-2xl font-semibold mb-3`}>
              4. Płatności
            </h2>
            <p>
              Ceny usług określone są w zakładce „Cennik”. Studio może
              wprowadzać promocje i oferty specjalne. Płatności dokonywane są na
              miejscu w Studio lub w formie przedpłaty – jeśli zostało to
              ustalone.
            </p>
          </div>

          <div>
            <h2 className={`${serif.className} text-2xl font-semibold mb-3`}>
              5. Odpowiedzialność
            </h2>
            <p>
              Studio świadczy usługi zgodnie z aktualną wiedzą medyczną i z
              zachowaniem zasad bezpieczeństwa. Klient zobowiązany jest do
              przekazania prawdziwych informacji dotyczących swojego stanu
              zdrowia.
            </p>
          </div>

          <div>
            <h2 className={`${serif.className} text-2xl font-semibold mb-3`}>
              6. Postanowienia końcowe
            </h2>
            <p>
              Studio zastrzega sobie prawo do zmiany regulaminu. Aktualna wersja
              regulaminu jest zawsze dostępna na stronie internetowej.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
