import {connect} from 'react-redux';
import MainNav from './main_nav';

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.currentUser),
});

export default connect(mapStateToProps)(MainNav);