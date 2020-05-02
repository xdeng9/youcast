import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos, fetchVideo } from '../../actions/video';

const mapStateToProps = state => ({
    videos: Object.values(state.entities.videos)
})

const mapDispatchToProps = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos())
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);