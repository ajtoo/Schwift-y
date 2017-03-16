import {RECEIVE_CURRENT_USER, LOGOUT, RECEIVE_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  let newState = Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, _nullUser, {currentUser: action.user});
      console.log(action);
      return newState;
    case LOGOUT:
      newState = merge({}, _nullUser);
      return newState;
    case RECEIVE_ERRORS:
      newState = merge({}, _nullUser, {errors: action.errors});
      return newState;
    default:
      return newState;
  }
}

export default SessionReducer;