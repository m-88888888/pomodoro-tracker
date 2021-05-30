import React, { useState } from 'react';
import { Divider } from '@material-ui/core';
import PomodoroTimer from './PomodoroTimer';
import Task from './Task';
import TimeChart from './TimeChart';

const App: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [workingTime, setWorkingTime] = useState<number>(0);

  return (
    <>
      <PomodoroTimer
        task={task}
        handleWorkingTime={() => setWorkingTime((value) => value + 25 / 60)}
      />
      <Divider />
      <Task
        handleTaskChange={setTask}
        handleHoursChange={setHours}
        handleMinutesChange={setMinutes}
      />
      <TimeChart hours={hours} minutes={minutes} workingTime={workingTime} />
    </>
  );
};

export default App;
