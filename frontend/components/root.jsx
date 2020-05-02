import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom';
import App from './app';
import { AuthRoute } from '../util/route_util';
import LoginContainer from './auth/login_container';
import SignupFormContainer from './auth/signup_container';

const Root = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <Switch>
                    <AuthRoute exact path="/login" component={LoginContainer} />
                    <AuthRoute exact path="/signup" component={SignupFormContainer} />
                    <Route path="/" component={App}/>
                    <Redirect to="/" />
                </Switch>
            </HashRouter>
        </Provider>
    )
}

export default Root;