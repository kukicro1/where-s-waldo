import { Link, useLocation } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
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
  const location = useLocation()
  const title = location.pathname === '/'
  const hideTimer = location.pathname === '/'
  const hideNumber = location.pathname === '/'

  const [remainingCharactersStatus, setRemainingCharactersStatus] =
    useState(false)
  const [remainingCharacterCounter, setRemainingCharacterCounter] =
    useState<number>(4)
  const [foundCharactersState, setFoundCharactersState] = useState<{
    foundEasy: string
    foundMedium: string
    foundHard: string
    foundVeryHard: string
  }>({
    foundEasy: '',
    foundMedium: '',
    foundHard: '',
    foundVeryHard: '',
  })

  const renderRemainingFindings = useMemo(() => {
    return (
      <FindingsInfo
        game={game}
        foundEasy={foundCharactersState.foundEasy}
        foundMedium={foundCharactersState.foundMedium}
        foundHard={foundCharactersState.foundHard}
        foundVeryHard={foundCharactersState.foundVeryHard}
      />
    )
  }, [game, foundCharactersState])

  function showFindingsInfo() {
    setRemainingCharactersStatus((prevStatus) => !prevStatus)
  }

  // Update counter
  useEffect(() => {
    setRemainingCharacterCounter(4 - foundCharacters.length)
  }, [foundCharacters])

  // Update undiscovered characters menu
  useEffect(() => {
    const easy = document.querySelector(`#${game?.names.easy}`)
    const medium = document.querySelector(`#${game?.names.medium}`)
    const hard = document.querySelector(`#${game?.names.hard}`)
    const veryHard = document.querySelector(`#${game?.names.veryHard}`)

    let updatedState = { ...foundCharactersState }

    foundCharacters.forEach((character) => {
      if (character === easy?.id) {
        updatedState.foundEasy = FindingsInfoCSS.foundCharacters
      } else if (character === medium?.id) {
        updatedState.foundMedium = FindingsInfoCSS.foundCharacters
      } else if (character === hard?.id) {
        updatedState.foundHard = FindingsInfoCSS.foundCharacters
      } else if (character === veryHard?.id) {
        updatedState.foundVeryHard = FindingsInfoCSS.foundCharacters
      }
    })

    setFoundCharactersState(updatedState)
  }, [foundCharacters, game, remainingCharactersStatus])

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
              onClick={() => showFindingsInfo()}
            >
              <div>{remainingCharacterCounter}</div>
            </div>
            {remainingCharactersStatus && renderRemainingFindings}
          </div>
        )}
      </nav>
    </>
  )
}
