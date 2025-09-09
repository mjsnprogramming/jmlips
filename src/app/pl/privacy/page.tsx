import { Playfair_Display } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#f7f5f0] text-[#2a241c]">
      
      <section className="relative w-full h-[28vh] md:h-[34vh] overflow-hidden">
        <div className="absolute inset-0 bg-[#2a241c]/70" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1
            className={`${serif.className} text-white text-4xl md:text-6xl leading-[1.1]`}
          >
            Polityka prywatności
          </h1>
        </div>
      </section>

      
      <section className="w-full py-16">
        <div className="w-full max-w-[1000px] mx-auto px-6 lg:px-12 space-y-10 leading-relaxed text-lg">
          <p>
            Administratorem danych osobowych jest{" "}
            <strong>Julia Majewska Studio</strong> z siedzibą przy ul.
            Wieniawskiej 8, 20-400 Lublin. Kontakt: tel. 345 678 242, e-mail:
            julia@example.com.
          </p>

          <div>
            <h2 className={`${serif.className} text-2xl font-semibold mb-3`}>
              1. Zakres i cele przetwarzania danych
            </h2>
            <p>
              Dane osobowe są przetwarzane w następujących celach: obsługa
              formularza kontaktowego, rezerwacje, marketing własnych usług,
              statystyki (cookies, Google Analytics), wyświetlanie mapy Google
              Maps.
            </p>
          </div>

          <div>
            <h2 className={`${serif.className} text-2xl font-semibold mb-3`}>
              2. Podstawy prawne
            </h2>
            <p>
              Dane są przetwarzane zgodnie z art. 6 ust. 1 RODO: lit. b
              (umowa/rezerwacje), lit. c (obowiązki prawne), lit. f (uzasadniony
              interes administratora), lit. a (zgoda).
            </p>
          </div>

          <div>
            <h2 className={`${serif.className} text-2xl font-semibold mb-3`}>
              3. Odbiorcy danych
            </h2>
            <p>
              Dane mogą być przekazywane dostawcy hostingu, systemów
              rezerwacyjnych, narzędzi analitycznych (Google), kancelarii
              prawnych i księgowych.
            </p>
          </div>

          <div>
            <h2 className={`${serif.className} text-2xl font-semibold mb-3`}>
              4. Okres przechowywania danych
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>formularz kontaktowy – do 12 miesięcy,</li>
              <li>rezerwacje – zgodnie z prawem podatkowym (5 lat),</li>
              <li>dane na podstawie zgody – do jej wycofania,</li>
              <li>cookies – do 26 miesięcy.</li>
            </ul>
          </div>

          <div>
            <h2 className={`${serif.className} text-2xl font-semibold mb-3`}>
              5. Prawa użytkowników
            </h2>
            <p>
              Każdy ma prawo do dostępu, sprostowania, usunięcia danych,
              ograniczenia przetwarzania, przenoszenia, sprzeciwu, cofnięcia
              zgody, a także złożenia skargi do Prezesa UODO.
            </p>
          </div>

          <div>
            <h2 className={`${serif.className} text-2xl font-semibold mb-3`}>
              6. Pliki cookies
            </h2>
            <p>
              Strona wykorzystuje cookies w celach technicznych, statystycznych,
              analitycznych i marketingowych. Użytkownik może zmienić ustawienia
              w przeglądarce.
            </p>
          </div>

          <div>
            <h2 className={`${serif.className} text-2xl font-semibold mb-3`}>
              7. Google Maps i social media
            </h2>
            <p>
              Osadzona mapa Google Maps oraz linki do profili społecznościowych
              (Instagram, Facebook, TikTok) działają zgodnie z zasadami tych
              dostawców.
            </p>
          </div>

          <div>
            <h2 className={`${serif.className} text-2xl font-semibold mb-3`}>
              8. Zabezpieczenia
            </h2>
            <p>
              Studio stosuje środki techniczne i organizacyjne (m.in.
              szyfrowanie SSL) chroniące dane osobowe.
            </p>
          </div>

          <div>
            <h2 className={`${serif.className} text-2xl font-semibold mb-3`}>
              9. Postanowienia końcowe
            </h2>
            <p>
              Studio zastrzega sobie prawo do zmian niniejszej polityki.
              Aktualna wersja dokumentu jest publikowana na stronie.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
