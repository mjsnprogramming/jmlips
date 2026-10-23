import Link from "next/link";

export default function ContactMap() {
  return (
    <section className="bg-[#fbf8f4] px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Lewa kolumna */}

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#a67c52]">
            Lokalizacja
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-[#2f2924] md:text-5xl">
            Znajdziesz mnie w centrum Lublina.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Gabinet znajduje się przy ul. Wieniawskiej 8. Wizytę możesz
            wygodnie zarezerwować online przez Booksy lub skontaktować się
            przez Instagram.
          </p>

          <div className="mt-8 space-y-4">
  {[
    "Centrum Lublina",
    "Dogodny dojazd i parking w pobliżu",
    "Rezerwacja online przez Booksy",
  ].map((item) => (
    <div key={item} className="flex items-center gap-4">
      <div className="h-[1px] w-8 bg-[#a67c52]" />
      <p className="text-[15px] text-[#4b5563]">{item}</p>
    </div>
  ))}
</div>

          <Link
            href="https://maps.google.com/?q=Wieniawska+8+Lublin"
            target="_blank"
            className="mt-10 inline-flex rounded-full bg-[#a67c52] px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#956f49] hover:shadow-xl"
          >
            Otwórz w Google Maps
          </Link>
        </div>

        {/* Prawa kolumna */}

        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#eadbc9] shadow-[0_30px_80px_rgba(0,0,0,0.12)] transition duration-500 hover:scale-[1.01]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.3834766030477!2d22.5519708!3d51.2488484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47225766e33247c7%3A0x30aa1000c22e0e17!2sWieniawska%208%2C%2020-400%20Lublin!5e0!3m2!1spl!2spl!4v1704996540658!5m2!1spl!2spl"
            width="100%"
            height="520"
            loading="lazy"
            className="block w-full"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Karta na mapie */}

          <div className="absolute bottom-6 left-6 rounded-3xl bg-white/90 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.15)] backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.25em] text-[#a67c52]">
              JM Studio
            </p>

            <p className="mt-2 text-lg font-semibold text-[#2f2924]">
              ul. Wieniawska 8
            </p>

            <p className="text-gray-500">
              20-400 Lublin
            </p>

            <Link
              href="https://maps.google.com/?q=Wieniawska+8+Lublin"
              target="_blank"
              className="mt-4 inline-flex text-sm font-semibold text-[#a67c52] transition hover:translate-x-1"
            >
              Otwórz trasę →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}