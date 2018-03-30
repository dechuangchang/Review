import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';

import counter from './reducers/counter.js';
import {add,ree} from './actions/index.js';
const store = createStore(counter);
console.log(add,ree)
const render=()=>{
    ReactDOM.render(
        <App
        onAdd={ () => store.dispatch(add())}
        onRee={ () => store.dispatch(ree())}
        value = {store.getState()}
        />
    , document.getElementById('root'))
}
render()
store.subscribe(render);

registerServiceWorker();
