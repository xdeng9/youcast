import { RECEIVE_CURRENT_USER } from '../../actions/action_constants';

const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user })
        default:
            return state;
    }
}

export default usersReducer;