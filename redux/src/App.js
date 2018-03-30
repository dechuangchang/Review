import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
class App extends Component {
  
  render() {
    
    console.log(this.props.dispatch)
    return (
      <div className="App">
        {this.props.value}
        <button type="button" className="btn btn-success">++</button>
        <button type="button" className="btn btn-warning">--</button>
      </div>
    );
  }
}

//如果定义该参数，组件将会监听 Redux store 的变化。任何时候，只要 Redux store 发生改变，
const mapStateToProps = (state,ownProps)=>{
    console.log(state)
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
