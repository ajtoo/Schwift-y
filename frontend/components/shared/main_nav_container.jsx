import {connect} from 'react-redux';
import MainNav from './main_nav';
import {getUserTestDrives} from '../../actions/test_drives_actions';

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.currentUser),
    user: state.session.currentUser,
    chosenLocation: window.location.hash,
    testDrives: state.testDrives
});

const mapDispatchToProps = dispatch => ({
    getUserTestDrives: (uid) => dispatch(getUserTestDrives(uid)),
    deleteTestDrive: (ids) => dispatch(deleteTestDrive(ids))
});

export default connect(mapStateToProps)(MainNav);