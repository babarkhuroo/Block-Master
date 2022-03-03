import '../styles/Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      &copy; {new Date().getFullYear()}{' '}
      <a
        href='https://www.babarkhuroo.cf'
        target='_blank'
        rel='noopener noreferrer'
      >
        Babar Khuroo
      </a>
      <p>All rights reserved.</p>
    </footer>
  )
}

export default Footer
