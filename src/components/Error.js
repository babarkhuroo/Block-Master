import styles from './Error.module.css'

function Error() {
  return (
    <section className={styles.errorContainer}>
      <p>
        Error 404.
        <span>Page not found</span>
      </p>
    </section>
  )
}

export default Error
