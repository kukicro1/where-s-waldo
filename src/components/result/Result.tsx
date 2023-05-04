import { Link } from 'react-router-dom'
import ResultCSS from './Result.module.css'
import { useEffect, useState } from 'react'
import { db } from '../../firebase'
import {
  addDoc,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore'

interface ResultProps {
  restartGame: Function
  formatTime: Function
  time: number
  selectedGame: string | undefined
}

interface HighScore {
  id: string
  name: string
  time: number
}

export default function Result({
  restartGame,
  formatTime,
  time,
  selectedGame,
}: ResultProps) {
  const [highScores, setHighScores] = useState<HighScore[]>([])
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const highScoresRef = collection(db, `${selectedGame}`)
    const highScoresQuery = query(
      highScoresRef,
      orderBy('time', 'asc'),
      limit(10)
    )
    const unsubscribe = onSnapshot(highScoresQuery, (snapshot) => {
      setHighScores(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          time: doc.data().time,
        }))
      )
    })
    return () => {
      unsubscribe()
    }
  }, [selectedGame])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!submitted && (highScores.length < 10 || time < highScores[9].time)) {
      await addDoc(collection(db, `${selectedGame}`), { name, time })
      setSubmitted(true)
    }
  }

  return (
    <div className={ResultCSS.resultContainer}>
      <div className={ResultCSS.resultModal}>
        <div className={ResultCSS.highScoreContainer}>
          <div className={ResultCSS.highScore}>High Scores</div>
          <ol className={ResultCSS.list}>
            {highScores.map((item, index) => (
              <li key={index} className={ResultCSS.listItem}>
                <span className={ResultCSS.listName}>{item.name} </span>
                <span className={ResultCSS.listTime}>
                  {formatTime(item.time)}
                </span>
              </li>
            ))}
          </ol>
        </div>
        <div className={ResultCSS.playersResultContainer}>
          <div className={ResultCSS.playersResultTitle}>Your time:</div>
          <div className={ResultCSS.playersResultTime}>{formatTime(time)}</div>
          <form onSubmit={handleSubmit} className={ResultCSS.playerForm}>
            <input
              type='text'
              placeholder='Enter name'
              maxLength={6}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={ResultCSS.inputName}
            />
            <button className={ResultCSS.submitNameButton}>Submit</button>
          </form>
          <Link
            to='/'
            className={ResultCSS.playersResultButton}
            onClick={() => restartGame()}
          >
            Restart Game
          </Link>
        </div>
      </div>
    </div>
  )
}
