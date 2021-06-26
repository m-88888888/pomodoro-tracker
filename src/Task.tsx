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
  handleHoursChange: (hours: number) => void;
  handleMinutesChange: (minutes: number) => void;
};

const Task: React.FC<TaskProps> = (props: TaskProps) => {
  const classes = useStyles();
  const { handleHoursChange, handleMinutesChange } = props;

  return (
    <>
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
