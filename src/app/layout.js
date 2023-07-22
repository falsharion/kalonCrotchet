
import './globals.css'
import { Inter } from 'next/font/google'
import  Navbar  from './component/Navbar'
import Footer from './component/Footer'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
})
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kalon Crotchet',
  description: 'Crotchet items and accessories',
  keywords: 'Crotchet, knitting, knitting items, knitted top'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-between min-h-screen">
        <Navbar />
        <main className=' mt-20 overflow-hidden'>{children}</main>
        <Footer />
        </body>
    </html>
  )
}
