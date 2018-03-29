import less from   '../less/admin.less';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Button } from 'antd';

import {createStore} from 'redux';
import rootReducer from '../redux/reducers/index.js';
import {increment,recrement} from '../redux/actions/index.js';



import App from '../redux/adminApp';
import {Provider} from 'react-redux';
const store = createStore(rootReducer)
store.subscribe(()=>{console.log('State updated',store.getState())}) 


ReactDom.render(
    <Provider store={store}>
    <App />
    </Provider>
    ,
    document.getElementById('app')
)
