import React from 'react'
import { useState } from 'react'
// import { Link } from 'react-router-dom'
import '../styles/Movie.css'
import Star from '../assets/imgs/star.svg'
import SingleMovie from './SingleMovie'

const img_url = 'https://image.tmdb.org/t/p/w342'
const def =
  'https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg'

const Movie = ({ movie }) => {
  const [clickedId, setClickedId] = useState(0)
  const { id, title, vote_average, poster_path, release_date } = movie
  let release
  if (release_date) {
    release = release_date.slice(0, 4)
  }
  return (
    // <Link to={`/movies/${id}`} key={id}>
    <>
      <div className='movie-container' onClick={() => setClickedId(id)}>
        <img src={poster_path ? img_url + poster_path : def} alt={title} />
        <h3>{`${title} (${release_date ? release : 'N/A'})`}</h3>
        <div className='rating'>
          <img src={Star} alt='star' className='star' />
          <span>{vote_average}</span>
        </div>
      </div>
      {/* {clickedId && <SingleMovie id={clickedId} />} */}
    </>
    // </Link>
  )
}

export default Movie
