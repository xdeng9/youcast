import React from 'react';
import { fetchVideo } from '../../util/video_api_util';

class VideoIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            view_count: '',
            thumbnail: '',
            videoUrl: ''
        }
    }

    componentDidMount() {
        fetchVideo(1).then(video => this.setState({
            title: video.title,
            description: video.description,
            view_count: video.view_count,
            thumbnail: video.thumbnail,
            videoUrl: video.videoUrl
        }));
    }

    renderVideo() {
        return (
            <video src={this.state.videoUrl} controls></video>
        )
    }

    render() {
        return (
            <div>
                <h3>{this.state.title}</h3>
                <p>{this.state.description}</p>
                <p>{this.state.view_count}</p>
                {this.state.videoUrl === '' ? null : this.renderVideo()}
                
            </div>
        )
    }
}

export default VideoIndex;