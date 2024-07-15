import Image from 'next/image'
import Link from 'next/link'
import '../styles/header.scss'
import 'tailwindcss/tailwind.css'

export default function HeaderComponent() {
      
    return (
        <header>
        
        <div id = "headerMenu">
            <div id = "headerEmail">
              <span>juliet.majewska@gmail.com</span>
            </div>
            <div id = "headerPhoneNumber">
              <span>+48 234 566 345</span>
            </div>
            <div id = "logo">
              <Link href = "/">
                <Image src = "/images/logo.jpg" alt = "logo" className = "logo" width = "100" height = "100"></Image>
              </Link>
          </div>
          <ul className = "flex justify-center items-center">
            <li><Link href = "/about">O MNIE</Link></li>
            <li><Link href = "/offer">OFERTA</Link></li>
            <li><Link href = "/priceList">CENNIK</Link></li>
            <li><Link href = "/sale">PROMOCJA</Link></li>
            <li><Link href = "/contact">KONTAKT</Link></li>
          </ul>
          <div id = "bookingButton">
            <button id = "booking">UMÓW SIĘ</button>
          </div>
          <div id = "languageButton">
            <button id = "polish">PL</button>
            <button id = "english">EN</button>
          </div>
          </div>
        </header>
    )    
}