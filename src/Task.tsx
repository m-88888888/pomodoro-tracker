import React from 'react';
import { Grid, Theme, makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flexGrow: 1,
    margin: theme.spacing(5),
  },
  paper: {
    height: 140,
    width: 100,
  },
}));

type TaskProps = {
  handleTaskChange: (task: string) => void;
  handleHoursChange: (hours: number) => void;
  handleMinutesChange: (minutes: number) => void;
};

const Task: React.FC<TaskProps> = (props: TaskProps) => {
  const classes = useStyles();
  const { handleTaskChange, handleHoursChange, handleMinutesChange } = props;

  return (
    <>
      <Grid container justify="center">
        <Grid item>
          <TextField
            name="task"
            label="タスク"
            fullWidth
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleTaskChange(event.target.value);
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        justify="center"
        className={classes.container}
        spacing={2}>
        <Grid item>
          <TextField
            type="number"
            name="hours"
            label="時間"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleHoursChange(parseInt(event.target.value));
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            type="number"
            name="minutes"
            label="分"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleMinutesChange(parseInt(event.target.value));
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Task;
