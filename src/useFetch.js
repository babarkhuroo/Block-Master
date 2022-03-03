import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      const movies = data.results
      setMovies(movies)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(() => {
    getMovies()
    // eslint-disable-next-line
  }, [url])
  return { movies, loading }
}
