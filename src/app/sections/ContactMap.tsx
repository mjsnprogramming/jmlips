const MAPS_DIRECTIONS_URL = "https://maps.google.com/?q=Wieniawska+8+Lublin";
const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.3834766030477!2d22.5519708!3d51.2488484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47225766e33247c7%3A0x30aa1000c22e0e17!2sWieniawska%208%2C%2020-400%20Lublin!5e0!3m2!1spl!2spl!4v1704996540658!5m2!1spl!2spl";

export default function ContactMap() {
  return (
    <section className="bg-[#f7f3ed] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <div>
          <p className="mb-5 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.28em] text-[#a77b50] sm:text-sm">
            Lokalizacja{" "}
            <span className="h-px w-12 bg-[#c8a987]" aria-hidden="true" />
          </p>

          <h2 className="max-w-xl font-serif text-[2.65rem] font-normal leading-[1.08] tracking-[-0.045em] text-[#171513] sm:text-5xl">
            Znajdziesz mnie w{" "}
            <span className="italic text-[#a77b50]">centrum Lublina.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#625d58] sm:text-[1.02rem] sm:leading-8">
            Gabinet znajduje się przy ul. Wieniawskiej 8. Wizytę możesz wygodnie
            zarezerwować online przez Booksy lub skontaktować się przez Instagram.
          </p>

          <ul className="mt-7 space-y-3.5 text-sm text-[#625d58] sm:text-[0.95rem]">
            {[
              "Centrum Lublina",
              "Dogodny dojazd i parking w pobliżu",
              "Rezerwacja online przez Booksy",
            ].map((item) => (
              <li key={item} className="flex items-center gap-4">
                <span
                  className="h-px w-8 shrink-0 bg-[#a77b50]"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>

          <a
            href={MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-5 rounded-full bg-[#a77b50] px-7 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#916b45] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a77b50] motion-reduce:transition-none sm:mt-9 sm:min-w-[245px]"
          >
            Otwórz w Google Maps <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="relative overflow-hidden rounded-[1.75rem] border border-[#e6d8c8] bg-white p-2.5 shadow-[0_18px_48px_rgba(75,54,35,0.11)] sm:rounded-[2rem] sm:p-3">
          <div className="relative overflow-hidden rounded-[1.35rem] sm:rounded-[1.55rem]">
            <iframe
              title="Mapa dojazdu do JM Studio, ul. Wieniawska 8, Lublin"
              src={MAP_EMBED_URL}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[350px] w-full sm:h-[400px] lg:h-[420px]"
            />

            <div className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] rounded-2xl bg-[#fcfaf7]/95 p-4 shadow-[0_12px_32px_rgba(75,54,35,0.14)] backdrop-blur-sm sm:bottom-4 sm:left-4 sm:w-[215px] sm:p-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#a77b50]">
                JM Studio
              </p>
              <p className="mt-2 text-sm font-medium text-[#201d1a]">
                ul. Wieniawska 8
              </p>
              <p className="text-xs text-[#706963]">20-400 Lublin</p>
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-xs text-[#986b41] underline decoration-[#c9ad8e] underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a77b50]"
              >
                Otwórz trasę <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}