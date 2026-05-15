'use client'

import { useState, useEffect } from 'react';

type Props = {
    date: string;
    title: string;
    url: string;
}

export default function FavouriteButton({ date, title, url }: Props) {
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        const fav= JSON.parse(localStorage.getItem('Favourites') || '[]')
        setIsFav(fav.some((f: any) => f.date === date))
    } , [date])

    function toogleFavourite() {
        const favs = JSON.parse(localStorage.getItem('Favourites') || '[]')
        if (isFav) {
            const updated = favs.filter((f: any) => f.date !== date)
            localStorage.setItem('Favourites', JSON.stringify(updated))
            setIsFav(false)
        } else {
            favs.push({ date, title, url })
            setIsFav(true)
        }
        }

        return (
            <button 
            onClick={toogleFavourite}
            className={` px-5 py-2 roundedfull text-sm border transition-all ${
                isFav 
                ? 'bg-white text-black border-white'
                : 'border-white/20 text-white hover:bg-white hover:text-black'
                }`}
            >
                {isFav ? 'Saved' : 'Add to Favourites'}
            </button>
        )
    }