import { connect } from 'react-redux';

import { changeParticleSize } from '../actions';
import ParticlesWrapper from '../components/ParticlesWrapper';

const mapStateToProps = ({ particles }) => {
  return { particles };
};

// not in use
const mapDispatchToProps = (dispatch) => {
  return {
    changeParticleSize: (value) => dispatch(changeParticleSize(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ParticlesWrapper);
