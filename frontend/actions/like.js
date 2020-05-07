import { RECEIVE_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from './action_constants';
import * as LikeAPIUtil from '../util/like_api_util';

const receiveLikes = likes => ({
    type: RECEIVE_LIKES,
    likes 
})

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
})

const removeLike = likeId => ({
    type: REMOVE_LIKE,
    likeId
})

export const fetchLikes = videoId => dispatch => LikeAPIUtil.fetchLikes(videoId)
    .then(likes => dispatch(receiveLikes(likes)));

export const createLike = like => dispatch => LikeAPIUtil.createLike(like)
    .then(like => dispatch(receiveLike(like)));

export const updateLike = (likeId, like) => dispatch => LikeAPIUtil.updateLike(likeId, like)
    .then(like => dispatch(receiveLike(like)));

export const deleteLike = likeId => dispatch => LikeAPIUtil.deleteLike(likeId)
    .then(like => dispatch(removeLike(likeId)));