import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Main from './components/Main'

const apiKey = `api_key=${process.env.REACT_APP_API_KEY}`

const POPULAR = `https://api.themoviedb.org/3/movie/popular?${apiKey}&language=en-US&page=`
const NOW_PLAYING = `https://api.themoviedb.org/3/movie/now_playing?${apiKey}&language=en-US&page=`
const UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?${apiKey}&language=en-US&page=`
const TOP_RATED = `https://api.themoviedb.org/3/movie/top_rated?${apiKey}&language=en-US&page=`
const TRENDING = `https://api.themoviedb.org/3/trending/movie/day?${apiKey}`
export const SEARCH = `https://api.themoviedb.org/3/search/movie?${apiKey}&language=en-US&include_adult=false&query=`

function App() {
  return (
    <Router>
      <Navbar />
      <Slider url={TRENDING} />
      <Routes>
        <Route path='/' element={<Main url={POPULAR} />} />
        <Route path='/now_playing' element={<Main url={NOW_PLAYING} />} />
        <Route path='/upcoming' element={<Main url={UPCOMING} />} />
        <Route path='/top_rated' element={<Main url={TOP_RATED} />} />
      </Routes>
    </Router>
  )
}

export default App
