import React from 'react'
import { useContext, useReducer, useEffect } from 'react'
import reducer from './app_reducer'
import { POPULAR as url } from './constants'
import { GET_POPULAR_BEGIN, GET_POPULAR_SUCCESS } from './actions'

const AppContext = React.createContext()

const initialState = {
  loading: false,
  trending_movies: [],
  popular_movies: [],
  now_playing: [],
  upcoming: [],
  top_rated: [],
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getMovies = async (url) => {
    dispatch({ type: GET_POPULAR_BEGIN })
    try {
      const res = await fetch(url)
      const data = await res.json()
      const movies = data.results
      dispatch({ type: GET_POPULAR_SUCCESS, payload: movies })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMovies(url)
  }, [])

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useAppContext }
