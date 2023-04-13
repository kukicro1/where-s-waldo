import { Route, Routes } from 'react-router-dom'
import Game from './components/Game'
import Navbar from './components/Navbar'
import Result from './components/Result'
import StartGame from './components/StartGame'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<StartGame />} />
        <Route path='/game' element={<Game />} />
        <Route path='/result' element={<Result />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
