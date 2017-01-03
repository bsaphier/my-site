import { connect } from 'react-redux';

import NavBar from '../components/navbarComponents';

const mapStateToProps = ({ navbar }) => {
  return { navbar };
};

export default connect(mapStateToProps)(NavBar);
