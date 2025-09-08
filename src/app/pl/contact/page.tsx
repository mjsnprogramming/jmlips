import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });

export default function Contact() {
  return (
    <main className = "bg-[#f7f5f0] text-[#2a241c]">
      <section className = "relative w-full h-[40vh] md:h-[55vh] overflow-hidden">
        <Image src = "/images/contact.jpg" alt = "Kontakt - Julia Majewska Studio" fill priority className = "obkect-cover object-center scale-101"/>
        <div className = "absolute inset-0 bg-black/30" />
        <div className = "relative z-10 h-full flex items-center justify-center">
          <h1 className = {`${serif.className} text-white text-5xl md:text-6xl leading-[1.1]`}>
            Kontakt
          </h1>
        </div>
      </section>

      <section className = "w-full py-16">
        <div className = "w-full max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className = "flex justify-center text-[#a67c52] text-3xl mb-4">📍</div>
            <h2 className = {`${serif.className} text-2xl font-semibold`}>Adres</h2>
            <p className = "mt-2 text-lg leading-relaxed">
              ul. Wieniawska 8 <br /> 20-400 Lublin
            </p>
          </div>

          <div>
            <div className = "flex justify-center text-[#a67c52] text-3xl mb-4">
              ☎️
            </div>
            <h2 className = {`${serif.className} text-2xl font-semibold`}>Telefon</h2>
            <p className="mt-2 text-lg">345 678 242</p>
          </div>

          <div>
            <div className="flex justify-center text-[#a67c52] text-3xl mb-4">
              ✉️
            </div>
            <h2 className={`${serif.className} text-2xl font-semibold`}>
              E-mail
            </h2>
            <p className="mt-2 text-lg">julia@example.com</p>
            <p className="text-lg">@julia_majewska_studio</p>
          </div>
        </div>
      </section>

     
      <section className="w-full">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.3834766030477!2d22.5519708!3d51.2488484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47225766e33247c7%3A0x30aa1000c22e0e17!2sWieniawska%208%2C%2020-400%20Lublin!5e0!3m2!1spl!2spl!4v1704996540658!5m2!1spl!2spl"
            width="100%"
            height="450"
            loading="lazy"
            className="w-full rounded-xl shadow-md"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      
      <section className="w-full py-16">
        <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <Link
            href="/pl/contact-form"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#a67c52] text-white text-lg hover:bg-[#8c6844] transition shadow-md"
          >
            Umów się na konsultację
          </Link>
        </div>
      </section>
    </main>
  );
}