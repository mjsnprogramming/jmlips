import Image from "next/image"
import Link from "next/link"

const CONTACT_ITEMS = [
  {
    label: "Adres",
    value: "ul. Wieniawska 8",
    second: "20-400 Lublin",
    href: "https://maps.google.com/?q=Wieniawska+8+Lublin",
  },
  {
    label: "Telefon",
    value: "+48 657 391 939",
    second: "Zadzwoń lub napisz SMS",
    href: "tel:+48657391939",
  },
  {
    label: "E-mail",
    value: "juliamajewska@gmail.com",
    second: "@julia_majewska_studio",
    href: "mailto:juliamajewska@gmail.com",
  },
]

export default function Contact() {
  return (
    <main className="bg-[#fbf8f4] text-[#2f2924]">
      <section className="relative overflow-hidden px-6 py-28">
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-[#a67c52]/10 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#a67c52]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-6 inline-flex rounded-full bg-[#a67c52] px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Kontakt
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-[#111827] md:text-7xl">
              Umów wizytę lub zapytaj o zabieg.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-600">
              Masz pytania dotyczące zabiegu, efektu albo przeciwwskazań?
              Skontaktuj się — spokojnie dobierzemy najlepsze rozwiązanie.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="tel:+48657391939"
                className="inline-flex rounded-full bg-[#a67c52] px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#956f49] hover:shadow-xl"
              >
                Zadzwoń
              </Link>

              <Link
                href="mailto:juliamajewska@gmail.com"
                className="inline-flex rounded-full border border-[#d7b995] bg-white/75 px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#a67c52] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                Napisz e-mail
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-full w-full rounded-[2.5rem] border border-[#d7b995]/60" />

            <Image
              src="/images/contact.jpg"
              alt="JM Studio"
              width={760}
              height={620}
              className="relative h-[560px] w-full rounded-[2.5rem] object-cover shadow-[0_30px_80px_rgba(0,0,0,0.16)]"
              priority
            />

            <div className="absolute -bottom-8 -right-4 z-20 rounded-3xl bg-white/85 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl md:-right-8">
              <p className="text-sm uppercase tracking-[0.25em] text-[#a67c52]">
                JM Studio
              </p>
              <p className="mt-2 text-lg font-semibold text-[#2f2924]">
                Lublin, Wieniawska 8
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {CONTACT_ITEMS.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className="group rounded-[2rem] border border-[#eadbc9] bg-[#fbf8f4] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)]"
            >
              <p className="text-3xl font-semibold text-[#a67c52]">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h2 className="mt-6 text-2xl font-semibold text-[#2f2924]">
                {item.label}
              </h2>

              <p className="mt-4 text-lg text-gray-700">
                {item.value}
              </p>

              <p className="mt-2 text-gray-500">
                {item.second}
              </p>

              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.16em] text-[#a67c52] transition group-hover:translate-x-1">
                Otwórz →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#fbf8f4] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#a67c52]">
              Lokalizacja
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-[#2f2924] md:text-5xl">
              Znajdziesz mnie w centrum Lublina.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Gabinet znajduje się przy ul. Wieniawskiej 8. Przed wizytą
              możesz skontaktować się telefonicznie lub mailowo.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] border border-[#eadbc9] shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.3834766030477!2d22.5519708!3d51.2488484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47225766e33247c7%3A0x30aa1000c22e0e17!2sWieniawska%208%2C%2020-400%20Lublin!5e0!3m2!1spl!2spl!4v1704996540658!5m2!1spl!2spl"
              width="100%"
              height="520"
              loading="lazy"
              className="block w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  )
}