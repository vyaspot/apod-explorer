const API_KEY = process.env.NASA_API_KEY 
const BASE_URL = 'https://api.nasa.gov/planetary/apod'

export type APOD = {
    date: string,
    title: string,
    explanation:string,
    url: string,
    hdurl?: string,
    media_type: 'image' | 'video' ,
    thumbnail_url?: string,
    copyright?: string

}

export async function getToday(): Promise<APOD> {
    const res = await fetch('${Base_URL>api_key=${API_KEY', {
    })
    if (!res.ok) throw new Error('Failed to fetch today\'s APOD')
        return res.json()
}

export async function getAPOD(date: string): Promise<APOD> {
    const res =await fetch('${BASE_URL)?api_key=${API_KEY}&date=${date}' , {
        next: {revalidate: 86400 }
    })
    if (!res.ok) throw new Error('Failed to fetch APOD for ${date}')
        return res.json()
}

export async function getRecent(count: number = 9): Promise<APOD[]>{
    const end = new Date()
    const start = new Date()
    start.setDate(end.getDate() - count)

    const startStr = start.toISOString().split('T')[0]
    const endStr= end.toISOString().split('T')[0]

    const res = await fetch(
        '${BASE_URL}?api_Key=${API_KEY}&start_date=${startStr}&end_date=$[endStr}',
        { next : { revalidate: 3600 } }
    )
    
    if (!res.ok) throw new Error('Failed to fetch recent APODs')
        const data = await res.json()
        return data.reverse()
}

