export default function PacotesPage() {
  return (
    <section className="container py-12">
      <h1 className="mb-8 text-3xl font-bold">Nossos Pacotes</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {[
          { nome: 'Soldado Ryan', desc: 'Pacote compacto, acessível e emocional com qualidade Guerra Filmes.' },
          { nome: 'Artilharia', desc: 'Cobertura mais completa, ideal para quem deseja cada detalhe registrado.' },
          { nome: 'Cavalaria', desc: 'Filmagem robusta com equipe reforçada para capturar todos os ângulos.' },
          { nome: 'Batalhão', desc: 'O pacote premium, cobertura total e recursos cinematográficos extras.' },
        ].map((p) => (
          <div key={p.nome} className="card p-6">
            <h2 className="text-xl font-semibold mb-2">{p.nome}</h2>
            <p className="text-sm text-white/80">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
