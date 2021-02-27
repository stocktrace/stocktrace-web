import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return ({
  root: {
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.secondary.dark
  }
})});

const Login = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();

  return (
    <form>
      <Button size="large" color="secondary" variant="contained">
        Click Me
      </Button>
      <Button size="large" variant="contained" className={classes.root}>
        Click Me
      </Button>
      <TextField
          required
          id="outlined-required"
          label="Account"
          variant="outlined"
        />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
      />
    </form>
  )
};

export default Login;
