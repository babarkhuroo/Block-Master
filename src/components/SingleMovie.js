import React, { useEffect } from 'react'
import '../styles/SingleMovie.css'
import { useAppContext } from '../app_context'
import Loading from './Loading'

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
    <div className='movie-details'>
      <div className='poster'>
        <img
          src={`https://image.tmdb.org/t/p/w342${poster_path}`}
          alt='poster'
        />
      </div>
      <div className='details'>
        <h1>{title}</h1>
        <p>{overview}</p>
        <div className='others'>
          <p className='release-date'>
            Release Date : <span>{release_date}</span>
          </p>
          <p className='genres'>
            Tags :{' '}
            {genres?.map((genre, index) => (
              <span key={index} className='genre'>
                {genre.name}
              </span>
            ))}
          </p>
          <p className='runtime'>
            Runtime : <span>{runtime} mins</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SingleMovie
