import {
  Route,
  Router,
  IndexRoute,
  IndexRedirect,
  browserHistory
} from 'react-router';
import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';


import Main from './components/Main';
import SectionWrapper from './components/SectionWrapper';
import ResumeContainer from './containers/ResumeContainer';

injectTapEventPlugin();
require('./stylesheets/main.scss');

const Routes = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRedirect to="/my-site" />
        <Route path="my-site" component={SectionWrapper}>
          <IndexRoute component={ResumeContainer} />
        </Route>
      </Route>
    </Router>
  </MuiThemeProvider>
);

export default Routes;
