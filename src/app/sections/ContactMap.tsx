const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Vital+Skin%2C+ul.+Szafirowa+7A%2C+20-573+Lublin";
const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Vital+Skin%2C+ul.+Szafirowa+7A%2C+20-573+Lublin&output=embed";

export default function ContactMap() {
  return (
    <section className="bg-[#f7f3ed] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <div>
          <p className="mb-5 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.28em] text-[#a77b50] sm:text-sm">
            Lokalizacja{" "}
            <span className="h-px w-12 bg-[#c8a987]" aria-hidden="true" />
          </p>

          <h2 className="max-w-xl font-heading text-[2.65rem] font-normal leading-[1.08] tracking-[-0.045em] text-[#171513] sm:text-5xl">
            Znajdziesz mnie przy{" "}
            <span className="italic text-[#a77b50]">ul. Szafirowej.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#625d58] sm:text-[1.02rem] sm:leading-8">
            Gabinet JM Studio znajduje się w Vital Skin przy ul. Szafirowej 7A,
            20-573 Lublin. Wizytę możesz wygodnie zarezerwować online przez Booksy
            lub skontaktować się przez Instagram.
          </p>

          <ul className="mt-7 space-y-3.5 text-sm text-[#625d58] sm:text-[0.95rem]">
            {[
              "Gabinet w Vital Skin",
              "Szafirowa 7A, 20-573 Lublin",
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
              title="Mapa dojazdu do JM Studio w Vital Skin, ul. Szafirowa 7A, 20-573 Lublin"
              src={MAP_EMBED_URL}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[350px] w-full sm:h-[400px] lg:h-[420px]"
            />

            <div className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] rounded-2xl bg-[#fcfaf7]/95 p-4 shadow-[0_12px_32px_rgba(75,54,35,0.14)] backdrop-blur-sm sm:bottom-4 sm:left-4 sm:w-[215px] sm:p-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#a77b50]">
                JM Studio · Vital Skin
              </p>
              <p className="mt-2 text-sm font-medium text-[#201d1a]">
                ul. Szafirowa 7A
              </p>
              <p className="text-xs text-[#706963]">20-573 Lublin</p>
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
