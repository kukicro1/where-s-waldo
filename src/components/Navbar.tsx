import { Link, useLocation } from 'react-router-dom'
import NavbarCSS from './Navbar.module.css'

export default function Navbar() {
  const location = useLocation()
  const hideTimer = location.pathname === '/'

  return (
    <nav className={NavbarCSS.navbar} id='aa'>
      <div className={NavbarCSS.newGame} id='aa'>
        <Link to='/' className={NavbarCSS.link}>
          New Game
        </Link>
      </div>
      {hideTimer ? <div></div> : <div id='timer'>00:00</div>}
      <div className={NavbarCSS.findingsLeft} id='aa'>
        3
      </div>
    </nav>
  )
}
