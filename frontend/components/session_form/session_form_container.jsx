import {connect} from 'react-redux';
import {login, logout, signup} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return({

  });
};

const mapDispatchToProps = dispatch => {
  return({
    
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);