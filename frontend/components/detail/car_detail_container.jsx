import {connect} from 'react-redux';
import {getCar} from '../../actions/car_actions';
import {createUserTestDrive} from '../../actions/test_drives_actions';
import CarDetail from './car_detail';

const mapStateToProps = state => ({
  session: state.session,
  car: state.car.curCar
});

const mapDispatchToProps = dispatch => ({
  getCar: (id) => dispatch(getCar(id)),
  create: (info) => dispatch(createUserTestDrive(info))
});

export default connect(mapStateToProps, mapDispatchToProps)(CarDetail);