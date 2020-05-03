import { connect } from 'react-redux';
import VideoShow from './video_show';
import { filterVideos } from '../../util/selectors';
import { fetchVideo } from '../../actions/video';

const mapStateToProps = (state, ownProps) => ({
    video: state.entities.videos[ownProps.match.params.videoId],
    currentUser: state.entities.users[state.session.id],
    videoList: filterVideos(Object.values(state.entities.videos).slice(0, 10), ownProps.match.params.videoId)
})

const mapDispatchToProps = dispatch => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId))
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);