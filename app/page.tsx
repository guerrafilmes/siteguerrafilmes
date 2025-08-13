import { Hero } from '../components/Hero'
import { VideoGrid } from '../components/VideoGrid'
import { films } from '../lib/films'
import { Process } from '../components/Process'
import { Testimonials } from '../components/Testimonials'
import { BlogStrip } from '../components/BlogStrip'
import { CTABar } from '../components/CTABar'

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="section">
        <h2 className="h2">Portfólio em destaque</h2>
        <p className="p-muted mb-6">Alguns filmes recentes da nossa vitrine.</p>
        <VideoGrid items={films} />
      </section>
      <Process />
      <Testimonials />
      <BlogStrip />
      <CTABar />
    </>
  )
}