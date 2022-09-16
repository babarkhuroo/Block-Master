import React, { useEffect } from 'react'
import styles from './SingleMovie.module.css'
import { useAppContext } from '../setup/app_context'
import Loading from './Loading'
import { default_img, medium_img } from '../utilities/constants'

function SingleMovie() {
  const {
    clickedId: id,
    getSingleMovie,
    single_movie: movie,
    single_movie_loading,
  } = useAppContext()
  const { title, overview, poster_path, release_date, genres, runtime } = movie

  useEffect(() => {
    getSingleMovie(id)
  }, [id])

  if (single_movie_loading) {
    return <Loading />
  }

  return (
    <section className={styles.movieDetails}>
      <img
        src={poster_path ? medium_img + poster_path : default_img}
        alt='poster'
        className={styles.poster}
      />
      <div className={styles.details}>
        <h1 className={styles.title}>{`${title} (${
          release_date ? release_date.slice(0, 4) : 'N/A'
        })`}</h1>
        <p className={styles.overview}>{overview}</p>
        <div className={styles.others}>
          <p className={styles.releaseDate}>
            Release Date : <span>{release_date}</span>
          </p>
          <p className={styles.genres}>
            Tags :{' '}
            {genres?.map((genre, index) => (
              <span key={index}>{genre.name}</span>
            ))}
          </p>
          <p className={styles.runtime}>
            Runtime : <span>{runtime} mins</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleMovie
