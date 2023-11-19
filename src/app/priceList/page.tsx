import Image from 'next/image'
import Link from 'next/link'
import '../styles/pricelist.scss'
import 'tailwindcss/tailwind.css'

export default function PriceList() {
    return (
        <html lang = "en">
        <head>
          <meta charSet = "utf-8" name = "viewport" content = "width=device-width,initial-scale=1.0"/>
          <link rel = "stylesheet" href = "styles/about.scss"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Dancing+Script:wght@600&family=Amatic+SC&display=swap" rel="stylesheet"/>
        </head>
  
        <body>
          <header>
          
            <div id = "headerMenu">
              <div id = "logo" >
                <Link href = "/">
                  <Image src = "" alt = "logo"></Image>
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
            <div id = "mainPriceList">
              <div id = "lipsModelling">
                 <h1 className = "font-black">POWIĘKSZANIE/MODELOWANIE UST</h1>
                 <p className = "font-medium">Revolax/Stylage - 1ml</p><span className = "revolaxPrice">600 zł</span>
                 <p className = "font-medium">Juvederm Ultra 2 - 0.55ml</p><span className = "juvedermPrice">450 zl</span>
                 <p className = "font-medium">Nawilżenie ust bez powiększenia</p><span className = "moisturizingPrice">500 zł</span>
                 <p className = "font-medium">Hialuronidaza</p><span className = "hialoPrice">500 zł</span>
              </div>
            </div>
          </main>
        
    </body>
    </html>
    )
}