import Link from 'next/link'
import '../styles/bookingForm.scss'

export default function bookingForm() {
    return (
        <html lang = "en">
            <head>
                <meta charSet = "utf-8" name = "viewport" content = "width=device-width,initial-scale=1.0"/>
                <link rel = "stylesheet" href = "styles/bookingForm.scss"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Dancing+Script:wght@600&family=Amatic+SC&display=swap" rel="stylesheet"/>
            </head>

            <body>
                <div id = "bookingForm">
                <h1>Zapisz się na zabieg</h1>
                <form>
                    <label  htmlFor = "name">Imię</label>
                    <input type = "text" id = "name" name = "name"></input>

                </form>
                </div>
            </body>
        </html>
    )
}