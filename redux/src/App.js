import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
 import {add,ree} from './actions/index.js'
class App extends Component {
  
  render() {
    const {dispatch} = this.props
    return (
      <div className="App">
        {this.props.value}
        <button onClick={()=>dispatch(add('++',{a:1,b:2}))} type="button" className="btn btn-success">++</button>
        <button onClick={()=>dispatch(ree('--',{a:1,b:2}))} type="button" className="btn btn-warning">--</button>
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

// const mapDispatchToProps = (dispatch)=>{
   
//     return{
//         dispatch:bindActionCreators(dispatch)
//     }
    
// }
export default connect(mapStateToProps)(App);
