import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import VideoIndexContainer from '../components/video/video_index_container'
import { ProtectedRoute } from '../util/route_util';
import NavContainer from './nav/nav_container';
import SidebarContainer from './sidebar/sidebar_container';
import VideoShowContainer from './video/video_show_container';
import VideoUploadContainer from './video/video_upload_container';
import VideoEditContainer from './video/video_edit_container';

const App = () => {
    return (
        <div className="app">
            <NavContainer />
            <div className="main-content">
                <SidebarContainer />
                <Switch>
                    <Route exact path="/" component={VideoIndexContainer} />
                    <Route path="/watch/:videoId" component={VideoShowContainer} />
                    <ProtectedRoute exact path="/upload" component={VideoUploadContainer} />
                    <ProtectedRoute exact path="/edit/:videoId" component={VideoEditContainer}/>
                    <Redirect to="/" />
                </Switch>
            </div>  
        </div>
    )
}

export default App;