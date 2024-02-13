import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './SingleMovie.module.css'
import Loading from './Loading'
import Error from './Error'

import { default_img, medium_img } from '../utilities/constants'
import { useAppContext } from '../setup/app_context'

function SingleMovie() {
  const {
    getSingleMovie,
    single_movie: movie,
    single_movie_loading,
    single_movie_error,
  } = useAppContext()
  const { id } = useParams()
  const { title, overview, poster_path, release_date, genres, runtime } = movie

  useEffect(() => {
    getSingleMovie(id)
  }, [id])

  if (single_movie_loading) {
    return <Loading />
  }

  return (
    <>
      {single_movie_error ? (
        <Error />
      ) : (
        <section className={styles.movieDetails}>
          <div className={styles.posterContainer}>
            <img
              src={poster_path ? medium_img + poster_path : default_img}
              alt='poster'
              className={styles.poster}
            />
          </div>
          <div className={styles.details}>
            <h1 className={styles.title}>{`${title} (${
              release_date ? new Date(release_date).getFullYear() : 'N/A'
            })`}</h1>
            <p className={styles.overview}>{overview}</p>
            <div className={styles.others}>
              <p className={styles.releaseDate}>
                Release Date :{' '}
                <span>{new Date(release_date).toDateString()}</span>
              </p>
              <p className={styles.genres}>
                Tags :{' '}
                {genres?.map((genre, index) => (
                  <span key={index}>{genre.name}</span>
                ))}
              </p>
              <p className={styles.runtime}>
                Runtime :{' '}
                <span>{`${Math.floor(runtime / 60)}h ${runtime % 60}m`}</span>
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default SingleMovie
