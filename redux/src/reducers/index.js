import { combineReducers } from 'redux';
import counter from './counter.js';
import user from './user.js';
const rootReducer = combineReducers({
    counter,
    email:user
})
export default rootReducer;