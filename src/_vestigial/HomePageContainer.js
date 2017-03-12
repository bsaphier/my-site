import { connect } from 'react-redux';

import Home from '../components/Home';

const mapStateToProps = ({ homePage }) => {
  return { homePage };
};

export default connect(mapStateToProps)(Home);
