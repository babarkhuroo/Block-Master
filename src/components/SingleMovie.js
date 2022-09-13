import React, { useEffect } from 'react'
import styles from './SingleMovie.module.css'
import { useAppContext } from '../setup/app_context'
import Loading from './Loading'
import { medium_img } from '../utilities/constants'

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
    <div className={styles.movieDetails}>
      <div className={styles.poster}>
        <img src={medium_img + poster_path} alt='poster' />
      </div>
      <div className={styles.details}>
        <h1>{title}</h1>
        <p>{overview}</p>
        <div className={styles.others}>
          <p className={styles.releaseDate}>
            Release Date : <span>{release_date}</span>
          </p>
          <p className={styles.genres}>
            Tags :{' '}
            {genres?.map((genre, index) => (
              <span key={index} className={styles.genre}>
                {genre.name}
              </span>
            ))}
          </p>
          <p className={styles.runtime}>
            Runtime : <span>{runtime} mins</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SingleMovie
