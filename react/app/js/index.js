
import less from  '../less/index.less';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Redirect,HashRouter ,IndexRoute ,Switch, Route, Link } from 'react-router-dom';
import Header from './common/header.js';
import Home from './common/homepage.js';

import Router1 from '../widget/router1/main.js';
import Router2 from '../widget/router2/main.js';
import Router3 from '../widget/router3/main.js';
import NoMatch from '../widget/nomatch/main.js';

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
                <Route render={({ location }) => (
                <div id='Router'>
                    <Header/>
                    <Switch>
                        <Route location={location} key={location.key} exact path="/" component={Home}/>
                        <Route location={location} key={location.key} exact path="/router1/:name?" component={Router1}/>
                        <Route location={location} key={location.key} exact path="/router2" component={Router2}/>
                        <Route location={location} key={location.key} exact path="/router3" component={Router3}/>
                        <Route location={location} key={location.key}  component={NoMatch}/>
                    </Switch>   
                </div>
                )}/>
            </HashRouter>
        )
    }
}
ReactDom.render(
    <App/>,
    document.getElementById('app')
)
