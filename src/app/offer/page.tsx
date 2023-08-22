import Image from 'next/image'
import Link from 'next/link'

export default function Offer() {
    return (
        <html lang = "en">
      <head>
        <meta charSet = "utf-8" name = "viewport" content = "width=device-width,initial-scale=1.0"/>
        <link rel = "stylesheet" href = "offer.scss"/>
      </head>

      <body>
        <header>
        
          <div id = "header_menu">
            <div id = "logo">
              <Link href = "/">
                <Image src = "" alt = "logo"></Image>
              </Link>
            </div>
          </div>
          <ul>
            <li><Link href = "/about">O MNIE</Link></li>
            <li><Link href = "/offer">OFERTA</Link></li>
            <li><Link href = "/priceList">CENNIK</Link></li>
            <li><Link href = "/sale">PROMOCJA</Link></li>
            <li><Link href = "/contact">KONTAKT</Link></li>
          </ul>
        </header>
    </body>
    </html>
    )
}