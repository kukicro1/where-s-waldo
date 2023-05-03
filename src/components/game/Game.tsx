import { useEffect, useState } from 'react'
import GameCSS from './Game.module.css'
import Menu from './Menu'

interface GameProps {
  gameImage?: string
  names?: {
    [key: string]: string
  }
  checkFindings: Function
  foundCharacters: (string | undefined)[]
  menuPosition: {
    x: number
    y: number
  }
  menuStatus: boolean
  renderMenu: Function
}

export default function Game({
  gameImage,
  names,
  checkFindings,
  foundCharacters,
  menuPosition,
  menuStatus,
  renderMenu,
}: GameProps) {
  const [menu, setMenu] = useState<JSX.Element | null>()

  useEffect(() => {
    menuStatus
      ? setMenu(
          <Menu
            names={names}
            position={menuPosition}
            checkFindings={checkFindings}
            foundCharacters={foundCharacters}
          />
        )
      : setMenu(null)
  }, [menuStatus, menuPosition, names, checkFindings, foundCharacters])

  useEffect(() => {
    setMenu(null)
  }, [foundCharacters])

  return (
    <div>
      <img
        onClick={(e) => renderMenu(e)}
        className={GameCSS.image}
        src={gameImage}
        alt=''
      />
      {menu}
    </div>
  )
}
