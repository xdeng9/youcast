import { RECEIVE_VIDEO, RECEIVE_VIDEO_ERRORS, RECEIVE_VIDEOS } from '../../actions/action_constants';

const videoErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_VIDEO_ERRORS:
            return action.errors;
        case RECEIVE_VIDEO:
            return [];
        default:
            return state;
    }
}

export default videoErrorsReducer