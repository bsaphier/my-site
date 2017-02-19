import { combineReducers } from 'redux';

import resumeReducer from './resume-reducer';

export default combineReducers({
  resume: resumeReducer
});
