import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './AppBar.styles';
import CssBaseline from '@material-ui/core/CssBaseline';

export interface AppBarContainer {
  children?: React.ReactChildren | React.ReactElement | React.ReactNode;
}

const NavBar: React.FC<AppBarContainer> = ({children}: AppBarContainer) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            NHVR
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default NavBar;
