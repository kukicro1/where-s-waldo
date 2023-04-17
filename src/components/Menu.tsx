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

  function findings(character: string | undefined) {
    console.log(character)
  }

  return (
    <div className={MenuCSS.menu} style={menuStyle}>
      <ul className={MenuCSS.ul}>
        <li className={MenuCSS.li} onClick={() => findings(names?.easy)}>
          {names?.easy}
        </li>
        <li className={MenuCSS.li} onClick={() => findings(names?.medium)}>
          {names?.medium}
        </li>
        <li className={MenuCSS.li} onClick={() => findings(names?.hard)}>
          {names?.hard}
        </li>
        <li className={MenuCSS.li} onClick={() => findings(names?.veryHard)}>
          {names?.veryHard}
        </li>
      </ul>
    </div>
  )
}
