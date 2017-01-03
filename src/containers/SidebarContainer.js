import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';

const mapStateToProps = ({ sidebar }) => {
  return sidebar;
};

export default connect(mapStateToProps)(Sidebar);
