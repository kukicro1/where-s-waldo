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

interface AppProps {
  cover: string
  images: {
    [key: string]: string
  }
  alt: {
    [key: string]: string
  }
}

const games: AppProps[] = [
  {
    cover: cartoonUniverseCover,
    images: {
      easy: digimon,
      medium: waldo,
      hard: pokeball,
      veryHard: sonic,
    },
    alt: {
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
    alt: {
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

  function setCover(
    cover: string,
    names: {
      [key: string]: string
    }
  ) {
    setGameImage(cover === cartoonUniverseCover ? cartoonUniverse : waldoOnSnow)
    setMenuNames(names)
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<StartGame games={games} setCover={setCover} />}
        />
        <Route
          path='/game'
          element={<Game gameImage={gameImage} names={menuNames} />}
        />
        <Route path='/result' element={<Result />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
