import Image from 'next/image'
import Link from 'next/link'
import '../../styles/footer.scss'
import 'tailwindcss/tailwind.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons'

export default function FooterComponent() {
    return (

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
    )}