import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo, fetchVideos } from '../../actions/video';

const mapStateToProps = (state, ownProps) => ({
    video: state.entities.videos[ownProps.match.params.videoId],
    currentUser: state.entities.users[state.session.id],
    videoList: Object.values(state.entities.videos).slice(0, 10)
})

const mapDispatchToProps = dispatch => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    fetchVideos: () => dispatch(fetchVideos())
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);