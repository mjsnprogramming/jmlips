import Link from "next/link";

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

export default function ContactItems() {
return (
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
)}