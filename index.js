import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './src/store';
import Routes from './src/Routes';

require('./src/stylesheets/main.scss');

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);
