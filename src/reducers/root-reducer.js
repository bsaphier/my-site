import { combineReducers } from 'redux';
import { reducer as burgerMenu } from 'redux-burger-menu';

import sidebarReducer from './sidebar-reducer';
import particlesReducer from './particles-reducer';

export default combineReducers({
  burgerMenu,
  sidebar: sidebarReducer,
  particles: particlesReducer
});
