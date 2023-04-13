import NavbarCSS from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={NavbarCSS.navbar} id='aa'>
      <div className={NavbarCSS.newGame} id='aa'>
        New Game
      </div>
      <div>00:00</div>
      <div className={NavbarCSS.findingsLeft} id='aa'>
        3
      </div>
    </nav>
  )
}
