import { memo } from 'react'

interface TimerProps {
  formatTime: Function
  time: number
}

function Timer({ formatTime, time }: TimerProps) {
  return (
    <div>
      <div>{formatTime(time)}</div>
    </div>
  )
}

export default memo(Timer)
