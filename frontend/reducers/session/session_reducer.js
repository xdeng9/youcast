import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from '../../actions/action_constants';

const _null_session = {
    id: null
}

export default (state = _null_session, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.user.id }
        case LOGOUT_CURRENT_USER:
            return _null_session
        default:
            return state
    }
}