import { connect } from 'react-redux';
import ParticlesWrapper from '../components/ParticlesWrapper';

const mapStateToProps = ({ particles }) => {
  return particles;
};

export default connect(mapStateToProps)(ParticlesWrapper);
