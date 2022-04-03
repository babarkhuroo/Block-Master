const base_url = 'https://api.themoviedb.org/3/'
const api_key = `api_key=${process.env.REACT_APP_API_KEY}`

export const TRENDING = `${base_url}trending/movie/day?${api_key}`
export const POPULAR = `${base_url}movie/popular?${api_key}&language=en-US&page=`
export const NOW_PLAYING = `${base_url}movie/now_playing?${api_key}&language=en-US&page=`
export const UPCOMING = `${base_url}movie/upcoming?${api_key}&language=en-US&page=`
export const TOP_RATED = `${base_url}movie/top_rated?${api_key}&language=en-US&page=`
export const SEARCH = `${base_url}search/movie?${api_key}&language=en-US&include_adult=false&query=`
