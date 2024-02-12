import Image from 'next/image'
import Link from 'next/link'
import '../styles/pricelist.scss'
import 'tailwindcss/tailwind.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'




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
                  <Image src = "/../../images/logo.jpg" className = "logo" alt = "logo" width = "100" height = "100"></Image>
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
                 <p className = "font-medium">Revolax/Stylage - 1ml</p><span className = "revolaxPrice under600pxPrice">600 zł</span>
                 <p className = "font-medium">Juvederm Ultra 2 - 0.55ml</p><span className = "juvedermPrice under600pxPrice">450 zł</span>
                 <p className = "font-medium">Nawilżenie ust bez powiększenia</p><span className = "moisturizingPrice under600pxPrice">500 zł</span>
                 <p className = "font-medium">Hialuronidaza</p><span className = "hialoPrice under600pxPrice">500 zł</span>
              </div>

              <div id = "makeup">
                <h1 className = "font-black">MAKIJAŻ PERMANENTNY</h1>
                <p className = "font-medium">Brwi </p><span className = "eyebrowsPrice under600pxPrice">500 zł</span>
                <p className = "font-medium">Konsultacja + rysunek</p><span className = "consultationPrice under600pxPrice">50 &nbsp;&nbsp;zł</span>
                <p className = "font-medium">Korekta do 10 tygodni</p><span className = "adjustmentPrice under600pxPrice">150 &nbsp;zł</span>
                <p className = "font-medium">Dopigmentowanie do 1,5 roku</p><span className = "pigmentationPrice under600pxPrice">400 zł</span>              
              </div>

              <div id = "mesotherapy">
                <h1 className = "font-black">MEZOTERAPIA IGŁOWA</h1>
                <p className = "font-medium">Twarz</p><span className = "facePrice under600pxPrice">130 zł</span>
                <p className = "font-medium">Twarz szyja</p><span className = "faceNeckPrice under600pxPrice">300 zł</span>
                <p className = "font-medium">Twarz szyja dekolt</p><span className = "faceNeckCleavagePrice under600pxPrice">350  zł</span>
                <p className = "font-medium">Skóra głowy</p><span className = "headSkinPrice under600pxPrice">450 zł</span>
                <p className = "font-medium">Biorepeel twarz</p><span className = "biorepeelPrice under600pxPrice">200 zł</span>
              </div>
            </div>
          </main>
        <footer>
          <div id = "footer">
            <div id = "footerLogo">
              <Image src = "/../../images/logo.jpg" alt = "logo" width = "100" height = "100"></Image>
            </div>
            <div id = "socialMedia">
              <h1>Obserwuj mnie</h1>
              <div id = "facebook">
                <Link href = "https://www.facebook.com/" target='blank' title = "facebook"><FontAwesomeIcon icon={faFacebook} /></Link>
              </div>
              <div id = "instagram">
                <Link href = "https://www.instagram.com/" target='blank' title = "instagram"><FontAwesomeIcon icon = {faInstagram}/></Link>
              </div>
              <div id = "tikTok">
                <Link href = "https://www.tiktok.com/" target='blank' title = "tikTok"><FontAwesomeIcon icon = {faTiktok} /></Link>
              </div>
            </div>
            <div id = "footerContact">
              <p>Zapraszam do kontaktu</p>
    
              <p id = "mobileNumber">Zadzwoń: +48 657391939</p>
              
              <p id = "footerEmail">Napisz: juliamjaewskaxdxddxd@gmail.com</p>

              <div id = "igContact">
              <FontAwesomeIcon icon = {faInstagram} width = "30px" height = "30px"/>
              <li><Link href = "https://www.instagram.com/">Instagram</Link></li>
              </div>
            </div>

            <div id = "JMstudioAddress">
              <h1>KONTAKT</h1>
              <p>Julia Majewska Studio</p>
              <p>ul. Wieniawska 8</p>
              <p>20-400 Lublin</p>
              <li><Link href = ""><p id = "privacyPolicy">Polityka prywatności</p></Link></li>
              <li><Link href = ""><p id = "footerStatute">Regulamin</p></Link></li>
            </div>
  
            <div id = "footerProducts">
              <h1>Oferta</h1>
              <ul>
                <li>Revolax</li>
                <li>Juvederm</li>
                <li>Hialuronidaza</li>
                <li>Biorepeel</li>
              </ul>
            </div>

            <div id = "creator">
                <span id = "copyright">&copy; Copyright Julia Majewska Studio 2024</span>
                <span id = "mjsn">Created by MJSN</span>
            </div>
            </div>
        </footer>
    </body>
    </html>
    )
}