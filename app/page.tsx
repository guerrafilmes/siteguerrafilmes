import { Hero } from '@/components/Hero'
import { VideoGrid } from '@/components/VideoGrid'
import { films } from '@/lib/films'

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="container py-12">
        <h2 className="mb-6 text-2xl font-semibold">Portfólio em destaque</h2>
        <VideoGrid items={films} />
      </section>
    </>
  )
}
