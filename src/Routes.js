import React from 'react';
import {
  Route,
  Router,
  IndexRoute,
  browserHistory
} from 'react-router';

import Main from './components/Main';
import Home from './components/Home';
import Resume from './components/Resume';

// import MonotronContainer from './containers/MonotronContainer';


const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="*" component={Home} />
      {/* <Route path="/synth" component={MonotronContainer} /> */}
    </Route>
  </Router>
);

export default Routes;
