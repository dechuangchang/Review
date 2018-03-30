import axios from 'axios'
import {ADD,REE,EMAIL} from '../constants/index.js';

export const add = (name,data)=>{
    return dispatch => {
        setTimeout(()=>{
            dispatch({
                type:ADD,
                name,
                data
            })
        },1000)
    }
}
export const ree = (name,data)=>{
    return{
        type:REE,
        name,
        data
    }
}
export const user = (name,data)=>{
    return dispatch => {
        
        axios.get('https://randomuser.me/api/')
        .then(res=>{
            dispatch({
                type:EMAIL,
                data:res.data.results[0].email
            })
        },err=>{
            console.log(err)
        })
        
    }
}
