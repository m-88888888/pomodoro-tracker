import React, { useState, useEffect, useRef } from 'react';
import { Typography, Button } from '@material-ui/core';
import ReactHowler from 'react-howler';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const padTime = (time: number) => {
  return String(time).length === 1 ? `0${time}` : `${time}`;
};
const format = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${padTime(seconds)}`;
};

const PomodoroTimer: React.FC = () => {
  // const [counter, setCounter] = useState(1500);
  const [counter, setCounter] = useState(3);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | number>(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (counter === 0) {
      clearInterval(timerId as number);
      setPlaying((prevState) => !prevState);
    }
  }, [counter, timerId]);

  const start = () => {
    setTimerId(
      setInterval(() => {
        setCounter((c) => c - 1);
      }, 1000)
    );
  };
  const stop = () => {
    clearInterval(timerId as number);
  };
  const reset = () => {
    // setCounter(1500);
    setCounter(3);
    clearInterval(timerId as number);
  };

  return (
    <>
      <Typography variant="h1">{format(counter)}</Typography>
      <Button onClick={start} variant="contained" color="primary">
        Start
      </Button>
      <Button onClick={stop} variant="contained" color="secondary">
        Stop
      </Button>
      <Button onClick={reset}>Reset</Button>
      <ReactHowler
        src="http://www.kurage-kosho.info/mp3/button83.mp3"
        playing={playing}
        volume={0.5}
      />
      {playing ? (
        <PauseCircleOutlineIcon onClick={() => setPlaying((state) => !state)} />
      ) : (
        <PlayCircleOutlineIcon onClick={() => setPlaying((state) => !state)} />
      )}
    </>
  );
};

export default PomodoroTimer;
