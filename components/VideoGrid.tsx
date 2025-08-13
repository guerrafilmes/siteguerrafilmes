import { VideoCard } from './VideoCard'

export function VideoGrid({ items }: { items: { id: string; title: string }[] }) {
  return (
    <div id="portfolio" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((v) => (
        <VideoCard key={v.id} id={v.id} title={v.title} />
      ))}
    </div>
  )
}
