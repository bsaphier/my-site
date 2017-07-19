import { combineReducers } from 'redux';
import { webAudioReducer } from 'react-redux-webaudio';

import resumeReducer from './resume-reducer';

export default combineReducers({
  webAudioReducer,
  resume: resumeReducer
});
