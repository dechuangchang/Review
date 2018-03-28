import Add from './common/lib.js';
import less from  '../less/index.less';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
// import DatePicker from 'antd/lib/date-picker';
import { DatePicker } from 'antd';
class App extends Component {
    render() {
        return <h1>
            <Add/>
             Hello, world!
             <DatePicker />
             </h1>
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
)
