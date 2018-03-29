import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
export default function(){
    return(
        <div className='router2'>
            <p>{this.state.name}</p>
            <Link to="/">Homes</Link>
        </div>
    )
}