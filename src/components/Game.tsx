import { useEffect, useState } from 'react'
import GameCSS from './Game.module.css'
import Menu from './Menu'

interface GameProps {
  gameImage?: string
  names?: {
    [key: string]: string
  }
}

export default function Game({ gameImage, names }: GameProps) {
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 })
  const [menuStatus, setMenuStatus] = useState(false)
  const [menu, setMenu] = useState<JSX.Element | null>()

  function handleClick(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    console.log(e)
    setMenuPosition({ x: e.pageX, y: e.pageY })
    setMenuStatus((pervStatus) => !pervStatus)
    return
  }

  useEffect(() => {
    menuStatus
      ? setMenu(<Menu names={names} position={menuPosition} />)
      : setMenu(null)
  }, [menuStatus, menuPosition, names])

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
