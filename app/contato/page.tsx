import { waLink } from '../../lib/site'

export default function ContatoPage() {
  return (
    <section className="section">
      <h1 className="mb-8 text-3xl font-bold">Fale Conosco</h1>
      <p className="mb-6 text-white/80">Respondo rápido pelo WhatsApp. Se preferir, use o formulário abaixo.</p>
      <a href={waLink()} target="_blank" className="btn btn-primary mb-6">Falar no WhatsApp</a>
      <iframe
        src="https://tally.so/embed/w4Xj9r?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        width="100%"
        height="520"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Formulário de Contato"
      />
    </section>
  )
}