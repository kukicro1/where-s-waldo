import StartGameCSS from './StartGame.module.css'
import CartoonUniverse from './carousel/CartoonUniverse'
// import WaldoOnSnow from './carousel/WaldoOnSnow'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
// Images:
import cartoonUniverseCover from './game_photo/cartoon-universe-cover.jpg'
import waldoOnSnowCover from './game_photo/waldo_on_beach-cover.jpg'
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
  // const [currentIndex, setCurrentIndex] = useState(0)

  // const handleSlideChange = (index: number) => {
  //   setCurrentIndex(index)
  // }

  // const renderDots = () => {
  //   return games.map((game, index) => (
  //     <span
  //       key={index}
  //       className={`${StartGameCSS.dot} ${
  //         currentIndex === index ? StartGameCSS.active : ''
  //       }`}
  //       onClick={() => setCurrentIndex(index)}
  //     ></span>
  //   ))
  // }

  return (
    <div className={StartGameCSS.container}>
      <AliceCarousel
        items={games.map((game) => (
          <div key={game.cover}>
            <div>
              <CartoonUniverse
                cover={game.cover}
                images={game.images}
                alternative={game.alt}
              />
            </div>
          </div>
        ))}
        infinite
        autoPlay={true}
        autoPlayInterval={3000}
        // autoPlayInterval={1}
        mouseTracking
        // disableButtonsControls={true as boolean}
        // disableDotsControls={false as boolean}
      />
      {/* <div className={StartGameCSS.carouselContainer}>{renderComponent()}</div> */}
      {/* <div className={StartGameCSS.buttonContainer}>
        <button
          className={StartGameCSS.button}
          onClick={() => handleSlideChange(currentIndex)}
        >
          {'<'}
        </button>
        <button
          className={StartGameCSS.button}
          onClick={() => handleSlideChange(currentIndex)}
        >
          {'>'}
        </button>
      </div> */}
      {/* <div className={StartGameCSS.dots}>{renderDots()}</div> */}
    </div>
  )
}
