import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

export default createStore(
  reducers,
  applyMiddleware(createLogger())
);
