import {RECEIVE_CAR} from '../actions/car_actions';
import merge from 'lodash/merge';

const _nullCar = Object.freeze({
  curCar: {},
});

const CarReducer = (state = _nullCar, action) => {
  let newState = Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CAR:
      newState = merge({}, _nullCar, {curCar: action.car});
      return newState;
    default:
      return newState;
  }
}

export default CarReducer;