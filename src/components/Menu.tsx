import { CSSProperties } from 'react'
import MenuCSS from './Menu.module.css'

interface MenuProps {
  names?: {
    [key: string]: string
  }
  position: {
    [key: string]: number
  }
}

export default function Menu({ names, position }: MenuProps) {
  const menuStyle: CSSProperties = {
    position: 'absolute',
    left: `${position.x}px`,
    top: `${position.y}px`,
  }
  return (
    <div className={MenuCSS.menu} style={menuStyle}>
      <ul className={MenuCSS.ul}>
        <li className={MenuCSS.li}>{names?.easy}</li>
        <li className={MenuCSS.li}>{names?.medium}</li>
        <li className={MenuCSS.li}>{names?.hard}</li>
        <li className={MenuCSS.li}>{names?.veryHard}</li>
      </ul>
    </div>
  )
}
