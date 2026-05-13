import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link'

export const metadata: Metadata = {
  title: "APOD Explorer",
  description: "NASA's Astronomy Picture of the day",
};

export default function RootLayout({
children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="eng">
      <body>
        <nav className="flex items-center justify-between px-6 border-b border-white/10 bg-black/40 backdrop-blur sticky top-0 z-50">
        <Link href="/" className="text-white font-bold text-lg tracking-widest uppercase">
        APOD Explorer
        </Link>
        <div className="flex gap-6 text-sm text-white/70">
        <Link href="/" className="hover:text-white transition-colors"> Home </Link>
        <Link href="/favourites" className="hover:text-white transition-colors"> Favourites </Link>
        </div>
      </nav>
      <main className="min-h-screen">
        {children}
      </main>
      </body>
    </html>
  )
}

