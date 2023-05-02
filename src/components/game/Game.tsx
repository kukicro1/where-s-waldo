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
}

export default function Game({
  gameImage,
  names,
  checkFindings,
  foundCharacters,
}: GameProps) {
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 })
  const [menuStatus, setMenuStatus] = useState(false)
  const [menu, setMenu] = useState<JSX.Element | null>()

  function handleClick(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    console.log(`width: ${e.pageX}`)
    console.log(`height: ${e.pageY}`)
    setMenuPosition({ x: e.pageX, y: e.pageY })
    setMenuStatus((pervStatus) => !pervStatus)
    return
  }

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
    setMenuStatus(false)
  }, [foundCharacters])

  return (
    <div>
      <img
        onClick={(e) => handleClick(e)}
        className={GameCSS.image}
        src={gameImage}
        alt=''
      />
      {menu}
    </div>
  )
}
