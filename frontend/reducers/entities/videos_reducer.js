import { RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO } from '../../actions/action_constants';

const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEO:
            return Object.assign({}, state, { [action.video.id]: action.video })
        case RECEIVE_VIDEOS:
            return action.videos;
        case REMOVE_VIDEO:
            let nextState = Object.assign({}, state)
            delete nextState[action.videoId];
            return nextState;
        default:
            return state;
    }
}

export default videosReducer