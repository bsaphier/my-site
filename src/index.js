import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { RRWAEngine } from 'react-redux-webaudio';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import Main from './components/Main';
import rootReducer from './root-reducer';


let store = createStore( rootReducer, applyMiddleware(thunkMiddleware) );

render(
  <Provider store={store}>
    <div>
      <RRWAEngine />
      <Main />
    </div>
  </Provider>,
  document.getElementById('app')
);
