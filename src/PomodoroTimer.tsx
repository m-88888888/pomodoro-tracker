import React from 'react';
import { Button } from '@material-ui/core';

const PomodoroTimer: React.FC = () => {
  const [time, setTime] = React.useState<number>(0);
  const intervalRef = React.useRef<any>(null);
  const start = () => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
  };
  const stop = () => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  const reset = () => setTime(0);
  return (
    <>
      <h1>{time}</h1>
      <Button onClick={start} variant="contained" color="primary">
        Start
      </Button>
      <Button onClick={stop} variant="contained" color="secondary">
        Stop
      </Button>
      <Button onClick={reset} variant="contained">
        Reset
      </Button>
    </>
  );
};

export default PomodoroTimer;
