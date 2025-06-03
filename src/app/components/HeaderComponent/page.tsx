'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../../styles/header.scss';

export default function HeaderComponent() {
  return (
    <header className="headerMenu">
      <div className="headerContent">
        {/* LEWO */}
        <div className="headerLeft">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>juliet.majewska@gmail.com</span>
          <FontAwesomeIcon icon={faPhone} />
          <span>+48 234 566 345</span>
        </div>

        {/* ŚRODEK */}
        <div className="headerCenter">
          <Link href="/">
            <Image src="/images/logo.jpg" alt="logo" width={100} height={100} />
          </Link>
        </div>

        {/* PRAWO */}
        <div className="headerRight">
          <ul>
            <li><Link href="/about">O MNIE</Link></li>
            <li><Link href="/offer">OFERTA</Link></li>
            <li><Link href="/priceList">CENNIK</Link></li>
            <li><Link href="/sale">PROMOCJA</Link></li>
            <li><Link href="/contact">KONTAKT</Link></li>
          </ul>

          <button className="bookingButton">UMÓW SIĘ</button>

          <div className="langButtons">
            <button>PL</button>
            <button>EN</button>
          </div>
        </div>
      </div>
    </header>
  );
}
