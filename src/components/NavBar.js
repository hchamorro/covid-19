import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            COVID-19
          </Typography>
          <Link to={`/`}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to={`/states`}>
            <Button color="inherit">States Statistics</Button>
          </Link>
          {/* <Button color="inherit">Recources</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
