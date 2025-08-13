export function Process() {
  const steps = [
    { t: 'Briefing leve', d: 'Alinhamos estilo, momentos e referências.' },
    { t: 'Captação cinematográfica', d: 'Lentes, áudio limpo e direção discreta.' },
    { t: 'Edição com narrativa', d: 'Ritmo, cor e som que emocionam.' },
    { t: 'Entrega e revisões', d: 'Teaser rápido + filme principal; 1 rodada de ajustes.' }
  ]
  return (
    <section id="como-trabalhamos" className="section">
      <h2 className="h2">Como trabalhamos</h2>
      <p className="p-muted mb-6">Processo simples para você curtir o dia e receber um filme inesquecível.</p>
      <ol className="grid gap-4 md:grid-cols-2">
        {steps.map((s, i) => (
          <li key={i} className="card p-5">
            <div className="mb-1 text-xs opacity-60">Passo {i+1}</div>
            <div className="text-lg font-semibold">{s.t}</div>
            <div className="text-sm text-white/80">{s.d}</div>
          </li>
        ))}
      </ol>
    </section>
  )
}
