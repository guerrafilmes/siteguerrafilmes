import Image from 'next/image'

function ytThumb(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
}

export function VideoCard({ id, title }: { id: string; title: string }) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${id}`}
      target="_blank"
      rel="noreferrer"
      className="card overflow-hidden"
    >
      <div className="relative aspect-video">
        <Image src={ytThumb(id)} alt={title} fill sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="line-clamp-2 text-sm font-medium">{title}</h3>
      </div>
    </a>
  )
}
