import { style, params } from '../lib/particlesConfig';

const initialState = { style, params };


export default (state = initialState, action) => {
  const nextState = Object.assign({}, state);

  switch (action.type) {

    default:
      return nextState;

  }
};
