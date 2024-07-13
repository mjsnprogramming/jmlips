import Image from 'next/image'
import Link from 'next/link'
import './/styles/home.scss'
import 'tailwindcss/tailwind.css'
import HeaderComponent from './components/HeaderComponent'
 
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
        <HeaderComponent/>
    </body>
    </html>
  )
}




