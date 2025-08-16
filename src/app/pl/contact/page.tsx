import Image from 'next/image'
import Link from 'next/link'
import '../styles/contact.scss'
import 'tailwindcss/tailwind.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons'




export default function Contact() {
    return (
        <html lang = "en">
      <head>
        <meta charSet = "utf-8" name = "viewport" content = "width=device-width,initial-scale=1.0"/>
        <link rel = "stylesheet" href = "styles/contact.scss"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Dancing+Script:wght@600&family=Amatic+SC&display=swap" rel="stylesheet"/>
      </head>

      <body>
        <header>
        
          <div id = "headerMenu">
            <div id = "logo" >
              <Link href = "/">
                <Image src = "/../../../images/logo.jpg" className = "logo" alt = "logo" width = "100" height = "100"></Image>
              </Link>
            </div>
          <ul className = "flex justify-center items-center">
            <li><Link href = "/about">O MNIE</Link></li>
            <li><Link href = "/offer">OFERTA</Link></li>
            <li><Link href = "/priceList">CENNIK</Link></li>
            <li><Link href = "/sale">PROMOCJA</Link></li>
            <li><Link href = "/contact">KONTAKT</Link></li>
          </ul>
          </div>
        </header>

        <main>
          <div id = "contactCaption">
            <li><Link href = "/../">Strona główna {'>'}</Link></li>
            <span>Kontakt</span>
            <h1>Kontakt</h1>
            <p>Skontaktuj się z nami {'–'} Julia Majewska Studio <br></br>czeka na Twój kontakt!</p>
          </div>

          <div id = "contactPageImage">
            <Image src = "/../../images/contact.jpg" alt = "contact lips" width = "100" height = "100"></Image>
          </div>

          <div id = "contactInformation">
            <h1>Witam w Julia Majewska Studio!</h1>
            <h2>JULIA MAJEWSKA STUDIO</h2>
            <p>ul. Wieniawska 8</p>
            <p>20-400 Lublin</p>
            <p>tel. 345 678 242</p>
            <p>e-mail: julia@xdxddf24234@gmail.com</p>
            <div id = "igContactPage">
              <FontAwesomeIcon className = "iconContact" icon = {faInstagram}  width = "30px" height = "30px"/>
              <li><Link href = "https://www.instagram.com/">INSTAGRAM</Link></li>
              </div>
          </div>

          <div id = "googleMaps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2497.3834766030477!2d22.551970800000003!3d51.2488484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47225766e33247c7%3A0x30aa1000c22e0e17!2sWieniawska%208%2C%2020-400%20Lublin!5e0!3m2!1spl!2spl!4v1704996540658!5m2!1spl!2spl" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </main>

        <FooterComponent></FooterComponent>
        </body>
        </html>
    )}