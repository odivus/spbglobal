import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes/Routes';

import './style.scss';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
