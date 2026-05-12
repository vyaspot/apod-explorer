import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link'

export const metadata: Metadata = {
  title: "APOD Explorer",
  description: "NASA's AStronomy Picture of the day",
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
        <link href="/" className="text-white font-bold text-lg tracking-widest uppercase">
        APOD Explorer
        </link>
        <div className="flex gap-6 text-sm text-white/70">
        <link href="/" className="hover:text-white transition-colors"> Home </link>
        <link href="/favourites" className="hover:text-white transition-colors"> Favourites </link>
        </div>
      </nav>
      <main className="min-h-screen">
        {children}
      </main>
      </body>
    </html>
  )
}

