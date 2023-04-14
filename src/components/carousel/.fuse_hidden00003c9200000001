import CarouselCardCSS from './carouselCard.module.css'

interface CartoonUniverseProps {
  cover: string
  waldo: string
  wilma: string
  thief: string
  wizard: string
}

export default function WaldoOnBeach({
  cover,
  waldo,
  wilma,
  thief,
  wizard,
}: CartoonUniverseProps) {
  return (
    <div className={CarouselCardCSS.cardContainer}>
      <div className={CarouselCardCSS.imageContainer}>
        <img src={cover} alt='Game' />
      </div>
      <div className={CarouselCardCSS.gameInfo}>
        <div className={CarouselCardCSS.gameInfoTitle}>Waldo On Snow</div>
        <div className={CarouselCardCSS.characterContainer}>
          <img
            className={CarouselCardCSS.characterImg}
            src={waldo}
            alt='Waldo'
          />
          <div className={CarouselCardCSS.characterInfo}>
            <div className={CarouselCardCSS.easy}>Easy:</div>
            <div>Waldo</div>
          </div>
        </div>
        <div className={CarouselCardCSS.characterContainer}>
          <img
            className={CarouselCardCSS.characterImg}
            src={wilma}
            alt='Wilma'
          />
          <div className={CarouselCardCSS.characterInfo}>
            <div className={CarouselCardCSS.medium}>Medium:</div>
            <div>Wilma</div>
          </div>
        </div>
        <div className={CarouselCardCSS.characterContainer}>
          <img
            className={CarouselCardCSS.characterImg}
            src={wizard}
            alt='Wizard'
          />
          <div className={CarouselCardCSS.characterInfo}>
            <div className={CarouselCardCSS.hard}>Hard:</div>
            <div>Wizard</div>
          </div>
        </div>
        <div className={CarouselCardCSS.characterContainer}>
          <img
            className={CarouselCardCSS.characterImg}
            src={thief}
            alt='Thief'
          />
          <div className={CarouselCardCSS.characterInfo}>
            <div className={CarouselCardCSS.veryHard}>Very Hard:</div>
            <div>Thief</div>
          </div>
        </div>
        <div>
          <button className={CarouselCardCSS.button}>Start</button>
        </div>
      </div>
    </div>
  )
}
