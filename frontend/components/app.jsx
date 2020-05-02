import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import VideoIndexContainer from '../components/video/video_index_container'

import NavContainer from './nav/nav_container';
import VideoShowContainer from './video/video_show_container';

const App = () => {
    return (
        <div className="app">
            <Route path="/" component={NavContainer}/>
            <Switch>
                <Route exact path="/" component={VideoIndexContainer}/>
                <Route exact path="/watch/:videoId" component={VideoShowContainer}/>
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default App;