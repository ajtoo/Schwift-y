import React from 'react';
import ReactDOM from 'react-dom';

//TODO: delete testing imports
import {signup, login, logout} from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    //TODO: take testing items off window
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.store = configureStore();

    ReactDOM.render(<h1>Everybody get schwiftyyy!!</h1>, root);
});