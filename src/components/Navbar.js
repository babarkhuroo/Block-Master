import { useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useAppContext } from '../setup/app_context'

import logo from '../assets/imgs/logo-blockBuster.svg'
import search_icon from '../assets/imgs/search-icon.svg'

const Navbar = () => {
  const { setQuery } = useAppContext()
  const navigate = useNavigate()
  const queryRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (queryRef.current.value) {
      setQuery(queryRef.current.value)
      navigate(`/search_term=${queryRef.current.value}`)
    }
  }

  return (
    <nav className={styles.nav}>
      <Link to='/' className={styles.logo}>
        <img src={logo} alt='blockmaster' />
        <h2>Block Master</h2>
      </Link>
      <ul className={styles.subMenu}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.activeLink} ${styles.navLinks}`
                : styles.navLinks
            }
            to='/now_playing'>
            Now Playing
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.activeLink} ${styles.navLinks}`
                : styles.navLinks
            }
            to='/upcoming'>
            Upcoming
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.activeLink} ${styles.navLinks}`
                : styles.navLinks
            }
            to='/top_rated'>
            Top Rated
          </NavLink>
        </li>
      </ul>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.searchField}
          ref={queryRef}
          type='search'
          name='search'
          id='search'
          placeholder='Search here...'
        />
        <button type='submit' className={styles.btn}>
          <img src={search_icon} alt='search icon' />
        </button>
      </form>
    </nav>
  )
}

export default Navbar
