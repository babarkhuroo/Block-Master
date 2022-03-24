import React, { useState } from 'react'
import { useFetch } from '../useFetch'
import '../styles/Main.css'
import Movie from './Movie'
import Loading from './Loading'
import { useGlobalContext } from './context'
import { SEARCH } from '../App'
import { useAppContext } from '../app_context'

const Main = ({ url }) => {
  const { query } = useGlobalContext()
  const { popular_movies } = useAppContext()
  console.log(popular_movies)
  const [page, setPage] = useState(1)
  const { movies, loading } = useFetch(
    query ? SEARCH + query + `&page=${page}` : url + page
  )

  if (loading) {
    return <Loading />
  }

  function prevPage() {
    if (page <= 1) {
      setPage(1)
    } else {
      setPage((page) => page - 1)
    }
  }

  function nextPage() {
    setPage((page) => page + 1)
  }

  return (
    <>
      <section className='container'>
        {movies.map((movie) => {
          return <Movie key={movie.id} movie={movie} />
        })}
      </section>
      <div className='btn-container'>
        <button className='btn prev' onClick={prevPage} disabled={page === 1}>
          Prev
        </button>
        <button className='btn next' onClick={nextPage}>
          Next
        </button>
      </div>
    </>
  )
}

export default Main
