import less from   '../less/admin.less';
import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { Button } from 'antd';

import {createStore} from 'redux';

import reducer from '../redux/reducers/counter';
import {increment,recrement} from '../redux/actions/index.js';

import App from '../redux/adminApp';
const store = createStore(reducer)
store.subscribe(()=>{console.log('State updated',store.getState())}) 

const render = ()=>{
    ReactDom.render(
        <App 
        onRe={()=>{store.dispatch(recrement())}} 
        onAdd={()=>{store.dispatch(increment())}} 
        value={store.getState()}/>,
        document.getElementById('app')
    )
}
render()
store.subscribe(render)