import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Login from '@login/components/login.jsx';
import mainTheme from '../../theme/index';

const Home = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <main>
        <Login></Login>
      </main>
    </ThemeProvider>
  )
};

export default Home;
