import {combineReducers} from 'redux';

import SessionsReducer from './session_reducer';
import SearchReducer from './search_reducer';
import CarReducer from './car_reducer';

const RootReducer = combineReducers({
  session: SessionsReducer,
  search: SearchReducer,
  car: CarReducer
});

export default RootReducer;