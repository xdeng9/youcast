import { connect } from 'react-redux';
import Like from './like';
import { fetchLikes, createLike, updateLike, deleteLike } from '../../actions/like';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    likes: Object.values(state.entities.likes)
})

const mapDispatchToProps = dispatch => ({
    fetchLikes: videoId => dispatch(fetchLikes(videoId)),
    createLike: like => dispatch(createLike(like)),
    updateLike: (likeId, like) => dispatch(updateLike(likeId, like)),
    deleteLike: likeId => dispatch(deleteLike(likeId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Like);