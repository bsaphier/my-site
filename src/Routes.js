import React from 'react';
import {
  Route,
  Router,
  IndexRoute,
  browserHistory
} from 'react-router';

import Main from './components/Main';
import HomePage from './containers/HomePageContainer';
import SectionWrapper from './components/SectionWrapper';
import ResumeContainer from './containers/ResumeContainer';

// import MonotronContainer from './containers/MonotronContainer';


const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={HomePage} />
      <Route path="/resume" component={SectionWrapper}>
        <IndexRoute component={ResumeContainer} />
      </Route>
      <Route path="*" component={HomePage} />
      {/* <Route path="/synth" component={MonotronContainer} /> */}
    </Route>
  </Router>
);

export default Routes;
