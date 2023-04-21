import { useState, useEffect, useRef } from 'react'

interface TimerProps {
  isRunning: boolean
}

export default function Timer({ isRunning }: TimerProps) {
  const [time, setTime] = useState<number>(0)
  const intervalId = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
      }, 1000)
      intervalId.current = id
    } else {
      if (intervalId.current) clearInterval(intervalId.current)
    }

    return () => {
      if (intervalId.current) clearInterval(intervalId.current)
    }
  }, [isRunning, intervalId])

  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div>
      <div>{formatTime(time)}</div>
    </div>
  )
}
