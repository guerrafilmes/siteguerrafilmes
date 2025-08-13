import Link from 'next/link'
import { waLink } from '@/lib/site'

export function Hero() {
  return (
    <section className="relative">
      <div className="container grid gap-8 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Filmes de casamento que fazem sua história reviver.
          </h1>
          <p className="max-w-prose text-white/80">
            Produção cinematográfica, som imersivo e narrativa com assinatura Guerra Filmes.
            Atendemos Presidente Prudente e região.
          </p>
          <div className="flex gap-3">
            <Link href={waLink()} className="btn btn-primary">Pedir orçamento no WhatsApp</Link>
            <a href="#portfolio" className="btn btn-ghost">Ver portfólio</a>
          </div>
        </div>
        <div className="aspect-video overflow-hidden rounded-2xl ring-1 ring-white/10">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/btvrVukw68k?rel=0&modestbranding=1&controls=1`}
            title="Filme em destaque"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
