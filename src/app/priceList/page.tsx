import Image from 'next/image'
import Link from 'next/link'
import '../styles/pricelist.scss'
import 'tailwindcss/tailwind.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import FooterComponent from '../components/FooterComponent'




export default function PriceList() {
  const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDetails = () =>{
    setIsOpen(!isOpen);
    }
  }
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

          <div id = "pricelistCaption">
              <li><Link href = "/../">Strona główna</Link></li>
              <span>{'>'}</span>
              <span>Cennik</span>
            </div>

            <div id = "mainPriceList">

              <div id = "bigPricelistCaption">
                <p>CE<span>NN</span>IK ZA<span>BIE</span>GÓW</p>
              </div>

              <div id = "pricelistContainers">
                
              <div className = "pricelistDrop" onClick = {toggleDetails}>
              <div id = "lipsModelling">
                 <h1 className = "font-black">POWIĘKSZANIE/MODELOWANIE UST</h1>
                    <p className = "font-medium">Revolax/Stylage - 1ml</p><span className = "revolaxPrice under600pxPrice">600 zł</span>
                    <p className = "font-medium">Juvederm Ultra 2 - 0.55ml</p><span className = "juvedermPrice under600pxPrice">450 zł</span>
                    <p className = "font-medium">Nawilżenie ust bez powiększenia</p><span className = "moisturizingPrice under600pxPrice">500 zł</span>
                    <p className = "font-medium">Hialuronidaza</p><span className = "hialoPrice under600pxPrice">500 zł</span>
              </div>
              </div>

              <div className = "pricelistDrop">
              <div id = "makeup">
                  <h1 className = "font-black">MAKIJAŻ PERMANENTNY</h1>
                    <p className = "font-medium">Brwi </p><span className = "eyebrowsPrice under600pxPrice">500 zł</span>
                    <p className = "font-medium">Konsultacja + rysunek</p><span className = "consultationPrice under600pxPrice">50 &nbsp;&nbsp;zł</span>
                    <p className = "font-medium">Korekta do 10 tygodni</p><span className = "adjustmentPrice under600pxPrice">150 &nbsp;zł</span>
                    <p className = "font-medium">Dopigmentowanie do 1,5 roku</p><span className = "pigmentationPrice under600pxPrice">400 zł</span>              
                  </div>
                </div>

                <div className = "pricelistDrop">
              <div id = "mesotherapy">
                  <h1 className = "font-black">MEZOTERAPIA IGŁOWA</h1>
                    <p className = "font-medium">Twarz</p><span className = "facePrice under600pxPrice">130 zł</span>
                    <p className = "font-medium">Twarz szyja</p><span className = "faceNeckPrice under600pxPrice">300 zł</span>
                    <p className = "font-medium">Twarz szyja dekolt</p><span className = "faceNeckCleavagePrice under600pxPrice">350  zł</span>
                    <p className = "font-medium">Skóra głowy</p><span className = "headSkinPrice under600pxPrice">450 zł</span>
                  </div>
              </div>

              <div className = "pricelistDrop">
                <div id = "biorepeel">
                  <h1 className = "font-black">BIOREPEEL</h1>
                </div>
              </div>
            </div>
            </div>
          </main>
        <FooterComponent/>
    </body>
    </html>
    )
}