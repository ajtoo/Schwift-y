import * as SessionApi from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT = "LOGOUT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const login = user => dispatch => (
  SessionApi.login(user).then(user => dispatch(receiveCurrentUser(user)),
                              err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  SessionApi.login().then(user => dispatch(receiveLogout(user)),
                          err => dispatch(receiveErrors(err.responseJSON)))
);

export const signup = user => dispatch => (
  SessionApi.signup(user).then(user => dispatch(receiveCurrentUser(user)))
);

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const receiveLogout = () => ({
  type: LOGOUT
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});