import {RECEIVE_CARS, 
        RECEIVE_MILE_LIMIT, 
        RECEIVE_PRICE_LIMIT} from '../actions/search_actions';
import merge from 'lodash/merge';

const _nullSearch = Object.freeze({
  body: [],
  make: [],
  transmission: [],
  drivetrain: [],
  maxPrice: 2147483647,   //maxPrice and maxMiles default to MAX_INT
  maxMiles: 2147483647,
  foundCars: []
});

const SearchReducer = (state = _nullSearch, action) => {
  let newState = Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CARS:
      newState = merge({}, newState, {foundCars: action.cars});
      return newState;
    case RECEIVE_PRICE_LIMIT:
      newState = merge({}, newState, {maxPrice: Number(action.limit) * 1000});
      return newState;
    case RECEIVE_MILE_LIMIT:
      newState = merge({}, newState, {maxMiles: Number(action.limit) * 1000});
      return newState;
    case RECEIVE_BODY_STYLE:
      if(!stateHasValue(newState.make, action.body)) {
        newState = merge({}, newState, {body: [].concat(newState.make, [action.body])});
      }
      return newState;
    default:
    return newState;
  }
}

const stateHasValue = (arrFromState, value) => {
  for(let i in arrFromState) {
    if(arrFromState[i].toUpperCase() === value.toUpperCase()) {
      return true;
    }
  }
  return false;
}

export default SearchReducer;