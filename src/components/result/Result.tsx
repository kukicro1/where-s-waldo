import { Link } from 'react-router-dom'
import ResultCSS from './Result.module.css'
interface ResultProps {
  restartGame: Function
  formatTime: Function
  time: number
}

export default function Result({ restartGame, formatTime, time }: ResultProps) {
  return (
    <div className={ResultCSS.resultContainer}>
      <div className={ResultCSS.resultModal}>
        <div className={ResultCSS.highScoreContainer}>
          <div className={ResultCSS.highScore}>High Scores</div>
          <ol className={ResultCSS.list}>
            <li className={ResultCSS.listItem}>
              <span className={ResultCSS.listName}>Name </span>
              <span className={ResultCSS.listTime}>00:00:00</span>
            </li>
            <li className={ResultCSS.listItem}>
              <span className={ResultCSS.listName}>Name </span>
              <span className={ResultCSS.listTime}>00:00:00</span>
            </li>
            <li className={ResultCSS.listItem}>
              <span className={ResultCSS.listName}>Name </span>
              <span className={ResultCSS.listTime}>00:00:00</span>
            </li>
            <li className={ResultCSS.listItem}>
              <span className={ResultCSS.listName}>Name </span>
              <span className={ResultCSS.listTime}>00:00:00</span>
            </li>
            <li className={ResultCSS.listItem}>
              <span className={ResultCSS.listName}>Name </span>
              <span className={ResultCSS.listTime}>00:00:00</span>
            </li>
            <li className={ResultCSS.listItem}>
              <span className={ResultCSS.listName}>Name </span>
              <span className={ResultCSS.listTime}>00:00:00</span>
            </li>
            <li className={ResultCSS.listItem}>
              <span className={ResultCSS.listName}>Name </span>
              <span className={ResultCSS.listTime}>00:00:00</span>
            </li>
            <li className={ResultCSS.listItem}>
              <span className={ResultCSS.listName}>Name </span>
              <span className={ResultCSS.listTime}>00:00:00</span>
            </li>
            <li className={ResultCSS.listItem}>
              <span className={ResultCSS.listName}>Name </span>
              <span className={ResultCSS.listTime}>00:00:00</span>
            </li>
            <li className={ResultCSS.listItem}>
              <span className={ResultCSS.listName}>Name </span>
              <span className={ResultCSS.listTime}>00:00:00</span>
            </li>
          </ol>
        </div>
        <div className={ResultCSS.playersResultContainer}>
          <div className={ResultCSS.playersResultTitle}>Your time:</div>
          <div className={ResultCSS.playersResultTime}>{formatTime(time)}</div>
          <Link
            to='/'
            className={ResultCSS.playersResultButton}
            onClick={() => restartGame()}
          >
            Restart
          </Link>
        </div>
      </div>

      {/* <ul className={ResultCSS}>
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
      </ul> */}
    </div>
  )
}
