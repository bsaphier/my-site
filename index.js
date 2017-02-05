import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './src/store';
// import Routes from './src/Routes';


import Main from './src/components/Main';
import SectionWrapper from './src/components/SectionWrapper';
import ResumeContainer from './src/containers/ResumeContainer';

require('./src/stylesheets/main.scss');

ReactDOM.render(
  <Provider store={store}>
    <Main>
      <SectionWrapper>
        <ResumeContainer />
      </SectionWrapper>
    </Main>
  </Provider>,
  document.getElementById('app')
);
