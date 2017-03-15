import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

//TODO: delete testing imports
import {signup, login, logout} from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    //TODO: take testing items off window
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.store = store;

    ReactDOM.render(<Root store={store}/>, root);
});