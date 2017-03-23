import * as CarApi from '../util/car_api_util'

export const RECEIVE_CAR = "RECEIVE_CAR";

export const getCar = (id) => dispatch => (
  CarApi.getCar(id).then(car => dispatch(receiveCar(car)))
);

const receiveCar = (car) => ({
  type: RECEIVE_CAR,
  car
});
