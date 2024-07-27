import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import '../../styles/about.scss'
import 'tailwindcss/tailwind.css'
import HeaderComponent from '../components/HeaderComponent_en'
import FooterComponent from '../components/FooterComponent_en'

export default function About() {
    return (
      <html lang = "en">
      <Head>
        <meta charSet = "utf-8" name = "viewport" content = "width=device-width,initial-scale=1.0"/>
        <link rel = "stylesheet" href = "styles/header.scss"/>
        <link rel = "stylesheet" href = "styles/about.scss"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Dancing+Script:wght@600&family=Amatic+SC&display=swap" rel="stylesheet"/>
      </Head>
      <div>
        <HeaderComponent />
      </div>
    

        <main>
          <div id = "main">

            <div id = "aboutMeCaption">
              <li><Link href = "/../">Strona główna</Link></li>
              <span>{'>'}</span>
              <span>O mnie</span>
            </div>

            <div id = "firstImage">
              <Image src = "/../images/about.jpg" alt = "about" width = "500" height = "500"></Image>
            </div>

            <div id = "aboutMeText">
              <h1 className = "text-center">Specjalistka od naturalnych efektów</h1>
                <div id = "mainParagraphAboutMe">
                  <p className = "text-left ml-40 mr-40">Witaj na mojej stronie, jestem Julia Majewska, 
                    i cieszę się, że możesz poznać mnie i moją pasję do modelowania ust oraz zabiegów na twarz. 
                    Jako specjalista w dziedzinie estetyki twarzy, moim celem jest pomóc Ci osiągnąć naturalny i wyjątkowy wygląd, 
                    który podkreśli Twoje piękno w sposób subtelny i harmonijny.</p>
                </div>
            </div>

            <div id = "passion">
              <h1 className = "text-center">Pasja do estetyki twarzy</h1>
                <div id = "passionText">
                  <p className = "text-center ml-60 mr-60">Od dawna fascynuje mnie sztuka modelowania twarzy i podkreślanie indywidualnego piękna każdej osoby. 
                    Dzięki zaawansowanym technikom i najnowszym osiągnięciom w dziedzinie estetyki twarzy, 
                    mogę pomóc Ci osiągnąć wymarzony wygląd, jednocześnie dbając o zachowanie naturalności i równowagi.</p>
                </div>
                <div id = "passionLipsImages" className = "mt-20 flex justify-center">
                  <Image src = "/../images/lips1.jpg" alt = "lips" width = "300" height = "300"></Image>
                  <Image src = "/../images/lips3.jpg" alt = "lips" width = "300" height = "300" className = "ml-20 mt-20"></Image>
                  <Image src = "/../images/lips2.jpg" alt = "lips" width = "300" height = "300" className = "ml-20 mb-20"></Image>
                </div>
            </div>

            <div id = "experience">
              <h1 className = "text-center">DoŚwiadczenie i Profesjonalizm</h1>
              <div id = "experienceText">
              <p className = "text-center ml-40 mr-40">Z 3 latami doświadczenia w branży, jestem pewna, że razem możemy osiągnąć najlepsze wyniki. 
              Moja praktyka opiera się na najwyższych standardach opieki medycznej, a moje umiejętności stale się rozwijają dzięki uczestnictwu w kursach i szkoleniach. 
              Bezpieczeństwo i zadowolenie pacjenta zawsze są dla mnie priorytetem.</p>
              </div>
              <div id = "certificateImage" className = "mt-20 flex justify-center">
                <Image src = "/../images/certificate1.jpg" alt = "certificate" width = "700" height = "500"></Image>
                <Image src = "/../images/certificate2.jpg" alt = "certificate" width = "450" height = "700" className = "ml-20"></Image>
              </div>
            </div>
            
            <div id = "studio">
              <h1>Studio</h1>
              <p>Chętnie odpowiem na Twoje pytania i umówię Cię na konsultację.<br></br> 
                Razem możemy odkryć potencjał Twojej urody i stworzyć wyjątkowy wygląd, który będzie Cię zachwycać. <br></br>
                Dziękuję, że odwiedziłeś moją stronę internetową, i czekam na możliwość współpracy z Tobą.</p>
            </div>
          </div>

          <FooterComponent />
        </main>
   
    </html>
    )
}
