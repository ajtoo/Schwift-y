import {connect} from 'react-redux';
import MainNav from './main_nav';

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.currentUser),
    user: state.session.currentUser,
    chosenLocation: window.location.hash
});

export default connect(mapStateToProps)(MainNav);