import initialState from '../lib/particlesConfig';

export default (state = initialState, action) => {
  const nextState = Object.assign({}, state);

  switch (action.type) {

    case 'CHANGE_PARTICLE_SIZE':
      nextState.params.particles.size.value = action.value;
      return nextState;

    default:
      return nextState;

  }
};
