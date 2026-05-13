import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <h2 className="text-2xl font-bold text-white/80">404 - Page Not Found</h2>
            <p className="text-white/50 text-sm">The page you are looking for does not exist.</p>
            <Link
            href="/"
            className="px-5 py-2 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition-all"
            >
                Go back home
            </Link>
        </div>
    )
}