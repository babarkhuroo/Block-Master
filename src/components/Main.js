import React from 'react'
import { useFetch } from '../useFetch'
import '../styles/Main.css'
import Movie from './Movie'

const Main = ({ url }) => {
    const { movies } = useFetch(url)
    return (
        <section className="container">
            {movies.map((movie) => {
                return (
                    <Movie key={movie.id} movie={movie} />
                )
            })}
        </section>
    )
}

export default Main
