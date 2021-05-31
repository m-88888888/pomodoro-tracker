import React, { useState, useEffect } from 'react';
import {
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Container,
} from '@material-ui/core';
import lightBlue from '@material-ui/core/colors/lightBlue';
import StatusMessage from './StatusMessage';

const WORKING_TIME = 1500;
const BREAK_TIME = 300;
const useStyles = makeStyles(() => ({
  card: {
    backgroundColor: lightBlue[500],
  },
}));

const padTime = (time: number) => {
  return String(time).length === 1 ? `0${time}` : `${time}`;
};
const format = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${padTime(seconds)}`;
};

const audio = new Audio('http://www.kurage-kosho.info/mp3/button83.mp3');

type PomodoroTimerProps = {
  task: string;
  handleWorkingTime: () => void;
};

const PomodoroTimer: React.FC<PomodoroTimerProps> = (
  props: PomodoroTimerProps
) => {
  const { task, handleWorkingTime } = props;
  const classes = useStyles();
  const [counter, setCounter] = useState<number>(WORKING_TIME);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | number>(0);
  const [session, setSession] = useState<boolean>(false); // ボタン管理用
  const [working, setWorking] = useState<boolean>(true); // 作業中

  useEffect(() => {
    if (counter === 0) {
      clearInterval(timerId as number);
      audio.play();
      working ? setCounter(BREAK_TIME) : setCounter(WORKING_TIME);
      setTimerId(
        setInterval(() => {
          setCounter((c) => c - 1);
        }, 1000)
      );
      setWorking((w) => !w);
      handleWorkingTime();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter, timerId, working]);

  const start = () => {
    setTimerId(
      setInterval(() => {
        setCounter((c) => c - 1);
      }, 1000)
    );
    setSession(true);
  };
  const stop = () => {
    clearInterval(timerId as number);
    setSession(false);
  };
  const reset = () => {
    clearInterval(timerId as number);
    setCounter(WORKING_TIME);
    setSession(false);
    setWorking(true);
  };

  return (
    <>
      <Container maxWidth="sm">
        <Card className={classes.card}>
          <CardContent>
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
              spacing={2}>
              <Grid item xs={12}>
                <StatusMessage working={working} session={session} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h1">{format(counter)}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5">{task}</Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center" justify="center" spacing={2}>
              <Grid item>
                {session ? (
                  <Button onClick={stop} variant="contained" color="secondary">
                    Stop
                  </Button>
                ) : (
                  <Button onClick={start} variant="contained" color="primary">
                    Start
                  </Button>
                )}
              </Grid>
              <Grid item>
                <Button onClick={reset}>Reset</Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default React.memo(PomodoroTimer);
