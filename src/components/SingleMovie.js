import React, { useEffect } from 'react'
import '../styles/SingleMovie.css'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../app_context'
import Loading from './Loading'

function SingleMovie() {
  const {
    clickedId: id,
    getSingleMovie,
    single_movie: movie,
    single_movie_loading,
  } = useAppContext()
  const { title, overview, release_date, genres, runtime } = movie
  console.log(genres)

  useEffect(() => {
    console.log('in effect')
    getSingleMovie(id)
  }, [])
  console.log('after')

  if (single_movie_loading) {
    return <Loading />
  }

  return (
    <div className='movie-details'>
      <h1>{title}</h1>
      <p>{overview}</p>
      <div className='details'>
        <span className='release-date'>{release_date}</span>
        {/* {genres.map((genre, index) => {
          return (
            <span key={index} className='genre'>
              {genre.name}
            </span>
          )
        })} */}
        <span className='runtime'>{runtime}</span>
      </div>
    </div>
  )
}

export default SingleMovie
