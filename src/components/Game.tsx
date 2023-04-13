import GameCSS from './Game.module.css'
import cartoonUniverse from './game_photo/cartoon-universe.jpg'

export default function Game() {
  return (
    <div>
      <img className={GameCSS.image} src={cartoonUniverse} alt='' />
    </div>
  )
}
