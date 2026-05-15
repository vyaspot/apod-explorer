import Link from 'next/link';

export default function ApodNotFound() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
            <h2 className='text-2xl font-bold'> No Picture found for that date</h2>
            <p className='text-white/50 text-sm'> The date may be out of range or incorrect.</p>
            <Link href='/' className='px-5 py-2 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-all'>
                Go Home
            </Link>
        </div>
    )
}