import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index.js';
import User from './User.js'
class App extends Component {
  
  render() {
    const {add,ree} = this.props;
    return (
      <div className="App">
        {this.props.value}
        <button onClick={()=>add(1,2)} type="button" className="btn btn-success">++</button>
        <button onClick={()=>ree(9,8)} type="button" className="btn btn-warning">--</button>
        <User/>
      </div>
    );
  }
}

//如果定义该参数，组件将会监听 Redux store 的变化。任何时候，只要 Redux store 发生改变，
const mapStateToProps = (state,ownProps)=>{
    return{
        value:state.counter
    }
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators(actions,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
