import React, { useState } from 'react';
import { Divider } from '@material-ui/core';
import PomodoroTimer from './PomodoroTimer';
import Task from './Task';

export type TaskStateType = {
  task: string;
  days: number;
  hours: number;
  minutes: number;
};

const App: React.FC = () => {
  const [values, setValues] = useState<TaskStateType>({
    task: '',
    days: 0,
    hours: 0,
    minutes: 0,
  });
  const handleChange = (prop: string, event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <>
      <PomodoroTimer taskState={values} />
      <Divider />
      <Task handleChange={handleChange} />
    </>
  );
};

export default App;
