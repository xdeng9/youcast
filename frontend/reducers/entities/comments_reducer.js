import {
    RECEIVE_COMMENTS,
    RECEIVE_COMMENT,
    REMOVE_COMMENT 
} from '../../actions/action_constants';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return action.comments 
        case RECEIVE_COMMENT:
            return Object.assign({}, state, { [action.comment.id]: action.comment })
        case REMOVE_COMMENT:
            let nextState = Object.assign({}, state);
            delete nextState[action.commentId]
            return nextState;
        default:
            return state;
    }
}

export default commentsReducer;