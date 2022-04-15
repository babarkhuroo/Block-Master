import React, { useEffect } from 'react'
import '../styles/SingleMovie.css'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../app_context'

function SingleMovie() {
  const { id } = useParams()
  const { getSingleMovie, single_movie: movie } = useAppContext()
  const { title, overview, release_date, genres, runtime } = movie

  useEffect(() => {
    getSingleMovie(id)
  }, [id])

  return (
    <div className='movie-details'>
      <h1>{title}</h1>
      <p>{overview}</p>
      <div className='details'>
        <span>{release_date}</span>
        {/* <span>{genres}</span> */}
        <span>{runtime}</span>
      </div>
    </div>
  )
}

export default SingleMovie
