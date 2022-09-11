export const base_url = 'https://api.themoviedb.org/3/'
export const base_img_url = 'https://image.tmdb.org/t/p'
export const api_key = `api_key=${process.env.REACT_APP_API_KEY}`

export const small_img = `${base_img_url}/w185`
export const medium_img = `${base_img_url}/w342`
export const large_img = `${base_img_url}/w1280`
export const default_img =
  'https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg'

export const TRENDING = `${base_url}trending/movie/day?${api_key}`
export const POPULAR = `${base_url}movie/popular?${api_key}&language=en-US&page=`
export const NOW_PLAYING = `${base_url}movie/now_playing?${api_key}&language=en-US&page=`
export const UPCOMING = `${base_url}movie/upcoming?${api_key}&language=en-US&page=`
export const TOP_RATED = `${base_url}movie/top_rated?${api_key}&language=en-US&page=`
export const SEARCH = `${base_url}search/movie?${api_key}&language=en-US&include_adult=false&query=`
