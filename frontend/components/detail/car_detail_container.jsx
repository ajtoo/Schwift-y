import {connect} from 'react-redux';
import CarDetail from './car_detail';

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CarDetail);