import { Link } from 'react-router-dom'
import CarouselCardCSS from './carouselCard.module.css'

interface CarouselCardProps {
  game: {
    cover: string
    images: {
      [key: string]: string
    }
    names: {
      [key: string]: string
    }
  }
  startGame: Function
}

export default function CarouselCard({ game, startGame }: CarouselCardProps) {
  return (
    <div className={CarouselCardCSS.cardContainer}>
      <div className={CarouselCardCSS.imageContainer}>
        <img src={game.cover} alt='Game' />
      </div>
      <div className={CarouselCardCSS.gameInfo}>
        <div className={CarouselCardCSS.gameInfoTitle}>Cartoon Universe</div>
        <div className={CarouselCardCSS.characterContainer}>
          <img
            className={CarouselCardCSS.characterImg}
            src={game.images.easy}
            alt={game.names.easy}
          />
          <div className={CarouselCardCSS.characterInfo}>
            <div className={CarouselCardCSS.easy}>Easy:</div>
            <div>{game.names.easy}</div>
          </div>
        </div>
        <div className={CarouselCardCSS.characterContainer}>
          <img
            className={CarouselCardCSS.characterImg}
            src={game.images.medium}
            alt={game.names.medium}
          />
          <div className={CarouselCardCSS.characterInfo}>
            <div className={CarouselCardCSS.medium}>Medium:</div>
            <div>{game.names.medium}</div>
          </div>
        </div>
        <div className={CarouselCardCSS.characterContainer}>
          <img
            className={CarouselCardCSS.characterImg}
            src={game.images.hard}
            alt={game.names.hard}
          />
          <div className={CarouselCardCSS.characterInfo}>
            <div className={CarouselCardCSS.hard}>Hard:</div>
            <div>{game.names.hard}</div>
          </div>
        </div>
        <div className={CarouselCardCSS.characterContainer}>
          <img
            className={CarouselCardCSS.characterImg}
            src={game.images.veryHard}
            alt={game.names.veryHard}
          />
          <div className={CarouselCardCSS.characterInfo}>
            <div className={CarouselCardCSS.veryHard}>Very Hard:</div>
            <div>{game.names.veryHard}</div>
          </div>
        </div>
        <div>
          <Link to='/game' onClick={() => startGame(game.cover, game)}>
            <button className={CarouselCardCSS.button}>Start</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
