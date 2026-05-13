'use client';

export default function Error({
    error,
    reset,
}: {
    error: Error,
    reset: () => void
}) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <h2 className="text-2xl font-bold text-white/80">Something went wrong!</h2>
            <p className="text-white/50 text-sm">{error.message}</p>
            <button
            onClick={reset}
            className="px-5 py-2 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-all"
            >
            Try again
            </button>
        </div>
    )
}