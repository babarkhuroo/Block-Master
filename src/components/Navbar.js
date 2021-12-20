import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/Navbar.css'
import logo from '../assets/imgs/logo-blockBuster.svg'
import search_icon from '../assets/imgs/search-icon.svg'
import { useFetch } from '../useFetch'
import Main from './Main'
import Movie from './Movie'

const Navbar = ({ search_url }) => {
  const [query, setQuery] = useState('')
  const [searchUrl, setSearchUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    let searchUrl = search_url + query
    setQuery('')
  }

  return (
    <nav className='nav'>
      <Link to='/' className='logo'>
        <img src={logo} alt='blockbuster' />
        <div className='bg-title'></div>
        <h2>Block Master</h2>
      </Link>
      <div className='sub-menu'>
        <h3>
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link' : null)}
            to='/now_playing'
          >
            Now Playing
          </NavLink>
        </h3>
        <h3>
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link' : null)}
            to='/upcoming'
          >
            Upcoming
          </NavLink>
        </h3>
        <h3>
          <NavLink
            className={({ isActive }) => (isActive ? 'active-link' : null)}
            to='/top_rated'
          >
            Top Rated
          </NavLink>
        </h3>
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          id='search'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search here...'
        />
        <button type='submit' className='btn'>
          <img src={search_icon} alt='search icon' />
        </button>
      </form>
    </nav>
  )
}

export default Navbar
