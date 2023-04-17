import FindingsInfoCSS from './FindingsInfo.module.css'
import { GameProps } from './Navbar'

export default function FindingsInfo({ game }: GameProps) {
  return (
    <div className={FindingsInfoCSS.findings}>
      <ul className={FindingsInfoCSS.ul}>
        <li className={FindingsInfoCSS.li}>
          <img
            className={FindingsInfoCSS.img}
            src={game?.images.easy}
            alt={game?.names.easy}
          />
          {game?.names.easy}
        </li>
        <li className={FindingsInfoCSS.li}>
          <img
            className={FindingsInfoCSS.img}
            src={game?.images.medium}
            alt={game?.names.medium}
          />
          {game?.names.medium}
        </li>
        <li className={FindingsInfoCSS.li}>
          <img
            className={FindingsInfoCSS.img}
            src={game?.images.hard}
            alt={game?.names.hard}
          />
          {game?.names.hard}
        </li>
        <li className={FindingsInfoCSS.li}>
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
