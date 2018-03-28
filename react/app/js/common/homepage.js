import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show:false
        }
    }
    componentWillMount() {

    }
    componentDidMount() {

    }
    componentWillReceiveProps(props) {

    }
    click= ()=>{
        this.setState({
            show:!this.state.show
        },()=>{
            this.props.history.push('./ass/as')
        })
    }
    render() {
        return (
            <div className='homebox'>
                <Button onClick={this.click}>Default</Button>
                
            </div>
        )
    }
}
export default Home;