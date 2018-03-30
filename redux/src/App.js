import React, { Component } from 'react';

import { connect } from 'react-redux';
class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.value}
        <button type="button" className="btn btn-success">++</button>
        <button type="button" className="btn btn-warning">--</button>
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
    console.log(state); // state
    console.log(arguments[1]); // undefined
    return{
        value:state
    }
}//把值传到props
export default connect(mapStateToProps)(App);
