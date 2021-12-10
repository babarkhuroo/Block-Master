import React from 'react'
import '../styles/Movie.css'
import Star from '../assets/imgs/star.svg'

const img_url = 'https://image.tmdb.org/t/p/w500'

const Movie = ({ movie }) => {
    const { id, title, vote_average, poster_path, release_date } = movie
    const release = release_date.slice(0, 4)
    return (
        <div className="movie-container" id={id}>
            <img src={img_url + poster_path} alt={title} />
            <h3>{`${title} (${release})`}</h3>
            <div className="rating">
                <img src={Star} alt="star" className="star" />
                <span>{vote_average}</span>
            </div>
        </div>
    )
}

export default Movie
