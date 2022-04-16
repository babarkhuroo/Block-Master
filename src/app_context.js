import React, { useContext, useReducer, useState, useEffect } from 'react'
import reducer from './app_reducer'
import { TRENDING } from './constants'
import {
  GET_SLIDERS_BEGIN,
  GET_SLIDERS_SUCCESS,
  GET_SLIDERS_ERROR,
  GET_MOVIES_BEGIN,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  GET_SINGLE_MOVIE_BEGIN,
  GET_SINGLE_MOVIE_SUCCESS,
  GET_SINGLE_MOVIE_ERROR,
} from './actions'

const AppContext = React.createContext()

const initialState = {
  movies_loading: false,
  movies_error: false,
  slider_movies: [],
  movies: [],
  single_movie: [],
  single_movie_loading: false,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [query, setQuery] = useState('')
  const [clickedId, setClickedId] = useState(0)

  const getSliders = async (TRENDING) => {
    dispatch({ type: GET_SLIDERS_BEGIN })
    try {
      const data = await fetch(TRENDING).then((res) => res.json())
      const trend = data.results.slice(0, 6)
      dispatch({ type: GET_SLIDERS_SUCCESS, payload: { trend } })
    } catch (error) {
      dispatch({ type: GET_SLIDERS_ERROR })
      console.log(error)
    }
  }

  const getMovies = async (url) => {
    dispatch({ type: GET_MOVIES_BEGIN })
    try {
      const data = await fetch(url).then((res) => res.json())
      const movies = data.results
      dispatch({
        type: GET_MOVIES_SUCCESS,
        payload: { movies },
      })
    } catch (error) {
      dispatch({ type: GET_MOVIES_ERROR })
      console.log(error)
    }
  }

  const getSingleMovie = async (id) => {
    dispatch({ type: GET_SINGLE_MOVIE_BEGIN })
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
      ).then((res) => res.json())
      dispatch({
        type: GET_SINGLE_MOVIE_SUCCESS,
        payload: { data },
      })
    } catch (error) {
      dispatch({ type: GET_SINGLE_MOVIE_ERROR })
      console.log(error)
    }
  }

  useEffect(() => {
    getSliders(TRENDING)
  }, [])

  return (
    <AppContext.Provider
      value={{
        ...state,
        query,
        setQuery,
        clickedId,
        setClickedId,
        getMovies,
        getSingleMovie,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useAppContext }
