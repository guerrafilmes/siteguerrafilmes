import './globals.css'
import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Guerra Filmes — Filmes de Casamento',
  description: 'Filmes de casamento com emoção e qualidade Guerra Filmes.',
  openGraph: {
    title: 'Guerra Filmes',
    description: 'Filmes de casamento que fazem sua história reviver.',
    type: 'website'
  },
  metadataBase: new URL('https://guerra-filmes.vercel.app')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
