import React, { useState, useEffect } from 'react'
import '../styles/Main.css'
import Movie from './Movie'
import Loading from './Loading'
import { SEARCH as search_url } from '../constants'
import { useAppContext } from '../app_context'

const Main = ({ url }) => {
  const {
    movies_loading: loading,
    movies,
    getMovies,
    query,
    setQuery,
  } = useAppContext()
  const [page, setPage] = useState(1)

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

  useEffect(() => {
    setQuery('')
    setPage(1)
    getMovies(query ? search_url + query + '&page=' + page : url + page)
  }, [url])

  useEffect(() => {
    setPage(1)
    getMovies(query ? search_url + query + '&page=' + page : url + page)
  }, [query])

  useEffect(() => {
    getMovies(query ? search_url + query + '&page=' + page : url + page)
  }, [page])

  if (loading) {
    return <Loading />
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
