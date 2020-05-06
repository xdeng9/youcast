import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchComments, createComment, updateComment, deleteComment } from '../../actions/comment';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    comments: Object.values(state.entities.comments)
})

const mapDispatchToProps = dispatch => ({
    fetchComments: videoId => dispatch(fetchComments(videoId)),
    createComment: comment => dispatch(createComment(comment)),
    updateComment: comment => dispatch(updateComment(comment)),
    deleteComment: commentId => dispatch(deleteComment(commentId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);