import React from 'react';
import { connect } from 'react-redux';

import ParticlesWrapper from './ParticlesWrapper';

const Home = ({ style, params }) => {
  return (
    <div>
      <ParticlesWrapper
        style={style}
        params={params}
      />
      <span>
        <h1>Home</h1>
      </span>
    </div>
  );
};

const mapState = state => {
  return state.particlesReducer;
};

export default connect(
  mapState
)(Home);
