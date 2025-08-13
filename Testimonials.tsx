export function Testimonials() {
  const items = [
    { n: 'Camila & João', t: 'Chorei de novo vendo o teaser. Vocês foram impecáveis!' },
    { n: 'Larissa & Pedro', t: 'Discretos durante o dia e potentes na edição. Que obra!' },
    { n: 'Aline & Rafael', t: 'Nossa família se emocionou, virou registro pra vida toda.' }
  ]
  return (
    <section className="section">
      <h2 className="h2">Depoimentos</h2>
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((d, i) => (
          <div key={i} className="card p-5">
            <p className="text-sm italic">“{d.t}”</p>
            <div className="mt-3 text-xs opacity-70">— {d.n}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
