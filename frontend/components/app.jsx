import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import VideoIndexContainer from '../components/video/video_index_container'

import NavContainer from './nav/nav_container';
import SidebarContainer from './sidebar/sidebar_container';
import VideoShowContainer from './video/video_show_container';

const App = () => {
    return (
        <div className="app">
            <NavContainer />
            <div className="main-content">
                <SidebarContainer />
                <Switch>
                    <Route exact path="/" component={VideoIndexContainer} />
                    <Route path="/watch/:videoId" component={VideoShowContainer} />
                    <Redirect to="/" />
                </Switch>
            </div>  
        </div>
    )
}

export default App;