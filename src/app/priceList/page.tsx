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
            <div id = "mainPriceList">
              <div id = "lipsModelling">
                 <h1 className = "font-black">POWIĘKSZANIE/MODELOWANIE UST</h1>
                 <p className = "font-medium">Revolax/Stylage - 1ml</p><span className = "revolaxPrice">600 zł</span>
                 <p className = "font-medium">Juvederm Ultra 2 - 0.55ml</p><span className = "juvedermPrice">450 zł</span>
                 <p className = "font-medium">Nawilżenie ust bez powiększenia</p><span className = "moisturizingPrice">500 zł</span>
                 <p className = "font-medium">Hialuronidaza</p><span className = "hialoPrice">500 zł</span>
              </div>

              <div id = "makeup">
                <h1 className = "font-black">MAKIJAŻ PERMANENTNY</h1>
                <p className = "font-medium">Brwi </p><span className = "eyebrowsPrice">500 zł</span>
                <p className = "font-medium">Konsultacja + rysunek</p><span className = "consultationPrice">50 zł</span>
                <p className = "font-medium">Korekta do 10 tygodni</p><span className = "adjustmentPrice">150 zł</span>
                <p className = "font-medium">Dopigmentowanie do 1,5 roku</p><span className = "pigmentationPrice">400 zł</span>              
              </div>

              <div id = "mesotherapy">
                <h1 className = "font-black">MEZOTERAPIA IGŁOWA</h1>
                <p className = "font-medium">Twarz</p><span className = "facePrice">130 zł</span>
                <p className = "font-medium">Twarz szyja</p><span className = "faceNeckPrice">300 zł</span>
                <p className = "font-medium">Twarz szyja dekolt</p><span className = "faceNeckCleavagePrice">350  zł</span>
                <p className = "font-medium">Skóra głowy</p><span className = "headSkinPrice">450 zł</span>
                <p className = "font-medium">Biorepeel twarz</p><span className = "biorepeelPrice">200 zł</span>
              </div>
            </div>
          </main>
        
    </body>
    </html>
    )
}