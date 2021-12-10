import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main';

const POPULAR = 'https://api.themoviedb.org/3/movie/popular?api_key=102568db51f7574c4f738df5cf0cd2bd&language=en-US&page=1'
const NOW_PLAYING = 'https://api.themoviedb.org/3/movie/now_playing?api_key=102568db51f7574c4f738df5cf0cd2bd&language=en-US&page=1'
const UPCOMING = 'https://api.themoviedb.org/3/movie/upcoming?api_key=102568db51f7574c4f738df5cf0cd2bd&language=en-US&page=1'
const TOP_RATED = 'https://api.themoviedb.org/3/movie/top_rated?api_key=102568db51f7574c4f738df5cf0cd2bd&language=en-US&page=1'
const SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=102568db51f7574c4f738df5cf0cd2bd&language=en-US&page=1&include_adult=false&query='

function App() {
  return (
    <Router>
      <Navbar search_url={SEARCH} />
      <Routes>
        <Route path="/" element={<Main url={POPULAR} />} />
        <Route path="/now_playing" element={<Main url={NOW_PLAYING} />} />
        <Route path="/upcoming" element={<Main url={UPCOMING} />} />
        <Route path="/top_rated" element={<Main url={TOP_RATED} />} />
      </Routes>
    </Router>
  );
}

export default App;
