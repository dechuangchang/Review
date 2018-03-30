import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
 import * as actions from './actions/index.js'
class App extends Component {
  
  render() {
    const{add,ree} = this.props
    return (
      <div className="App">
        {this.props.value}
        <button onClick={()=>add('cdc','data')} type="button" className="btn btn-success">++</button>
        <button onClick={()=>ree()} type="button" className="btn btn-warning">--</button>
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
