import { Link } from 'react-router-dom'
import CarouselCardCSS from './carouselCard.module.css'
import Game from '../Game'

interface CarouselCardProps {
  cover: string
  images: {
    [key: string]: string
  }
  alternative: {
    [key: string]: string
  }
}

export default function CarouselCard({
  cover,
  images,
  alternative,
}: CarouselCardProps) {
  return (
    <div className={CarouselCardCSS.cardContainer}>
      <div className={CarouselCardCSS.imageContainer}>
        <img src={cover} alt='Game' />
      </div>
      <div className={CarouselCardCSS.gameInfo}>
        <div className={CarouselCardCSS.gameInfoTitle}>Cartoon Universe</div>
        <div className={CarouselCardCSS.characterContainer}>
          <img
            className={CarouselCardCSS.characterImg}
            src={images.easy}
            alt={alternative.easy}
          />
          <div className={CarouselCardCSS.characterInfo}>
            <div className={CarouselCardCSS.easy}>Easy:</div>
            <div>{alternative.easy}</div>
          </div>
        </div>
        <div className={CarouselCardCSS.characterContainer}>
          <img
            className={CarouselCardCSS.characterImg}
            src={images.medium}
            alt={alternative.medium}
          />
          <div className={CarouselCardCSS.characterInfo}>
            <div className={CarouselCardCSS.medium}>Medium:</div>
            <div>{alternative.medium}</div>
          </div>
        </div>
        <div className={CarouselCardCSS.characterContainer}>
          <img
            className={CarouselCardCSS.characterImg}
            src={images.hard}
            alt={alternative.hard}
          />
          <div className={CarouselCardCSS.characterInfo}>
            <div className={CarouselCardCSS.hard}>Hard:</div>
            <div>{alternative.hard}</div>
          </div>
        </div>
        <div className={CarouselCardCSS.characterContainer}>
          <img
            className={CarouselCardCSS.characterImg}
            src={images.veryHard}
            alt={alternative.veryHard}
          />
          <div className={CarouselCardCSS.characterInfo}>
            <div className={CarouselCardCSS.veryHard}>Very Hard:</div>
            <div>{alternative.veryHard}</div>
          </div>
        </div>
        <div>
          <Link to='/game'>
            <button className={CarouselCardCSS.button}>Start</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
