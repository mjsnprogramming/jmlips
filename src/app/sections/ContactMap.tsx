export default function ContactMap() {
return (
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
)}