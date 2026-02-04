import type { Metadata } from 'next'
import { Bodoni_Moda, Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '600'],
})

export const metadata: Metadata = {
  title: 'The Architect | Elite Business Magazine',
  description: 'Sales & Growth Architect based in Chennai. Engineering multi-crore revenue pipelines.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${bodoniModa.variable} ${playfairDisplay.variable} ${inter.variable}`}>
      <body className="bg-background-dark text-slate-200 font-sans selection:bg-primary selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
