import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Main from './components/Main'
import Footer from './components/Footer'
import Error from './components/Error'
// import SingleMovie from './components/SingleMovie'

const apiKey = `api_key=${process.env.REACT_APP_API_KEY}`
const base_url = 'https://api.themoviedb.org/3/'

const POPULAR = `${base_url}movie/popular?${apiKey}&language=en-US&page=`
const NOW_PLAYING = `${base_url}movie/now_playing?${apiKey}&language=en-US&page=`
const UPCOMING = `${base_url}movie/upcoming?${apiKey}&language=en-US&page=`
const TOP_RATED = `${base_url}movie/top_rated?${apiKey}&language=en-US&page=`
const TRENDING = `${base_url}trending/movie/day?${apiKey}`
export const SEARCH = `${base_url}search/movie?${apiKey}&language=en-US&include_adult=false&query=`

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Slider url={TRENDING} /> */}
      <Routes>
        <Route path='/' element={<Main url={POPULAR} />} />
        {/* <Route path='/now_playing' element={<Main url={NOW_PLAYING} />} /> */}
        {/* <Route path='/upcoming' element={<Main url={UPCOMING} />} /> */}
        {/* <Route path='/top_rated' element={<Main url={TOP_RATED} />} /> */}
        {/* <Route path='/movie/:id' element={<SingleMovie />} /> */}
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
