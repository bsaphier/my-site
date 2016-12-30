import { style, params } from '../lib/particlesConfig';

const initialState = { style, params };


/* ~~~~~~~~ actions ~~~~~~~~ */
// const STROKE_WIDTH = 'STROKE_WIDTH';


/* ~~~~~~~~ reducer ~~~~~~~~ */
export default function(state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    default:
      return newState;

  }
}


/* ~~~~ action creators ~~~~ */
