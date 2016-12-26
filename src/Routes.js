import React from 'react';
import {
  Route,
  Router,
  IndexRoute,
  hashHistory
} from 'react-router';

import Main from './components/Main';
import Home from './components/Home';

import MonotronContainer from './containers/MonotronContainer';

const Routes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="/synth" component={MonotronContainer} />
      <Route path="*" component={Home} />
    </Route>
  </Router>
);

export default Routes;
