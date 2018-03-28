import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
class Home extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    componentWillMount(){

    }
    componentDidMount(){

    }
    componentWillReceiveProps(props){

    }
    render(){
        return(
            <div className='homebox'>
                <Link to="/router1">Router_1</Link>
                <Link to="/router2">Router_2</Link>
                <Link to="/router3">Router_3</Link>
            </div>
        )
    }
}
export default Home;