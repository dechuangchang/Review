import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.value}
        <button type="button" onClick={()=>this.props.onAdd()} className="btn btn-success">++</button>
        <button type="button" onClick={()=>this.props.onRee()} className="btn btn-warning">--</button>
      </div>
    );
  }
}

export default App;
