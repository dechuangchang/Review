
import less from  '../less/index.less';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Redirect,HashRouter ,IndexRoute ,Switch, Route, Link } from 'react-router-dom';
import Header from './common/header.js';
import Home from './common/homepage.js';

import Router1 from './router1/main.js';
import Router2 from './router2/main.js';
import Router3 from './router3/main.js';
import NoMatch from './nomatch/main.js';

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
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/router1/:name?" component={Router1}/>
                        <Route exact path="/router2" component={Router2}/>
                        <Route exact path="/router3" component={Router3}/>
                        <Route  component={NoMatch}/>
                    </Switch>    
                </div>
            </HashRouter>
        )
    }
}
ReactDom.render(
    <App/>,
    document.getElementById('app')
)
