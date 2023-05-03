import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react'
import Game from './components/game/Game'
import Navbar from './components/navigation/Navbar'
import Result from './components/result/Result'
import StartGame from './components/home_page/StartGame'
import Footer from './components/footer/Footer'
// Images:
import cartoonUniverse from './components/assets/cartoon-universe.jpg'
import waldoOnSnow from './components/assets/waldo_on_snow.jpg'
import cartoonUniverseCover from './components/assets/cartoon-universe-cover.jpg'
import waldoOnSnowCover from './components/assets/waldo_on_snow-cover.jpg'
import Digimon from './components/assets/digimon.png'
import Waldo from './components/assets/waldo.png'
import Pokeball from './components/assets/pokeball.png'
import Sonic from './components/assets/sonic.png'
import Wilma from './components/assets/wilma.png'
import Thief from './components/assets/thief.png'
import Wizard from './components/assets/wizard.png'

interface GameProps {
  name: string
  cover: string
  images: {
    [key: string]: string
  }
  names: {
    [key: string]: string
  }
}

type ImageSize = {
  width: number
  height: number
  top: number
  bottom: number
  left: number
  right: number
}

type CharacterPosition = {
  [key: string]: {
    x: number
    y: number
  }
}

const games: GameProps[] = [
  {
    name: 'CartoonUniverse',
    cover: cartoonUniverseCover,
    images: {
      easy: Digimon,
      medium: Waldo,
      hard: Pokeball,
      veryHard: Sonic,
    },
    names: {
      easy: 'Digimon',
      medium: 'Waldo',
      hard: 'Pokeball',
      veryHard: 'Sonic',
    },
  },
  {
    name: 'WaldoOnSnow',
    cover: waldoOnSnowCover,
    images: {
      easy: Waldo,
      medium: Wilma,
      hard: Thief,
      veryHard: Wizard,
    },
    names: {
      easy: 'Waldo',
      medium: 'Wilma',
      hard: 'Thief',
      veryHard: 'Wizard',
    },
  },
]

function App() {
  const [gameImage, setGameImage] = useState()
  const [menuNames, setMenuNames] = useState<{
    [key: string]: string
  }>()
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [selectedGame, setSelectedGame] = useState<GameProps>()
  const [foundCharacters, setFoundCharacters] = useState<
    (string | undefined)[]
  >([])
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 })
  const [menuStatus, setMenuStatus] = useState(false)
  const [characterPosition, setCharactersPositions] =
    useState<CharacterPosition>({})
  const [imageSize, setImageSize] = useState<ImageSize | undefined>()
  const navigate = useNavigate()
  const location = useLocation()

  const [time, setTime] = useState<number>(0)
  const intervalId = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
      }, 1000)
      intervalId.current = id
    } else {
      if (intervalId.current) clearInterval(intervalId.current)
    }
    return () => {
      if (intervalId.current) clearInterval(intervalId.current)
    }
  }, [isRunning, intervalId])

  const formatTime = useCallback((time: number) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }, [])

  function renderMenu(e: MouseEvent<HTMLImageElement, globalThis.MouseEvent>) {
    setMenuPosition({ x: e.pageX, y: e.pageY })
    setMenuStatus((prevStatus) => !prevStatus)
    const target = e.target as HTMLImageElement
    setImageSize(target.getBoundingClientRect())
    if (selectedGame?.name === 'CartoonUniverse') {
      setCharactersPositions({
        easy: { x: 0.036, y: 0.7353 },
        medium: { x: 0.8219, y: 0.8368 },
        hard: { x: 0.7541, y: 0.2878 },
        veryHard: { x: 0.3425, y: 0.794 },
      })
    } else if (selectedGame?.name === 'WaldoOnSnow') {
      setCharactersPositions({
        easy: { x: 0.85, y: 0.76 },
        medium: { x: 0.49, y: 0.44 },
        hard: { x: 0.32, y: 0.66 },
        veryHard: { x: 0.07, y: 0.78 },
      })
    }
  }

  function restartGame() {
    setFoundCharacters([])
    setIsRunning(false)
    setTime(0)
  }

  function startGame(cover: string, game: GameProps) {
    setGameImage(cover === cartoonUniverseCover ? cartoonUniverse : waldoOnSnow)
    setMenuNames(game.names)
    setSelectedGame(game)
    setIsRunning(true)
  }

  function checkFindings(character: string | undefined) {
    if (imageSize !== undefined) {
      const relativeX = menuPosition.x / imageSize.width
      const relativeY = (menuPosition.y - 60) / (imageSize.height - 60)
      let tolerance
      selectedGame?.name === 'WaldoOnSnow'
        ? (tolerance = 0.04)
        : (tolerance = 0.01)
      if (character === selectedGame?.names.easy) {
        const distanceX = Math.abs(characterPosition.easy.x - relativeX)
        const distanceY = Math.abs(characterPosition.easy.y - relativeY)
        if (distanceX < tolerance && distanceY < tolerance) {
          alert(`You found ${character}!`)
          return setFoundCharacters((prevFound) => [...prevFound, character])
        } else alert('Keep looking!')
      } else if (character === selectedGame?.names.medium) {
        const distanceX = Math.abs(characterPosition.medium.x - relativeX)
        const distanceY = Math.abs(characterPosition.medium.y - relativeY)
        if (distanceX < tolerance && distanceY < tolerance) {
          alert(`You found ${character}`)
          return setFoundCharacters((prevFound) => [...prevFound, character])
        } else {
          alert('Keep looking!')
        }
      } else if (character === selectedGame?.names.hard) {
        const distanceX = Math.abs(characterPosition.hard.x - relativeX)
        const distanceY = Math.abs(characterPosition.hard.y - relativeY)
        if (distanceX < tolerance && distanceY < tolerance) {
          alert(`You found ${character}`)
          return setFoundCharacters((prevFound) => [...prevFound, character])
        } else alert('Keep looking!')
      } else if (character === selectedGame?.names.veryHard) {
        const distanceX = Math.abs(characterPosition.veryHard.x - relativeX)
        const distanceY = Math.abs(characterPosition.veryHard.y - relativeY)
        if (distanceX < tolerance && distanceY < tolerance) {
          alert(`You found ${character}`)
          return setFoundCharacters((prevFound) => [...prevFound, character])
        } else alert('Keep looking!')
      }
    }
    setMenuStatus(false)
  }

  useEffect(() => {
    setMenuStatus(false)
    if (foundCharacters.length === 4) {
      navigate('/result')
      setIsRunning(false)
    }
  }, [foundCharacters, navigate])

  return (
    <>
      {location.pathname !== '/result' && (
        <Navbar
          game={selectedGame}
          foundCharacters={foundCharacters}
          restartGame={restartGame}
          formatTime={formatTime}
          time={time}
        />
      )}

      <Routes>
        <Route
          path='/'
          element={<StartGame games={games} startGame={startGame} />}
        />
        <Route
          path='/game'
          element={
            <Game
              gameImage={gameImage}
              names={menuNames}
              checkFindings={checkFindings}
              foundCharacters={foundCharacters}
              menuPosition={menuPosition}
              menuStatus={menuStatus}
              renderMenu={renderMenu}
            />
          }
        />
        <Route
          path='/result'
          element={
            <Result
              restartGame={restartGame}
              formatTime={formatTime}
              time={time}
            />
          }
        />
      </Routes>
      {location.pathname !== '/result' && <Footer />}
    </>
  )
}

export default App
