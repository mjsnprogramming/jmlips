# Strona salonu medycyny estetycznej JM Studio (Lublin • Zamość)

Strona salonu prowadzonego przez siostrę właściciela repo (Julia Majewska). Projekt jest po pełnym przeglądzie kodu, tekstów i SEO (listopad 2026). Zostały głównie dane i treści od właściciela (lista na dole).

## Stack i uruchomienie

- Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS 3.3, Swiper, framer-motion, react-icons.
- Dane z headless WordPressa (ACF) przez REST API. Adres w zmiennej `WORDPRESS_API_URL`. Każda funkcja pobierająca dane musi działać także bez WordPressa (pusta lista albo dane zapasowe, nigdy wyjątek, który wywraca stronę).
- `npm run dev` / `npm run build`. Przed oboma automatycznie uruchamia się `npm run portfolio` (lista zdjęć portfolio, patrz niżej).
- Domena: `NEXT_PUBLIC_SITE_URL`. Na razie tymczasowa `https://jm-studio.example` w `src/lib/seo.ts`. **Przed publikacją trzeba ją ustawić.**

## Struktura

- Strona główna PL: `/` (`src/app/page.tsx`), EN: `/en`. Podstrony: `/pl/...` i `/en/...` (about, offer, pricelist, portfolio, contact). Polityka i regulamin tylko PL (`/pl/privacy`, `/pl/terms`).
- **Obie wersje językowe używają tych samych komponentów z propem `lang`** (np. `OfferClient`, `PortfolioClient`, `AboutIntro`, `Contact*`, `PriceListClient`). Wyjątki z osobnymi plikami EN: `HeroSectionEN`, `PopularTreatmentsEN`, `InstagramTestimonialsEN`. Zmiany w nich trzeba robić w obu plikach.
- **Wersję EN poprawia się razem z PL** (decyzja właściciela; dawna zasada „nie ruszać `en`” nie obowiązuje).
- Header i stopka leżą w `src/app/components/HeaderComponent/page.tsx` i `FooterComponent/page.tsx`. Next widzi je też jako adresy `/components/...` (zablokowane w `robots.txt`). Właściciel chce, żeby zostały w tym miejscu.

### Wspólne dane: zmieniać tylko tutaj

- `src/lib/links.ts`: Booksy, Instagram, TikTok, Facebook, adres gabinetu, linki do map.
- `src/lib/legal.ts`: dane administratora do polityki i regulaminu. Puste pola widać na stronie jako „[do uzupełnienia: …]”.
- `src/lib/seo.ts`: tytuły i opisy stron (PL/EN), domena, dane firmy (JSON-LD). Każda strona eksportuje `metadata = pageMetadata("klucz", "pl"|"en")`.

### Typy wpisów w WordPressie (`/wp-json/wp/v2/...`)

`treatment` (polecane na stronie głównej), `alltreatments` (strona zabiegów), `question` (FAQ), `price_item` (cennik), `testimonial` (opinie), `about`, `certyfikat`, `portfolio_item` (jeszcze nie założony, patrz niżej), `media`.

Uwaga: `treatment` i `alltreatments` to różne typy. Linki z polecanych zabiegów do oferty idą po **tytule** (`?treatment=<tytuł>`), a nie po slugu. Strona oferty rozpoznaje też slug i aliasy (`treatmentTitleAliases` w `OfferClient`).

### Portfolio

- Zdjęcia z kodu: pliki w `public/images/portfolio/<kategoria>/` (kategorie = nazwy folderów, np. `modelowanie-ust`). Kolejność według nazwy pliku. `scripts/generate-portfolio.mjs` tworzy `src/lib/portfolio.generated.ts`. Ten plik commituje się razem ze zdjęciami.
- Zdjęcia z WordPressa (gdy powstanie typ `portfolio_item` z REST API i polami ACF `category` = nazwa folderu, `image`, `order`) wyświetlają się przed zdjęciami z kodu. Brak typu = same zdjęcia z kodu.
- Zwykłe zdjęcia z zabiegów, **bez układu przed/po** (decyzja właściciela).

## Decyzje właściciela (nie zmieniać bez pytania)

- Wygląd i klimat zostają. To ma być poprawa jakości, nie redesign.
- Hero: mały napis „JM Studio • Lublin • Zamość” nad dużym „Medycyna estetyczna i zabiegi upiększające” (oba w `<h1>` ze względu na SEO, wygląd bez zmian). Mały napis pogrubiony, z białą poświatą. Wideo bez nakładki.
- „Umów wizytę” prowadzi do Booksy (Hero, header od 1280 px, menu mobilne).
- Wizyty umawia się tylko przez **Booksy i Instagram**. Na stronie nie ma telefonu ani e-maila do kontaktu (właścicielka z nich nie korzysta). E-mail zostaje wyłącznie w polityce prywatności i regulaminie jako kontakt w sprawie danych osobowych.
- Na przycisku w opiniach zostaje `@jm.studio_`.
- Bez cen i bez rezerwacji online na kartach zabiegów, bez gwiazdek i ocen z Google.
- Bez osobnych podstron `/lublin` i `/zamosc`. Zamość to „wizyty wyjazdowe w wybrane dni”.
- Zwracamy się neutralnie: „klienci” (nie „klientki”), „Polecane zabiegi” (nie „Najpopularniejsze”). Strona mówi głosem właścicielki w 1. osobie („mój Instagram”, „zebrałam”).
- Nazwa zabiegu: **„Usuwanie kwasu hialuronowego”** wszędzie (EN „Hyaluronic Acid Dissolving”). „Hialuronidaza” to zabieg, nie lek, ale w kodzie używamy nowej nazwy. Tytuł w WordPressie zmienia właścicielka.
- Na stronie zabiegów kategoria może się wyświetlać dwa razy (nad tytułem i nad opisem). Tak ma zostać.
- Brązowy nagłówek w sekcji opinii zostaje (celowy akcent).

## Konwencje

- **Kolory marki** z `tailwind.config.js`, bez wpisywania odcieni ręcznie: `brand` (#8f6a43, tekst i przyciski, kontrast ok. 4,9:1), `brand-light` (#a67c52, tylko duże nagłówki i akcenty), `brand-soft` (#b98b5c, dekoracje), `brand-dark` (#7a5a38, hover). Jasne beże (#d7b995, #eadbc9 itd.) to ramki i tła.
- **Nagłówki h1–h4** krojem Quicksand (reguła w `globals.css`), tekst w Interze, „Wasze opinie” pismem odręcznym (Dancing Script). Bez sztucznej kursywy (Quicksand jej nie ma).
- Tailwind 3.3 domyślnie nie ma przezroczystości 15/35/45/55/65/85, więc są dodane w configu. Przed użyciem innej nietypowej wartości trzeba sprawdzić, czy istnieje.
- Wysokość headera: zmienna CSS `--header-h` (78 px telefon, 92 px od md).
- Layout ma już `<main>`, więc strony zaczynają się od `<div>`, a nie od kolejnego `<main>`.
- Dostępność: `focus-visible`, `motion-reduce`, `aria-*` na sliderach i okienkach (Esc, blokada przewijania, fokus).
- Teksty marketingowe: reklama usług medycznych w Polsce jest regulowana. Bez obietnic efektów i bez nazw leków na receptę.
- Strona nie ustawia własnych ciasteczek i nie ma analityki. Mapa Google ładuje się dopiero po kliknięciu. Po dodaniu analityki trzeba zaktualizować politykę i dodać baner zgody.

## Sposób pracy

- Zmiany małymi krokami. Przed zmianą pokazać listę propozycji i zapytać. Teksty też oceniać i proponować poprawki.
- Commity i push bezpośrednio na `main` (właściciel tak woli). Commity podpisane jak w historii repo.
- Po zmianach: `npx tsc --noEmit -p .`, `npx next lint`, `npx next build`, sprawdzenie w przeglądarce (Playwright) na telefonie i komputerze, PL i EN.
- Bez WordPressa większość sekcji jest pusta. Do testów warto postawić lokalną atrapę REST API (prosty serwer Node zwracający JSON dla `/wp-json/wp/v2/...`) i uruchomić `WORDPRESS_API_URL=http://localhost:PORT npm run dev`.
- W kontenerze w chmurze Google Fonts czasem się nie pobiera i nagłówki wyglądają na szeryfowe. To problem środowiska, nie kodu.
- Na Windowsie zmiana samej wielkości liter w nazwie folderu (np. `pl/priceList` → `pl/pricelist`) może wymagać ręcznej poprawki po `git pull`.

## Do zrobienia (czeka na właściciela)

- Dane do `src/lib/legal.ts`: imię i nazwisko lub nazwa firmy, NIP. Potwierdzić zasady w regulaminie (odwołanie 24 h, przedpłaty, przeciwwskazania).
- Domena (`NEXT_PUBLIC_SITE_URL`).
- Adresy profili TikTok i Facebook (`src/lib/links.ts`).
- Który Instagram jest właściwy: `juliamajewska_studio_` (`INSTAGRAM_URL`, opinie i stopka) czy `julia_majewska_studio` (`INSTAGRAM_CONTACT_URL`, strona kontaktu).
- Angielskie nazwy zabiegów z WordPressa, żeby ujednolicić portfolio (`src/lib/portfolio.ts`) i cennik (`src/lib/pricelist.ts`).
- W WordPressie: zmiana tytułu „Hialuronidaza” na „Usuwanie kwasu hialuronowego”, uzupełnienie zdjęć zabiegów (brak zdjęcia = beżowe pole), ewentualnie typ `portfolio_item`.
- Zdjęcia do portfolio.
- Przegląd polityki prywatności i regulaminu przez osobę znającą RODO / prawo przed publikacją.
- Opcjonalnie: przycięcie screenów opinii (nicki i zdjęcia klientów). Właściciel uznał, że zgoda z Instagrama wystarcza.
- `homebg2.mp4` (7,5 MB) i `public/images/opinion1-9.webp` są nieużywane. Do usunięcia, jeśli właściciel potwierdzi.
- Pola „czas zabiegu” i „efekt” z WordPressa nie są nigdzie wyświetlane. Można je dodać pod opisem zabiegu, jeśli właścicielka je uzupełnia.
