import {connect} from 'react-redux';
import {login, logout, signup} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return{
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  };
};

const mapDispatchToProps = dispatch => {
  return{
    loginAction: user => dispatch(login(user)),
    signupAction: user => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);