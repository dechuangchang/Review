import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore ,applyMiddleware} from 'redux';
import rootReducer from './reducers/index.js';
import logger from 'redux-logger'; //第三方中间件 控制台log
import ReduxThunk  from 'redux-thunk';// dispatch异步
import { Provider  } from 'react-redux';


const store = createStore(rootReducer,{},applyMiddleware(logger,ReduxThunk));
ReactDOM.render(
    <Provider store={store}>
    <App store={store}/>
    </Provider >
, document.getElementById('root'))

registerServiceWorker();
