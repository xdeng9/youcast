import React from 'react';
import { Link } from 'react-router-dom';
import { filterVideos } from '../../util/selectors';

class VideoShow extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
        this.props.fetchVideos();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
            this.props.fetchVideo(this.props.match.params.videoId);
            window.location.reload();
        }
    }

    renderEdit() {
        if (this.props.currentUser !== undefined && this.props.video) {
            if (this.props.video.creator === this.props.currentUser.username) {
                return (
                    <Link to={`/edit/${this.props.video.id}`} className="user-edit hover">
                        <p>Edit video</p>
                    </Link>
                )
            }
        } 
        return null;
    }

    render() {
        let video = this.props.video;
        let videos = null, nextVideo = null;
        if (this.props.videoList.length !== 0) {
            videos = filterVideos(this.props.videoList, this.props.match.params.videoId);
            nextVideo = videos.pop();
        } 
        if (!videos || !nextVideo) return null;
        
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
                    <div className="show-video-details">
                        <div className="video-details-title">{video.title}</div>
                        <div className="view-date-like">
                            <div className="details-views-date">
                                <p>{video.view_count} views <span>&#5867;</span> {video.doc}</p>
                            </div>
                            <div className="details-likes hover">
                                <div className="thumb-up">
                                    <i className="fas fa-thumbs-up"></i>
                                </div>
                                <div className="thumb-down">
                                    <i className="fas fa-thumbs-down"></i>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="show-video-user-box">
                        <div className="user-box">
                            <i className="fas fa-user-circle user-icon"></i>
                            <div className="creator-details">
                                <p>{video.creator}</p>
                            </div>
                        </div>
                        {this.renderEdit()}
                    </div>
                    <div className="show-video-details-description">
                        <p>
                            {video.description}
                        </p>
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
                    <ul className="videos-list">
                        { videos.map(video => {
                            return (
                                <li className="after-next" key={video.id}>
                                    <Link to={`/watch/${video.id}`} className="next-video-container">
                                        <div className="video-list-thumbnail">
                                            <img src={video.thumbnail} alt="video" />
                                        </div>
                                        <div className="video-info">
                                            <h2>{video.title}</h2>
                                            <p className="creator-name">{video.creator}</p>
                                            <div className="view-dot-date">
                                                <p>{video.view_count} views <span>&#5867;</span> {nextVideo.doc}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default VideoShow;