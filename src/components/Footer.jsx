import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} <span>Sheikh Camel</span>
      </p>
      <p>
        Design inspired by{' '}
        <a href='https://www.figma.com/file/UQpMsOGaO2Z6tgjaJmScwI/Block_Master'>
          Cristopher
        </a>
      </p>
    </footer>
  )
}

export default Footer
