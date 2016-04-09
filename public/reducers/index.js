import { combineReducers } from 'redux';
import subscribeReducer from './subscribeReducer';

let reducers = combineReducers({
    subscribeState: subscribeReducer
});

export default reducers;