import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import Error from './components/Error'
import SingleMovie from './components/SingleMovie'
import {
  POPULAR,
  NOW_PLAYING,
  UPCOMING,
  TOP_RATED,
} from './utilities/constants'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main url={POPULAR} />} />
        <Route path='/now_playing' element={<Main url={NOW_PLAYING} />} />
        <Route path='/upcoming' element={<Main url={UPCOMING} />} />
        <Route path='/top_rated' element={<Main url={TOP_RATED} />} />
        <Route path='/search_term=:query' element={<Main />} />
        <Route path='/movie/:id' element={<SingleMovie />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
