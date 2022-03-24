import { GET_POPULAR } from './actions'

const app_reducer = (state, action) => {
  if (action.type === GET_POPULAR) {
    return { ...state, popular_movies: action.payload }
  }
  throw new Error(`No matching "${action.type}" - action type`)
}

export default app_reducer
