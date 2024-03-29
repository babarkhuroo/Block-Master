import { Link } from 'react-router-dom'
import styles from './Movie.module.css'
import Star from '../assets/imgs/star.svg'

import { default_img, medium_img } from '../utilities/constants'
import { useAppContext } from '../setup/app_context'

const Movie = ({ movie }) => {
  const { id, title, vote_average, poster_path, release_date } = movie
  const { setClickedId } = useAppContext()

  return (
    <Link
      to={`/movie/${id}`}
      className={styles.movieContainer}
      key={id}
      onClick={() => setClickedId(id)}>
      <img
        src={poster_path ? medium_img + poster_path : default_img}
        alt={title}
        className={styles.poster}
      />
      <h4>{`${title} (${
        release_date ? new Date(release_date).getFullYear() : 'N/A'
      })`}</h4>
      <div className={styles.rating}>
        <img src={Star} alt='star' className={styles.star} />
        <span className={styles.vote}>
          {Math.round(vote_average * 10) / 10}
        </span>
      </div>
    </Link>
  )
}

export default Movie
