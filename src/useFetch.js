import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])

    const getMovies = async () => {
        const resp = await fetch(url)
        const data = await resp.json()
        const movies = data.results
        setMovies(movies)
        setLoading(false)
    }
    useEffect(() => {
        getMovies()
    }, [url])
    return { movies, loading }
}
