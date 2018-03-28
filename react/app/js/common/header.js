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
            <div className='header'>
                <div className='nav'>
                    <Link to="/">Home</Link>
                    <Link to="/router1/2">Router_1</Link>
                    <Link to="/router2">Router_2</Link>
                    <Link to="/router3">Router_3</Link>
                    <Link to="/404">404</Link>
                </div>
            </div>
        )
    }
}
export default Home;