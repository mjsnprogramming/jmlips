import Image from 'next/image'
import Link from 'next/link'
import '../styles/formReservation.scss'
import 'tailwindcss/tailwind.css'

export default function FormReservation() {
    return (
        <html lang = "en">
        <head>
          <meta charSet = "utf-8" name = "viewport" content = "width=device-width,initial-scale=1.0"/>
          <link rel = "stylesheet" href = "styles/formReservation.scss"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Dancing+Script:wght@600&family=Amatic+SC&display=swap" rel="stylesheet"/>

        </head>

        <body>
            <main>
                <li><Link href = "/">Strona główna</Link></li>
                <h1>Zapisz się na zabieg</h1>
                <form>
                    <label htmlFor = "firstName">Imię</label>
                        <input type = "text" id = "firstName" className = "formInputs" name = "firstName"></input>
                    <br></br>

                    <label htmlFor = "lastName">Nazwisko</label>
                        <input type = "text" id = "lastName" className = "formInputs" name = "lastName"></input>
                    <br></br>

                    <label htmlFor = "email">Email</label>
                        <input type = "email" id = "email" className = "formInputs" name = "email"></input>
                    <br></br>

                    <label htmlFor = "visitDate">Data wizyty</label>
                        <input type = "date" id = "visitDate" className = "formInputs" name = "visitDate"></input>
                    <br></br>

                    <label htmlFor = "visitTime">Godzina wizyty</label>
                        <input type = "time" id = "visitTime" className = "formInputs" name = "visitTime"></input>
                    <br></br>

                    <label htmlFor = "healthIssues">Zdrowie</label>
                        <input type = "textArea" id = "healthIssues" className = "formInputs" name = "healthIssues" placeholder = "Tutaj wypisz przyjmowane leki oraz problemy zdrowotne"></input>
                    <br></br>

                    <label htmlFor = "recentTreatments">Poprzednie zabiegi</label>
                        <input type = "textArea" id = "recentTreatments" className = "formInputs" name = "recentTreatments"></input>
                    <br></br>

                    <label htmlFor = "dataAgreement">Zgoda na przetwarzanie danych osobowych</label>
                        <input type = "checkbox" id = "dataAgreement" className = "formInputs" name = "dataAgreement"></input>
                    <br></br>

                    <label htmlFor = "statute">Regulamin</label>
                        <input type = "checkbox" id = "statute" className = "formInputs" name = "statute"></input>
                    <br></br>

                    <input type = "submit" value = "Zapisz się"></input>
                </form>
            </main>
        </body>
</html>
    )
}