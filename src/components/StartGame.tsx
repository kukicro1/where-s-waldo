import StartGameCSS from './StartGame.module.css'
import CarouselCard from './carousel/CarouselCard'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

interface StartGameProps {
  games: {
    cover: string
    images: {
      [key: string]: string
    }
    names: {
      [key: string]: string
    }
  }[]
  setGame: Function
}

export default function StartGame({
  games,
  setGame,
}: StartGameProps): JSX.Element {
  return (
    <div className={StartGameCSS.container}>
      <AliceCarousel
        items={games.map((game) => (
          <div key={game.cover} className={StartGameCSS.carouselContainer}>
            <div>
              <CarouselCard
                game={game}
                setGame={setGame}
                // cover={game.cover}
                // images={game.images}
                // alternative={game.alt}
                // setCover={setCover}
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
