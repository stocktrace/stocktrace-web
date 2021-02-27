import React from 'react';
import ReactDom from 'react-dom';
import { Router } from "@reach/router";

import Home from '@home/components/Home.jsx';
import './styles/main.scss';

function Root() {
  return (
    <div>
      <Router>
        <Home path='/' />
      </Router>
    </div>
  );
}

ReactDom.render(<Root />, document.getElementById('root'));
