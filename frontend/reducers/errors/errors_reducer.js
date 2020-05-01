import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import videoErrorsReducer from './video_errors_reducer';

const errorsReducer = combineReducers({
    video: videoErrorsReducer,
    session: sessionErrorsReducer
})

export default errorsReducer;