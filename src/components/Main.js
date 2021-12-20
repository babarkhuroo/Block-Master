import React from 'react'
import { useFetch } from '../useFetch'
import '../styles/Main.css'
import Movie from './Movie'
import Loading from './Loading'
import { useGlobalContext } from './context'
import { SEARCH } from '../App'

const Main = ({ url }) => {
  const { query } = useGlobalContext()
  const { movies, loading } = useFetch(query ? SEARCH + query : url)

  if (loading) {
    return <Loading />
  }
  return (
    <section className='container'>
      {movies.map((movie) => {
        return <Movie key={movie.id} movie={movie} />
      })}
    </section>
  )
}

export default Main
