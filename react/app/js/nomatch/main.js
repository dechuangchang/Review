import React, { Component } from 'react';
import ReactDom from 'react-dom';
import TplDom from './tpl'
class App  extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'404'
        }
    }
    componentWillMount(){

    }
    componentDidMount(){

    }
    componentWillReceiveProps(props){

    }
    render(){
        return TplDom.call(this)
    }
}
export default App;