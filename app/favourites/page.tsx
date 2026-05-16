'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from 'next/image'

type Fav = {
    date: string;
    title: string;
    url: string;
}

export default function FavouritesPage() {
    const [favs, setFavs] = useState<Fav[]>([])

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('favourites') || '[]')
        setFavs(stored)
    }, [])
    
    function remove(date: string) {
        const updated = favs.filter(f => f.date !== date)
        localStorage.setItem('favourites', JSON.stringify(updated))
        setFavs(updated)
    }
    
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">My Favourites</h1>
            {favs.length === 0 ? (
                <p className="text-gray/400">No favourites yet. Go add some!</p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {favs.map(fav => (
                        <div key={fav.date} className="relative">
                            <link href={`/apod/${fav.date}`}>
                                <div className="relative h-48 rounded overflow-hidden hover:opacity-80 transition">
                                    <Image src={fav.url} alt={fav.title} fill className="object-cover" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-sm">
                                        {fav.title}
                                    </div>
                                </div>
                                </link>
                                <button 
                                onClick={() => remove(fav.date)}
                                className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">Remove</button>
                            </div>
                    ))}
                    </div>
            )}
        </div>
    )
}