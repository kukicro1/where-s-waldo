import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
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

  // const foundEasy = useRef('')

  // // const [foundEasy, setFoundEasy] = useState('')
  // const [foundMedium, setFoundMedium] = useState('')
  // const [foundHard, setFoundHard] = useState('')
  // const [foundVeryHard, setFoundVeryHard] = useState('')

  const [remainingCharactersStatus, setRemainingCharactersStatus] =
    useState(false)
  const [renderRemainingFindings, setRenderRemainingFindings] =
    useState<JSX.Element | null>()
  const [remainingCharacterCounter, setRemainingCharacterCounter] =
    useState<number>(4)

  function showFindingsInfo() {
    setRemainingCharactersStatus((prevStatus) => !prevStatus)
  }

  // Update counter
  useEffect(() => {
    setRemainingCharacterCounter(4 - foundCharacters.length)
  }, [foundCharacters])

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

  // ...

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

  // Render undiscovered characters menu
  useEffect(() => {
    console.log(foundCharactersState.foundHard)
    setRenderRemainingFindings(
      remainingCharactersStatus ? (
        <FindingsInfo
          game={game}
          foundEasy={foundCharactersState.foundEasy}
          foundMedium={foundCharactersState.foundMedium}
          foundHard={foundCharactersState.foundHard}
          foundVeryHard={foundCharactersState.foundVeryHard}
        />
      ) : null
    )
  }, [remainingCharactersStatus, game, foundCharactersState])

  // Update undiscovered characters menu
  // useEffect(() => {
  //   const easy = document.querySelector(`#${game?.names.easy}`)
  //   const medium = document.querySelector(`#${game?.names.medium}`)
  //   const hard = document.querySelector(`#${game?.names.hard}`)
  //   const veryHard = document.querySelector(`#${game?.names.veryHard}`)

  //   foundCharacters.forEach((character) => {
  //     if (character === easy?.id) {
  //       foundEasy.current = FindingsInfoCSS.foundCharacters
  //     } else if (character === medium?.id) {
  //       setFoundMedium(FindingsInfoCSS.foundCharacters)
  //     } else if (character === hard?.id) {
  //       setFoundHard(FindingsInfoCSS.foundCharacters)
  //     } else if (character === veryHard?.id) {
  //       setFoundVeryHard(FindingsInfoCSS.foundCharacters)
  //     }
  //   })
  // }, [foundCharacters, game, remainingCharactersStatus])

  // // Render undiscovered characters menu
  // useEffect(() => {
  //   setRenderRemainingFindings(
  //     remainingCharactersStatus ? (
  //       <FindingsInfo
  //         game={game}
  //         foundEasy={foundEasy.current}
  //         foundMedium={foundMedium}
  //         foundHard={foundHard}
  //         foundVeryHard={foundVeryHard}
  //       />
  //     ) : null
  //   )
  // }, [
  //   remainingCharactersStatus,
  //   game,
  //   foundEasy,
  //   foundHard,
  //   foundMedium,
  //   foundVeryHard,
  // ])

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
            {renderRemainingFindings}
          </div>
        )}
      </nav>
    </>
  )
}
