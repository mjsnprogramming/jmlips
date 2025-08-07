import './globals.css';
import type { Metadata } from 'next';
import HeaderComponent from './components/HeaderComponent/page';
import FooterComponent from './components/FooterComponent/page';

export const metadata: Metadata = {
  title: 'JM Studio',
  description: 'Gabinet medycyny estetycznej - Julia Majewska Studio',

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang = "pl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Dancing+Script:wght@600&family=Amatic+SC&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-black">
        <HeaderComponent />
        <main>{children}</main>
        <FooterComponent />
      </body>
    </html>
  )
};