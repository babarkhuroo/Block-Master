import React from 'react'
import '../styles/Movie.css'
import Star from '../assets/imgs/star.svg'

const img_url = 'https://image.tmdb.org/t/p/w500'
const def =
  'https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg'

const Movie = ({ movie }) => {
  const { id, title, vote_average, poster_path, release_date } = movie
  let release
  if (release_date) {
    release = release_date.slice(0, 4)
  }
  return (
    <div className='movie-container' id={id}>
      <img src={poster_path ? img_url + poster_path : def} alt={title} />
      <h3>{`${title} (${release_date ? release : 'N/A'})`}</h3>
      <div className='rating'>
        <img src={Star} alt='star' className='star' />
        <span>{vote_average}</span>
      </div>
    </div>
  )
}

export default Movie
