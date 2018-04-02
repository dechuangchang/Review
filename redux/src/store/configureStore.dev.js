import { createStore ,applyMiddleware} from 'redux';
import rootReducer from '../reducers/index.js';
import logger from 'redux-logger'; //第三方中间件 控制台log
import ReduxThunk  from 'redux-thunk';// dispatch异步
import promiseMiddleware from 'redux-promise-middleware'; //promise

const configureStore = (preloadedStart) => {
    const store = createStore(
        rootReducer,
        preloadedStart,
        applyMiddleware(logger,ReduxThunk,promiseMiddleware())
    );

    if (process.env.NODE_ENV !== "production") {
        if (module.hot) {
          module.hot.accept('../reducers/index.js', () => {
            store.replaceReducer(rootReducer)
          })
        }
    }
    return store
}
export default configureStore