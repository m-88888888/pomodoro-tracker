import React from 'react';
import {
  Typography,
  AppBar,
  Toolbar,
  makeStyles,
  createStyles,
  CssBaseline,
} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar variant="regular">
          <Typography variant="h6" className={classes.title}>
            ポモドーロトラッカー
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
