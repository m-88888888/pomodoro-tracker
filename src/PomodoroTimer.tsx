import React from 'react';
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
import useTimer from './hooks/useTimer';

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
  const [working, session, counter, start, stop, reset] = useTimer(
    audio,
    handleWorkingTime
  );

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
