import {connect} from 'react-redux';
import MainNav from './main_nav';

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.currentUser),
    chosenLocation: ""
});

export default connect(mapStateToProps)(MainNav);