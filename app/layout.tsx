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
  title: 'ED2X | Servicos Digitais - Tecnologia, Design & Marketing',
  description:
    'ED2X - Solucoes digitais completas para infraestrutura de dados, presenca online e servicos administrativos. Tecnologia, Web Design e Marketing Digital.',
  keywords: ['tecnologia', 'web design', 'marketing digital', 'servicos digitais', 'ED2X'],
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
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
