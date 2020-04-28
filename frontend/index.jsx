import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store/store';
import { signup, login, logout } from './actions/session';

import { receiveUser } from './actions/session';

document.addEventListener('DOMContentLoaded', () => {

    const store = configureStore();

    window.signup = signup;
    window.login = login;
    window.logout = logout;

    window.receiveUser = receiveUser;
    window.store = store;
    window.dispatch = store.dispatch;
    window.getState = store.getState;

    ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
})