import React, { useState } from 'react'
import '../styles/Main.css'
import Movie from './Movie'
import Loading from './Loading'
import { SEARCH } from '../App'
import { useAppContext } from '../app_context'

const Main = () => {
  const { loading, popular_movies: movies } = useAppContext()
  // const [page, setPage] = useState(1)
  // const { moviess, loadingg } = useFetch(
  //   query ? SEARCH + query + `&page=${page}` : url + page
  // )

  if (loading) {
    return <Loading />
  }

  // function prevPage() {
  //   if (page <= 1) {
  //     setPage(1)
  //   } else {
  //     setPage((page) => page - 1)
  //   }
  // }

  // function nextPage() {
  //   setPage((page) => page + 1)
  // }

  return (
    <>
      <section className='container'>
        {movies.map((movie) => {
          return <Movie key={movie.id} movie={movie} />
        })}
      </section>
      {/* <div className='btn-container'>
        <button className='btn prev' onClick={prevPage} disabled={page === 1}>
          Prev
        </button>
        <button className='btn next' onClick={nextPage}>
          Next
        </button>
      </div> */}
    </>
  )
}

export default Main
