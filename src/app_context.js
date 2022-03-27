import React from 'react'
import { useContext, useReducer, useEffect } from 'react'
import reducer from './app_reducer'
import { POPULAR as url, TRENDING as trending } from './constants'
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

  const getMovies = async (url, trending) => {
    dispatch({ type: GET_POPULAR_BEGIN })
    try {
      const [data1, data2] = await Promise.all([
        fetch(url),
        fetch(trending),
      ]).then((res) => Promise.all(res.map((res) => res.json())))
      const [pop, trend] = [data1.results, data2.results]
      console.log(pop, trend)
      dispatch({ type: GET_POPULAR_SUCCESS, payload: { trend, pop } })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMovies(url, trending)
  }, [])

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useAppContext }
