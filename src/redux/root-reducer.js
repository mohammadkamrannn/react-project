import { combineReducers } from 'redux';
import recordsReducers from './reducer';

const rootReducer = combineReducers({
    data: recordsReducers,
});

export default rootReducer;