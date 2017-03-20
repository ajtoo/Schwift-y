import {combineReducers} from 'redux';

import SessionsReducer from './session_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionsReducer,
  search: SearchReducer
});

export default RootReducer;