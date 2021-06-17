import { useState, useEffect, useRef, useCallback } from 'react';

const WORKING_TIME = 1500,
  BREAK_TIME = 300;

const useTimer = (
  audio: HTMLAudioElement,
  handleWorkingTime: () => void
): [boolean, boolean, number, () => void, () => void, () => void] => {
  const [counter, setCounter] = useState<number>(WORKING_TIME);
  const [session, setSession] = useState<boolean>(false); // ボタン管理用
  const [working, setWorking] = useState<boolean>(true); // 作業中
  const timerId = useRef<NodeJS.Timeout>();
  const tick = (): void => setCounter((prevTime) => prevTime - 1);
  const clearTimer = () => {
    if (timerId.current) clearInterval(timerId.current);
  };

  useEffect(() => {
    if (counter === 0) {
      clearTimer();
      audio.play();
      working ? setCounter(BREAK_TIME) : setCounter(WORKING_TIME);
      timerId.current = setInterval(tick, 1000);
      setWorking((w) => !w);
      handleWorkingTime();
    }
  }, [counter, timerId, working, audio, handleWorkingTime]);

  const start = useCallback(() => {
    timerId.current = setInterval(tick, 1000);
    setSession(true);
  }, []);
  const stop = useCallback(() => {
    clearTimer();
    setSession(false);
  }, []);
  const reset = useCallback(() => {
    clearTimer();
    setCounter(WORKING_TIME);
    setSession(false);
    setWorking(true);
  }, []);

  return [working, session, counter, start, stop, reset];
};

export default useTimer;
