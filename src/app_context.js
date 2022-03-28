import React from 'react'
import { useContext, useReducer, useEffect } from 'react'
import reducer from './app_reducer'
import {
  TRENDING,
  POPULAR,
  NOW_PLAYING,
  UPCOMING,
  TOP_RATED,
} from './constants'
import {
  GET_MOVIES_BEGIN,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
} from './actions'

const AppContext = React.createContext()

const initialState = {
  movies_loading: false,
  movies_error: false,
  trending_movies: [],
  popular_movies: [],
  now_playing: [],
  upcoming: [],
  top_rated: [],
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getMovies = async (TRENDING, POPULAR) => {
    dispatch({ type: GET_MOVIES_BEGIN })
    try {
      const [data1, data2] = await Promise.all([
        fetch(TRENDING),
        fetch(POPULAR),
      ]).then((res) => Promise.all(res.map((res) => res.json())))
      const [trend, pop] = [data1.results.slice(0, 6), data2.results]
      dispatch({ type: GET_MOVIES_SUCCESS, payload: { trend, pop } })
    } catch (error) {
      dispatch({ type: GET_MOVIES_ERROR })
      console.log(error)
    }
  }

  useEffect(() => {
    getMovies(TRENDING, POPULAR)
  }, [])

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useAppContext }
