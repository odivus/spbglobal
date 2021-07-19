import React from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';

import Main from '../Main/Main';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Forinvestors from '../Forinvestors/Forinvestors';
import Forstartups from '../Forstartups/Forstartups';
import Contacts from '../Contacts/Contacts';

function Routes() {
  return (
    <Switch>
      <Route exact strict path='/'>
        <Main />
      </Route>
      <Route exact strict path='/about'>
        <About />
      </Route>
      <Route exact strict path='/portfolio'>
        <Portfolio />
      </Route>
      <Route exact strict path='/forinvestors'>
        <Forinvestors />
      </Route>
      <Route exact strict path='/forstartups'>
        <Forstartups />
      </Route>
      <Route exact strict path='/contacts'>
        <Contacts />
      </Route>
      <Redirect to='/' />
    </Switch>
  );
}

export default Routes;
