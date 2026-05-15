import Image from 'next/image';
import Link from 'next/link';
import { getAPOD } from '@/lib/nasa';
import { notFound } from 'next/navigation';
import FavouriteButton from '@/components/FavouriteButton';

export default async function ApodPage({
    params,
}: {
    params: Promise<{ date: string }>
}) {
    const { date } = await params
    let apod
    try {
        apod = await getAPOD(date)
    } catch {
        notFound()
    }

    const imageURL = apod.media_type === 'image' ? apod.hdurl || apod.url : apod.thumbnail_url
    return (
        <div className='max-w-4xl mx-auto py-10 px-4'>
            <Link href="/" className='text-white/40 text-sm hover:text-white transition-colors mb-8 inline-block'> Back </Link>

            <p className='text-white/40 text-sm uppercase tracking-widest mb-2'>{apod.date}</p>
            <h1 className='text-3xl font-bold mb-6'>{apod.title}</h1>

            {imageURL ? (
                <div className='relative w-full aspect-video rounded-xl overflow-hidden mb-6'>
                    <Image
                        src={imageURL}
                        alt={apod.title}
                        fill
                        className='object-contain'
                        sizes='(max-width: 768px) 100vw, 900px'
                        priority
                    />
                </div>
            ) : (
                <iframe
                    src={apod.url}
                    className='w-full aspect-video rounded-xl mb-6'
                    allowFullScreen
                />
            )}

            <FavouriteButton date={apod.date} title={apod.title} url={apod.url} />
            <p className='text-white/70 leading-relaxed mt-6'>{apod.explanation}</p>
            {apod.copyright && (
                <p className='text-white/30 text-sm mt-6'>© {apod.copyright}</p>
                )}
        </div>
    )
}