import React from 'react';
import { Router } from '@reach/router';

import './sass/main.scss';

import { Home } from './pages/Home';
import { WebPlayerPage } from './pages/WebPlayer';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <WebPlayerPage path="/webplayer" />
      </Router>
    </div>
  );
}

export default App;
