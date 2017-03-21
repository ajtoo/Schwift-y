import * as SearchApi from '../util/search_api_util';

export const RECEIVE_CARS = "RECEIVE_CARS";
export const RECEIVE_PRICE_LIMIT = "RECEIVE_PRICE_LIMIT";
export const RECEIVE_MILE_LIMIT = "RECEIVE_MILE_LIMIT";
export const RECEIVE_BODY_STYLE = "RECEIVE_BODY_STYLE";
export const RECEIVE_MAKE = "RECEIVE_MAKE";

export const getAllCars = () => dispatch => (
  SearchApi.getAllCars().then(cars => dispatch(receiveAllCars(cars)))
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

export const receiveAllCars = (cars) => ({
  type: RECEIVE_CARS,
  cars
});

export const receivePriceLimit = (limit) => ({
  type: RECEIVE_PRICE_LIMIT,
  limit
});

export const receiveMileLimit = (limit) => ({
  type: RECEIVE_MILE_LIMIT,
  limit
});

export const receiveBodyStyle = (style) => ({
  type: RECEIVE_BODY_STYLE,
  body: style
});

export const receiveMake = (make) => ({
  type: RECEIVE_MAKE,
  make
});