import less from '../less/index.less';
import React from 'react';
import ReactDOM from 'react-dom';


class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    onChange = (e)=>{
        this.setState({ 
            value:e.target.value 
        });
    }
    render() {
        return (
            <div>
                <div className="conten_ok">
                 Hello Less
                </div>
                <div className="conten">
                    <div className='sj'></div>
                    <ul className='width'>
                        <li className='li_1'><a href="">1</a></li>
                        <li className='li_2'><a href="">2</a></li>
                        <li className='li_3'><a href="">3</a></li>
                        <li className='li_4'><a href="">4</a></li>
                        <li className='li_5'><a href="">5</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, document.getElementById('app'));

