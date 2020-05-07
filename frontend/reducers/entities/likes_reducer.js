import {
    RECEIVE_LIKES, RECEIVE_LIKE, REMOVE_LIKE
} from '../../actions/action_constants';

const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LIKES:
            return action.likes;
        case RECEIVE_LIKE:
            return Object.assign({}, state, { [action.like.id]: action.like });
        case REMOVE_LIKE:
            let nextState = Object.assign({}, state);
            delete nextState[action.likeId];
            return nextState;
        default:
            return state;
    }
}

export default likesReducer;