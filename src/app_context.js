import React from 'react'
import { useContext, useReducer, useEffect } from 'react'
import reducer from './app_reducer'
import { TRENDING, POPULAR, SEARCH } from './constants'
import {
  GET_SLIDERS_BEGIN,
  GET_SLIDERS_SUCCESS,
  GET_SLIDERS_ERROR,
  GET_MOVIES_BEGIN,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
} from './actions'

const AppContext = React.createContext()

const initialState = {
  movies_loading: false,
  movies_error: false,
  slider_movies: [],
  movies: [],
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getSliders = async (TRENDING, POPULAR) => {
    dispatch({ type: GET_SLIDERS_BEGIN })
    try {
      const [data1, data2] = await Promise.all([
        fetch(TRENDING),
        fetch(POPULAR),
      ]).then((res) => Promise.all(res.map((res) => res.json())))
      const [trend, pop] = [data1.results.slice(0, 6), data2.results]
      dispatch({ type: GET_SLIDERS_SUCCESS, payload: { trend, pop } })
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

  useEffect(() => {
    getSliders(TRENDING, POPULAR)
  }, [])

  return (
    <AppContext.Provider value={{ ...state, getMovies }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useAppContext }
