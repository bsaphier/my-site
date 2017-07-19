import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { RRWAEngine } from 'react-redux-webaudio';

import store from './store';
import Routes from './Routes';


render(
  <Provider store={store}>
    <div>
      <RRWAEngine />
      <Routes />
    </div>
  </Provider>,
  document.getElementById('app')
);
