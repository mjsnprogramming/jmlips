import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import 'tailwindcss/tailwind.css';

export default function FooterComponent() {
  return (
    <footer className="bg-gray-100 py-10 text-center text-sm">
      <div className="flex flex-col md:flex-row md:justify-around gap-10 px-10">

        <div>
          <Image src="/images/logo.jpg" alt="logo" width={100} height={100} />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Obserwuj mnie</h2>
          <div className="flex justify-center gap-4 text-2xl">
            <Link href="https://www.facebook.com/" target="_blank" title="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank" title="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link href="https://www.tiktok.com/" target="_blank" title="TikTok">
              <FontAwesomeIcon icon={faTiktok} />
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Kontakt</h2>
          <p>Zadzwoń: +48 657 391 939</p>
          <p>Napisz: juliamajewska@gmail.com</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <FontAwesomeIcon icon={faInstagram} />
            <Link href="https://www.instagram.com/" target="_blank">Instagram</Link>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Adres</h2>
          <p>Julia Majewska Studio</p>
          <p>ul. Wieniawska 8</p>
          <p>20-400 Lublin</p>
          <div className="mt-2 space-y-1">
            <Link href="/"><p>Polityka prywatności</p></Link>
            <Link href="/"><p>Regulamin</p></Link>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Oferta</h2>
          <ul className="list-disc list-inside">
            <li>Revolax</li>
            <li>Juvederm</li>
            <li>Hialuronidaza</li>
            <li>Biorepeel</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-gray-600">
        <span>&copy; 2024 Julia Majewska Studio</span><br />
        <span>Created by MJSN</span>
      </div>
    </footer>
  );
}
