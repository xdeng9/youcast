import { combineReducers } from 'redux';
import sessionReducer from './session/session_reducer';
import entitiesReducer from './entities/entities_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer
})

export default rootReducer;