import React from 'react';

const PomodoroTimer: React.FC = () => {
  const [time, setTime] = React.useState<number>(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => t + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <h1>{time}</h1>
  )
}

export default PomodoroTimer;
