import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes/Routes';
import ScrollToTop from './components/Scroll-to-top/Scroll-to-top';

import './style.scss';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes />
    </Router>
  );
}

export default App;
