import * as APIUtil from '../util/session/session_api_util';
import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
    RECEIVE_SESSION_ERRORS
} from './action_constants';

export const receiveUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

const logoutUser = () => ({
    type: LOGOUT_CURRENT_USER
}) 

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const signup = formUser => dispatch => APIUtil.signUp(formUser)
    .then(user => dispatch(receiveUser(user)), 
          errors => dispatch(receiveErrors(errors))
    );

export const login = formUser => dispatch => APIUtil.logIn(formUser)
    .then(user => dispatch(receiveUser(user)),
          errors => dispatch(receiveErrors(errors))
    );

export const logout = () => dispatch => APIUtil.logOut()
    .then(() => dispatch(logoutUser()),
        errors => dispatch(receiveErrors(errors))
    );