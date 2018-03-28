
import less from  '../less/index.less';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { HashRouter,IndexRoute , Route, Link } from 'react-router-dom'
import Home from './common/homepage.js';

import Router1 from './router1/main.js';
import Router2 from './router2/main.js';
import Router3 from './router3/main.js';
class App extends Component{
    constructor(props){
        super(props);
       
        this.state={}
    }
    
    componentWillMount(){
       
    }
    componentDidMount(){
    }
    
    render(){
        return (
            <HashRouter>
                <div id='Router'>
                    <Route exact path="/" component={Home}/>
                    <Route path="/router1" component={Router1}/>
                    <Route path="/router2" component={Router2}/>
                    <Route path="/router3" component={Router3}/>
                </div>
            </HashRouter>
        )
    }
}
ReactDom.render(
    <App/>,
    document.getElementById('app')
)
