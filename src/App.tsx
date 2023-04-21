import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
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
  cover: string
  images: {
    [key: string]: string
  }
  names: {
    [key: string]: string
  }
}

const games: GameProps[] = [
  {
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
  const [selectedGame, setSelectedGame] = useState<GameProps>()
  const [foundCharacters, setFoundCharacters] = useState<
    (string | undefined)[]
  >([])

  function restartGame() {
    // when clicked on new game
    // when game is over
  }

  function startGame(cover: string, game: GameProps) {
    setGameImage(cover === cartoonUniverseCover ? cartoonUniverse : waldoOnSnow)
    setMenuNames(game.names)
    setSelectedGame(game)
  }

  function checkFindings(character: string | undefined) {
    if (character === selectedGame?.names.easy) {
      return setFoundCharacters((prevFound) => [...prevFound, character])
    } else if (character === selectedGame?.names.medium) {
      return setFoundCharacters((prevFound) => [...prevFound, character])
    } else if (character === selectedGame?.names.hard) {
      return setFoundCharacters((prevFound) => [...prevFound, character])
    } else if (character === selectedGame?.names.veryHard) {
      return setFoundCharacters((prevFound) => [...prevFound, character])
    }
  }

  return (
    <>
      <Navbar game={selectedGame} foundCharacters={foundCharacters} />
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
            />
          }
        />
        <Route path='/result' element={<Result />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
