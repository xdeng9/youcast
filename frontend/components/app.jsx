import React from 'react';
import { Route } from 'react-router-dom';

import NavContainer from './nav/nav_container';
import LoginContainer from './auth/login_container';
import { AuthRoute } from '../util/route_util';

const App = () => {
    return (
        <div className="app">
            <Route exact path="/" component={NavContainer}/>
            <AuthRoute exact path="/login" component={LoginContainer}/>
        </div>
    )
}

export default App;