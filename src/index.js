import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';

// import store from './store';
// import Routes from './Routes';

require('./stylesheets/main.scss');

ReactDOM.render(
  <div>
    <h6 className="wavy--shit">webpack is bundling everything as expected</h6>
  </div>,
  document.getElementById('app')
);

//<Provider store={store}>
//  <Routes />
//</Provider>,
