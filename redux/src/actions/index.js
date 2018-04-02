import axios from 'axios'
import {ADD,REE} from '../constants/index.js';

export const add = (name,data)=>{
    return dispatch => {
        setTimeout(()=>{
            dispatch({
                type:ADD,
                name,
                data
            })
        },1)
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
    // return dispatch => {
    //     dispatch({
    //         type:'GETSTATE'
    //     })
    //     axios.get('https://randomuser.me/apsi/')
        
    //     .then(res=>{
    //         dispatch({
    //             type:EMAIL,
    //             email:res.data.results[0].email
    //         })
    //     })
    //     .catch(error=>{
    //         dispatch({
    //             type:'ERROR',
    //             error:error.message
    //         })
    //     })
        
    // }
    return {
        type:'LOAD_USER',
        payload:axios.get('https://randomuser.me/api/')
    }
}

