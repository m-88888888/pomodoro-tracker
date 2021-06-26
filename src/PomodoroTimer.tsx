import React from 'react';
import {
  Typography,
  Button,
  Grid,
  makeStyles,
  Container,
} from '@material-ui/core';
import lightBlue from '@material-ui/core/colors/lightBlue';
import StatusMessage from './StatusMessage';
import useTimer from './hooks/useTimer';

const useStyles = makeStyles(() => ({
  card: {
    backgroundColor: lightBlue[500],
  },
  button: {
    marginTop: 10
  }
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
  handleWorkingTime: () => void;
};

const PomodoroTimer: React.FC<PomodoroTimerProps> = (
  props: PomodoroTimerProps
) => {
  const { handleWorkingTime } = props;
  const classes = useStyles();
  const [working, session, counter, start, stop, reset] = useTimer(
    audio,
    handleWorkingTime
  );

  return (
    <>
      <Container maxWidth="sm">
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h1">{format(counter)}</Typography>
          </Grid>
          <Grid item xs={12}>
            <StatusMessage working={working} session={session} />
          </Grid>
        </Grid>
        <Grid container alignItems="center" justify="center" spacing={2} className={classes.button}>
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
      </Container>
    </>
  );
};

export default React.memo(PomodoroTimer);
