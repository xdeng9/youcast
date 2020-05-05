import * as VideoApiUtil from '../util/video_api_util';
import { RECEIVE_VIDEOS, RECEIVE_VIDEO, RECEIVE_VIDEO_ERRORS, REMOVE_VIDEO } from './action_constants';

const receiveVideos = videos => ({
    type: RECEIVE_VIDEOS,
    videos 
})

const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video 
})

const removeVideo = videoId => ({
    type: REMOVE_VIDEO,
    videoId
})

const receiveVideoErrors = errors => ({
    type: RECEIVE_VIDEO_ERRORS,
    errors 
})

export const fetchVideos = () => dispatch => VideoApiUtil.fetchVideos()
    .then(videos => dispatch(receiveVideos(videos)),
        errors => dispatch(receiveVideoErrors(errors.responseJSON)));

export const fetchVideo = videoId => dispatch => VideoApiUtil.fetchVideo(videoId)
    .then(video => dispatch(receiveVideo(video)),
        errors => dispatch(receiveVideoErrors(errors.responseJSON)));

export const createVideo = formData => dispatch => VideoApiUtil.createVideo(formData)
    .then(video => dispatch(receiveVideo(video)),
        errors => dispatch(receiveVideoErrors(errors.responseJSON)));

export const updateVideo = (formData, videoId) => VideoApiUtil.updateVideo(formData, videoId)
    .then(video => dispatch(receiveVideo(video)),
        errors => dispatch(receiveVideoErrors(errors.responseJSON)));

export const deleteVideo = videoId => VideoApiUtil.deleteVideo(videoId)
    .then(() => dispatch(removeVideo(videoId)),
        errors => dispatch(receiveVideoErrors(errors.responseJSON)));