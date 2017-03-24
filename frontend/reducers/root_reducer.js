import {combineReducers} from 'redux';

import SessionsReducer from './session_reducer';
import SearchReducer from './search_reducer';
import CarReducer from './car_reducer';
import TestDrivesReducer from './test_drives_reducer';

const RootReducer = combineReducers({
  session: SessionsReducer,
  search: SearchReducer,
  car: CarReducer,
  testDrives: TestDrivesReducer
});

export default RootReducer;