import {
  RECEIVE_CARS, 
  REMOVE_FILTERS,
  RECEIVE_MILE_LIMIT, 
  RECEIVE_PRICE_LIMIT,
  RECEIVE_BODY_STYLE,
  RECEIVE_MAKE,
  RECEIVE_TRANSMISSION,
  RECEIVE_DRIVETRAIN
      } from '../actions/search_actions';
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
      newState.foundCars = action.cars;
      return newState;
    case REMOVE_FILTERS:
      if(action.target === "all") {
        newState = merge({}, _nullSearch, {foundCars: newState.foundCars});
      }
      return newState;
    case RECEIVE_PRICE_LIMIT:
      newState = merge({}, newState, {maxPrice: Number(action.limit) * 1000});
      return newState;
    case RECEIVE_MILE_LIMIT:
      newState = merge({}, newState, {maxMiles: Number(action.limit) * 1000});
      return newState;
    case RECEIVE_BODY_STYLE:
      if(!stateHasValue(newState.body, action.body)) {
        newState = merge({}, newState, {body: [].concat(newState.body, [action.body])});
      }
      return newState;
    case RECEIVE_MAKE:
      if(!stateHasValue(newState.make, action.make)) {
        newState = merge({}, newState, {make: [].concat(newState.make, [action.make])});
      }
      return newState;
    case RECEIVE_TRANSMISSION:
      if(!stateHasValue(newState.transmission, action.transmission)) {
        newState = merge({}, newState, {transmission: [].concat(newState.transmission, [action.transmission])});
      }
      return newState;
    case RECEIVE_DRIVETRAIN:
      if(!stateHasValue(newState.drivetrain, action.drivetrain)) {
        newState = merge({}, newState, {drivetrain: [].concat(newState.drivetrain, [action.drivetrain])});
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