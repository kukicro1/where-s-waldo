import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Game from './components/Game'
import Navbar from './components/Navbar'
import Result from './components/Result'
import StartGame from './components/StartGame'
import Footer from './components/Footer'
// Images:
import cartoonUniverse from './components/game_photo/cartoon-universe.jpg'
import waldoOnSnow from './components/game_photo/waldo_on_snow.jpg'
import cartoonUniverseCover from './components/game_photo/cartoon-universe-cover.jpg'
import waldoOnSnowCover from './components/game_photo/waldo_on_snow-cover.jpg'
import digimon from './components/game_photo/digimon.png'
import waldo from './components/game_photo/waldo.png'
import pokeball from './components/game_photo/pokeball.png'
import sonic from './components/game_photo/sonic.png'
import wilma from './components/game_photo/wilma.png'
import thief from './components/game_photo/thief.png'
import wizard from './components/game_photo/wizard.png'

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
      easy: digimon,
      medium: waldo,
      hard: pokeball,
      veryHard: sonic,
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
      easy: waldo,
      medium: wilma,
      hard: thief,
      veryHard: wizard,
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
  const [chosenGame, setChosenGame] = useState<GameProps>()
  const [foundCharacters, setFoundCharacters] = useState<
    (string | undefined)[]
  >([])

  function setGame(cover: string, game: GameProps) {
    setGameImage(cover === cartoonUniverseCover ? cartoonUniverse : waldoOnSnow)
    setMenuNames(game.names)
    setChosenGame(game)
  }

  function checkFindings(character: string | undefined) {
    if (character === chosenGame?.names.easy) {
      return setFoundCharacters((prevFound) => [...prevFound, character])
    } else if (character === chosenGame?.names.medium) {
      return setFoundCharacters((prevFound) => [...prevFound, character])
    } else if (character === chosenGame?.names.hard) {
      return setFoundCharacters((prevFound) => [...prevFound, character])
    } else if (character === chosenGame?.names.veryHard) {
      return setFoundCharacters((prevFound) => [...prevFound, character])
    }
  }

  return (
    <>
      <Navbar game={chosenGame} foundCharacters={foundCharacters} />
      <Routes>
        <Route
          path='/'
          element={<StartGame games={games} setGame={setGame} />}
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
