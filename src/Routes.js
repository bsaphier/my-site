import {
  Route,
  Router,
  IndexRoute,
  browserHistory
} from 'react-router';
import React from 'react';

import Main from './components/Main';
import SectionWrapper from './components/SectionWrapper';

import ResumeContainer from './containers/ResumeContainer';
// import HomePageContainer from './containers/HomePageContainer';
// import MonotronContainer from './containers/MonotronContainer';


const Routes = () => (
  <Router history={browserHistory}>
    {/* <Route path="/" component={Main}> */}
      {/* <IndexRoute component={HomePageContainer} /> */}
      {/* <IndexRoute component={SectionWrapper} /> */}
      <Route path="/" component={SectionWrapper}>
        <IndexRoute component={ResumeContainer} />
      </Route>
      {/* <Route path="/monotron" component={MonotronContainer} />
      <Route path="*" component={HomePageContainer} /> */}
    {/* </Route> */}
  </Router>
);

export default Routes;
