import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import rootReducer from './reducers/index.js';
// import {add,ree} from './actions/index.js';
import { Provider  } from 'react-redux';
const store = createStore(rootReducer);
ReactDOM.render(
    <Provider store={store}>
    <App store={store}/>
    </Provider >
, document.getElementById('root'))

registerServiceWorker();
