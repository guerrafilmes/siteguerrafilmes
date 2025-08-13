import Link from 'next/link'
import { waLink } from '../../lib/site'

const pacotes = [
  {
    nome: 'Soldado Ryan',
    destaque: 'Estratégico • Compacto • Emocional',
    bullets: [
      '1 cinegrafista • 1 câmera 4K',
      'Cobertura essencial (making of, cerimônia e festa)',
      'Teaser 60–90s + Filme 6–10min',
      '1 rodada de ajustes'
    ]
  },
  {
    nome: 'Artilharia',
    destaque: 'Clássico • Completo',
    bullets: [
      '2 cinegrafistas • 2–3 câmeras 4K',
      'Pré-wedding opcional',
      'Teaser + Filme 10–15min + discursos',
      '2 rodadas de ajustes'
    ]
  },
  {
    nome: 'Cavalaria',
    destaque: 'Robusto • Multicam',
    bullets: [
      '2–3 cinegrafistas • drones/ações especiais',
      'Captação de áudio dedicada (lapelas + ambiente)',
      'Teaser + Filme 12–18min + extra de festa',
      'Correção de cor avançada'
    ]
  },
  {
    nome: 'Batalhão',
    destaque: 'Premium • Cobertura total',
    bullets: [
      'Equipe completa • making of estendido',
      'Drone, timelapses, detalhamento de locação',
      'Teaser + Filme 15–25min + versão IG Reels',
      'Sound design/grade cinematográfica'
    ]
  }
]

export default function PacotesPage() {
  return (
    <section className="section">
      <h1 className="mb-8 text-3xl font-bold">Nossos Pacotes</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {pacotes.map((p) => (
          <div key={p.nome} className="card p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest opacity-70">{p.destaque}</div>
              <h2 className="text-2xl font-semibold mb-4">{p.nome}</h2>
              <ul className="space-y-2 text-sm text-white/80">
                {p.bullets.map((b, i) => <li key={i}>• {b}</li>)}
              </ul>
            </div>
            <div className="mt-6">
              <Link href={waLink(`Olá! Quero saber mais sobre o pacote ${p.nome}.`)} className="btn btn-primary">Quero esse pacote</Link>
            </div>
          </div>
        ))}
      </div>
      <p className="p-muted mt-6 text-sm">Observação: valores e disponibilidade sob consulta. Atendemos Presidente Prudente e região.</p>
    </section>
  )
}