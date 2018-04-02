import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index.js';

class User extends Component{
    
    render(){
        let {user,data} = this.props;
        return(
            <div>
                {data.err ? data.err : data.isFetching? '加载中。。' :data.email }
                <button  onClick={()=>user()} type="button" className="btn btn-success">user</button>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    return{
        data:state.email
    }
}

const mapDispatchToProps = (dispatch)=>{
    
    return bindActionCreators(actions,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(User)