export function BlogStrip() {
  const posts = [
    { t: 'Celulares no casamento: quando usar sem atrapalhar', href: '#' },
    { t: 'Storymaker x Videomaker: o que muda no seu filme', href: '#' },
    { t: 'Casamento de dia: dicas para um filme perfeito', href: '#' }
  ]
  return (
    <section className="section">
      <h2 className="h2">Guia da Noiva</h2>
      <p className="p-muted mb-6">Conteúdos úteis para planejar e registrar com qualidade.</p>
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((p, i) => (
          <a key={i} href={p.href} className="card p-5 hover:opacity-90">
            <div className="text-sm font-medium">{p.t}</div>
            <div className="text-xs opacity-60 mt-2">Leitura rápida</div>
          </a>
        ))}
      </div>
    </section>
  )
}