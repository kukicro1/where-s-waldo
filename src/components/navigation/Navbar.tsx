import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NavbarCSS from './Navbar.module.css'
import FindingsInfoCSS from './FindingsInfo.module.css'
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
  foundCharacters: (string | undefined)[]
}

export default function Navbar({ game, foundCharacters }: GameProps) {
  const { pathname } = useLocation()
  const isHomePage = pathname === '/'

  const { names } = game || {}

  const [foundEasy, setFoundEasy] = useState('')
  const [foundMedium, setFoundMedium] = useState('')
  const [foundHard, setFoundHard] = useState('')
  const [foundVeryHard, setFoundVeryHard] = useState('')

  const [remainingCharactersStatus, setRemainingCharactersStatus] =
    useState(false)
  const [renderRemainingFindings, setRenderRemainingFindings] =
    useState<JSX.Element | null>(null)
  const [remainingCharacterCounter, setRemainingCharacterCounter] =
    useState<number>(4)

  function showFindingsInfo() {
    setRemainingCharactersStatus((prevStatus) => !prevStatus)
  }

  // Update undiscovered characters menu
  useEffect(() => {
    foundCharacters.forEach((character) => {
      if (character === names?.easy) {
        setFoundEasy(FindingsInfoCSS.foundCharacterStyle)
      } else if (character === names?.medium) {
        setFoundMedium(FindingsInfoCSS.foundCharacterStyle)
      } else if (character === names?.hard) {
        setFoundHard(FindingsInfoCSS.foundCharacterStyle)
      } else if (character === names?.veryHard) {
        setFoundVeryHard(FindingsInfoCSS.foundCharacterStyle)
      }
    })
    setRemainingCharacterCounter(4 - foundCharacters.length)
  }, [foundCharacters, names])

  // Render undiscovered characters menu
  useEffect(() => {
    setRenderRemainingFindings(
      remainingCharactersStatus ? (
        <FindingsInfo
          game={game}
          foundEasy={foundEasy}
          foundMedium={foundMedium}
          foundHard={foundHard}
          foundVeryHard={foundVeryHard}
        />
      ) : null
    )
  }, [
    remainingCharactersStatus,
    game,
    foundEasy,
    foundHard,
    foundMedium,
    foundVeryHard,
  ])

  return (
    <>
      <nav className={NavbarCSS.navbar}>
        {isHomePage ? (
          <div className={NavbarCSS.newGame}>Find Us</div>
        ) : (
          <div className={NavbarCSS.newGame}>
            <Link
              to='/'
              className={NavbarCSS.link}
              onClick={() => 'restartGame'}
            >
              New Game
            </Link>
          </div>
        )}
        {!isHomePage && <div id='timer'>00:00</div>}
        {!isHomePage && (
          <div className={NavbarCSS.findingsContainer}>
            <div className={NavbarCSS.findingsLeft} onClick={showFindingsInfo}>
              <div>{remainingCharacterCounter}</div>
            </div>
            {renderRemainingFindings}
          </div>
        )}
      </nav>
    </>
  )
}
