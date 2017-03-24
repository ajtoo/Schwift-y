import {RECEIVE_TEST_DRIVES, RECEIVE_TEST_DRIVE, REMOVE_TEST_DRIVE} from '../actions/test_drives_actions';
import merge from 'lodash/merge';

const _nullTestDrives = Object.freeze({
  drives: [],
  cars: []
})
const TestDriveReducer = (state = _nullTestDrives, action) => {
  let newState = Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TEST_DRIVES:
      let cars = [];
      let drives = [];
      for(let i in action.drives) {
        drives.push(action.drives[i].info)
        cars.push(action.drives[i].car)
      }
      newState = merge({}, {drives, cars})
      return newState;
    case RECEIVE_TEST_DRIVE:
      newState.drives.push(action.testDrive.info);
      newState.cars.push(action.testDrive.car);
      return newState;
    case REMOVE_TEST_DRIVE:
      if(action.testDrive) {
        console.log("changing TDs state");
        let i = newState.drives.findIndex((el) => (action.testDrive.user_id === el.user_id && action.testDrive.car_id === el.car_id))
        newState.drives.splice(i, 1);
        newState.cars.splice(i, 1);
      }
      return newState;
    default:
      return newState;
  }
}

export default TestDriveReducer;