import {connect} from 'react-redux';
import {login, logout, signup} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => {

};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);