import * as SearchApi from '../util/search_api_util';

export const RECEIVE_CARS = "RECEIVE_CARS";
export const REMOVE_FILTERS = "REMOVE_FILTERS";
export const RECEIVE_PRICE_LIMIT = "RECEIVE_PRICE_LIMIT";
export const RECEIVE_MILE_LIMIT = "RECEIVE_MILE_LIMIT";
export const RECEIVE_BODY_STYLE = "RECEIVE_BODY_STYLE";
export const RECEIVE_MAKE = "RECEIVE_MAKE";
export const RECEIVE_TRANSMISSION = "RECEIVE_TRANSMISSION";
export const RECEIVE_DRIVETRAIN = "RECEIVE_DRIVETRAIN";

export const getAllCars = () => dispatch => (
  SearchApi.getAllCars().then(cars => dispatch(receiveAllCars(cars)))
);

export const clearFilters = () => dispatch => (
  dispatch(removeFilters("all"))
);

export const search = (state, location) => dispatch => (
  SearchApi.search(state, location).then(cars => dispatch(receiveAllCars(cars)))
);

export const addPriceLimit = (limit) => dispatch => (
  dispatch(receivePriceLimit(limit))
);

export const addMileLimit = (limit) => dispatch => (
  dispatch(receiveMileLimit(limit))
);

export const addBodyStyle = style => dispatch => (
  dispatch(receiveBodyStyle(style))
);

export const addMake = make => dispatch => (
  dispatch(receiveMake(make))
);

export const addTransmission = transmission => dispatch => (
  dispatch(receiveTransmission(transmission))
);

export const addDrivetrain = drivetrain => dispatch => (
   dispatch(receiveDrivetrain(drivetrain))
);

const receiveAllCars = (cars) => ({
  type: RECEIVE_CARS,
  cars
});

const removeFilters = (toRemove) => ({
  type: REMOVE_FILTERS,
  target: toRemove
});

const receivePriceLimit = (limit) => ({
  type: RECEIVE_PRICE_LIMIT,
  limit
});

const receiveMileLimit = (limit) => ({
  type: RECEIVE_MILE_LIMIT,
  limit
});

const receiveBodyStyle = (style) => ({
  type: RECEIVE_BODY_STYLE,
  body: style
});

const receiveMake = (make) => ({
  type: RECEIVE_MAKE,
  make
});

const receiveTransmission = (transmission) => ({
  type: RECEIVE_TRANSMISSION,
  transmission
});

const receiveDrivetrain = (drivetrain) => ({
  type: RECEIVE_DRIVETRAIN,
  drivetrain
});