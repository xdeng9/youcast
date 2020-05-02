import React from 'react';

class VideoShow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { video } = this.props;
        return (
            <div>
                <video controls>
                    <source src={video.videoUrl} type="video/mp4"/>
                </video>
            </div>
        )
    }
}

export default VideoShow;