import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { RRWAEngine } from 'react-redux-webaudio';

import store from './store';
import Main from './components/Main';


render(
  <Provider store={store}>
    <div>
      <RRWAEngine />
      <div id="background" />
      <main id="page-wrap" style={{ fontFamily: '"Roboto", sans-serif' }}>
        <Main />
      </main>
    </div>
  </Provider>,
  document.getElementById('app')
);
