import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
export default function(){
    console.log(this.props)
    return(
        <div>
            <p>{this.state.name}</p>
            <Link to="/">Homes</Link>
        </div>
    )
}