import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Button } from 'antd';


class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>{this.props.value}</h1>
                <Button onClick={this.props.onAdd}>++</Button>
                <Button onClick={this.props.onAdd}>--</Button>
            </div>
        )
    }
}
export default App