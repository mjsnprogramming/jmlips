import type { ReactNode } from "react";
import { LEGAL } from "@/lib/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("privacy", "pl");

/** Brakujące dane są wyraźnie oznaczone, żeby nie trafiły na stronę niezauważone. */
function Fill({ value, label }: { value: string; label: string }) {
  if (value) return <>{value}</>;
  return (
    <mark className="rounded bg-[#f3e2c4] px-1.5 py-0.5 text-[#5c4939]">[do uzupełnienia: {label}]</mark>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 font-heading text-2xl font-semibold text-[#2f2924]">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

const linkClass = "text-brand underline decoration-[#c9ad8e] underline-offset-4 hover:text-brand-dark";

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#f7f5f0] text-[#2a241c]">
      <section className="relative flex h-[28vh] w-full items-center justify-center overflow-hidden bg-[#2a241c]/90 md:h-[34vh]">
        <h1 className="px-6 text-center font-heading text-4xl leading-[1.1] text-white md:text-6xl">
          Polityka prywatności
        </h1>
      </section>

      <div className="mx-auto w-full max-w-[1000px] space-y-10 px-6 py-16 text-lg leading-relaxed lg:px-12">
        <p className="text-base text-[#6b625b]">Ostatnia aktualizacja: {LEGAL.lastUpdated}</p>

        <p>
          Ta polityka wyjaśnia, jakie dane osobowe przetwarzamy w związku z korzystaniem ze strony
          JM Studio oraz kontaktem i rezerwacją wizyt, w jakim celu i jakie masz prawa. Staramy się
          zbierać tylko te dane, które są naprawdę potrzebne.
        </p>

        <Section title="1. Administrator danych">
          <p>
            Administratorem Twoich danych osobowych jest{" "}
            <strong>
              <Fill value={LEGAL.adminName} label="imię i nazwisko / nazwa firmy" />
            </strong>
            {", "}NIP: <Fill value={LEGAL.nip} label="NIP" />, adres do korespondencji: {LEGAL.address}.
          </p>
          <p>
            W sprawach dotyczących danych osobowych możesz pisać na adres{" "}
            <a href={`mailto:${LEGAL.email}`} className={linkClass}>
              {LEGAL.email}
            </a>{" "}
            lub dzwonić pod numer {LEGAL.phone}.
          </p>
        </Section>

        <Section title="2. Jakie dane przetwarzamy i w jakim celu">
          <p>
            <strong>Przeglądanie strony.</strong> Sama strona nie zbiera danych osobowych i nie
            zawiera formularzy, narzędzi analitycznych ani reklamowych. Serwer, na którym działa
            strona, automatycznie zapisuje dane techniczne (m.in. adres IP, datę i godzinę wizyty,
            typ przeglądarki) w logach. Służą one wyłącznie do zapewnienia działania i
            bezpieczeństwa strony – podstawą jest nasz prawnie uzasadniony interes (art. 6 ust. 1
            lit. f RODO).
          </p>
          <p>
            <strong>Kontakt telefoniczny, e-mailowy i przez Instagram.</strong> Jeśli się z nami
            skontaktujesz, przetwarzamy dane, które sam(a) podasz (np. imię, numer telefonu, adres
            e-mail, treść wiadomości), aby odpowiedzieć na Twoje pytanie lub umówić wizytę (art. 6
            ust. 1 lit. b i f RODO).
          </p>
          <p>
            <strong>Rezerwacje przez Booksy.</strong> Rezerwacja wizyty odbywa się w serwisie
            Booksy, który przetwarza Twoje dane jako osobny administrator, zgodnie z własną polityką
            prywatności. Otrzymujemy od Booksy dane potrzebne do realizacji wizyty (m.in. imię i
            nazwisko, numer telefonu, termin i rodzaj zabiegu) i przetwarzamy je w celu wykonania
            usługi (art. 6 ust. 1 lit. b RODO) oraz rozliczeń wymaganych przepisami (art. 6 ust. 1
            lit. c RODO).
          </p>
          <p>
            <strong>Mapa Google.</strong> Mapa dojazdu na stronie kontaktu wczytuje się dopiero po
            kliknięciu przycisku „Pokaż mapę”. Wtedy Twoja przeglądarka łączy się z serwerami
            Google, a Google przetwarza Twoje dane (m.in. adres IP) i może zapisać pliki cookies –
            na podstawie Twojej zgody wyrażonej kliknięciem (art. 6 ust. 1 lit. a RODO). Zasady
            przetwarzania danych przez Google opisuje{" "}
            <a
              href="https://policies.google.com/privacy?hl=pl"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              polityka prywatności Google
            </a>
            .
          </p>
          <p>
            <strong>Linki do Instagrama, TikToka, Facebooka i Booksy.</strong> To zwykłe linki – do
            momentu kliknięcia strona nie przekazuje tym serwisom żadnych danych. Po przejściu do
            serwisu obowiązują jego zasady prywatności.
          </p>
          <p>
            Informacje o przetwarzaniu danych w gabinecie (np. wywiadu i zgody przed zabiegiem)
            przekazujemy podczas wizyty.
          </p>
        </Section>

        <Section title="3. Pliki cookies">
          <p>
            Strona nie używa własnych plików cookies analitycznych ani marketingowych i nie śledzi
            Twojej aktywności. Pliki cookies może zapisać wyłącznie Google – i tylko wtedy, gdy
            samodzielnie wczytasz mapę na stronie kontaktu. Ustawienia plików cookies możesz w każdej
            chwili zmienić w swojej przeglądarce.
          </p>
        </Section>

        <Section title="4. Komu przekazujemy dane">
          <p>Dane mogą trafić wyłącznie do podmiotów, które pomagają nam prowadzić stronę i salon:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>dostawcy hostingu strony,</li>
            <li>dostawcy poczty e-mail (Google),</li>
            <li>serwisom, przez które się kontaktujesz lub rezerwujesz wizytę (Booksy, Instagram – Meta),</li>
            <li>biuru rachunkowemu – w zakresie wymaganym przepisami,</li>
            <li>organom publicznym – wyłącznie gdy wymaga tego prawo.</li>
          </ul>
          <p>
            Niektórzy z tych dostawców (np. Google, Meta) mogą przekazywać dane poza Europejski
            Obszar Gospodarczy, w szczególności do USA, na podstawie decyzji Komisji Europejskiej
            (EU-US Data Privacy Framework) lub standardowych klauzul umownych.
          </p>
        </Section>

        <Section title="5. Jak długo przechowujemy dane">
          <ul className="list-disc space-y-2 pl-6">
            <li>korespondencja – do zakończenia sprawy, nie dłużej niż 12 miesięcy od ostatniego kontaktu,</li>
            <li>dane związane z wizytami i rozliczeniami – przez okres wymagany przepisami (m.in. podatkowymi – 5 lat od końca roku podatkowego),</li>
            <li>logi serwera – przez okres ustalony przez dostawcę hostingu, niezbędny do zapewnienia bezpieczeństwa,</li>
            <li>dane przetwarzane na podstawie zgody – do jej wycofania.</li>
          </ul>
        </Section>

        <Section title="6. Twoje prawa">
          <p>Masz prawo do:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>dostępu do swoich danych i otrzymania ich kopii,</li>
            <li>sprostowania danych,</li>
            <li>usunięcia danych lub ograniczenia ich przetwarzania,</li>
            <li>przenoszenia danych,</li>
            <li>sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie,</li>
            <li>wycofania zgody w dowolnym momencie (nie wpływa to na zgodność z prawem wcześniejszego przetwarzania).</li>
          </ul>
          <p>
            Aby skorzystać z tych praw, napisz na{" "}
            <a href={`mailto:${LEGAL.email}`} className={linkClass}>
              {LEGAL.email}
            </a>
            . Masz też prawo złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2,
            00-193 Warszawa).
          </p>
        </Section>

        <Section title="7. Dobrowolność podania danych">
          <p>
            Podanie danych jest dobrowolne, ale bez nich nie odpowiemy na wiadomość ani nie
            umówimy wizyty. Nie podejmujemy decyzji w sposób zautomatyzowany i nie profilujemy
            Twoich danych.
          </p>
        </Section>

        <Section title="8. Zmiany polityki">
          <p>
            Politykę aktualizujemy, gdy zmienia się sposób przetwarzania danych (np. po dodaniu
            nowych funkcji strony). Aktualna wersja jest zawsze dostępna na tej stronie.
          </p>
        </Section>
      </div>
    </div>
  );
}
