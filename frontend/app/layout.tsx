import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en" className="dark">
      <body className="bg-background-dark text-slate-200 font-sans selection:bg-primary selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
