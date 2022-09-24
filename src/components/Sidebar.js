import { useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from './Sidebar.module.css'
import { useAppContext } from '../setup/app_context'

import search_icon from '../assets/imgs/search-icon.svg'

const Sidebar = () => {
  const { setQuery, isSidebarOpen, closeSidebar } = useAppContext()
  const navigate = useNavigate()
  const queryRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (queryRef.current.value) {
      setQuery(queryRef.current.value)
      navigate(`/query=${queryRef.current.value}`)
    }
  }

  return (
    <aside
      className={
        isSidebarOpen
          ? `${styles.sidebar} ${styles.showSidebar}`
          : styles.sidebar
      }>
      <ul className={styles.subMenu}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.activeLink} ${styles.navLinks}`
                : styles.navLinks
            }
            to='/now_playing'
            onClick={closeSidebar}>
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
            to='/upcoming'
            onClick={closeSidebar}>
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
            to='/top_rated'
            onClick={closeSidebar}>
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
        <button type='submit' className={styles.btn} onClick={closeSidebar}>
          <img src={search_icon} alt='search icon' />
        </button>
      </form>
    </aside>
  )
}

export default Sidebar
