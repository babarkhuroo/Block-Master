import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      &copy; {new Date().getFullYear()} <span>Sheikh Camel</span>
      <p>All rights reserved.</p>
    </footer>
  )
}

export default Footer
