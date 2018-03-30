import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import counter from './reducers/counter.js';

const store = createStore(counter);


const render=()=>{
    ReactDOM.render(
        <App
        onAdd={ () => store.dispatch({ type:'ADD'})}
        onRee={ () => store.dispatch({ type:'REE'})}
        value = {store.getState()}
        />
    , document.getElementById('root'))
}
render()
store.subscribe(render);

registerServiceWorker();
