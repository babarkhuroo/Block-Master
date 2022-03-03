import { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useGlobalContext } from './context'
import '../styles/Navbar.css'
import logo from '../assets/imgs/logo-blockBuster.svg'
import search_icon from '../assets/imgs/search-icon.svg'

const Navbar = () => {
  const { setQuery } = useGlobalContext()
  const queryRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(queryRef.current.value)
  }

  return (
    <nav className='nav'>
      <Link to='/' className='logo'>
        <img src={logo} alt='blockbuster' />
        <div className='bg-title'></div>
        <h2>Block Master</h2>
      </Link>
      <div className='sub-menu'>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          to='/now_playing'
        >
          Now Playing
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          to='/upcoming'
        >
          Upcoming
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : null)}
          to='/top_rated'
        >
          Top Rated
        </NavLink>
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <input
          ref={queryRef}
          type='search'
          name='search'
          id='search'
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
