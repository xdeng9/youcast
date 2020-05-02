import { connect } from 'react-redux';
import VideoShow from './video_show';
import { filterVideos } from '../../util/selectors';

const mapStateToProps = (state, ownProps) => ({
    video: state.entities.videos[ownProps.match.params.videoId],
    currentUser: state.entities.users[state.session.id],
    videList: filterVideos(Object.values(state.entities.videos).slice(0, 10), ownProps.match.params.videoId)
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);