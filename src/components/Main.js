import React from 'react'
import { useFetch } from '../useFetch'
import '../styles/Main.css'
import Movie from './Movie'
import Loading from './Loading'

const Main = ({ url }) => {
    const { movies, loading } = useFetch(url)
    if (loading) {
        return <Loading />
    }
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
