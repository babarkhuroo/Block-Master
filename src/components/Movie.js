import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Movie.css'
import Star from '../assets/imgs/star.svg'
import { useAppContext } from '../app_context'

const img_url = 'https://image.tmdb.org/t/p/w185'
const def =
  'https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg'

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
      className='movie-container'
      key={id}
      onClick={() => setClickedId(id)}
    >
      <img src={poster_path ? img_url + poster_path : def} alt={title} />
      <h4>{`${title} (${release_date ? release : 'N/A'})`}</h4>
      <div className='rating'>
        <img src={Star} alt='star' className='star' />
        <span>{vote_average}</span>
      </div>
    </Link>
  )
}

export default Movie
