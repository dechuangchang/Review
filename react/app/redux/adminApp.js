import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import {increment,recrement} from './actions/index.js';
import { bindActionCreators } from 'redux';

class App extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        console.log(this.props)
        const {increment,recrement} = this.props;
        return(
            <div>
                <h1>{this.props.counter}</h1>
                <Button onClick={()=>increment('+++')}>++</Button>
                <Button onClick={()=>recrement('---')}>--</Button>
            </div>
        )
    }
}
const mapStateToProps  = (state) =>{
    return {
        counter:state.counter
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({ increment,recrement }, dispatch);
    // return {
    //   increment: (name) => { dispatch(increment(name)) },
    //   recrement: (name) => { dispatch(recrement(name)) }
    // }
// };
export default connect(mapStateToProps,{increment,recrement})(App)