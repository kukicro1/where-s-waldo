import StartGameCSS from './StartGame.module.css'
import cover from './game_photo/cartoon-universe-cover.jpg'
import digimon from './game_photo/digimon.png'
import waldo from './game_photo/waldo.png'
import pokeball from './game_photo/pokeball.png'
import sonic from './game_photo/sonic.png'

export default function StartGame() {
  return (
    <div className={StartGameCSS.container}>
      <div className={StartGameCSS.carouselContainer}>
        <div className={StartGameCSS.imageContainer}>
          <img src={cover} alt='Game' />
        </div>
        <div className={StartGameCSS.gameInfo}>
          <div className={StartGameCSS.gameInfoTitle}>Cartoon Universe</div>
          <div className={StartGameCSS.characterContainer}>
            <img
              className={StartGameCSS.characterImg}
              src={digimon}
              alt='Digimon'
            />
            <div className={StartGameCSS.characterInfo}>
              <div className={StartGameCSS.easy}>Easy:</div>
              <div>Digimon</div>
            </div>
          </div>
          <div className={StartGameCSS.characterContainer}>
            <img
              className={StartGameCSS.characterImg}
              src={waldo}
              alt='Waldo'
            />
            <div className={StartGameCSS.characterInfo}>
              <div className={StartGameCSS.medium}>Medium:</div>
              <div>Waldo</div>
            </div>
          </div>
          <div className={StartGameCSS.characterContainer}>
            <img
              className={StartGameCSS.characterImg}
              src={pokeball}
              alt='Pokeball'
            />
            <div className={StartGameCSS.characterInfo}>
              <div className={StartGameCSS.hard}>Hard:</div>
              <div>Pokeball</div>
            </div>
          </div>
          <div className={StartGameCSS.characterContainer}>
            <img
              className={StartGameCSS.characterImg}
              src={sonic}
              alt='Sonic'
            />
            <div className={StartGameCSS.characterInfo}>
              <div className={StartGameCSS.veryHard}>Very Hard:</div>
              <div>Sonic</div>
            </div>
          </div>
          <div>
            <button>Start</button>
          </div>
        </div>
      </div>
    </div>
  )
}
