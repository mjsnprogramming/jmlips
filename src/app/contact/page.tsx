import Image from 'next/image'
import Link from 'next/link'
import '../styles/contact.scss'
import 'tailwindcss/tailwind.css'

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
            <span>Strona główna {'>'} </span>
            <span>Kontakt</span>
            <h1>Kontakt</h1>
            <p>Skontaktuj się z nami {'–'} Julia Majewska Studio czeka na Twój kontakt!</p>
          </div>

          <div id = "contactPageImage">
            <Image src = "/../../images/contact.jpg" alt = "contact lips" width = "100" height = "100"></Image>
          </div>

          <div id = "contactInformation">
            <h1>Witam w Julia Majewska Studio!</h1>
            <h2>JULIA MAJEWSKA STUDIO</h2>
          </div>
        </main>
        </body>
        </html>
    )}