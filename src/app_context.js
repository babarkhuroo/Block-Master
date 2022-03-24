import React from 'react'
import { useContext, useReducer, useEffect } from 'react'
import reducer from './app_reducer'
import { POPULAR as url } from './constants'
import { GET_POPULAR } from './actions'

const AppContext = React.createContext()

const initialState = {
  trending_movies: [],
  popular_movies: [],
  now_playing: [],
  upcoming: [],
  top_rated: [],
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getMovies = async () => {
    const res = await fetch(url)
    const data = await res.json()
    const movies = data.results
    dispatch({ type: GET_POPULAR, payload: movies })
    console.log('hello')
  }

  useEffect(() => {
    getMovies()
  }, [url])

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useAppContext }
