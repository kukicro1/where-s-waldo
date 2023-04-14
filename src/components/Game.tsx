import GameCSS from './Game.module.css'
import cartoonUniverse from './game_photo/cartoon-universe.jpg'
import waldoOnSnow from './game_photo/waldo_on_snow.jpg'

export default function Game() {
  return (
    <div>
      <img className={GameCSS.image} src={waldoOnSnow} alt='' />
    </div>
  )
}
