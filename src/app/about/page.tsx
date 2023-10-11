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
              <p className = "text-center ml-40 mr-40">Od dawna fascynuje mnie sztuka modelowania twarzy i podkreślanie indywidualnego piękna każdej osoby. 
                Dzięki zaawansowanym technikom i najnowszym osiągnięciom w dziedzinie estetyki twarzy, 
                mogę pomóc Ci osiągnąć wymarzony wygląd, jednocześnie dbając o zachowanie naturalności i równowagi.</p>
                <div id = "passionLipsImages" className = "mt-20 flex justify-center">
                  <Image src = "/../images/lips1.jpg" alt = "lips" width = "300" height = "300"></Image>
                  <Image src = "/../images/lips2.jpg" alt = "lips" width = "300" height = "300" className = "ml-20"></Image>
                  <Image src = "/../images/lips3.jpg" alt = "lips" width = "300" height = "300" className = "ml-20"></Image>
                </div>
            </div>

            <div id = "experience">
              <h1 className = "text-center">DoŚwiadczenie i Profesjonalizm</h1>
              <p className = "text-center ml-40 mr-40">Z 3 latami doświadczenia w branży, jestem pewna, że razem możemy osiągnąć najlepsze wyniki. 
              Moja praktyka opiera się na najwyższych standardach opieki medycznej, a moje umiejętności stale się rozwijają dzięki uczestnictwu w kursach i szkoleniach. 
              Bezpieczeństwo i zadowolenie pacjenta zawsze są dla mnie priorytetem.</p>
              <div id = "certificateImage" className = "mt-20 flex justify-center">
                <Image src = "/../images/certificate1.jpg" alt = "certificate" width = "500" height = "500"></Image>
                <Image src = "/../images/certificate2.jpg" alt = "certificate" width = "500" height = "700" className = "ml-20"></Image>
              </div>
            </div>

            <div id = "individual">
              <h1>Indywidualne podejście</h1>
              <p>Rozumiem, że każdy ma swoje własne cele i oczekiwania co do wyglądu. 
                Dlatego zawsze zaczynamy od indywidualnej konsultacji, podczas której możemy omówić Twoje potrzeby i cele. 
                Razem opracujemy plan zabiegowy, który będzie dostosowany do Ciebie, abyś mógł osiągnąć upragniony efekt.</p>
            </div>

            <div id = "naturalness">
              <h1>Dbałość o Naturalność</h1>
              <p>W mojej pracy kładę duży nacisk na zachowanie naturalności. 
                Chcę, aby każdy zabieg podkreślał Twoje indywidualne piękno, nie zmieniając Twojej tożsamości. 
                Razem możemy osiągnąć efekt, który sprawi, że będziesz czuć się pewnie i pięknie.</p>
            </div>

            <div id = "aboutMeContact">
              <h1>Kontakt</h1>
              <p>Chętnie odpowiem na Twoje pytania i umówię Cię na konsultację. 
                Razem możemy odkryć potencjał Twojej urody i stworzyć wyjątkowy wygląd, który będzie Cię zachwycać. 
                Dziękuję, że odwiedziłeś moją stronę internetową, i czekam na możliwość współpracy z Tobą.</p>
            </div>
          </div>
        </main>
    </body>
    </html>
    )
}
