'use client'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-guerra.png" alt="Guerra Filmes" width={36} height={36} />
          <span className="text-sm uppercase tracking-[0.3em] opacity-80">Guerra Filmes</span>
        </Link>
        <nav className="flex items-center gap-3">
          <Link href="/pacotes" className="btn btn-ghost text-sm">Pacotes</Link>
          <Link href="#portfolio" className="btn btn-ghost text-sm">Portfólio</Link>
          <Link href="/contato" className="btn btn-ghost text-sm">Contato</Link>
          <Link href="#contato" className="btn btn-primary text-sm">WhatsApp</Link>
        </nav>
      </div>
    </header>
  )
}
