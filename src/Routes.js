import {
  Route,
  Router,
  IndexRoute,
  browserHistory
} from 'react-router';
import React from 'react';

import SectionWrapper from './components/SectionWrapper';
import ResumeContainer from './containers/ResumeContainer';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/my-site" component={SectionWrapper}>
      <IndexRoute component={ResumeContainer} />
    </Route>
  </Router>
);

export default Routes;
