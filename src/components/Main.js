import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Main.module.css'
import Slider from './Slider'
import Movie from './Movie'
import Loading from './Loading'

import not_found from '../assets/imgs/not_found.svg'
import { links } from '../utilities/constants'

import { useAppContext } from '../setup/app_context'

const Main = ({ url }) => {
  const {
    movies_loading: loading,
    movies,
    getMovies,
    setQuery,
  } = useAppContext()
  const { query } = useParams()
  const [page, setPage] = useState(1)

  function prevPage() {
    if (page <= 1) {
      setPage(1)
    } else {
      setPage((curr) => curr - 1)
    }
  }

  function nextPage() {
    setPage((curr) => curr + 1)
  }

  function keyToTitle() {
    const key = Object.entries(links).find((el) => el[1] == url)[0]
    const string = key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()
    const finalString = string
      .split('_')
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(' ')
    if (finalString === 'Search') {
      const searchString = `${finalString} results for "${query}"`
      return searchString
    }
    return finalString
  }

  useEffect(() => {
    setQuery('')
  }, [url])

  useEffect(() => {
    setPage(1)
  }, [url, query])

  useEffect(() => {
    getMovies(query ? links.SEARCH + query + '&page=' + page : url + page)
  }, [url, query, page])

  return (
    <>
      <Slider />
      {loading ? (
        <Loading />
      ) : movies.length > 0 ? (
        <>
          <section className={styles.container}>
            <div className={styles.titleContainer}>
              <h2 className={styles.pageTitle}>{keyToTitle()}</h2>
              <div className={styles.line}></div>
              <h3 className={styles.pageNumber}>Page {page}</h3>
            </div>
            <div className={styles.movieContainer}>
              {movies.map((movie) => {
                return <Movie key={movie.id} movie={movie} />
              })}
            </div>
          </section>
          <div className={styles.btnContainer}>
            <button
              className={`${styles.btn} ${styles.prev}`}
              onClick={prevPage}
              disabled={page === 1}>
              Prev
            </button>
            <button
              className={`${styles.btn} ${styles.next}`}
              onClick={nextPage}>
              Next
            </button>
          </div>
        </>
      ) : (
        <div className={styles.noResults}>
          <img src={not_found} alt='no-results' />
          <h2>No results found for "{query}"</h2>
        </div>
      )}
    </>
  )
}

export default Main
