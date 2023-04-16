import { Link, useLocation } from 'react-router-dom'
import NavbarCSS from './Navbar.module.css'

export default function Navbar() {
  const location = useLocation()
  const title = location.pathname === '/'
  const hideTimer = location.pathname === '/'
  const hideNumber = location.pathname === '/'

  return (
    <nav className={NavbarCSS.navbar} id='aa'>
      {title ? (
        <div className={NavbarCSS.newGame} id='aa'>
          Find Us
        </div>
      ) : (
        <div className={NavbarCSS.newGame} id='aa'>
          <Link to='/' className={NavbarCSS.link}>
            New Game
          </Link>
        </div>
      )}
      {hideTimer ? null : <div id='timer'>00:00</div>}
      {hideNumber ? null : (
        <div className={NavbarCSS.findingsLeft} id='aa'>
          4
        </div>
      )}
    </nav>
  )
}
