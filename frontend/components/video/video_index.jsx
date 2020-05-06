import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideos();
    }

    render() {
        const { videos } = this.props
        return (
            <div className="main-content-videos"> 
                <div className="recomended">Recommended</div>   
                <div className="videos-outer-wrapper">
                    <ul className="videos-container">
                        { videos.map(video => {
                            return <VideoIndexItem key={video.id} video={video}/>
                        }) }
                    </ul>
                </div>
            </div>
        )
    }
}

export default VideoIndex;