import { CSSProperties, useEffect, useState } from 'react'
import MenuCSS from './Menu.module.css'

interface MenuProps {
  names?: {
    [key: string]: string
  }
  position: {
    [key: string]: number
  }
  checkFindings: Function
  foundCharacters: (string | undefined)[]
}

export default function Menu({
  names,
  position,
  checkFindings,
  foundCharacters,
}: MenuProps) {
  const menuStyle: CSSProperties = {
    position: 'absolute',
    left: `${position.x}px`,
    top: `${position.y}px`,
  }

  const [undiscoveredCharacters, setUndiscoveredCharacters] = useState<
    (string | undefined)[]
  >([names?.easy, names?.medium, names?.hard, names?.veryHard])

  useEffect(() => {
    setUndiscoveredCharacters((undiscovered) => {
      return undiscovered.filter(
        (character) => !foundCharacters.includes(character)
      )
    })
  }, [foundCharacters, names])

  return (
    <div className={MenuCSS.menu} style={menuStyle}>
      <ul className={MenuCSS.ul}>
        {undiscoveredCharacters.map((character) => {
          return (
            <li
              key={character}
              className={MenuCSS.li}
              onClick={() => checkFindings(character)}
            >
              {character}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
