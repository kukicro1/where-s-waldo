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
  return (
    <div className={FindingsInfoCSS.findings}>
      <ul className={FindingsInfoCSS.ul}>
        <li
          id={game?.names.easy}
          className={FindingsInfoCSS.li + ' ' + foundEasy}
        >
          <img
            className={FindingsInfoCSS.img}
            src={game?.images.easy}
            alt={game?.names.easy}
          />
          {game?.names.easy}
        </li>
        <li
          id={game?.names.medium}
          className={FindingsInfoCSS.li + ' ' + foundMedium}
        >
          <img
            className={FindingsInfoCSS.img}
            src={game?.images.medium}
            alt={game?.names.medium}
          />
          {game?.names.medium}
        </li>
        <li
          id={game?.names.hard}
          className={FindingsInfoCSS.li + ' ' + foundHard}
        >
          <img
            className={FindingsInfoCSS.img}
            src={game?.images.hard}
            alt={game?.names.hard}
          />
          {game?.names.hard}
        </li>
        <li
          id={game?.names.veryHard}
          className={FindingsInfoCSS.li + ' ' + foundVeryHard}
        >
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

// const [undiscoveredCharacters, setUndiscoveredCharacters] = useState<
//   (string | undefined)[]
// >([
//   game?.names.easy,
//   game?.names.medium,
//   game?.names.hard,
//   game?.names.veryHard,
// ])
// const [undiscoveredCharacters, setUndiscoveredCharacters] = useState<
//   (string | undefined)[]
// >([
//   game?.images.easy,
//   game?.images.medium,
//   game?.images.hard,
//   game?.images.veryHard,
// ])

/* {undiscoveredCharacters.map((character) => {
          return (
            <li key={character} className={FindingsInfoCSS.li}>
              <img
                className={FindingsInfoCSS.img}
                src={game?.images.character}
                alt={character}
              />
              {character}
            </li>
          )
        })} */

// import { useEffect, useState } from 'react'
// import FindingsInfoCSS from './FindingsInfo.module.css'
// import { GameProps } from './Navbar'

// interface ExtendedGameProps extends GameProps {
//   remainingCharactersStatus: boolean
// }

// export default function FindingsInfo({
//   game,
//   foundCharacters,
//   remainingCharactersStatus,
// }: ExtendedGameProps) {
//   const [foundCharactersState, setFoundCharactersState] = useState({
//     easy: '',
//     medium: '',
//     hard: '',
//     veryHard: '',
//   })

//   useEffect(() => {
//     if (remainingCharactersStatus) {
//       const foundCharactersMap = foundCharacters.reduce((acc, character) => {
//         if (game?.names[character]) {
//           acc[character] = FindingsInfoCSS.foundCharacters
//         }
//         return acc
//       }, {} as Record<string, string>)
//       setFoundCharactersState(foundCharactersMap)
//     }
//   }, [game?.names, foundCharacters, remainingCharactersStatus])

//   return (
//     <div className={FindingsInfoCSS.findings}>
//       <ul className={FindingsInfoCSS.ul}>
//         {Object.entries(game?.names).map(([key, name]) => (
//           <li
//             key={key}
//             id={name}
//             className={`${FindingsInfoCSS.li} ${foundCharactersState[key]}`}
//           >
//             <img
//               className={FindingsInfoCSS.img}
//               src={game?.images[key]}
//               alt={name}
//             />
//             {name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }
