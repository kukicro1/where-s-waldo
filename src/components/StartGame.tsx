import StartGameCSS from './StartGame.module.css'
import CarouselCard from './carousel/CarouselCard'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
// Images:
import cartoonUniverseCover from './game_photo/cartoon-universe-cover.jpg'
import waldoOnSnowCover from './game_photo/waldo_on_snow-cover.jpg'
import digimon from './game_photo/digimon.png'
import waldo from './game_photo/waldo.png'
import pokeball from './game_photo/pokeball.png'
import sonic from './game_photo/sonic.png'
import wilma from './game_photo/wilma.png'
import thief from './game_photo/thief.png'
import wizard from './game_photo/wizard.png'

interface GameProps {
  cover: string
  images: {
    [key: string]: string
  }
  alt: {
    [key: string]: string
  }
}

const games: GameProps[] = [
  {
    cover: cartoonUniverseCover,
    images: {
      easy: digimon,
      medium: waldo,
      hard: pokeball,
      veryHard: sonic,
    },
    alt: {
      easy: 'Digimon',
      medium: 'Waldo',
      hard: 'Pokeball',
      veryHard: 'Sonic',
    },
  },
  {
    cover: waldoOnSnowCover,
    images: {
      easy: waldo,
      medium: wilma,
      hard: thief,
      veryHard: wizard,
    },
    alt: {
      easy: 'Waldo',
      medium: 'Wilma',
      hard: 'Thief',
      veryHard: 'Wizard',
    },
  },
]

export default function StartGame(): JSX.Element {
  return (
    <div className={StartGameCSS.container}>
      <AliceCarousel
        items={games.map((game) => (
          <div key={game.cover} className={StartGameCSS.carouselContainer}>
            <div>
              <CarouselCard
                cover={game.cover}
                images={game.images}
                alternative={game.alt}
              />
            </div>
          </div>
        ))}
        infinite
        autoPlay={true}
        autoPlayInterval={4000}
        mouseTracking
        disableButtonsControls={true}
      />
    </div>
  )
}
