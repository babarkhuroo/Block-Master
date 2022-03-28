import {
  GET_MOVIES_BEGIN,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
} from './actions'

const app_reducer = (state, action) => {
  if (action.type === GET_MOVIES_BEGIN) {
    return { ...state, movies_loading: true }
  }
  if (action.type === GET_MOVIES_SUCCESS) {
    return {
      ...state,
      movies_loading: false,
      trending_movies: action.payload.trend,
      popular_movies: action.payload.pop,
    }
  }
  if (action.type === GET_MOVIES_ERROR) {
    return { ...state, movies_loading: false, movies_error: true }
  }
  throw new Error(`No matching "${action.type}" - action type`)
}

export default app_reducer
