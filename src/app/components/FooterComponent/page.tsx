import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons'
import 'tailwindcss/tailwind.css'

export default function FooterComponent() {
  return (
    <footer className="bg-[#f9f5f0] text-[#5a4c3a] border-t border-[#e7dfd6]">
      <div className="max-w-6xl mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          
          <div>
            <div className="flex items-center gap-3">
              <Image src="/images/logo.jpg" alt="JM Studio — logo" width={72} height={72} className="rounded-full" />
              <div>
                <p className="font-semibold text-[#a67c52]">JM Studio</p>
                <p className="text-sm">Medycyna estetyczna</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Delikatne, naturalne efekty. Jakość i bezpieczeństwo w przyjaznej atmosferze.
            </p>
          </div>

          
          <div>
            <h2 className="text-lg font-semibold mb-3 text-[#a67c52]">Obserwuj nas</h2>
            <div className="flex items-center gap-3">
              <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e7dfd6] hover:bg-[#a67c52] hover:text-white transition">
                  <FontAwesomeIcon icon={faFacebook} className="h-4 w-4" />
                </span>
              </Link>
              <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e7dfd6] hover:bg-[#a67c52] hover:text-white transition">
                  <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" />
                </span>
              </Link>
              <Link href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e7dfd6] hover:bg-[#a67c52] hover:text-white transition">
                  <FontAwesomeIcon icon={faTiktok} className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>

        
          <div>
            <h2 className="text-lg font-semibold mb-3 text-[#a67c52]">Kontakt</h2>
            <ul className="space-y-1 text-sm">
              <li>
                Telefon:{" "}
                <Link href="tel:+48657391939" className="hover:underline">
                  +48 657 391 939
                </Link>
              </li>
              <li>
                E‑mail:{" "}
                <Link href="mailto:juliamajewska@gmail.com" className="hover:underline">
                  juliamajewska@gmail.com
                </Link>
              </li>
              <li className="pt-2">
                <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline">
                  <FontAwesomeIcon icon={faInstagram} className="h-3.5 w-3.5 text-[#a67c52]" />
                  Instagram
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h2 className="text-lg font-semibold mb-3 text-[#a67c52]">Adres</h2>
            <address className="not-italic text-sm">
              Julia Majewska Studio<br />
              ul. Wieniawska 8<br />
              20-400 Lublin
            </address>
            <nav className="mt-3 space-y-1 text-sm">
              <Link href="/privacy" className="hover:underline">Polityka prywatności</Link><br />
              <Link href="/terms" className="hover:underline">Regulamin</Link>
            </nav>
          </div>

          
          <div>
            <h2 className="text-lg font-semibold mb-3 text-[#a67c52]">Oferta</h2>
            <ul className="space-y-1 text-sm">
              <li><Link href="/offer#revolax" className="hover:underline">Revolax</Link></li>
              <li><Link href="/offer#juvederm" className="hover:underline">Juvederm</Link></li>
              <li><Link href="/offer#hialuronidaza" className="hover:underline">Hialuronidaza</Link></li>
              <li><Link href="/offer#biorepeel" className="hover:underline">Biorepeel</Link></li>
            </ul>
          </div>
        </div>

        
        <div className="mt-10 pt-6 border-t border-[#e7dfd6] flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <span>&copy; {new Date().getFullYear()} Julia Majewska Studio</span>
          <span>Created by MJSN</span>
        </div>
      </div>
    </footer>
  )
}
