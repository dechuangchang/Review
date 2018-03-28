import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Progress} from 'antd';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: props.value,
            name: props.name,
            content:'Progress' 
        }
    }
    componentWillReceiveProps(nextProps){
        
        this.setState(Object.assign(this.state,nextProps))
    }
    
    render() {
        return(
            <Progress type="circle" percent={this.state.value} />
        )
    }
}
export default  App
