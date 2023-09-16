import Image from 'next/image'
import Link from 'next/link'
import '../styles/about.scss'
import 'tailwindcss/tailwind.css'

export default function About() {
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
          <div id = "main">
            <div id = "firstImage">
              <Image src = "/../images/about.jpg" alt = "about" width = "500" height = "500"></Image>
            </div>

            <div id = "aboutMeText">
              <h1 className = "text-center">Specjalistka od naturalnych efektów</h1>
              <p className = "text-left ml-5 mr-5">Witaj na mojej stronie, jestem Julia Majewska, 
                i cieszę się, że możesz poznać mnie i moją pasję do modelowania ust oraz zabiegów na twarz. 
                Jako specjalista w dziedzinie estetyki twarzy, moim celem jest pomóc Ci osiągnąć naturalny i wyjątkowy wygląd, 
                który podkreśli Twoje piękno w sposób subtelny i harmonijny.</p>
            </div>

            <div id = "passion">
              <h1 className = "text-center">Pasja do estetyki twarzy</h1>
              <p className = "text-center">Od dawna fascynuje mnie sztuka modelowania twarzy i podkreślanie indywidualnego piękna każdej osoby. 
                Dzięki zaawansowanym technikom i najnowszym osiągnięciom w dziedzinie estetyki twarzy, 
                mogę pomóc Ci osiągnąć wymarzony wygląd, jednocześnie dbając o zachowanie naturalności i równowagi.</p>
            </div>
          </div>
        </main>
    </body>
    </html>
    )
}
