import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NavbarCSS from './Navbar.module.css'
import FindingsInfo from './FindingsInfo'

export interface GameProps {
  game:
    | {
        cover: string
        images: {
          [key: string]: string
        }
        names: {
          [key: string]: string
        }
      }
    | undefined
}

export default function Navbar({ game }: GameProps) {
  const location = useLocation()
  const title = location.pathname === '/'
  const hideTimer = location.pathname === '/'
  const hideNumber = location.pathname === '/'
  const [remainingCharactersStatus, setRemainingCharactersStatus] =
    useState(false)
  const [renderRemainingFindings, setRenderRemainingFindings] =
    useState<JSX.Element | null>()

  function handleRemainingFindingsClick() {
    setRemainingCharactersStatus((prevStatus) => !prevStatus)
  }

  useEffect(() => {
    setRenderRemainingFindings(
      remainingCharactersStatus ? <FindingsInfo game={game} /> : null
    )
  }, [remainingCharactersStatus, game])

  return (
    <>
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
          <div className={NavbarCSS.findingsContainer}>
            <div
              className={NavbarCSS.findingsLeft}
              onClick={() => handleRemainingFindingsClick()}
            >
              <div>4</div>
            </div>
            {renderRemainingFindings}
          </div>
        )}
      </nav>
    </>
  )
}
