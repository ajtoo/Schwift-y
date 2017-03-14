import React from 'react';
import ReactDOM from 'react-dom';

//TODO: delete testing imports
import {signup, login, logout} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    window.signup = signup;
    window.login = login;
    window.logout = logout;

    ReactDOM.render(<h1>Everybody get schwiftyyy!!</h1>, root);
});