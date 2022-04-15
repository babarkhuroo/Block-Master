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

const app_reducer = (state, action) => {
  if (action.type === GET_SLIDERS_BEGIN) {
    return { ...state, movies_loading: true }
  }
  if (action.type === GET_SLIDERS_SUCCESS) {
    return {
      ...state,
      movies_loading: false,
      slider_movies: action.payload.trend,
    }
  }
  if (action.type === GET_SLIDERS_ERROR) {
    return { ...state, movies_loading: false, movies_error: true }
  }
  if (action.type === GET_MOVIES_BEGIN) {
    return { ...state, movies_loading: true }
  }
  if (action.type === GET_MOVIES_SUCCESS) {
    return {
      ...state,
      movies_loading: false,
      movies: action.payload.movies,
    }
  }
  if (action.type === GET_MOVIES_ERROR) {
    return { ...state, movies_loading: false, movies_error: true }
  }
  if (action.type === GET_SINGLE_MOVIE_BEGIN) {
    return { ...state }
  }
  if (action.type === GET_SINGLE_MOVIE_SUCCESS) {
    return { ...state, single_movie: action.payload.data }
  }
  if (action.type === GET_SINGLE_MOVIE_ERROR) {
    return { ...state }
  }

  throw new Error(`No matching "${action.type}" - action type`)
}

export default app_reducer
