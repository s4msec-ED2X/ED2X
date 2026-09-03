import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import './globals.css'

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const _spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'ED2X ADS | Design, tecnologia e conteúdo',
  description:
    'Estratégia, design, tecnologia, publicidade e conteúdo para empresas que querem avançar no digital.',
  keywords: ['tecnologia', 'web design', 'marketing digital', 'publicidade', 'conteúdo', 'ED2X ADS'],
}

export const viewport: Viewport = {
  themeColor: '#f9f7ef',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${_inter.variable} ${_spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
