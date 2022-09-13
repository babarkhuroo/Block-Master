import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Movie.module.css'
import Star from '../assets/imgs/star.svg'
import { useAppContext } from '../setup/app_context'
import { default_img, small_img } from '../utilities/constants'

const Movie = ({ movie }) => {
  const { id, title, vote_average, poster_path, release_date } = movie
  const { setClickedId } = useAppContext()

  let release
  if (release_date) {
    release = release_date.slice(0, 4)
  }
  return (
    <Link
      to={`/movie/${id}`}
      className={styles.movieContainer}
      key={id}
      onClick={() => setClickedId(id)}>
      <img
        src={poster_path ? small_img + poster_path : default_img}
        alt={title}
      />
      <h4>{`${title} (${release_date ? release : 'N/A'})`}</h4>
      <div className={styles.rating}>
        <img src={Star} alt='star' className={styles.star} />
        <span>{vote_average}</span>
      </div>
    </Link>
  )
}

export default Movie
