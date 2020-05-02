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
            <div>
                <h3 className="recomended">Recomended</h3>
                <div className="content-container">
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