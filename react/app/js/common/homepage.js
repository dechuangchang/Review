import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num:0
        }
    }
    componentWillMount() {

    }
    componentDidMount() {

    }
    componentWillReceiveProps(props) {

    }
    click= (type)=>{
        if(type){
            this.setState({
                num:this.state.num+1 
            })
        }else{
            this.setState({
                num:this.state.num-1 
            })
        }
    }
    render() {
        return (
            <div className='homebox'>
                <p>{this.state.num}</p>
                <Button onClick={()=>this.click(true)}>++</Button>
                <Button onClick={()=>this.click(false)}>--</Button>
            </div>
        )
    }
}
export default Home;