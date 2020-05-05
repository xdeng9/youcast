import {
    RECEIVE_COMMENTS,
    RECEIVE_COMMENT,
    REMOVE_COMMENT
} from './action_constants';
import * as CommentAPI from '../util/comment_api_util'

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments 
})

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment 
})

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId 
})

export const fetchComments = videoId => dispatch => CommentAPI.fectchComments(videoId)
    .then(comments => dispatch(receiveComments(comments)));

export const createComment = comment => dispatch => CommentAPI.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)));

export const updateComment = (commentId, comment) => dispatch => CommentAPI.updateComment(commentId, comment)
    .then(comment => dispatch(receiveComment(comment)));

export const deleteComment = commentId => dispatch => CommentAPI.deleteComment(commentId)
    .then(comment => dispatch(removeComment(comment.id)));
