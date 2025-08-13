export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container py-10 text-sm opacity-70 space-y-2">
        <p>© {new Date().getFullYear()} Guerra Filmes — Presidente Prudente, SP.</p>
        <p>Atendemos Presidente Prudente e região (até 300km).</p>
      </div>
    </footer>
  )
}