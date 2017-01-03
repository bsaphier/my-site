import { connect } from 'react-redux';

import Resume from '../components/Resume';

const mapStateToProps = ({ resume }) => {
  return { resume };
};

export default connect(mapStateToProps)(Resume);
