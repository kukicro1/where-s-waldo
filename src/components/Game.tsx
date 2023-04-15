import GameCSS from './Game.module.css'

interface GameProps {
  gameImage: string | undefined
}

export default function Game({ gameImage }: GameProps) {
  return (
    <div>
      <img className={GameCSS.image} src={gameImage} alt='' />
    </div>
  )
}
