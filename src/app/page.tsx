import Image from 'next/image'
import Link from 'next/link'
import './/styles/home.scss'
import 'tailwindcss/tailwind.css'
 
 export default function Home() {
  
  return (
    <html lang = "en">
      <head>
        <meta charSet = "utf-8" name = "viewport" content = "width=device-width,initial-scale=1.0"/>
        <link rel = "stylesheet" href = "styles/home.scss"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Dancing+Script:wght@600&family=Amatic+SC&display=swap" rel="stylesheet"/>
      </head>

      <body>
        <header>
        
          <div id = "headerMenu">
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
          <button id = "booking">UMÓW SIĘ</button>
          <button id = "polish">PL</button>
          <button id = "english">EN</button>
          </div>
        </header>
    </body>
    </html>
  )
}




