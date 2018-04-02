

action -reducer--store

维持应用的 state；
提供 getState() 方法获取 state；
提供 dispatch(action) 方法更新 state；
通过 subscribe(listener) 注册监听器;
通过 subscribe(listener) 返回的函数注销监听器。

```

import { createStore ,applyMiddleware} from 'redux';
import rootReducer from './reducers/index.js';
import logger from 'redux-logger'; //第三方中间件 控制台log
import ReduxThunk  from 'redux-thunk';// dispatch异步
import { Provider  } from 'react-redux';

import promiseMiddleware from 'redux-promise-middleware'; //promise

const store = createStore(rootReducer,{},applyMiddleware(logger,ReduxThunk,promiseMiddleware()));

```