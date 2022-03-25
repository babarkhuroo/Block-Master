import { GET_POPULAR_BEGIN, GET_POPULAR_SUCCESS } from './actions'

const app_reducer = (state, action) => {
  if (action.type === GET_POPULAR_BEGIN) {
    return { ...state, loading: true }
  }
  if (action.type === GET_POPULAR_SUCCESS) {
    return { ...state, loading: false, popular_movies: action.payload }
  }
  throw new Error(`No matching "${action.type}" - action type`)
}

export default app_reducer
