import '../globals.css'
import { Inter } from 'next/font/google'

import Dropdown from '../../components/dropdown';
import Newsletter from '../../components/newsletter';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>

      <Dropdown />

      <main>{children}</main>

      <Newsletter />


    </body>

  </html>
  )
}
