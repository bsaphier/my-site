import { combineReducers } from 'redux';

import sidebarReducer from './sidebar-reducer';
import particlesReducer from './particles-reducer';
import { reducer as burgerMenu } from 'redux-burger-menu';

const reducers = {
  burgerMenu,
  sidebarReducer,
  particlesReducer
};

export default combineReducers(reducers);
