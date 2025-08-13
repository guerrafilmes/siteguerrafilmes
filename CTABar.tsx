import Link from 'next/link'
import { waLink } from '../lib/site'

export function CTABar() {
  return (
    <div className="border-y border-white/10 bg-white/5">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
        <div className="text-center md:text-left">
          <div className="font-semibold">Pronta(o) para conversar sobre o seu filme?</div>
          <div className="text-sm text-white/70">Atendimento rápido pelo WhatsApp.</div>
        </div>
        <Link href={waLink()} className="btn btn-primary">Falar no WhatsApp</Link>
      </div>
    </div>
  )
}
