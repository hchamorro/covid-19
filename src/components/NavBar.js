import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, styled } from '@material-ui/core/styles';
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

const MyButton = styled(Button)({
  color: 'white',
});

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            COVID-19
          </Typography>
          <Link to={`/covid-19/`}>
            <MyButton color="inherit">Home</MyButton>
          </Link>
          <Link to={`/states`}>
            <MyButton color="inherit">States Statistics</MyButton>
          </Link>
          {/* <Button color="inherit">Recources</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
