import '../styles/Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      &copy; {new Date().getFullYear()} <span>Sheikh Camel</span>
      <p>All rights reserved.</p>
    </footer>
  )
}

export default Footer
