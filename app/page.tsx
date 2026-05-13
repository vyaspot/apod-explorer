import { getToday, getRecent } from "@/lib/nasa";
import Image from 'next/image'
import Link from "next/link";

export default async function HomePage() {
  const [today , recent] = await Promise.all([getToday(), getRecent(9)])

  const heroImage = today.media_type === 'image' ? today.url : (today.thumbnail_url)
  
  return (
    <div className="max-w-6x1 mx-auto px-4 py-10">

      {/* Hero - today's APOD*/}
      <section className="mb-16">
        <p className="text-white/40 text-sm uppercase tracking-widest mb-2">Today</p>
        <h1 className="text-4x1 font-bold mb-6">{today.title}</h1>

        {heroImage ? (
          <div className="relative w-full aspect-video rounded-x1 overflow-hidden mb-6">
            <Image
              src={heroImage}
              alt={today.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              />
          </div>

        ) : (
          <div className="w-full aspect-video bg-white/5 rounded-x1 flex items-center justify-center mb-6">
            <p className="text-white/30">Video - no preview available</p>
          </div>
        )}

        <p className="text-white/70 leading-relaxed max-w-3x1">{today.explanation.slice(0, 300)}...</p>
        <Link
        href={`/apod/${today.date}`}
        className="inline-block mt-4 px-5 py-2 bprder-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-all">
        Read more 
        </Link>
      </section>

      {/* Recent Grid */}
      <section>
        <h2 className="text-x1 font-semibold mb-6 text-white/80">Recent</h2>
        <div className="grid grid-cols-1 sm-grid-cols-2 lg:grid-cols-3 gap-6">
          {recent.map((apod) => {
            const thumb = apod.media_type === 'image' ? apod.url : (apod.thumbnail_url ?? null)
            return (
              <Link key={apod.date} href={`/apod/${apod.date}`} className="group block">
                <div className="relatives aspect-video rounded-lg overflow-hidden bg-white/5 mb-3">
                {thumb ? (
                  <Image 
                  src={thumb}
                  alt={apod.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width:1024) 50vw, 33vw"
                  />
                ): (
                  <div className="flex items-center justify-center h-full text-white/20 text-sm">Video</div>
                )}
                </div>
                <p className="text-white/40 text-xs mb-1">{apod.date}</p>
                <p className="text-sm font-medium group-hover:text-white/80 trasnsition-colors">{apod.title}</p>
                </Link>
            )
          })}
          </div>
          </section>
          </div>
  )
}
