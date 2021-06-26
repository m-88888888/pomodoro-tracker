import React, { useState, useCallback } from 'react';
import {
  ThemeProvider,
  createMuiTheme,
  colors,
} from '@material-ui/core';
import PomodoroTimer from './PomodoroTimer';
import Task from './Task';
import TimeChart from './TimeChart';
import Header from './Header';

const theme = createMuiTheme({
  palette: {
    primary: { main: colors.orange[500] },
  },
});

const App: React.FC = () => {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [workingTime, setWorkingTime] = useState<number>(0);

  const handleWorkingTime = useCallback(() => {
    setWorkingTime((value) => value + 25 / 60);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <PomodoroTimer handleWorkingTime={handleWorkingTime} />
        <Task handleHoursChange={setHours} handleMinutesChange={setMinutes} />
        <TimeChart hours={hours} minutes={minutes} workingTime={workingTime} />
      </ThemeProvider>
    </>
  );
};

export default App;
