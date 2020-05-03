import React from 'react';
import { Link } from 'react-router-dom';

class VideoShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            video: null
        }
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    render() {
        let video = this.props.video;
        let videos = this.props.videoList;
        let nextVideo = videos.pop();
        if (!video) return null;
        console.log(nextVideo.videoUrl)
        return (
            <div className="watch-video-container">
                <div className="left-container">
                    <div className="video-container">
                        <video 
                            className="vid"
                            controls 
                            autoPlay
                            controlsList="nodownload">
                            <source src={video.videoUrl} type="video/mp4" />
                        </video>
                    </div> 
                </div>
                <div className="right-container">
                    <div className="up-next">
                        <h1 className="next-text">Up next</h1>
                        <Link to={`/watch/${nextVideo.id}`} className="next-video-container">
                            <div className="video-list-thumbnail">
                                <img src={nextVideo.thumbnail} alt="video"/>
                            </div>
                            <div className="video-info">
                                <h2>{nextVideo.title}</h2>
                                <p className="creator-name">{nextVideo.creator}</p>
                                <div className="view-dot-date">
                                    <p>{nextVideo.view_count} views <span>&#5867;</span> {nextVideo.doc}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="videos-list">

                    </div>
                </div>
            </div>
        )
    }
}

export default VideoShow;