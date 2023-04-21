import FindingsInfoCSS from './FindingsInfo.module.css'

interface ExtendedGameProps {
  game:
    | {
        cover: string
        images: {
          [key: string]: string
        }
        names: {
          [key: string]: string
        }
      }
    | undefined
  foundEasy: string
  foundMedium: string
  foundHard: string
  foundVeryHard: string
}

export default function FindingsInfo({
  game,
  foundEasy,
  foundMedium,
  foundHard,
  foundVeryHard,
}: ExtendedGameProps) {
  const difficultyLevels = [
    { difficulty: 'easy', found: foundEasy },
    { difficulty: 'medium', found: foundMedium },
    { difficulty: 'hard', found: foundHard },
    { difficulty: 'veryHard', found: foundVeryHard },
  ]

  return (
    <div className={FindingsInfoCSS.findings}>
      <ul className={FindingsInfoCSS.ul}>
        {difficultyLevels.map((level) => (
          <li
            key={level.difficulty}
            className={FindingsInfoCSS.li + ' ' + level.found}
          >
            <img
              className={FindingsInfoCSS.img}
              src={game?.images[level.difficulty]}
              alt={game?.names[level.difficulty]}
            />
            {game?.names[level.difficulty]}
          </li>
        ))}
      </ul>
    </div>
  )
}
