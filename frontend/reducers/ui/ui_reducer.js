import { TOGGLE_SIDE_BAR } from '../../actions/action_constants';

const _initialState = {
    partial: true
};

const uiReducer = (state = _initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case TOGGLE_SIDE_BAR:
            let flag = !state.partial;
            return Object.assign({}, state, { partial: flag })
        default:
            return state;
    }
}

export default uiReducer;