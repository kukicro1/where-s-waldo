import { useEffect, useState } from 'react'
import FindingsInfoCSS from './FindingsInfo.module.css'
import { GameProps } from './Navbar'

export default function FindingsInfo({ game, foundCharacters }: GameProps) {
  const [foundEasy, setFoundEasy] = useState('')
  const [foundMedium, setFoundMedium] = useState('')
  const [foundHard, setFoundHard] = useState('')
  const [foundVeryHard, setFoundVeryHard] = useState('')

  const easy = document.querySelector(`#${game?.names.easy}`)
  const medium = document.querySelector(`#${game?.names.medium}`)
  const hard = document.querySelector(`#${game?.names.hard}`)
  const veryHard = document.querySelector(`#${game?.names.veryHard}`)

  useEffect(() => {
    foundCharacters.forEach((character) => {
      if (character === easy?.id) {
        setFoundEasy(FindingsInfoCSS.foundCharacters)
      } else if (character === medium?.id) {
        setFoundMedium(FindingsInfoCSS.foundCharacters)
      } else if (character === hard?.id) {
        setFoundHard(FindingsInfoCSS.foundCharacters)
      } else if (character === veryHard?.id) {
        setFoundVeryHard(FindingsInfoCSS.foundCharacters)
      }
    })
  }, [foundCharacters, easy, medium, hard, veryHard])

  return (
    <div className={FindingsInfoCSS.findings}>
      <ul className={FindingsInfoCSS.ul}>
        <li
          id={game?.names.easy}
          className={FindingsInfoCSS.li + ' ' + foundEasy}
        >
          <img
            className={FindingsInfoCSS.img}
            src={game?.images.easy}
            alt={game?.names.easy}
          />
          {game?.names.easy}
        </li>
        <li
          id={game?.names.medium}
          className={FindingsInfoCSS.li + ' ' + foundMedium}
        >
          <img
            className={FindingsInfoCSS.img}
            src={game?.images.medium}
            alt={game?.names.medium}
          />
          {game?.names.medium}
        </li>
        <li
          id={game?.names.hard}
          className={FindingsInfoCSS.li + ' ' + foundHard}
        >
          <img
            className={FindingsInfoCSS.img}
            src={game?.images.hard}
            alt={game?.names.hard}
          />
          {game?.names.hard}
        </li>
        <li
          id={game?.names.veryHard}
          className={FindingsInfoCSS.li + ' ' + foundVeryHard}
        >
          <img
            className={FindingsInfoCSS.img}
            src={game?.images.veryHard}
            alt={game?.names.veryHard}
          />
          {game?.names.veryHard}
        </li>
      </ul>
    </div>
  )
}
