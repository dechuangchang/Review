import { createStore ,applyMiddleware} from 'redux';
import rootReducer from '../reducers/index.js';
import ReduxThunk  from 'redux-thunk';// dispatch异步
import promiseMiddleware from 'redux-promise-middleware'; //promise

const configureStore = (preloadedStart) => {
    const store = createStore(
        rootReducer,
        preloadedStart,
        applyMiddleware(ReduxThunk,promiseMiddleware())
    );
    return store
}
export default configureStore