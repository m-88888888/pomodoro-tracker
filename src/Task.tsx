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
  handleChange: (prop: string, event: any) => void;
};

const Task: React.FC<TaskProps> = (props: TaskProps) => {
  const classes = useStyles();
  const { handleChange } = props;

  return (
    <>
      <Grid container justify="center">
        <Grid item>
          <TextField
            name="task"
            label="タスク"
            onChange={(event: any) => {
              handleChange('task', event);
            }}
            fullWidth
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
            name="days"
            label="日数"
            onChange={(event: any) => {
              handleChange('days', event);
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            name="hours"
            label="時間"
            onChange={(event: any) => {
              handleChange('hours', event);
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            name="minutes"
            label="分"
            onChange={(event: any) => {
              handleChange('minutes', event);
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Task;
